(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  if (root) root.FFE_RESONANCE_WORKSPACE = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  const RESPONSE_TYPES = new Map([
    ['help', 'Ich kann helfen'],
    ['participate', 'Ich möchte mitmachen'],
    ['learn', 'Ich möchte mitlernen'],
    ['question', 'Ich habe eine Frage']
  ]);
  const STATUS_LABELS = new Map([
    ['pending', 'wartet auf Antwort'],
    ['accepted', 'angenommen · Klärungsraum offen'],
    ['declined', 'freundlich abgelehnt'],
    ['withdrawn', 'zurückgezogen']
  ]);
  const ACTION_STATUSES = new Set(['accepted', 'declined', 'withdrawn']);

  const state = {
    client: null,
    profile: null,
    responses: [],
    messages: new Map(),
    loadToken: 0,
    mutating: false
  };

  const byId = id => typeof document === 'undefined' ? null : document.getElementById(id);

  function requireId(value, label) {
    const id = String(value || '').trim();
    if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(id)) {
      throw new Error(`${label} ist ungültig.`);
    }
    return id;
  }

  function responseActionPayload(responseId, targetStatus) {
    if (!ACTION_STATUSES.has(targetStatus)) throw new Error('Dieser Resonanzstatus ist ungültig.');
    return { response_id: requireId(responseId, 'Die Resonanz'), target_status: targetStatus };
  }

  function responseMessagePayload(responseId, body) {
    const message = String(body || '').trim();
    if (!message || message.length > 4000) {
      throw new Error('Die Nachricht muss zwischen 1 und 4000 Zeichen lang sein.');
    }
    return { response_id: requireId(responseId, 'Die Resonanz'), body: message };
  }

  function partitionResponses(responses, memberId) {
    const list = Array.isArray(responses) ? responses : [];
    return {
      incoming: list.filter(item => item.opportunity_owner_member_id === memberId),
      sent: list.filter(item => item.responder_member_id === memberId)
    };
  }

  function node(tag, className, text) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text !== undefined) element.textContent = text;
    return element;
  }

  function setMessage(target, message, tone) {
    if (!target) return;
    target.textContent = message;
    if (tone) target.dataset.state = tone;
    else delete target.dataset.state;
  }

  function describeError(error, fallback) {
    if (error?.code === '23505') return 'Du hast auf diese Möglichkeit bereits reagiert.';
    if (error?.code === '23514' || error?.code === '22023') return 'Die Eingabe passt noch nicht zu den sichtbaren Grenzen.';
    if (error?.code === '42501') return 'Supabase hat diese Aktion an der Beteiligten- oder Statusprüfung gestoppt.';
    return error?.message || fallback;
  }

  async function query(request) {
    const { data, error } = await request;
    if (error) throw error;
    return data || [];
  }

  function readableDateTime(value) {
    if (!value) return '';
    return new Intl.DateTimeFormat('de-DE', {
      dateStyle: 'medium',
      timeStyle: 'short'
    }).format(new Date(value));
  }

  function actionButton(label, handler, secondary = false) {
    const button = node('button', `button compact-button${secondary ? ' secondary' : ''}`, label);
    button.type = 'button';
    button.disabled = state.mutating;
    button.addEventListener('click', handler);
    return button;
  }

  function responseMessages(responseId) {
    return state.messages.get(responseId) || [];
  }

  async function appendAction(response, targetStatus) {
    const wording = {
      accepted: `Resonanz von ${response.responder_display_name} annehmen und den privaten Klärungsraum öffnen?`,
      declined: `Resonanz von ${response.responder_display_name} freundlich ablehnen?`,
      withdrawn: `Deine Resonanz auf „${response.opportunity_title}“ wirklich zurückziehen?`
    }[targetStatus];
    if (!window.confirm(wording)) return;

    state.mutating = true;
    render();
    setMessage(byId('resonance-status'), 'Status wird sicher geprüft …');
    try {
      await query(state.client.from('opportunity_response_actions')
        .insert(responseActionPayload(response.id, targetStatus))
        .select('id,response_id,target_status,result_status,created_at'));
      await loadResponses();
      setMessage(
        byId('resonance-status'),
        targetStatus === 'accepted'
          ? 'Resonanz angenommen. Der private Klärungsraum ist jetzt für euch beide offen.'
          : targetStatus === 'declined'
            ? 'Resonanz abgelehnt. Es wurden keine Kontaktdaten freigegeben.'
            : 'Resonanz zurückgezogen. Der Klärungsraum ist geschlossen.',
        'success'
      );
    } catch (error) {
      setMessage(byId('resonance-status'), describeError(error, 'Der Resonanzstatus konnte nicht geändert werden.'), 'error');
    } finally {
      state.mutating = false;
      render();
    }
  }

  async function sendMessage(response, form) {
    const textarea = form.querySelector('textarea');
    const submit = form.querySelector('button[type="submit"]');
    let payload;
    try {
      payload = responseMessagePayload(response.id, textarea.value);
    } catch (error) {
      setMessage(form.querySelector('.form-status'), error.message, 'error');
      return;
    }

    submit.disabled = true;
    setMessage(form.querySelector('.form-status'), 'Nachricht wird privat gesendet …');
    try {
      await query(state.client.from('opportunity_response_messages')
        .insert(payload)
        .select('id,response_id,sender_member_id,sender_display_name,body,created_at'));
      textarea.value = '';
      await loadResponses();
      setMessage(byId('resonance-status'), 'Nachricht im privaten Klärungsraum gespeichert.', 'success');
    } catch (error) {
      setMessage(form.querySelector('.form-status'), describeError(error, 'Die Nachricht konnte nicht gesendet werden.'), 'error');
    } finally {
      submit.disabled = false;
    }
  }

  function renderRoom(response) {
    const room = node('section', 'resonance-room');
    room.append(node('h6', '', response.status === 'accepted' ? 'Privater Klärungsraum' : 'Bisheriger Klärungsverlauf'));
    const messages = responseMessages(response.id);
    const list = node('div', 'resonance-thread');
    if (!messages.length) {
      list.append(node('p', 'empty-state', response.status === 'accepted'
        ? 'Noch keine Nachricht. Klärt hier nur das, was ihr für den nächsten Schritt braucht.'
        : 'Es wurden keine Nachrichten ausgetauscht.'));
    } else {
      messages.forEach(message => {
        const own = message.sender_member_id === state.profile.stable_id;
        const bubble = node('article', `resonance-message${own ? ' is-own' : ''}`);
        bubble.append(
          node('strong', '', own ? 'Du' : message.sender_display_name),
          node('p', '', message.body),
          node('small', '', readableDateTime(message.created_at))
        );
        list.append(bubble);
      });
    }
    room.append(list);

    if (response.status === 'accepted') {
      const form = node('form', 'resonance-message-form');
      const label = node('label', '', 'Nachricht');
      const textarea = document.createElement('textarea');
      textarea.maxLength = 4000;
      textarea.required = true;
      textarea.placeholder = 'Zum Beispiel: Wann passt ein erstes kurzes Gespräch?';
      label.append(textarea);
      const button = node('button', 'button compact-button', 'Privat senden');
      button.type = 'submit';
      const status = node('p', 'form-status');
      status.setAttribute('role', 'status');
      form.append(label, button, status);
      form.addEventListener('submit', event => {
        event.preventDefault();
        sendMessage(response, form);
      });
      room.append(form);
    }
    return room;
  }

  function renderResponse(response, perspective) {
    const ownerView = perspective === 'incoming';
    const counterpart = ownerView
      ? response.responder_display_name
      : response.opportunity_owner_display_name;
    const card = node('article', 'resonance-card');
    const head = node('div', 'resonance-card-head');
    const title = node('div');
    title.append(
      node('p', 'entry-kicker', ownerView ? `von ${counterpart}` : `an ${counterpart}`),
      node('h5', '', response.opportunity_title)
    );
    head.append(title, node('span', `publication-badge response-${response.status}`, STATUS_LABELS.get(response.status) || response.status));
    card.append(head);
    card.append(node('p', 'resonance-type', RESPONSE_TYPES.get(response.response_type) || response.response_type));
    card.append(node('p', 'resonance-original-message', response.message));
    card.append(node('small', 'publication-time', `Gesendet am ${readableDateTime(response.created_at)} · ${response.stable_id}`));

    const actions = node('div', 'button-row entry-actions');
    if (ownerView && response.status === 'pending') {
      actions.append(
        actionButton('Annehmen & Raum öffnen', () => appendAction(response, 'accepted')),
        actionButton('Ablehnen', () => appendAction(response, 'declined'), true)
      );
    }
    if (!ownerView && ['pending', 'accepted'].includes(response.status)) {
      actions.append(actionButton('Resonanz zurückziehen', () => appendAction(response, 'withdrawn'), true));
    }
    if (actions.childElementCount) card.append(actions);

    if (response.status === 'accepted' || responseMessages(response.id).length) {
      card.append(renderRoom(response));
    }
    return card;
  }

  function renderList(target, responses, perspective) {
    target.replaceChildren();
    if (!responses.length) {
      target.append(node(
        'p',
        'empty-state',
        perspective === 'incoming'
          ? 'Noch keine Resonanz auf deine Möglichkeiten.'
          : 'Du hast noch auf keine öffentliche Möglichkeit reagiert.'
      ));
      return;
    }
    responses.forEach(response => target.append(renderResponse(response, perspective)));
  }

  function render() {
    if (!state.profile?.stable_id) return;
    const { incoming, sent } = partitionResponses(state.responses, state.profile.stable_id);
    byId('resonance-count-incoming').textContent = String(incoming.length);
    byId('resonance-count-pending').textContent = String(incoming.filter(item => item.status === 'pending').length);
    byId('resonance-count-sent').textContent = String(sent.length);
    byId('resonance-count-rooms').textContent = String(state.responses.filter(item => item.status === 'accepted').length);
    renderList(byId('resonance-incoming'), incoming, 'incoming');
    renderList(byId('resonance-sent'), sent, 'sent');
  }

  async function loadResponses() {
    if (!state.client || !state.profile?.stable_id) return;
    const token = ++state.loadToken;
    setMessage(byId('resonance-status'), 'Private Resonanzen werden geladen …');
    try {
      const memberId = state.profile.stable_id;
      const responses = await query(state.client.from('opportunity_responses')
        .select('id,stable_id,opportunity_id,opportunity_stable_id,opportunity_title,opportunity_signal_type,opportunity_owner_member_id,opportunity_owner_display_name,responder_member_id,responder_display_name,response_type,message,status,status_changed_at,created_at,updated_at')
        .or(`opportunity_owner_member_id.eq.${memberId},responder_member_id.eq.${memberId}`)
        .order('created_at', { ascending: false }));

      let messages = [];
      if (responses.length) {
        messages = await query(state.client.from('opportunity_response_messages')
          .select('id,stable_id,response_id,sender_member_id,sender_display_name,body,created_at')
          .in('response_id', responses.map(item => item.id))
          .order('created_at', { ascending: true }));
      }
      if (token !== state.loadToken) return;
      const grouped = new Map();
      messages.forEach(message => {
        const current = grouped.get(message.response_id) || [];
        current.push(message);
        grouped.set(message.response_id, current);
      });
      state.responses = responses;
      state.messages = grouped;
      render();
      setMessage(byId('resonance-status'), 'Nur Resonanzen geladen, an denen du selbst beteiligt bist.', 'success');
    } catch (error) {
      if (token !== state.loadToken) return;
      setMessage(byId('resonance-status'), describeError(error, 'Die Resonanzen konnten nicht geladen werden.'), 'error');
      throw error;
    }
  }

  async function initialize({ client, profile }) {
    state.client = client;
    state.profile = profile;
    const center = byId('resonance-center');
    center.hidden = false;
    if (!profile?.stable_id) {
      setMessage(byId('resonance-status'), 'Für Resonanzen fehlt noch deine bestätigte Mitglieds-ID.', 'error');
      return;
    }
    await loadResponses();
  }

  function setProfile(profile) {
    state.profile = { ...state.profile, ...profile };
    render();
  }

  function reset() {
    state.loadToken += 1;
    Object.assign(state, {
      client: null,
      profile: null,
      responses: [],
      messages: new Map(),
      mutating: false
    });
    const center = byId('resonance-center');
    if (center) center.hidden = true;
  }

  return {
    initialize,
    partitionResponses,
    refresh: loadResponses,
    reset,
    responseActionPayload,
    responseMessagePayload,
    setProfile
  };
});
