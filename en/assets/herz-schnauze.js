(function () {
  'use strict';

  const tabList = document.querySelector('[data-herz-tabs]');
  const tabs = tabList ? Array.from(tabList.querySelectorAll('a[href^="#"]')) : [];
  const panels = tabs.map(tab => document.getElementById(tab.hash.slice(1)));
  const hasTabs = tabs.length > 0 && panels.every(Boolean);
  const shores = Array.from(document.querySelectorAll('.herz-copy-inner'));
  const mobileArt = window.matchMedia('(max-width:980px)');
  let shoreFrame = 0;

  function selectTab(index) {
    document.body.dataset.herzActive = panels[index].id;
    tabs.forEach((tab, current) => {
      const active = current === index;
      tab.setAttribute('aria-selected', String(active));
      tab.tabIndex = active ? 0 : -1;
      panels[current].hidden = !active;
    });
    const art = panels[index].querySelector('picture img');
    if (art) art.loading = 'eager';
    layoutShores();
  }

  function reveal(hash) {
    let id;
    try { id = decodeURIComponent(hash.replace(/^#/, '')); } catch (_) { return; }
    const target = document.getElementById(id);
    const chapter = target?.closest('details[data-service-chapter]');
    if (chapter) chapter.open = true;

    if (!hasTabs) return;
    const index = panels.findIndex(panel => panel.contains(target));
    if (index >= 0) selectTab(index);
    else if (!id) selectTab(0);
  }

  if (hasTabs) {
    tabList.setAttribute('role', 'tablist');
    selectTab(0);
    tabs.forEach((tab, index) => {
      const panel = panels[index];
      tab.setAttribute('role', 'tab');
      tab.setAttribute('aria-controls', panel.id);
      panel.setAttribute('role', 'tabpanel');
      panel.setAttribute('aria-labelledby', tab.id);
      panel.tabIndex = 0;

      function activate(active) {
        selectTab(active);
        if (location.hash !== tabs[active].hash) {
          history.pushState(null, '', tabs[active].hash);
        }
      }

      tab.addEventListener('click', event => {
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        event.preventDefault();
        activate(index);
      });
      tab.addEventListener('keydown', event => {
        let next;
        if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
        if (event.key === 'ArrowLeft') next = (index + tabs.length - 1) % tabs.length;
        if (event.key === 'Home') next = 0;
        if (event.key === 'End') next = tabs.length - 1;
        if (next === undefined) return;
        event.preventDefault();
        activate(next);
        tabs[next].focus();
      });
    });
  }

  document.addEventListener('click', event => {
    const link = event.target.closest('a[href^="#"]');
    if (link) reveal(link.getAttribute('href'));
  });
  window.addEventListener('hashchange', () => reveal(window.location.hash));
  reveal(window.location.hash);

  function layoutShores() {
    if (shoreFrame) cancelAnimationFrame(shoreFrame);
    shoreFrame = 0;
    shores.forEach(shore => {
      if (!mobileArt.matches) {
        shore.parentElement.style.removeProperty('--shore-height');
        return;
      }
      if (!shore.getClientRects().length) return;
      const body = shore.querySelector('.herz-copy-body');
      if (!body) return;
      const clearing = shore.parentElement;
      const width = clearing.getBoundingClientRect().width;
      const capHeight = width * 560 / 760;
      const tileHeight = width * 248 / 760;
      if (!tileHeight) return;
      const style = getComputedStyle(shore);
      const contentHeight = body.getBoundingClientRect().height +
        parseFloat(style.paddingTop) + parseFloat(style.paddingBottom);
      // Complete, uniformly scaled tiles join the original top and bottom cuts.
      const rows = Math.max(1, Math.ceil((contentHeight - capHeight - 0.1) / tileHeight));
      clearing.style.setProperty('--shore-height', `${capHeight + rows * tileHeight}px`);
    });
  }

  function scheduleShores() {
    if (!shoreFrame) shoreFrame = requestAnimationFrame(layoutShores);
  }

  if (shores.length) {
    if ('ResizeObserver' in window) {
      const observer = new ResizeObserver(layoutShores);
      shores.forEach(shore => observer.observe(shore.querySelector('.herz-copy-body')));
    }
    if ('MutationObserver' in window) {
      const chapters = new MutationObserver(layoutShores);
      document.querySelectorAll('details[data-service-chapter]').forEach(chapter => {
        chapters.observe(chapter, { attributes: true, attributeFilter: ['open'] });
      });
    }
    document.addEventListener('toggle', layoutShores, true);
    window.addEventListener('resize', scheduleShores, { passive: true });
    document.fonts?.ready.then(scheduleShores);
    scheduleShores();
  }
})();
