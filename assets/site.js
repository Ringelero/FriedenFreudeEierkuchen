(function () {
  const slot = document.querySelector('[data-site-nav]');
  if (!slot) return;

  const root = slot.dataset.root || './';
  const current = document.body.dataset.area || '';
  const links = [
    ['start', 'Start', root],
    ['community', 'Community', root + 'community/'],
    ['matching', 'Möglichkeiten', root + 'leistungen/'],
    ['system', 'FFE-System', root + 'system/'],
    ['account', 'Konto', root + 'konto/']
  ];

  slot.className = 'site-nav';
  slot.setAttribute('aria-label', 'Hauptnavigation');
  slot.innerHTML = `
    <a class="site-mark" href="${root}">GemDen</a>
    <div class="nav-links">
      ${links.map(([id, label, href]) => `<a href="${href}"${id === current ? ' aria-current="page"' : ''}>${label}</a>`).join('')}
    </div>`;
})();
