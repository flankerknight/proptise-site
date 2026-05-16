let configPromise;
let clientPromise;

function getRedirectUrl(path = "/success.html") {
  return `${window.location.origin}${path}`;
}

export async function getAppConfig() {
  if (!configPromise) {
    configPromise = fetch("/api/config").then((response) => response.json());
  }
  return configPromise;
}

export async function getSupabaseClient() {
  if (!clientPromise) {
    clientPromise = (async () => {
      const config = await getAppConfig();
      if (!config.configured || !window.supabase?.createClient) return null;
      return window.supabase.createClient(config.supabaseUrl, config.supabaseAnonKey);
    })();
  }
  return clientPromise;
}

export async function getAuthState() {
  const client = await getSupabaseClient();
  if (!client) return { configured: false, client: null, session: null, user: null, token: "" };
  const { data } = await client.auth.getSession();
  return {
    configured: true,
    client,
    session: data.session || null,
    user: data.session?.user || null,
    token: data.session?.access_token || "",
  };
}

export async function sendLoginLink(email, redirectPath = "/success.html") {
  const client = await getSupabaseClient();
  if (!client) throw new Error("Supabase login is not configured yet.");
  const { error } = await client.auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo: getRedirectUrl(redirectPath),
    },
  });
  if (error) throw error;
}

export async function signOut() {
  const client = await getSupabaseClient();
  if (client) await client.auth.signOut();
}
