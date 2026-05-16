import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { dirname, extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";
import { createDodoCheckout } from "./dodo-checkout.mjs";
import { handleDodoWebhook } from "./dodo-webhook.mjs";
import { generateBestPrompt } from "./prompt-engine.mjs";
import { getPublicSupabaseConfig, getAuthenticatedUser, ensureProfile, getActiveEntitlement, requireActiveEntitlement } from "./supabase-access.mjs";

const rootDir = normalize(join(dirname(fileURLToPath(import.meta.url)), ".."));
const port = Number(process.env.PORT || 8787);

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".md": "text/markdown; charset=utf-8",
};

function sendJson(response, statusCode, payload) {
  response.writeHead(statusCode, {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type,Authorization,webhook-id,webhook-timestamp,webhook-signature,svix-id,svix-timestamp,svix-signature",
    "Content-Type": "application/json; charset=utf-8",
  });
  response.end(JSON.stringify(payload, null, 2));
}

async function readBody(request) {
  const chunks = [];
  for await (const chunk of request) chunks.push(chunk);
  return Buffer.concat(chunks).toString("utf8");
}

async function serveStatic(request, response) {
  const url = new URL(request.url, `http://${request.headers.host}`);
  const requestedPath = url.pathname === "/" ? "/index.html" : decodeURIComponent(url.pathname);
  const filePath = normalize(join(rootDir, requestedPath));

  if (!filePath.startsWith(rootDir)) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  try {
    const body = await readFile(filePath);
    response.writeHead(200, {
      "Content-Type": mimeTypes[extname(filePath)] || "application/octet-stream",
      "Cache-Control": "no-store",
    });
    response.end(body);
  } catch {
    response.writeHead(404);
    response.end("Not found");
  }
}

const server = createServer(async (request, response) => {
  if (request.method === "OPTIONS") {
    sendJson(response, 204, {});
    return;
  }

  if (request.url === "/api/health" && request.method === "GET") {
    sendJson(response, 200, { ok: true, service: "Genius Prompts backend" });
    return;
  }

  if (request.url === "/api/config" && request.method === "GET") {
    sendJson(response, 200, getPublicSupabaseConfig());
    return;
  }

  if (request.url === "/api/generate-prompt" && request.method === "POST") {
    try {
      const payload = JSON.parse(await readBody(request));
      if (!payload.category) {
        sendJson(response, 400, { error: "category is required" });
        return;
      }
      sendJson(response, 200, generateBestPrompt(payload));
    } catch (error) {
      sendJson(response, 500, { error: "Prompt generation failed", detail: error.message });
    }
    return;
  }

  if (request.url === "/api/generate-paid-prompt" && request.method === "POST") {
    try {
      await requireActiveEntitlement(request);
      const payload = JSON.parse(await readBody(request));
      if (!payload.category) {
        sendJson(response, 400, { ok: false, error: "category is required" });
        return;
      }
      sendJson(response, 200, generateBestPrompt(payload));
    } catch (error) {
      sendJson(response, error.status || 500, { ok: false, error: error.message, detail: error.detail });
    }
    return;
  }

  if (request.url === "/api/me/entitlement" && request.method === "GET") {
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
      sendJson(response, error.status || 500, { ok: false, error: error.message, missing: error.missing, detail: error.detail });
    }
    return;
  }

  if (request.url === "/api/create-checkout" && request.method === "POST") {
    try {
      const payload = JSON.parse(await readBody(request));
      const result = await createDodoCheckout(payload, request);
      sendJson(response, result.status, result);
    } catch (error) {
      sendJson(response, error.status || 500, { ok: false, error: error.message || "Checkout failed", missing: error.missing, detail: error.detail });
    }
    return;
  }

  if (request.url === "/api/dodo-webhook" && request.method === "POST") {
    try {
      const result = await handleDodoWebhook(await readBody(request), request.headers || {});
      sendJson(response, 200, result);
    } catch (error) {
      sendJson(response, error.status || 500, { ok: false, error: error.message });
    }
    return;
  }

  await serveStatic(request, response);
});

server.listen(port, () => {
  console.log(`Genius Prompts backend running at http://localhost:${port}`);
});
