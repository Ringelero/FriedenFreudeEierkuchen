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
    requireValue(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/.test(input), "Please enter a complete date and time.");
    const naive = new Date(`${input}:00Z`);
    requireValue(Number.isFinite(naive.getTime()) && naive.toISOString().slice(0, 16) === input, "Please enter a valid date.");
    const candidates = new Set();
    // Check both sides of an offset change; silently normalizing DST gaps would move a meeting.
    for (const hours of [-36, -12, 0, 12, 36]) {
      const sample = new Date(naive.getTime() + hours * 3600000);
      const parts = dateParts(sample, zone);
      const offset = Date.parse(`${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}:00Z`) - sample.getTime();
      const candidate = new Date(naive.getTime() - offset);
      if (localInput(candidate, zone) === input) candidates.add(candidate.toISOString());
    }
    requireValue(candidates.size > 0, "This time does not exist because the clocks change at the meeting place. Please choose another time.");
    requireValue(candidates.size === 1, "This time occurs twice because the clocks change. Please choose an unambiguous time.");
    return [...candidates][0];
  }
  function draftValues(serviceId, values, existing = null) {
    requireValue(/^SERVICE-[A-Z0-9][A-Z0-9-]*$/.test(serviceId), "The service is unavailable.");
    const details = {};
    for (const [key, min, max, label] of [
      ['title', 1, 160, "Title"], ['body', 0, 4000, "Description"], ['venue', 1, 300, "Meeting point"],
      ['contact', 1, 500, "Contact person and contact details"], ['cost_note', 1, 500, "Cost arrangements"],
      ['participation_note', 1, 2000, "Participation conditions"], ['change_note', 0, 1000, "Change notice"]
    ]) {
      const value = String(values[key] || '').trim();
      requireValue(value.length >= min && value.length <= max, `${label}: please enter ${min ? "1 to " : "at most "}${max} characters.`);
      details[key] = value;
    }
    details.time_zone = String(values.time_zone || Intl.DateTimeFormat().resolvedOptions().timeZone);
    try { dateParts(new Date(), details.time_zone); } catch { throw new Error("Please choose a valid time zone."); }
    details.starts_at = zonedInstant(values.starts_at, details.time_zone);
    details.ends_at = values.ends_at ? zonedInstant(values.ends_at, details.time_zone) : null;
    requireValue(!details.ends_at || details.ends_at > details.starts_at, "The end must be after the start.");
    const capacity = String(values.capacity ?? '').trim();
    requireValue(!capacity || /^\d+$/.test(capacity) && Number(capacity) >= 1 && Number(capacity) <= 500, "Please enter 1 to 500 places or leave the number of places open.");
    details.capacity = capacity ? Number(capacity) : null;
    if (existing?.state === 'published') requireValue(details.change_note.length > 0, "Please describe the change for people who have already registered.");
    return { requested_service_id: serviceId, meeting_id: existing?.id || null, expected_version: existing?.version ?? null, details };
  }
  async function publicMeetings(client, serviceId) {
    requireValue(client?.rpc, "The meetups cannot be loaded right now.");
    return await result(client.rpc('list_service_meetings', { requested_service_id: serviceId })) || [];
  }
  async function workspace(client, serviceId) {
    requireValue(client?.auth?.getUser, "The account connection is currently unavailable.");
    const { data, error } = await client.auth.getUser();
    if (!data?.user && (!error || error.name === 'AuthSessionMissingError')) return null;
    if (error) throw error;
    const access = await result(client.rpc('get_service_meeting_workspace', { requested_service_id: serviceId }));
    requireValue(access && typeof access.can_manage === 'boolean' && typeof access.can_join === 'boolean'
      && Array.isArray(access.registrations) && Array.isArray(access.managed_meetings), "Your meetup permissions could not be checked.");
    return { ...access, user_id: data.user.id };
  }
  async function save(client, serviceId, values, existing) {
    return result(client.rpc('save_service_meeting', draftValues(serviceId, values, existing)));
  }
  async function change(client, meeting, action, reason = '') {
    requireValue(['publish', 'cancel', 'delete'].includes(action), "Unknown meetup action.");
    return result(client.rpc('change_service_meeting', { meeting_id: meeting.id, expected_version: meeting.version, requested_action: action, reason }));
  }
  async function register(client, meeting, state) {
    requireValue(['attending', 'withdrawn'].includes(state), "Unknown registration action.");
    return result(client.rpc('set_service_meeting_registration', { meeting_id: meeting.id, expected_version: meeting.version, requested_state: state }));
  }
  async function roster(client, meeting) { return await result(client.rpc('get_service_meeting_roster', { meeting_id: meeting.id })) || []; }
  function when(meeting, value = meeting.starts_at) {
    return new Intl.DateTimeFormat("en-GB", { dateStyle: 'medium', timeStyle: 'short', timeZone: meeting.time_zone }).format(new Date(value));
  }
  function timeRange(meeting) {
    let text = when(meeting);
    if (meeting.ends_at) {
      const sameDay = localInput(meeting.starts_at, meeting.time_zone).slice(0, 10) === localInput(meeting.ends_at, meeting.time_zone).slice(0, 10);
      text += ` – ${sameDay ? new Intl.DateTimeFormat("en-GB", { hour: '2-digit', minute: '2-digit', timeZone: meeting.time_zone }).format(new Date(meeting.ends_at)) : when(meeting, meeting.ends_at)}`;
    }
    const zone = new Intl.DateTimeFormat("en-GB", { timeZone: meeting.time_zone, timeZoneName: 'short' }).formatToParts(new Date(meeting.starts_at)).find(part => part.type === 'timeZoneName')?.value;
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
      if (error?.code === '40001') return `${error.message} Your input will be kept. Refresh the meetups and open the current version before saving again.`;
      if (/network|fetch|offline|load failed/i.test(error?.message || '')) return "The connection was interrupted. Nothing has been confirmed. Please try again.";
      return error?.message || "The action could not be confirmed. Please reload the meetups.";
    }
    function clearPrivate() {
      access = null; editing = null; own.replaceChildren(); own.hidden = true; managed.replaceChildren();
      manager.hidden = true; form.reset(); form.hidden = true;
      delete form.dataset.owner;
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
      article.append(node('span', { draft: "Private draft", published: "Meet-up", cancelled: "Cancelled" }[meeting.state], `meeting-state ${meeting.state}`));
      article.append(node('h4', meeting.title));
      const meta = node('dl', undefined, 'meeting-meta');
      for (const [label, text] of [
        ["When", timeRange(meeting)],
        ["Meeting point", meeting.venue], ["Contact", meeting.contact], ["Costs", meeting.cost_note]
      ]) { meta.append(node('dt', label), node('dd', text)); }
      article.append(meta);
      if (meeting.body) article.append(node('p', meeting.body, 'meeting-text'));
      const conditions = node('details', undefined, 'meeting-conditions');
      conditions.append(node('summary', "Participation & arrangements"), node('p', meeting.participation_note)); article.append(conditions);
      if (meeting.change_note) article.append(node('p', `${meeting.state === 'cancelled' ? "Cancellation" : "Changed"}: ${meeting.change_note}`, 'meeting-notice'));
      const full = meeting.capacity !== null && meeting.attending_count >= meeting.capacity;
      article.append(node('p', meeting.capacity === null ? `${meeting.attending_count} registered · number of places open`
        : `${meeting.attending_count} registered · ${meeting.capacity} ${meeting.capacity === 1 ? "Place" : "places"} insgesamt`, 'meeting-count'));
      const buttons = node('div', undefined, 'button-row');
      if (management) {
        if (meeting.state !== 'cancelled') buttons.append(action("Edit", () => openForm(meeting)));
        if (meeting.state === 'draft') {
          buttons.append(action("Publish", button => run(button, () => change(client, meeting, 'publish'), "The meetup has been published."), ''));
          buttons.append(action("Delete draft", button => run(button, () => change(client, meeting, 'delete'), "The draft has been deleted.")));
        } else {
          buttons.append(action("View registrations", async button => {
            const token = epoch; button.disabled = true;
            try {
              const rows = await roster(client, meeting); if (token !== epoch || !access?.can_manage) return;
              let list = article.querySelector('[data-meeting-roster]');
              if (!list) { list = node('div', undefined, 'meeting-roster'); list.dataset.meetingRoster = ''; article.append(list); }
              list.replaceChildren(node('h5', "Registrations · meetup managers only"));
              if (!rows.length) list.append(node('p', "No registrations yet."));
              for (const row of rows) list.append(node('p', `${row.display_name} (${row.member_id}) · ${row.state === 'attending' ? "Attending" : "Withdrawn"}${row.needs_review ? " · change not yet confirmed" : ''}`));
            } catch (error) { if (token === epoch) say(fail(error), true); }
            finally { if (button.isConnected) button.disabled = false; }
          }));
          if (meeting.state === 'published') {
            const cancellation = node('details', undefined, 'meeting-cancel'); cancellation.append(node('summary', "Cancel meetup"));
            const label = node('label', "Cancellation note"), field = node('textarea');
            field.maxLength = 1000; field.rows = 2; label.append(field); cancellation.append(label);
            cancellation.append(action("Publish cancellation", button => {
              if (!field.value.trim()) { field.focus(); say("Please enter a cancellation notice first.", true); return; }
              run(button, () => change(client, meeting, 'cancel', field.value.trim()), "The cancellation is visible on the event.");
            })); article.append(cancellation);
          }
        }
      } else if (registration?.state === 'attending') {
        const changed = registration.acknowledged_version !== meeting.version;
        article.append(node('p', meeting.state === 'cancelled' ? "This meetup has been cancelled." : changed ? "The event has changed. Please check the current details." : "You're joining.", 'meeting-notice'));
        if (changed && meeting.state === 'published' && new Date(meeting.starts_at) > new Date() && access?.can_join)
          buttons.append(action("Confirm change", button => run(button, () => register(client, meeting, 'attending'), "The current meetup details have been confirmed.")));
        buttons.append(action("Cancel registration", button => run(button, () => register(client, meeting, 'withdrawn'), "Your registration has been cancelled.")));
      } else if (meeting.state === 'published' && new Date(meeting.starts_at) > new Date()) {
        if (!access) {
          const link = node('a', "Sign in to your account", 'button secondary'); link.href = '../../konto/'; buttons.append(link);
        } else if (access.can_join) {
          const button = action(full ? "Currently fully booked" : "I'm joining", button => run(button, () => register(client, meeting, 'attending'), "Your place is reserved."), '');
          button.disabled = full; buttons.append(button);
          if (!full) article.append(node('p', "By registering, you reserve one place for yourself under the conditions stated above.", 'meeting-help'));
        }
      }
      article.append(buttons); return article;
    }
    function render(publicRows) {
      feed.replaceChildren();
      const mine = new Map((access?.registrations || []).map(row => [row.meeting.id, row]));
      if (!publicRows.length) {
        const empty = node('div', undefined, 'meeting-empty'); empty.append(node('strong', "The first meetup is still to come."), node('p', "Once the place, time and arrangements are confirmed, you'll find the event here. You can then reserve a place with your account.")); feed.append(empty);
      }
      for (const meeting of publicRows) feed.append(card(meeting, mine.get(meeting.id)));
      own.replaceChildren();
      const visibleIds = new Set(publicRows.map(row => row.id));
      const registrations = (access?.registrations || []).filter(row => row.state === 'attending' && !visibleIds.has(row.meeting.id));
      own.hidden = !registrations.length;
      if (registrations.length) {
        own.append(node('h3', "Your other registrations"));
        for (const row of registrations) own.append(card(row.meeting, row));
      }
      manager.hidden = !access?.can_manage;
      managed.replaceChildren();
      if (access?.can_manage) {
        if (!access.managed_meetings.length) managed.append(node('p', "No meetups of your own yet. Start with a private draft."));
        access.managed_meetings.forEach(meeting => managed.append(card(meeting, null, true)));
      }
    }
    function openForm(meeting = null) {
      if (!access?.can_manage) return;
      if (!form.hidden && !globalThis.confirm("Discard the unsaved input and open another version?")) return;
      editing = meeting; form.reset();
      const zone = meeting?.time_zone || Intl.DateTimeFormat().resolvedOptions().timeZone;
      // Other browsers may store a valid timezone alias absent from this browser's list.
      if (![...form.elements.time_zone.options].some(option => option.value === zone)) {
        const option = node('option', zone.replaceAll('_', ' ')); option.value = zone; form.elements.time_zone.append(option);
      }
      form.elements.time_zone.value = zone;
      for (const key of ['title', 'body', 'venue', 'contact', 'cost_note', 'participation_note', 'capacity']) form.elements[key].value = meeting?.[key] ?? '';
      for (const key of ['starts_at', 'ends_at']) form.elements[key].value = localInput(meeting?.[key], zone);
      find('[data-meeting-change-field]').hidden = meeting?.state !== 'published';
      form.elements.change_note.required = meeting?.state === 'published';
      find('[data-meeting-save]').textContent = meeting?.state === 'published' ? "Publish change" : "Save draft";
      form.hidden = false; form.dataset.owner = access.user_id; form.elements.title.focus();
      say(meeting?.state === 'published' ? "You're editing a published meetup. Your change notice will also be shown." : "Your draft only becomes public after a separate approval.");
    }
    async function reload(keepMessage = false) {
      if (loading) { pendingReload = true; return; }
      loading = true; const token = epoch;
      if (!keepMessage) say("Loading meetups …");
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
          accessNote.append(node('span', results[1].status === 'rejected' ? "Your account could not be checked right now. " : "You need an active member account to join. "));
          const link = node('a', "Go to your account"); link.href = '../../konto/'; accessNote.append(link);
        } else if (!access.can_join) accessNote.append(node('span', "Your account cannot make new registrations at the moment. You can cancel existing registrations."));
        else accessNote.append(node('span', "Your registration stays private. Only meetup managers can see your name."));
        if (results[0].status === 'rejected') {
          feed.replaceChildren(node('p', "The events cannot be loaded right now. Please try again."));
          // Do not present a failed fetch as an empty calendar, or keep stale private controls.
          own.replaceChildren(); own.hidden = true; managed.replaceChildren(); manager.hidden = true;
          say(fail(results[0].reason), true);
        } else {
          render(results[0].value);
          if (results[1].status === 'rejected') say("The public meetups have loaded. Your registration could not be checked right now. Please refresh the page.", true);
          else if (!keepMessage) say(results[0].value.length ? "Meetups updated." : "No meetup published yet.");
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
      }, editing?.state === 'published' ? "The change has been published. People already registered will see a notice asking them to review it." : "The private draft has been saved.");
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
