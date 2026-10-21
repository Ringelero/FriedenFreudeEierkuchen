(function () {
  const tabs = [...document.querySelectorAll('.kiez-tab')];
  const panels = [...document.querySelectorAll('[data-panel]')];

  function showSection(id, focusPanel) {
    const panel = panels.find(item => item.id === id);
    if (!panel) return;
    tabs.forEach(tab => {
      const active = tab.dataset.section === id;
      tab.classList.toggle('active', active);
      tab.setAttribute('aria-selected', String(active));
      tab.tabIndex = active ? 0 : -1;
    });
    const selectedTab = tabs.find(tab => tab.dataset.section === id);
    if (selectedTab) selectedTab.parentElement.scrollLeft = selectedTab.offsetLeft - (selectedTab.parentElement.clientWidth - selectedTab.offsetWidth) / 2;
    panels.forEach(item => {
      const active = item === panel;
      item.classList.toggle('active', active);
      item.hidden = !active;
    });
    if (focusPanel) {
      panel.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
      panel.focus({ preventScroll: true });
    }
  }

  panels.forEach(panel => { panel.tabIndex = -1; });
  tabs.forEach((tab, index) => {
    tab.id = tab.id || `p-hain-tab-${tab.dataset.section}`;
    tab.setAttribute('role', 'tab');
    tab.setAttribute('aria-controls', tab.dataset.section);
    document.getElementById(tab.dataset.section)?.setAttribute('aria-labelledby', tab.id);
    tab.addEventListener('click', () => {
      showSection(tab.dataset.section, false);
      document.getElementById(tab.dataset.section)?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
      history.replaceState(null, '', '#' + tab.dataset.section);
    });
    tab.addEventListener('keydown', event => {
      let nextIndex = null;
      if (event.key === 'ArrowRight') nextIndex = (index + 1) % tabs.length;
      if (event.key === 'ArrowLeft') nextIndex = (index - 1 + tabs.length) % tabs.length;
      if (event.key === 'Home') nextIndex = 0;
      if (event.key === 'End') nextIndex = tabs.length - 1;
      if (nextIndex === null) return;
      event.preventDefault();
      const next = tabs[nextIndex];
      showSection(next.dataset.section, false);
      history.replaceState(null, '', '#' + next.dataset.section);
      next.focus();
    });
  });
  document.querySelectorAll('[data-jump]').forEach(button => button.addEventListener('click', () => {
    showSection(button.dataset.jump, true);
    history.replaceState(null, '', '#' + button.dataset.jump);
  }));
  const initial = location.hash.slice(1);
  document.documentElement.classList.add('kiez-js');
  showSection(panels.some(panel => panel.id === initial) ? initial : 'overview', false);

  const repairForm = document.getElementById('repair-form');
  document.getElementById('repair-assist')?.addEventListener('click', () => {
    if (!repairForm.reportValidity()) return;
    const urgency = document.getElementById('repair-urgency').value;
    const danger = urgency === 'danger';
    const result = document.getElementById('repair-result');
    result.hidden = false;
    result.innerHTML = `<article class="result-block">
      <span class="id-chip">Your observation</span>
      <h3>${danger ? "Please clarify safety first." : "The situation has been classified locally."}</h3>
      <p>${danger ? "In immediate danger, keep your distance and contact the appropriate emergency service, property management or specialist. Blob does not diagnose remotely." : "Record when the problem started, how often it occurs and which area is affected. The appropriate property management or specialist can help you decide the next step."}</p>
      <p><strong>Not sent yet:</strong> “Save privately” keeps your draft for you. Nothing is sent to property management.</p>
    </article>`;
    document.getElementById('repair-status').textContent = "Preview created — no data has been transferred.";
    window.dispatchEvent(new CustomEvent('blob:say', { detail: { text: danger ? "Possible danger? Please clarify safety with the appropriate specialist first." : "You can now save your observation privately. You'll need to send any message to property management yourself.", meta: "Blob · Navigator, no remote diagnosis" } }));
  });

})();
