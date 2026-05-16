import { ensureProfile, getActiveEntitlement, getAuthenticatedUser } from "../../backend/supabase-access.mjs";

function sendJson(response, statusCode, payload) {
  response.statusCode = statusCode;
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS");
  response.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");
  response.setHeader("Content-Type", "application/json; charset=utf-8");
  response.end(JSON.stringify(payload));
}

export default async function handler(request, response) {
  if (request.method === "OPTIONS") {
    sendJson(response, 204, {});
    return;
  }
  if (request.method !== "GET") {
    sendJson(response, 405, { ok: false, error: "Method not allowed" });
    return;
  }

  try {
    const user = await getAuthenticatedUser(request);
    await ensureProfile(user);
    const entitlement = await getActiveEntitlement(user.id);
    sendJson(response, 200, {
      ok: true,
      user: { id: user.id, email: user.email },
      entitlement,
      active: Boolean(entitlement),
    });
  } catch (error) {
    sendJson(response, error.status || 500, {
      ok: false,
      error: error.message,
      missing: error.missing,
      detail: error.detail,
    });
  }
}
