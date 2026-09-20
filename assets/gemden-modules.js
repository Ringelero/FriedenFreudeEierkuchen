(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  if (root) root.GemDenModules = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

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
    requireCondition(isRecord(catalog), 'Capability-Katalog fehlt oder ist ungültig.');
    requireCondition(catalog.schema_version === SCHEMA_VERSION, `Capability-Schema ${SCHEMA_VERSION} wird benötigt.`);
    requireCondition(Array.isArray(catalog.namespaces) && catalog.namespaces.length >= 3, 'Capability-Namespaces fehlen.');
    requireCondition(Array.isArray(catalog.non_escalation_rules) && catalog.non_escalation_rules.length, 'Capability-Grenzregeln fehlen.');
    requireCondition(Array.isArray(catalog.capabilities), 'Technische Capabilities fehlen.');
    const ids = catalog.capabilities.map(item => item.id);
    requireCondition(ids.every(id => typeof id === 'string' && id.startsWith(MODULE_PERMISSION_PREFIX)), 'Technische Capabilities müssen mit module: beginnen.');
    requireCondition(unique(ids), 'Capability-IDs müssen eindeutig sein.');
    catalog.capabilities.forEach(item => {
      requireCondition(item.kind === 'module_permission', `${item.id}: falscher Capability-Typ.`);
      requireCondition(Number.isInteger(item.version) && item.version > 0, `${item.id}: ungültige Version.`);
    });
    return catalog;
  }

  function validateModuleCatalog(catalog, capabilities) {
    requireCondition(isRecord(catalog), 'Modulkatalog fehlt oder ist ungültig.');
    requireCondition(catalog.schema_version === SCHEMA_VERSION, `Modul-Schema ${SCHEMA_VERSION} wird benötigt.`);
    requireCondition(Array.isArray(catalog.modules) && catalog.modules.length, 'Modulkatalog ist leer.');
    const keys = catalog.modules.map(module => `${module.type}@${module.version}`);
    requireCondition(unique(keys), 'Modultyp und Version müssen im Katalog eindeutig sein.');
    const knownCapabilities = capabilities ? capabilityIndex(capabilities) : null;
    catalog.modules.forEach(module => {
      requireCondition(typeof module.type === 'string' && module.type.includes('.'), 'Ungültiger Modultyp.');
      requireCondition(Number.isInteger(module.version) && module.version > 0, `${module.type}: ungültige Version.`);
      requireCondition(Array.isArray(module.data_inputs), `${module.type}: data_inputs fehlen.`);
      requireCondition(unique(module.data_inputs.map(input => input.name)), `${module.type}: data_inputs müssen eindeutig sein.`);
      requireCondition(isRecord(module.capabilities), `${module.type}: Capability-Vertrag fehlt.`);
      ['requires', 'optional', 'emits'].forEach(field => requireCondition(Array.isArray(module.capabilities[field]), `${module.type}: capabilities.${field} fehlt.`));
      [...module.capabilities.requires, ...module.capabilities.optional].forEach(id => {
        requireCondition(id.startsWith(MODULE_PERMISSION_PREFIX), `${module.type}: ${id} ist keine Modulberechtigung.`);
        if (knownCapabilities) requireCondition(knownCapabilities.has(id), `${module.type}: unbekannte Capability ${id}.`);
      });
      requireCondition(isRecord(module.editor), `${module.type}: Editor-Vertrag fehlt.`);
      requireCondition(/^[a-z][a-z0-9-]*$/.test(module.editor.category || ''), `${module.type}: ungültige Editor-Kategorie.`);
      requireCondition(typeof module.editor.category_title === 'string' && module.editor.category_title, `${module.type}: Editor-Kategorietitel fehlt.`);
      requireCondition(isRecord(module.editor.default_props), `${module.type}: Editor-Standardwerte fehlen.`);
      requireCondition(isRecord(module.editor.default_appearance), `${module.type}: Editor-Standarddarstellung fehlt.`);
      requireCondition(TONES.has(module.editor.default_appearance.tone), `${module.type}: ungültiger Editor-Standardton.`);
      requireCondition(MOTIONS.has(module.editor.default_appearance.motion), `${module.type}: ungültige Editor-Standardanimation.`);
      requireCondition(Array.isArray(module.editor.fields), `${module.type}: Editor-Felder fehlen.`);
      requireCondition(unique(module.editor.fields.map(field => field.id)), `${module.type}: Editor-Feld-IDs müssen eindeutig sein.`);
      requireCondition(unique(module.editor.fields.map(field => field.target)), `${module.type}: Editor-Ziele müssen eindeutig sein.`);
      module.editor.fields.forEach(field => {
        requireCondition(/^[a-z][a-z0-9_]*$/.test(field.id || ''), `${module.type}: ungültige Editor-Feld-ID.`);
        requireCondition(/^(props|appearance)\.[a-z][a-z0-9_]*$/.test(field.target || ''), `${module.type}: unsicheres Editor-Ziel ${field.target}.`);
        requireCondition(['text', 'textarea', 'select', 'link-list'].includes(field.control), `${module.type}: unbekanntes Editor-Steuerelement.`);
        if (field.control === 'select') requireCondition(Array.isArray(field.options) && field.options.length, `${module.type}: Auswahloptionen fehlen.`);
      });
    });
    return catalog;
  }

  function validateBinding(name, binding, page, sourceMap) {
    requireCondition(isRecord(binding), `Binding ${name} ist ungültig.`);
    requireCondition(binding.kind === 'entity' || binding.kind === 'related', `Binding ${name} hat einen unbekannten Typ.`);
    const source = sourceMap.get(binding.source);
    requireCondition(source, `Binding ${name} verweist auf die unbekannte Quelle ${binding.source}.`);
    requireCondition(source.collections.includes(binding.collection), `Binding ${name} darf Collection ${binding.collection} nicht lesen.`);
    if (binding.kind === 'entity') {
      requireCondition(typeof binding.id === 'string' && binding.id, `Binding ${name} benötigt eine ID.`);
    } else {
      requireCondition(isRecord(binding.ids_from), `Binding ${name} benötigt ids_from.`);
      requireCondition(page.bindings[binding.ids_from.binding], `Binding ${name} verweist auf das unbekannte Binding ${binding.ids_from.binding}.`);
      requireCondition(typeof binding.ids_from.field === 'string' && binding.ids_from.field, `Binding ${name} benötigt ein Quellfeld.`);
    }
  }

  function validatePageDocument(page, modules, capabilities) {
    requireCondition(isRecord(page), 'Seitendokument fehlt oder ist ungültig.');
    requireCondition(page.schema_version === SCHEMA_VERSION, `Seitenschema ${SCHEMA_VERSION} wird benötigt.`);
    requireCondition(/^PAGE-[A-Z0-9-]+$/.test(page.id || ''), 'Die Seite benötigt eine stabile PAGE-ID.');
    requireCondition(isRecord(page.subject) && typeof page.subject.id === 'string', 'Seitensubjekt fehlt.');
    requireCondition(isRecord(page.capability_context), 'Capability-Kontext fehlt.');

    const humanSkills = page.capability_context.human_skill_refs || [];
    const aiOperations = page.capability_context.ai_operation_refs || [];
    const grants = page.capability_context.module_permission_grants || [];
    requireCondition(Array.isArray(humanSkills) && humanSkills.every(id => /^SKILL-[A-Z0-9-]+$/.test(id)), 'Human-Skill-Referenzen sind ungültig.');
    requireCondition(Array.isArray(aiOperations) && aiOperations.every(id => /^OP-[A-Z][0-9]{2}$/.test(id)), 'KI-Operationsprofile sind ungültig.');
    requireCondition(Array.isArray(grants) && grants.every(id => id.startsWith(MODULE_PERMISSION_PREFIX)), 'Modulfreigaben sind ungültig.');
    requireCondition(unique(humanSkills) && unique(aiOperations) && unique(grants), 'Capability-Referenzen müssen eindeutig sein.');

    const knownCapabilities = capabilityIndex(capabilities);
    grants.forEach(id => requireCondition(knownCapabilities.has(id), `Seitendokument gewährt unbekannte Capability ${id}.`));

    requireCondition(Array.isArray(page.data_sources), 'Datenquellen fehlen.');
    const sourceIds = page.data_sources.map(source => source.id);
    requireCondition(unique(sourceIds), 'Datenquellen-IDs müssen eindeutig sein.');
    const sourceMap = new Map(page.data_sources.map(source => [source.id, source]));
    page.data_sources.forEach(source => {
      requireCondition(source.type === 'json', `${source.id}: Nur JSON-Quellen sind in v1 erlaubt.`);
      requireCondition(source.classification === 'public', `${source.id}: Der öffentliche v1-Renderer lädt nur öffentliche Quellen.`);
      requireCondition(Array.isArray(source.collections) && source.collections.length, `${source.id}: erlaubte Collections fehlen.`);
      requireCondition(unique(source.collections), `${source.id}: Collections müssen eindeutig sein.`);
    });

    requireCondition(isRecord(page.bindings), 'Seitenbindings fehlen.');
    Object.entries(page.bindings).forEach(([name, binding]) => validateBinding(name, binding, page, sourceMap));

    requireCondition(isRecord(page.theme), 'Seitenthema fehlt.');
    requireCondition(['none', 'gentle', 'expressive'].includes(page.theme.motion), 'Unbekanntes Bewegungsprofil.');
    requireCondition(isRecord(page.theme.tokens), 'Theme-Tokens fehlen.');
    Object.entries(page.theme.tokens).forEach(([name, value]) => {
      requireCondition(THEME_TOKENS[name] && THEME_TOKENS[name].pattern.test(value), `Unsicherer oder unbekannter Theme-Token ${name}.`);
    });

    requireCondition(Array.isArray(page.regions) && page.regions.length, 'Die Seite benötigt mindestens eine Region.');
    const manifests = moduleIndex(modules);
    const instanceIds = [];
    page.regions.forEach(region => {
      requireCondition(Array.isArray(region.modules), `Region ${region.id} hat keine Module.`);
      region.modules.forEach(instance => {
        instanceIds.push(instance.id);
        const manifest = manifests.get(`${instance.type}@${instance.version}`);
        requireCondition(manifest, `Modul ${instance.type}@${instance.version} ist nicht registriert.`);
        requireCondition(isRecord(instance.bindings), `${instance.id}: Bindings fehlen.`);
        requireCondition(isRecord(instance.props), `${instance.id}: Props fehlen.`);
        requireCondition(isRecord(instance.appearance), `${instance.id}: Appearance fehlt.`);
        requireCondition(TONES.has(instance.appearance.tone), `${instance.id}: unbekannter Ton.`);
        requireCondition(MOTIONS.has(instance.appearance.motion), `${instance.id}: unbekannte Animation.`);
        const inputNames = new Set(manifest.data_inputs.map(input => input.name));
        Object.keys(instance.bindings).forEach(inputName => requireCondition(inputNames.has(inputName), `${instance.id}: unbekannter Moduleingang ${inputName}.`));
        manifest.data_inputs.forEach(input => {
          const bindingName = instance.bindings[input.name];
          if (input.required) requireCondition(typeof bindingName === 'string', `${instance.id}: Pflichtbinding ${input.name} fehlt.`);
          if (bindingName) requireCondition(page.bindings[bindingName], `${instance.id}: Binding ${bindingName} ist nicht definiert.`);
        });
        manifest.capabilities.requires.forEach(id => requireCondition(grants.includes(id), `${instance.id}: benötigte Capability ${id} wurde nicht gewährt.`));
      });
    });
    requireCondition(unique(instanceIds), 'Modulinstanz-IDs müssen seitenweit eindeutig sein.');
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
      requireCondition(definitions[name], `Binding ${name} ist nicht definiert.`);
      requireCondition(!resolving.has(name), `Zyklisches Binding bei ${name}.`);
      resolving.add(name);
      const binding = definitions[name];
      const sourceDefinition = sourceMap.get(binding.source);
      requireCondition(sourceDefinition, `Datenquelle ${binding.source} fehlt.`);
      requireCondition(sourceDefinition.collections.includes(binding.collection), `Collection ${binding.collection} ist nicht freigegeben.`);
      const source = sourceDataFor(sources, binding.source);
      requireCondition(isRecord(source), `Datenquelle ${binding.source} wurde nicht geladen.`);
      const collection = source[binding.collection];
      requireCondition(Array.isArray(collection), `Collection ${binding.collection} ist keine Liste.`);

      if (binding.kind === 'entity') {
        resolved[name] = collection.find(item => item && item.id === binding.id) || null;
        requireCondition(resolved[name], `${binding.collection}:${binding.id} wurde nicht gefunden.`);
      } else {
        const owner = resolve(binding.ids_from.binding);
        requireCondition(isRecord(owner), `${name}: Quellbinding ist keine einzelne Entität.`);
        const ids = owner[binding.ids_from.field];
        requireCondition(Array.isArray(ids), `${name}: ${binding.ids_from.field} ist keine ID-Liste.`);
        const byId = new Map(collection.filter(Boolean).map(item => [item.id, item]));
        resolved[name] = ids.map(id => byId.get(id)).filter(Boolean);
        requireCondition(resolved[name].length === ids.length, `${name}: Nicht alle referenzierten Entitäten wurden gefunden.`);
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
      requireCondition(source.classification === 'public', `${source.id}: Nichtöffentliche Quelle im öffentlichen Renderer blockiert.`);
      const url = new URL(source.url, base);
      requireCondition(url.origin === base.origin, `${source.id}: Externe Datenquelle blockiert.`);
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
    requireCondition(typeof href === 'string' && href, 'Linkziel fehlt.');
    const url = new URL(href, document.baseURI);
    requireCondition(['http:', 'https:'].includes(url.protocol), 'Unsicheres Linkprotokoll blockiert.');
    requireCondition(url.origin === window.location.origin, 'Externer Link im internen Navigationsmodul blockiert.');
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
    const breadcrumb = element('nav', { className: 'breadcrumb', attrs: { 'aria-label': 'Brotkrumen' } });
    (props.breadcrumb || []).forEach(item => {
      if (item.href) breadcrumb.append(element('a', { text: item.label, attrs: { href: safeInternalHref(item.href) } }));
      else breadcrumb.append(element('span', { text: item.label }));
    });

    const copy = element('div');
    copy.append(element('p', { className: 'eyebrow', text: props.eyebrow || 'Mitglied' }));
    copy.append(element('h1', { className: 'display', text: member.name }));
    copy.append(element('p', { className: 'lead', text: member.bio }));
    const statuses = element('div', { className: 'status-row gdm-status-row' });
    statuses.append(element('span', { className: 'id-chip', text: member.id }));
    if (dynasty) {
      statuses.append(element('a', {
        className: 'status-chip',
        text: dynasty.id,
        attrs: { href: safeInternalHref(dynasty.public_path) }
      }));
    }
    copy.append(statuses);

    const visual = element('div', { className: 'gdm-profile-visual', attrs: { 'aria-label': props.visual_label || 'Profilmotiv' } });
    if (props.visual === 'ruby-gem') visual.append(element('div', { className: 'gdm-gem' }));
    const grid = element('div', { className: 'grid two gdm-profile-grid' }, [copy, visual]);
    return decorate(element('header', { className: 'hero compact' }, [breadcrumb, grid]), instance, context);
  }

  function skillGrid(instance, bindings, context) {
    const props = instance.props;
    const { head, headingId } = headingBlock(instance, props);
    const grid = element('div', { className: 'grid three' });
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
    const labels = { 'self-reported': 'selbst berichtet', verified: 'verifiziert', external: 'extern belegt' };
    return labels[value] || value || 'Status offen';
  }

  function evidenceGrid(instance, bindings, context) {
    const props = instance.props;
    const headingId = `${instance.id}-title`;
    const panel = element('div', { className: 'panel' });
    panel.append(element('p', { className: 'eyebrow', text: props.eyebrow }));
    panel.append(element('h2', { text: props.title, attrs: { id: headingId } }));
    const grid = element('div', { className: 'grid two' });
    bindings.evidence.forEach((evidence, index) => {
      const card = element('article', { className: 'card gdm-evidence-card' });
      card.style.setProperty('--gdm-index', String(index));
      card.append(element('span', { className: 'id-chip', text: evidence.id }));
      card.append(element('h3', { text: evidence.title }));
      card.append(element('p', { text: evidence.description }));
      card.append(element('span', { className: 'tag', text: evidenceLabel(evidence.verification) }));
      grid.append(card);
    });
    panel.append(grid);
    if (props.boundary) {
      const notice = element('div', { className: 'notice gdm-boundary' });
      notice.append(element('strong', { text: 'Grenze: ' }));
      notice.append(document.createTextNode(props.boundary));
      panel.append(notice);
    }
    return decorate(element('section', { className: 'section', attrs: { 'aria-labelledby': headingId } }, [panel]), instance, context);
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
      card.append(element('span', { className: 'arrow', text: item.label || 'Öffnen →' }));
      grid.append(card);
    });
    return decorate(element('section', { className: 'section', attrs: { 'aria-labelledby': headingId } }, [head, grid]), instance, context);
  }

  const renderers = { profileHero, skillGrid, evidenceGrid, linkCards };

  function applyTheme(node, theme, canAnimate) {
    Object.entries(theme.tokens || {}).forEach(([name, value]) => {
      const token = THEME_TOKENS[name];
      if (token && token.pattern.test(value)) node.style.setProperty(token.property, value);
    });
    node.dataset.theme = theme.preset;
    node.dataset.motion = canAnimate ? theme.motion : 'none';
  }

  function createEventEnvelope(page, instance, manifest, type, payload) {
    requireCondition(manifest.capabilities.emits.includes(type), `${instance.id}: Ereignis ${type} ist nicht deklariert.`);
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
        requireCondition(renderer, `${instance.type}: Renderer ${manifest.renderer} ist nicht verfügbar.`);
        const moduleBindings = {};
        Object.entries(instance.bindings).forEach(([inputName, bindingName]) => {
          moduleBindings[inputName] = resolvedBindings[bindingName];
        });
        manifest.data_inputs.forEach(input => {
          const value = moduleBindings[input.name];
          if (input.required) requireCondition(value !== null && value !== undefined, `${instance.id}: ${input.name} fehlt.`);
          if (value !== null && value !== undefined && input.cardinality === 'many') requireCondition(Array.isArray(value), `${instance.id}: ${input.name} muss eine Liste sein.`);
          if (value !== null && value !== undefined && input.cardinality === 'one') requireCondition(isRecord(value), `${instance.id}: ${input.name} muss eine Entität sein.`);
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
    requireCondition(rootNode && rootNode.dataset, 'Mount-Ziel fehlt.');
    const fetchImplementation = options?.fetch || (typeof fetch === 'function' ? fetch.bind(globalThis) : null);
    requireCondition(fetchImplementation, 'Fetch ist nicht verfügbar.');
    const pageUrl = new URL(rootNode.dataset.pageDocument, document.baseURI);
    const moduleUrl = new URL(rootNode.dataset.moduleCatalog, document.baseURI);
    const capabilityUrl = new URL(rootNode.dataset.capabilityCatalog, document.baseURI);
    requireCondition(pageUrl.origin === window.location.origin, 'Externes Seitendokument blockiert.');
    requireCondition(moduleUrl.origin === window.location.origin, 'Externer Modulkatalog blockiert.');
    requireCondition(capabilityUrl.origin === window.location.origin, 'Externer Capability-Katalog blockiert.');

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
      console.warn('GemDen-Modulrenderer nutzt den statischen Rückfallweg:', error);
      window.dispatchEvent(new CustomEvent('gemden:page-fallback', { detail: { message: error.message } }));
      return null;
    }
  }

  function autoMount() {
    if (typeof document === 'undefined') return;
    document.querySelectorAll('[data-gemden-page-root]').forEach(node => mount(node));
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
