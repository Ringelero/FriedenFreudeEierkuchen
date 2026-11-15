(function () {
  // Dieser Publishable Key ist absichtlich öffentlich. Schutz entsteht durch RLS;
  // ein service_role-Schlüssel darf niemals in Browsercode stehen.
  window.FFE_SUPABASE_CONFIG = Object.freeze({
    url: 'https://svigcbgdcuidokjjqhfy.supabase.co',
    publishableKey: 'sb_publishable_QCPSpsPi4SDSOH3CLBrxcQ_KZnQU2TJ'
  });
})();
