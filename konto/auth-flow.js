(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  if (root) root.FFE_AUTH_FLOW = Object.freeze(api);
})(typeof window === 'object' ? window : null, function () {
  function requireAuthMethod(client, method) {
    if (!client?.auth || typeof client.auth[method] !== 'function') {
      throw new Error('Die sichere Anmeldung ist momentan nicht verfügbar.');
    }
  }

  function normalizeEmail(value) {
    return String(value || '').trim();
  }

  function validateNewPassword(password, confirmation) {
    const value = String(password || '');
    if (value.length < 12) {
      throw new Error('Das neue Passwort muss mindestens zwölf Zeichen lang sein.');
    }
    if (value !== String(confirmation || '')) {
      throw new Error('Die beiden Passwörter stimmen nicht überein.');
    }
    return value;
  }

  function authErrorFromLocation(locationLike) {
    const query = new URLSearchParams(locationLike?.search || '');
    const hash = new URLSearchParams(String(locationLike?.hash || '').replace(/^#/, ''));
    return query.get('error_description') || hash.get('error_description') || '';
  }

  function hasAuthCallbackParams(locationLike) {
    const query = new URLSearchParams(locationLike?.search || '');
    const hash = new URLSearchParams(String(locationLike?.hash || '').replace(/^#/, ''));
    const keys = ['access_token', 'code', 'error', 'error_code', 'error_description', 'refresh_token', 'type'];
    return keys.some(key => query.has(key) || hash.has(key));
  }

  function describeAuthError(error, fallback = 'Die Anmeldung konnte nicht abgeschlossen werden.') {
    const source = `${error?.code || ''} ${error?.message || error || ''}`.toLowerCase();
    if (/rate.?limit|too many requests|over_email_send_rate_limit/.test(source)) {
      return 'Zu viele Anfragen in kurzer Zeit. Bitte warte kurz und fordere dann genau eine neue Mail an.';
    }
    if (/invalid login credentials|invalid_credentials/.test(source)) {
      return 'E-Mail-Adresse oder Passwort stimmen nicht.';
    }
    if (/weak_password|password.*weak|password.*short/.test(source)) {
      return 'Das Passwort erfüllt die Sicherheitsanforderungen noch nicht. Verwende mindestens zwölf Zeichen.';
    }
    if (/das neue passwort muss mindestens zwölf zeichen|die beiden passwörter stimmen nicht überein/.test(source)) {
      return error.message;
    }
    if (/invalid|expired|otp_expired|token has expired/.test(source)) {
      return 'Der Anmeldelink ist ungültig oder abgelaufen. Bitte fordere eine neue Mail an.';
    }
    if (/network|fetch|offline/.test(source)) {
      return 'Die Anmeldung konnte den Server nicht erreichen. Bitte prüfe die Verbindung und versuche es erneut.';
    }
    return fallback;
  }

  async function requestEmailLogin(client, { email, redirectTo }) {
    requireAuthMethod(client, 'signInWithOtp');
    const normalizedEmail = normalizeEmail(email);
    if (!normalizedEmail) throw new Error('Bitte gib deine eingeladene E-Mail-Adresse ein.');

    const { data, error } = await client.auth.signInWithOtp({
      email: normalizedEmail,
      options: {
        emailRedirectTo: redirectTo,
        shouldCreateUser: false
      }
    });
    if (error) throw error;
    return data;
  }

  async function signInWithPassword(client, { email, password }) {
    requireAuthMethod(client, 'signInWithPassword');
    const normalizedEmail = normalizeEmail(email);
    if (!normalizedEmail) throw new Error('Bitte gib deine eingeladene E-Mail-Adresse ein.');
    if (!password) throw new Error('Bitte gib dein Passwort ein.');

    const { data, error } = await client.auth.signInWithPassword({
      email: normalizedEmail,
      password
    });
    if (error) throw error;
    if (!data?.session?.user) {
      throw new Error('Die Zugangsdaten wurden angenommen, aber es entstand keine sichere Sitzung.');
    }
    return data;
  }

  async function updatePassword(client, { password, confirmation }) {
    requireAuthMethod(client, 'getSession');
    requireAuthMethod(client, 'updateUser');
    const sessionResult = await client.auth.getSession();
    if (sessionResult?.error) throw sessionResult.error;
    if (!sessionResult?.data?.session?.user) {
      throw new Error('Zum Setzen eines Passworts ist eine sichere Anmeldung erforderlich.');
    }
    const nextPassword = validateNewPassword(password, confirmation);
    const { data, error } = await client.auth.updateUser({ password: nextPassword });
    if (error) throw error;
    if (!data?.user) throw new Error('Das Passwort wurde nicht bestätigt gespeichert.');
    return data;
  }

  return {
    authErrorFromLocation,
    describeAuthError,
    hasAuthCallbackParams,
    normalizeEmail,
    requestEmailLogin,
    signInWithPassword,
    updatePassword,
    validateNewPassword
  };
});
