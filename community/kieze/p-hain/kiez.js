(function () {
  const content = window.KIEZ_CONTENT || {};
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
    panels.forEach(item => {
      const active = item === panel;
      item.classList.toggle('active', active);
      item.hidden = !active;
    });
    if (focusPanel) {
      panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
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

  const escapeHtml = value => String(value || '').replace(/[&<>'"]/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[char]);
  function renderList(targetId, items) {
    const target = document.getElementById(targetId);
    if (!target) return;
    if (!items || !items.length) {
      target.innerHTML = '<div class="empty-state">Noch ist hier nichts eingetragen. Das ist ein echter leerer Zustand — kein erfundener Beispieltermin.</div>';
      return;
    }
    target.innerHTML = items.map(item => `<article class="entry" data-content-id="${escapeHtml(item.id)}">
      <div class="entry-meta"><span>${escapeHtml(item.id)}</span><span>${escapeHtml(item.status)}</span></div>
      <h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.text)}</p>
      ${item.review ? `<p class="entry-review">Prüfung: ${escapeHtml(item.review)}</p>` : ''}
    </article>`).join('');
  }
  renderList('event-list', content.events);
  renderList('knowledge-list', content.knowledge);
  renderList('board-list', content.board);

  const repairForm = document.getElementById('repair-form');
  repairForm?.addEventListener('submit', event => {
    event.preventDefault();
    const urgency = document.getElementById('repair-urgency').value;
    const danger = urgency === 'mögliche Gefahr';
    const result = document.getElementById('repair-result');
    result.hidden = false;
    result.innerHTML = `<article class="result-block">
      <span class="id-chip">SIT-PHAIN-REPAIR-DEMO</span>
      <h3>${danger ? 'Bitte zuerst Sicherheit klären.' : 'Die Situation ist lokal eingeordnet.'}</h3>
      <p>${danger ? 'Bei akuter Gefahr Abstand halten und die passende Notfall-, Hausverwaltungs- oder Fachstelle kontaktieren. Blob trifft keine Ferndiagnose.' : 'Ein späteres System würde jetzt Rückfragen stellen, nötige Fähigkeiten bestimmen und nur passende Profile oder Zuständigkeiten vorschlagen.'}</p>
      <p><strong>Noch nicht gesendet:</strong> Diese öffentliche Demo speichert keine Reparaturmeldung.</p>
    </article>`;
    document.getElementById('repair-status').textContent = 'Vorschau erstellt — es wurden keine Daten übertragen.';
    window.dispatchEvent(new CustomEvent('blob:say', { detail: { text: danger ? 'Mögliche Gefahr? Dann bin ich nur der Wegweiser. Erst Menschen und Fachstellen, dann Datenbank.' : 'Ich habe die Situation sortiert. Speichern kann ich sie erst, wenn das geschützte Kiez-Backend steht.', meta: 'Blob · Navigator, keine Ferndiagnose' } }));
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
