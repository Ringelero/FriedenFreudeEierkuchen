(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else {
    root.GemDenServiceMeetings = api;
    root.document.querySelectorAll('[data-service-meetings]').forEach(element => api.mount(element, root.FFE_SUPABASE_CLIENT));
  }
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  function requireValue(condition, message) { if (!condition) throw new Error(message); }
  async function result(request) { const response = await request; if (response.error) throw response.error; return response.data; }
  function dateParts(date, zone) {
    return Object.fromEntries(new Intl.DateTimeFormat('en-CA', {
      timeZone: zone, year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hourCycle: 'h23'
    }).formatToParts(date).filter(part => part.type !== 'literal').map(part => [part.type, part.value]));
  }
  function localInput(value, zone) {
    if (!value) return '';
    const p = dateParts(new Date(value), zone);
    return `${p.year}-${p.month}-${p.day}T${p.hour}:${p.minute}`;
  }
  function zonedInstant(value, zone) {
    const input = String(value || '');
    requireValue(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/.test(input), 'Bitte gib ein vollständiges Datum mit Uhrzeit an.');
    const naive = new Date(`${input}:00Z`);
    requireValue(Number.isFinite(naive.getTime()) && naive.toISOString().slice(0, 16) === input, 'Bitte gib ein gültiges Datum an.');
    const candidates = new Set();
    // Check both sides of an offset change; silently normalizing DST gaps would move a meeting.
    for (const hours of [-36, -12, 0, 12, 36]) {
      const sample = new Date(naive.getTime() + hours * 3600000);
      const parts = dateParts(sample, zone);
      const offset = Date.parse(`${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}:00Z`) - sample.getTime();
      const candidate = new Date(naive.getTime() - offset);
      if (localInput(candidate, zone) === input) candidates.add(candidate.toISOString());
    }
    requireValue(candidates.size > 0, 'Diese Uhrzeit gibt es wegen der Zeitumstellung am Treffort nicht. Bitte wähle eine andere Uhrzeit.');
    requireValue(candidates.size === 1, 'Diese Uhrzeit kommt wegen der Zeitumstellung zweimal vor. Bitte wähle eine eindeutige Uhrzeit.');
    return [...candidates][0];
  }
  function draftValues(serviceId, values, existing = null) {
    requireValue(/^SERVICE-[A-Z0-9][A-Z0-9-]*$/.test(serviceId), 'Die Leistung ist nicht verfügbar.');
    const details = {};
    for (const [key, min, max, label] of [
      ['title', 1, 160, 'Titel'], ['body', 0, 4000, 'Beschreibung'], ['venue', 1, 300, 'Treffpunkt'],
      ['contact', 1, 500, 'Ansprechperson und Kontakt'], ['cost_note', 1, 500, 'Kostenrahmen'],
      ['participation_note', 1, 2000, 'Teilnahmebedingungen'], ['change_note', 0, 1000, 'Änderungshinweis']
    ]) {
      const value = String(values[key] || '').trim();
      requireValue(value.length >= min && value.length <= max, `${label}: Bitte gib ${min ? '1 bis ' : 'höchstens '}${max} Zeichen ein.`);
      details[key] = value;
    }
    details.time_zone = String(values.time_zone || Intl.DateTimeFormat().resolvedOptions().timeZone);
    try { dateParts(new Date(), details.time_zone); } catch { throw new Error('Bitte wähle eine gültige Zeitzone.'); }
    details.starts_at = zonedInstant(values.starts_at, details.time_zone);
    details.ends_at = values.ends_at ? zonedInstant(values.ends_at, details.time_zone) : null;
    requireValue(!details.ends_at || details.ends_at > details.starts_at, 'Das Ende muss nach dem Beginn liegen.');
    const capacity = String(values.capacity ?? '').trim();
    requireValue(!capacity || /^\d+$/.test(capacity) && Number(capacity) >= 1 && Number(capacity) <= 500, 'Bitte gib 1 bis 500 Plätze an oder lasse die Platzzahl offen.');
    details.capacity = capacity ? Number(capacity) : null;
    if (existing?.state === 'published') requireValue(details.change_note.length > 0, 'Bitte beschreibe die Änderung für die bereits angemeldeten Personen.');
    return { requested_service_id: serviceId, meeting_id: existing?.id || null, expected_version: existing?.version ?? null, details };
  }
  async function publicMeetings(client, serviceId) {
    requireValue(client?.rpc, 'Die Treffen können gerade nicht geladen werden.');
    return await result(client.rpc('list_service_meetings', { requested_service_id: serviceId })) || [];
  }
  async function workspace(client, serviceId) {
    requireValue(client?.auth?.getUser, 'Die Verbindung zum Konto ist gerade nicht verfügbar.');
    const { data, error } = await client.auth.getUser();
    if (!data?.user && (!error || error.name === 'AuthSessionMissingError')) return null;
    if (error) throw error;
    const access = await result(client.rpc('get_service_meeting_workspace', { requested_service_id: serviceId }));
    requireValue(access && typeof access.can_manage === 'boolean' && typeof access.can_join === 'boolean'
      && Array.isArray(access.registrations) && Array.isArray(access.managed_meetings), 'Deine Treffrechte konnten nicht geprüft werden.');
    return { ...access, user_id: data.user.id };
  }
  async function save(client, serviceId, values, existing) {
    return result(client.rpc('save_service_meeting', draftValues(serviceId, values, existing)));
  }
  async function change(client, meeting, action, reason = '') {
    requireValue(['publish', 'cancel', 'delete'].includes(action), 'Unbekannte Treffaktion.');
    return result(client.rpc('change_service_meeting', { meeting_id: meeting.id, expected_version: meeting.version, requested_action: action, reason }));
  }
  async function register(client, meeting, state) {
    requireValue(['attending', 'withdrawn'].includes(state), 'Unbekannte Anmeldeaktion.');
    return result(client.rpc('set_service_meeting_registration', { meeting_id: meeting.id, expected_version: meeting.version, requested_state: state }));
  }
  async function roster(client, meeting) { return await result(client.rpc('get_service_meeting_roster', { meeting_id: meeting.id })) || []; }
  function when(meeting, value = meeting.starts_at) {
    return new Intl.DateTimeFormat('de-DE', { dateStyle: 'medium', timeStyle: 'short', timeZone: meeting.time_zone }).format(new Date(value));
  }
  function timeRange(meeting) {
    let text = when(meeting);
    if (meeting.ends_at) {
      const sameDay = localInput(meeting.starts_at, meeting.time_zone).slice(0, 10) === localInput(meeting.ends_at, meeting.time_zone).slice(0, 10);
      text += ` – ${sameDay ? new Intl.DateTimeFormat('de-DE', { hour: '2-digit', minute: '2-digit', timeZone: meeting.time_zone }).format(new Date(meeting.ends_at)) : when(meeting, meeting.ends_at)}`;
    }
    const zone = new Intl.DateTimeFormat('de-DE', { timeZone: meeting.time_zone, timeZoneName: 'short' }).formatToParts(new Date(meeting.starts_at)).find(part => part.type === 'timeZoneName')?.value;
    return `${text} ${zone || meeting.time_zone}`;
  }

  function mount(root, client) {
    const serviceId = root.dataset.serviceMeetings;
    const doc = root.ownerDocument;
    const find = selector => root.querySelector(selector);
    const feed = find('[data-meeting-feed]'), own = find('[data-meeting-own]'), manager = find('[data-meeting-manager]');
    const form = find('[data-meeting-form]'), managed = find('[data-meeting-managed]');
    const status = find('[data-meeting-status]'), accessNote = find('[data-meeting-access]');
    let access = null, editing = null, loading = false, pendingReload = false, epoch = 0, busy = false;
    function node(tag, text, className) {
      const el = doc.createElement(tag); if (text !== undefined) el.textContent = text; if (className) el.className = className; return el;
    }
    function say(text, error = false) { status.textContent = text; status.classList.toggle('is-error', error); }
    function fail(error) {
      if (error?.code === '40001') return `${error.message} Deine Eingabe bleibt erhalten. Aktualisiere die Treffen und öffne den aktuellen Stand vor dem erneuten Speichern.`;
      if (/network|fetch|offline|load failed/i.test(error?.message || '')) return 'Die Verbindung ist unterbrochen. Es wurde nichts bestätigt. Bitte versuche es erneut.';
      return error?.message || 'Die Aktion konnte nicht bestätigt werden. Bitte lade die Treffen neu.';
    }
    function clearPrivate() {
      access = null; editing = null; own.replaceChildren(); own.hidden = true; managed.replaceChildren();
      manager.hidden = true; form.reset(); form.hidden = true;
    }
    async function run(button, action, success) {
      if (busy) return;
      busy = true; button.disabled = true; const token = epoch;
      try {
        await action();
        if (token !== epoch) return;
        say(success); await reload(true);
      } catch (error) { if (token === epoch) say(fail(error), true); }
      finally { busy = false; if (button.isConnected) button.disabled = false; }
    }
    function action(label, callback, className = 'secondary') {
      const button = node('button', label, `button ${className}`); button.type = 'button';
      button.addEventListener('click', () => callback(button)); return button;
    }
    function card(meeting, registration, management = false) {
      const article = node('article', undefined, 'meeting-card');
      article.dataset.meetingId = meeting.id;
      article.append(node('span', { draft: 'Privater Entwurf', published: 'Treff', cancelled: 'Abgesagt' }[meeting.state], `meeting-state ${meeting.state}`));
      article.append(node('h4', meeting.title));
      const meta = node('dl', undefined, 'meeting-meta');
      for (const [label, text] of [
        ['Wann', timeRange(meeting)],
        ['Treffpunkt', meeting.venue], ['Kontakt', meeting.contact], ['Kosten', meeting.cost_note]
      ]) { meta.append(node('dt', label), node('dd', text)); }
      article.append(meta);
      if (meeting.body) article.append(node('p', meeting.body, 'meeting-text'));
      const conditions = node('details', undefined, 'meeting-conditions');
      conditions.append(node('summary', 'Teilnahme & Absprachen'), node('p', meeting.participation_note)); article.append(conditions);
      if (meeting.change_note) article.append(node('p', `${meeting.state === 'cancelled' ? 'Absage' : 'Geändert'}: ${meeting.change_note}`, 'meeting-notice'));
      const full = meeting.capacity !== null && meeting.attending_count >= meeting.capacity;
      article.append(node('p', meeting.capacity === null ? `${meeting.attending_count} angemeldet · Platzzahl offen`
        : `${meeting.attending_count} angemeldet · ${meeting.capacity} ${meeting.capacity === 1 ? 'Platz' : 'Plätze'} insgesamt`, 'meeting-count'));
      const buttons = node('div', undefined, 'button-row');
      if (management) {
        if (meeting.state !== 'cancelled') buttons.append(action('Bearbeiten', () => openForm(meeting)));
        if (meeting.state === 'draft') {
          buttons.append(action('Veröffentlichen', button => run(button, () => change(client, meeting, 'publish'), 'Der Treff ist veröffentlicht.'), ''));
          buttons.append(action('Entwurf löschen', button => run(button, () => change(client, meeting, 'delete'), 'Der Entwurf wurde gelöscht.')));
        } else {
          buttons.append(action('Anmeldungen ansehen', async button => {
            const token = epoch; button.disabled = true;
            try {
              const rows = await roster(client, meeting); if (token !== epoch || !access?.can_manage) return;
              let list = article.querySelector('[data-meeting-roster]');
              if (!list) { list = node('div', undefined, 'meeting-roster'); list.dataset.meetingRoster = ''; article.append(list); }
              list.replaceChildren(node('h5', 'Anmeldungen · nur für die Treffverwaltung'));
              if (!rows.length) list.append(node('p', 'Noch keine Anmeldungen.'));
              for (const row of rows) list.append(node('p', `${row.display_name} (${row.member_id}) · ${row.state === 'attending' ? 'Dabei' : 'Abgemeldet'}${row.needs_review ? ' · Änderung noch nicht bestätigt' : ''}`));
            } catch (error) { if (token === epoch) say(fail(error), true); }
            finally { if (button.isConnected) button.disabled = false; }
          }));
          if (meeting.state === 'published') {
            const cancellation = node('details', undefined, 'meeting-cancel'); cancellation.append(node('summary', 'Treff absagen'));
            const label = node('label', 'Absagehinweis'), field = node('textarea');
            field.maxLength = 1000; field.rows = 2; label.append(field); cancellation.append(label);
            cancellation.append(action('Absage veröffentlichen', button => {
              if (!field.value.trim()) { field.focus(); say('Bitte gib zuerst einen Absagehinweis ein.', true); return; }
              run(button, () => change(client, meeting, 'cancel', field.value.trim()), 'Die Absage ist am Termin sichtbar.');
            })); article.append(cancellation);
          }
        }
      } else if (registration?.state === 'attending') {
        const changed = registration.acknowledged_version !== meeting.version;
        article.append(node('p', meeting.state === 'cancelled' ? 'Dieser Treff wurde abgesagt.' : changed ? 'Der Termin wurde geändert. Bitte prüfe die aktuellen Angaben.' : 'Du bist dabei.', 'meeting-notice'));
        if (changed && meeting.state === 'published' && new Date(meeting.starts_at) > new Date() && access?.can_join)
          buttons.append(action('Änderung bestätigen', button => run(button, () => register(client, meeting, 'attending'), 'Die aktuellen Treffangaben sind bestätigt.')));
        buttons.append(action('Wieder abmelden', button => run(button, () => register(client, meeting, 'withdrawn'), 'Du bist abgemeldet.')));
      } else if (meeting.state === 'published' && new Date(meeting.starts_at) > new Date()) {
        if (!access) {
          const link = node('a', 'Im Konto anmelden', 'button secondary'); link.href = '../../konto/'; buttons.append(link);
        } else if (access.can_join) {
          const button = action(full ? 'Zurzeit ausgebucht' : 'Ich bin dabei', button => run(button, () => register(client, meeting, 'attending'), 'Dein Platz ist reserviert.'), '');
          button.disabled = full; buttons.append(button);
          if (!full) article.append(node('p', 'Mit deiner Anmeldung reservierst du einen Platz für dich zu den oben genannten Bedingungen.', 'meeting-help'));
        }
      }
      article.append(buttons); return article;
    }
    function render(publicRows) {
      feed.replaceChildren();
      const mine = new Map((access?.registrations || []).map(row => [row.meeting.id, row]));
      if (!publicRows.length) {
        const empty = node('div', undefined, 'meeting-empty'); empty.append(node('strong', 'Der erste Treff kommt noch.'), node('p', 'Sobald Ort, Zeit und die Absprachen feststehen, findest du den Termin hier. Dann kannst du dir mit deinem Konto einen Platz reservieren.')); feed.append(empty);
      }
      for (const meeting of publicRows) feed.append(card(meeting, mine.get(meeting.id)));
      own.replaceChildren();
      const visibleIds = new Set(publicRows.map(row => row.id));
      const registrations = (access?.registrations || []).filter(row => row.state === 'attending' && !visibleIds.has(row.meeting.id));
      own.hidden = !registrations.length;
      if (registrations.length) {
        own.append(node('h3', 'Deine weiteren Anmeldungen'));
        for (const row of registrations) own.append(card(row.meeting, row));
      }
      manager.hidden = !access?.can_manage;
      managed.replaceChildren();
      if (access?.can_manage) {
        if (!access.managed_meetings.length) managed.append(node('p', 'Noch keine eigenen Treffen. Beginne mit einem privaten Entwurf.'));
        access.managed_meetings.forEach(meeting => managed.append(card(meeting, null, true)));
      }
    }
    function openForm(meeting = null) {
      if (!access?.can_manage) return;
      if (!form.hidden && !globalThis.confirm('Die ungesicherte Eingabe verwerfen und einen anderen Stand öffnen?')) return;
      editing = meeting; form.reset();
      const zone = meeting?.time_zone || Intl.DateTimeFormat().resolvedOptions().timeZone;
      form.elements.time_zone.value = zone;
      for (const key of ['title', 'body', 'venue', 'contact', 'cost_note', 'participation_note', 'capacity']) form.elements[key].value = meeting?.[key] ?? '';
      for (const key of ['starts_at', 'ends_at']) form.elements[key].value = localInput(meeting?.[key], zone);
      find('[data-meeting-change-field]').hidden = meeting?.state !== 'published';
      form.elements.change_note.required = meeting?.state === 'published';
      find('[data-meeting-save]').textContent = meeting?.state === 'published' ? 'Änderung veröffentlichen' : 'Entwurf speichern';
      form.hidden = false; form.dataset.owner = access.user_id; form.elements.title.focus();
      say(meeting?.state === 'published' ? 'Du bearbeitest einen veröffentlichten Treff. Dein Änderungshinweis wird mit angezeigt.' : 'Dein Entwurf wird erst nach einer eigenen Freigabe öffentlich.');
    }
    async function reload(keepMessage = false) {
      if (loading) { pendingReload = true; return; }
      loading = true; const token = epoch;
      if (!keepMessage) say('Treffen werden geladen …');
      try {
        const results = await Promise.allSettled([publicMeetings(client, serviceId), workspace(client, serviceId)]);
        if (token !== epoch) return;
        if (results[1].status === 'fulfilled') {
          const nextAccess = results[1].value;
          if (access?.user_id !== nextAccess?.user_id || access?.can_manage && !nextAccess?.can_manage) clearPrivate();
          access = nextAccess;
        } else { clearPrivate(); }
        accessNote.replaceChildren();
        if (!access) {
          accessNote.append(node('span', results[1].status === 'rejected' ? 'Dein Konto konnte gerade nicht geprüft werden. ' : 'Zum Mitgehen brauchst du ein aktives Mitgliedskonto. '));
          const link = node('a', 'Zum Konto'); link.href = '../../konto/'; accessNote.append(link);
        } else if (!access.can_join) accessNote.append(node('span', 'Dein Konto kann sich derzeit nicht neu anmelden. Bestehende Anmeldungen kannst du zurücknehmen.'));
        else accessNote.append(node('span', 'Deine Anmeldung bleibt privat. Nur die Treffverwaltung sieht deinen Namen.'));
        if (results[0].status === 'rejected') {
          feed.replaceChildren(node('p', 'Die Termine können gerade nicht geladen werden. Bitte versuche es erneut.'));
          // Do not present a failed fetch as an empty calendar, or keep stale private controls.
          own.replaceChildren(); own.hidden = true; managed.replaceChildren(); manager.hidden = true;
          say(fail(results[0].reason), true);
        } else {
          render(results[0].value);
          if (results[1].status === 'rejected') say('Die öffentlichen Treffen sind geladen. Deine Anmeldung konnte gerade nicht geprüft werden. Bitte aktualisiere die Seite.', true);
          else if (!keepMessage) say(results[0].value.length ? 'Treffen aktualisiert.' : 'Noch kein Treff veröffentlicht.');
        }
      } finally { loading = false; if (pendingReload) { pendingReload = false; reload(keepMessage); } }
    }
    const zoneSelect = form.elements.time_zone;
    const localZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const zones = new Set(['UTC', localZone, ...(Intl.supportedValuesOf ? Intl.supportedValuesOf('timeZone') : ['Europe/Berlin', 'Europe/London', 'America/New_York', 'Asia/Bangkok'])]);
    for (const zone of [...zones].sort()) { const option = node('option', zone.replaceAll('_', ' ')); option.value = zone; zoneSelect.append(option); }
    find('[data-meeting-new]').addEventListener('click', () => openForm());
    find('[data-meeting-close-form]').addEventListener('click', () => { form.hidden = true; form.reset(); editing = null; });
    find('[data-meeting-refresh]').addEventListener('click', () => reload());
    form.addEventListener('submit', event => {
      event.preventDefault();
      if (!access?.can_manage || form.dataset.owner !== access.user_id) { clearPrivate(); return; }
      const button = find('[data-meeting-save]'); const token = epoch;
      const values = Object.fromEntries(new FormData(form));
      run(button, async () => {
        await save(client, serviceId, values, editing);
        if (token === epoch) { form.hidden = true; form.reset(); editing = null; }
      }, editing?.state === 'published' ? 'Die Änderung ist veröffentlicht. Bereits angemeldete Personen sehen einen Prüfhinweis.' : 'Der private Entwurf ist gespeichert.');
    });
    client?.auth?.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_OUT' || event === 'SIGNED_IN' && session?.user?.id !== access?.user_id) {
        epoch++; clearPrivate(); feed.replaceChildren(); accessNote.replaceChildren();
        setTimeout(() => reload(), 0);
      }
    });
    reload();
    return { reload };
  }
  return { draftValues, zonedInstant, localInput, timeRange, publicMeetings, workspace, save, change, register, roster, mount };
});
