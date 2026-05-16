const SUPABASE_REST_ACCEPT = "application/json";

function cleanEnvValue(value = "") {
  return String(value).replace(/[\r\n\u2028\u2029]/g, "").trim();
}

function normalizeSupabaseUrl(value = "") {
  const cleaned = cleanEnvValue(value);
  if (!cleaned) return "";
  return cleaned.replace(/\/rest\/v1\/?$/i, "").replace(/\/$/, "");
}

export function getSupabaseConfig() {
  return {
    url: normalizeSupabaseUrl(process.env.SUPABASE_URL),
    anonKey: cleanEnvValue(process.env.SUPABASE_ANON_KEY),
    serviceRoleKey: cleanEnvValue(process.env.SUPABASE_SERVICE_ROLE_KEY),
  };
}

export function getPublicSupabaseConfig() {
  const { url, anonKey } = getSupabaseConfig();
  return {
    supabaseUrl: url,
    supabaseAnonKey: anonKey,
    configured: Boolean(url && anonKey),
  };
}

export function getBearerToken(request) {
  const header = request?.headers?.authorization || request?.headers?.Authorization || "";
  const match = String(header).match(/^Bearer\s+(.+)$/i);
  return match ? match[1].trim() : "";
}

function requireServerConfig() {
  const config = getSupabaseConfig();
  const missing = [
    !config.url ? "SUPABASE_URL" : "",
    !config.anonKey ? "SUPABASE_ANON_KEY" : "",
    !config.serviceRoleKey ? "SUPABASE_SERVICE_ROLE_KEY" : "",
  ].filter(Boolean);

  if (missing.length > 0) {
    const error = new Error("Supabase is not configured.");
    error.status = 503;
    error.missing = missing;
    throw error;
  }

  return config;
}

async function parseResponse(response) {
  const text = await response.text();
  if (!text) return null;
  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
}

export async function supabaseAdminRequest(path, options = {}) {
  const config = requireServerConfig();
  const response = await fetch(`${config.url.replace(/\/$/, "")}${path}`, {
    method: options.method || "GET",
    headers: {
      apikey: config.serviceRoleKey,
      Authorization: `Bearer ${config.serviceRoleKey}`,
      Accept: SUPABASE_REST_ACCEPT,
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    body: options.body ? JSON.stringify(options.body) : undefined,
  });

  const result = await parseResponse(response);
  if (!response.ok) {
    const error = new Error(result?.message || result?.error || "Supabase request failed.");
    error.status = response.status;
    error.detail = result;
    throw error;
  }

  return result;
}

export async function getAuthenticatedUser(request) {
  const config = requireServerConfig();
  const token = getBearerToken(request);
  if (!token) {
    const error = new Error("Sign in is required.");
    error.status = 401;
    throw error;
  }

  const response = await fetch(`${config.url.replace(/\/$/, "")}/auth/v1/user`, {
    headers: {
      apikey: config.anonKey,
      Authorization: `Bearer ${token}`,
      Accept: SUPABASE_REST_ACCEPT,
    },
  });
  const user = await parseResponse(response);
  if (!response.ok || !user?.id) {
    const error = new Error("Your login session is invalid or expired.");
    error.status = 401;
    error.detail = user;
    throw error;
  }

  return user;
}

export async function ensureProfile(user) {
  const email = user.email || user.user_metadata?.email || "";
  await supabaseAdminRequest("/rest/v1/profiles?on_conflict=id", {
    method: "POST",
    headers: { Prefer: "resolution=merge-duplicates" },
    body: {
      id: user.id,
      email,
      updated_at: new Date().toISOString(),
    },
  });
}

export async function createPendingOrder(user, checkoutContact = "") {
  const orderId = randomUUID();
  const email = user.email || checkoutContact || "";
  await supabaseAdminRequest("/rest/v1/orders", {
    method: "POST",
    body: {
      id: orderId,
      user_id: user.id,
      email,
      plan: "pro_lifetime",
      status: "pending",
      amount_inr: 299,
      metadata: { checkout_contact: checkoutContact },
    },
  });

  return { id: orderId, user_id: user.id, email };
}

export async function attachCheckoutToOrder(orderId, checkout = {}) {
  const sessionId = checkout.sessionId || checkout.id || "";
  await supabaseAdminRequest(`/rest/v1/orders?id=eq.${encodeURIComponent(orderId)}`, {
    method: "PATCH",
    headers: { Prefer: "return=minimal" },
    body: {
      dodo_checkout_id: sessionId || null,
      metadata: checkout.metadata || {},
      updated_at: new Date().toISOString(),
    },
  });
}

export async function getActiveEntitlement(userId) {
  const rows = await supabaseAdminRequest(
    `/rest/v1/entitlements?user_id=eq.${encodeURIComponent(userId)}&status=eq.active&select=*`,
  );
  return Array.isArray(rows) && rows.length > 0 ? rows[0] : null;
}

export async function requireActiveEntitlement(request) {
  const user = await getAuthenticatedUser(request);
  const entitlement = await getActiveEntitlement(user.id);
  if (!entitlement) {
    const error = new Error("Pro Lifetime access is not active for this account.");
    error.status = 403;
    throw error;
  }
  return { user, entitlement };
}

export async function activateLifetimeEntitlement({ userId, orderId, paymentId, eventId }) {
  const now = new Date().toISOString();
  await supabaseAdminRequest(`/rest/v1/orders?id=eq.${encodeURIComponent(orderId)}`, {
    method: "PATCH",
    headers: { Prefer: "return=minimal" },
    body: {
      status: "succeeded",
      dodo_payment_id: paymentId || null,
      dodo_event_id: eventId || null,
      updated_at: now,
    },
  });

  await supabaseAdminRequest("/rest/v1/entitlements?on_conflict=user_id", {
    method: "POST",
    headers: { Prefer: "resolution=merge-duplicates,return=minimal" },
    body: {
      user_id: userId,
      plan: "pro_lifetime",
      status: "active",
      order_id: orderId,
      dodo_payment_id: paymentId || null,
      activated_at: now,
      revoked_at: null,
      updated_at: now,
    },
  });
}

export async function markOrderAndEntitlement({ orderId, userId, status, eventId, paymentId }) {
  const now = new Date().toISOString();
  if (orderId) {
    await supabaseAdminRequest(`/rest/v1/orders?id=eq.${encodeURIComponent(orderId)}`, {
      method: "PATCH",
      headers: { Prefer: "return=minimal" },
      body: {
        status,
        dodo_payment_id: paymentId || null,
        dodo_event_id: eventId || null,
        updated_at: now,
      },
    });
  }

  if (userId && ["refunded", "disputed", "revoked"].includes(status)) {
    await supabaseAdminRequest(`/rest/v1/entitlements?user_id=eq.${encodeURIComponent(userId)}`, {
      method: "PATCH",
      headers: { Prefer: "return=minimal" },
      body: {
        status: "revoked",
        revoked_at: now,
        updated_at: now,
      },
    });
  }
}
import { randomUUID } from "node:crypto";
