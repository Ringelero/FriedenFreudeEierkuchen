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
    if (!data || !Array.isArray(data.members) || !Array.isArray(data.kieze)) {
      throw memberAdminError('member_list_invalid', 'Die Mitgliederliste wurde nicht vollständig bestätigt.');
    }
    return data;
  }

  async function inviteMember(client, { email, displayName }) {
    requireFunctionClient(client);
    const payload = {
      action: 'invite',
      email: normalizeEmail(email),
      display_name: normalizeDisplayName(displayName)
    };
    const result = await client.functions.invoke(FUNCTION_NAME, {
      method: 'POST',
      body: payload
    });
    const data = await unwrapInvocation(result, 'Die Einladung konnte nicht versendet werden.');
    if (!data?.invited?.id || data.invited.email !== payload.email) {
      throw memberAdminError('invite_unconfirmed', 'Der Server hat die Einladung nicht vollständig bestätigt.');
    }
    return data.invited;
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
    const normalizedReason = String(reason || '').trim();
    if (normalizedReason.length < 12 || normalizedReason.length > 2000) {
      throw memberAdminError('reason_invalid', 'Bitte dokumentiere die Entscheidung mit mindestens zwölf Zeichen.');
    }
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
    normalizeStableId,
    setKiezPermission,
    suggestStableId
  };
});
