(function () {
  const slot = document.querySelector('[data-site-nav]');
  if (!slot) return;

  const root = slot.dataset.root || './';
  const current = document.body.dataset.area || '';
  const links = [
    ['start', "Home", root],
    ['community', 'Community', root + 'community/'],
    ['matching', "Opportunities", root + 'leistungen/'],
    ['map', "Map", root + 'treffpunkte/?ansicht=entdecken&amp;darstellung=karte'],
    ['calendar', "Calendar", root + 'kalender/'],
    ['system', "FFE system", root + 'system/'],
    ['account', "Account", root + 'konto/']
  ];

  slot.className = 'site-nav';
  slot.setAttribute('aria-label', "Main navigation");
  slot.innerHTML = `
    <a class="site-mark" href="${root}">GemDen</a>
    <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav-links">Menu <span aria-hidden="true">☰</span></button>
    <div class="nav-links" id="site-nav-links">
      ${links.map(([id, label, href]) => `<a href="${href}"${id === current ? ' aria-current="page"' : ''}>${label}</a>`).join('')}
    </div>`;
  const toggle = slot.querySelector('.nav-toggle');
  function setExpanded(expanded, focusToggle = false) {
    slot.dataset.expanded = String(expanded);
    toggle.setAttribute('aria-expanded', String(expanded));
    if (focusToggle) toggle.focus();
  }
  setExpanded(false);
  slot.classList.add('nav-ready');
  toggle.addEventListener('click', () => setExpanded(toggle.getAttribute('aria-expanded') !== 'true'));
  slot.addEventListener('keydown', event => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') setExpanded(false, true);
  });
  document.addEventListener('pointerdown', event => {
    if (!slot.contains(event.target)) setExpanded(false);
  });
  window.matchMedia('(max-width: 860px)').addEventListener('change', () => setExpanded(false));
})();
