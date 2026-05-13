import { createDodoCheckout } from "../backend/dodo-checkout.mjs";

function sendJson(response, statusCode, payload) {
  response.statusCode = statusCode;
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Methods", "POST,OPTIONS");
  response.setHeader("Access-Control-Allow-Headers", "Content-Type");
  response.setHeader("Content-Type", "application/json; charset=utf-8");
  response.end(JSON.stringify(payload));
}

export default async function handler(request, response) {
  if (request.method === "OPTIONS") {
    sendJson(response, 204, {});
    return;
  }

  if (request.method !== "POST") {
    sendJson(response, 405, { error: "Method not allowed" });
    return;
  }

  try {
    const payload = typeof request.body === "object" && request.body ? request.body : JSON.parse(request.body || "{}");
    const result = await createDodoCheckout(payload, request);
    sendJson(response, result.status, result);
  } catch (error) {
    sendJson(response, 500, { ok: false, error: "Checkout failed", detail: error.message });
  }
}
