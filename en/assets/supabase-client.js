(function () {
  const config = window.FFE_SUPABASE_CONFIG;

  if (!config?.url || !config?.publishableKey) {
    window.FFE_SUPABASE_ERROR = "The public Supabase configuration is missing.";
    return;
  }

  if (!window.supabase?.createClient) {
    window.FFE_SUPABASE_ERROR = "The Supabase library could not be loaded.";
    return;
  }

  window.FFE_SUPABASE_CLIENT = window.supabase.createClient(
    config.url,
    config.publishableKey,
    {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true
      }
    }
  );
})();
