(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  if (root) root.FFE_PUBLIC_OPPORTUNITIES = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  const RESPONSE_TYPES = new Map([
    ['help', 'Ich kann helfen'],
    ['participate', 'Ich möchte mitmachen'],
    ['learn', 'Ich möchte mitlernen'],
    ['question', 'Ich habe eine Frage']
  ]);
  const RESPONSE_STATUSES = new Map([
    ['pending', 'Deine Resonanz wartet auf Antwort.'],
    ['accepted', 'Angenommen – euer privater Klärungsraum ist offen.'],
    ['declined', 'Diese Resonanz wurde freundlich abgelehnt.'],
    ['withdrawn', 'Du hast diese Resonanz zurückgezogen.']
  ]);

  function requireOpportunityId(value) {
    const id = String(value || '').trim();
    if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(id)) {
      throw new Error('Die Möglichkeit hat keine gültige Kennung.');
    }
    return id;
  }

  function createResponsePayload(opportunityId, responseType, message) {
    const text = String(message || '').trim();
    if (!RESPONSE_TYPES.has(responseType)) throw new Error('Bitte wähle, wie du reagieren möchtest.');
    if (!text || text.length > 2000) throw new Error('Deine Nachricht muss zwischen 1 und 2000 Zeichen lang sein.');
    return {
      opportunity_id: requireOpportunityId(opportunityId),
      response_type: responseType,
      message: text
    };
  }

  async function submitOpportunityResponse(client, input) {
    if (!client || typeof client.from !== 'function') throw new Error('Eine sichere Supabase-Sitzung ist erforderlich.');
    const payload = createResponsePayload(input?.opportunityId, input?.responseType, input?.message);
    const { data, error } = await client.from('opportunity_responses')
      .insert(payload)
      .select('id,stable_id,opportunity_id,response_type,message,status,created_at')
      .single();
    if (error) throw error;
    if (!data) throw new Error('Die Resonanz wurde vom Server nicht bestätigt.');
    return data;
  }

  function start() {
    if (typeof document === 'undefined') return;
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
      profiles: new Map(),
      profile: null,
      responses: new Map(),
      loading: false
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

    function describeError(error, fallback) {
      if (error?.code === '23505') return 'Du hast auf diese Möglichkeit bereits reagiert.';
      if (error?.code === '23514' || error?.code === '22023') return 'Die Nachricht passt noch nicht zu den sichtbaren Grenzen.';
      if (error?.code === '42501') return 'Diese Möglichkeit ist nicht mehr offen oder deine Mitgliedsidentität konnte nicht bestätigt werden.';
      return error?.message || fallback;
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

    function accountLink(label) {
      const link = node('a', 'button secondary compact-public-button', label);
      link.href = '../konto/#resonance-center';
      return link;
    }

    function existingResponseBlock(response) {
      const block = node('div', `opportunity-response-state response-${response.status}`);
      block.append(
        node('strong', '', RESPONSE_STATUSES.get(response.status) || response.status),
        node('p', '', 'Status und private Nachrichten findest du ausschließlich in deinem Konto.'),
        accountLink('Resonanz im Konto öffnen')
      );
      return block;
    }

    function responseComposer(record) {
      if (!state.profile) {
        const block = node('div', 'opportunity-response-callout');
        block.append(
          node('strong', '', 'Du möchtest darauf reagieren?'),
          node('p', '', 'Melde dich an. GemDen sendet zunächst nur deine bewusste Resonanz – keine E-Mail-Adresse.'),
          accountLink('Anmelden & reagieren')
        );
        return block;
      }

      if (record.owner_member_id === state.profile.stable_id) {
        const block = node('div', 'opportunity-response-callout');
        block.append(
          node('strong', '', 'Das ist deine Möglichkeit.'),
          node('p', '', 'Eingehende Resonanzen landen privat in deinem Konto.'),
          accountLink('Private Resonanzen ansehen')
        );
        return block;
      }

      const existing = state.responses.get(record.id);
      if (existing) return existingResponseBlock(existing);

      if (record.lifecycle_status !== 'open') {
        const block = node('div', 'opportunity-response-callout');
        block.append(
          node('strong', '', 'Diese Möglichkeit nimmt gerade keine neuen Resonanzen an.'),
          node('p', '', 'Bereits Beteiligte behalten ihren privaten Verlauf im Konto.')
        );
        return block;
      }

      const details = node('details', 'opportunity-response-composer');
      const summary = node('summary', '', 'Privat Resonanz geben');
      const form = node('form', 'opportunity-response-form');
      const typeField = node('label', 'field', 'Wie möchtest du reagieren?');
      const select = document.createElement('select');
      select.required = true;
      RESPONSE_TYPES.forEach((label, value) => {
        const option = node('option', '', label);
        option.value = value;
        select.append(option);
      });
      typeField.append(select);
      const messageField = node('label', 'field', 'Kurze persönliche Nachricht');
      const textarea = document.createElement('textarea');
      textarea.required = true;
      textarea.maxLength = 2000;
      textarea.placeholder = 'Was spricht dich an, was bringst du mit oder was möchtest du zuerst klären?';
      messageField.append(textarea);
      const boundary = node('p', 'opportunity-response-boundary', 'Nur die Person hinter dieser Möglichkeit kann deine Resonanz sehen. Eine Annahme öffnet einen privaten Klärungsraum; sie ist noch keine Zusage.');
      const submit = node('button', 'button compact-public-button', 'Resonanz sicher senden');
      submit.type = 'submit';
      const formStatus = node('p', 'form-status');
      formStatus.setAttribute('role', 'status');
      form.append(typeField, messageField, boundary, submit, formStatus);
      form.addEventListener('submit', async event => {
        event.preventDefault();
        submit.disabled = true;
        formStatus.textContent = 'Resonanz wird privat gespeichert …';
        delete formStatus.dataset.state;
        try {
          const response = await submitOpportunityResponse(client, {
            opportunityId: record.id,
            responseType: select.value,
            message: textarea.value
          });
          state.responses.set(record.id, response);
          render();
          status.textContent = 'Resonanz gesendet. Sie ist nur für dich und die Person hinter der Möglichkeit sichtbar.';
          status.dataset.state = 'success';
        } catch (error) {
          formStatus.textContent = describeError(error, 'Die Resonanz konnte nicht gesendet werden.');
          formStatus.dataset.state = 'error';
        } finally {
          submit.disabled = false;
        }
      });
      details.append(summary, form);
      return details;
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
      card.append(responseComposer(record));
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
      status.textContent = `${filtered.length} von ${state.opportunities.length} öffentlichen Möglichkeiten angezeigt${state.profile ? ' · sicher angemeldet' : ''}.`;
    }

    async function loadViewer() {
      state.profile = null;
      state.responses = new Map();
      const { data, error } = await client.auth.getSession();
      if (error) throw error;
      const user = data.session?.user;
      if (!user) return;
      const profile = await result(client.from('profiles')
        .select('id,stable_id,display_name,account_status')
        .eq('id', user.id)
        .maybeSingle());
      if (!profile?.stable_id || profile.account_status !== 'active') return;
      state.profile = profile;
    }

    async function loadResponses() {
      state.responses = new Map();
      if (!state.profile || !state.opportunities.length) return;
      const responses = await result(client.from('opportunity_responses')
        .select('id,stable_id,opportunity_id,response_type,message,status,created_at')
        .eq('responder_member_id', state.profile.stable_id)
        .in('opportunity_id', state.opportunities.map(item => item.id)));
      state.responses = new Map(responses.map(item => [item.opportunity_id, item]));
    }

    async function load() {
      if (!client) {
        status.textContent = window.FFE_SUPABASE_ERROR || 'Der Möglichkeitenstrom ist gerade nicht erreichbar.';
        return;
      }
      if (state.loading) return;
      state.loading = true;
      status.textContent = 'Öffentliche Möglichkeiten und dein Resonanzstatus werden geladen …';
      try {
        await loadViewer();
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
        await loadResponses();
        render();
      } catch (error) {
        stream.replaceChildren();
        status.textContent = error.message || 'Der Möglichkeitenstrom konnte nicht geladen werden.';
        status.dataset.state = 'error';
      } finally {
        state.loading = false;
      }
    }

    ['opportunity-filter-signal', 'opportunity-filter-mode', 'opportunity-filter-location']
      .forEach(id => byId(id)?.addEventListener('change', render));

    load();
  }

  start();
  return { createResponsePayload, submitOpportunityResponse };
});
