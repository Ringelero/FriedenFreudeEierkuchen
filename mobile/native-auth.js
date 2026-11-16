(function (root) {
  const redirectTo = 'red.gemden.app://auth/callback';
  const pendingKey = 'gemden_pending_email_return';
  const launchKey = 'gemden_email_launch_checked';

  function readCallback(value) {
    if (typeof value !== 'string' || value.length > 4096) return null;
    let url;
    try { url = new URL(value); } catch { return null; }
    if (url.protocol !== 'red.gemden.app:' || url.hostname !== 'auth' || url.pathname !== '/callback'
      || url.username || url.password || url.port) return null;

    const params = url.searchParams;
    const code = params.get('code');
    if (params.getAll('code').length === 1 && /^[A-Za-z0-9._~-]{16,256}$/.test(code || '')) {
      if (!url.hash && !params.has('error') && !params.has('error_code') && !params.has('error_description')
        && !params.has('access_token') && !params.has('refresh_token')) return { code };
      return null;
    }
    const fragment = new URLSearchParams(url.hash.slice(1));
    if ([params, fragment].some(part => part.has('access_token') || part.has('refresh_token'))) return null;
    if ([params, fragment].some(part => part.has('error') || part.has('error_code'))) return { failed: true };
    return null;
  }

  if (typeof module === 'object' && module.exports) module.exports = { readCallback, redirectTo };
  const app = root?.Capacitor?.Plugins?.App;
  if (!app || !root.Capacitor.isNativePlatform()) return;

  let navigating = false;
  function openAccount(value) {
    const callback = readCallback(value);
    if (!callback || navigating) return;
    const { location, sessionStorage } = root;
    const prefix = location.pathname.startsWith('/en/') ? '/en' : '';
    sessionStorage.setItem(pendingKey, JSON.stringify(callback));
    sessionStorage.setItem(launchKey, '1');
    navigating = true;
    location.replace(prefix + '/konto/index.html?app-return=1');
  }

  function takeReturn() {
    const { location, sessionStorage, history } = root;
    if (new URLSearchParams(location.search).get('app-return') !== '1') return null;
    const pending = sessionStorage.getItem(pendingKey);
    sessionStorage.removeItem(pendingKey);
    history.replaceState(null, '', location.pathname);
    return pending ? JSON.parse(pending) : null;
  }

  root.FFE_APP_AUTH = Object.freeze({ redirectTo, takeReturn });
  async function listen() {
    await app.addListener('appUrlOpen', ({ url }) => openAccount(url));
    if (root.sessionStorage.getItem(launchKey)) return;
    const launch = await app.getLaunchUrl();
    root.sessionStorage.setItem(launchKey, '1');
    openAccount(launch?.url);
  }
  listen().catch(() => { /* Other sign-in methods remain available. */ });
})(typeof window === 'object' ? window : null);
