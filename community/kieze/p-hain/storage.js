(function () {
  const api = window.GemDenKiezStorage, client = window.FFE_SUPABASE_CLIENT;
  let access = null, own = [], loading = false, generation = 0, reloadRequested = false;
  const workspaces = Array.from(document.querySelectorAll('[data-entry-workspace]'));
  const edits = new Map();
  function node(tag, text, className) {
    const element = document.createElement(tag);
    if (text !== undefined) element.textContent = text;
    if (className) element.className = className;
    return element;
  }
  function message(workspace, text, error = false) {
    const target = workspace.querySelector('[data-entry-status]');
    target.textContent = text; target.classList.toggle('is-error', error);
  }
  function fail(error) { return error?.message || 'Die Verbindung ist gerade nicht verfügbar. Bitte versuche es erneut.'; }
  function when(value) { return new Intl.DateTimeFormat('de-DE', { dateStyle: 'medium', timeStyle: 'short' }).format(new Date(value)); }
  function formValues(form) { return Object.fromEntries(new FormData(form)); }
  function resetForm(workspace) {
    workspace.querySelector('form').reset(); workspace.querySelector('form').hidden = true;
    delete workspace.querySelector('form').dataset.owner;
    delete workspace.querySelector('form').dataset.open;
    edits.delete(workspace.dataset.entryWorkspace);
  }
  function openForm(workspace, entry = null) {
    const form = workspace.querySelector('form');
    if (form.dataset.open === 'true' && !confirm('Die ungesicherte Eingabe verwerfen und einen anderen Stand öffnen?')) return;
    form.reset();
    const kind = workspace.dataset.entryWorkspace;
    if (entry) {
      edits.set(kind, entry);
      for (const name of ['title', 'body', 'venue']) if (form.elements[name]) form.elements[name].value = entry[name] || '';
      for (const name of ['starts_at', 'ends_at']) if (form.elements[name]) form.elements[name].value = api.localInput(entry[name]);
    } else edits.delete(kind);
    form.dataset.owner = access?.user_id || ''; form.dataset.open = 'true'; form.hidden = false;
    form.elements.title.focus();
    message(workspace, entry ? 'Du bearbeitest einen privaten Entwurf.' : 'Neuer privater Entwurf.');
  }
  function entryCard(entry, workspace = null) {
    const card = node('article', undefined, 'entry');
    const ownCard = !!workspace;
    const state = entry.publication_status === 'published' ? 'Öffentlich freigegeben' : 'Nur für dich · Entwurf';
    card.append(node('p', ownCard ? state : (entry.author?.display_name || 'Mitglied'), 'entry-meta'));
    card.append(node('h3', entry.title));
    if (entry.kind === 'event') {
      card.append(node('p', `${when(entry.starts_at)}${entry.ends_at ? ` bis ${when(entry.ends_at)}` : ''}`, 'kiez-entry-time'));
      if (entry.venue) card.append(node('p', entry.venue, 'kiez-entry-venue'));
    }
    card.append(node('p', entry.body, 'kiez-entry-body'));
    if (ownCard) {
      const actions = node('div', undefined, 'button-row kiez-entry-actions');
      const published = entry.publication_status === 'published';
      function button(label, action) {
        const control = node('button', label, 'button secondary'); control.type = 'button';
        control.addEventListener('click', async () => {
          if (action === 'edit') { openForm(workspace, entry); return; }
          if (action === 'delete' && !confirm('Diesen eigenen Eintrag endgültig löschen?')) return;
          if (action === 'publish' && !access?.profile_public) { message(workspace, 'Dein Gesamtprofil ist noch geschlossen. Prüfe zuerst die Freigabe im Konto.', true); return; }
          control.disabled = true;
          try {
            await api.changeEntry(client, entry, action);
            if (edits.get(entry.kind)?.id === entry.id) resetForm(workspace);
            message(workspace, { publish: 'Eintrag öffentlich freigegeben.', withdraw: 'Freigabe zurückgenommen. Der Eintrag ist wieder privat.', delete: 'Eintrag gelöscht.' }[action]);
            await reload();
          } catch (error) { message(workspace, fail(error), true); }
          finally { control.disabled = false; }
        });
        actions.append(control);
      }
      if (published) button('Freigabe zurücknehmen', 'withdraw');
      else {
        if (entry.kind !== 'event' || access?.can_create_event) { button('Bearbeiten', 'edit'); button('Veröffentlichen', 'publish'); }
      }
      button('Löschen', 'delete'); card.append(actions);
    }
    return card;
  }
  function renderList(target, entries, workspace = null) {
    target.replaceChildren();
    if (!entries.length) { target.append(node('p', workspace ? 'Du hast hier noch keinen Eintrag.' : 'Hier ist noch kein Eintrag öffentlich freigegeben.', 'empty-state')); return; }
    const ordered = entries[0]?.kind === 'event' ? [...entries].sort((a, b) => new Date(a.starts_at) - new Date(b.starts_at)) : entries;
    for (const entry of ordered) target.append(entryCard(entry, workspace));
  }
  function renderWorkspace() {
    for (const workspace of workspaces) {
      const kind = workspace.dataset.entryWorkspace;
      const canCreate = !!access && (kind === 'board' || access.can_create_event);
      workspace.querySelector('[data-entry-new]').hidden = !canCreate;
      const note = workspace.querySelector('[data-access-note]');
      if (access) {
        const form = workspace.querySelector('form');
        if (form.dataset.owner && form.dataset.owner !== access.user_id) resetForm(workspace);
        if (form.dataset.open === 'true') form.hidden = !canCreate;
        note.replaceChildren(node('span', kind === 'event' && !canCreate ? 'Termine legt die zuständige Kiezverwaltung an. Deine bisherigen Einträge bleiben für dich erreichbar.' : `Angemeldet als ${access.display_name}. Deine Entwürfe siehst nur du.`));
        note.append(document.createTextNode(access.profile_public ? ' ' : ' Für öffentliche Einträge braucht auch dein Gesamtprofil eine Freigabe. '));
        const link = node('a', 'Zum Konto'); link.href = '/konto/'; note.append(link);
      } else {
        note.replaceChildren(node('span', kind === 'event' ? 'Melde dich im Konto an. Termine legt die Kiezverwaltung an. ' : 'Melde dich mit einem aktiven Mitgliedskonto an, um einen Aushang anzulegen. '));
        const link = node('a', 'Zum Konto'); link.href = '/konto/'; note.append(link);
        workspace.querySelector('form').hidden = true;
      }
      const ownList = workspace.querySelector('[data-own-list]');
      ownList.hidden = !access;
      renderList(ownList, own.filter(entry => entry.kind === kind), workspace);
    }
  }
  async function reload() {
    if (loading) { reloadRequested = true; return; }
    loading = true;
    const ticket = generation;
    try {
      const publicRows = await api.publicEntries(client);
      if (ticket !== generation) return;
      for (const kind of ['event', 'board']) {
        const entries = publicRows.filter(entry => entry.kind === kind);
        renderList(document.getElementById(kind === 'event' ? 'event-list' : 'board-list'), entries);
        const noun = kind === 'event' ? (entries.length === 1 ? 'Termin' : 'Termine') : (entries.length === 1 ? 'Aushang' : 'Aushänge');
        document.getElementById(`${kind}-feed-status`).textContent = entries.length ? `${entries.length} ${entries.length === 1 ? 'öffentlich freigegebener' : 'öffentlich freigegebene'} ${noun}.` : '';
      }
      const nextAccess = await api.workspace(client);
      const nextOwn = await api.ownEntries(client, nextAccess);
      if (ticket !== generation) return;
      access = nextAccess; own = nextOwn; renderWorkspace();
    } catch (error) {
      if (ticket !== generation) return;
      access = null; own = []; renderWorkspace();
      for (const kind of ['event', 'board']) {
        document.getElementById(kind === 'event' ? 'event-list' : 'board-list').replaceChildren(node('p', 'Die Einträge konnten nicht geladen werden.', 'empty-state'));
        document.getElementById(`${kind}-feed-status`).textContent = `Nicht vollständig geladen: ${fail(error)}`;
      }
    } finally { loading = false; if (reloadRequested) { reloadRequested = false; setTimeout(reload, 0); } }
  }
  for (const workspace of workspaces) {
    workspace.querySelector('[data-entry-new]').addEventListener('click', () => openForm(workspace));
    workspace.querySelector('[data-entry-cancel]').addEventListener('click', () => { resetForm(workspace); message(workspace, 'Bearbeitung abgebrochen.'); });
    workspace.querySelector('form').addEventListener('submit', async event => {
      event.preventDefault(); const form = event.currentTarget, submit = form.querySelector('[type="submit"]'); submit.disabled = true;
      try {
        await api.saveDraft(client, workspace.dataset.entryWorkspace, formValues(form), edits.get(workspace.dataset.entryWorkspace));
        resetForm(workspace); message(workspace, 'Privater Entwurf auf dem Server gesichert.'); await reload();
      } catch (error) {
        message(workspace, error?.code === '40001'
          ? 'Inzwischen geändert: Deine Eingabe bleibt erhalten. Lade die Einträge neu und öffne den aktuellen Stand über „Bearbeiten“.'
          : `Nicht gespeichert: ${fail(error)}`, true);
      }
      finally { submit.disabled = false; }
    });
  }
  document.querySelector('[data-kiez-reload]')?.addEventListener('click', reload);
  client?.auth?.onAuthStateChange((event, session) => {
    if (event === 'SIGNED_OUT' || (event === 'SIGNED_IN' && access && session?.user?.id !== access.user_id)) {
      generation++; access = null; own = []; workspaces.forEach(resetForm); renderWorkspace();
    }
    if (event === 'SIGNED_IN') { generation++; setTimeout(reload, 0); }
  });
  reload();
})();
