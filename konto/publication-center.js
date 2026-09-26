(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  if (root) root.FFE_PUBLICATION_CENTER = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  const TARGET_STATUSES = new Set(['draft', 'published']);
  const TARGET_KINDS = new Set([
    'profile_field',
    'profile_skill',
    'skill_evidence',
    'project',
    'opportunity'
  ]);
  const FIELD_LABELS = {
    tagline: 'Kurzsatz',
    bio: 'Über mich',
    location: 'Ort oder Wirkungsraum',
    availability_note: 'Verfügbarkeit',
    boundaries: 'Grenzen'
  };
  const KIND_LABELS = {
    profile_field: 'Profilfeld',
    profile_skill: 'Fähigkeit',
    skill_evidence: 'Nachweis',
    project: 'Projekt',
    opportunity: 'Möglichkeit'
  };
  const STATE_LABELS = {
    live: 'jetzt öffentlich',
    staged: 'freigegeben · Profil geschlossen',
    ready: 'öffentlich gewählt · noch Entwurf',
    excluded: 'nicht öffentlich gewählt',
    archived: 'archiviert'
  };

  const state = {
    client: null,
    profile: null,
    onProfileChange: null,
    profileWorkspace: null,
    opportunityWorkspace: null,
    catalog: [],
    fields: [],
    profileSkills: [],
    evidence: [],
    projects: [],
    opportunities: [],
    loadToken: 0,
    mutating: false
  };

  const byId = id => typeof document === 'undefined' ? null : document.getElementById(id);

  function requireClient(client) {
    if (!client || typeof client.from !== 'function') {
      throw new Error('Eine sichere Supabase-Sitzung ist erforderlich.');
    }
    return client;
  }

  function requireStatus(targetStatus) {
    if (!TARGET_STATUSES.has(targetStatus)) {
      throw new Error('Der gewünschte Veröffentlichungsstatus ist ungültig.');
    }
    return targetStatus;
  }

  function requireKind(targetKind) {
    if (!TARGET_KINDS.has(targetKind)) {
      throw new Error('Diese Art von Portfolioeintrag kann nicht veröffentlicht werden.');
    }
    return targetKind;
  }

  function requireKey(targetKey) {
    const value = String(targetKey || '').trim();
    if (!value || value.length > 200) {
      throw new Error('Der Portfolioeintrag hat keine gültige Kennung.');
    }
    return value;
  }

  function confirmedAction(data, fallback) {
    const value = Array.isArray(data) ? data[0] : data;
    if (!value || typeof value !== 'object') throw new Error(fallback);
    return value;
  }

  async function requestPublicationAction(client, targetKind, targetKey, targetStatus) {
    requireClient(client);
    const { data, error } = await client
      .from('publication_actions')
      .insert({
        target_kind: targetKind,
        target_key: targetKey,
        target_status: targetStatus
      })
      .select('id,member_id,target_kind,target_key,target_status,result_visibility,result_publication_status,result_published_at,created_at')
      .single();
    if (error) throw error;
    return confirmedAction(data, 'Die Veröffentlichung wurde vom Server nicht bestätigt.');
  }

  async function setOwnProfilePublication(client, targetStatus) {
    const action = await requestPublicationAction(
      client,
      'profile',
      'self',
      requireStatus(targetStatus)
    );
    return {
      visibility: action.result_visibility,
      publication_status: action.result_publication_status,
      published_at: action.result_published_at
    };
  }

  async function setOwnPortfolioPublication(client, options) {
    return requestPublicationAction(
      client,
      requireKind(options?.kind),
      requireKey(options?.key),
      requireStatus(options?.status)
    );
  }

  function profileIsLive(profile) {
    return Boolean(
      profile
      && profile.account_status === 'active'
      && profile.visibility === 'public'
      && profile.publication_status === 'published'
    );
  }

  function publicationState(record, profile) {
    if (record?.publication_status === 'archived') return 'archived';
    if (record?.visibility !== 'public') return 'excluded';
    if (record?.publication_status === 'published') {
      return profileIsLive(profile) ? 'live' : 'staged';
    }
    return 'ready';
  }

  function truncate(value, length = 180) {
    const text = String(value || '').trim().replace(/\s+/g, ' ');
    if (text.length <= length) return text;
    return `${text.slice(0, length - 1).trimEnd()}…`;
  }

  function buildPublicationItems(snapshot) {
    const catalog = new Map((snapshot.catalog || []).map(skill => [skill.id, skill]));
    const items = [];

    (snapshot.fields || []).forEach(record => {
      if (!String(record.value_text || '').trim()) return;
      items.push({
        kind: 'profile_field',
        key: record.field_key,
        title: FIELD_LABELS[record.field_key] || record.field_key,
        detail: truncate(record.value_text),
        visibility: record.visibility,
        publication_status: record.publication_status,
        published_at: record.published_at || null,
        sort_order: record.sort_order || 0
      });
    });

    (snapshot.profileSkills || []).forEach(record => {
      const skill = catalog.get(record.skill_id);
      items.push({
        kind: 'profile_skill',
        key: record.id,
        title: skill?.name || record.skill_id,
        detail: truncate(record.statement || skill?.description || record.boundaries),
        visibility: record.visibility,
        publication_status: record.publication_status,
        published_at: record.published_at || null,
        sort_order: record.sort_order || 0
      });
    });

    (snapshot.evidence || []).forEach(record => {
      const verification = record.verification_status === 'self_reported'
        ? 'Selbst berichtet'
        : record.verification_status;
      items.push({
        kind: 'skill_evidence',
        key: record.id,
        title: record.title,
        detail: truncate([verification, record.description].filter(Boolean).join(' · ')),
        visibility: record.visibility,
        publication_status: record.publication_status,
        published_at: record.published_at || null,
        sort_order: 0
      });
    });

    (snapshot.projects || []).forEach(record => {
      items.push({
        kind: 'project',
        key: record.id,
        title: record.title,
        detail: truncate(record.summary || record.role_summary),
        visibility: record.visibility,
        publication_status: record.publication_status,
        published_at: record.published_at || null,
        lifecycle_status: record.lifecycle_status,
        sort_order: record.sort_order || 0
      });
    });

    (snapshot.opportunities || []).forEach(record => {
      items.push({
        kind: 'opportunity',
        key: record.id,
        title: record.title,
        detail: truncate(record.summary),
        visibility: record.visibility,
        publication_status: record.publication_status,
        published_at: record.published_at || null,
        lifecycle_status: record.lifecycle_status,
        sort_order: 0
      });
    });

    return items.sort((left, right) => {
      const kindDifference = Object.keys(KIND_LABELS).indexOf(left.kind)
        - Object.keys(KIND_LABELS).indexOf(right.kind);
      if (kindDifference) return kindDifference;
      if (left.sort_order !== right.sort_order) return left.sort_order - right.sort_order;
      return left.title.localeCompare(right.title, 'de');
    });
  }

  function summarizePublication(items, profile) {
    return items.reduce((summary, item) => {
      summary[publicationState(item, profile)] += 1;
      return summary;
    }, { live: 0, staged: 0, ready: 0, excluded: 0, archived: 0 });
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

  function setBusy(busy) {
    state.mutating = busy;
    const center = byId('publication-center');
    if (!center) return;
    center.querySelectorAll('button').forEach(button => {
      button.disabled = busy || button.dataset.unavailable === 'true';
    });
    center.setAttribute('aria-busy', String(busy));
  }

  function describeError(error, fallback) {
    const message = String(error?.message || '');
    if (error?.code === '22023' && /visibility/i.test(message)) {
      return 'Stelle die gewünschte Sichtbarkeit zuerst bewusst auf „öffentlich“.';
    }
    if (error?.code === '22023') return 'Mindestens eine Angabe ist für diese Freigabe noch ungültig.';
    if (error?.code === '42501') return 'Supabase hat die Freigabe an der Eigentums- oder Sicherheitsprüfung gestoppt.';
    return fallback;
  }

  function itemStatusBadge(item) {
    const itemState = publicationState(item, state.profile);
    return node('span', `publication-badge state-${itemState}`, STATE_LABELS[itemState]);
  }

  function formatPublishedAt(value) {
    if (!value) return '';
    return new Intl.DateTimeFormat('de-DE', {
      dateStyle: 'medium',
      timeStyle: 'short'
    }).format(new Date(value));
  }

  function publicProfilePath(profile) {
    if (profile?.stable_id === 'MEM-JULIUS') return '../community/mitglieder/julius/';
    return '';
  }

  function renderGate(items) {
    const badge = byId('profile-publication-badge');
    const copy = byId('profile-publication-copy');
    const action = byId('profile-publication-action');
    const link = byId('profile-publication-link');
    const live = profileIsLive(state.profile);
    const staged = items.filter(item => item.visibility === 'public' && item.publication_status === 'published').length;

    badge.className = `publication-badge state-${live ? 'live' : 'staged'}`;
    badge.textContent = live ? 'Gesamtprofil ist öffentlich' : 'Gesamtprofil ist geschlossen';
    action.dataset.unavailable = 'false';
    action.disabled = state.mutating;

    if (state.profile.publication_status === 'published') {
      action.textContent = 'Gesamtprofil zurückziehen';
      copy.textContent = live
        ? `${staged} einzeln freigegebene Inhalte sind jetzt öffentlich. Ein Klick schließt das gesamte Profil sofort.`
        : 'Das Profil ist freigegeben, aber die Sichtbarkeit ist nicht öffentlich. Es bleibt von außen geschlossen.';
    } else {
      action.textContent = 'Gesamtprofil veröffentlichen';
      copy.textContent = staged
        ? `${staged} Inhalte sind vorbereitet. Erst die Gesamtfreigabe öffnet sie gemeinsam.`
        : 'Du kannst einzelne Inhalte vorbereiten. Ohne Gesamtfreigabe bleibt alles von außen geschlossen.';
      if (state.profile.visibility !== 'public') {
        action.dataset.unavailable = 'true';
        action.disabled = true;
        copy.textContent = 'Stelle den Profilrahmen oben zuerst auf „öffentlich“. Sichtbarkeit allein veröffentlicht weiterhin nichts.';
      }
    }

    const path = publicProfilePath(state.profile);
    link.hidden = !path;
    if (path) link.href = path;
    link.textContent = live ? 'Live-Profil öffnen' : 'Geschlossene Profilseite ansehen';
  }

  function renderMeter(items) {
    const summary = summarizePublication(items, state.profile);
    byId('publication-count-live').textContent = String(summary.live);
    byId('publication-count-staged').textContent = String(summary.staged);
    byId('publication-count-ready').textContent = String(summary.ready);
    byId('publication-count-excluded').textContent = String(summary.excluded + summary.archived);
  }

  function renderPreview(items) {
    const preview = byId('publication-preview');
    preview.replaceChildren();

    const profileCard = node('article', 'publication-preview-profile');
    const profileTop = node('div', 'publication-preview-head');
    const profileCopy = node('div');
    profileCopy.append(
      node('p', 'entry-kicker', 'Gesamtprofil'),
      node('h5', '', state.profile.display_name || 'Mitglied')
    );
    profileTop.append(profileCopy, node('span', 'id-chip', state.profile.stable_id));
    profileCard.append(profileTop);
    profileCard.append(node(
      'p',
      'entry-description',
      profileIsLive(state.profile)
        ? 'Dieser Rahmen ist offen. Nur unten als „jetzt öffentlich“ markierte Inhalte werden ausgeliefert.'
        : 'Diese Vorschau ist nur in deinem Konto sichtbar. Der öffentliche Profilpfad bleibt geschlossen.'
    ));
    preview.append(profileCard);

    const selected = items.filter(item => item.visibility === 'public' && item.publication_status !== 'archived');
    if (!selected.length) {
      preview.append(node('p', 'empty-state', 'Noch kein Inhalt ist für eine öffentliche Vorschau ausgewählt. Stelle Einträge in der Portfolio-Werkstatt auf „öffentlich“.'));
      return;
    }

    const grid = node('div', 'publication-preview-grid');
    selected.forEach(item => {
      const card = node('article', 'publication-preview-card');
      card.append(node('p', 'entry-kicker', KIND_LABELS[item.kind]), node('h5', '', item.title));
      if (item.detail) card.append(node('p', 'entry-description', item.detail));
      card.append(itemStatusBadge(item));
      grid.append(card);
    });
    preview.append(grid);
  }

  function itemAction(item) {
    const button = node('button', 'button compact-button', '');
    button.type = 'button';
    const published = item.publication_status === 'published';
    button.textContent = published ? 'Freigabe zurücknehmen' : 'Einzeln freigeben';
    if (item.publication_status === 'archived' || item.lifecycle_status === 'archived') {
      button.textContent = 'Archiviert';
      button.dataset.unavailable = 'true';
      button.disabled = true;
      return button;
    }
    if (!published && item.visibility !== 'public') {
      button.textContent = 'Im Editor erst öffentlich wählen';
      button.dataset.unavailable = 'true';
      button.disabled = true;
      return button;
    }
    button.dataset.unavailable = 'false';
    button.addEventListener('click', () => changeItemPublication(item));
    return button;
  }

  function renderItems(items) {
    const list = byId('publication-items');
    list.replaceChildren();
    if (!items.length) {
      list.append(node('p', 'empty-state', 'Noch keine Profil- oder Portfolioinhalte vorhanden. Lege sie zuerst in der Werkstatt an.'));
      return;
    }
    items.forEach(item => {
      const row = node('article', 'publication-row');
      const copy = node('div', 'publication-row-copy');
      const head = node('div', 'publication-row-head');
      const title = node('div');
      title.append(node('p', 'entry-kicker', KIND_LABELS[item.kind]), node('h5', '', item.title));
      head.append(title, itemStatusBadge(item));
      copy.append(head);
      if (item.detail) copy.append(node('p', 'entry-description', item.detail));
      if (item.published_at) {
        copy.append(node('small', 'publication-time', `Freigegeben am ${formatPublishedAt(item.published_at)}`));
      }
      row.append(copy, itemAction(item));
      list.append(row);
    });
  }

  function render() {
    if (!state.profile) return;
    const items = buildPublicationItems(state);
    renderGate(items);
    renderMeter(items);
    renderPreview(items);
    renderItems(items);
    setMessage(
      byId('publication-status'),
      profileIsLive(state.profile)
        ? 'Live-Stand geladen. Änderungen brauchen weiterhin eine einzelne, bestätigte Freigabe.'
        : 'Vorschau geladen. Von außen bleibt das Gesamtprofil geschlossen.',
      'success'
    );
  }

  async function query(request) {
    const { data, error } = await request;
    if (error) throw error;
    return data || [];
  }

  async function refresh() {
    if (!state.client || !state.profile?.stable_id) return;
    const token = ++state.loadToken;
    setMessage(byId('publication-status'), 'Veröffentlichungsstand wird sicher geladen …');
    const memberId = state.profile.stable_id;
    try {
      const [catalog, fields, profileSkills, evidence, projects, opportunities] = await Promise.all([
        query(state.client.from('skills')
          .select('id,name,description,branch,lifecycle_status')
          .eq('lifecycle_status', 'active')
          .order('name')),
        query(state.client.from('profile_fields')
          .select('member_id,field_key,value_text,visibility,publication_status,published_at,sort_order')
          .eq('member_id', memberId)
          .order('sort_order')),
        query(state.client.from('profile_skills')
          .select('id,member_id,skill_id,statement,boundaries,visibility,publication_status,published_at,sort_order')
          .eq('member_id', memberId)
          .order('sort_order')),
        query(state.client.from('skill_evidence')
          .select('id,stable_id,member_id,title,description,verification_status,visibility,publication_status,published_at,created_at')
          .eq('member_id', memberId)
          .order('created_at')),
        query(state.client.from('projects')
          .select('id,stable_id,owner_member_id,title,summary,role_summary,lifecycle_status,visibility,publication_status,published_at,sort_order')
          .eq('owner_member_id', memberId)
          .order('sort_order')),
        query(state.client.from('opportunities')
          .select('id,stable_id,owner_member_id,title,summary,lifecycle_status,visibility,publication_status,published_at,updated_at')
          .eq('owner_member_id', memberId)
          .order('updated_at', { ascending: false }))
      ]);
      if (token !== state.loadToken) return;
      Object.assign(state, { catalog, fields, profileSkills, evidence, projects, opportunities });
      render();
    } catch (error) {
      if (token !== state.loadToken) return;
      setMessage(byId('publication-status'), describeError(error, 'Die Veröffentlichungszentrale konnte nicht geladen werden.'), 'error');
      throw error;
    }
  }

  async function changeProfilePublication() {
    if (state.mutating) return;
    const publish = state.profile.publication_status !== 'published';
    const prompt = publish
      ? 'Gesamtprofil wirklich veröffentlichen? Alle bereits einzeln freigegebenen öffentlichen Inhalte werden sofort sichtbar.'
      : 'Gesamtprofil wirklich zurückziehen? Alle öffentlichen Inhalte gehen sofort offline; ihre Einzelfreigaben bleiben für eine spätere Wiederöffnung erhalten.';
    if (!window.confirm(prompt)) return;

    setBusy(true);
    setMessage(byId('publication-status'), publish ? 'Gesamtprofil wird geöffnet …' : 'Gesamtprofil wird geschlossen …');
    try {
      const profile = await setOwnProfilePublication(state.client, publish ? 'published' : 'draft');
      state.profile = { ...state.profile, ...profile };
      if (typeof state.onProfileChange === 'function') state.onProfileChange(state.profile);
      render();
      setMessage(
        byId('publication-status'),
        publish ? 'Gesamtprofil veröffentlicht. Einzeln freigegebene Inhalte sind jetzt live.' : 'Gesamtprofil geschlossen. Von außen sind keine Profildaten mehr lesbar.',
        'success'
      );
    } catch (error) {
      setMessage(byId('publication-status'), describeError(error, 'Der Profilstatus konnte nicht geändert werden.'), 'error');
    } finally {
      setBusy(false);
    }
  }

  async function changeItemPublication(item) {
    if (state.mutating) return;
    const publish = item.publication_status !== 'published';
    const prompt = publish
      ? `„${item.title}“ wirklich einzeln freigeben? Der Inhalt wird öffentlich, sobald auch das Gesamtprofil geöffnet ist.`
      : `Freigabe für „${item.title}“ wirklich zurücknehmen? Der Inhalt wird sofort ausgeblendet und danach wieder bearbeitbar.`;
    if (!window.confirm(prompt)) return;

    setBusy(true);
    setMessage(byId('publication-status'), publish ? 'Einzelfreigabe wird geprüft …' : 'Einzelfreigabe wird zurückgenommen …');
    try {
      await setOwnPortfolioPublication(state.client, {
        kind: item.kind,
        key: item.key,
        status: publish ? 'published' : 'draft'
      });
      await refresh();
      if (state.profileWorkspace?.refresh) await state.profileWorkspace.refresh();
      if (item.kind === 'opportunity' && state.opportunityWorkspace?.refresh) {
        await state.opportunityWorkspace.refresh();
      }
      setMessage(
        byId('publication-status'),
        publish
          ? (profileIsLive(state.profile) ? 'Eintrag freigegeben und jetzt öffentlich.' : 'Eintrag vorbereitet. Das geschlossene Gesamtprofil hält ihn noch offline.')
          : 'Freigabe zurückgenommen. Der Eintrag ist wieder ein bearbeitbarer Entwurf.',
        'success'
      );
    } catch (error) {
      setMessage(byId('publication-status'), describeError(error, 'Die Einzelfreigabe konnte nicht geändert werden.'), 'error');
    } finally {
      setBusy(false);
    }
  }

  let wired = false;

  function wire() {
    if (wired || typeof window === 'undefined') return;
    byId('profile-publication-action').addEventListener('click', changeProfilePublication);
    window.addEventListener('ffe:portfolio-changed', () => {
      if (!state.mutating && state.client && state.profile?.stable_id) refresh().catch(() => {});
    });
    wired = true;
  }

  async function initialize(options) {
    state.client = options.client;
    state.profile = options.profile;
    state.onProfileChange = options.onProfileChange || null;
    state.profileWorkspace = options.profileWorkspace || null;
    state.opportunityWorkspace = options.opportunityWorkspace || null;
    const center = byId('publication-center');
    center.hidden = false;
    wire();
    if (!state.profile?.stable_id) {
      center.querySelectorAll('button').forEach(button => { button.disabled = true; });
      setMessage(byId('publication-status'), 'Für Veröffentlichungen fehlt noch deine bestätigte Mitglieds-ID.', 'error');
      return;
    }
    await refresh();
  }

  function setProfile(profile) {
    state.profile = { ...state.profile, ...profile };
    if (state.catalog.length) render();
  }

  function reset() {
    state.loadToken += 1;
    Object.assign(state, {
      client: null,
      profile: null,
      onProfileChange: null,
      profileWorkspace: null,
      opportunityWorkspace: null,
      catalog: [],
      fields: [],
      profileSkills: [],
      evidence: [],
      projects: [],
      opportunities: [],
      mutating: false
    });
    const center = byId('publication-center');
    if (center) center.hidden = true;
  }

  return {
    buildPublicationItems,
    initialize,
    profileIsLive,
    publicationState,
    refresh,
    reset,
    setOwnPortfolioPublication,
    setOwnProfilePublication,
    setProfile,
    summarizePublication
  };
});
