# Genius Prompts

A dependency-free MVP for selling expert AI request credits with a prompt-engine API, Vercel-ready deployment, Dodo checkout, and manual UPI fallback.

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

After submitting the manual UPI verification form, the demo redirects to:

```text
http://localhost:8787/success.html?plan=starter
```

That page shows the unlocked dashboard and a shared credit counter. The Starter Pack has 10 total expert AI request credits across all categories, not 10 per category.

## Test the prompt engine API

```bash
curl -X POST http://localhost:8787/api/generate-prompt \
  -H "Content-Type: application/json" \
  -d '{"category":"Auto, Cars & Bikers","intent":"tell me about Scorpio N vs Thar Roxx","language":"Hinglish"}'
```

## Configure payments

The checkout now has two paths:

- Primary: hosted Dodo Payments checkout for UPI and card payments.
- Fallback: manual UPI verification using the QR code and UPI ID `ambar8@ptyes`.

For Dodo checkout, create three products in Dodo and set these environment variables locally or in Vercel:

```text
DODO_PAYMENTS_ENVIRONMENT=test_mode
DODO_PAYMENTS_API_KEY=your_dodo_api_key
DODO_PRODUCT_STARTER=product_id_for_169_plan
DODO_PRODUCT_PLUS=product_id_for_299_plan
DODO_PRODUCT_PRO=product_id_for_499_plan
SITE_URL=https://your-vercel-domain.vercel.app
```

Use `live_mode` and live product IDs only after test payments work.

The manual checkout remains designed for the lowest-cost MVP:

- Users can scan the QR or copy the UPI ID into Google Pay, PhonePe, Paytm, BHIM, or any UPI app.
- The optional UPI deeplink opens the device's default registered UPI handler and may not let the site choose a specific app.
- Checkout shows the UPI QR image from `assets/genius-prompts-upi-qr.jpg`.
- Manual transaction ID form is frontend-only. Connect it to Google Forms, Formspree, Supabase, Firebase, or a custom backend before accepting real payments.
- Do not collect card details directly on this site. Dodo checkout handles card payment collection on its hosted checkout page.

## Deploy on Vercel

Low-cost path:

1. Push this folder to GitHub.
2. Open `https://vercel.com/new` and import the GitHub repo.
3. Keep the framework preset as Other / static if Vercel does not auto-detect one.
4. Add the Dodo environment variables above in Project Settings > Environment Variables.
5. Deploy, then test:

```bash
curl -X POST https://your-vercel-domain.vercel.app/api/generate-prompt \
  -H "Content-Type: application/json" \
  -d '{"category":"Auto, Cars & Bikers","intent":"compare i20 vs i10","language":"English"}'
```

For real automatic credit unlocks, add a payment webhook plus a database for orders/users/credits. Until then, the success dashboard is still a demo entitlement screen.

## Launch checklist

- Replace UPI ID and QR code.
- Add legal pages: refund policy, terms, privacy policy, contact.
- Connect manual verification form to a real inbox/database.
- Add Dodo webhook verification and database-backed credits before treating paid unlocks as production-secure.
