(function () {
  const navigation = document.querySelector('[data-system-navigation]');
  const panels = [...document.querySelectorAll('[data-system-view]')];
  if (!navigation || !panels.length) return;
  const links = [...navigation.querySelectorAll('a[data-system-target]')];
  function hashTarget() {
    try { return document.getElementById(decodeURIComponent(location.hash.slice(1))); }
    catch (error) { return null; }
  }
  function select(panel) {
    panels.forEach(item => { item.hidden = item !== panel; });
    links.forEach(link => {
      if (link.dataset.systemTarget === panel.id) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }
  function sync(scroll = false) {
    const target = hashTarget();
    const panel = target?.closest('[data-system-view]') || panels[0];
    select(panel);
    if (scroll && target) {
      if (target.hidden && target.matches('.system-card, .method-card, .node-card')) {
        panel.querySelectorAll('input[type="search"], select').forEach(control => {
          control.value = '';
          control.dispatchEvent(new Event(control.matches('select') ? 'change' : 'input', { bubbles: true }));
        });
      }
      if (target.matches('details')) target.open = true;
      target.scrollIntoView({ block: 'start' });
    }
  }
  navigation.addEventListener('click', event => {
    const link = event.target.closest('a[data-system-target]');
    if (!link) return;
    const panel = panels.find(item => item.id === link.dataset.systemTarget);
    if (!panel) return;
    event.preventDefault();
    if (location.hash !== link.hash) history.pushState(null, '', link.hash);
    select(panel);
    const heading = panel.querySelector('h2');
    heading?.setAttribute('tabindex', '-1');
    heading?.focus({ preventScroll: true });
    panel.scrollIntoView({ block: 'start' });
  });
  // Reveal the situation view before Blob focuses its field.
  document.addEventListener('click', event => {
    if (!event.target.closest('#blob-action')) return;
    const selector = window.BLOB_CONFIG?.actionTarget;
    const panel = selector && document.querySelector(selector)?.closest('[data-system-view]');
    if (panel?.hidden) {
      history.pushState(null, '', '#' + panel.id);
      select(panel);
    }
  }, true);
  window.addEventListener('hashchange', () => sync(true));
  window.addEventListener('popstate', () => sync(true));
  window.addEventListener('gemden:system-ready', () => sync());
  sync();
})();
