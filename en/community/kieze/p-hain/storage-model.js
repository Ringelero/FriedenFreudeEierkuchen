(function (root, factory) {
  const api = factory(root.document?.body?.dataset?.kiezId);
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.GemDenKiezStorage = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function (requestedKiez) {
  const KIEZ_ID = /^KIEZ-[A-Z0-9][A-Z0-9-]*$/.test(requestedKiez || '') ? requestedKiez : 'KIEZ-P-HAIN';
  const PUBLIC_KINDS = ['event', 'board', 'knowledge'];
  const READ_FIELDS = 'id,kiez_id,kind,title,body,starts_at,ends_at,venue,repair_area,repair_urgency,knowledge_source,knowledge_responsible,knowledge_checked_on,visibility,publication_status,version,created_at,updated_at,author:profiles(display_name)';
  function required(condition, message) { if (!condition) throw new Error(message); }
  async function result(request) { const response = await request; if (response.error) throw response.error; return response.data; }
  function timestamp(value) {
    if (!value) return null;
    const date = new Date(value);
    required(Number.isFinite(date.getTime()), "Please enter a valid date and time.");
    return date.toISOString();
  }
  function localInput(value) {
    if (!value) return '';
    const date = new Date(value);
    const shifted = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
    return shifted.toISOString().slice(0, 16);
  }
  function draftValues(kind, values, existing = null) {
    required([...PUBLIC_KINDS, 'repair'].includes(kind), "Unknown area.");
    const title = String(values.title || '').trim(), body = String(values.body || '').trim();
    required(title.length >= 1 && title.length <= 160, "The heading needs 1 to 160 characters.");
    required(body.length <= 4000, "The text may contain no more than 4000 characters.");
    const base = { requested_kiez_id: KIEZ_ID, requested_kind: kind, entry_id: existing?.id || null, expected_version: existing?.version ?? null, entry_title: title, entry_body: body };
    if (kind === 'repair' || kind === 'knowledge') {
      required(body.length > 0, "Please describe your observation or note.");
      let details;
      if (kind === 'repair') {
        const area = String(values.repair_area || '').trim();
        const urgency = String(values.repair_urgency || '');
        required(area.length <= 200, "The area may contain no more than 200 characters.");
        required(['normal', 'soon', 'danger'].includes(urgency), "Please choose an urgency level.");
        details = { repair_area: area || null, repair_urgency: urgency };
      } else {
        const source = String(values.knowledge_source || '').trim();
        const responsible = String(values.knowledge_responsible || '').trim();
        const checked = String(values.knowledge_checked_on || '');
        required(source.length >= 1 && source.length <= 500, "The source needs 1 to 500 characters.");
        required(responsible.length <= 160, "The contact person may contain no more than 160 characters.");
        if (checked) {
          const date = new Date(`${checked}T00:00:00Z`);
          required(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(checked) && checked.slice(0, 4) !== '0000' && Number.isFinite(date.getTime()) && date.toISOString().slice(0, 10) === checked, "Please enter a valid review date.");
        }
        details = { knowledge_source: source, knowledge_responsible: responsible || null, knowledge_checked_on: checked || null };
      }
      return { ...base, entry_details: details };
    }
    const starts = kind === 'event' ? timestamp(values.starts_at) : null;
    const ends = kind === 'event' ? timestamp(values.ends_at) : null;
    const venue = kind === 'event' ? String(values.venue || '').trim() : '';
    if (kind === 'event') required(starts, "Please enter a start.");
    required(!ends || new Date(ends) > new Date(starts), "The end must be after the start.");
    required(venue.length <= 200, "The place may contain no more than 200 characters.");
    return { ...base, entry_starts_at: starts, entry_ends_at: ends, entry_venue: venue || null };
  }
  async function workspace(client) {
    required(client?.auth?.getUser && client?.rpc, "The account connection is unavailable.");
    const { data, error } = await client.auth.getUser();
    if (!data?.user && (!error || error.name === 'AuthSessionMissingError')) return null;
    if (error) throw error;
    const access = await result(client.rpc('get_kiez_workspace', { requested_kiez_id: KIEZ_ID }));
    required(access && /^MEM-[A-Z0-9][A-Z0-9-]*$/.test(access.member_id), "The member profile could not be checked securely.");
    return { ...access, user_id: data.user.id };
  }
  async function publicEntries(client) {
    required(client?.from, "The neighbourhood connection is unavailable.");
    return (await result(client.from('kiez_entries').select(READ_FIELDS).eq('kiez_id', KIEZ_ID).eq('visibility', 'public').eq('publication_status', 'published').order('created_at', { ascending: false }).limit(100))) || [];
  }
  async function ownEntries(client, access) {
    if (!access) return [];
    const rows = (await result(client.from('kiez_entries').select(`${READ_FIELDS},owner_member_id`).eq('kiez_id', KIEZ_ID).eq('owner_member_id', access.member_id).order('updated_at', { ascending: false }).limit(100))) || [];
    required(rows.every(row => row.owner_member_id === access.member_id), "An entry belonging to someone else was rejected.");
    return rows;
  }
  async function saveDraft(client, kind, values, existing) {
    return result(client.rpc(kind === 'repair' || kind === 'knowledge' ? 'save_kiez_note' : 'save_kiez_entry', draftValues(kind, values, existing)));
  }
  async function changeEntry(client, entry, action) {
    required(['publish', 'withdraw', 'delete'].includes(action), "Unknown action.");
    required(entry.kind !== 'repair' || action !== 'publish', "Repair reports stay private.");
    return result(client.rpc('change_kiez_entry', { entry_id: entry.id, expected_version: entry.version, requested_action: action }));
  }
  return { KIEZ_ID, PUBLIC_KINDS, READ_FIELDS, draftValues, localInput, workspace, publicEntries, ownEntries, saveDraft, changeEntry };
});
