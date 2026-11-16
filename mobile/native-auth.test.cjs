const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const test = require('node:test');
const { runInNewContext } = require('node:vm');
const { readCallback, redirectTo } = require('./native-auth.js');

const code = '95029c7c-afbf-40e3-bc1d-c63e14bda37f';
const callback = redirectTo + '?code=' + code;
const source = readFileSync(require.resolve('./native-auth.js'), 'utf8');

test('accepts only the app callback and a one-time exchange code', () => {
  assert.deepEqual(readCallback(callback), { code });
  assert.deepEqual(readCallback(redirectTo + '#error_code=otp_expired'), { failed: true });
  const invalid = [
    'https://gemden.red/auth/callback?code=' + code,
    callback.replace('/callback', '/other'),
    callback.replace('://auth', '://user@auth'),
    callback + '&code=' + code,
    callback + '#access_token=sample',
    callback + '&refresh_token=sample',
    redirectTo + '#access_token=sample&error=sample'
  ];
  invalid.forEach(url => assert.equal(readCallback(url), null));
});

function loadPage(pathname, search, storage, launchUrl) {
  let listener;
  let reads = 0;
  const opened = [];
  const cleaned = [];
  const window = {
    Capacitor: {
      isNativePlatform: () => true,
      Plugins: { App: {
        async addListener(_name, callback) { listener = callback; },
        async getLaunchUrl() { reads++; return { url: launchUrl }; }
      } }
    },
    location: { pathname, search, replace: url => opened.push(url) },
    history: { replaceState: (_state, _title, url) => cleaned.push(url) },
    sessionStorage: {
      getItem: key => storage.get(key),
      setItem: (key, value) => storage.set(key, value),
      removeItem: key => storage.delete(key)
    }
  };
  runInNewContext(source, { window, URL, URLSearchParams });
  return { window, opened, cleaned, coldReads: () => reads, open: url => listener({ url }) };
}

test('routes cold and warm links locally and consumes the code once', async () => {
  const storage = new Map();
  const cold = loadPage('/en/index.html', '', storage, callback);
  await new Promise(setImmediate);
  assert.deepEqual(cold.opened, ['/en/konto/index.html?app-return=1']);
  const account = loadPage('/en/konto/index.html', '?app-return=1', storage, callback);
  assert.equal(account.window.FFE_APP_AUTH.takeReturn().code, code);
  assert.equal(account.window.FFE_APP_AUTH.takeReturn(), null);
  assert.equal(account.cleaned[0], '/en/konto/index.html');
  await new Promise(setImmediate);
  assert.equal(account.coldReads(), 0);
  const warm = loadPage('/gassi/index.html', '', storage);
  await new Promise(setImmediate);
  warm.open(callback);
  warm.open(callback);
  assert.deepEqual(warm.opened, ['/konto/index.html?app-return=1']);
});
