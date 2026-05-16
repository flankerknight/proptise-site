# Genius Prompts

A dependency-free MVP for selling one Rs 299 lifetime Genius Prompts plan with Supabase email login, Dodo hosted checkout, webhook-based lifetime entitlements, and a Vercel-ready prompt-engine API.

## Run locally

For the full backend prompt-engine demo:

```bash
npm run dev
```

Then visit `http://localhost:8787`.

You can also open `index.html` directly in a browser. In that mode, the page will call the backend at `http://localhost:8787` if it is running and fall back to the browser engine if it is not.

Static-only server option:

```bash
python3 -m http.server 4173
```

Then visit `http://localhost:4173`.

## Test the post-payment page

After Dodo returns from checkout, the success URL is:

```text
http://localhost:8787/success.html?plan=pro&payment=dodo
```

That page checks Supabase for the logged-in user's lifetime entitlement. The URL alone does not unlock the dashboard.

## Test the prompt engine API

```bash
curl -X POST http://localhost:8787/api/generate-prompt \
  -H "Content-Type: application/json" \
  -d '{"category":"Auto, Cars & Bikers","intent":"tell me about Scorpio N vs Thar Roxx","language":"Hinglish"}'
```

## Configure payments

The checkout uses hosted Dodo Payments only:

- Plan: Pro Lifetime
- Price: Rs 299
- Gateway: Dodo Payments

Create one product in Dodo, create a Supabase project, run `supabase/schema.sql` in the Supabase SQL editor, and set these environment variables locally or in Vercel:

```text
DODO_PAYMENTS_ENVIRONMENT=live_mode
DODO_PAYMENTS_API_KEY=your_dodo_api_key
DODO_PRODUCT_LIFETIME=product_id_for_299_lifetime_plan
DODO_WEBHOOK_SECRET=your_dodo_webhook_secret
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
SITE_URL=https://www.proptise.site
```

- Do not collect card details directly on this site. Dodo checkout handles card payment collection on its hosted checkout page.

Add this webhook in Dodo:

```text
https://www.proptise.site/api/dodo-webhook
```

Subscribe to payment success, failure/cancel, refund, dispute/chargeback events where available. The webhook is the source of truth for Pro access.

## Deploy on Vercel

Low-cost path:

1. Push this folder to GitHub.
2. Open `https://vercel.com/new` and import the GitHub repo.
3. Keep the framework preset as Other / static if Vercel does not auto-detect one.
4. Add the Supabase and Dodo environment variables above in Project Settings > Environment Variables.
5. Deploy, then test:

```bash
curl -X POST https://your-vercel-domain.vercel.app/api/generate-prompt \
  -H "Content-Type: application/json" \
  -d '{"category":"Auto, Cars & Bikers","intent":"compare i20 vs i10","language":"English"}'
```

Production access is database-backed: users sign in with Supabase email OTP, Dodo sends payment events to the webhook, and the dashboard reads the active entitlement from Supabase.

## Launch checklist

- Run `supabase/schema.sql` in Supabase SQL editor.
- Add Supabase and Dodo environment variables in Vercel.
- Add Dodo webhook URL and secret.
- Keep legal pages current: refund policy, terms, privacy policy, contact.
