(function () {
  'use strict';
  const list = document.querySelector('[data-portfolio-tabs]');
  if (!list) return;
  const tabs = Array.from(list.querySelectorAll('a[href^="#"]'));
  const panels = tabs.map(tab => document.getElementById(tab.hash.slice(1)));
  if (!tabs.length || panels.some(panel => !panel)) return;
  list.setAttribute('role', 'tablist');
  document.querySelector('.julius-paper').classList.add('julius-enhanced');
  tabs.forEach((tab, index) => {
    tab.setAttribute('role', 'tab');
    tab.setAttribute('aria-controls', panels[index].id);
    panels[index].setAttribute('role', 'tabpanel');
    panels[index].setAttribute('aria-labelledby', tab.id);
    panels[index].tabIndex = 0;
  });
  function select(index, { focus = false, remember = false } = {}) {
    tabs.forEach((tab, current) => {
      const active = current === index;
      tab.setAttribute('aria-selected', String(active));
      tab.tabIndex = active ? 0 : -1;
      panels[current].hidden = !active;
    });
    if (focus) tabs[index].focus();
    if (remember) {
      history.replaceState(null, '', tabs[index].hash);
      window.dispatchEvent(new Event('hashchange'));
    }
  }
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', event => { event.preventDefault(); select(index, { remember: true }); });
    tab.addEventListener('keydown', event => {
      let target;
      if (event.key === 'ArrowRight') target = (index + 1) % tabs.length;
      if (event.key === 'ArrowLeft') target = (index + tabs.length - 1) % tabs.length;
      if (event.key === 'Home') target = 0;
      if (event.key === 'End') target = tabs.length - 1;
      if (target === undefined) return;
      event.preventDefault();
      select(target, { focus: true, remember: true });
    });
  });
  function fromHash() {
    const index = tabs.findIndex(tab => tab.hash === location.hash);
    select(index < 0 ? 0 : index);
  }
  window.addEventListener('hashchange', fromHash);
  fromHash();
})();
