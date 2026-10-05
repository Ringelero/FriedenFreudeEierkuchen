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
  const searchInput = document.getElementById('member-search');
  const statusFilter = document.getElementById('member-status-filter');
  const auditList = document.getElementById('audit-list');
  const auditStatus = document.getElementById('audit-status');
  let currentData = {
    current_user_id: '',
    members: [],
    kieze: [],
    audit: [],
    truncated: false
  };

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
    if (member.account_status === 'paused') return { label: 'Konto deaktiviert', className: 'paused' };
    if (member.account_status === 'archived') return { label: 'Konto archiviert', className: 'paused' };
    if (member.account_status === 'pending_profile') return { label: 'Profil wird angelegt', className: 'waiting' };
    return { label: 'Konto aktiv', className: 'good' };
  }

  function loginState(member) {
    if (member.last_sign_in_at) return { label: 'Schon angemeldet', className: 'good' };
    if (member.email_confirmed_at) return { label: 'E-Mail bestätigt', className: 'good' };
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

  function field({ id, label, value = '', placeholder = '', type = 'text', rows = 0, maxLength = 2000 }) {
    const wrapper = element('div', 'field');
    const labelNode = element('label', '', label);
    labelNode.htmlFor = id;
    const input = rows ? document.createElement('textarea') : document.createElement('input');
    input.id = id;
    input.name = id;
    input.value = value;
    input.placeholder = placeholder;
    input.maxLength = maxLength;
    input.required = true;
    if (rows) {
      input.rows = rows;
      input.minLength = 12;
    } else {
      input.type = type;
      input.autocomplete = 'off';
    }
    wrapper.append(labelNode, input);
    return { wrapper, input };
  }

  function statusLine() {
    const status = element('p', 'form-status');
    status.setAttribute('role', 'status');
    status.setAttribute('aria-live', 'polite');
    return status;
  }

  function identityAction(member) {
    const section = element('section', 'member-action');
    section.append(element('h5', '', 'Stabile Mitglieds-ID'));

    if (member.stable_id) {
      const confirmed = element('div', 'confirmed-identity');
      confirmed.append(element('code', '', member.stable_id), element('span', '', 'dauerhaft bestätigt'));
      const profileLink = element('a', '', 'Sicheren Profilweg öffnen');
      profileLink.href = `../../community/mitglieder/profil/?mitglied=${encodeURIComponent(member.stable_id)}`;
      profileLink.target = '_blank';
      profileLink.rel = 'noreferrer';
      section.append(confirmed, profileLink);
      return section;
    }

    section.append(element('p', '', 'Die ID verbindet Profil, Portfolio und persönliche Seite. Nach der Bestätigung bleibt sie unveränderlich.'));
    const form = element('form', 'form-grid');
    const identityField = field({
      id: `stable-id-${member.id}`,
      label: 'Vorgeschlagene MEM-ID',
      value: admin.suggestStableId(member.display_name),
      placeholder: 'MEM-NAME',
      maxLength: 80
    });
    const help = element('small', '', 'Großbuchstaben, Zahlen und einzelne Bindestriche.');
    identityField.wrapper.append(help);
    const submit = element('button', 'button', 'MEM-ID dauerhaft festlegen');
    submit.type = 'submit';
    const status = statusLine();
    form.append(identityField.wrapper, submit, status);

    form.addEventListener('submit', async event => {
      event.preventDefault();
      let stableId;
      try {
        stableId = admin.normalizeStableId(identityField.input.value);
      } catch (error) {
        setMessage(status, admin.describeError(error), 'error');
        identityField.input.focus();
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

  function accountAction(member) {
    const section = element('section', 'member-action account-action');
    section.append(element('h5', '', 'Kontodaten'));

    const nameForm = element('form', 'form-grid account-name-form');
    const nameField = field({
      id: `display-name-${member.id}`,
      label: 'Anzeigename',
      value: member.display_name,
      placeholder: 'Anzeigename',
      maxLength: 120
    });
    const nameReason = field({
      id: `display-name-reason-${member.id}`,
      label: 'Grund der Änderung',
      placeholder: 'Warum wird der Name korrigiert?',
      rows: 2
    });
    const nameSubmit = element('button', 'button secondary', 'Anzeigename speichern');
    nameSubmit.type = 'submit';
    const nameStatus = statusLine();
    nameForm.append(nameField.wrapper, nameReason.wrapper, nameSubmit, nameStatus);

    nameForm.addEventListener('submit', async event => {
      event.preventDefault();
      let displayName;
      try {
        displayName = admin.normalizeDisplayName(nameField.input.value);
        if (displayName === member.display_name) {
          setMessage(nameStatus, 'Der Anzeigename ist bereits gespeichert.', 'success');
          return;
        }
      } catch (error) {
        setMessage(nameStatus, admin.describeError(error), 'error');
        return;
      }
      nameSubmit.disabled = true;
      setMessage(nameStatus, 'Der Anzeigename wird geprüft und gespeichert …');
      try {
        await admin.updateMemberDisplayName(client, {
          userId: member.id,
          displayName,
          reason: nameReason.input.value
        });
        setMessage(nameStatus, 'Der Anzeigename wurde geändert und protokolliert.', 'success');
        await refreshMembers({ preserveMessage: true });
      } catch (error) {
        setMessage(nameStatus, admin.describeError(error, 'Der Anzeigename konnte nicht geändert werden.'), 'error');
        nameSubmit.disabled = false;
      }
    });

    const accessTools = document.createElement('details');
    accessTools.className = 'admin-disclosure';
    accessTools.append(element('summary', '', 'Login und Kontostatus'));
    const accessBody = element('div', 'disclosure-body');

    const loginForm = element('form', 'form-grid compact-form');
    loginForm.append(element('p', 'action-explainer', 'Sendet an die hinterlegte Adresse einen neuen einmal verwendbaren Login-Link.'));
    const loginReason = field({
      id: `login-link-reason-${member.id}`,
      label: 'Grund für den neuen Link',
      placeholder: 'z. B. alter Einladungslink ist abgelaufen',
      rows: 2
    });
    const loginSubmit = element('button', 'button secondary', 'Neuen Login-Link senden');
    loginSubmit.type = 'submit';
    loginSubmit.disabled = member.account_status !== 'active';
    const loginStatus = statusLine();
    loginForm.append(loginReason.wrapper, loginSubmit, loginStatus);

    loginForm.addEventListener('submit', async event => {
      event.preventDefault();
      if (!window.confirm(`Jetzt einen echten Login-Link an ${member.email || 'die hinterlegte Adresse'} senden?`)) return;
      loginSubmit.disabled = true;
      setMessage(loginStatus, 'Der neue Login-Link wird versendet …');
      try {
        const result = await admin.sendMemberLoginLink(client, {
          userId: member.id,
          reason: loginReason.input.value
        });
        setMessage(
          loginStatus,
          result.audit_recorded
            ? 'Der Login-Link wurde versendet und protokolliert.'
            : 'Der Login-Link wurde versendet; der Protokolleintrag konnte nicht bestätigt werden.',
          result.audit_recorded ? 'success' : 'error'
        );
        if (result.audit_recorded) await refreshMembers({ preserveMessage: true });
      } catch (error) {
        setMessage(loginStatus, admin.describeError(error, 'Der Login-Link konnte nicht versendet werden.'), 'error');
      } finally {
        loginSubmit.disabled = member.account_status !== 'active';
      }
    });

    const statusForm = element('form', 'form-grid compact-form account-status-form');
    const isPaused = member.account_status === 'paused';
    const isCurrentAccount = member.id === currentData.current_user_id;
    const statusText = isPaused
      ? 'Reaktivieren erlaubt wieder Anmeldungen und lässt vorhandene, weiterhin gültige Rechte wieder wirken.'
      : 'Deaktivieren sperrt neue Anmeldungen und setzt die Datenbankrechte des Kontos sofort außer Kraft.';
    statusForm.append(element('p', 'action-explainer', statusText));
    const accountReason = field({
      id: `account-status-reason-${member.id}`,
      label: isPaused ? 'Grund der Reaktivierung' : 'Grund der Deaktivierung',
      placeholder: isPaused ? 'Wer hat die Reaktivierung bestätigt?' : 'Warum wird der Zugang vorübergehend gesperrt?',
      rows: 2
    });
    const statusSubmit = element(
      'button',
      isPaused ? 'button' : 'button danger-outline',
      isPaused ? 'Konto reaktivieren' : 'Konto deaktivieren'
    );
    statusSubmit.type = 'submit';
    statusSubmit.disabled = (!isPaused && member.account_status !== 'active') || (isCurrentAccount && !isPaused);
    const accountStatus = statusLine();
    if (isCurrentAccount && !isPaused) {
      setMessage(accountStatus, 'Das aktuell verwendete Verwaltungskonto kann sich hier nicht selbst deaktivieren.');
    }
    statusForm.append(accountReason.wrapper, statusSubmit, accountStatus);

    statusForm.addEventListener('submit', async event => {
      event.preventDefault();
      const desiredStatus = isPaused ? 'active' : 'paused';
      const verb = isPaused ? 'reaktivieren' : 'deaktivieren';
      if (!window.confirm(`${member.display_name} jetzt wirklich ${verb}?`)) return;
      statusSubmit.disabled = true;
      setMessage(accountStatus, `Das Konto wird sicher ${isPaused ? 'reaktiviert' : 'deaktiviert'} …`);
      try {
        await admin.setMemberAccountStatus(client, {
          userId: member.id,
          accountStatus: desiredStatus,
          reason: accountReason.input.value
        });
        setMessage(accountStatus, `Das Konto wurde ${isPaused ? 'reaktiviert' : 'deaktiviert'} und protokolliert.`, 'success');
        await refreshMembers({ preserveMessage: true });
      } catch (error) {
        setMessage(accountStatus, admin.describeError(error, 'Der Kontostatus konnte nicht geändert werden.'), 'error');
        statusSubmit.disabled = false;
      }
    });

    accessBody.append(loginForm, statusForm);
    accessTools.append(accessBody);
    section.append(nameForm, accessTools);
    return section;
  }

  function permissionAction(member) {
    const section = element('section', 'member-action');
    section.append(element('h5', '', 'Begrenztes Kiez-Recht'));
    if (!currentData.kieze.length) {
      section.append(element('p', '', 'Es ist derzeit kein verwaltbarer Kiez vorhanden.'));
      return section;
    }
    if (member.account_status === 'paused') {
      section.append(element('p', 'paused-note', 'Vorhandene Rechte dieses Kontos sind während der Deaktivierung unwirksam.'));
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
    const permissionReason = field({
      id: `permission-reason-${member.id}`,
      label: 'Begründung der Entscheidung',
      placeholder: 'Wer hat die Vergabe oder den Widerruf legitimiert und wofür?',
      rows: 3
    });
    const submit = element('button', 'button');
    submit.type = 'submit';
    const status = statusLine();

    function updatePermissionState() {
      const active = hasKiezPermission(member, select.value);
      state.textContent = active ? 'Recht ist aktuell aktiv.' : 'Recht ist aktuell nicht vergeben.';
      state.className = `permission-state${active ? ' is-active' : ''}`;
      submit.textContent = active ? 'Kiez-Recht widerrufen' : 'Kiez-Recht erteilen';
      submit.className = active ? 'button danger-outline' : 'button';
    }

    select.addEventListener('change', updatePermissionState);
    updatePermissionState();
    form.append(selectField, state, permissionReason.wrapper, submit, status);

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
          reason: permissionReason.input.value
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
    const card = element('article', `member-card${member.account_status === 'paused' ? ' is-paused' : ''}`);
    const head = element('header', 'member-card-head');
    const identity = document.createElement('div');
    const titleLine = element('div', 'member-title-line');
    titleLine.append(element('h4', '', member.display_name || 'Neues Mitglied'));
    if (member.id === currentData.current_user_id) titleLine.append(badge('Dieses Verwaltungskonto', 'current'));
    identity.append(titleLine, element('span', 'member-email', member.email || 'Keine E-Mail hinterlegt'));
    const badges = element('div', 'member-badges');
    const state = accountState(member);
    const login = loginState(member);
    badges.append(badge(state.label, state.className), badge(login.label, login.className));
    badges.append(member.stable_id ? badge(member.stable_id, 'good') : badge('MEM-ID offen', 'waiting'));
    head.append(identity, badges);

    const details = element('dl', 'member-details');
    details.append(
      detail('Konto angelegt', formatDate(member.created_at, 'Unbekannt')),
      detail('E-Mail bestätigt', formatDate(member.email_confirmed_at, 'Noch offen')),
      detail('Letzte Anmeldung', formatDate(member.last_sign_in_at)),
      detail('Erweiterte Rechte', permissionSummary(member))
    );
    const actions = element('div', 'member-actions');
    actions.append(identityAction(member), accountAction(member), permissionAction(member));
    card.append(head, details, actions);
    return card;
  }

  function renderMetrics() {
    const members = currentData.members;
    document.getElementById('metric-total').textContent = String(members.length);
    document.getElementById('metric-active').textContent = String(members.filter(member => member.account_status === 'active').length);
    document.getElementById('metric-paused').textContent = String(members.filter(member => member.account_status === 'paused').length);
    document.getElementById('metric-without-id').textContent = String(members.filter(member => !member.stable_id).length);
  }

  function filteredMembers() {
    const query = String(searchInput.value || '').trim().toLocaleLowerCase('de');
    const filter = statusFilter.value;
    return currentData.members.filter(member => {
      const searchText = [member.display_name, member.email, member.stable_id]
        .filter(Boolean)
        .join(' ')
        .toLocaleLowerCase('de');
      const matchesQuery = !query || searchText.includes(query);
      const matchesStatus = filter === 'all'
        || member.account_status === filter
        || (filter === 'invited' && !member.email_confirmed_at);
      return matchesQuery && matchesStatus;
    });
  }

  function renderMembers() {
    renderMetrics();
    memberList.replaceChildren();
    const members = filteredMembers();
    document.getElementById('visible-member-count').textContent = `${members.length} von ${currentData.members.length}`;
    if (!members.length) {
      memberList.append(element('p', 'member-empty', currentData.members.length
        ? 'Für diese Suche und diesen Status gibt es kein passendes Konto.'
        : 'Noch keine Konten vorhanden. Lade das erste Mitglied über das Einladungsformular ein.'));
      return;
    }
    for (const member of members) memberList.append(renderMember(member));
  }

  const auditLabels = Object.freeze({
    member_admin_granted: 'Mitgliederverwaltung freigeschaltet',
    member_invited: 'Mitglied eingeladen',
    stable_id_assigned: 'Mitglieds-ID bestätigt',
    display_name_changed: 'Anzeigename geändert',
    login_link_sent: 'Login-Link versendet',
    account_paused: 'Konto deaktiviert',
    account_reactivated: 'Konto reaktiviert',
    kiez_permission_granted: 'Kiez-Recht erteilt',
    kiez_permission_revoked: 'Kiez-Recht widerrufen'
  });

  function personLabel(person) {
    if (!person) return 'Systembestand';
    return person.stable_id ? `${person.display_name} · ${person.stable_id}` : person.display_name;
  }

  function auditDetails(event) {
    const details = event.details || {};
    if (details.old_display_name && details.new_display_name) {
      return `${details.old_display_name} → ${details.new_display_name}`;
    }
    if (details.previous_status && details.new_status) {
      return `${details.previous_status} → ${details.new_status}`;
    }
    if (details.kiez_id) return details.kiez_id;
    if (details.scope_id) return `${details.permission_key || 'Recht'} · ${details.scope_id}`;
    if (details.stable_id) return details.stable_id;
    return '';
  }

  function renderAudit() {
    auditList.replaceChildren();
    if (!currentData.audit.length) {
      auditList.append(element('p', 'member-empty', 'Noch keine Verwaltungsentscheidung protokolliert.'));
      setMessage(auditStatus, 'Der Verlauf beginnt mit der ersten protokollierten Verwaltungsaktion.');
      return;
    }

    for (const event of currentData.audit) {
      const item = element('article', 'audit-entry');
      const head = element('div', 'audit-entry-head');
      head.append(
        element('strong', '', auditLabels[event.action] || event.action),
        element('time', '', formatDate(event.occurred_at, 'Zeit unbekannt'))
      );
      const route = element('p', 'audit-route');
      route.append(
        element('span', '', personLabel(event.actor)),
        element('span', 'audit-route-separator', 'für'),
        element('span', '', personLabel(event.target))
      );
      const reason = element('p', 'audit-reason', event.reason);
      item.append(head, route, reason);
      const details = auditDetails(event);
      if (details) item.append(element('p', 'audit-details', details));
      auditList.append(item);
    }
    setMessage(auditStatus, `${currentData.audit.length} unveränderbare Verwaltungsereignisse werden angezeigt.`, 'success');
  }

  async function refreshMembers({ preserveMessage = false } = {}) {
    refreshButton.disabled = true;
    if (!preserveMessage) setMessage(directoryStatus, 'Mitglieder, Rechte und Verlauf werden sicher geladen …');
    try {
      currentData = await admin.listMembers(client);
      renderMembers();
      renderAudit();
      const truncation = currentData.truncated ? ' Die Liste zeigt vorerst höchstens 200 Konten.' : '';
      setMessage(directoryStatus, `${currentData.members.length} Konten wurden über den geschützten Serverweg geladen.${truncation}`, 'success');
      return currentData;
    } finally {
      refreshButton.disabled = false;
    }
  }

  inviteForm.addEventListener('submit', async event => {
    event.preventDefault();
    if (!window.confirm('Jetzt eine echte Einladungs-E-Mail versenden und das private Konto anlegen?')) return;
    inviteSubmit.disabled = true;
    setMessage(inviteStatus, 'Supabase legt das private Konto an und verschickt die Einladung …');
    try {
      const displayName = document.getElementById('invite-name').value;
      const email = document.getElementById('invite-email').value;
      const reason = document.getElementById('invite-reason').value;
      const invited = await admin.inviteMember(client, { email, displayName, reason });
      inviteForm.reset();
      setMessage(
        inviteStatus,
        invited.audit_recorded
          ? `Einladung an ${invited.email} versendet und protokolliert. Vergib die feste MEM-ID jetzt unten am neuen Konto.`
          : `Einladung an ${invited.email} versendet. Der Protokolleintrag konnte nicht bestätigt werden.`,
        invited.audit_recorded ? 'success' : 'error'
      );
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
  searchInput.addEventListener('input', renderMembers);
  statusFilter.addEventListener('change', renderMembers);

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
