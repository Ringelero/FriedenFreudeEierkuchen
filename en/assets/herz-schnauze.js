(function () {
  'use strict';

  const tabList = document.querySelector('[data-herz-tabs]');
  const tabs = tabList ? Array.from(tabList.querySelectorAll('a[href^="#"]')) : [];
  const panels = tabs.map(tab => document.getElementById(tab.hash.slice(1)));
  const hasTabs = tabs.length > 0 && panels.every(Boolean);

  function selectTab(index) {
    tabs.forEach((tab, current) => {
      const active = current === index;
      tab.setAttribute('aria-selected', String(active));
      tab.tabIndex = active ? 0 : -1;
      panels[current].hidden = !active;
    });
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
})();
