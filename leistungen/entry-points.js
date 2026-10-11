(function () {
  const links = [...document.querySelectorAll('[data-signal-filter]')];
  const select = document.getElementById('opportunity-filter-signal');
  if (!select) return;
  function reflect() {
    links.forEach(link => {
      if (link.dataset.signalFilter === select.value) link.setAttribute('aria-current', 'true');
      else link.removeAttribute('aria-current');
    });
  }
  links.forEach(link => link.addEventListener('click', () => {
    select.value = link.dataset.signalFilter;
    select.dispatchEvent(new Event('change', { bubbles: true }));
    select.focus({ preventScroll: true });
  }));
  select.addEventListener('change', reflect);
  reflect();
})();
