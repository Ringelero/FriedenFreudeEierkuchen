(function () {
  const publicationCenter = window.FFE_PUBLICATION_CENTER;
  const SIGNALS = [
    ['have', 'Ich habe', 'Ressource, Material oder Zugang'],
    ['can', 'Ich kann', 'Fähigkeit, Wissen oder Unterstützung'],
    ['need', 'Ich brauche', 'Bedarf, Frage oder fehlende Mitwirkung'],
    ['time', 'Ich habe Zeit', 'Verfügbarkeit in einem klaren Rahmen'],
    ['chance', 'Es gibt eine Chance', 'Idee, Zugang oder gemeinsame Möglichkeit']
  ];
  const MODES = [
    ['cooperation', 'Kooperation'],
    ['commission', 'Auftrag'],
    ['job', 'Job'],
    ['learning', 'Lernen'],
    ['voluntary', 'Freiwillige Hilfe'],
    ['care', 'Care'],
    ['commons', 'Commons / Leihe'],
    ['project', 'Projekt'],
    ['event', 'Veranstaltung']
  ];
  const LOCATIONS = [
    ['flexible', 'Flexibel / noch offen'],
    ['local', 'Vor Ort'],
    ['remote', 'Remote'],
    ['hybrid', 'Hybrid']
  ];
  const COMPENSATION = [
    ['open', 'Noch offen – muss geklärt werden'],
    ['paid', 'Bezahlt'],
    ['expenses', 'Auslagen werden erstattet'],
    ['exchange', 'Tausch'],
    ['voluntary', 'Freiwillig / unbezahlt'],
    ['not_applicable', 'Nicht anwendbar']
  ];
  const RISKS = [
    ['ordinary', 'Allgemeiner Rahmen'],
    ['regulated', 'Qualifikation oder Rechtslage prüfen'],
    ['sensitive', 'Besonders sensibler Kontext']
  ];
  const VISIBILITIES = [
    ['private', 'Privat – nur für mich'],
    ['members', 'Mitglieder – technisch noch geschlossen'],
    ['public', 'Öffentlich – nach bewusster Freigabe']
  ];
  const REQUIREMENT_LEVELS = [
    ['required', 'notwendig'],
    ['helpful', 'hilfreich'],
    ['learnable', 'hier erlernbar']
  ];

  const state = {
    client: null,
    profile: null,
    catalog: [],
    opportunities: [],
    requirements: []
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

  async function result(request) {
    const { data, error } = await request;
    if (error) throw error;
    return data || [];
  }

  function describeError(error, fallback) {
    if (error?.code === '23505') return 'Diese Verknüpfung ist bereits vorhanden.';
    if (error?.code === '23514') return 'Mindestens eine Angabe passt noch nicht zu den sichtbaren Regeln.';
    if (error?.code === '42501') return 'Supabase hat die Änderung an der Rechteprüfung gestoppt.';
    return error?.message || fallback;
  }

  function optionLabel(options, value) {
    return options.find(option => option[0] === value)?.[1] || value || 'Keine Angabe';
  }

  function fillSelect(select, options, value) {
    select.replaceChildren();
    options.forEach(([optionValue, label]) => {
      const option = node('option', '', label);
      option.value = optionValue;
      select.append(option);
    });
    select.value = value ?? options[0]?.[0] ?? '';
  }

  function localDateTime(isoValue) {
    if (!isoValue) return '';
    const date = new Date(isoValue);
    const offset = date.getTimezoneOffset() * 60000;
    return new Date(date.getTime() - offset).toISOString().slice(0, 16);
  }

  function readableDateTime(isoValue) {
    if (!isoValue) return '';
    return new Intl.DateTimeFormat('de-DE', {
      dateStyle: 'medium',
      timeStyle: 'short'
    }).format(new Date(isoValue));
  }

  function toIsoOrNull(value) {
    return value ? new Date(value).toISOString() : null;
  }

  function signalLabel(value) {
    return optionLabel(SIGNALS, value);
  }

  function entryCard(record) {
    const card = node('article', `portfolio-entry opportunity-entry signal-${record.signal_type}`);
    const head = node('div', 'entry-head');
    const heading = node('div');
    heading.append(node('p', 'entry-kicker', signalLabel(record.signal_type)), node('h5', '', record.title));
    head.append(heading, node('span', 'id-chip', record.stable_id));
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

  function actionButton(label, action, secondary) {
    const button = node('button', `button compact-button${secondary ? ' secondary' : ''}`, label);
    button.type = 'button';
    button.addEventListener('click', action);
    return button;
  }

  function prepareControls() {
    fillSelect(byId('opportunity-signal'), SIGNALS, 'need');
    fillSelect(byId('opportunity-mode'), MODES, 'cooperation');
    fillSelect(byId('opportunity-location-mode'), LOCATIONS, 'flexible');
    fillSelect(byId('opportunity-compensation'), COMPENSATION, 'open');
    fillSelect(byId('opportunity-risk'), RISKS, 'ordinary');
    fillSelect(byId('opportunity-visibility'), VISIBILITIES, 'private');
  }

  function requirementRecords(opportunityId) {
    return state.requirements.filter(item => item.opportunity_id === opportunityId);
  }

  function renderRequirementChoices(selectedRecords) {
    const container = byId('opportunity-requirements');
    const selected = new Map(selectedRecords.map(item => [item.skill_id, item]));
    container.replaceChildren();
    state.catalog.forEach(skill => {
      const current = selected.get(skill.id);
      const row = node('div', 'requirement-choice');
      const label = node('label', 'choice-pill requirement-skill');
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.value = skill.id;
      checkbox.checked = Boolean(current);
      checkbox.dataset.requirementSkill = skill.id;
      label.append(checkbox, node('span', '', skill.name));

      const level = document.createElement('select');
      level.dataset.requirementLevel = skill.id;
      fillSelect(level, REQUIREMENT_LEVELS, current?.requirement_level || 'helpful');
      level.disabled = !checkbox.checked;
      level.setAttribute('aria-label', `Bedeutung von ${skill.name}`);
      checkbox.addEventListener('change', () => {
        level.disabled = !checkbox.checked;
      });
      row.append(label, level);
      container.append(row);
    });
  }

  function selectedRequirements() {
    return [...byId('opportunity-requirements').querySelectorAll('[data-requirement-skill]:checked')]
      .map(checkbox => ({
        skill_id: checkbox.value,
        requirement_level: byId('opportunity-requirements')
          .querySelector(`[data-requirement-level="${checkbox.value}"]`).value,
        note: '',
        evidence_expectation: 'none',
        hard_gate: false
      }));
  }

  function updateRiskNote() {
    const risk = byId('opportunity-risk').value;
    const input = byId('opportunity-risk-note');
    const field = byId('opportunity-risk-note-field');
    const needsExplanation = risk !== 'ordinary';
    field.hidden = !needsExplanation;
    input.required = needsExplanation;
    if (!needsExplanation) input.value = '';
  }

  function resetForm() {
    const form = byId('opportunity-form');
    form.reset();
    form.dataset.editingId = '';
    prepareControls();
    renderRequirementChoices([]);
    updateRiskNote();
    form.querySelector('button[type="submit"]').textContent = 'Möglichkeit als Entwurf speichern';
    byId('opportunity-cancel-edit').hidden = true;
    setMessage(byId('opportunity-form-status'), '');
  }

  function editOpportunity(record) {
    if (record.publication_status !== 'draft') return;
    const form = byId('opportunity-form');
    form.dataset.editingId = record.id;
    byId('opportunity-signal').value = record.signal_type;
    byId('opportunity-mode').value = record.relationship_mode;
    byId('opportunity-title').value = record.title;
    byId('opportunity-summary').value = record.summary || '';
    byId('opportunity-location-mode').value = record.location_mode;
    byId('opportunity-location-label').value = record.location_label || '';
    byId('opportunity-starts-at').value = localDateTime(record.starts_at);
    byId('opportunity-ends-at').value = localDateTime(record.ends_at);
    byId('opportunity-duration-note').value = record.duration_note || '';
    byId('opportunity-compensation').value = record.compensation_type;
    byId('opportunity-compensation-note').value = record.compensation_note || '';
    byId('opportunity-risk').value = record.risk_level;
    byId('opportunity-risk-note').value = record.risk_note || '';
    byId('opportunity-visibility').value = record.visibility;
    renderRequirementChoices(requirementRecords(record.id));
    updateRiskNote();
    form.querySelector('button[type="submit"]').textContent = 'Änderungen am Entwurf speichern';
    byId('opportunity-cancel-edit').hidden = false;
    setMessage(byId('opportunity-form-status'), `Du bearbeitest „${record.title}“.`);
    form.closest('details').open = true;
    form.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  async function removeOpportunity(record) {
    if (!window.confirm(`„${record.title}“ wirklich aus deinen Entwürfen entfernen?`)) return;
    try {
      await result(state.client.from('opportunities').delete()
        .eq('id', record.id)
        .eq('owner_member_id', state.profile.stable_id)
        .eq('publication_status', 'draft'));
      notifyChange();
      await loadOpportunities();
      setMessage(byId('opportunity-status'), 'Entwurf entfernt.', 'success');
    } catch (error) {
      setMessage(byId('opportunity-status'), describeError(error, 'Der Entwurf konnte nicht entfernt werden.'), 'error');
    }
  }

  function profileIsLive() {
    return state.profile?.visibility === 'public'
      && state.profile?.publication_status === 'published';
  }

  async function publishOpportunity(record) {
    if (record.visibility !== 'public') {
      setMessage(byId('opportunity-status'), 'Stelle die Sichtbarkeit im Entwurf zuerst bewusst auf „öffentlich“.', 'error');
      return;
    }
    const confirmation = profileIsLive()
      ? `„${record.title}“ jetzt freigeben? Der Eintrag wird im öffentlichen Möglichkeitenstrom sichtbar.`
      : `„${record.title}“ einzeln freigeben? Der Eintrag bleibt vorbereitet und geht erst mit deinem Gesamtprofil online.`;
    if (!window.confirm(confirmation)) return;
    try {
      if (record.lifecycle_status !== 'open') {
        await result(state.client.from('opportunities').update({ lifecycle_status: 'open' })
          .eq('id', record.id)
          .eq('owner_member_id', state.profile.stable_id)
          .eq('publication_status', 'draft')
          .select('id'));
      }
      await publicationCenter.setOwnPortfolioPublication(state.client, {
        kind: 'opportunity',
        key: record.id,
        status: 'published'
      });
      notifyChange();
      await loadOpportunities();
      setMessage(
        byId('opportunity-status'),
        profileIsLive()
          ? 'Möglichkeit freigegeben und jetzt öffentlich.'
          : 'Möglichkeit einzeln freigegeben. Das geschlossene Gesamtprofil hält sie noch offline.',
        'success'
      );
    } catch (error) {
      setMessage(byId('opportunity-status'), describeError(error, 'Die Freigabe konnte nicht geändert werden.'), 'error');
    }
  }

  async function retractOpportunity(record) {
    if (!window.confirm(`Freigabe für „${record.title}“ zurücknehmen? Die Möglichkeit verschwindet sofort aus dem öffentlichen Strom und wird wieder bearbeitbar.`)) return;
    try {
      await publicationCenter.setOwnPortfolioPublication(state.client, {
        kind: 'opportunity',
        key: record.id,
        status: 'draft'
      });
      notifyChange();
      await loadOpportunities();
      setMessage(byId('opportunity-status'), 'Freigabe zurückgenommen. Die Möglichkeit ist wieder ein Entwurf.', 'success');
    } catch (error) {
      setMessage(byId('opportunity-status'), describeError(error, 'Die Freigabe konnte nicht zurückgenommen werden.'), 'error');
    }
  }

  async function updateOpportunityLifecycle(record, lifecycleStatus, successMessage) {
    if (!['open', 'paused', 'closed'].includes(lifecycleStatus)) {
      setMessage(byId('opportunity-status'), 'Dieser Lebenszyklus ist nicht zulässig.', 'error');
      return;
    }
    try {
      await result(state.client.from('opportunities').update({ lifecycle_status: lifecycleStatus })
        .eq('id', record.id)
        .eq('owner_member_id', state.profile.stable_id)
        .select('id'));
      notifyChange();
      await loadOpportunities();
      setMessage(byId('opportunity-status'), successMessage, 'success');
    } catch (error) {
      setMessage(byId('opportunity-status'), describeError(error, 'Der Status konnte nicht geändert werden.'), 'error');
    }
  }

  function renderOpportunity(record) {
    const card = entryCard(record);
    appendText(card, record.summary);

    const context = [];
    if (record.location_label) context.push(`${optionLabel(LOCATIONS, record.location_mode)} · ${record.location_label}`);
    else context.push(optionLabel(LOCATIONS, record.location_mode));
    if (record.starts_at) context.push(`ab ${readableDateTime(record.starts_at)}`);
    if (record.ends_at) context.push(`bis ${readableDateTime(record.ends_at)}`);
    if (record.duration_note) context.push(record.duration_note);
    appendText(card, context.join(' · '), 'entry-context');

    appendText(card, `Rahmen: ${optionLabel(COMPENSATION, record.compensation_type)}${record.compensation_note ? ` · ${record.compensation_note}` : ''}`);
    if (record.risk_level !== 'ordinary') {
      appendText(card, `${optionLabel(RISKS, record.risk_level)} · ${record.risk_note || 'Klärung erforderlich'}`, 'entry-boundary');
    }

    const linked = requirementRecords(record.id);
    if (linked.length) {
      const skillList = node('ul', 'match-reasons compact-requirements');
      linked.forEach(link => {
        const skill = state.catalog.find(item => item.id === link.skill_id);
        skillList.append(node('li', '', `${skill?.name || link.skill_id} · ${optionLabel(REQUIREMENT_LEVELS, link.requirement_level)}`));
      });
      card.append(skillList);
    }

    appendTags(card, [
      optionLabel(MODES, record.relationship_mode),
      optionLabel(VISIBILITIES, record.visibility),
      record.publication_status === 'draft' ? 'Entwurf' : 'veröffentlicht',
      record.lifecycle_status
    ]);

    const actions = node('div', 'button-row entry-actions');
    if (record.publication_status === 'draft') {
      actions.append(
        actionButton('Bearbeiten', () => editOpportunity(record)),
        actionButton('Entfernen', () => removeOpportunity(record), true)
      );
      if (record.visibility === 'public') {
        actions.append(actionButton('Öffentlich freigeben', () => publishOpportunity(record)));
      }
      if (!profileIsLive() && record.visibility === 'public') {
        appendText(card, 'Du kannst die Einzelfreigabe vorbereiten. Online geht sie erst, wenn auch dein Gesamtprofil geöffnet ist.', 'entry-boundary');
      }
    } else if (record.publication_status === 'published') {
      if (record.lifecycle_status === 'open') {
        actions.append(actionButton('Pausieren', () => updateOpportunityLifecycle(record, 'paused', 'Möglichkeit pausiert.'), true));
      }
      if (record.lifecycle_status === 'paused') {
        actions.append(actionButton('Wieder öffnen', () => updateOpportunityLifecycle(record, 'open', 'Möglichkeit wieder geöffnet.')));
      }
      if (['open', 'paused'].includes(record.lifecycle_status)) {
        actions.append(actionButton('Abschließen', () => updateOpportunityLifecycle(record, 'closed', 'Möglichkeit abgeschlossen.'), true));
      }
      actions.append(actionButton('Freigabe zurücknehmen', () => retractOpportunity(record), true));
    }
    if (actions.childElementCount) card.append(actions);
    return card;
  }

  function render() {
    const list = byId('opportunities-list');
    list.replaceChildren();
    const active = state.opportunities.filter(item => item.lifecycle_status !== 'archived');
    if (!active.length) {
      list.append(node('p', 'empty-state', 'Noch keine Möglichkeit angelegt. Beginne mit „Ich kann“ oder „Ich brauche“.'));
    } else {
      active.forEach(record => list.append(renderOpportunity(record)));
    }

    byId('opportunity-count-all').textContent = String(active.length);
    byId('opportunity-count-draft').textContent = String(active.filter(item => item.publication_status === 'draft').length);
    byId('opportunity-count-open').textContent = String(active.filter(item => item.publication_status === 'published' && item.lifecycle_status === 'open').length);
    byId('opportunity-count-closed').textContent = String(active.filter(item => item.lifecycle_status === 'closed').length);
    setMessage(byId('opportunity-status'), 'Deine Möglichkeiten sind geladen. Neue Einträge beginnen privat als Entwurf.', 'success');
  }

  async function loadOpportunities() {
    if (!state.client || !state.profile?.stable_id) return;
    const memberId = state.profile.stable_id;
    const opportunities = await result(state.client.from('opportunities')
      .select('id,stable_id,owner_member_id,signal_type,relationship_mode,title,summary,location_mode,location_label,starts_at,ends_at,duration_note,compensation_type,compensation_note,risk_level,risk_note,visibility,lifecycle_status,publication_status,published_at,created_at,updated_at')
      .eq('owner_member_id', memberId)
      .order('updated_at', { ascending: false }));

    let requirements = [];
    if (opportunities.length) {
      requirements = await result(state.client.from('opportunity_requirements')
        .select('id,opportunity_id,skill_id,requirement_level,note,evidence_expectation,hard_gate,created_at,updated_at')
        .in('opportunity_id', opportunities.map(item => item.id)));
    }
    Object.assign(state, { opportunities, requirements });
    render();
  }

  async function syncRequirements(opportunityId, wanted) {
    const existing = requirementRecords(opportunityId);
    const wantedMap = new Map(wanted.map(item => [item.skill_id, item]));
    const removed = existing.filter(item => !wantedMap.has(item.skill_id));
    const added = wanted.filter(item => !existing.some(current => current.skill_id === item.skill_id));
    const changed = existing.filter(item => {
      const next = wantedMap.get(item.skill_id);
      return next && (
        next.requirement_level !== item.requirement_level
        || next.evidence_expectation !== item.evidence_expectation
        || next.hard_gate !== item.hard_gate
        || next.note !== item.note
      );
    });

    if (removed.length) {
      await result(state.client.from('opportunity_requirements').delete()
        .eq('opportunity_id', opportunityId)
        .in('skill_id', removed.map(item => item.skill_id)));
    }
    if (added.length) {
      await result(state.client.from('opportunity_requirements').insert(
        added.map(item => ({ ...item, opportunity_id: opportunityId }))
      ));
    }
    if (changed.length) {
      await Promise.all(changed.map(item => {
        const next = wantedMap.get(item.skill_id);
        return result(state.client.from('opportunity_requirements').update({
          requirement_level: next.requirement_level,
          note: next.note,
          evidence_expectation: next.evidence_expectation,
          hard_gate: next.hard_gate
        }).eq('id', item.id));
      }));
    }
  }

  function notifyChange() {
    window.dispatchEvent(new CustomEvent('ffe:portfolio-changed'));
  }

  function wireForm() {
    byId('opportunity-risk').addEventListener('change', updateRiskNote);
    byId('opportunity-cancel-edit').addEventListener('click', resetForm);
    byId('opportunity-form').addEventListener('submit', async event => {
      event.preventDefault();
      const form = event.currentTarget;
      const submit = form.querySelector('button[type="submit"]');
      const editingId = form.dataset.editingId;
      const title = byId('opportunity-title').value.trim();
      const startsAt = toIsoOrNull(byId('opportunity-starts-at').value);
      const endsAt = toIsoOrNull(byId('opportunity-ends-at').value);
      if (!title) {
        setMessage(byId('opportunity-form-status'), 'Bitte gib der Möglichkeit einen Titel.', 'error');
        return;
      }
      if (startsAt && endsAt && Date.parse(endsAt) < Date.parse(startsAt)) {
        setMessage(byId('opportunity-form-status'), 'Das Ende darf nicht vor dem Beginn liegen.', 'error');
        return;
      }

      submit.disabled = true;
      setMessage(byId('opportunity-form-status'), editingId ? 'Änderungen werden gespeichert …' : 'Entwurf wird angelegt …');
      try {
        const values = {
          signal_type: byId('opportunity-signal').value,
          relationship_mode: byId('opportunity-mode').value,
          title,
          summary: byId('opportunity-summary').value.trim(),
          location_mode: byId('opportunity-location-mode').value,
          location_label: byId('opportunity-location-label').value.trim() || null,
          starts_at: startsAt,
          ends_at: endsAt,
          duration_note: byId('opportunity-duration-note').value.trim() || null,
          compensation_type: byId('opportunity-compensation').value,
          compensation_note: byId('opportunity-compensation-note').value.trim() || null,
          risk_level: byId('opportunity-risk').value,
          risk_note: byId('opportunity-risk-note').value.trim() || null,
          visibility: byId('opportunity-visibility').value
        };

        let opportunityId = editingId;
        if (editingId) {
          await result(state.client.from('opportunities').update(values)
            .eq('id', editingId)
            .eq('owner_member_id', state.profile.stable_id)
            .eq('publication_status', 'draft')
            .select('id'));
        } else {
          const inserted = await result(state.client.from('opportunities').insert({
            ...values,
            owner_member_id: state.profile.stable_id
          }).select('id').single());
          opportunityId = inserted.id;
        }

        await syncRequirements(opportunityId, selectedRequirements());
        notifyChange();
        resetForm();
        await loadOpportunities();
        setMessage(byId('opportunity-form-status'), 'Möglichkeit als privater Entwurf gespeichert.', 'success');
      } catch (error) {
        setMessage(byId('opportunity-form-status'), describeError(error, 'Die Möglichkeit konnte nicht gespeichert werden.'), 'error');
      } finally {
        submit.disabled = false;
      }
    });

    byId('opportunities-export').addEventListener('click', () => {
      const payload = {
        schema_version: 'gemden.opportunities.export.v1',
        exported_at: new Date().toISOString(),
        member_id: state.profile.stable_id,
        opportunities: state.opportunities.map(item => ({
          ...item,
          requirements: requirementRecords(item.id)
        }))
      };
      const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `gemden-${state.profile.stable_id.toLowerCase()}-moeglichkeiten.json`;
      document.body.append(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
      setMessage(byId('opportunity-status'), 'Möglichkeiten-Export erstellt – ohne E-Mail, Auth-ID oder Sitzungsschlüssel.', 'success');
    });
  }

  let wired = false;

  async function initialize({ client, profile }) {
    state.client = client;
    state.profile = profile;
    const workspace = byId('opportunity-workspace');
    workspace.hidden = false;
    if (!profile?.stable_id) {
      workspace.querySelectorAll('input, textarea, select, button').forEach(control => { control.disabled = true; });
      setMessage(byId('opportunity-status'), 'Für Möglichkeiten fehlt noch deine bestätigte Mitglieds-ID.', 'error');
      return;
    }
    if (!publicationCenter?.setOwnPortfolioPublication) {
      setMessage(byId('opportunity-status'), 'Die sichere Veröffentlichungszentrale ist nicht verfügbar.', 'error');
      return;
    }

    state.catalog = await result(client.from('skills')
      .select('id,name,description,branch,safety_note,lifecycle_status')
      .eq('lifecycle_status', 'active')
      .order('name'));
    prepareControls();
    renderRequirementChoices([]);
    updateRiskNote();
    if (!wired) {
      wireForm();
      wired = true;
    }
    workspace.querySelectorAll('input, textarea, select, button').forEach(control => { control.disabled = false; });
    setMessage(byId('opportunity-status'), 'Möglichkeiten werden sicher geladen …');
    await loadOpportunities();
  }

  function setProfile(profile) {
    state.profile = { ...state.profile, ...profile };
    render();
  }

  function reset() {
    Object.assign(state, {
      client: null,
      profile: null,
      catalog: [],
      opportunities: [],
      requirements: []
    });
    const workspace = byId('opportunity-workspace');
    if (workspace) workspace.hidden = true;
  }

  window.FFE_OPPORTUNITY_WORKSPACE = { initialize, refresh: loadOpportunities, setProfile, reset };
})();
