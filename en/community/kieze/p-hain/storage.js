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
  function fail(error) { return error?.message || "The connection is currently unavailable. Please try again."; }
  function when(value) { return new Intl.DateTimeFormat("en-GB", { dateStyle: 'medium', timeStyle: 'short' }).format(new Date(value)); }
  function formValues(form) { return Object.fromEntries(new FormData(form)); }
  function clearRepairPreview(workspace) {
    const result = workspace.querySelector('#repair-result');
    if (result) { result.replaceChildren(); result.hidden = true; workspace.querySelector('#repair-status').textContent = ''; }
  }
  function resetForm(workspace) {
    workspace.querySelector('form').reset(); workspace.querySelector('form').hidden = true;
    delete workspace.querySelector('form').dataset.owner;
    delete workspace.querySelector('form').dataset.open;
    edits.delete(workspace.dataset.entryWorkspace);
    clearRepairPreview(workspace);
  }
  function openForm(workspace, entry = null) {
    const form = workspace.querySelector('form');
    if (form.dataset.open === 'true' && !confirm("Discard the unsaved input and open another version?")) return;
    form.reset();
    clearRepairPreview(workspace);
    const kind = workspace.dataset.entryWorkspace;
    if (entry) {
      edits.set(kind, entry);
      for (const name of ['title', 'body', 'venue', 'repair_area', 'repair_urgency', 'knowledge_source', 'knowledge_responsible', 'knowledge_checked_on']) if (form.elements[name]) form.elements[name].value = entry[name] || '';
      for (const name of ['starts_at', 'ends_at']) if (form.elements[name]) form.elements[name].value = api.localInput(entry[name]);
    } else edits.delete(kind);
    form.dataset.owner = access?.user_id || ''; form.dataset.open = 'true'; form.hidden = false;
    form.elements.title.focus();
    message(workspace, entry ? "You're editing a private draft." : "New private draft.");
  }
  function entryCard(entry, workspace = null) {
    const card = node('article', undefined, 'entry');
    const ownCard = !!workspace;
    const state = entry.publication_status === 'published' ? "Approved for public display" : "Only for you · draft";
    card.append(node('p', ownCard ? state : (entry.author?.display_name || "Member"), 'entry-meta'));
    card.append(node('h3', entry.title));
    if (entry.kind === 'event') {
      card.append(node('p', `${when(entry.starts_at)}${entry.ends_at ? ` bis ${when(entry.ends_at)}` : ''}`, 'kiez-entry-time'));
      if (entry.venue) card.append(node('p', entry.venue, 'kiez-entry-venue'));
    }
    if (entry.kind === 'repair') {
      if (entry.repair_area) card.append(node('p', `Area: ${entry.repair_area}`));
      card.append(node('p', `Your assessment: ${{ normal: "unclear / normal", soon: "check soon", danger: "possible danger" }[entry.repair_urgency] || "not specified"}`));
    }
    card.append(node('p', entry.body, 'kiez-entry-body'));
    if (entry.kind === 'knowledge') {
      card.append(node('p', `Source: ${entry.knowledge_source}`, 'entry-review'));
      if (entry.knowledge_responsible) card.append(node('p', `Contact person: ${entry.knowledge_responsible}`, 'entry-review'));
      card.append(node('p', entry.knowledge_checked_on ? `Review date stated by the author: ${new Date(`${entry.knowledge_checked_on}T12:00:00`).toLocaleDateString("en-GB")}` : "Review date: not specified yet", 'entry-review'));
    }
    if (ownCard) {
      const actions = node('div', undefined, 'button-row kiez-entry-actions');
      const published = entry.publication_status === 'published';
      function button(label, action) {
        const control = node('button', label, 'button secondary'); control.type = 'button';
        control.addEventListener('click', async () => {
          if (action === 'edit') { openForm(workspace, entry); return; }
          if (action === 'delete' && !confirm("Permanently delete this entry of yours?")) return;
          if (action === 'publish' && !access?.profile_public) { message(workspace, "Your overall profile is still closed. First check its publication settings in your account.", true); return; }
          control.disabled = true;
          try {
            await api.changeEntry(client, entry, action);
            if (edits.get(entry.kind)?.id === entry.id) resetForm(workspace);
            message(workspace, { publish: "Entry approved for public display.", withdraw: "Approval withdrawn. The entry is private again.", delete: "Entry deleted." }[action]);
            await reload();
          } catch (error) { message(workspace, fail(error), true); }
          finally { control.disabled = false; }
        });
        actions.append(control);
      }
      if (published) button("Withdraw approval", 'withdraw');
      else {
        if (entry.kind !== 'event' || access?.can_create_event) {
          button("Edit", 'edit');
          if (entry.kind !== 'repair') button("Publish", 'publish');
        }
      }
      button("Delete", 'delete'); card.append(actions);
    }
    return card;
  }
  function renderList(target, entries, workspace = null) {
    target.replaceChildren();
    if (!entries.length) { target.append(node('p', workspace ? "You don't have an entry here yet." : "No entry here has been approved for public display yet.", 'empty-state')); return; }
    const ordered = entries[0]?.kind === 'event' ? [...entries].sort((a, b) => new Date(a.starts_at) - new Date(b.starts_at)) : entries;
    for (const entry of ordered) target.append(entryCard(entry, workspace));
  }
  function renderWorkspace() {
    for (const workspace of workspaces) {
      const kind = workspace.dataset.entryWorkspace;
      const canCreate = !!access && (kind !== 'event' || access.can_create_event);
      workspace.querySelector('[data-entry-new]').hidden = !canCreate;
      const note = workspace.querySelector('[data-access-note]');
      if (access) {
        const form = workspace.querySelector('form');
        if (form.dataset.owner && form.dataset.owner !== access.user_id) resetForm(workspace);
        if (form.dataset.open === 'true') form.hidden = !canCreate;
        note.replaceChildren(node('span', kind === 'event' && !canCreate ? "The responsible neighbourhood managers create events. Your previous entries remain accessible to you." : `Signed in as ${access.display_name}. Deine Entwürfe siehst nur du.`));
        note.append(document.createTextNode(kind === 'repair' ? " Your reports stay private and are not sent to property management. " : (access.profile_public ? ' ' : " Public entries also require approval of your overall profile. ")));
        const link = node('a', "Go to your account"); link.href = '/konto/'; note.append(link);
      } else {
        note.replaceChildren(node('span', kind === 'event' ? "Sign in to your account. Neighbourhood managers create events. " : `Sign in with an active member account to ${ { board: "a notice", repair: "a private repair report", knowledge: "Building knowledge" }[kind] } anzulegen. `));
        const link = node('a', "Go to your account"); link.href = '/konto/'; note.append(link);
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
      for (const kind of api.PUBLIC_KINDS) {
        const entries = publicRows.filter(entry => entry.kind === kind);
        renderList(document.getElementById(`${kind}-list`), entries);
        const noun = { event: ["Event", "Events"], board: ["Notice", "Notices"], knowledge: ["Knowledge entry", "Knowledge entries"] }[kind][entries.length === 1 ? 0 : 1];
        document.getElementById(`${kind}-feed-status`).textContent = entries.length ? `${entries.length} ${entries.length === 1 ? "approved for public display" : "approved for public display"} ${noun}.` : '';
      }
      const nextAccess = await api.workspace(client);
      const nextOwn = await api.ownEntries(client, nextAccess);
      if (ticket !== generation) return;
      access = nextAccess; own = nextOwn; renderWorkspace();
    } catch (error) {
      if (ticket !== generation) return;
      access = null; own = []; renderWorkspace();
      for (const kind of api.PUBLIC_KINDS) {
        document.getElementById(`${kind}-list`).replaceChildren(node('p', "The entries could not be loaded.", 'empty-state'));
        document.getElementById(`${kind}-feed-status`).textContent = `Not fully loaded: ${fail(error)}`;
      }
    } finally { loading = false; if (reloadRequested) { reloadRequested = false; setTimeout(reload, 0); } }
  }
  for (const workspace of workspaces) {
    workspace.querySelector('[data-entry-new]').addEventListener('click', () => openForm(workspace));
    workspace.querySelector('[data-entry-cancel]').addEventListener('click', () => { resetForm(workspace); message(workspace, "Editing cancelled."); });
    workspace.querySelector('form').addEventListener('submit', async event => {
      event.preventDefault(); const form = event.currentTarget, submit = form.querySelector('[type="submit"]'); submit.disabled = true;
      try {
        await api.saveDraft(client, workspace.dataset.entryWorkspace, formValues(form), edits.get(workspace.dataset.entryWorkspace));
        resetForm(workspace); message(workspace, "Private draft saved on the server."); await reload();
      } catch (error) {
        message(workspace, error?.code === '40001'
          ? "Changed in the meantime: your input will be kept. Reload the entries and open the current version using “Edit”."
          : `Not saved: ${fail(error)}`, true);
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
