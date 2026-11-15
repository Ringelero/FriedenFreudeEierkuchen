(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  if (root) root.FFE_PUBLIC_OPPORTUNITIES = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  const RESPONSE_TYPES = new Map([
    ['help', "I can help"],
    ['participate', "I'd like to join in"],
    ['learn', "I'd like to learn together"],
    ['question', "I have a question"]
  ]);
  const RESPONSE_STATUSES = new Map([
    ['pending', "Your response is awaiting a reply."],
    ['accepted', "Accepted — your private discussion is open."],
    ['declined', "This response was politely declined."],
    ['withdrawn', "You've withdrawn this response."]
  ]);

  function requireOpportunityId(value) {
    const id = String(value || '').trim();
    if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(id)) {
      throw new Error("The opportunity has no valid identifier.");
    }
    return id;
  }

  function createResponsePayload(opportunityId, responseType, message) {
    const text = String(message || '').trim();
    if (!RESPONSE_TYPES.has(responseType)) throw new Error("Please choose how you'd like to respond.");
    if (!text || text.length > 2000) throw new Error("Your message must be between 1 and 2000 characters long.");
    return {
      opportunity_id: requireOpportunityId(opportunityId),
      response_type: responseType,
      message: text
    };
  }

  async function submitOpportunityResponse(client, input) {
    if (!client || typeof client.from !== 'function') throw new Error("A secure Supabase session is required.");
    const payload = createResponsePayload(input?.opportunityId, input?.responseType, input?.message);
    const { data, error } = await client.from('opportunity_responses')
      .insert(payload)
      .select('id,stable_id,opportunity_id,response_type,message,status,created_at')
      .single();
    if (error) throw error;
    if (!data) throw new Error("The response was not confirmed by the server.");
    return data;
  }

  function start() {
    if (typeof document === 'undefined') return;
    const client = window.FFE_SUPABASE_CLIENT;
    const stream = document.getElementById('opportunity-stream');
    const status = document.getElementById('opportunity-stream-status');
    if (!stream || !status) return;

    const SIGNALS = {
      have: "I have",
      can: "I can",
      need: "I need",
      time: "I have time",
      chance: "There's an opportunity"
    };
    const MODES = {
      commission: "Commission",
      job: 'Job',
      learning: "Learning",
      voluntary: "Volunteer help",
      care: 'Care',
      commons: "Commons / borrowing",
      project: "Project",
      event: "Event",
      cooperation: "Cooperation"
    };
    const LOCATIONS = {
      local: "in person",
      remote: 'remote',
      hybrid: 'hybrid',
      flexible: "flexible"
    };
    const COMPENSATION = {
      paid: 'bezahlt',
      expenses: "Expenses reimbursed",
      exchange: "Exchange",
      voluntary: "voluntary / unpaid",
      open: "Payment still undecided",
      not_applicable: "no payment question"
    };
    const REQUIREMENTS = {
      required: 'notwendig',
      helpful: 'hilfreich',
      learnable: "can be learned here"
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
      if (error?.code === '23505') return "You've already responded to this opportunity.";
      if (error?.code === '23514' || error?.code === '22023') return "The message does not yet meet the visible limits.";
      if (error?.code === '42501') return "This opportunity is no longer open, or your member identity could not be confirmed.";
      return error?.message || fallback;
    }

    function readableDateTime(isoValue) {
      if (!isoValue) return '';
      return new Intl.DateTimeFormat("en-GB", {
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
        node('p', '', "You'll find the status and private messages only in your account."),
        accountLink("Open response in your account")
      );
      return block;
    }

    function responseComposer(record) {
      if (!state.profile) {
        const block = node('div', 'opportunity-response-callout');
        block.append(
          node('strong', '', "Would you like to respond?"),
          node('p', '', "Sign in. GemDen initially sends only your explicit response, not an email address."),
          accountLink("Sign in & respond")
        );
        return block;
      }

      if (record.owner_member_id === state.profile.stable_id) {
        const block = node('div', 'opportunity-response-callout');
        block.append(
          node('strong', '', "This is your opportunity."),
          node('p', '', "Incoming responses arrive privately in your account."),
          accountLink("View private responses")
        );
        return block;
      }

      const existing = state.responses.get(record.id);
      if (existing) return existingResponseBlock(existing);

      if (record.lifecycle_status !== 'open') {
        const block = node('div', 'opportunity-response-callout');
        block.append(
          node('strong', '', "This opportunity isn't accepting new responses right now."),
          node('p', '', "Existing participants keep their private history in their accounts.")
        );
        return block;
      }

      const details = node('details', 'opportunity-response-composer');
      const summary = node('summary', '', "Respond privately");
      const form = node('form', 'opportunity-response-form');
      const typeField = node('label', 'field', "How would you like to respond?");
      const select = document.createElement('select');
      select.required = true;
      RESPONSE_TYPES.forEach((label, value) => {
        const option = node('option', '', label);
        option.value = value;
        select.append(option);
      });
      typeField.append(select);
      const messageField = node('label', 'field', "Short personal message");
      const textarea = document.createElement('textarea');
      textarea.required = true;
      textarea.maxLength = 2000;
      textarea.placeholder = "What appeals to you, what can you contribute, or what would you like to clarify first?";
      messageField.append(textarea);
      const boundary = node('p', 'opportunity-response-boundary', "Only the person behind this opportunity can see your response. Acceptance opens a private discussion; it is not yet a commitment.");
      const submit = node('button', 'button compact-public-button', "Send response securely");
      submit.type = 'submit';
      const formStatus = node('p', 'form-status');
      formStatus.setAttribute('role', 'status');
      form.append(typeField, messageField, boundary, submit, formStatus);
      form.addEventListener('submit', async event => {
        event.preventDefault();
        submit.disabled = true;
        formStatus.textContent = "Saving response privately …";
        delete formStatus.dataset.state;
        try {
          const response = await submitOpportunityResponse(client, {
            opportunityId: record.id,
            responseType: select.value,
            message: textarea.value
          });
          state.responses.set(record.id, response);
          render();
          status.textContent = "Response sent. It is visible only to you and the person behind the opportunity.";
          status.dataset.state = 'success';
        } catch (error) {
          formStatus.textContent = describeError(error, "The response could not be sent.");
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
      head.append(title);
      card.append(head);

      if (record.summary) card.append(node('p', 'opportunity-summary', record.summary));
      const owner = state.profiles.get(record.owner_member_id);
      card.append(node('p', 'opportunity-owner', `from ${owner?.display_name || record.owner_member_id}`));

      const facts = node('dl', 'opportunity-facts');
      const addFact = (term, value) => {
        if (!value) return;
        const wrapper = node('div');
        wrapper.append(node('dt', '', term), node('dd', '', value));
        facts.append(wrapper);
      };
      if(record.support_kind)addFact("Support",({walk:"Dog walk",day:"Day care",overnight:"Overnight stay",longer:"Several days"})[record.support_kind]);
      addFact("Location", `${LOCATIONS[record.location_mode] || record.location_mode}${record.location_label ? ` · ${record.location_label}` : ''}`);
      addFact("Start", readableDateTime(record.starts_at));
      addFact("End", readableDateTime(record.ends_at));
      addFact("Duration", record.duration_note);
      addFact("Arrangements", `${COMPENSATION[record.compensation_type] || record.compensation_type}${record.compensation_note ? ` · ${record.compensation_note}` : ''}`);
      if (facts.childElementCount) card.append(facts);

      const linked = requirementRecords(record.id);
      if (linked.length) {
        const block = node('div', 'opportunity-skill-block');
        block.append(node('h4', '', "Skills in this context"));
        const list = node('ul', 'match-reasons');
        linked.forEach(link => {
          list.append(node('li', '', `${state.skills.get(link.skill_id)?.name || link.skill_id} · ${REQUIREMENTS[link.requirement_level] || link.requirement_level}`));
        });
        block.append(list);
        card.append(block);
      }

      if (record.risk_level !== 'ordinary') {
        const caution = node('p', 'notice');
        caution.append(node('strong', '', "Clarify in advance: "), document.createTextNode(record.risk_note || "Qualifications, safety or legal requirements."));
        card.append(caution);
      }

      appendTags(card, [
        MODES[record.relationship_mode] || record.relationship_mode,
        record.lifecycle_status === 'open' ? "open" : record.lifecycle_status,
        SIGNALS[record.signal_type]
      ]);
      card.append(node('p', 'opportunity-boundary', "A visible opportunity is not a commitment. Interest, responsibilities, safety and specific conditions are clarified together."));
      const reference = node('details', 'opportunity-record-source');
      reference.append(node('summary', '', "Entry identifier"), node('code', '', record.stable_id));
      card.append(reference);
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
          node('strong', '', state.opportunities.length ? "There is no entry for these filters yet." : "The public opportunities feed is just starting."),
          node('p', '', state.opportunities.length
            ? "Change a filter or create your own opportunity in your account."
            : "Private drafts stay invisible. The first public entry only appears after explicit approval.")
        );
        stream.append(empty);
      } else {
        filtered.forEach(record => stream.append(renderCard(record)));
      }
      status.textContent = `${filtered.length} from ${state.opportunities.length} public opportunities shown${state.profile ? " · securely signed in" : ''}.`;
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
        status.textContent = window.FFE_SUPABASE_ERROR || "The opportunities feed is currently unavailable.";
        return;
      }
      if (state.loading) return;
      state.loading = true;
      status.textContent = "Loading public opportunities and your response status …";
      try {
        await loadViewer();
        const opportunities = await result(client.from('opportunities')
          .select('id,stable_id,owner_member_id,signal_type,support_kind,relationship_mode,title,summary,location_mode,location_label,starts_at,ends_at,duration_note,compensation_type,compensation_note,risk_level,risk_note,lifecycle_status,created_at')
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
        status.textContent = error.message || "The opportunities feed could not be loaded.";
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
