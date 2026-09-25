(function () {
  const FIELDS = [
    ['tagline', 10],
    ['bio', 20],
    ['location', 30],
    ['availability_note', 40],
    ['boundaries', 50]
  ];
  const VISIBILITIES = [
    ['private', 'Privat – nur für mich'],
    ['members', 'Mitglieder – noch geschlossen'],
    ['public', 'Öffentlich – nach Freigabe']
  ];
  const INTENTS = [
    ['portfolio', 'Im Portfolio zeigen'],
    ['offer', 'Für Anfragen anbieten'],
    ['learn', 'Weiter lernen'],
    ['teach', 'Weitergeben'],
    ['collaborate', 'Gemeinsam einsetzen']
  ];
  const STAGES = [
    ['', 'Keine Angabe'],
    ['learning', 'Ich lerne noch'],
    ['practicing', 'Ich übe praktisch'],
    ['independent', 'Ich arbeite selbstständig'],
    ['mentor', 'Ich kann andere begleiten']
  ];
  const EVIDENCE_TYPES = [
    ['work_experience', 'Arbeitserfahrung'],
    ['project', 'Projekt'],
    ['qualification', 'Qualifikation'],
    ['work_sample', 'Arbeitsprobe'],
    ['assessment', 'Einschätzung'],
    ['reference', 'Referenz'],
    ['other', 'Anderer Nachweis']
  ];
  const PROJECT_STATUSES = [
    ['idea', 'Idee'],
    ['active', 'Aktiv'],
    ['paused', 'Pausiert'],
    ['completed', 'Abgeschlossen'],
    ['archived', 'Archiviert']
  ];

  const state = {
    client: null,
    profile: null,
    catalog: [],
    fields: [],
    profileSkills: [],
    evidence: [],
    evidenceLinks: [],
    projects: [],
    projectSkills: [],
    projectEvidenceLinks: []
  };

  const byId = id => document.getElementById(id);

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

  function optionLabel(options, value) {
    return options.find(option => option[0] === value)?.[1] || value || 'Keine Angabe';
  }

  function publicationLabel(value) {
    return {
      draft: 'Entwurf',
      published: 'einzeln freigegeben',
      archived: 'archiviert'
    }[value] || value;
  }

  function fillSelect(select, options, value) {
    if (!select) return;
    select.replaceChildren();
    options.forEach(([optionValue, label]) => {
      const option = node('option', '', label);
      option.value = optionValue;
      select.append(option);
    });
    select.value = value ?? options[0]?.[0] ?? '';
  }

  function prepareControls() {
    document.querySelectorAll('[data-visibility-select]').forEach(select => fillSelect(select, VISIBILITIES, 'private'));
    document.querySelectorAll('[data-intent-select]').forEach(select => fillSelect(select, INTENTS, 'portfolio'));
    document.querySelectorAll('[data-stage-select]').forEach(select => fillSelect(select, STAGES, ''));
    document.querySelectorAll('[data-evidence-type-select]').forEach(select => fillSelect(select, EVIDENCE_TYPES, 'work_experience'));
    document.querySelectorAll('[data-project-status-select]').forEach(select => fillSelect(select, PROJECT_STATUSES, 'idea'));
  }

  async function result(request) {
    const { data, error } = await request;
    if (error) throw error;
    return data || [];
  }

  function describeError(error, fallback) {
    if (error?.code === '23505') return 'Dieser Eintrag ist bereits vorhanden.';
    if (error?.code === '42501') return 'Supabase hat die Änderung an der Rechteprüfung gestoppt.';
    return error?.message || fallback;
  }

  function catalogSkill(skillId) {
    return state.catalog.find(skill => skill.id === skillId) || {
      id: skillId,
      name: skillId,
      description: '',
      branch: ''
    };
  }

  function actionButton(label, action, secondary) {
    const button = node('button', `button compact-button${secondary ? ' secondary danger-button' : ''}`, label);
    button.type = 'button';
    button.addEventListener('click', action);
    return button;
  }

  function entryCard(kicker, title, stableId) {
    const card = node('article', 'portfolio-entry');
    const head = node('div', 'entry-head');
    const heading = node('div');
    heading.append(node('p', 'entry-kicker', kicker), node('h5', '', title));
    head.append(heading);
    if (stableId) head.append(node('span', 'id-chip', stableId));
    card.append(head);
    return card;
  }

  function appendText(card, text, className = 'entry-description') {
    if (text) card.append(node('p', className, text));
  }

  function appendTags(card, labels) {
    const row = node('div', 'entry-tags');
    labels.filter(Boolean).forEach(label => row.append(node('span', 'tag', label)));
    card.append(row);
  }

  function selectedSkills(container) {
    return [...container.querySelectorAll('input[type="checkbox"]:checked')].map(input => input.value);
  }

  function renderSkillChoices(container, selected, prefix) {
    container.replaceChildren();
    const available = state.profileSkills
      .map(item => catalogSkill(item.skill_id))
      .sort((left, right) => left.name.localeCompare(right.name, 'de'));
    if (!available.length) {
      container.append(node('p', 'empty-state', 'Füge zuerst eine Fähigkeit zu deinem Portfolio hinzu.'));
      return;
    }
    available.forEach(skill => {
      const label = node('label', 'choice-pill');
      const input = document.createElement('input');
      input.type = 'checkbox';
      input.value = skill.id;
      input.id = `${prefix}-${skill.id.toLowerCase()}`;
      input.checked = selected.includes(skill.id);
      label.append(input, node('span', '', skill.name));
      container.append(label);
    });
  }

  function openComposer(form) {
    const details = form.closest('details');
    if (details) details.open = true;
    form.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  function resetSkillForm() {
    const form = byId('profile-skill-create-form');
    form.reset();
    form.dataset.editingId = '';
    byId('profile-skill-id').disabled = false;
    form.querySelector('button[type="submit"]').textContent = 'Fähigkeit als Entwurf hinzufügen';
  }

  function editSkill(record) {
    const form = byId('profile-skill-create-form');
    form.dataset.editingId = record.id;
    renderSkillPicker();
    byId('profile-skill-id').value = record.skill_id;
    byId('profile-skill-id').disabled = true;
    byId('profile-skill-statement').value = record.statement || '';
    byId('profile-skill-boundaries').value = record.boundaries || '';
    byId('profile-skill-intent').value = record.intent;
    byId('profile-skill-stage').value = record.self_assessed_stage || '';
    byId('profile-skill-visibility').value = record.visibility;
    form.querySelector('button[type="submit"]').textContent = 'Änderungen am Entwurf speichern';
    setMessage(byId('profile-skill-create-status'), `Du bearbeitest „${catalogSkill(record.skill_id).name}“.`);
    openComposer(form);
  }

  function resetEvidenceForm() {
    const form = byId('skill-evidence-create-form');
    form.reset();
    form.dataset.editingId = '';
    form.querySelector('button[type="submit"]').textContent = 'Nachweis als Entwurf hinzufügen';
    renderSkillChoices(byId('evidence-skill-choices'), [], 'new-evidence');
  }

  function editEvidence(record) {
    const form = byId('skill-evidence-create-form');
    form.dataset.editingId = record.id;
    byId('evidence-title').value = record.title;
    byId('evidence-description').value = record.description || '';
    byId('evidence-type').value = record.evidence_type;
    byId('evidence-visibility').value = record.visibility;
    byId('evidence-source-label').value = record.source_label || '';
    byId('evidence-source-url').value = record.source_url || '';
    const linked = state.evidenceLinks.filter(link => link.evidence_id === record.id).map(link => link.skill_id);
    renderSkillChoices(byId('evidence-skill-choices'), linked, 'edit-evidence');
    form.querySelector('button[type="submit"]').textContent = 'Änderungen am Entwurf speichern';
    setMessage(byId('skill-evidence-create-status'), `Du bearbeitest „${record.title}“.`);
    openComposer(form);
  }

  function resetProjectForm() {
    const form = byId('project-create-form');
    form.reset();
    form.dataset.editingId = '';
    form.querySelector('button[type="submit"]').textContent = 'Projekt als Entwurf hinzufügen';
    renderSkillChoices(byId('project-skill-choices'), [], 'new-project');
  }

  function editProject(record) {
    const form = byId('project-create-form');
    form.dataset.editingId = record.id;
    byId('project-title').value = record.title;
    byId('project-summary').value = record.summary || '';
    byId('project-role-summary').value = record.role_summary || '';
    byId('project-lifecycle-status').value = record.lifecycle_status;
    byId('project-visibility').value = record.visibility;
    const linked = state.projectSkills.filter(link => link.project_id === record.id).map(link => link.skill_id);
    renderSkillChoices(byId('project-skill-choices'), linked, 'edit-project');
    form.querySelector('button[type="submit"]').textContent = 'Änderungen am Entwurf speichern';
    setMessage(byId('project-create-status'), `Du bearbeitest „${record.title}“.`);
    openComposer(form);
  }

  async function removeRow(table, idColumn, id, label) {
    if (!window.confirm(`${label} wirklich aus deinem Entwurf entfernen?`)) return;
    try {
      await result(state.client.from(table).delete().eq(idColumn, id));
      await loadPortfolio();
      setMessage(byId('portfolio-status'), 'Entwurfseintrag entfernt.', 'success');
    } catch (error) {
      setMessage(byId('portfolio-status'), describeError(error, 'Der Eintrag konnte nicht entfernt werden.'), 'error');
    }
  }

  function renderFields() {
    FIELDS.forEach(([key]) => {
      const record = state.fields.find(item => item.field_key === key);
      const input = byId(`field-${key}`);
      const visibility = byId(`field-${key}-visibility`);
      input.value = record?.value_text || '';
      visibility.value = record?.visibility || 'private';
      const locked = Boolean(record && record.publication_status !== 'draft');
      input.disabled = locked;
      visibility.disabled = locked;
    });
  }

  function renderSkillPicker() {
    const select = byId('profile-skill-id');
    const editingId = byId('profile-skill-create-form').dataset.editingId;
    const used = new Set(state.profileSkills.map(item => item.skill_id));
    const options = state.catalog.filter(skill => !used.has(skill.id) || state.profileSkills.find(item => item.id === editingId)?.skill_id === skill.id);
    select.replaceChildren();
    const placeholder = node('option', '', options.length ? 'Fähigkeit auswählen' : 'Alle Fähigkeiten sind bereits gewählt');
    placeholder.value = '';
    select.append(placeholder);
    options.forEach(skill => {
      const option = node('option', '', skill.name);
      option.value = skill.id;
      select.append(option);
    });
    if (!editingId) select.disabled = !options.length;
  }

  function renderSkills() {
    const list = byId('profile-skills-list');
    list.replaceChildren();
    if (!state.profileSkills.length) list.append(node('p', 'empty-state', 'Noch keine Fähigkeit im Portfolio.'));
    state.profileSkills.forEach(record => {
      const skill = catalogSkill(record.skill_id);
      const card = entryCard(skill.branch || 'Fähigkeit', skill.name, skill.id);
      card.classList.add('skill-entry');
      appendText(card, record.statement || skill.description);
      appendText(card, record.boundaries, 'entry-boundary');
      appendTags(card, [optionLabel(INTENTS, record.intent), optionLabel(STAGES, record.self_assessed_stage), optionLabel(VISIBILITIES, record.visibility), publicationLabel(record.publication_status)]);
      if (record.publication_status === 'draft') {
        const actions = node('div', 'button-row entry-actions');
        actions.append(
          actionButton('Bearbeiten', () => editSkill(record)),
          actionButton('Entfernen', () => removeRow('profile_skills', 'id', record.id, `„${skill.name}“`), true)
        );
        card.append(actions);
      }
      list.append(card);
    });
    renderSkillPicker();
  }

  function renderEvidence() {
    const list = byId('skill-evidence-list');
    list.replaceChildren();
    if (!state.evidence.length) list.append(node('p', 'empty-state', 'Noch kein Nachweis hinterlegt.'));
    state.evidence.forEach(record => {
      const card = entryCard(optionLabel(EVIDENCE_TYPES, record.evidence_type), record.title, record.stable_id);
      appendText(card, record.description);
      appendText(card, record.source_label ? `Quelle: ${record.source_label}` : '');
      const linked = state.evidenceLinks.filter(link => link.evidence_id === record.id).map(link => catalogSkill(link.skill_id).name);
      appendTags(card, [record.verification_status === 'self_reported' ? 'selbst berichtet' : record.verification_status, optionLabel(VISIBILITIES, record.visibility), publicationLabel(record.publication_status), ...linked]);
      if (record.publication_status === 'draft') {
        const actions = node('div', 'button-row entry-actions');
        actions.append(
          actionButton('Bearbeiten', () => editEvidence(record)),
          actionButton('Entfernen', () => removeRow('skill_evidence', 'id', record.id, `„${record.title}“`), true)
        );
        card.append(actions);
      }
      list.append(card);
    });
    if (!byId('skill-evidence-create-form').dataset.editingId) renderSkillChoices(byId('evidence-skill-choices'), [], 'new-evidence');
  }

  function renderProjects() {
    const list = byId('projects-list');
    list.replaceChildren();
    if (!state.projects.length) list.append(node('p', 'empty-state', 'Noch kein Projekt im Portfolio.'));
    state.projects.forEach(record => {
      const card = entryCard(optionLabel(PROJECT_STATUSES, record.lifecycle_status), record.title, record.stable_id);
      appendText(card, record.summary);
      appendText(card, record.role_summary ? `Meine Rolle: ${record.role_summary}` : '');
      const linked = state.projectSkills.filter(link => link.project_id === record.id).map(link => catalogSkill(link.skill_id).name);
      appendTags(card, [optionLabel(VISIBILITIES, record.visibility), publicationLabel(record.publication_status), ...linked]);
      if (record.publication_status === 'draft') {
        const actions = node('div', 'button-row entry-actions');
        actions.append(
          actionButton('Bearbeiten', () => editProject(record)),
          actionButton('Entfernen', () => removeRow('projects', 'id', record.id, `„${record.title}“`), true)
        );
        card.append(actions);
      }
      list.append(card);
    });
    if (!byId('project-create-form').dataset.editingId) renderSkillChoices(byId('project-skill-choices'), [], 'new-project');
  }

  function renderPortfolio() {
    byId('portfolio-field-count').textContent = String(state.fields.filter(item => item.value_text.trim()).length);
    byId('portfolio-skill-count').textContent = String(state.profileSkills.length);
    byId('portfolio-evidence-count').textContent = String(state.evidence.length);
    byId('portfolio-project-count').textContent = String(state.projects.length);
    renderFields();
    renderSkills();
    renderEvidence();
    renderProjects();
    const publishedCount = [
      ...state.fields,
      ...state.profileSkills,
      ...state.evidence,
      ...state.projects
    ].filter(item => item.publication_status === 'published').length;
    setMessage(
      byId('portfolio-status'),
      publishedCount
        ? `${publishedCount} Einträge sind einzeln freigegeben. Veröffentlichte Einträge werden vor Änderungen zuerst zurückgezogen.`
        : 'Deine Portfolio-Entwürfe sind geladen.',
      'success'
    );
  }

  async function loadPortfolio() {
    const memberId = state.profile.stable_id;
    const [catalog, fields, profileSkills, evidence, evidenceLinks, projects, projectSkills, projectEvidenceLinks] = await Promise.all([
      result(state.client.from('skills').select('id,name,description,branch,safety_note,lifecycle_status').eq('lifecycle_status', 'active').order('name')),
      result(state.client.from('profile_fields').select('member_id,field_key,value_text,visibility,publication_status,published_at,sort_order,updated_at').eq('member_id', memberId).order('sort_order')),
      result(state.client.from('profile_skills').select('id,member_id,skill_id,statement,boundaries,self_assessed_stage,intent,visibility,publication_status,published_at,sort_order,updated_at').eq('member_id', memberId).order('sort_order')),
      result(state.client.from('skill_evidence').select('id,stable_id,member_id,evidence_type,verification_status,title,description,source_label,source_url,occurred_from,occurred_until,visibility,publication_status,published_at,created_at,updated_at').eq('member_id', memberId).order('created_at')),
      result(state.client.from('skill_evidence_links').select('evidence_id,skill_id')),
      result(state.client.from('projects').select('id,stable_id,owner_member_id,title,summary,role_summary,lifecycle_status,started_on,completed_on,visibility,publication_status,published_at,sort_order,created_at,updated_at').eq('owner_member_id', memberId).order('sort_order')),
      result(state.client.from('project_skills').select('project_id,skill_id,relation_type')),
      result(state.client.from('project_evidence_links').select('project_id,evidence_id,relation_type'))
    ]);
    Object.assign(state, { catalog, fields, profileSkills, evidence, evidenceLinks, projects, projectSkills, projectEvidenceLinks });
    renderPortfolio();
    if (typeof window.CustomEvent === 'function') {
      window.dispatchEvent(new CustomEvent('ffe:portfolio-changed'));
    }
  }

  async function syncSkillLinks(table, foreignKey, foreignId, existingIds, wantedIds) {
    const existing = new Set(existingIds);
    const wanted = new Set(wantedIds);
    const removed = [...existing].filter(id => !wanted.has(id));
    const added = [...wanted].filter(id => !existing.has(id));
    if (removed.length) await result(state.client.from(table).delete().eq(foreignKey, foreignId).in('skill_id', removed));
    if (added.length) await result(state.client.from(table).insert(added.map(skillId => ({ [foreignKey]: foreignId, skill_id: skillId }))));
  }

  function wireForms() {
    byId('profile-fields-form').addEventListener('submit', async event => {
      event.preventDefault();
      const submit = byId('profile-fields-submit');
      const status = byId('profile-fields-status');
      submit.disabled = true;
      setMessage(status, 'Profilfelder werden gespeichert …');
      try {
        const rows = FIELDS.map(([key, sortOrder]) => ({
          key,
          sortOrder,
          value: byId(`field-${key}`).value.trim(),
          visibility: byId(`field-${key}-visibility`).value,
          existing: state.fields.find(item => item.field_key === key)
        }));
        const upserts = rows.filter(row => row.value && (!row.existing || row.existing.publication_status === 'draft'));
        const removals = rows.filter(row => !row.value && row.existing?.publication_status === 'draft');
        if (upserts.length) {
          await result(state.client.from('profile_fields').upsert(upserts.map(row => ({
            member_id: state.profile.stable_id,
            field_key: row.key,
            value_text: row.value,
            visibility: row.visibility,
            publication_status: 'draft',
            sort_order: row.sortOrder
          })), { onConflict: 'member_id,field_key' }).select('field_key'));
        }
        if (removals.length) {
          await result(state.client.from('profile_fields').delete()
            .eq('member_id', state.profile.stable_id)
            .eq('publication_status', 'draft')
            .in('field_key', removals.map(row => row.key)));
        }
        await loadPortfolio();
        setMessage(status, 'Profilfelder als Entwurf gespeichert.', 'success');
      } catch (error) {
        setMessage(status, describeError(error, 'Die Profilfelder konnten nicht gespeichert werden.'), 'error');
      } finally {
        submit.disabled = false;
      }
    });

    byId('profile-skill-create-form').addEventListener('submit', async event => {
      event.preventDefault();
      const form = event.currentTarget;
      const submit = form.querySelector('button[type="submit"]');
      const status = byId('profile-skill-create-status');
      const editingId = form.dataset.editingId;
      const skillId = byId('profile-skill-id').value;
      if (!skillId) {
        setMessage(status, 'Bitte wähle eine Fähigkeit aus.', 'error');
        return;
      }
      submit.disabled = true;
      setMessage(status, editingId ? 'Änderungen werden gespeichert …' : 'Fähigkeit wird hinzugefügt …');
      try {
        const values = {
          statement: byId('profile-skill-statement').value.trim(),
          boundaries: byId('profile-skill-boundaries').value.trim(),
          self_assessed_stage: byId('profile-skill-stage').value || null,
          intent: byId('profile-skill-intent').value,
          visibility: byId('profile-skill-visibility').value
        };
        if (editingId) {
          await result(state.client.from('profile_skills').update(values)
            .eq('id', editingId)
            .eq('member_id', state.profile.stable_id)
            .select('id'));
        } else {
          await result(state.client.from('profile_skills').insert({
            ...values,
            member_id: state.profile.stable_id,
            skill_id: skillId,
            publication_status: 'draft',
            sort_order: (state.profileSkills.length + 1) * 10
          }).select('id'));
        }
        resetSkillForm();
        await loadPortfolio();
        setMessage(status, 'Fähigkeitsentwurf gespeichert.', 'success');
      } catch (error) {
        setMessage(status, describeError(error, 'Die Fähigkeit konnte nicht gespeichert werden.'), 'error');
      } finally {
        submit.disabled = false;
      }
    });

    byId('skill-evidence-create-form').addEventListener('submit', async event => {
      event.preventDefault();
      const form = event.currentTarget;
      const submit = form.querySelector('button[type="submit"]');
      const status = byId('skill-evidence-create-status');
      const editingId = form.dataset.editingId;
      const title = byId('evidence-title').value.trim();
      if (!title) {
        setMessage(status, 'Bitte gib dem Nachweis einen Titel.', 'error');
        return;
      }
      submit.disabled = true;
      setMessage(status, editingId ? 'Änderungen werden gespeichert …' : 'Nachweis wird hinzugefügt …');
      try {
        const values = {
          evidence_type: byId('evidence-type').value,
          title,
          description: byId('evidence-description').value.trim(),
          source_label: byId('evidence-source-label').value.trim() || null,
          source_url: byId('evidence-source-url').value.trim() || null,
          visibility: byId('evidence-visibility').value
        };
        let evidenceId = editingId;
        let oldLinks = [];
        if (editingId) {
          oldLinks = state.evidenceLinks.filter(link => link.evidence_id === editingId).map(link => link.skill_id);
          await result(state.client.from('skill_evidence').update(values)
            .eq('id', editingId)
            .eq('member_id', state.profile.stable_id)
            .select('id'));
        } else {
          const inserted = await result(state.client.from('skill_evidence').insert({
            ...values,
            member_id: state.profile.stable_id,
            verification_status: 'self_reported',
            publication_status: 'draft'
          }).select('id').single());
          evidenceId = inserted.id;
        }
        await syncSkillLinks(
          'skill_evidence_links',
          'evidence_id',
          evidenceId,
          oldLinks,
          selectedSkills(byId('evidence-skill-choices'))
        );
        resetEvidenceForm();
        await loadPortfolio();
        setMessage(status, 'Nachweis als selbst berichteter Entwurf gespeichert.', 'success');
      } catch (error) {
        setMessage(status, describeError(error, 'Der Nachweis konnte nicht gespeichert werden.'), 'error');
      } finally {
        submit.disabled = false;
      }
    });

    byId('project-create-form').addEventListener('submit', async event => {
      event.preventDefault();
      const form = event.currentTarget;
      const submit = form.querySelector('button[type="submit"]');
      const status = byId('project-create-status');
      const editingId = form.dataset.editingId;
      const title = byId('project-title').value.trim();
      if (!title) {
        setMessage(status, 'Bitte gib dem Projekt einen Titel.', 'error');
        return;
      }
      submit.disabled = true;
      setMessage(status, editingId ? 'Änderungen werden gespeichert …' : 'Projekt wird hinzugefügt …');
      try {
        const values = {
          title,
          summary: byId('project-summary').value.trim(),
          role_summary: byId('project-role-summary').value.trim(),
          lifecycle_status: byId('project-lifecycle-status').value,
          visibility: byId('project-visibility').value
        };
        let projectId = editingId;
        let oldLinks = [];
        if (editingId) {
          oldLinks = state.projectSkills.filter(link => link.project_id === editingId).map(link => link.skill_id);
          await result(state.client.from('projects').update(values)
            .eq('id', editingId)
            .eq('owner_member_id', state.profile.stable_id)
            .select('id'));
        } else {
          const inserted = await result(state.client.from('projects').insert({
            ...values,
            owner_member_id: state.profile.stable_id,
            publication_status: 'draft',
            sort_order: (state.projects.length + 1) * 10
          }).select('id').single());
          projectId = inserted.id;
        }
        await syncSkillLinks(
          'project_skills',
          'project_id',
          projectId,
          oldLinks,
          selectedSkills(byId('project-skill-choices'))
        );
        resetProjectForm();
        await loadPortfolio();
        setMessage(status, 'Projektentwurf gespeichert.', 'success');
      } catch (error) {
        setMessage(status, describeError(error, 'Das Projekt konnte nicht gespeichert werden.'), 'error');
      } finally {
        submit.disabled = false;
      }
    });

    byId('portfolio-export').addEventListener('click', () => {
      const payload = {
        schema_version: 'gemden.profile-portfolio.export.v1',
        exported_at: new Date().toISOString(),
        profile: {
          stable_id: state.profile.stable_id,
          display_name: state.profile.display_name,
          fields: state.fields.map(({ member_id, ...item }) => item),
          skills: state.profileSkills.map(item => ({ ...item, catalog: catalogSkill(item.skill_id) })),
          evidence: state.evidence.map(item => ({
            ...item,
            skill_ids: state.evidenceLinks.filter(link => link.evidence_id === item.id).map(link => link.skill_id)
          })),
          projects: state.projects.map(item => ({
            ...item,
            skills: state.projectSkills.filter(link => link.project_id === item.id).map(link => ({ skill_id: link.skill_id, relation_type: link.relation_type })),
            evidence: state.projectEvidenceLinks.filter(link => link.project_id === item.id).map(link => ({ evidence_id: link.evidence_id, relation_type: link.relation_type }))
          }))
        }
      };
      const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `gemden-${state.profile.stable_id.toLowerCase()}-portfolio.json`;
      document.body.append(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
      setMessage(byId('portfolio-status'), 'Export erstellt – ohne E-Mail, Auth-ID oder Sitzungsschlüssel.', 'success');
    });
  }

  let formsWired = false;

  async function initialize({ client, profile }) {
    state.client = client;
    state.profile = profile;
    const workspace = byId('portfolio-workspace');
    workspace.hidden = false;
    prepareControls();
    if (!formsWired) {
      wireForms();
      formsWired = true;
    }
    if (!profile?.stable_id) {
      workspace.querySelectorAll('input, textarea, select, button').forEach(control => { control.disabled = true; });
      setMessage(byId('portfolio-status'), 'Für das Portfolio fehlt noch deine bestätigte Mitglieds-ID.', 'error');
      return;
    }
    workspace.querySelectorAll('input, textarea, select, button').forEach(control => { control.disabled = false; });
    setMessage(byId('portfolio-status'), 'Portfolio wird sicher geladen …');
    try {
      await loadPortfolio();
    } catch (error) {
      setMessage(byId('portfolio-status'), describeError(error, 'Das Portfolio konnte nicht geladen werden.'), 'error');
      throw error;
    }
  }

  function setProfile(profile) {
    state.profile = { ...state.profile, ...profile };
  }

  async function refresh() {
    if (!state.client || !state.profile?.stable_id) return;
    await loadPortfolio();
  }

  function reset() {
    Object.assign(state, {
      client: null,
      profile: null,
      catalog: [],
      fields: [],
      profileSkills: [],
      evidence: [],
      evidenceLinks: [],
      projects: [],
      projectSkills: [],
      projectEvidenceLinks: []
    });
    const skillForm = byId('profile-skill-create-form');
    const evidenceForm = byId('skill-evidence-create-form');
    const projectForm = byId('project-create-form');
    [skillForm, evidenceForm, projectForm].forEach(form => {
      if (!form) return;
      form.reset();
      form.dataset.editingId = '';
    });
    if (skillForm) {
      byId('profile-skill-id').disabled = false;
      skillForm.querySelector('button[type="submit"]').textContent = 'Fähigkeit als Entwurf hinzufügen';
    }
    if (evidenceForm) evidenceForm.querySelector('button[type="submit"]').textContent = 'Nachweis als Entwurf hinzufügen';
    if (projectForm) projectForm.querySelector('button[type="submit"]').textContent = 'Projekt als Entwurf hinzufügen';
    byId('portfolio-workspace').hidden = true;
  }

  window.FFE_PROFILE_WORKSPACE = { initialize, refresh, setProfile, reset };
})();
