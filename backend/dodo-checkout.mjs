import { attachCheckoutToOrder, createPendingOrder, ensureProfile, getAuthenticatedUser, getActiveEntitlement } from "./supabase-access.mjs";

const checkoutBaseUrls = {
  test_mode: "https://test.dodopayments.com",
  live_mode: "https://live.dodopayments.com",
};

const planCatalog = {
  pro: {
    name: "Pro Lifetime",
    credits: "lifetime",
    productEnv: "DODO_PRODUCT_LIFETIME",
    fallbackProductEnv: "DODO_PRODUCT_PLUS",
  },
};

function cleanEnvValue(value = "") {
  return String(value).replace(/[\r\n\u2028\u2029]/g, "").trim();
}

function isEmail(value = "") {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

function normalizePhone(value = "") {
  const trimmed = value.trim();
  if (!trimmed) return "";
  if (trimmed.startsWith("+")) return trimmed.replace(/\s+/g, "");
  const digits = trimmed.replace(/\D/g, "");
  if (digits.length === 10) return `+91${digits}`;
  if (digits.length === 12 && digits.startsWith("91")) return `+${digits}`;
  return "";
}

function getSiteUrl(request) {
  if (process.env.SITE_URL) return process.env.SITE_URL.replace(/\/$/, "");
  const host = request?.headers?.host || "localhost:8787";
  const protocol = host.includes("localhost") || host.includes("127.0.0.1") ? "http" : "https";
  return `${protocol}://${host}`;
}

export function getDodoConfig() {
  const environment = cleanEnvValue(process.env.DODO_PAYMENTS_ENVIRONMENT) || "test_mode";
  return {
    apiKey: cleanEnvValue(process.env.DODO_PAYMENTS_API_KEY),
    baseUrl: cleanEnvValue(process.env.DODO_PAYMENTS_BASE_URL) || checkoutBaseUrls[environment] || checkoutBaseUrls.test_mode,
    environment,
  };
}

export async function createDodoCheckout(payload = {}, request) {
  const planId = "pro";
  const plan = planCatalog[planId];
  if (!plan) {
    return { ok: false, status: 400, error: "Unknown plan selected." };
  }

  const user = await getAuthenticatedUser(request);
  await ensureProfile(user);
  const existingEntitlement = await getActiveEntitlement(user.id);
  if (existingEntitlement) {
    return {
      ok: true,
      status: 200,
      alreadyActive: true,
      dashboardUrl: `${getSiteUrl(request)}/success.html`,
    };
  }

  const { apiKey, baseUrl, environment } = getDodoConfig();
  const productId = cleanEnvValue(process.env[plan.productEnv] || process.env[plan.fallbackProductEnv]);
  if (!apiKey || !productId) {
    return {
      ok: false,
      status: 503,
      error: "Dodo checkout is not configured yet. Add the API key and product IDs in Vercel environment variables.",
      missing: [
        !apiKey ? "DODO_PAYMENTS_API_KEY" : "",
        !productId ? `${plan.productEnv} or ${plan.fallbackProductEnv}` : "",
      ].filter(Boolean),
    };
  }

  const contact = String(payload.contact || "").trim();
  const order = await createPendingOrder(user, contact || user.email || "");
  const customer = {};
  if (isEmail(contact || user.email)) customer.email = contact || user.email;
  const phone = normalizePhone(contact);
  if (phone) customer.phone_number = phone;

  const siteUrl = getSiteUrl(request);
  const checkoutPayload = {
    product_cart: [{ product_id: productId, quantity: 1 }],
    billing_currency: "INR",
    billing_address: {
      country: "IN",
      zipcode: "000000",
    },
    minimal_address: true,
    return_url: `${siteUrl}/success.html?plan=pro&contact=${encodeURIComponent(contact)}&payment=dodo`,
    cancel_url: `${siteUrl}/#pricing`,
    short_link: true,
    metadata: {
      source: "genius_prompts_web",
      plan_id: planId,
      plan_name: plan.name,
      credits: String(plan.credits),
      environment,
      user_id: user.id,
      order_id: order.id,
      customer_email: user.email || contact,
    },
  };

  if (Object.keys(customer).length > 0) checkoutPayload.customer = customer;

  const response = await fetch(`${baseUrl.replace(/\/$/, "")}/checkouts`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(checkoutPayload),
  });

  const result = await response.json().catch(() => ({}));
  if (!response.ok) {
    return {
      ok: false,
      status: response.status,
      error: result?.message || result?.error || "Dodo checkout could not be created.",
      detail: result,
    };
  }

  const checkout = {
    ok: true,
    status: 200,
    checkoutUrl: result.checkout_url || result.checkoutUrl || result.payment_link || result.url || result.checkout?.url,
    sessionId: result.session_id || result.sessionId || result.id,
  };
  await attachCheckoutToOrder(order.id, {
    sessionId: checkout.sessionId,
    metadata: {
      dodo_response: result,
      checkout_url_created: Boolean(checkout.checkoutUrl),
    },
  });
  return checkout;
}
