(function () {
  const links = [...document.querySelectorAll('[data-signal-filter]')];
  const select = document.getElementById('opportunity-filter-signal');
  const helper = window.FFE_OPPORTUNITY_ENTRY;
  const requested = helper?.readEntry(location.search);
  const createLink = document.getElementById('opportunity-create-link');
  if (!select) return;
  function reflect() {
    if (createLink && helper) createLink.href = helper.accountHref(select.value, requested?.from);
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
  if (requested) {
    select.value = requested.signal;
    select.dispatchEvent(new Event('change', { bubbles: true }));
  }
  reflect();
})();
