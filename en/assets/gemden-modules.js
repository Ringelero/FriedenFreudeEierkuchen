(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  if (root) root.GemDenModules = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  const memberDesign = typeof module === 'object' && module.exports
    ? require('./member-design.js') : rootDesign();
  function rootDesign() { return typeof globalThis !== 'undefined' ? globalThis.GemDenMemberDesign : null; }

  const SCHEMA_VERSION = '1.0.0';
  const MODULE_PERMISSION_PREFIX = 'module:';
  const MOTIONS = new Set(['none', 'fade', 'rise', 'float', 'pulse']);
  const TONES = new Set(['neutral', 'ruby', 'gold', 'mint']);
  const THEME_TOKENS = {
    accent: { property: '--gdm-accent', pattern: /^#[0-9a-f]{6}$/i },
    accent_deep: { property: '--gdm-accent-deep', pattern: /^#[0-9a-f]{6}$/i },
    surface: { property: '--gdm-surface', pattern: /^#[0-9a-f]{6}$/i },
    radius: { property: '--gdm-radius', pattern: /^\d{1,2}px$/ }
  };

  function isRecord(value) {
    return Boolean(value) && typeof value === 'object' && !Array.isArray(value);
  }

  function unique(values) {
    return new Set(values).size === values.length;
  }

  function requireCondition(condition, message) {
    if (!condition) throw new Error(message);
  }

  function capabilityIndex(catalog) {
    return new Map((catalog.capabilities || []).map(capability => [capability.id, capability]));
  }

  function moduleIndex(catalog) {
    return new Map((catalog.modules || []).map(module => [`${module.type}@${module.version}`, module]));
  }

  function validateCapabilityCatalog(catalog) {
    requireCondition(isRecord(catalog), "Capability catalogue is missing or invalid.");
    requireCondition(catalog.schema_version === SCHEMA_VERSION, `Capability-Schema ${SCHEMA_VERSION} is required.`);
    requireCondition(Array.isArray(catalog.namespaces) && catalog.namespaces.length >= 3, "Capability namespaces are missing.");
    requireCondition(Array.isArray(catalog.non_escalation_rules) && catalog.non_escalation_rules.length, "Capability boundary rules are missing.");
    requireCondition(Array.isArray(catalog.capabilities), "Technical capabilities are missing.");
    const ids = catalog.capabilities.map(item => item.id);
    requireCondition(ids.every(id => typeof id === 'string' && id.startsWith(MODULE_PERMISSION_PREFIX)), "Technical capabilities must start with module:.");
    requireCondition(unique(ids), "Capability IDs must be unique.");
    catalog.capabilities.forEach(item => {
      requireCondition(item.kind === 'module_permission', `${item.id}: incorrect capability type.`);
      requireCondition(Number.isInteger(item.version) && item.version > 0, `${item.id}: invalid version.`);
    });
    return catalog;
  }

  function validateModuleCatalog(catalog, capabilities) {
    requireCondition(isRecord(catalog), "Module catalogue is missing or invalid.");
    requireCondition(catalog.schema_version === SCHEMA_VERSION, `Modul-Schema ${SCHEMA_VERSION} is required.`);
    requireCondition(Array.isArray(catalog.modules) && catalog.modules.length, "Module catalogue is empty.");
    const keys = catalog.modules.map(module => `${module.type}@${module.version}`);
    requireCondition(unique(keys), "Module type and version must be unique in the catalogue.");
    const knownCapabilities = capabilities ? capabilityIndex(capabilities) : null;
    catalog.modules.forEach(module => {
      requireCondition(typeof module.type === 'string' && module.type.includes('.'), "Invalid module type.");
      requireCondition(Number.isInteger(module.version) && module.version > 0, `${module.type}: invalid version.`);
      requireCondition(Array.isArray(module.data_inputs), `${module.type}: data_inputs are missing.`);
      requireCondition(unique(module.data_inputs.map(input => input.name)), `${module.type}: data_inputs must be unique.`);
      requireCondition(isRecord(module.capabilities), `${module.type}: capability contract is missing.`);
      ['requires', 'optional', 'emits'].forEach(field => requireCondition(Array.isArray(module.capabilities[field]), `${module.type}: capabilities.${field} fehlt.`));
      [...module.capabilities.requires, ...module.capabilities.optional].forEach(id => {
        requireCondition(id.startsWith(MODULE_PERMISSION_PREFIX), `${module.type}: ${id} is not a module permission.`);
        if (knownCapabilities) requireCondition(knownCapabilities.has(id), `${module.type}: unknown capability ${id}.`);
      });
      requireCondition(isRecord(module.editor), `${module.type}: editor contract is missing.`);
      requireCondition(/^[a-z][a-z0-9-]*$/.test(module.editor.category || ''), `${module.type}: invalid editor category.`);
      requireCondition(typeof module.editor.category_title === 'string' && module.editor.category_title, `${module.type}: editor category title is missing.`);
      requireCondition(isRecord(module.editor.default_props), `${module.type}: editor defaults are missing.`);
      requireCondition(isRecord(module.editor.default_appearance), `${module.type}: default editor appearance is missing.`);
      requireCondition(TONES.has(module.editor.default_appearance.tone), `${module.type}: invalid editor default tone.`);
      requireCondition(MOTIONS.has(module.editor.default_appearance.motion), `${module.type}: invalid editor default animation.`);
      requireCondition(Array.isArray(module.editor.fields), `${module.type}: editor fields are missing.`);
      requireCondition(unique(module.editor.fields.map(field => field.id)), `${module.type}: editor field IDs must be unique.`);
      requireCondition(unique(module.editor.fields.map(field => field.target)), `${module.type}: editor targets must be unique.`);
      module.editor.fields.forEach(field => {
        requireCondition(/^[a-z][a-z0-9_]*$/.test(field.id || ''), `${module.type}: invalid editor field ID.`);
        requireCondition(/^(props|appearance)\.[a-z][a-z0-9_]*$/.test(field.target || ''), `${module.type}: unsafe editor target ${field.target}.`);
        requireCondition(['text', 'textarea', 'select', 'link-list', 'image'].includes(field.control), `${module.type}: unknown editor control.`);
        if (field.control === 'select') requireCondition(Array.isArray(field.options) && field.options.length, `${module.type}: selection options are missing.`);
      });
    });
    return catalog;
  }

  function validateBinding(name, binding, page, sourceMap) {
    requireCondition(isRecord(binding), `Binding ${name} is invalid.`);
    requireCondition(binding.kind === 'entity' || binding.kind === 'related', `Binding ${name} has an unknown type.`);
    const source = sourceMap.get(binding.source);
    requireCondition(source, `Binding ${name} references the unknown source ${binding.source}.`);
    requireCondition(source.collections.includes(binding.collection), `Binding ${name} may not access collection ${binding.collection} for reading.`);
    if (binding.kind === 'entity') {
      requireCondition(typeof binding.id === 'string' && binding.id, `Binding ${name} requires an ID.`);
    } else {
      requireCondition(isRecord(binding.ids_from), `Binding ${name} requires ids_from.`);
      requireCondition(page.bindings[binding.ids_from.binding], `Binding ${name} references the unknown binding ${binding.ids_from.binding}.`);
      requireCondition(typeof binding.ids_from.field === 'string' && binding.ids_from.field, `Binding ${name} requires a source field.`);
    }
  }

  function validatePageDocument(page, modules, capabilities) {
    requireCondition(isRecord(page), "Page document is missing or invalid.");
    requireCondition(new TextEncoder().encode(JSON.stringify(page)).length <= 1800000, "The page draft is too large. Please use fewer or smaller images.");
    requireCondition(page.schema_version === SCHEMA_VERSION, `Page schema ${SCHEMA_VERSION} is required.`);
    requireCondition(/^PAGE-[A-Z0-9-]+$/.test(page.id || ''), "The page requires a stable PAGE-ID.");
    requireCondition(isRecord(page.subject) && typeof page.subject.id === 'string', "Page subject is missing.");
    requireCondition(isRecord(page.capability_context), "Capability context is missing.");

    const humanSkills = page.capability_context.human_skill_refs || [];
    const aiOperations = page.capability_context.ai_operation_refs || [];
    const grants = page.capability_context.module_permission_grants || [];
    requireCondition(Array.isArray(humanSkills) && humanSkills.every(id => /^SKILL-[A-Z0-9-]+$/.test(id)), "Human-Skill references are invalid.");
    requireCondition(Array.isArray(aiOperations) && aiOperations.every(id => /^OP-[A-Z][0-9]{2}$/.test(id)), "AI operation profiles are invalid.");
    requireCondition(Array.isArray(grants) && grants.every(id => id.startsWith(MODULE_PERMISSION_PREFIX)), "Module authorisations are invalid.");
    requireCondition(unique(humanSkills) && unique(aiOperations) && unique(grants), "Capability references must be unique.");

    const knownCapabilities = capabilityIndex(capabilities);
    grants.forEach(id => requireCondition(knownCapabilities.has(id), `Page document grants unknown capability ${id}.`));

    requireCondition(Array.isArray(page.data_sources), "Data sources are missing.");
    const sourceIds = page.data_sources.map(source => source.id);
    requireCondition(unique(sourceIds), "Data source IDs must be unique.");
    const sourceMap = new Map(page.data_sources.map(source => [source.id, source]));
    page.data_sources.forEach(source => {
      requireCondition(source.type === 'json', `${source.id}: Only JSON sources are allowed in v1.`);
      requireCondition(source.classification === 'public', `${source.id}: The public v1 renderer loads only public sources.`);
      requireCondition(Array.isArray(source.collections) && source.collections.length, `${source.id}: allowed collections are missing.`);
      requireCondition(unique(source.collections), `${source.id}: Collections must be unique.`);
    });

    requireCondition(isRecord(page.bindings), "Page bindings are missing.");
    Object.entries(page.bindings).forEach(([name, binding]) => validateBinding(name, binding, page, sourceMap));

    requireCondition(isRecord(page.theme), "Page theme is missing.");
    requireCondition(['none', 'gentle', 'expressive'].includes(page.theme.motion), "Unknown movement profile.");
    requireCondition(isRecord(page.theme.tokens), "Theme tokens are missing.");
    Object.entries(page.theme.tokens).forEach(([name, value]) => {
      requireCondition(THEME_TOKENS[name] && THEME_TOKENS[name].pattern.test(value), `Unsafe or unknown theme token ${name}.`);
    });

    requireCondition(Array.isArray(page.regions) && page.regions.length, "The page requires at least one region.");
    const manifests = moduleIndex(modules);
    const instanceIds = [];
    page.regions.forEach(region => {
      requireCondition(Array.isArray(region.modules), `Region ${region.id} has no modules.`);
      region.modules.forEach(instance => {
        instanceIds.push(instance.id);
        const manifest = manifests.get(`${instance.type}@${instance.version}`);
        requireCondition(manifest, `Module ${instance.type}@${instance.version} is not registered.`);
        requireCondition(isRecord(instance.bindings), `${instance.id}: bindings are missing.`);
        requireCondition(isRecord(instance.props), `${instance.id}: props are missing.`);
        if (instance.props.image) {
          requireCondition(memberDesign, "The image checker is unavailable.");
          memberDesign.safeImageSource(instance.props.image);
        }
        if (instance.type === 'gemden.profile-hero') {
          requireCondition((memberDesign?.MOTIFS || ['ruby-gem']).includes(instance.props.visual || 'ruby-gem'), "Unknown profile motif.");
        }
        requireCondition(isRecord(instance.appearance), `${instance.id}: appearance is missing.`);
        requireCondition(TONES.has(instance.appearance.tone), `${instance.id}: unknown tone.`);
        requireCondition(MOTIONS.has(instance.appearance.motion), `${instance.id}: unknown animation.`);
        const inputNames = new Set(manifest.data_inputs.map(input => input.name));
        Object.keys(instance.bindings).forEach(inputName => requireCondition(inputNames.has(inputName), `${instance.id}: unknown module input ${inputName}.`));
        manifest.data_inputs.forEach(input => {
          const bindingName = instance.bindings[input.name];
          if (input.required) requireCondition(typeof bindingName === 'string', `${instance.id}: required binding ${input.name} fehlt.`);
          if (bindingName) requireCondition(page.bindings[bindingName], `${instance.id}: binding ${bindingName} is not defined.`);
        });
        manifest.capabilities.requires.forEach(id => requireCondition(grants.includes(id), `${instance.id}: required capability ${id} has not been granted.`));
      });
    });
    requireCondition(unique(instanceIds), "Module instance IDs must be unique across the page.");
    return page;
  }

  function sourceDataFor(sources, sourceId) {
    if (sources instanceof Map) return sources.get(sourceId);
    return sources[sourceId];
  }

  function resolveBindings(definitions, sources, sourceDefinitions) {
    const resolved = {};
    const resolving = new Set();
    const sourceMap = new Map((sourceDefinitions || []).map(source => [source.id, source]));

    function resolve(name) {
      if (Object.prototype.hasOwnProperty.call(resolved, name)) return resolved[name];
      requireCondition(definitions[name], `Binding ${name} is not defined.`);
      requireCondition(!resolving.has(name), `Cyclic binding at ${name}.`);
      resolving.add(name);
      const binding = definitions[name];
      const sourceDefinition = sourceMap.get(binding.source);
      requireCondition(sourceDefinition, `Data source ${binding.source} fehlt.`);
      requireCondition(sourceDefinition.collections.includes(binding.collection), `Collection ${binding.collection} is not released.`);
      const source = sourceDataFor(sources, binding.source);
      requireCondition(isRecord(source), `Data source ${binding.source} has not been loaded.`);
      const collection = source[binding.collection];
      requireCondition(Array.isArray(collection), `Collection ${binding.collection} is not a list.`);

      if (binding.kind === 'entity') {
        resolved[name] = collection.find(item => item && item.id === binding.id) || null;
        requireCondition(resolved[name], `${binding.collection}:${binding.id} was not found.`);
      } else {
        const owner = resolve(binding.ids_from.binding);
        requireCondition(isRecord(owner), `${name}: Source binding is not a single entity.`);
        const ids = owner[binding.ids_from.field];
        requireCondition(Array.isArray(ids), `${name}: ${binding.ids_from.field} is not an ID list.`);
        const byId = new Map(collection.filter(Boolean).map(item => [item.id, item]));
        resolved[name] = ids.map(id => byId.get(id)).filter(Boolean);
        requireCondition(resolved[name].length === ids.length, `${name}: Not all referenced entities were found.`);
      }
      resolving.delete(name);
      return resolved[name];
    }

    Object.keys(definitions).forEach(resolve);
    return resolved;
  }

  async function fetchJson(url, fetchImplementation) {
    const response = await fetchImplementation(url, {
      credentials: 'same-origin',
      headers: { Accept: 'application/json' }
    });
    requireCondition(response.ok, `${url.pathname || url}: HTTP ${response.status}.`);
    return response.json();
  }

  async function loadDataSources(page, pageUrl, fetchImplementation) {
    const base = pageUrl instanceof URL ? pageUrl : new URL(pageUrl);
    const pairs = await Promise.all(page.data_sources.map(async source => {
      requireCondition(source.classification === 'public', `${source.id}: Non-public source blocked in public renderer.`);
      const url = new URL(source.url, base);
      requireCondition(url.origin === base.origin, `${source.id}: external data source blocked.`);
      return [source.id, await fetchJson(url, fetchImplementation)];
    }));
    return Object.fromEntries(pairs);
  }

  function element(tag, options, children) {
    const node = document.createElement(tag);
    const config = options || {};
    if (config.className) node.className = config.className;
    if (config.text !== undefined) node.textContent = String(config.text);
    if (config.attrs) Object.entries(config.attrs).forEach(([name, value]) => {
      if (value !== undefined && value !== null) node.setAttribute(name, String(value));
    });
    (children || []).filter(Boolean).forEach(child => node.append(child));
    return node;
  }

  function safeInternalHref(href) {
    requireCondition(typeof href === 'string' && href, "Link destination is missing.");
    const url = new URL(href, document.baseURI);
    requireCondition(['http:', 'https:'].includes(url.protocol), "Unsafe link protocol blocked.");
    requireCondition(url.origin === window.location.origin, "External link blocked in internal navigation module.");
    return `${url.pathname}${url.search}${url.hash}`;
  }

  function headingBlock(instance, props) {
    const headingId = `${instance.id}-title`;
    const head = element('div', { className: 'section-head' });
    if (props.eyebrow) head.append(element('p', { className: 'eyebrow', text: props.eyebrow }));
    head.append(element('h2', { text: props.title, attrs: { id: headingId } }));
    if (props.intro) head.append(element('p', { text: props.intro }));
    return { head, headingId };
  }

  function decorate(node, instance, context) {
    const requestedMotion = MOTIONS.has(instance.appearance.motion) ? instance.appearance.motion : 'none';
    const motionAllowed = context.can('module:ui.motion.decorative') && context.page.theme.motion !== 'none';
    node.classList.add('gdm-module', `gdm-tone-${instance.appearance.tone}`, `gdm-motion-${motionAllowed ? requestedMotion : 'none'}`);
    node.dataset.moduleId = instance.id;
    node.dataset.moduleType = instance.type;
    node.dataset.moduleVersion = String(instance.version);
    return node;
  }

  function profileHero(instance, bindings, context) {
    const member = bindings.member;
    const dynasty = bindings.dynasty;
    const props = instance.props;
    const breadcrumb = element('nav', { className: 'breadcrumb', attrs: { 'aria-label': "Breadcrumbs" } });
    (props.breadcrumb || []).forEach(item => {
      if (item.href) breadcrumb.append(element('a', { text: item.label, attrs: { href: safeInternalHref(item.href) } }));
      else breadcrumb.append(element('span', { text: item.label }));
    });

    const copy = element('div');
    copy.append(element('p', { className: 'eyebrow', text: props.eyebrow || "Member" }));
    copy.append(element('h1', { className: 'display', text: member.name }));
    const lead = member.tagline || member.bio;
    if (lead) copy.append(element('p', { className: 'lead', text: lead }));
    if (member.tagline && member.bio) {
      copy.append(element('p', { className: 'gdm-profile-bio', text: member.bio }));
    }
    const statuses = element('div', { className: 'status-row gdm-status-row' });
    statuses.append(element('span', { className: 'id-chip', text: member.id }));
    if (member.location) statuses.append(element('span', { className: 'tag', text: member.location }));
    if (dynasty) {
      statuses.append(element('a', {
        className: 'status-chip',
        text: dynasty.id,
        attrs: { href: safeInternalHref(dynasty.public_path) }
      }));
    }
    copy.append(statuses);
    if (member.availability_note) {
      copy.append(element('p', { className: 'gdm-profile-availability', text: member.availability_note }));
    }
    if (Array.isArray(member.boundaries) && member.boundaries.length) {
      const boundaries = element('ul', { className: 'gdm-profile-boundaries' });
      member.boundaries.forEach(boundary => boundaries.append(element('li', { text: boundary })));
      copy.append(boundaries);
    }

    const visual = element('div', { className: 'gdm-profile-visual', attrs: { 'aria-label': props.visual_label || "Profile theme" } });
    if (props.image) {
      visual.append(element('img', { className: `gdm-portrait gdm-portrait-${props.frame || 'soft'}`, attrs: { src: memberDesign.safeImageSource(props.image), alt: props.visual_label || "Profile theme", decoding: 'async' } }));
    } else if (!props.visual || props.visual === 'ruby-gem') visual.append(element('div', { className: 'gdm-gem' }));
    else {
      const motif = element('div', { className: `gdm-motif gdm-motif-${props.visual}`, attrs: { role: 'img' } });
      for (let i = 0; i < 5; i++) motif.append(element('i', { attrs: { 'aria-hidden': 'true' } }));
      visual.append(motif);
    }
    const grid = element('div', { className: 'grid two gdm-profile-grid' }, [copy, visual]);
    return decorate(element('header', { className: 'hero compact' }, [breadcrumb, grid]), instance, context);
  }

  function skillGrid(instance, bindings, context) {
    const props = instance.props;
    const { head, headingId } = headingBlock(instance, props);
    const grid = element('div', { className: 'grid three' });
    if (!bindings.skills.length) grid.append(element('p', { className: 'empty-state', text: "No skills have been added here yet." }));
    bindings.skills.forEach((skill, index) => {
      const card = element('article', { className: 'card gdm-skill-card' });
      card.style.setProperty('--gdm-index', String(index));
      card.append(element('span', { className: 'icon', text: props.icons?.[skill.id] || '✦', attrs: { 'aria-hidden': 'true' } }));
      card.append(element('h3', { text: skill.name }));
      card.append(element('p', { text: skill.description }));
      if (skill.safety) card.append(element('p', { className: 'gdm-card-boundary', text: skill.safety }));
      card.append(element('span', { className: 'id-chip', text: skill.id }));
      grid.append(card);
    });
    return decorate(element('section', { className: 'section', attrs: { 'aria-labelledby': headingId } }, [head, grid]), instance, context);
  }

  function evidenceLabel(value) {
    const labels = { 'self-reported': "self-reported", verified: 'verifiziert', external: "externally supported" };
    return labels[value] || value || "Status open";
  }

  function evidenceGrid(instance, bindings, context) {
    const props = instance.props;
    const headingId = `${instance.id}-title`;
    const panel = element('div', { className: 'panel' });
    panel.append(element('p', { className: 'eyebrow', text: props.eyebrow }));
    panel.append(element('h2', { text: props.title, attrs: { id: headingId } }));
    const grid = element('div', { className: 'grid two' });
    if (!bindings.evidence.length) grid.append(element('p', { className: 'empty-state', text: "No evidence has been added here yet." }));
    bindings.evidence.forEach((evidence, index) => {
      const card = element('article', { className: 'card gdm-evidence-card' });
      card.style.setProperty('--gdm-index', String(index));
      card.append(element('span', { className: 'id-chip', text: evidence.id }));
      card.append(element('h3', { text: evidence.title }));
      card.append(element('p', { text: evidence.description }));
      if (evidence.source_label) {
        card.append(element('p', { className: 'gdm-evidence-source', text: `Source: ${evidence.source_label}` }));
      }
      card.append(element('span', { className: 'tag', text: evidenceLabel(evidence.verification) }));
      grid.append(card);
    });
    panel.append(grid);
    if (props.boundary) {
      const notice = element('div', { className: 'notice gdm-boundary' });
      notice.append(element('strong', { text: "Boundary: " }));
      notice.append(document.createTextNode(props.boundary));
      panel.append(notice);
    }
    return decorate(element('section', { className: 'section', attrs: { 'aria-labelledby': headingId } }, [panel]), instance, context);
  }

  function projectStatusLabel(value) {
    return {
      idea: "Idea",
      active: 'aktiv',
      paused: 'pausiert',
      completed: "completed"
    }[value] || value || "Status not specified";
  }

  function projectGrid(instance, bindings, context) {
    const props = instance.props;
    const { head, headingId } = headingBlock(instance, props);
    const grid = element('div', { className: 'grid two' });
    if (!bindings.projects.length) {
      grid.append(element('p', {
        className: 'empty-state',
        text: "No project has been publicly released for this profile yet."
      }));
    }
    bindings.projects.forEach((project, index) => {
      const card = element('article', { className: 'card gdm-project-card' });
      card.style.setProperty('--gdm-index', String(index));
      card.append(element('span', { className: 'id-chip', text: project.id }));
      card.append(element('h3', { text: project.title }));
      if (project.summary) card.append(element('p', { text: project.summary }));
      if (project.role_summary) {
        card.append(element('p', { className: 'gdm-card-boundary', text: `My role: ${project.role_summary}` }));
      }
      card.append(element('span', { className: 'tag', text: projectStatusLabel(project.lifecycle_status) }));
      grid.append(card);
    });
    return decorate(element('section', { className: 'section', attrs: { 'aria-labelledby': headingId } }, [head, grid]), instance, context);
  }

  function linkCards(instance, bindings, context) {
    const props = instance.props;
    const { head, headingId } = headingBlock(instance, props);
    const grid = element('div', { className: 'grid two' });
    (props.items || []).forEach((item, index) => {
      const tone = TONES.has(item.tone) ? item.tone : 'neutral';
      const card = element('a', {
        className: `card gdm-link-card ${tone === 'neutral' ? '' : tone}`.trim(),
        attrs: { href: safeInternalHref(item.href) }
      });
      card.style.setProperty('--gdm-index', String(index));
      card.addEventListener('click', () => context.emit('navigation:open', { href: safeInternalHref(item.href) }));
      card.append(element('span', { className: 'icon', text: item.icon || '→', attrs: { 'aria-hidden': 'true' } }));
      card.append(element('h3', { text: item.title }));
      card.append(element('p', { text: item.description }));
      card.append(element('span', { className: 'arrow', text: item.label || "Open →" }));
      grid.append(card);
    });
    return decorate(element('section', { className: 'section', attrs: { 'aria-labelledby': headingId } }, [head, grid]), instance, context);
  }

  function storyBlock(instance, bindings, context) {
    const { head, headingId } = headingBlock(instance, instance.props);
    const body = element('div', { className: 'gdm-story-text' });
    String(instance.props.text || '').split(/\n\s*\n/).filter(text => text.trim()).forEach(text => body.append(element('p', { text })));
    return decorate(element('section', { className: 'section panel gdm-story', attrs: { 'aria-labelledby': headingId } }, [head, body]), instance, context);
  }

  function imageBlock(instance, bindings, context) {
    const props = instance.props;
    const { head, headingId } = headingBlock(instance, props);
    const figure = element('figure', { className: `gdm-image-figure gdm-image-${props.format || 'original'}` });
    if (props.image) figure.append(element('img', { attrs: { src: memberDesign.safeImageSource(props.image), alt: props.alt || '', loading: 'lazy', decoding: 'async' } }));
    else figure.append(element('div', { className: 'gdm-image-placeholder', text: "There is room for your image here." }));
    if (props.caption) figure.append(element('figcaption', { text: props.caption }));
    return decorate(element('section', { className: 'section gdm-image-block', attrs: { 'aria-labelledby': headingId } }, [head, figure]), instance, context);
  }

  const renderers = { profileHero, skillGrid, evidenceGrid, projectGrid, linkCards, storyBlock, imageBlock };

  function applyTheme(node, theme, canAnimate) {
    Object.entries(theme.tokens || {}).forEach(([name, value]) => {
      const token = THEME_TOKENS[name];
      if (token && token.pattern.test(value)) node.style.setProperty(token.property, value);
    });
    node.dataset.theme = theme.preset;
    node.dataset.motion = canAnimate ? theme.motion : 'none';
  }

  function createEventEnvelope(page, instance, manifest, type, payload) {
    requireCondition(manifest.capabilities.emits.includes(type), `${instance.id}: event ${type} is not declared.`);
    return {
      schema_version: SCHEMA_VERSION,
      type,
      source: {
        page_id: page.id,
        module_id: instance.id,
        module_type: instance.type,
        module_version: instance.version
      },
      payload: isRecord(payload) ? payload : {}
    };
  }

  function renderPage(page, catalog, resolvedBindings) {
    const grants = new Set(page.capability_context.module_permission_grants);
    const manifests = moduleIndex(catalog);
    const container = element('div', { className: 'gdm-page' });
    applyTheme(container, page.theme, grants.has('module:ui.motion.decorative'));
    const context = { page, can: capability => grants.has(capability) };

    page.regions.forEach(region => {
      const regionNode = element('div', { className: `gdm-region gdm-layout-${region.layout}`, attrs: { 'data-region-id': region.id } });
      region.modules.forEach((instance, index) => {
        const manifest = manifests.get(`${instance.type}@${instance.version}`);
        const renderer = renderers[manifest.renderer];
        requireCondition(renderer, `${instance.type}: renderer ${manifest.renderer} is unavailable.`);
        const moduleBindings = {};
        Object.entries(instance.bindings).forEach(([inputName, bindingName]) => {
          moduleBindings[inputName] = resolvedBindings[bindingName];
        });
        manifest.data_inputs.forEach(input => {
          const value = moduleBindings[input.name];
          if (input.required) requireCondition(value !== null && value !== undefined, `${instance.id}: ${input.name} fehlt.`);
          if (value !== null && value !== undefined && input.cardinality === 'many') requireCondition(Array.isArray(value), `${instance.id}: ${input.name} must be a list.`);
          if (value !== null && value !== undefined && input.cardinality === 'one') requireCondition(isRecord(value), `${instance.id}: ${input.name} must be an entity.`);
        });
        const moduleContext = {
          ...context,
          emit(type, payload) {
            const detail = createEventEnvelope(page, instance, manifest, type, payload);
            if (typeof window !== 'undefined' && typeof window.dispatchEvent === 'function' && typeof CustomEvent === 'function') {
              window.dispatchEvent(new CustomEvent(`gemden:${type}`, { detail }));
            }
            return detail;
          }
        };
        const moduleNode = renderer(instance, moduleBindings, moduleContext);
        moduleNode.style.setProperty('--gdm-module-index', String(index));
        regionNode.append(moduleNode);
        queueMicrotask(() => moduleContext.emit('page:module-ready', { region_id: region.id }));
      });
      container.append(regionNode);
    });
    return container;
  }

  async function mount(rootNode, options) {
    requireCondition(rootNode && rootNode.dataset, "Mount target is missing.");
    const fetchImplementation = options?.fetch || (typeof fetch === 'function' ? fetch.bind(globalThis) : null);
    requireCondition(fetchImplementation, "Fetch is unavailable.");
    const pageUrl = new URL(rootNode.dataset.pageDocument, document.baseURI);
    const moduleUrl = new URL(rootNode.dataset.moduleCatalog, document.baseURI);
    const capabilityUrl = new URL(rootNode.dataset.capabilityCatalog, document.baseURI);
    requireCondition(pageUrl.origin === window.location.origin, "External page document blocked.");
    requireCondition(moduleUrl.origin === window.location.origin, "External module catalogue blocked.");
    requireCondition(capabilityUrl.origin === window.location.origin, "External capability catalogue blocked.");

    rootNode.dataset.gemdenRenderState = 'loading';
    try {
      const [page, moduleCatalog, capabilityCatalog] = await Promise.all([
        fetchJson(pageUrl, fetchImplementation),
        fetchJson(moduleUrl, fetchImplementation),
        fetchJson(capabilityUrl, fetchImplementation)
      ]);
      validateCapabilityCatalog(capabilityCatalog);
      validateModuleCatalog(moduleCatalog, capabilityCatalog);
      validatePageDocument(page, moduleCatalog, capabilityCatalog);
      const sources = await loadDataSources(page, pageUrl, fetchImplementation);
      const bindings = resolveBindings(page.bindings, sources, page.data_sources);
      const rendered = renderPage(page, moduleCatalog, bindings);
      rootNode.replaceChildren(rendered);
      rootNode.dataset.gemdenRenderState = 'ready';
      rootNode.dataset.pageId = page.id;
      window.dispatchEvent(new CustomEvent('gemden:page-ready', {
        detail: { pageId: page.id, subject: page.subject, moduleCount: page.regions.reduce((sum, region) => sum + region.modules.length, 0) }
      }));
      return { page, moduleCatalog, capabilityCatalog, bindings };
    } catch (error) {
      rootNode.dataset.gemdenRenderState = 'fallback';
      console.warn("GemDen module renderer is using the static fallback:", error);
      window.dispatchEvent(new CustomEvent('gemden:page-fallback', { detail: { message: error.message } }));
      return null;
    }
  }

  function autoMount() {
    if (typeof document === 'undefined') return;
    document.querySelectorAll('[data-gemden-page-root]').forEach(node => {
      if (node.dataset.gemdenManualMount === 'true') return;
      mount(node);
    });
  }

  if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', autoMount, { once: true });
    else autoMount();
  }

  return {
    SCHEMA_VERSION,
    validateCapabilityCatalog,
    validateModuleCatalog,
    validatePageDocument,
    resolveBindings,
    loadDataSources,
    createEventEnvelope,
    renderPage,
    mount
  };
});
