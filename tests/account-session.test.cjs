const test = require('node:test');
const assert = require('node:assert/strict');
const vm = require('node:vm');
const fs = require('node:fs');
const path = require('node:path');
const controller = fs.readFileSync(path.join(__dirname, '../konto/konto.js'), 'utf8');
const tick = () => new Promise(resolve => setImmediate(resolve));

function accountPage() {
  const nodes = new Map(), events = new Map();
  let authListener, user = null, reloads = 0;
  function element(id) {
    if (!nodes.has(id)) nodes.set(id, {
      hidden: false, disabled: false, textContent: '', className: '', value: '', dataset: {},
      addEventListener() {}, reset() {}, focus() {}
    });
    return nodes.get(id);
  }
  const workspace = () => ({ reset() {}, setProfile() {}, async initialize() {} });
  const window = {
    FFE_AUTH_FLOW: { authErrorFromLocation: () => '', hasAuthCallbackParams: () => false },
    FFE_PAGE_BOOTSTRAP: { profilePageId: id => `PAGE-${id}` },
    FFE_PROFILE_WORKSPACE: workspace(), FFE_PUBLICATION_CENTER: workspace(),
    FFE_OPPORTUNITY_WORKSPACE: workspace(), FFE_RESONANCE_WORKSPACE: workspace(),
    addEventListener: (name, handler) => events.set(name, handler),
    setTimeout: fn => queueMicrotask(fn)
  };
  window.FFE_SUPABASE_CLIENT = {
    auth: {
      getSession: async () => ({ data: { session: null }, error: null }),
      onAuthStateChange: fn => { authListener = fn; }
    },
    from(table) {
      const result = { data: table === 'profiles' ? {
        id: user.id, stable_id: `MEM-${user.id}`, display_name: 'Private Testdaten',
        visibility: 'private', publication_status: 'draft', account_status: 'active'
      } : table === 'permission_grants' ? [] : null, error: null };
      const query = { select: () => query, eq: () => query, is: () => query,
        maybeSingle: async () => result, then: (resolve, reject) => Promise.resolve(result).then(resolve, reject) };
      return query;
    }
  };
  vm.runInNewContext(controller, {
    window, document: { getElementById: element },
    location: { pathname: '/konto/', search: '', hash: '', reload: () => { reloads++; } },
    history: { replaceState() {} }, URL, Date, console
  });
  return {
    element, get reloads() { return reloads; },
    async auth(nextUser) { user = nextUser; authListener(nextUser ? 'SIGNED_IN' : 'SIGNED_OUT', nextUser ? { user: nextUser } : null); await tick(); },
    pageshow(persisted) { events.get('pageshow')?.({ persisted }); }
  };
}

test('an initial signed-out visit and ordinary page show do not reload in a loop', async () => {
  const page = accountPage(); await tick(); await page.auth(null); page.pageshow(false);
  assert.equal(page.reloads, 0);
  assert.equal(page.element('signed-in-panel').hidden, true);
});

test('signout replaces the account document instead of retaining hidden profile and workspace data', async () => {
  const page = accountPage(); await tick(); await page.auth({ id: 'a', email: 'a@example.test' });
  assert.equal(page.element('signed-in-panel').hidden, false);
  assert.equal(page.element('profile-heading').textContent, 'Private Testdaten');
  await page.auth(null);
  assert.equal(page.reloads, 1);
  assert.equal(page.element('signed-in-panel').hidden, true);
});

test('switching accounts replaces the old document while a refresh of the same account keeps it', async () => {
  const page = accountPage(); await tick();
  await page.auth({ id: 'a', email: 'a@example.test' });
  await page.auth({ id: 'a', email: 'a@example.test' });
  assert.equal(page.reloads, 0);
  await page.auth({ id: 'b', email: 'b@example.test' });
  assert.equal(page.reloads, 1);
  assert.equal(page.element('signed-in-panel').hidden, true);
});

test('restoring an account page from history refreshes it before reusing its cached private interface', () => {
  const page = accountPage(); page.pageshow(true);
  assert.equal(page.reloads, 1);
});
