(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  if (root) root.GEMDEN_MEMBER_ADMIN = Object.freeze(api);
})(typeof window === 'object' ? window : null, function () {
  const FUNCTION_NAME = 'member-admin';

  function memberAdminError(code, message) {
    const error = new Error(message);
    error.code = code;
    return error;
  }

  function normalizeEmail(value) {
    const email = String(value || '').trim().toLowerCase();
    if (email.length < 3 || email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      throw memberAdminError('email_invalid', 'Bitte gib eine gültige E-Mail-Adresse ein.');
    }
    return email;
  }

  function normalizeDisplayName(value) {
    const displayName = String(value || '').trim().replace(/\s+/g, ' ');
    if (!displayName || displayName.length > 120 || /[\u0000-\u001f\u007f]/.test(displayName)) {
      throw memberAdminError('display_name_invalid', 'Bitte gib einen Namen mit höchstens 120 Zeichen ein.');
    }
    return displayName;
  }

  function normalizeReason(value) {
    const reason = String(value || '').trim().replace(/\s+/g, ' ');
    if (reason.length < 12 || reason.length > 2000 || /[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/.test(reason)) {
      throw memberAdminError('reason_invalid', 'Bitte dokumentiere die Entscheidung mit mindestens zwölf Zeichen.');
    }
    return reason;
  }

  function normalizeUserId(value) {
    const userId = String(value || '').trim().toLowerCase();
    if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(userId)) {
      throw memberAdminError('member_invalid', 'Das ausgewählte Mitglied ist nicht gültig.');
    }
    return userId;
  }

  function normalizeStableId(value) {
    const stableId = String(value || '').trim().toUpperCase();
    if (!/^MEM-[A-Z0-9]+(?:-[A-Z0-9]+)*$/.test(stableId) || stableId.length > 80) {
      throw memberAdminError('stable_id_invalid', 'Die Mitglieds-ID muss mit MEM- beginnen und darf nur Großbuchstaben, Zahlen und einzelne Bindestriche enthalten.');
    }
    return stableId;
  }

  function suggestStableId(displayName) {
    const suffix = String(displayName || '')
      .normalize('NFKD')
      .replace(/[\u0300-\u036f]/g, '')
      .toUpperCase()
      .replace(/[^A-Z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')
      .slice(0, 64);
    return suffix ? `MEM-${suffix}` : '';
  }

  async function errorPayload(error) {
    const context = error?.context;
    if (!context || typeof context.json !== 'function') return null;
    try {
      return await context.json();
    } catch {
      return null;
    }
  }

  async function unwrapInvocation(result, fallback) {
    if (!result?.error) return result?.data;
    const payload = await errorPayload(result.error);
    throw memberAdminError(
      payload?.code || result.error.code || 'member_admin_failed',
      payload?.message || fallback
    );
  }

  function requireFunctionClient(client) {
    if (!client?.functions || typeof client.functions.invoke !== 'function') {
      throw memberAdminError('member_admin_unavailable', 'Die geschützte Mitgliederverwaltung ist momentan nicht verfügbar.');
    }
  }

  function requireRpcClient(client) {
    if (!client || typeof client.rpc !== 'function') {
      throw memberAdminError('member_admin_unavailable', 'Die geschützte Mitgliederverwaltung ist momentan nicht verfügbar.');
    }
  }

  async function listMembers(client) {
    requireFunctionClient(client);
    const result = await client.functions.invoke(FUNCTION_NAME, { method: 'GET' });
    const data = await unwrapInvocation(result, 'Die Mitgliederliste konnte nicht geladen werden.');
    if (!data
      || !Array.isArray(data.members)
      || !Array.isArray(data.kieze)
      || !Array.isArray(data.audit)
      || typeof data.current_user_id !== 'string') {
      throw memberAdminError('member_list_invalid', 'Die Mitgliederliste wurde nicht vollständig bestätigt.');
    }
    return data;
  }

  async function invokeAction(client, body, fallback) {
    requireFunctionClient(client);
    const result = await client.functions.invoke(FUNCTION_NAME, {
      method: 'POST',
      body
    });
    return await unwrapInvocation(result, fallback);
  }

  async function inviteMember(client, { email, displayName, reason }) {
    requireFunctionClient(client);
    const payload = {
      action: 'invite',
      email: normalizeEmail(email),
      display_name: normalizeDisplayName(displayName),
      reason: normalizeReason(reason)
    };
    const data = await invokeAction(client, payload, 'Die Einladung konnte nicht versendet werden.');
    if (!data?.invited?.id || data.invited.email !== payload.email) {
      throw memberAdminError('invite_unconfirmed', 'Der Server hat die Einladung nicht vollständig bestätigt.');
    }
    return data.invited;
  }

  async function updateMemberDisplayName(client, { userId, displayName, reason }) {
    const payload = {
      action: 'update_display_name',
      user_id: normalizeUserId(userId),
      display_name: normalizeDisplayName(displayName),
      reason: normalizeReason(reason)
    };
    const data = await invokeAction(client, payload, 'Der Anzeigename konnte nicht geändert werden.');
    if (data?.account?.user_id !== payload.user_id || data.account.display_name !== payload.display_name) {
      throw memberAdminError('account_change_unconfirmed', 'Der Server hat den neuen Anzeigenamen nicht bestätigt.');
    }
    return data.account;
  }

  async function sendMemberLoginLink(client, { userId, reason }) {
    const payload = {
      action: 'send_login_link',
      user_id: normalizeUserId(userId),
      reason: normalizeReason(reason)
    };
    const data = await invokeAction(client, payload, 'Der neue Login-Link konnte nicht versendet werden.');
    if (data?.login_link?.user_id !== payload.user_id || data.login_link.sent !== true) {
      throw memberAdminError('login_link_unconfirmed', 'Der Server hat den Linkversand nicht bestätigt.');
    }
    return data.login_link;
  }

  async function setMemberAccountStatus(client, { userId, accountStatus, reason }) {
    const normalizedStatus = String(accountStatus || '').trim().toLowerCase();
    if (normalizedStatus !== 'active' && normalizedStatus !== 'paused') {
      throw memberAdminError('account_status_invalid', 'Der gewünschte Kontostatus ist nicht gültig.');
    }
    const payload = {
      action: 'set_account_status',
      user_id: normalizeUserId(userId),
      account_status: normalizedStatus,
      reason: normalizeReason(reason)
    };
    const data = await invokeAction(client, payload, 'Der Kontostatus konnte nicht geändert werden.');
    if (data?.account?.user_id !== payload.user_id || data.account.account_status !== normalizedStatus) {
      throw memberAdminError('account_change_unconfirmed', 'Der Server hat den neuen Kontostatus nicht bestätigt.');
    }
    return data.account;
  }

  async function assignIdentity(client, { userId, stableId }) {
    requireRpcClient(client);
    const normalizedStableId = normalizeStableId(stableId);
    const { data, error } = await client.rpc('assign_member_identity', {
      target_user_id: userId,
      target_stable_id: normalizedStableId
    });
    if (error) throw error;
    const row = Array.isArray(data) ? data[0] : data;
    if (row?.user_id !== userId || row?.stable_id !== normalizedStableId) {
      throw memberAdminError('stable_id_unconfirmed', 'Die Datenbank hat die Mitglieds-ID nicht bestätigt.');
    }
    return row;
  }

  async function setKiezPermission(client, { userId, kiezId, enabled, reason }) {
    requireRpcClient(client);
    const normalizedReason = normalizeReason(reason);
    if (!/^KIEZ-[A-Z0-9][A-Z0-9-]*$/.test(String(kiezId || ''))) {
      throw memberAdminError('kiez_invalid', 'Bitte wähle einen gültigen Kiez aus.');
    }

    const { data, error } = await client.rpc('set_member_kiez_permission', {
      target_user_id: userId,
      target_kiez_id: kiezId,
      requested_enabled: Boolean(enabled),
      decision_reason: normalizedReason
    });
    if (error) throw error;
    const row = Array.isArray(data) ? data[0] : data;
    if (!row || row.permission_active !== Boolean(enabled)) {
      throw memberAdminError('permission_unconfirmed', 'Die Datenbank hat die Rechteänderung nicht bestätigt.');
    }
    return row;
  }

  function describeError(error, fallback = 'Die Aktion konnte nicht abgeschlossen werden.') {
    const source = `${error?.code || ''} ${error?.message || error || ''}`.toLowerCase();
    if (/member_admin_forbidden|member administration permission required|42501/.test(source)) {
      return 'Dieses Konto ist nicht für die Mitgliederverwaltung freigeschaltet.';
    }
    if (/23505|already assigned|duplicate/.test(source)) {
      return 'Diese Mitglieds-ID ist bereits vergeben.';
    }
    if (/23514|cannot be replaced/.test(source)) {
      return 'Eine bestätigte Mitglieds-ID kann nicht nachträglich ersetzt werden.';
    }
    if (/email_invalid|display_name_invalid|stable_id_invalid|reason_invalid|kiez_invalid/.test(source)) {
      return error.message;
    }
    if (/member_exists/.test(source)) {
      return error.message;
    }
    if (/rate|too many|invite_rate_limited/.test(source)) {
      return 'Zu viele Einladungen in kurzer Zeit. Bitte warte kurz und versuche es dann erneut.';
    }
    if (/self_pause_forbidden/.test(source)) {
      return 'Das aktuell verwendete Verwaltungskonto kann sich nicht selbst deaktivieren.';
    }
    if (/account_not_active/.test(source)) {
      return 'Für ein deaktiviertes Konto kann kein Login-Link versendet werden.';
    }
    if (/account_archived/.test(source)) {
      return 'Archivierte Konten brauchen einen eigenen Aufbewahrungsablauf.';
    }
    if (/network|fetch|offline/.test(source)) {
      return 'Die Verwaltung konnte den Server nicht erreichen. Bitte prüfe die Verbindung.';
    }
    return fallback;
  }

  return {
    assignIdentity,
    describeError,
    inviteMember,
    listMembers,
    normalizeDisplayName,
    normalizeEmail,
    normalizeReason,
    normalizeStableId,
    normalizeUserId,
    sendMemberLoginLink,
    setMemberAccountStatus,
    setKiezPermission,
    suggestStableId,
    updateMemberDisplayName
  };
});
