(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.FFE_OPPORTUNITY_ENTRY = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  const SIGNALS = Object.freeze({ have: "I have", can: "I can", need: "I need", time: "I have time", chance: "There's an opportunity" });
  const KIEZE = Object.freeze({ 'p-hain': 'P-Hain', travelkiez: 'Travelkiez' });
  function readEntry(search) {
    const params = new URLSearchParams(search || '');
    const signal = params.get('signal');
    if (params.getAll('signal').length !== 1 || !Object.hasOwn(SIGNALS, signal)) return null;
    const from = params.getAll('from').length === 1 && Object.hasOwn(KIEZE, params.get('from')) ? params.get('from') : null;
    return Object.freeze({ signal, label: SIGNALS[signal], from });
  }
  function accountHref(signal, from = null) {
    const params = new URLSearchParams();
    if (Object.hasOwn(SIGNALS, signal)) params.set('signal', signal);
    if (Object.hasOwn(KIEZE, from)) params.set('from', from);
    return `/konto/${params.size ? `?${params}` : ''}#opportunity-workspace`;
  }
  function showHint(target, entry) {
    if (!target || !entry) return;
    target.hidden = false;
    target.textContent = `${KIEZE[entry.from] ? `Off ${KIEZE[entry.from]}: ` : ''}„${entry.label}” is selected for your new form. Sign in, add your details and deliberately save them as a private draft.`;
  }
  function applyEntry(form, entry) {
    if (!form || !entry || form.dataset.editingId) return false;
    if ([...form.querySelectorAll('input:not([type="checkbox"]),textarea')].some(input => input.value.trim()) || form.querySelector('input[type="checkbox"]:checked')) return false;
    form.querySelector('#opportunity-signal').value = entry.signal;
    if (KIEZE[entry.from]) {
      form.querySelector('#opportunity-location-mode').value = 'local';
      form.querySelector('#opportunity-location-label').value = KIEZE[entry.from];
    }
    return true;
  }
  return { SIGNALS, readEntry, accountHref, showHint, applyEntry };
});
