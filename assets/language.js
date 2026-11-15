(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  if (root?.document) api.mount(root);
})(typeof globalThis === 'undefined' ? this : globalThis, function () {
  'use strict';
  const storageKey = 'gemden_language_v1';
  const englishPath = path => path === '/en' || path.startsWith('/en/');
  function canonicalPath(path) { return englishPath(path) ? path.slice(3) || '/' : path; }
  function languageUrl(input, language, origin) {
    const url = new URL(input, origin);
    if (url.origin !== new URL(origin).origin || !['de', 'en'].includes(language)) return url.href;
    url.searchParams.delete('lang');
    const path = canonicalPath(url.pathname);
    url.pathname = language === 'en' ? '/en' + (path.startsWith('/') ? path : '/' + path) : path;
    return url.href;
  }
  function mount(window) {
    const { document, location } = window;
    const language = document.documentElement.lang === 'en' ? 'en' : 'de';
    const config = document.querySelector('meta[name="gemden-languages"]');
    if (!config) return;
    const routes = new Set(config.content.split(' '));
    const current = new URL(location.href);
    const explicit = current.searchParams.get('lang');
    let preferred;
    try { preferred = window.localStorage.getItem(storageKey); } catch (_) { /* Links still work when storage is disabled. */ }
    // An explicit English URL wins over an older preference saved on this device.
    const preferredCode = ['de', 'en'].includes(preferred) ? preferred : null;
    const target = ['de', 'en'].includes(explicit) ? explicit : englishPath(location.pathname) ? language : preferredCode;
    if (target && target !== language && routeExists(location.pathname)) {
      current.searchParams.delete('lang');
      try { window.localStorage.setItem(storageKey, target); } catch (_) {}
      const redirect = new URL(languageUrl(current.href, target, location.origin));
      redirect.searchParams.set('lang', target);
      location.replace(redirect.href);
      return;
    }
    try { window.localStorage.setItem(storageKey, language); } catch (_) {}
    if (['de', 'en'].includes(explicit)) {
      current.searchParams.delete('lang');
      window.history.replaceState(window.history.state, '', current.href);
    }
    function routeExists(path) {
      const canonical = canonicalPath(path).replace(/index\.html$/, '');
      return routes.has(canonical) || routes.has(canonical + (canonical.endsWith('/') ? '' : '/'));
    }
    function updateLink(link) {
      if (link.closest('[data-language-switcher]') || link.hasAttribute('download')) return;
      const href = link.getAttribute('href');
      if (!href || href.startsWith('#') || /^(?:mailto:|tel:|data:|javascript:)/i.test(href)) return;
      let url; try { url = new URL(href, location.href); } catch (_) { return; }
      if (url.origin === location.origin && routeExists(url.pathname)) link.href = languageUrl(url.href, language, location.origin);
    }
    function scan(node) {
      if (node.nodeType !== 1 && node.nodeType !== 9) return;
      if (node.matches?.('a[href]')) updateLink(node);
      node.querySelectorAll?.('a[href]').forEach(updateLink);
    }
    function render() {
      document.querySelector('[data-language-switcher]')?.remove();
      const nav = document.createElement('nav');
      nav.className = 'language-switcher'; nav.dataset.languageSwitcher = '';
      nav.setAttribute('aria-label', language === 'en' ? 'Website language' : 'Sprache der Website');
      for (const code of ['de', 'en']) {
        const link = document.createElement('a');
        const destinationFor = () => { const url = new URL(languageUrl(location.href, code, location.origin)); url.searchParams.set('lang', code); return url.href; };
        link.href = destinationFor();
        link.lang = code; link.hreflang = code; link.textContent = code.toUpperCase();
        link.setAttribute('aria-label', code === 'de' ? 'Deutsch' : 'English');
        if (code === language) link.setAttribute('aria-current', 'true');
        const refresh = () => { link.href = destinationFor(); };
        link.addEventListener('pointerenter', refresh);
        link.addEventListener('focus', refresh);
        window.addEventListener('hashchange', refresh);
        link.addEventListener('click', () => { try { window.localStorage.setItem(storageKey, code); } catch (_) {} });
        nav.append(link);
      }
      const siteNav = document.querySelector('[data-site-nav]');
      if (siteNav) siteNav.insertBefore(nav, siteNav.querySelector('.nav-toggle') || siteNav.querySelector('.nav-links'));
      else { nav.classList.add('language-switcher-floating'); document.body.append(nav); }
      scan(document);
      // Only URLs of newly rendered links are adjusted. User-written text is never inspected or translated.
      new window.MutationObserver(changes => {
        for (const change of changes) for (const node of change.addedNodes) scan(node);
      }).observe(document.body, { childList: true, subtree: true });
    }
    window.GemDenLanguage = { language, locale: language === 'en' ? 'en-GB' : 'de-DE', languageUrl: url => languageUrl(url, language, location.origin) };
    if (document.readyState !== 'complete') document.addEventListener('DOMContentLoaded', render, { once: true }); else render();
  }
  return { canonicalPath, languageUrl, mount };
});
