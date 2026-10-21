(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  if (root) root.FFE_AUTH_FLOW = Object.freeze(api);
})(typeof window === 'object' ? window : null, function () {
  function requireAuthMethod(client, method) {
    if (!client?.auth || typeof client.auth[method] !== 'function') {
      throw new Error("Secure sign-in is currently unavailable.");
    }
  }

  function normalizeEmail(value) {
    return String(value || '').trim();
  }

  function validateNewPassword(password, confirmation) {
    const value = String(password || '');
    if (value.length < 12) {
      throw new Error("The new password must be at least twelve characters long.");
    }
    if (value !== String(confirmation || '')) {
      throw new Error("The two passwords don't match.");
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

  function describeAuthError(error, fallback = "Sign-in could not be completed.") {
    const source = `${error?.code || ''} ${error?.message || error || ''}`.toLowerCase();
    if (/rate.?limit|too many requests|over_email_send_rate_limit/.test(source)) {
      return "Too many requests in a short time. Please wait briefly, then request exactly one new email.";
    }
    if (/invalid login credentials|invalid_credentials/.test(source)) {
      return "The email address or password is incorrect.";
    }
    if (/weak_password|password.*weak|password.*short/.test(source)) {
      return "The password does not yet meet the security requirements. Use at least twelve characters.";
    }
    if (/das neue passwort muss mindestens zwölf zeichen|die beiden passwörter stimmen nicht überein/.test(source)) {
      return error.message;
    }
    if (/invalid|expired|otp_expired|token has expired/.test(source)) {
      return "The sign-in link is invalid or has expired. Please request a new email.";
    }
    if (/network|fetch|offline/.test(source)) {
      return "Sign-in could not reach the server. Please check your connection and try again.";
    }
    return fallback;
  }

  async function requestEmailLogin(client, { email, redirectTo }) {
    requireAuthMethod(client, 'signInWithOtp');
    const normalizedEmail = normalizeEmail(email);
    if (!normalizedEmail) throw new Error("Please enter the email address you were invited with.");

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
    if (!normalizedEmail) throw new Error("Please enter the email address you were invited with.");
    if (!password) throw new Error("Please enter your password.");

    const { data, error } = await client.auth.signInWithPassword({
      email: normalizedEmail,
      password
    });
    if (error) throw error;
    if (!data?.session?.user) {
      throw new Error("The credentials were accepted, but no secure session was established.");
    }
    return data;
  }

  async function updatePassword(client, { password, confirmation }) {
    requireAuthMethod(client, 'getSession');
    requireAuthMethod(client, 'updateUser');
    const sessionResult = await client.auth.getSession();
    if (sessionResult?.error) throw sessionResult.error;
    if (!sessionResult?.data?.session?.user) {
      throw new Error("Secure sign-in is required to set a password.");
    }
    const nextPassword = validateNewPassword(password, confirmation);
    const { data, error } = await client.auth.updateUser({ password: nextPassword });
    if (error) throw error;
    if (!data?.user) throw new Error("Saving the password was not confirmed.");
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
