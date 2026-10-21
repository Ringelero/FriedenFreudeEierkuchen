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
    tagline: "One-line introduction",
    bio: "About me",
    location: "Location or area of activity",
    availability_note: "Availability",
    boundaries: "Boundaries"
  };
  const KIND_LABELS = {
    profile_field: "Profile field",
    profile_skill: "Skill",
    skill_evidence: "Evidence",
    project: "Project",
    opportunity: "Opportunity"
  };
  const STATE_LABELS = {
    live: "public now",
    staged: "approved · profile closed",
    ready: "public selected · still a draft",
    excluded: "public not selected",
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
      throw new Error("A secure Supabase session is required.");
    }
    return client;
  }

  function requireStatus(targetStatus) {
    if (!TARGET_STATUSES.has(targetStatus)) {
      throw new Error("The requested publication status is invalid.");
    }
    return targetStatus;
  }

  function requireKind(targetKind) {
    if (!TARGET_KINDS.has(targetKind)) {
      throw new Error("This type of portfolio entry cannot be published.");
    }
    return targetKind;
  }

  function requireKey(targetKey) {
    const value = String(targetKey || '').trim();
    if (!value || value.length > 200) {
      throw new Error("The portfolio entry has no valid identifier.");
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
    return confirmedAction(data, "Publication was not confirmed by the server.");
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
        ? "Self-reported"
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
      return "First explicitly set the intended visibility to “public”.";
    }
    if (error?.code === '22023') return "At least one detail is still invalid for this approval.";
    if (error?.code === '42501') return "Supabase stopped the approval during the ownership or security check.";
    return fallback;
  }

  function itemStatusBadge(item) {
    const itemState = publicationState(item, state.profile);
    return node('span', `publication-badge state-${itemState}`, STATE_LABELS[itemState]);
  }

  function formatPublishedAt(value) {
    if (!value) return '';
    return new Intl.DateTimeFormat("en-GB", {
      dateStyle: 'medium',
      timeStyle: 'short'
    }).format(new Date(value));
  }

  function publicProfilePath(profile) {
    try {
      return window.GemDenMemberPageTemplate?.publicProfilePath(profile?.stable_id) || '';
    } catch {
      return '';
    }
  }

  function renderGate(items) {
    const badge = byId('profile-publication-badge');
    const copy = byId('profile-publication-copy');
    const action = byId('profile-publication-action');
    const link = byId('profile-publication-link');
    const live = profileIsLive(state.profile);
    const staged = items.filter(item => item.visibility === 'public' && item.publication_status === 'published').length;

    badge.className = `publication-badge state-${live ? 'live' : 'staged'}`;
    badge.textContent = live ? "Overall profile is public" : "Overall profile is closed";
    action.dataset.unavailable = 'false';
    action.disabled = state.mutating;

    if (state.profile.publication_status === 'published') {
      action.textContent = "Withdraw overall profile";
      copy.textContent = live
        ? `${staged} individually approved content is now public. One click closes the entire profile immediately.`
        : "The profile is approved, but its visibility is not public. It remains closed to visitors.";
    } else {
      action.textContent = "Publish overall profile";
      copy.textContent = staged
        ? `${staged} content is prepared. Only overall approval opens it together.`
        : "You can prepare individual content. Without overall approval, everything remains closed to visitors.";
      if (state.profile.visibility !== 'public') {
        action.dataset.unavailable = 'true';
        action.disabled = true;
        copy.textContent = "First set the profile framework above to “public”. Visibility alone still publishes nothing.";
      }
    }

    const path = publicProfilePath(state.profile);
    link.hidden = !path;
    if (path) link.href = path;
    link.textContent = live ? "Open live profile" : "View closed profile page";
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
      node('p', 'entry-kicker', "Overall profile"),
      node('h5', '', state.profile.display_name || "Member")
    );
    profileTop.append(profileCopy, node('span', 'id-chip', state.profile.stable_id));
    profileCard.append(profileTop);
    profileCard.append(node(
      'p',
      'entry-description',
      profileIsLive(state.profile)
        ? "This framework is open. Only content marked “now public” below is delivered."
        : "This preview is visible only in your account. The public profile path remains closed."
    ));
    preview.append(profileCard);

    const selected = items.filter(item => item.visibility === 'public' && item.publication_status !== 'archived');
    if (!selected.length) {
      preview.append(node('p', 'empty-state', "No content has been selected for a public preview yet. Set entries to “public” in the portfolio workshop."));
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
    button.textContent = published ? "Withdraw approval" : "Approve individually";
    if (item.publication_status === 'archived' || item.lifecycle_status === 'archived') {
      button.textContent = "Archived";
      button.dataset.unavailable = 'true';
      button.disabled = true;
      return button;
    }
    if (!published && item.visibility !== 'public') {
      button.textContent = "Select public in the editor first";
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
      list.append(node('p', 'empty-state', "No profile or portfolio content yet. Create it in the workshop first."));
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
        copy.append(node('small', 'publication-time', `Approved on ${formatPublishedAt(item.published_at)}`));
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
        ? "Live version loaded. Changes still need individual, confirmed approval."
        : "Preview loaded. The overall profile remains closed to visitors.",
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
    setMessage(byId('publication-status'), "Loading publication status securely …");
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
      setMessage(byId('publication-status'), describeError(error, "The publication centre could not be loaded."), 'error');
      throw error;
    }
  }

  async function changeProfilePublication() {
    if (state.mutating) return;
    const publish = state.profile.publication_status !== 'published';
    const prompt = publish
      ? "Publish the overall profile? All public content already approved individually will become visible immediately."
      : "Withdraw the overall profile? All public content will go offline immediately; its individual approvals will remain for reopening later.";
    if (!window.confirm(prompt)) return;

    setBusy(true);
    setMessage(byId('publication-status'), publish ? "Opening overall profile …" : "Closing overall profile …");
    try {
      const profile = await setOwnProfilePublication(state.client, publish ? 'published' : 'draft');
      state.profile = { ...state.profile, ...profile };
      if (typeof state.onProfileChange === 'function') state.onProfileChange(state.profile);
      render();
      setMessage(
        byId('publication-status'),
        publish ? "Overall profile published. Individually approved content is now live." : "Overall profile closed. Profile data is no longer readable by visitors.",
        'success'
      );
    } catch (error) {
      setMessage(byId('publication-status'), describeError(error, "The profile status could not be changed."), 'error');
    } finally {
      setBusy(false);
    }
  }

  async function changeItemPublication(item) {
    if (state.mutating) return;
    const publish = item.publication_status !== 'published';
    const prompt = publish
      ? `„${item.title}” — approve individually? The content becomes public as soon as the overall profile is open too.`
      : `Withdraw approval for “${item.title}”? The content will be hidden immediately and become editable again.`;
    if (!window.confirm(prompt)) return;

    setBusy(true);
    setMessage(byId('publication-status'), publish ? "Checking individual approval …" : "Withdrawing individual approval …");
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
          ? (profileIsLive(state.profile) ? "Entry approved and now public." : "Entry prepared. The closed overall profile is still keeping it offline.")
          : "Approval withdrawn. The entry is an editable draft again.",
        'success'
      );
    } catch (error) {
      setMessage(byId('publication-status'), describeError(error, "Individual approval could not be changed."), 'error');
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
      setMessage(byId('publication-status'), "Your confirmed member ID is still needed for publication.", 'error');
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
