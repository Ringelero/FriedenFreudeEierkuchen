(function () {
  const client = window.FFE_SUPABASE_CLIENT;
  const stream = document.getElementById('opportunity-stream');
  const status = document.getElementById('opportunity-stream-status');
  if (!stream || !status) return;

  const SIGNALS = {
    have: 'Ich habe',
    can: 'Ich kann',
    need: 'Ich brauche',
    time: 'Ich habe Zeit',
    chance: 'Es gibt eine Chance'
  };
  const MODES = {
    commission: 'Auftrag',
    job: 'Job',
    learning: 'Lernen',
    voluntary: 'Freiwillige Hilfe',
    care: 'Care',
    commons: 'Commons / Leihe',
    project: 'Projekt',
    event: 'Veranstaltung',
    cooperation: 'Kooperation'
  };
  const LOCATIONS = {
    local: 'vor Ort',
    remote: 'remote',
    hybrid: 'hybrid',
    flexible: 'flexibel'
  };
  const COMPENSATION = {
    paid: 'bezahlt',
    expenses: 'Auslagen erstattet',
    exchange: 'Tausch',
    voluntary: 'freiwillig / unbezahlt',
    open: 'Vergütung noch offen',
    not_applicable: 'keine Vergütungsfrage'
  };
  const REQUIREMENTS = {
    required: 'notwendig',
    helpful: 'hilfreich',
    learnable: 'hier erlernbar'
  };

  const state = {
    opportunities: [],
    requirements: [],
    skills: new Map(),
    profiles: new Map()
  };

  const byId = id => document.getElementById(id);

  function node(tag, className, text) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text !== undefined) element.textContent = text;
    return element;
  }

  async function result(request) {
    const { data, error } = await request;
    if (error) throw error;
    return data || [];
  }

  function readableDateTime(isoValue) {
    if (!isoValue) return '';
    return new Intl.DateTimeFormat('de-DE', {
      dateStyle: 'medium',
      timeStyle: 'short'
    }).format(new Date(isoValue));
  }

  function requirementRecords(opportunityId) {
    return state.requirements.filter(item => item.opportunity_id === opportunityId);
  }

  function appendTags(card, labels) {
    const row = node('div', 'entry-tags');
    labels.filter(Boolean).forEach(label => row.append(node('span', 'tag', label)));
    card.append(row);
  }

  function renderCard(record) {
    const card = node('article', `panel opportunity-public-card signal-${record.signal_type}`);
    const head = node('div', 'opportunity-public-head');
    const title = node('div');
    title.append(node('p', 'eyebrow', SIGNALS[record.signal_type] || record.signal_type), node('h3', '', record.title));
    head.append(title, node('span', 'id-chip', record.stable_id));
    card.append(head);

    if (record.summary) card.append(node('p', 'opportunity-summary', record.summary));
    const owner = state.profiles.get(record.owner_member_id);
    card.append(node('p', 'opportunity-owner', `von ${owner?.display_name || record.owner_member_id}`));

    const facts = node('dl', 'opportunity-facts');
    const addFact = (term, value) => {
      if (!value) return;
      const wrapper = node('div');
      wrapper.append(node('dt', '', term), node('dd', '', value));
      facts.append(wrapper);
    };
    addFact('Ort', `${LOCATIONS[record.location_mode] || record.location_mode}${record.location_label ? ` · ${record.location_label}` : ''}`);
    addFact('Beginn', readableDateTime(record.starts_at));
    addFact('Ende', readableDateTime(record.ends_at));
    addFact('Dauer', record.duration_note);
    addFact('Rahmen', `${COMPENSATION[record.compensation_type] || record.compensation_type}${record.compensation_note ? ` · ${record.compensation_note}` : ''}`);
    if (facts.childElementCount) card.append(facts);

    const linked = requirementRecords(record.id);
    if (linked.length) {
      const block = node('div', 'opportunity-skill-block');
      block.append(node('h4', '', 'Fähigkeiten in diesem Kontext'));
      const list = node('ul', 'match-reasons');
      linked.forEach(link => {
        list.append(node('li', '', `${state.skills.get(link.skill_id)?.name || link.skill_id} · ${REQUIREMENTS[link.requirement_level] || link.requirement_level}`));
      });
      block.append(list);
      card.append(block);
    }

    if (record.risk_level !== 'ordinary') {
      const caution = node('p', 'notice');
      caution.append(node('strong', '', 'Vorab klären: '), document.createTextNode(record.risk_note || 'Qualifikation, Sicherheit oder Rechtslage.'));
      card.append(caution);
    }

    appendTags(card, [
      MODES[record.relationship_mode] || record.relationship_mode,
      record.lifecycle_status === 'open' ? 'offen' : record.lifecycle_status,
      SIGNALS[record.signal_type]
    ]);
    card.append(node('p', 'opportunity-boundary', 'Eine sichtbare Möglichkeit ist noch keine Zusage. Interesse, Zuständigkeit, Sicherheit und konkrete Bedingungen werden gemeinsam geklärt.'));
    return card;
  }

  function render() {
    const signal = byId('opportunity-filter-signal').value;
    const mode = byId('opportunity-filter-mode').value;
    const location = byId('opportunity-filter-location').value;
    const filtered = state.opportunities.filter(item => {
      return (!signal || item.signal_type === signal)
        && (!mode || item.relationship_mode === mode)
        && (!location || item.location_mode === location);
    });

    stream.replaceChildren();
    if (!filtered.length) {
      const empty = node('div', 'notice opportunity-empty');
      empty.append(
        node('strong', '', state.opportunities.length ? 'Für diese Filter gibt es noch keinen Eintrag.' : 'Der öffentliche Möglichkeitenstrom startet gerade.'),
        node('p', '', state.opportunities.length
          ? 'Ändere einen Filter oder lege im Konto eine eigene Möglichkeit an.'
          : 'Private Entwürfe bleiben unsichtbar. Der erste öffentliche Eintrag erscheint erst nach einer bewussten Freigabe.')
      );
      stream.append(empty);
    } else {
      filtered.forEach(record => stream.append(renderCard(record)));
    }
    status.textContent = `${filtered.length} von ${state.opportunities.length} öffentlichen Möglichkeiten angezeigt.`;
  }

  async function load() {
    if (!client) {
      status.textContent = window.FFE_SUPABASE_ERROR || 'Der Möglichkeitenstrom ist gerade nicht erreichbar.';
      return;
    }
    status.textContent = 'Öffentliche Möglichkeiten werden geladen …';
    try {
      const opportunities = await result(client.from('opportunities')
        .select('id,stable_id,owner_member_id,signal_type,relationship_mode,title,summary,location_mode,location_label,starts_at,ends_at,duration_note,compensation_type,compensation_note,risk_level,risk_note,lifecycle_status,created_at')
        .eq('visibility', 'public')
        .eq('publication_status', 'published')
        .neq('lifecycle_status', 'archived')
        .order('created_at', { ascending: false })
        .limit(100));

      let requirements = [];
      let profiles = [];
      if (opportunities.length) {
        requirements = await result(client.from('opportunity_requirements')
          .select('opportunity_id,skill_id,requirement_level,note,evidence_expectation,hard_gate')
          .in('opportunity_id', opportunities.map(item => item.id)));
        profiles = await result(client.from('profiles')
          .select('stable_id,display_name')
          .in('stable_id', [...new Set(opportunities.map(item => item.owner_member_id))]));
      }
      const skills = await result(client.from('skills')
        .select('id,name,safety_note')
        .eq('lifecycle_status', 'active'));

      state.opportunities = opportunities;
      state.requirements = requirements;
      state.skills = new Map(skills.map(item => [item.id, item]));
      state.profiles = new Map(profiles.map(item => [item.stable_id, item]));
      render();
    } catch (error) {
      stream.replaceChildren();
      status.textContent = error.message || 'Der Möglichkeitenstrom konnte nicht geladen werden.';
    }
  }

  ['opportunity-filter-signal', 'opportunity-filter-mode', 'opportunity-filter-location']
    .forEach(id => byId(id)?.addEventListener('change', render));

  load();
})();
