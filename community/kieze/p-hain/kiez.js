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
      <span class="id-chip">Deine Beobachtung</span>
      <h3>${danger ? 'Bitte zuerst Sicherheit klären.' : 'Die Situation ist lokal eingeordnet.'}</h3>
      <p>${danger ? 'Bei akuter Gefahr Abstand halten und die passende Notfall-, Hausverwaltungs- oder Fachstelle kontaktieren. Blob trifft keine Ferndiagnose.' : 'Halte fest, seit wann das Problem auftritt, wie oft es vorkommt und welcher Bereich betroffen ist. Die passende Hausverwaltungs- oder Fachstelle kann den nächsten Schritt mit dir klären.'}</p>
      <p><strong>Noch nicht gesendet:</strong> „Privat sichern“ bewahrt deinen Entwurf für dich auf. An die Hausverwaltung wird nichts geschickt.</p>
    </article>`;
    document.getElementById('repair-status').textContent = 'Vorschau erstellt — es wurden keine Daten übertragen.';
    window.dispatchEvent(new CustomEvent('blob:say', { detail: { text: danger ? 'Mögliche Gefahr? Bitte kläre zuerst die Sicherheit mit der passenden Fachstelle.' : 'Du kannst deine Beobachtung jetzt privat sichern. Eine Nachricht an die Hausverwaltung musst du selbst senden.', meta: 'Blob · Navigator, keine Ferndiagnose' } }));
  });

  const signalForm = document.getElementById('signal-form');
  const signalLabel = document.getElementById('signal-label');
  let activeSignal = '';
  document.querySelectorAll('[data-signal]').forEach(button => button.addEventListener('click', () => {
    activeSignal = button.dataset.signal;
    signalLabel.textContent = activeSignal + ' …';
    signalForm.hidden = false;
    document.getElementById('signal-text').focus();
  }));
  document.getElementById('signal-cancel')?.addEventListener('click', () => { signalForm.hidden = true; activeSignal = ''; });
  signalForm?.addEventListener('submit', event => {
    event.preventDefault();
    const text = document.getElementById('signal-text').value.trim();
    const status = document.getElementById('signal-status');
    status.textContent = text ? `Vorschau: „${activeSignal}: ${text}“ — noch nicht veröffentlicht.` : 'Bitte beschreibe dein Signal.';
  });
})();
