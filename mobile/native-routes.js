(function () {
  const routes = new Set(__BUNDLED_ROUTES__);
  document.addEventListener('click', event => {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const link = event.target.closest?.('a[href]');
    if (!link || link.hasAttribute('download') || link.getAttribute('href').startsWith('#')) return;
    const url = new URL(link.href);
    if (url.protocol !== location.protocol || url.host !== location.host) return;
    if (routes.has(url.pathname)) {
      url.pathname += 'index.html';
      link.href = url.href;
    }
  }, true);
})();
