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

  function formatDate(value, fallback = "Never") {
    if (!value) return fallback;
    const date = new Date(value);
    if (!Number.isFinite(date.getTime())) return fallback;
    return new Intl.DateTimeFormat("en-GB", {
      dateStyle: 'medium',
      timeStyle: 'short'
    }).format(date);
  }

  function accountState(member) {
    if (member.account_status === 'paused') return { label: "Account disabled", className: 'paused' };
    if (member.account_status === 'archived') return { label: "Account archived", className: 'paused' };
    if (member.account_status === 'pending_profile') return { label: "Profile being created", className: 'waiting' };
    return { label: "Account active", className: 'good' };
  }

  function loginState(member) {
    if (member.last_sign_in_at) return { label: "Already signed in", className: 'good' };
    if (member.email_confirmed_at) return { label: "Email confirmed", className: 'good' };
    return { label: "Invitation pending", className: 'waiting' };
  }

  function hasKiezPermission(member, kiezId) {
    return (member.permissions || []).some(permission => (
      permission.permission_key === 'manage_kiez'
      && permission.scope_type === 'kiez'
      && permission.scope_id === kiezId
    ));
  }

  function permissionSummary(member) {
    if (!member.permissions?.length) return "No additional permissions";
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
    section.append(element('h5', '', "Stable member ID"));

    if (member.stable_id) {
      const confirmed = element('div', 'confirmed-identity');
      confirmed.append(element('code', '', member.stable_id), element('span', '', "permanently confirmed"));
      const profileLink = element('a', '', "Open secure profile link");
      profileLink.href = `../../community/mitglieder/profil/?mitglied=${encodeURIComponent(member.stable_id)}`;
      profileLink.target = '_blank';
      profileLink.rel = 'noreferrer';
      section.append(confirmed, profileLink);
      return section;
    }

    section.append(element('p', '', "The ID connects the profile, portfolio and personal page. It remains unchangeable after confirmation."));
    const form = element('form', 'form-grid');
    const identityField = field({
      id: `stable-id-${member.id}`,
      label: "Suggested MEM-ID",
      value: admin.suggestStableId(member.display_name),
      placeholder: 'MEM-NAME',
      maxLength: 80
    });
    const help = element('small', '', "Uppercase letters, numbers and single hyphens.");
    identityField.wrapper.append(help);
    const submit = element('button', 'button', "Permanently assign MEM-ID");
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
      if (!window.confirm(`${stableId} permanently now ${member.display_name} — assign permanently? This ID cannot be renamed afterwards.`)) return;

      submit.disabled = true;
      setMessage(status, "Checking the member ID on the server …");
      try {
        await admin.assignIdentity(client, { userId: member.id, stableId });
        setMessage(status, `${stableId} has been permanently confirmed.`, 'success');
        await refreshMembers({ preserveMessage: true });
      } catch (error) {
        setMessage(status, admin.describeError(error, "The member ID could not be assigned."), 'error');
        submit.disabled = false;
      }
    });

    section.append(form);
    return section;
  }

  function accountAction(member) {
    const section = element('section', 'member-action account-action');
    section.append(element('h5', '', "Account details"));

    const nameForm = element('form', 'form-grid account-name-form');
    const nameField = field({
      id: `display-name-${member.id}`,
      label: "Display name",
      value: member.display_name,
      placeholder: "Display name",
      maxLength: 120
    });
    const nameReason = field({
      id: `display-name-reason-${member.id}`,
      label: "Reason for the change",
      placeholder: "Why is the name being corrected?",
      rows: 2
    });
    const nameSubmit = element('button', 'button secondary', "Save display name");
    nameSubmit.type = 'submit';
    const nameStatus = statusLine();
    nameForm.append(nameField.wrapper, nameReason.wrapper, nameSubmit, nameStatus);

    nameForm.addEventListener('submit', async event => {
      event.preventDefault();
      let displayName;
      try {
        displayName = admin.normalizeDisplayName(nameField.input.value);
        if (displayName === member.display_name) {
          setMessage(nameStatus, "The display name is already saved.", 'success');
          return;
        }
      } catch (error) {
        setMessage(nameStatus, admin.describeError(error), 'error');
        return;
      }
      nameSubmit.disabled = true;
      setMessage(nameStatus, "Checking and saving the display name …");
      try {
        await admin.updateMemberDisplayName(client, {
          userId: member.id,
          displayName,
          reason: nameReason.input.value
        });
        setMessage(nameStatus, "The display name has been changed and logged.", 'success');
        await refreshMembers({ preserveMessage: true });
      } catch (error) {
        setMessage(nameStatus, admin.describeError(error, "The display name could not be changed."), 'error');
        nameSubmit.disabled = false;
      }
    });

    const accessTools = document.createElement('details');
    accessTools.className = 'admin-disclosure';
    accessTools.append(element('summary', '', "Sign-in and account status"));
    const accessBody = element('div', 'disclosure-body');

    const loginForm = element('form', 'form-grid compact-form');
    loginForm.append(element('p', 'action-explainer', "Sends a new one-time sign-in link to the stored address."));
    const loginReason = field({
      id: `login-link-reason-${member.id}`,
      label: "Reason for the new link",
      placeholder: "e.g. the old invitation link has expired",
      rows: 2
    });
    const loginSubmit = element('button', 'button secondary', "Send new sign-in link");
    loginSubmit.type = 'submit';
    loginSubmit.disabled = member.account_status !== 'active';
    const loginStatus = statusLine();
    loginForm.append(loginReason.wrapper, loginSubmit, loginStatus);

    loginForm.addEventListener('submit', async event => {
      event.preventDefault();
      if (!window.confirm(`Send a real sign-in link now to ${member.email || "the stored address"} senden?`)) return;
      loginSubmit.disabled = true;
      setMessage(loginStatus, "Sending the new sign-in link …");
      try {
        const result = await admin.sendMemberLoginLink(client, {
          userId: member.id,
          reason: loginReason.input.value
        });
        setMessage(
          loginStatus,
          result.audit_recorded
            ? "The sign-in link has been sent and logged."
            : "The sign-in link has been sent; the log entry could not be confirmed.",
          result.audit_recorded ? 'success' : 'error'
        );
        if (result.audit_recorded) await refreshMembers({ preserveMessage: true });
      } catch (error) {
        setMessage(loginStatus, admin.describeError(error, "The sign-in link could not be sent."), 'error');
      } finally {
        loginSubmit.disabled = member.account_status !== 'active';
      }
    });

    const statusForm = element('form', 'form-grid compact-form account-status-form');
    const isPaused = member.account_status === 'paused';
    const isCurrentAccount = member.id === currentData.current_user_id;
    const statusText = isPaused
      ? "Reactivation allows sign-ins again and restores existing permissions that remain valid."
      : "Disabling blocks new sign-ins and immediately invalidates the account's database permissions.";
    statusForm.append(element('p', 'action-explainer', statusText));
    const accountReason = field({
      id: `account-status-reason-${member.id}`,
      label: isPaused ? "Reason for reactivation" : "Reason for disabling",
      placeholder: isPaused ? "Who approved the reactivation?" : "Why is access being temporarily blocked?",
      rows: 2
    });
    const statusSubmit = element(
      'button',
      isPaused ? 'button' : 'button danger-outline',
      isPaused ? "Reactivate account" : "Disable account"
    );
    statusSubmit.type = 'submit';
    statusSubmit.disabled = (!isPaused && member.account_status !== 'active') || (isCurrentAccount && !isPaused);
    const accountStatus = statusLine();
    if (isCurrentAccount && !isPaused) {
      setMessage(accountStatus, "The management account currently in use cannot disable itself here.");
    }
    statusForm.append(accountReason.wrapper, statusSubmit, accountStatus);

    statusForm.addEventListener('submit', async event => {
      event.preventDefault();
      const desiredStatus = isPaused ? 'active' : 'paused';
      const verb = isPaused ? 'reaktivieren' : 'deaktivieren';
      if (!window.confirm(`${member.display_name} now really ${verb}?`)) return;
      statusSubmit.disabled = true;
      setMessage(accountStatus, `The account is being securely ${isPaused ? 'reaktiviert' : "disabled"} …`);
      try {
        await admin.setMemberAccountStatus(client, {
          userId: member.id,
          accountStatus: desiredStatus,
          reason: accountReason.input.value
        });
        setMessage(accountStatus, `The account has been ${isPaused ? 'reaktiviert' : "disabled"} and logged.`, 'success');
        await refreshMembers({ preserveMessage: true });
      } catch (error) {
        setMessage(accountStatus, admin.describeError(error, "The account status could not be changed."), 'error');
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
    section.append(element('h5', '', "Limited neighbourhood permission"));
    if (!currentData.kieze.length) {
      section.append(element('p', '', "There is currently no neighbourhood available to manage."));
      return section;
    }
    if (member.account_status === 'paused') {
      section.append(element('p', 'paused-note', "This account's existing permissions are ineffective while it is disabled."));
    }

    const form = element('form', 'form-grid');
    const selectField = element('div', 'field');
    const selectId = `kiez-${member.id}`;
    const selectLabel = element('label', '', "Neighbourhood");
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
      label: "Reason for the decision",
      placeholder: "Who authorised granting or revoking this permission, and for what?",
      rows: 3
    });
    const submit = element('button', 'button');
    submit.type = 'submit';
    const status = statusLine();

    function updatePermissionState() {
      const active = hasKiezPermission(member, select.value);
      state.textContent = active ? "Permission is currently active." : "Permission is not currently granted.";
      state.className = `permission-state${active ? ' is-active' : ''}`;
      submit.textContent = active ? "Revoke neighbourhood permission" : "Grant neighbourhood permission";
      submit.className = active ? 'button danger-outline' : 'button';
    }

    select.addEventListener('change', updatePermissionState);
    updatePermissionState();
    form.append(selectField, state, permissionReason.wrapper, submit, status);

    form.addEventListener('submit', async event => {
      event.preventDefault();
      const enabled = !hasKiezPermission(member, select.value);
      if (!enabled && !window.confirm(`The permission manage_kiez:${select.value} for ${member.display_name} revoke now?`)) return;
      submit.disabled = true;
      setMessage(status, enabled ? "Checking and granting the neighbourhood permission …" : "Checking and revoking the neighbourhood permission …");
      try {
        await admin.setKiezPermission(client, {
          userId: member.id,
          kiezId: select.value,
          enabled,
          reason: permissionReason.input.value
        });
        setMessage(status, enabled ? "The neighbourhood permission is now active." : "The neighbourhood permission has been revoked.", 'success');
        await refreshMembers({ preserveMessage: true });
      } catch (error) {
        setMessage(status, admin.describeError(error, "The neighbourhood permission could not be changed."), 'error');
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
    titleLine.append(element('h4', '', member.display_name || "New member"));
    if (member.id === currentData.current_user_id) titleLine.append(badge("This management account", 'current'));
    identity.append(titleLine, element('span', 'member-email', member.email || "No email address stored"));
    const badges = element('div', 'member-badges');
    const state = accountState(member);
    const login = loginState(member);
    badges.append(badge(state.label, state.className), badge(login.label, login.className));
    badges.append(member.stable_id ? badge(member.stable_id, 'good') : badge("MEM-ID pending", 'waiting'));
    head.append(identity, badges);

    const details = element('dl', 'member-details');
    details.append(
      detail("Account created", formatDate(member.created_at, "Unknown")),
      detail("Email confirmed", formatDate(member.email_confirmed_at, "Still undecided")),
      detail("Last sign-in", formatDate(member.last_sign_in_at)),
      detail("Additional permissions", permissionSummary(member))
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
    document.getElementById('visible-member-count').textContent = `${members.length} from ${currentData.members.length}`;
    if (!members.length) {
      memberList.append(element('p', 'member-empty', currentData.members.length
        ? "No account matches this search and status."
        : "No accounts yet. Invite the first member using the invitation form."));
      return;
    }
    for (const member of members) memberList.append(renderMember(member));
  }

  const auditLabels = Object.freeze({
    member_admin_granted: "Member management enabled",
    member_invited: "Member invited",
    stable_id_assigned: "Member ID confirmed",
    display_name_changed: "Display name changed",
    login_link_sent: "Sign-in link sent",
    account_paused: "Account disabled",
    account_reactivated: "Account reactivated",
    kiez_permission_granted: "Neighbourhood permission granted",
    kiez_permission_revoked: "Revoke neighbourhood permission"
  });

  function personLabel(person) {
    if (!person) return "Existing system data";
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
    if (details.scope_id) return `${details.permission_key || "Permission"} · ${details.scope_id}`;
    if (details.stable_id) return details.stable_id;
    return '';
  }

  function renderAudit() {
    auditList.replaceChildren();
    if (!currentData.audit.length) {
      auditList.append(element('p', 'member-empty', "No management decision has been logged yet."));
      setMessage(auditStatus, "The history begins with the first logged management action.");
      return;
    }

    for (const event of currentData.audit) {
      const item = element('article', 'audit-entry');
      const head = element('div', 'audit-entry-head');
      head.append(
        element('strong', '', auditLabels[event.action] || event.action),
        element('time', '', formatDate(event.occurred_at, "Time unknown"))
      );
      const route = element('p', 'audit-route');
      route.append(
        element('span', '', personLabel(event.actor)),
        element('span', 'audit-route-separator', "for"),
        element('span', '', personLabel(event.target))
      );
      const reason = element('p', 'audit-reason', event.reason);
      item.append(head, route, reason);
      const details = auditDetails(event);
      if (details) item.append(element('p', 'audit-details', details));
      auditList.append(item);
    }
    setMessage(auditStatus, `${currentData.audit.length} unchangeable management events are shown.`, 'success');
  }

  async function refreshMembers({ preserveMessage = false } = {}) {
    refreshButton.disabled = true;
    if (!preserveMessage) setMessage(directoryStatus, "Loading members, permissions and history securely …");
    try {
      currentData = await admin.listMembers(client);
      renderMembers();
      renderAudit();
      const truncation = currentData.truncated ? " The list currently shows no more than 200 accounts." : '';
      setMessage(directoryStatus, `${currentData.members.length} Accounts have been loaded through the protected server route.${truncation}`, 'success');
      return currentData;
    } finally {
      refreshButton.disabled = false;
    }
  }

  inviteForm.addEventListener('submit', async event => {
    event.preventDefault();
    if (!window.confirm("Send a real invitation email and create the private account now?")) return;
    inviteSubmit.disabled = true;
    setMessage(inviteStatus, "Supabase is creating the private account and sending the invitation …");
    try {
      const displayName = document.getElementById('invite-name').value;
      const email = document.getElementById('invite-email').value;
      const reason = document.getElementById('invite-reason').value;
      const invited = await admin.inviteMember(client, { email, displayName, reason });
      inviteForm.reset();
      setMessage(
        inviteStatus,
        invited.audit_recorded
          ? `Invitation to ${invited.email} sent and logged. Now assign the fixed MEM-ID to the new account below.`
          : `Invitation to ${invited.email} sent. The log entry could not be confirmed.`,
        invited.audit_recorded ? 'success' : 'error'
      );
      await refreshMembers({ preserveMessage: true });
    } catch (error) {
      setMessage(inviteStatus, admin.describeError(error, "The invitation could not be sent."), 'error');
    } finally {
      inviteSubmit.disabled = false;
    }
  });

  refreshButton.addEventListener('click', () => {
    refreshMembers().catch(error => {
      setMessage(directoryStatus, admin.describeError(error, "The member list could not be updated."), 'error');
    });
  });
  searchInput.addEventListener('input', renderMembers);
  statusFilter.addEventListener('change', renderMembers);

  async function initialize() {
    showOnly('loading');
    if (!client || !admin) {
      setConnection("Connection unavailable", 'open');
      forbiddenPanel.querySelector('p:last-of-type').textContent = window.FFE_SUPABASE_ERROR || "The protected connection could not be started.";
      showOnly('forbidden');
      return;
    }

    try {
      const { data, error } = await client.auth.getSession();
      if (error) throw error;
      if (!data.session?.user) {
        setConnection("Sign-in required", 'open');
        showOnly('signed-out');
        return;
      }

      try {
        await refreshMembers();
        setConnection("Member management enabled");
        showOnly('workspace');
      } catch (error) {
        if (error?.code === 'member_admin_forbidden') {
          setConnection("Signed in · not authorised", 'open');
          showOnly('forbidden');
          return;
        }
        setConnection("Member management unavailable", 'open');
        forbiddenPanel.querySelector('p:last-of-type').textContent = admin.describeError(error, "Member management could not be loaded.");
        showOnly('forbidden');
      }
    } catch (error) {
      setConnection("Session could not be checked", 'open');
      forbiddenPanel.querySelector('p:last-of-type').textContent = admin.describeError(error, "The secure session could not be checked.");
      showOnly('forbidden');
    }
  }

  initialize();
})();
