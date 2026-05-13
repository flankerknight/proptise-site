const checkoutBaseUrls = {
  test_mode: "https://test.dodopayments.com",
  live_mode: "https://live.dodopayments.com",
};

const planCatalog = {
  starter: {
    name: "Starter Pack",
    credits: 10,
    productEnv: "DODO_PRODUCT_STARTER",
  },
  pro: {
    name: "Plus",
    credits: 25,
    productEnv: "DODO_PRODUCT_PLUS",
  },
  complete: {
    name: "Pro",
    credits: "unlimited",
    productEnv: "DODO_PRODUCT_PRO",
  },
};

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
  const environment = process.env.DODO_PAYMENTS_ENVIRONMENT || "test_mode";
  return {
    apiKey: process.env.DODO_PAYMENTS_API_KEY || "",
    baseUrl: process.env.DODO_PAYMENTS_BASE_URL || checkoutBaseUrls[environment] || checkoutBaseUrls.test_mode,
    environment,
  };
}

export async function createDodoCheckout(payload = {}, request) {
  const planId = payload.planId || "starter";
  const plan = planCatalog[planId];
  if (!plan) {
    return { ok: false, status: 400, error: "Unknown plan selected." };
  }

  const { apiKey, baseUrl, environment } = getDodoConfig();
  const productId = process.env[plan.productEnv];
  if (!apiKey || !productId) {
    return {
      ok: false,
      status: 503,
      error: "Dodo checkout is not configured yet. Add the API key and product IDs in Vercel environment variables.",
      missing: [
        !apiKey ? "DODO_PAYMENTS_API_KEY" : "",
        !productId ? plan.productEnv : "",
      ].filter(Boolean),
    };
  }

  const contact = String(payload.contact || "").trim();
  const customer = {};
  if (isEmail(contact)) customer.email = contact;
  const phone = normalizePhone(contact);
  if (phone) customer.phone_number = phone;

  const siteUrl = getSiteUrl(request);
  const checkoutPayload = {
    product_cart: [{ product_id: productId, quantity: 1 }],
    allowed_payment_method_types: ["upi_collect", "upi_intent", "google_pay", "credit", "debit"],
    billing_currency: "INR",
    billing_address: {
      country: "IN",
      zipcode: "000000",
    },
    minimal_address: true,
    return_url: `${siteUrl}/success.html?plan=${encodeURIComponent(planId)}&contact=${encodeURIComponent(contact)}&payment=dodo`,
    cancel_url: `${siteUrl}/#pricing`,
    short_link: true,
    metadata: {
      source: "genius_prompts_web",
      plan_id: planId,
      plan_name: plan.name,
      credits: String(plan.credits),
      environment,
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

  return {
    ok: true,
    status: 200,
    checkoutUrl: result.checkout_url,
    sessionId: result.session_id,
  };
}
