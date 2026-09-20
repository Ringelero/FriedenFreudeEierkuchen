const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const runtime = require('../assets/gemden-modules.js');

const root = path.resolve(__dirname, '..');
const readJson = relativePath => JSON.parse(fs.readFileSync(path.join(root, relativePath), 'utf8'));
const clone = value => JSON.parse(JSON.stringify(value));

const capabilities = readJson('assets/data/capabilities.v1.json');
const modules = readJson('assets/data/modules.v1.json');
const page = readJson('assets/data/pages/julius.v1.json');
const community = readJson('assets/data/community-v0.1.json');

test('Capability-, Modul- und Seitenverträge bilden eine gültige Kette', () => {
  assert.equal(runtime.validateCapabilityCatalog(capabilities), capabilities);
  assert.equal(runtime.validateModuleCatalog(modules, capabilities), modules);
  assert.equal(runtime.validatePageDocument(page, modules, capabilities), page);
});

test('Julius-Bindings lösen Entität, Skills und Evidenz ohne Duplikatdaten auf', () => {
  const bindings = runtime.resolveBindings(page.bindings, { community }, page.data_sources);
  assert.equal(bindings.member.id, 'MEM-JULIUS');
  assert.equal(bindings.dynasty.id, 'DYN-RUBYBUBYS');
  assert.deepEqual(bindings.skills.map(item => item.id), page.capability_context.human_skill_refs);
  assert.deepEqual(bindings.evidence.map(item => item.id), bindings.member.evidence_ids);
});

test('Ein Modul ohne ausdrücklich gewährte Pflicht-Capability wird abgewiesen', () => {
  const unsafePage = clone(page);
  unsafePage.capability_context.module_permission_grants = unsafePage.capability_context.module_permission_grants.filter(
    id => id !== 'module:data.public.community.read'
  );
  assert.throws(
    () => runtime.validatePageDocument(unsafePage, modules, capabilities),
    /benötigte Capability module:data\.public\.community\.read wurde nicht gewährt/
  );
});

test('Human Skills können nicht als technische Modulrechte eingeschleust werden', () => {
  const unsafePage = clone(page);
  unsafePage.capability_context.module_permission_grants.push('SKILL-SMART-HOME');
  assert.throws(
    () => runtime.validatePageDocument(unsafePage, modules, capabilities),
    /Modulfreigaben sind ungültig/
  );
});

test('Nicht freigegebene Daten-Collections werden abgewiesen', () => {
  const unsafePage = clone(page);
  unsafePage.bindings.member.collection = 'private_profiles';
  assert.throws(
    () => runtime.validatePageDocument(unsafePage, modules, capabilities),
    /darf Collection private_profiles nicht lesen/
  );
});

test('Unbekannte Theme-Tokens und freie CSS-Werte werden nicht akzeptiert', () => {
  const unsafePage = clone(page);
  unsafePage.theme.tokens.custom_css = 'body { display: none }';
  assert.throws(
    () => runtime.validatePageDocument(unsafePage, modules, capabilities),
    /Unsicherer oder unbekannter Theme-Token custom_css/
  );
});

test('Alle lokalen JSON-Quellen des Seitendokuments existieren', () => {
  const pagePath = path.join(root, 'assets/data/pages/julius.v1.json');
  page.data_sources.forEach(source => {
    const resolved = path.resolve(path.dirname(pagePath), source.url);
    assert.equal(fs.existsSync(resolved), true, `${source.id}: ${resolved}`);
  });
});

test('Julius behält einen statischen No-JS-Rückfallweg', () => {
  const html = fs.readFileSync(path.join(root, 'community/mitglieder/julius/index.html'), 'utf8');
  assert.match(html, /data-gemden-page-root/);
  assert.match(html, /assets\/gemden-modules\.js/);
  assert.match(html, /<h1 class="display">Julius<\/h1>/);
  assert.match(html, /SKILL-SMART-HOME/);
});

test('Der Browser-Renderer erzeugt alle vier Pilotmodule ohne HTML-Strings', () => {
  class FakeNode {
    constructor(tagName, textContent = '') {
      this.tagName = tagName;
      this.textContent = textContent;
      this.className = '';
      this.children = [];
      this.dataset = {};
      this.attributes = {};
      this.style = { values: {}, setProperty: (name, value) => { this.style.values[name] = value; } };
      this.classList = {
        add: (...names) => {
          const current = new Set(this.className.split(/\s+/).filter(Boolean));
          names.forEach(name => current.add(name));
          this.className = [...current].join(' ');
        }
      };
    }
    append(...nodes) { this.children.push(...nodes); }
    setAttribute(name, value) { this.attributes[name] = value; }
    addEventListener() {}
  }

  global.document = {
    baseURI: 'https://gemden.red/community/mitglieder/julius/',
    createElement: tagName => new FakeNode(tagName),
    createTextNode: text => new FakeNode('#text', text)
  };
  global.window = { location: { origin: 'https://gemden.red' } };

  try {
    const bindings = runtime.resolveBindings(page.bindings, { community }, page.data_sources);
    const tree = runtime.renderPage(page, modules, bindings);
    const all = [];
    const visit = node => {
      all.push(node);
      node.children.forEach(visit);
    };
    visit(tree);
    const moduleNodes = all.filter(node => node.dataset.moduleId);
    assert.deepEqual(moduleNodes.map(node => node.dataset.moduleId), [
      'julius-hero',
      'julius-skills',
      'julius-evidence',
      'julius-paths'
    ]);
    assert.equal(all.filter(node => node.className.includes('gdm-skill-card')).length, 5);
    assert.equal(all.filter(node => node.className.includes('gdm-evidence-card')).length, 2);
    assert.equal(all.some(node => node.tagName === 'h1' && node.textContent === 'Julius'), true);
  } finally {
    delete global.document;
    delete global.window;
  }
});

test('Modulereignisse sind versioniert und auf deklarierte Typen begrenzt', () => {
  const instance = page.regions[0].modules[3];
  const manifest = modules.modules.find(item => item.type === instance.type && item.version === instance.version);
  const event = runtime.createEventEnvelope(page, instance, manifest, 'navigation:open', { href: '/leistungen/' });
  assert.deepEqual(event.source, {
    page_id: 'PAGE-MEM-JULIUS',
    module_id: 'julius-paths',
    module_type: 'gemden.link-cards',
    module_version: 1
  });
  assert.equal(event.schema_version, '1.0.0');
  assert.throws(
    () => runtime.createEventEnvelope(page, instance, manifest, 'profile:delete', {}),
    /Ereignis profile:delete ist nicht deklariert/
  );
});
