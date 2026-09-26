(function () {
  const client = window.FFE_SUPABASE_CLIENT;
  const admin = window.GEMDEN_MEMBER_ADMIN;
  const connectionChip = document.getElementById('admin-connection-chip');
  const loadingPanel = document.getElementById('access-loading');
  const signedOutPanel = document.getElementById('access-signed-out');
  const forbiddenPanel = document.getElementById('access-forbidden');
  const workspace = document.getElementById('admin-workspace');
  const inviteForm = document.getElementById('invite-form');
  const inviteSubmit = document.getElementById('invite-submit');
  const inviteStatus = document.getElementById('invite-status');
  const directoryStatus = document.getElementById('directory-status');
  const memberList = document.getElementById('member-list');
  const refreshButton = document.getElementById('refresh-members');
  let currentData = { members: [], kieze: [], truncated: false };

  function setMessage(target, message, state) {
    target.textContent = message || '';
    if (state) target.dataset.state = state;
    else delete target.dataset.state;
  }

  function setConnection(label, state) {
    connectionChip.textContent = label;
    connectionChip.className = `status-chip${state === 'open' ? ' open' : state === 'experiment' ? ' experiment' : ''}`;
  }

  function element(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function showOnly(name) {
    loadingPanel.hidden = name !== 'loading';
    signedOutPanel.hidden = name !== 'signed-out';
    forbiddenPanel.hidden = name !== 'forbidden';
    workspace.hidden = name !== 'workspace';
  }

  function formatDate(value, fallback = 'Noch nie') {
    if (!value) return fallback;
    const date = new Date(value);
    if (!Number.isFinite(date.getTime())) return fallback;
    return new Intl.DateTimeFormat('de-DE', {
      dateStyle: 'medium',
      timeStyle: 'short'
    }).format(date);
  }

  function accountState(member) {
    if (member.last_sign_in_at) return { label: 'Schon angemeldet', className: 'good' };
    if (member.email_confirmed_at) return { label: 'Einladung angenommen', className: 'good' };
    return { label: 'Einladung offen', className: 'waiting' };
  }

  function hasKiezPermission(member, kiezId) {
    return (member.permissions || []).some(permission => (
      permission.permission_key === 'manage_kiez'
      && permission.scope_type === 'kiez'
      && permission.scope_id === kiezId
    ));
  }

  function permissionSummary(member) {
    if (!member.permissions?.length) return 'Keine erweiterten Rechte';
    return member.permissions
      .map(permission => `${permission.permission_key}:${permission.scope_id}`)
      .join(', ');
  }

  function detail(label, value) {
    const wrapper = document.createElement('div');
    wrapper.append(element('dt', '', label), element('dd', '', value));
    return wrapper;
  }

  function badge(label, className) {
    return element('span', `member-badge${className ? ` ${className}` : ''}`, label);
  }

  function identityAction(member) {
    const section = element('section', 'member-action');
    section.append(element('h5', '', 'Stabile Mitglieds-ID'));

    if (member.stable_id) {
      const confirmed = element('div', 'confirmed-identity');
      confirmed.append(element('code', '', member.stable_id), element('span', '', 'dauerhaft bestätigt'));
      const profileLink = element('a', '', 'Sicheren Profilweg öffnen ↗');
      profileLink.href = `../../community/mitglieder/profil/?mitglied=${encodeURIComponent(member.stable_id)}`;
      profileLink.target = '_blank';
      profileLink.rel = 'noreferrer';
      section.append(confirmed, profileLink);
      return section;
    }

    section.append(element('p', '', 'Die ID verbindet Profil, Portfolio und persönliche Seite. Prüfe sie sorgfältig: Nach der Bestätigung ist sie nicht mehr umbenennbar.'));
    const form = element('form', 'form-grid');
    const field = element('div', 'field');
    const inputId = `stable-id-${member.id}`;
    const label = element('label', '', 'Vorgeschlagene MEM-ID');
    label.htmlFor = inputId;
    const input = document.createElement('input');
    input.id = inputId;
    input.required = true;
    input.maxLength = 80;
    input.autocomplete = 'off';
    input.value = admin.suggestStableId(member.display_name);
    input.placeholder = 'MEM-NAME';
    input.setAttribute('aria-describedby', `${inputId}-help`);
    const help = element('small', '', 'Großbuchstaben, Zahlen und einzelne Bindestriche.');
    help.id = `${inputId}-help`;
    field.append(label, input, help);
    const submit = element('button', 'button', 'MEM-ID dauerhaft festlegen');
    submit.type = 'submit';
    const status = element('p', 'form-status');
    status.setAttribute('role', 'status');
    status.setAttribute('aria-live', 'polite');
    form.append(field, submit, status);

    form.addEventListener('submit', async event => {
      event.preventDefault();
      let stableId;
      try {
        stableId = admin.normalizeStableId(input.value);
      } catch (error) {
        setMessage(status, admin.describeError(error), 'error');
        input.focus();
        return;
      }
      if (!window.confirm(`${stableId} jetzt dauerhaft ${member.display_name} zuordnen? Diese ID kann danach nicht umbenannt werden.`)) return;

      submit.disabled = true;
      setMessage(status, 'Die Mitglieds-ID wird serverseitig geprüft …');
      try {
        await admin.assignIdentity(client, { userId: member.id, stableId });
        setMessage(status, `${stableId} wurde dauerhaft bestätigt.`, 'success');
        await refreshMembers({ preserveMessage: true });
      } catch (error) {
        setMessage(status, admin.describeError(error, 'Die Mitglieds-ID konnte nicht vergeben werden.'), 'error');
        submit.disabled = false;
      }
    });

    section.append(form);
    return section;
  }

  function permissionAction(member) {
    const section = element('section', 'member-action');
    section.append(element('h5', '', 'Begrenztes Kiez-Recht'));
    if (!currentData.kieze.length) {
      section.append(element('p', '', 'Es ist derzeit kein verwaltbarer Kiez vorhanden.'));
      return section;
    }

    const form = element('form', 'form-grid');
    const selectField = element('div', 'field');
    const selectId = `kiez-${member.id}`;
    const selectLabel = element('label', '', 'Kiez');
    selectLabel.htmlFor = selectId;
    const select = document.createElement('select');
    select.id = selectId;
    for (const kiez of currentData.kieze) {
      const option = document.createElement('option');
      option.value = kiez.id;
      option.textContent = `${kiez.name} · ${kiez.id}`;
      select.append(option);
    }
    selectField.append(selectLabel, select);

    const state = element('p', 'permission-state');
    const reasonField = element('div', 'field');
    const reasonId = `permission-reason-${member.id}`;
    const reasonLabel = element('label', '', 'Begründung der Entscheidung');
    reasonLabel.htmlFor = reasonId;
    const reason = document.createElement('textarea');
    reason.id = reasonId;
    reason.required = true;
    reason.minLength = 12;
    reason.maxLength = 2000;
    reason.rows = 3;
    reason.placeholder = 'Wer hat die Vergabe oder den Widerruf legitimiert und wofür?';
    reasonField.append(reasonLabel, reason);
    const submit = element('button', 'button');
    submit.type = 'submit';
    const status = element('p', 'form-status');
    status.setAttribute('role', 'status');
    status.setAttribute('aria-live', 'polite');

    function updatePermissionState() {
      const active = hasKiezPermission(member, select.value);
      state.textContent = active ? 'Recht ist aktuell aktiv.' : 'Recht ist aktuell nicht vergeben.';
      state.className = `permission-state${active ? ' is-active' : ''}`;
      submit.textContent = active ? 'Kiez-Recht widerrufen' : 'Kiez-Recht erteilen';
      submit.className = active ? 'button danger-outline' : 'button';
    }

    select.addEventListener('change', updatePermissionState);
    updatePermissionState();
    form.append(selectField, state, reasonField, submit, status);

    form.addEventListener('submit', async event => {
      event.preventDefault();
      const enabled = !hasKiezPermission(member, select.value);
      if (!enabled && !window.confirm(`Das Recht manage_kiez:${select.value} für ${member.display_name} jetzt widerrufen?`)) return;
      submit.disabled = true;
      setMessage(status, enabled ? 'Das Kiez-Recht wird geprüft und erteilt …' : 'Das Kiez-Recht wird geprüft und widerrufen …');
      try {
        await admin.setKiezPermission(client, {
          userId: member.id,
          kiezId: select.value,
          enabled,
          reason: reason.value
        });
        setMessage(status, enabled ? 'Das Kiez-Recht ist jetzt aktiv.' : 'Das Kiez-Recht wurde widerrufen.', 'success');
        await refreshMembers({ preserveMessage: true });
      } catch (error) {
        setMessage(status, admin.describeError(error, 'Das Kiez-Recht konnte nicht geändert werden.'), 'error');
        submit.disabled = false;
      }
    });

    section.append(form);
    return section;
  }

  function renderMember(member) {
    const card = element('article', 'member-card');
    const head = element('header', 'member-card-head');
    const identity = document.createElement('div');
    identity.append(
      element('h4', '', member.display_name || 'Neues Mitglied'),
      element('span', 'member-email', member.email || 'Keine E-Mail hinterlegt')
    );
    const badges = element('div', 'member-badges');
    const state = accountState(member);
    badges.append(badge(state.label, state.className));
    badges.append(member.stable_id ? badge(member.stable_id, 'good') : badge('MEM-ID offen', 'waiting'));
    head.append(identity, badges);

    const details = element('dl', 'member-details');
    details.append(
      detail('Konto angelegt', formatDate(member.created_at, 'Unbekannt')),
      detail('Letzte Anmeldung', formatDate(member.last_sign_in_at)),
      detail('Erweiterte Rechte', permissionSummary(member))
    );
    const actions = element('div', 'member-actions');
    actions.append(identityAction(member), permissionAction(member));
    card.append(head, details, actions);
    return card;
  }

  function renderMetrics() {
    const members = currentData.members;
    document.getElementById('metric-total').textContent = String(members.length);
    document.getElementById('metric-invited').textContent = String(members.filter(member => !member.email_confirmed_at).length);
    document.getElementById('metric-without-id').textContent = String(members.filter(member => !member.stable_id).length);
    document.getElementById('metric-active').textContent = String(members.filter(member => member.last_sign_in_at).length);
  }

  function renderMembers() {
    renderMetrics();
    memberList.replaceChildren();
    if (!currentData.members.length) {
      memberList.append(element('p', 'member-empty', 'Noch keine Konten vorhanden. Lade das erste Mitglied über das Einladungsformular ein.'));
      return;
    }
    for (const member of currentData.members) memberList.append(renderMember(member));
  }

  async function refreshMembers({ preserveMessage = false } = {}) {
    refreshButton.disabled = true;
    if (!preserveMessage) setMessage(directoryStatus, 'Mitglieder und Rechte werden sicher geladen …');
    try {
      currentData = await admin.listMembers(client);
      renderMembers();
      const truncation = currentData.truncated ? ' Die Liste zeigt vorerst höchstens 200 Konten.' : '';
      setMessage(directoryStatus, `${currentData.members.length} Konten wurden über den geschützten Serverweg geladen.${truncation}`, 'success');
      return currentData;
    } finally {
      refreshButton.disabled = false;
    }
  }

  inviteForm.addEventListener('submit', async event => {
    event.preventDefault();
    inviteSubmit.disabled = true;
    setMessage(inviteStatus, 'Supabase legt das private Konto an und verschickt die Einladung …');
    try {
      const displayName = document.getElementById('invite-name').value;
      const email = document.getElementById('invite-email').value;
      const invited = await admin.inviteMember(client, { email, displayName });
      inviteForm.reset();
      setMessage(inviteStatus, `Einladung an ${invited.email} versendet. Vergib die feste MEM-ID jetzt unten am neuen Konto.`, 'success');
      await refreshMembers({ preserveMessage: true });
    } catch (error) {
      setMessage(inviteStatus, admin.describeError(error, 'Die Einladung konnte nicht versendet werden.'), 'error');
    } finally {
      inviteSubmit.disabled = false;
    }
  });

  refreshButton.addEventListener('click', () => {
    refreshMembers().catch(error => {
      setMessage(directoryStatus, admin.describeError(error, 'Die Mitgliederliste konnte nicht aktualisiert werden.'), 'error');
    });
  });

  async function initialize() {
    showOnly('loading');
    if (!client || !admin) {
      setConnection('Verbindung nicht verfügbar', 'open');
      forbiddenPanel.querySelector('p:last-of-type').textContent = window.FFE_SUPABASE_ERROR || 'Die geschützte Verbindung konnte nicht gestartet werden.';
      showOnly('forbidden');
      return;
    }

    try {
      const { data, error } = await client.auth.getSession();
      if (error) throw error;
      if (!data.session?.user) {
        setConnection('Anmeldung erforderlich', 'open');
        showOnly('signed-out');
        return;
      }

      try {
        await refreshMembers();
        setConnection('Mitgliederverwaltung freigeschaltet');
        showOnly('workspace');
      } catch (error) {
        if (error?.code === 'member_admin_forbidden') {
          setConnection('Angemeldet · nicht freigeschaltet', 'open');
          showOnly('forbidden');
          return;
        }
        setConnection('Verwaltung nicht erreichbar', 'open');
        forbiddenPanel.querySelector('p:last-of-type').textContent = admin.describeError(error, 'Die Mitgliederverwaltung konnte nicht geladen werden.');
        showOnly('forbidden');
      }
    } catch (error) {
      setConnection('Sitzung konnte nicht geprüft werden', 'open');
      forbiddenPanel.querySelector('p:last-of-type').textContent = admin.describeError(error, 'Die sichere Sitzung konnte nicht geprüft werden.');
      showOnly('forbidden');
    }
  }

  initialize();
})();
