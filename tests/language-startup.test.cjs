const test = require('node:test');
const assert = require('node:assert/strict');
const { mount } = require('../assets/language.js');

const origin = 'https://gemden.red';
const storageKey = 'gemden_language_v1';

function startup({ path = '/kalender/', language = 'de', saved = null, readyState = 'loading' } = {}) {
  const url = new URL(path, origin);
  const redirects = [];
  const historyChanges = [];
  const listeners = [];
  const storage = new Map(saved === null ? [] : [[storageKey, saved]]);
  let renderAttempts = 0;
  const document = {
    documentElement: { lang: language },
    readyState,
    querySelector(selector) {
      if (selector === 'meta[name="gemden-languages"]') return { content: '/ /kalender/ /community/ /konto/' };
      renderAttempts++;
      throw new Error('Rendering must wait for DOMContentLoaded');
    },
    addEventListener(type, callback, options) {
      listeners.push({ type, callback, options });
    },
    createElement() {
      renderAttempts++;
      throw new Error('Rendering must wait for DOMContentLoaded');
    }
  };
  const window = {
    document,
    location: {
      href: url.href,
      pathname: url.pathname,
      origin: url.origin,
      replace: destination => redirects.push(destination)
    },
    localStorage: {
      getItem: key => storage.get(key) ?? null,
      setItem: (key, value) => storage.set(key, value)
    },
    history: {
      state: null,
      replaceState: (state, title, destination) => historyChanges.push(destination)
    }
  };
  mount(window);
  return { window, redirects, historyChanges, listeners, storage, renderAttempts };
}

test('saved English redirects a canonical German page before rendering and preserves its query and anchor', () => {
  const state = startup({ path: '/kalender/?kalender=CICEK&art=besuch#requests-title', saved: 'en' });
  assert.deepEqual(state.redirects, [origin + '/en/kalender/?kalender=CICEK&art=besuch&lang=en#requests-title']);
  assert.equal(state.storage.get(storageKey), 'en');
  assert.deepEqual(state.listeners, []);
  assert.equal(state.renderAttempts, 0);
});

test('an explicit English URL takes precedence over a saved German preference', () => {
  const state = startup({ path: '/en/kalender/?kalender=CICEK#requests-title', language: 'en', saved: 'de' });
  assert.deepEqual(state.redirects, []);
  assert.equal(state.storage.get(storageKey), 'en');
  assert.equal(state.window.GemDenLanguage.language, 'en');
  assert.equal(state.listeners[0].type, 'DOMContentLoaded');
  assert.equal(state.renderAttempts, 0);
});

test('an explicit German query takes precedence over a saved English preference', () => {
  const german = startup({ path: '/kalender/?lang=de&kalender=CICEK#requests-title', saved: 'en' });
  assert.deepEqual(german.redirects, []);
  assert.equal(german.storage.get(storageKey), 'de');
  assert.deepEqual(german.historyChanges, [origin + '/kalender/?kalender=CICEK#requests-title']);
  assert.equal(german.window.GemDenLanguage.language, 'de');

  const english = startup({ path: '/en/kalender/?lang=de&kalender=CICEK#requests-title', language: 'en', saved: 'en' });
  assert.deepEqual(english.redirects, [origin + '/kalender/?kalender=CICEK&lang=de#requests-title']);
  assert.equal(english.storage.get(storageKey), 'de');
  assert.equal(english.renderAttempts, 0);
});

test('invalid saved language preferences never cause a redirect', () => {
  for (const saved of ['', 'fr', 'EN', 'en-GB', 'de ', 'constructor', 'https://example.com/']) {
    const state = startup({ saved });
    assert.deepEqual(state.redirects, [], 'Invalid preference: ' + saved);
    assert.equal(state.window.GemDenLanguage.language, 'de');
    assert.equal(state.storage.get(storageKey), 'de');
    assert.equal(state.renderAttempts, 0);
  }
});

test('interactive documents register a once-only DOMContentLoaded callback without replacing navigation', () => {
  const state = startup({ readyState: 'interactive' });
  assert.deepEqual(state.redirects, []);
  assert.deepEqual(state.historyChanges, []);
  assert.equal(state.renderAttempts, 0);
  assert.equal(state.listeners.length, 1);
  assert.equal(state.listeners[0].type, 'DOMContentLoaded');
  assert.equal(typeof state.listeners[0].callback, 'function');
  assert.deepEqual(state.listeners[0].options, { once: true });
  assert.equal(state.window.GemDenLanguage.language, 'de');
});
