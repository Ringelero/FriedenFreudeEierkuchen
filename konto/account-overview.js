(function () {
  const activeRequestStates = new Set(['open', 'planned', 'working']);
  const pathKey = path => path.replace(/^\/en\//, '/').replace(/\/$/, '');

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
    module.exports = { synergyStates };
    return;
  }

  const $ = id => document.getElementById(id);
  const states = $('account-synergy-states');
  const requests = $('profile-synergy-requests');
  const status = $('profile-synergy-request-status');
  const language = document.documentElement.lang;
  const requestLabels = { open: 'Offen', planned: 'Geplant', working: 'In Arbeit', done: 'Erledigt', closed: 'Geschlossen' };
  let current;
  let catalog;

  function node(tag, text, className) {
    const element = document.createElement(tag);
    element.textContent = text;
    if (className) element.className = className;
    return element;
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

  function renderStates(state) {
    const items = synergyStates(state.groups, state.interests, state.memberships, state.requests);
    states.replaceChildren(...items.map(({ group, saved, confirmed, pending }) => {
      const item = node('li', '');
      const link = node('a', group.name);
      link.href = (language === 'en' ? '/en' : '') + group.public_path;
      item.append(link);
      if (confirmed) item.append(node('span', 'Mitglied', 'account-synergy-badge'));
      else {
        if (saved) item.append(node('span', 'Gemerkt', 'account-synergy-badge'));
        if (pending) item.append(node('span', 'Schnupperanfrage gesendet', 'account-synergy-badge'));
      }
      return item;
    }));
    states.hidden = !items.length;
  }

  function renderHistory(state) {
    status.textContent = state.requests.length ? '' : 'Du hast noch keine Schnupperanfrage gesendet.';
    requests.replaceChildren(...state.requests.map(row => {
      const item = node('li', '');
      const name = state.names.get(pathKey(row.page_path)) || 'Synergie';
      const label = name + ' · ' + (requestLabels[row.state] || 'Offen');
      if (!row.response) {
        item.textContent = label;
        return item;
      }
      const details = node('details', '');
      details.id = 'synergy-request-' + row.id;
      details.append(node('summary', label + ' · ' + 'Rückmeldung'), node('p', row.response));
      item.append(details);
      return item;
    }));
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
    else status.textContent = 'Deine Schnupperanfragen konnten gerade nicht geladen werden.';
  }

  function reset() {
    current?.controller.abort();
    current = null;
    states.replaceChildren();
    states.hidden = true;
    requests.replaceChildren();
    status.textContent = 'Schnupperanfragen werden geladen …';
  }

  function load(client, userId) {
    current?.controller.abort();
    const state = {
      client, userId, controller: new AbortController(),
      groups: [], interests: [], memberships: [], requests: []
    };
    current = state;
    loadSynergies(state);
  }

  window.addEventListener('gemden:profile-synergy-interests', event => {
    if (current?.userId !== event.detail.userId) return;
    current.interests = event.detail.ids;
    renderStates(current);
  });
  window.GemDenAccountOverview = { load, reset };
})();
