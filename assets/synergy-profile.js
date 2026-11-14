(function () {
  const client = window.FFE_SUPABASE_CLIENT;
  if (!client) return;

  const choices = document.querySelectorAll('[data-synergy-interest]');
  const requests = document.getElementById('profile-synergy-requests');
  const fieldKey = 'synergy_interests';

  function parse(value, fallback) {
    try { return JSON.parse(value) ?? fallback; } catch { return fallback; }
  }

  async function data(query) {
    const result = await query;
    if (result.error) throw result.error;
    return result.data;
  }

  async function interestState(member) {
    const rows = await data(client.from('profile_fields')
      .select('field_key,value_text,publication_status,updated_at').eq('member_id', member)
      .in('field_key', [fieldKey, 'rubybubys_start']));
    const field = rows.find(row => row.field_key === fieldKey);
    const start = rows.find(row => row.field_key === 'rubybubys_start');
    const values = field ? parse(field.value_text, []) : parse(start?.value_text, {}).synergy_ids;
    return { field, ids: new Set(Array.isArray(values) ? values : []) };
  }

  async function saveInterest(member, id) {
    for (let attempt = 0; attempt < 3; attempt++) {
      const { field, ids } = await interestState(member);
      if (ids.has(id)) return true;
      if (field && field.publication_status !== 'draft') return false;
      ids.add(id);
      const value_text = JSON.stringify([...ids]);
      const fields = client.from('profile_fields');
      if (field) {
        const updated = await data(fields.update({ value_text }).eq('member_id', member)
          .eq('field_key', fieldKey).eq('publication_status', 'draft').eq('updated_at', field.updated_at)
          .select('field_key').maybeSingle());
        if (updated) return true;
      } else {
        const created = await fields.insert({
          member_id: member, field_key: fieldKey, value_text,
          visibility: 'private', publication_status: 'draft', sort_order: 60
        });
        if (!created.error) return true;
        if (created.error.code !== '23505') throw created.error;
      }
    }
    throw new Error('The interest field changed while saving.');
  }

  async function showChoices(member) {
    const { field, ids } = await interestState(member);
    choices.forEach(link => {
      const id = link.dataset.synergyInterest;
      const message = link.parentElement.querySelector('[data-synergy-interest-status]');
      link.href = link.href.split('#')[0] + '#profil-synergien';
      if (ids.has(id)) {
        link.textContent = 'Im Profil gemerkt ✓';
        return;
      }
      if (field && field.publication_status !== 'draft') return;
      let saving = false;
      let saved = false;
      link.addEventListener('click', async event => {
        if (saved || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        event.preventDefault();
        if (saving) return;
        saving = true;
        try {
          if (!(await saveInterest(member, id))) {
            window.location.assign(link.href);
            return;
          }
          link.textContent = 'Im Profil gemerkt ✓';
          message.textContent = 'Im Profilentwurf gespeichert. Du kannst die Auswahl dort ändern.';
          saved = true;
        } catch {
          message.textContent = 'Die Synergie konnte gerade nicht gespeichert werden.';
        } finally {
          saving = false;
        }
      });
    });
  }

  async function showRequests(userId) {
    const status = document.getElementById('profile-synergy-request-status');
    try {
      const [items, catalog] = await Promise.all([
        data(client.rpc('get_own_synergy_requests')),
        fetch('../assets/data/community-v0.1.json').then(response => response.json()).catch(() => null)
      ]);
      const session = await data(client.auth.getSession());
      if (session.session?.user.id !== userId) return;
      const labels = new Map((catalog?.synergies || []).map(group => [group.public_path, group.name]));
      const states = new Map([
        ['open', 'Offen'], ['planned', 'Geplant'], ['working', 'In Arbeit'],
        ['done', 'Erledigt'], ['closed', 'Geschlossen']
      ]);
      status.textContent = items.length ? '' : 'Du hast noch keine Schnupperanfrage gesendet.';
      requests.replaceChildren(...items.map(item => {
        const row = document.createElement('li');
        const name = labels.get(item.page_path) || 'Synergie';
        row.textContent = name + ' · ' + (states.get(item.state) || 'Offen')
          + (item.has_response ? ' · Es gibt eine Rückmeldung' : '');
        return row;
      }));
    } catch {
      status.textContent = 'Deine Schnupperanfragen konnten gerade nicht geladen werden.';
    }
  }

  async function initialize() {
    const { session } = await data(client.auth.getSession());
    const userId = session?.user.id;
    if (!userId) return;
    if (requests) await showRequests(userId);
    if (!choices.length) return;
    const profile = await data(client.from('profiles').select('stable_id').eq('id', userId)
      .eq('account_status', 'active').maybeSingle());
    if (!profile?.stable_id) return;
    client.auth.onAuthStateChange((_event, current) => {
      if (current?.user.id !== userId) window.setTimeout(() => window.location.reload(), 0);
    });
    await showChoices(profile.stable_id);
  }

  initialize().catch(() => { /* The links still open the account. */ });
})();
