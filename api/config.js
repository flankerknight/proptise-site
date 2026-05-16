import { getPublicSupabaseConfig } from "../backend/supabase-access.mjs";

export default function handler(request, response) {
  response.statusCode = 200;
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Content-Type", "application/json; charset=utf-8");
  response.end(JSON.stringify(getPublicSupabaseConfig()));
}
