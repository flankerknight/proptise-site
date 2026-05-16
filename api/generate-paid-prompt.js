import { generateBestPrompt } from "../backend/prompt-engine.mjs";
import { requireActiveEntitlement } from "../backend/supabase-access.mjs";

function sendJson(response, statusCode, payload) {
  response.statusCode = statusCode;
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Methods", "POST,OPTIONS");
  response.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");
  response.setHeader("Content-Type", "application/json; charset=utf-8");
  response.end(JSON.stringify(payload));
}

export default async function handler(request, response) {
  if (request.method === "OPTIONS") {
    sendJson(response, 204, {});
    return;
  }

  if (request.method !== "POST") {
    sendJson(response, 405, { ok: false, error: "Method not allowed" });
    return;
  }

  try {
    await requireActiveEntitlement(request);
    const payload = typeof request.body === "object" && request.body ? request.body : JSON.parse(request.body || "{}");
    if (!payload.category) {
      sendJson(response, 400, { ok: false, error: "category is required" });
      return;
    }
    sendJson(response, 200, generateBestPrompt(payload));
  } catch (error) {
    sendJson(response, error.status || 500, {
      ok: false,
      error: error.message || "Prompt generation failed",
      detail: error.detail,
    });
  }
}
