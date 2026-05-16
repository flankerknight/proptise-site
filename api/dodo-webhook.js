import { handleDodoWebhook } from "../backend/dodo-webhook.mjs";

export const config = {
  api: {
    bodyParser: false,
  },
};

function sendJson(response, statusCode, payload) {
  response.statusCode = statusCode;
  response.setHeader("Content-Type", "application/json; charset=utf-8");
  response.end(JSON.stringify(payload));
}

async function readRawBody(request) {
  if (typeof request.body === "string") return request.body;
  if (Buffer.isBuffer(request.body)) return request.body.toString("utf8");
  if (request.body && typeof request.body === "object") return JSON.stringify(request.body);
  const chunks = [];
  for await (const chunk of request) chunks.push(chunk);
  return Buffer.concat(chunks).toString("utf8");
}

export default async function handler(request, response) {
  if (request.method !== "POST") {
    sendJson(response, 405, { ok: false, error: "Method not allowed" });
    return;
  }

  try {
    const rawBody = await readRawBody(request);
    const result = await handleDodoWebhook(rawBody, request.headers || {});
    sendJson(response, 200, result);
  } catch (error) {
    sendJson(response, error.status || 500, { ok: false, error: error.message });
  }
}
