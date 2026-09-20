const PAGE_ID_PATTERN = /^PAGE-[A-Z0-9-]+$/;
const INSTANCE_ID_PATTERN = /^[a-z][a-z0-9-]*$/;
const HEX_PATTERN = /^#[0-9a-f]{6}$/i;
const RADIUS_PATTERN = /^\d{1,2}px$/;
const ALLOWED_THEME_MOTIONS = new Set(['none', 'gentle', 'expressive']);

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function moduleKey(type, version) {
  return `${type}@${version}`;
}

function getAtTarget(instance, target) {
  const [group, key] = target.split('.');
  return instance[group]?.[key];
}

function setAtTarget(instance, target, value) {
  const [group, key] = target.split('.');
  assert(group === 'props' || group === 'appearance', `Unzulässiges Editor-Ziel ${target}.`);
  instance[group][key] = clone(value);
}

function manifestMap(catalog) {
  return new Map(catalog.modules.map(manifest => [moduleKey(manifest.type, manifest.version), manifest]));
}

function firstInstancesByType(page) {
  const result = new Map();
  page.regions.flatMap(region => region.modules).forEach(instance => {
    const key = moduleKey(instance.type, instance.version);
    if (!result.has(key)) result.set(key, instance);
  });
  return result;
}

function normalizeInstanceId(type, proposedId, usedIds) {
  const raw = String(proposedId || type)
    .toLowerCase()
    .replace(/[^a-z0-9-]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(-54);
  const base = INSTANCE_ID_PATTERN.test(raw) ? raw : `module-${raw || 'block'}`;
  let candidate = base;
  let suffix = 2;
  while (usedIds.has(candidate)) {
    candidate = `${base.slice(0, 55)}-${suffix}`;
    suffix += 1;
  }
  usedIds.add(candidate);
  return candidate;
}

function buildBindings(manifest, page) {
  const bindings = {};
  manifest.data_inputs.forEach(input => {
    if (page.bindings[input.name]) bindings[input.name] = input.name;
    else if (input.required) throw new Error(`${manifest.title}: Für ${input.name} fehlt ein Seitenbinding.`);
  });
  return bindings;
}

function ensureCapabilities(manifest, page) {
  const grants = new Set(page.capability_context.module_permission_grants);
  manifest.capabilities.requires.forEach(capability => {
    assert(grants.has(capability), `${manifest.title}: Die Seite gewährt ${capability} nicht.`);
  });
}

function validateInternalLinks(instance) {
  const items = instance.props.items;
  if (!Array.isArray(items)) return;
  items.forEach((item, index) => {
    assert(item && typeof item === 'object' && !Array.isArray(item), `${instance.id}: Wegkarte ${index + 1} ist ungültig.`);
    assert(typeof item.href === 'string' && item.href.startsWith('/'), `${instance.id}: Wegkarten dürfen nur interne Pfade verwenden.`);
    const url = new URL(item.href, 'https://gemden.red');
    assert(url.origin === 'https://gemden.red' && ['http:', 'https:'].includes(url.protocol), `${instance.id}: Unsicheres Linkziel blockiert.`);
  });
}

function validateTheme(theme) {
  assert(HEX_PATTERN.test(theme.tokens.accent), 'Die Akzentfarbe ist ungültig.');
  assert(HEX_PATTERN.test(theme.tokens.accent_deep), 'Die dunkle Akzentfarbe ist ungültig.');
  assert(HEX_PATTERN.test(theme.tokens.surface), 'Die Flächenfarbe ist ungültig.');
  assert(RADIUS_PATTERN.test(theme.tokens.radius), 'Der Eckenradius ist ungültig.');
  assert(ALLOWED_THEME_MOTIONS.has(theme.motion), 'Das Bewegungsprofil ist ungültig.');
}

export function toPuckData(page, catalog) {
  assert(page && PAGE_ID_PATTERN.test(page.id || ''), 'Das GemDen-Seitendokument ist ungültig.');
  assert(Array.isArray(page.regions) && page.regions.length === 1, 'Der Piloteditor unterstützt genau eine Seitenregion.');
  const manifests = manifestMap(catalog);
  const content = page.regions[0].modules.map(instance => {
    const manifest = manifests.get(moduleKey(instance.type, instance.version));
    assert(manifest?.editor, `${instance.type}@${instance.version} besitzt keinen Editor-Vertrag.`);
    const props = { id: instance.id };
    manifest.editor.fields.forEach(field => {
      props[field.id] = clone(getAtTarget(instance, field.target));
    });
    return { type: moduleKey(instance.type, instance.version), props };
  });

  return {
    content,
    root: {
      props: {
        accent: page.theme.tokens.accent,
        accent_deep: page.theme.tokens.accent_deep,
        surface: page.theme.tokens.surface,
        radius: page.theme.tokens.radius,
        motion: page.theme.motion
      }
    }
  };
}

export function fromPuckData(puckData, originalPage, catalog) {
  assert(puckData && Array.isArray(puckData.content), 'Der Editor-Entwurf ist ungültig.');
  const page = clone(originalPage);
  assert(page.regions.length === 1, 'Der Piloteditor unterstützt genau eine Seitenregion.');
  const manifests = manifestMap(catalog);
  const originals = new Map(page.regions[0].modules.map(instance => [instance.id, instance]));
  const firstByType = firstInstancesByType(page);
  const usedIds = new Set();

  page.regions[0].modules = puckData.content.map(component => {
    const manifest = manifests.get(component.type);
    assert(manifest, `Nicht registrierter Editor-Baustein ${component.type}.`);
    ensureCapabilities(manifest, page);

    const original = originals.get(component.props?.id);
    const sameTypeOriginal = original && original.type === manifest.type && original.version === manifest.version
      ? original
      : null;
    const blueprint = sameTypeOriginal || firstByType.get(moduleKey(manifest.type, manifest.version));
    const instance = blueprint
      ? clone(blueprint)
      : {
          id: '',
          type: manifest.type,
          version: manifest.version,
          bindings: buildBindings(manifest, page),
          props: clone(manifest.editor.default_props),
          appearance: clone(manifest.editor.default_appearance)
        };

    instance.id = normalizeInstanceId(manifest.type, component.props?.id, usedIds);
    instance.type = manifest.type;
    instance.version = manifest.version;
    if (!sameTypeOriginal) instance.bindings = buildBindings(manifest, page);
    manifest.editor.fields.forEach(field => {
      if (component.props && component.props[field.id] !== undefined) {
        setAtTarget(instance, field.target, component.props[field.id]);
      }
    });
    validateInternalLinks(instance);
    return instance;
  });

  const root = puckData.root?.props || puckData.root || {};
  page.theme.tokens.accent = root.accent ?? page.theme.tokens.accent;
  page.theme.tokens.accent_deep = root.accent_deep ?? page.theme.tokens.accent_deep;
  page.theme.tokens.surface = root.surface ?? page.theme.tokens.surface;
  page.theme.tokens.radius = root.radius ?? page.theme.tokens.radius;
  page.theme.motion = root.motion ?? page.theme.motion;
  validateTheme(page.theme);
  return page;
}

export function editorStorageKey(pageId) {
  assert(PAGE_ID_PATTERN.test(pageId || ''), 'Ungültige PAGE-ID für den lokalen Entwurf.');
  return `gemden:page-draft:v1:${pageId}`;
}

export function createLocalDraft(document, savedAt = new Date().toISOString()) {
  assert(document && PAGE_ID_PATTERN.test(document.id || ''), 'Ungültiges Seitendokument für den lokalen Entwurf.');
  return {
    format: 'gemden-local-draft',
    version: 1,
    page_id: document.id,
    saved_at: savedAt,
    document: clone(document)
  };
}
