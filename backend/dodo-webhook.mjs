import { createHmac, timingSafeEqual } from "node:crypto";
import { activateLifetimeEntitlement, markOrderAndEntitlement } from "./supabase-access.mjs";

function cleanEnvValue(value = "") {
  return String(value).replace(/[\r\n\u2028\u2029]/g, "").trim();
}

function base64UrlToBase64(value = "") {
  return value.replace(/-/g, "+").replace(/_/g, "/").padEnd(Math.ceil(value.length / 4) * 4, "=");
}

function decodeWebhookSecret(secret = "") {
  const cleaned = cleanEnvValue(secret);
  if (cleaned.startsWith("whsec_")) {
    return Buffer.from(base64UrlToBase64(cleaned.slice(6)), "base64");
  }
  return Buffer.from(cleaned, "utf8");
}

function timingSafeEqualString(left, right) {
  const leftBuffer = Buffer.from(left, "utf8");
  const rightBuffer = Buffer.from(right, "utf8");
  if (leftBuffer.length !== rightBuffer.length) return false;
  return timingSafeEqual(leftBuffer, rightBuffer);
}

async function hmacSha256Base64(secret, payload) {
  return createHmac("sha256", decodeWebhookSecret(secret)).update(payload).digest("base64");
}

function getHeader(headers = {}, name) {
  return headers[name] || headers[name.toLowerCase()] || headers[name.toUpperCase()] || "";
}

export async function verifyDodoWebhookSignature({ headers, rawBody }) {
  const secret = cleanEnvValue(process.env.DODO_WEBHOOK_SECRET);
  if (!secret) {
    const error = new Error("Dodo webhook secret is not configured.");
    error.status = 503;
    throw error;
  }

  const webhookId = getHeader(headers, "webhook-id") || getHeader(headers, "svix-id");
  const timestamp = getHeader(headers, "webhook-timestamp") || getHeader(headers, "svix-timestamp");
  const signatureHeader = getHeader(headers, "webhook-signature") || getHeader(headers, "svix-signature");
  if (!webhookId || !timestamp || !signatureHeader) {
    const error = new Error("Missing webhook signature headers.");
    error.status = 401;
    throw error;
  }

  const signedPayload = `${webhookId}.${timestamp}.${rawBody}`;
  const expected = await hmacSha256Base64(secret, signedPayload);
  const signatures = String(signatureHeader)
    .split(" ")
    .flatMap((part) => part.split(","))
    .map((part) => part.trim().replace(/^v\d+,?/, ""))
    .filter(Boolean);

  if (!signatures.some((signature) => timingSafeEqualString(signature, expected))) {
    const error = new Error("Invalid webhook signature.");
    error.status = 401;
    throw error;
  }
}

function extractWebhookFields(event = {}) {
  const data = event.data || event.payload || event.object || {};
  const metadata = data.metadata || data.checkout?.metadata || data.payment?.metadata || event.metadata || {};
  const type = event.type || event.event_type || event.eventType || "";
  return {
    type: String(type).toLowerCase(),
    eventId: event.id || event.event_id || "",
    userId: metadata.user_id || metadata.userId || data.user_id || "",
    orderId: metadata.order_id || metadata.orderId || data.order_id || "",
    paymentId: data.payment_id || data.paymentId || data.id || event.payment_id || "",
  };
}

export async function handleDodoWebhook(rawBody, headers = {}) {
  await verifyDodoWebhookSignature({ headers, rawBody });
  const event = JSON.parse(rawBody || "{}");
  const fields = extractWebhookFields(event);

  if (!fields.orderId || !fields.userId) {
    return { ok: true, ignored: true, reason: "Missing order/user metadata." };
  }

  if (fields.type.includes("succeed") || fields.type.includes("paid") || fields.type.includes("completed")) {
    await activateLifetimeEntitlement(fields);
    return { ok: true, action: "activated" };
  }

  if (fields.type.includes("refund")) {
    await markOrderAndEntitlement({ ...fields, status: "refunded" });
    return { ok: true, action: "refunded" };
  }

  if (fields.type.includes("dispute") || fields.type.includes("chargeback")) {
    await markOrderAndEntitlement({ ...fields, status: "disputed" });
    return { ok: true, action: "disputed" };
  }

  if (fields.type.includes("fail") || fields.type.includes("cancel")) {
    await markOrderAndEntitlement({ ...fields, status: "failed" });
    return { ok: true, action: "failed" };
  }

  return { ok: true, ignored: true, eventType: fields.type };
}
