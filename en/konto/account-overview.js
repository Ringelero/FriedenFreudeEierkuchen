(function () {
  const activeRequestStates = new Set(['open', 'planned', 'working']);
  const pathKey = path => path.replace(/^\/en\//, '/').replace(/\/$/, '');

  function nextEvent(events, now, end) {
    return events
      .filter(event => !event.native_unexpanded && event.kind === 'event' && event.title?.trim()
        && Date.parse(event.starts_at) >= now && Date.parse(event.starts_at) < end)
      .sort((a, b) => Date.parse(a.starts_at) - Date.parse(b.starts_at))[0];
  }

  function synergyStates(groups, interests, memberships, requests) {
    const saved = new Set(interests);
    const confirmed = new Set(memberships.map(row => row.synergy_id));
    const pendingPaths = new Set(requests.filter(row => activeRequestStates.has(row.state)).map(row => pathKey(row.page_path)));
    return groups.map(group => ({
      group,
      saved: saved.has(group.id),
      confirmed: confirmed.has(group.id),
      pending: pendingPaths.has(pathKey(group.public_path))
    })).filter(item => item.saved || item.confirmed || item.pending);
  }

  if (typeof module === 'object' && module.exports) {
    module.exports = { nextEvent, synergyStates };
    return;
  }

  const $ = id => document.getElementById(id);
  const overview = $('account-today');
  const appointment = $('account-next-event');
  const walk = $('account-saved-walk');
  const reply = $('account-new-reply');
  const states = $('account-synergy-states');
  const requests = $('profile-synergy-requests');
  const status = $('profile-synergy-request-status');
  const language = document.documentElement.lang;
  const service = 'SERVICE-RUBYBUBYS-HERZ-SCHNAUZE';
  const requestLabels = { open: "Open", planned: "Planned", working: "In progress", done: "Done", closed: "Closed" };
  let current;
  let catalog;

  function node(tag, text, className) {
    const element = document.createElement(tag);
    element.textContent = text;
    if (className) element.className = className;
    return element;
  }

  function updateCards() {
    overview.hidden = [appointment, walk, reply].every(card => card.hidden);
  }

  function cardContent(card, text, detail) {
    card.querySelector('[data-account-card-value]').textContent = text;
    card.querySelector('[data-account-card-detail]').textContent = detail;
    card.hidden = false;
    updateCards();
  }

  async function result(query, state) {
    const { data, error } = await query.abortSignal(state.controller.signal);
    if (error) throw error;
    return data;
  }

  function getCatalog() {
    catalog ||= fetch('../assets/data/community-v0.1.json').then(response => {
      if (!response.ok) throw new Error('Catalog unavailable');
      return response.json();
    }).then(data => data.synergies).catch(() => {
      catalog = null;
      return [];
    });
    return catalog;
  }

  async function showAppointment(state) {
    const start = new Date();
    const end = new Date(start);
    end.setDate(end.getDate() + 30);
    const data = await result(state.client.rpc('calendar_workspace', {
      requested_calendar: 'PERSONAL', range_start: start.toISOString(), range_end: end.toISOString(), requests_page: 0
    }), state);
    if (data.calendar.kind !== 'personal' || current !== state) return;
    let events = [...data.events, ...data.linked_events];
    if (events.some(event => event.is_all_day || event.is_recurring)) {
      const { expandNativeEvents } = await import('../kalender/native-events.mjs?v=20261019-1');
      ({ events } = await expandNativeEvents(events, start, end, state.controller.signal));
    }
    const event = nextEvent(events, Date.now(), end.getTime());
    if (!event || current !== state) return;
    const options = event.is_all_day ? { dateStyle: 'medium' } : { dateStyle: 'medium', timeStyle: 'short' };
    const label = new Intl.DateTimeFormat(language, options).format(new Date(event.starts_at));
    cardContent(appointment, event.title, event.is_all_day ? label + ' · ' + "All day" : label);
  }

  async function showWalk(state) {
    const id = localStorage.getItem('gemden_gassi_plan_v1');
    if (!/^[a-f0-9]{8}(?:-[a-f0-9]{4}){3}-[a-f0-9]{12}$/i.test(id || '')) return;
    const data = await result(state.client.rpc('discover_places', {
      service, search: null, ids: [id], bounds: null, page: 0
    }), state);
    const place = data.items.find(item => item.id === id);
    if (!place || current !== state) return;
    walk.href = '../treffpunkte/?' + new URLSearchParams({ leistung: service, ort: id });
    cardContent(walk, place.name, "Saved on this device");
  }

  function renderStates(state) {
    const items = synergyStates(state.groups, state.interests, state.memberships, state.requests);
    states.replaceChildren(...items.map(({ group, saved, confirmed, pending }) => {
      const item = node('li', '');
      const link = node('a', group.name);
      link.href = (language === 'en' ? '/en' : '') + group.public_path;
      item.append(link);
      if (confirmed) item.append(node('span', "Member", 'account-synergy-badge'));
      else {
        if (saved) item.append(node('span', "Saved", 'account-synergy-badge'));
        if (pending) item.append(node('span', "Intro request sent", 'account-synergy-badge'));
      }
      return item;
    }));
    states.hidden = !items.length;
  }

  function showUnread(state) {
    const unread = state.requests.find(row => row.reply_stamp && state.seen[row.id] !== row.reply_stamp);
    if (unread) {
      reply.href = '#synergy-request-' + unread.id;
      cardContent(reply, state.names.get(pathKey(unread.page_path)) || "Synergy", "Read the reply");
    } else {
      reply.hidden = true;
      updateCards();
    }
  }

  function rememberReply(state, row) {
    if (current !== state || state.seen[row.id] === row.reply_stamp) return;
    state.seen[row.id] = row.reply_stamp;
    try {
      const visible = Object.fromEntries(state.requests.filter(item => state.seen[item.id])
        .map(item => [item.id, state.seen[item.id]]));
      localStorage.setItem(state.seenKey, JSON.stringify(visible));
    } catch { /* Keep the read mark for this visit. */ }
    showUnread(state);
  }

  function renderHistory(state) {
    status.textContent = state.requests.length ? '' : "You have not sent any requests to get to know a Synergy yet.";
    requests.replaceChildren(...state.requests.map(row => {
      const item = node('li', '');
      const name = state.names.get(pathKey(row.page_path)) || "Synergy";
      const label = name + ' · ' + (requestLabels[row.state] || "Open");
      if (!row.reply_stamp) {
        item.textContent = label;
        return item;
      }
      const details = node('details', '');
      details.id = 'synergy-request-' + row.id;
      details.append(node('summary', label + ' · ' + "Feedback"), node('p', row.response));
      details.addEventListener('toggle', () => {
        if (details.open && !details.closest('[data-account-view]').hidden) rememberReply(state, row);
      });
      item.append(details);
      return item;
    }));
    showUnread(state);
    if (location.hash.startsWith('#synergy-request-') && $(location.hash.slice(1))) {
      window.dispatchEvent(new Event('hashchange'));
    }
  }

  async function loadSynergies(state) {
    const [groups, memberResult, historyResult] = await Promise.allSettled([
      getCatalog(),
      result(state.client.from('synergy_memberships').select('synergy_id').eq('user_id', state.userId), state),
      result(state.client.rpc('get_own_synergy_history'), state)
    ]);
    if (current !== state) return;
    state.groups = groups.value || [];
    state.memberships = memberResult.value || [];
    state.names = new Map(state.groups.map(group => [pathKey(group.public_path), group.name]));
    state.requests = historyResult.value || [];
    renderStates(state);
    if (historyResult.status === 'fulfilled') renderHistory(state);
    else status.textContent = "Your requests could not be loaded just now.";
  }

  function reset() {
    current?.controller.abort();
    current = null;
    for (const card of [appointment, walk, reply]) {
      card.hidden = true;
      card.querySelector('[data-account-card-value]').textContent = '';
      card.querySelector('[data-account-card-detail]').textContent = '';
    }
    reply.href = '#account-synergy-history';
    walk.href = '../gassi/';
    states.replaceChildren();
    states.hidden = true;
    requests.replaceChildren();
    status.textContent = "Loading your requests …";
    updateCards();
  }

  function load(client, userId) {
    current?.controller.abort();
    const seenKey = 'gemden_synergy_replies_v1_' + userId;
    const state = {
      client, userId, seenKey, controller: new AbortController(), seen: {},
      groups: [], interests: [], memberships: [], requests: []
    };
    try {
      state.seen = JSON.parse(localStorage.getItem(seenKey)) || {};
    } catch { /* Read marks are optional. */ }
    current = state;
    showAppointment(state).catch(() => {});
    showWalk(state).catch(() => {});
    loadSynergies(state);
  }

  window.addEventListener('gemden:profile-synergy-interests', event => {
    if (current?.userId !== event.detail.userId) return;
    current.interests = event.detail.ids;
    renderStates(current);
  });
  window.GemDenAccountOverview = { load, reset };
})();
