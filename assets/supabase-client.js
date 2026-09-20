(function () {
  const config = window.FFE_SUPABASE_CONFIG;

  if (!config?.url || !config?.publishableKey) {
    window.FFE_SUPABASE_ERROR = 'Die öffentliche Supabase-Konfiguration fehlt.';
    return;
  }

  if (!window.supabase?.createClient) {
    window.FFE_SUPABASE_ERROR = 'Die Supabase-Bibliothek konnte nicht geladen werden.';
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
