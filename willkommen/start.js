(function () {
  'use strict';

  const byId = id => document.getElementById(id);
  const form = byId('friend-start');
  const steps = Array.from(form.querySelectorAll('[data-step]'));
  const indicators = Array.from(form.querySelectorAll('.journey-steps li'));
  const name = byId('start-name');
  const bio = byId('start-bio');
  const wish = byId('start-wish');
  const kind = byId('start-kind');
  const idea = byId('start-idea');
  const choices = byId('start-synergies');
  const client = window.FFE_SUPABASE_CLIENT;
  const demoCatalog = byId('preview-catalog');
  const draftKey = 'rubybubys_start';
  const themes = {
    ruby: {accent:'#a44964', accent_deep:'#562941', surface:'#f8d8d5'},
    forest: {accent:'#346a58', accent_deep:'#183e35', surface:'#e5edd7'},
    night: {accent:'#51427d', accent_deep:'#352752', surface:'#e9dff5'}
  };
  const prompts = {
    quest: 'Was könnten zwei Menschen gemeinsam ausprobieren, um deine Synergie kennenzulernen?',
    title: 'Für welchen echten Beitrag würdest du jemandem einen Titel geben?',
    synergy: 'Bei welcher gemeinsamen Aktion könntet ihr euch kennenlernen?',
    design: 'Welches Bild oder welche Stimmung würde zu deiner Seite passen?',
    service: 'Was könntet ihr gemeinsam anbieten, das jemandem im Alltag hilft?'
  };
  const ideas = {
    'SYN-STREUNER': 'Ich würde gern mit den Streunern eine neue Gassirunde entdecken.',
    'SYN-SCHNAUZIS': 'Ich würde gern Tierfreunde bei einem gemeinsamen Spaziergang kennenlernen.',
    'SYN-MACHER': 'Ich würde gern mit anderen etwas reparieren und dabei Wissen teilen.',
    'SYN-AKTIVE': 'Ich würde gern eine kleine Sportgruppe zum Mitmachen starten.',
    'SYN-KUENSTLER': 'Ich würde gern ein gemeinsames Skizzenbuch anfangen.'
  };
  let user, profile, page, existingBio;
  let step = 0;
  let saving = false;
  let catalog = [];
  let previousGroupIds = [];
  let interestRecord;

  function selectedStyle() {
    return form.querySelector('input[name="style"]:checked')?.value || 'ruby';
  }

  function selectedGroups() {
    const selected = new Set(Array.from(choices.querySelectorAll('input:checked'), input => input.value));
    return catalog.filter(group => selected.has(group.id));
  }

  function renderPreview() {
    const displayName = name.value.trim();
    byId('portfolio-preview').dataset.style = selectedStyle();
    byId('preview-name').textContent = displayName || 'Dein Name';
    byId('preview-initial').textContent = displayName ? Array.from(displayName)[0].toLocaleUpperCase() : '✦';
    byId('preview-bio').textContent = bio.value.trim() || 'Hier kann dein erster Satz stehen.';
    const tags = selectedGroups().map(group => {
      const tag = document.createElement('li');
      tag.textContent = group.name;
      return tag;
    });
    byId('preview-tags').replaceChildren(...tags);
    byId('start-prompt').textContent = prompts[kind.value] || '';
    const inspiration = selectedGroups().find(group => ideas[group.id]);
    byId('start-inspiration').hidden = !inspiration;
    byId('start-inspiration-text').textContent = inspiration ? ideas[inspiration.id] : '';
    if (inspiration?.public_path?.startsWith('/')) {
      byId('start-inspiration-link').href = (demoCatalog ? 'https://gemden.red' : '..') + inspiration.public_path;
    }
  }

  function showStep(next, focus = true) {
    step = next;
    steps.forEach((section, index) => {
      section.hidden = index !== step;
      if (index === step) indicators[index].setAttribute('aria-current', 'step');
      else indicators[index].removeAttribute('aria-current');
    });
    byId('start-back').hidden = step === 0;
    byId('start-save-now').hidden = step !== 0;
    byId('start-next').textContent = step === steps.length - 1 ? 'Meinen Entwurf anlegen' : 'Weiter';
    byId('start-status').textContent = '';
    if (focus) steps[step].querySelector('h2').focus();
  }

  function renderChoices(data, previous = []) {
    previousGroupIds = previous;
    catalog = (Array.isArray(data?.synergies) ? data.synergies : []).filter(group =>
      group && /^SYN-[A-Z0-9-]+$/.test(group.id) && typeof group.name === 'string' && group.status !== 'archived');
    if (!catalog.length) {
      choices.textContent = 'Die Synergien konnten gerade nicht geladen werden. Du kannst später auswählen.';
      return;
    }
    choices.replaceChildren(...catalog.map(group => {
      const label = document.createElement('label');
      const input = document.createElement('input');
      input.type = 'checkbox';
      input.value = group.id;
      input.checked = previous.includes(group.id);
      input.disabled = Boolean(interestRecord && (interestRecord.visibility !== 'private' || interestRecord.publication_status !== 'draft'));
      label.append(input, document.createTextNode(group.name));
      return label;
    }));
  }

  async function ownPage() {
    const id = window.FFE_PAGE_BOOTSTRAP.profilePageId(profile.stable_id);
    const result = await client.from('page_documents').select('id,publication_status')
      .eq('id', id).eq('owner_user_id', user.id).maybeSingle();
    if (result.error) throw result.error;
    return result.data;
  }

  async function createPage(draft) {
    const bootstrap = window.FFE_PAGE_BOOTSTRAP;
    try {
      return await bootstrap.createOwnProfilePage(client, {
        stableId: profile.stable_id,
        slug: bootstrap.profileSlug(draft.name, profile.stable_id),
        title: draft.name,
        displayName: draft.name,
        templateUrl: '../assets/data/pages/member-profile.v1.json',
        fetchImpl: async url => {
          const response = await fetch(url);
          if (!response.ok) return response;
          const template = await response.json();
          template.theme = {
            ...template.theme,
            preset: draft.style,
            tokens: {...template.theme.tokens, ...themes[draft.style]}
          };
          return {ok:true, json:async () => template};
        }
      });
    } catch (error) {
      // A concurrent or retried request may already have created the first revision.
      const current = await ownPage();
      if (current) return {page_id:current.id};
      throw error;
    }
  }

  async function saveDraft(draft) {
    const result = await client.auth.getUser();
    if (result.error || result.data?.user?.id !== user.id
      || result.data.user.app_metadata?.gemden_rubybubys_invited !== true) throw Error('session');
    if (!name.readOnly && draft.name !== profile.display_name) {
      const updated = await client.from('profiles').update({display_name:draft.name})
        .eq('id', user.id).eq('visibility', 'private').eq('publication_status', 'draft').select('id').single();
      if (updated.error || updated.data?.id !== user.id) throw Error('profile');
      profile.display_name = draft.name;
    }
    const row = {member_id:profile.stable_id, visibility:'private', publication_status:'draft'};
    if (draft.bio && !existingBio) {
      const savedBio = await client.from('profile_fields').upsert(
        {...row, field_key:'bio', value_text:draft.bio, sort_order:20},
        {onConflict:'member_id,field_key', ignoreDuplicates:true}
      );
      if (savedBio.error) throw savedBio.error;
      existingBio = true;
      bio.readOnly = true;
    }
    page = await ownPage();
    if (!page) {
      const savedPage = await createPage(draft);
      page = {id:savedPage.page_id, publication_status:'draft'};
      lockStyle();
    }
    if (catalog.length && (!interestRecord || (interestRecord.visibility === 'private' && interestRecord.publication_status === 'draft'))
      && (draft.synergy_ids.length || interestRecord)) {
      const field = { ...row, field_key:'synergy_interests', value_text:JSON.stringify(draft.synergy_ids), sort_order:60 };
      const query = client.from('profile_fields');
      const savedInterests = interestRecord
        ? await query.update({ value_text: field.value_text }).eq('member_id', row.member_id)
          .eq('field_key', field.field_key).eq('visibility', 'private').eq('publication_status', 'draft')
        : await query.upsert(field, {onConflict:'member_id,field_key', ignoreDuplicates:true});
      if (savedInterests.error) throw savedInterests.error;
      interestRecord = field;
    }
    const savedDraft = await client.from('profile_fields').upsert({
      ...row, field_key:draftKey, value_text:JSON.stringify(draft), sort_order:90
    }, {onConflict:'member_id,field_key'});
    if (savedDraft.error) throw savedDraft.error;
    byId('start-editor').href = '../gestalten/?page=' + encodeURIComponent(page.id);
  }

  function lockStyle() {
    form.querySelectorAll('input[name="style"]').forEach(input => { input.disabled = true; });
    byId('start-style-note').hidden = false;
  }

  function showReady(draft) {
    form.hidden = true;
    byId('start-ready').hidden = false;
    byId('start-live-actions').hidden = Boolean(demoCatalog);
    if (demoCatalog) {
      byId('start-ready-copy').textContent = 'So sieht der Abschluss aus. In dieser Vorschau bleiben deine Eingaben in diesem Fenster.';
    } else if (page?.publication_status === 'published') {
      byId('start-ready-copy').textContent = 'Dein Rubybubys-Entwurf ist gespeichert. Deine Seite findest du in der Werkstatt.';
    }
    const sections = [];
    if (draft.wish) sections.push('Mein Designwunsch\n' + draft.wish);
    if (draft.idea) sections.push('Meine Idee zum Mitbauen\n' + draft.idea);
    byId('start-summary').value = sections.join('\n\n');
    byId('start-share').hidden = !sections.length;
    byId('start-ready').querySelector('h2').focus();
  }

  form.noValidate = true;
  form.addEventListener('input', renderPreview);
  form.addEventListener('change', renderPreview);
  byId('start-back').addEventListener('click', () => showStep(step - 1));
  form.querySelectorAll('[data-go-step]').forEach(button => {
    button.addEventListener('click', () => {
      if (!saving) showStep(Number(button.dataset.goStep));
    });
  });
  byId('start-use-idea').addEventListener('click', () => {
    const suggested = byId('start-inspiration-text').textContent;
    idea.value = idea.value ? (idea.value + '\n' + suggested).slice(0, idea.maxLength) : suggested;
    idea.focus();
  });
  byId('start-edit').addEventListener('click', () => {
    byId('start-ready').hidden = true;
    form.hidden = false;
    showStep(0);
  });
  byId('start-copy').addEventListener('click', async () => {
    const field = byId('start-summary');
    try {
      await navigator.clipboard.writeText(field.value);
      byId('start-copy-status').textContent = 'Text kopiert.';
    } catch {
      field.focus();
      field.select();
      byId('start-copy-status').textContent = 'Der Text ist markiert. Du kannst ihn jetzt kopieren.';
    }
  });

  form.addEventListener('submit', async event => {
    event.preventDefault();
    if (saving) return;
    if (!name.value.trim()) {
      if (step !== 0) showStep(0);
      name.focus();
      byId('start-status').textContent = 'Wähle einen Namen oder Spitznamen.';
      return;
    }
    if (event.submitter?.id !== 'start-save-now' && step < steps.length - 1) {
      showStep(step + 1);
      return;
    }
    const draft = {
      dynasty_id:'DYN-RUBYBUBYS',
      name:name.value.trim(),
      bio:bio.value.trim(),
      style:selectedStyle(),
      synergy_ids:catalog.length ? selectedGroups().map(group => group.id) : previousGroupIds,
      wish:wish.value.trim(),
      kind:kind.value,
      idea:idea.value.trim()
    };
    saving = true;
    byId('start-next').disabled = true;
    byId('start-back').disabled = true;
    try {
      if (!demoCatalog) {
        byId('start-status').textContent = 'Dein Entwurf wird gespeichert …';
        await saveDraft(draft);
      }
      showReady(draft);
    } catch {
      byId('start-status').textContent = 'Der Entwurf konnte gerade nicht vollständig gespeichert werden. Deine Eingaben sind noch hier. Versuch es erneut.';
    } finally {
      saving = false;
      byId('start-next').disabled = false;
      byId('start-back').disabled = false;
    }
  });

  async function initialize() {
    const gate = byId('start-gate');
    if (demoCatalog) {
      renderChoices(JSON.parse(demoCatalog.textContent));
      name.value = 'Mika';
      gate.textContent = 'Interaktive Vorschau mit Beispielnamen.';
    } else {
      const result = await client.auth.getUser();
      user = result.data?.user;
      if (result.error || !user) {
        gate.textContent = 'Öffne den Einladungslink aus deiner E-Mail oder melde dich im Konto an.';
        byId('start-login').hidden = false;
        return;
      }
      if (user.app_metadata?.gemden_rubybubys_invited !== true) {
        gate.textContent = 'Dieser Einstieg ist für eingeladene Freunde der Rubybubys.';
        return;
      }
      const profileResult = await client.from('profiles')
        .select('stable_id,display_name,account_status,visibility,publication_status')
        .eq('id', user.id).single();
      profile = profileResult.data;
      if (profileResult.error || !profile?.stable_id || profile.account_status !== 'active') throw Error('profile');
      const [fields, currentPage, groups, membership] = await Promise.all([
        client.from('profile_fields').select('field_key,value_text,visibility,publication_status')
          .eq('member_id', profile.stable_id).in('field_key', [draftKey, 'bio', 'synergy_interests']),
        ownPage(),
        fetch('../assets/data/community-v0.1.json').then(response => response.ok ? response.json() : null).catch(() => null),
        client.from('rubybubys_memberships').upsert({ member_id: profile.stable_id }, { onConflict: 'member_id', ignoreDuplicates: true })
      ]);
      if (fields.error) throw fields.error;
      if (membership.error) throw membership.error;
      page = currentPage;
      const fieldsByKey = new Map(fields.data.map(field => [field.field_key, field.value_text]));
      let draft = {};
      try { draft = JSON.parse(fieldsByKey.get(draftKey) || '{}') || {}; } catch { /* Older or incomplete drafts start with defaults. */ }
      existingBio = fieldsByKey.has('bio');
      interestRecord = fields.data.find(field => field.field_key === 'synergy_interests');
      let selectedIds = draft.synergy_ids;
      if (interestRecord) {
        try { selectedIds = JSON.parse(interestRecord.value_text); } catch { selectedIds = []; }
      }
      name.readOnly = profile.visibility !== 'private' || profile.publication_status !== 'draft';
      name.value = /^Neues Mitglied$/.test(profile.display_name) && !name.readOnly ? '' : profile.display_name || '';
      bio.value = fieldsByKey.get('bio') || draft.bio || '';
      bio.readOnly = existingBio;
      wish.value = draft.wish || '';
      kind.value = draft.kind || '';
      idea.value = draft.idea || '';
      if (Object.hasOwn(themes, draft.style)) {
        for (const input of form.querySelectorAll('input[name="style"]')) input.checked = input.value === draft.style;
      }
      if (page) lockStyle();
      renderChoices(groups, Array.isArray(selectedIds) ? selectedIds : []);
      gate.hidden = true;
      client.auth.onAuthStateChange((event, session) => {
        if (event === 'SIGNED_OUT' || (session && session.user.id !== user.id)) location.reload();
      });
      window.addEventListener('pageshow', event => {
        if (event.persisted) location.reload();
      });
      if (page && fieldsByKey.has(draftKey)) {
        byId('start-editor').href = '../gestalten/?page=' + encodeURIComponent(page.id);
        showReady(draft);
        renderPreview();
        return;
      }
    }
    form.hidden = false;
    showStep(0, false);
    renderPreview();
  }

  initialize().catch(() => {
    byId('start-gate').textContent = 'Der Einstieg konnte gerade nicht geladen werden. Lade die Seite neu oder gehe zu deinem Konto.';
    byId('start-login').hidden = false;
  });
})();
