const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const api = require('../assets/services.js');
const root = path.resolve(__dirname, '..');
const catalog = JSON.parse(fs.readFileSync(path.join(root, 'assets/data/services.v1.json'), 'utf8'));
const community = JSON.parse(fs.readFileSync(path.join(root, 'assets/data/community-v0.1.json'), 'utf8'));
const clone = value => JSON.parse(JSON.stringify(value));

test('homeless support is one Rubybubys service with four prepared entrances across all entry points and languages', () => {
  const service = catalog.services.find(item => item.id === 'SERVICE-RUBYBUBYS-OBDACHLOSENHILFE');
  assert.ok(service);
  assert.deepEqual(service.provider_ids, ['DYN-RUBYBUBYS']);
  assert.deepEqual(service.category_ids, ['SOCIAL']);
  assert.equal(api.availabilityLabel(service), 'In Vorbereitung');
  assert.equal(service.availability, undefined);
  for (const language of ['', 'en/']) {
    const localized = JSON.parse(fs.readFileSync(path.join(root, language, 'assets/data/services.v1.json'), 'utf8')).services.find(item => item.id === service.id);
    assert.equal(localized.public_path, service.public_path);
    for (const page of ['leistungen/index.html', 'community/index.html', 'community/dynastien/rubybubys/index.html']) {
      const html = fs.readFileSync(path.join(root, language, page), 'utf8');
      assert.ok(html.includes(`data-service-id="${service.id}"`));
      const links = [...html.matchAll(/href="([^"]+)"/g)].map(match => new URL(match[1], `https://gemden.red/${language}${page}`).pathname);
      assert.ok(links.includes('/' + language + service.public_path.slice(1)), `${language}${page}: fallback link missing`);
    }
    const page = fs.readFileSync(path.join(root, language, service.public_path, 'index.html'), 'utf8');
    assert.equal((page.match(/<details\b/g) || []).length, 4);
    assert.match(page, language ? /Ideas collection/ : /Ideensammlung/);
    assert.match(page, language ? /not yet been implemented/ : /noch nicht umgesetzt/);
  }
});
test('availability distinguishes usable tools from a growing network and respects pauses',()=>{
 const service=clone(catalog.services[0]);assert.equal(api.availabilityLabel(service),'Teilweise nutzbar');
 service.status='paused';assert.equal(api.availabilityLabel(service),'Pausiert');
 delete service.availability;service.status='building';assert.equal(api.availabilityLabel(service),'In Vorbereitung');
 const invalid=clone(catalog);invalid.services[0].availability.usable='';assert.throws(()=>api.validateCatalog(invalid,community));
});

test('a shared service retains its identity across topic and community views', () => {
  const fixture = clone(catalog);
  fixture.services[0].provider_ids.push('KIEZ-P-HAIN');
  api.validateCatalog(fixture, community);
  const topic = api.selectServices(fixture, { categoryId: 'SOCIAL' });
  const dynasty = api.selectServices(fixture, { providerId: 'DYN-RUBYBUBYS' });
  const kiez = api.selectServices(fixture, { providerId: 'KIEZ-P-HAIN' });
  assert.equal(topic.length, fixture.services.length);
  assert.equal(topic[0], dynasty[0]);
  assert.equal(topic[0], kiez[0]);
  assert.equal(api.selectServices(fixture, { categoryId: 'UNKNOWN' }).length, 0);
  assert.equal(api.selectServices(fixture, { providerId: 'UNKNOWN' }).length, 0);
});

test('a service does not appear as another community offer and archived records disappear', () => {
  assert.equal(api.selectServices(catalog, { providerId: 'KIEZ-P-HAIN' }).length, 0);
  assert.equal(api.selectServices(catalog, { providerId: 'DYN-RUBYBUBYS', categoryId: 'SOCIAL' }).length, catalog.services.length);
  const archived = clone(catalog);
  archived.services[0].status = 'archived';
  assert.equal(api.selectServices(archived).some(service => service.id === archived.services[0].id), false);
});

test('unresolved providers, categories and duplicate records are rejected', () => {
  for (const mutate of [
    item => { item.services[0].provider_ids = ['DYN-UNKNOWN']; },
    item => { item.services[0].category_ids = ['UNKNOWN']; },
    item => { item.services.push(clone(item.services[0])); },
    item => { item.services[0].provider_ids.push(item.services[0].provider_ids[0]); }
  ]) {
    const invalid = clone(catalog);
    mutate(invalid);
    assert.throws(() => api.validateCatalog(invalid, community));
  }
});

test('catalog destinations stay within real internal service and provider routes', () => {
  api.validateCatalog(catalog, community);
  for (const badPath of ['https://example.org/', '//example.org/', '/leistungen/../konto/', '/leistungen/%2e%2e/', 'javascript:alert(1)']) {
    const invalid = clone(catalog);
    invalid.services[0].public_path = badPath;
    assert.throws(() => api.validateCatalog(invalid, community));
    const invalidCommunity = clone(community);
    invalidCommunity.dynasties[0].public_path = badPath;
    assert.throws(() => api.validateCatalog(catalog, invalidCommunity));
  }
  catalog.services.forEach(service => assert.ok(fs.existsSync(path.join(root, service.public_path, 'index.html'))));
});

test('both HTML entry paths work independently of catalog loading and return to the provider', () => {
  const service = catalog.services[0];
  const route = service.public_path;
  const pages = ['leistungen/index.html', 'community/dynastien/rubybubys/index.html', 'community/index.html'];
  for (const page of pages) {
    const html = fs.readFileSync(path.join(root, page), 'utf8');
    assert.ok(html.includes(service.name));
    assert.ok(html.includes(`data-service-id="${service.id}"`));
    const links = [...html.matchAll(/href="([^"]+)"/g)].map(match => new URL(match[1], `https://gemden.red/${page}`).pathname);
    assert.ok(links.includes(route), `${page}: fallback link missing`);
  }
  const detail = fs.readFileSync(path.join(root, route, 'index.html'), 'utf8');
  assert.ok(detail.includes('../../community/dynastien/rubybubys/#leistungen'));
  assert.ok(detail.includes('../#soziales'));
  const heading = detail.match(/<h1>([\s\S]*?)<\/h1>/)[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  assert.equal(heading, service.name);
  ['treffen', 'lernen', 'unterstuetzen', 'orte'].forEach(id => assert.ok(detail.includes(`id="${id}"`)));
});

test('unavailable catalog data preserves the usable HTML fallback', async () => {
  let replaced = false;
  const document = { querySelectorAll: () => [{ replaceChildren: () => { replaced = true; } }] };
  for (const fetch of [async () => { throw new Error('offline'); }, async () => ({ ok: false })]) {
    await api.mount(document, fetch, new URL('https://gemden.red/assets/'));
    assert.equal(replaced, false);
  }
});

// A small DOM model lets us check the actual output and links without a browser session.
function catalogDocument(presentation, filters = {}) {
  class Element {
    constructor(tag) { this.tagName = tag; this.children = []; this.dataset = {}; this.attributes = {}; this.textContent = ''; }
    append(...nodes) { this.children.push(...nodes); }
    replaceChildren(...nodes) { this.children = nodes; }
    setAttribute(name, value) { this.attributes[name] = value; }
  }
  const list = new Element(presentation === 'compact' ? 'ul' : 'div');
  list.dataset = { servicePresentation: presentation, ...filters };
  const document = { querySelectorAll: () => [list], createElement: tag => new Element(tag), createDocumentFragment: () => new Element('fragment'), createTextNode: text => ({ textContent: text, children: [] }) };
  const flatten = element => [element, ...element.children.flatMap(flatten)];
  return { document, list, nodes: () => flatten(list) };
}

test('compact community lists keep identity, providers and status while details stay in Möglichkeiten', async () => {
  for (const presentation of ['compact', undefined]) {
    const view = catalogDocument(presentation);
    const fetch = async url => ({ ok: true, json: async () => url.pathname.endsWith('/services.v1.json') ? catalog : community });
    await api.mount(view.document, fetch, new URL('https://gemden.red/assets/'));
    const nodes = view.nodes();
    const text = nodes.map(node => node.textContent).join(' ');
    const classes = nodes.map(node => node.className);
    assert.equal(view.list.dataset.serviceReady, 'true');
    assert.ok(text.includes(catalog.services[0].name));
    assert.ok(text.includes('Rubybubys'));
    assert.ok(text.includes('Teilweise nutzbar'));
    assert.ok(nodes.some(node => node.href === 'https://gemden.red/leistungen/rubybubys-herz-und-schnauze/'));
    assert.ok(nodes.some(node => node.href === 'https://gemden.red/community/dynastien/rubybubys/'));
    if (presentation === 'compact') {
      assert.equal(nodes.find(node => node.dataset?.serviceId)?.tagName, 'li');
      assert.ok(text.includes('Details in Möglichkeiten'));
      assert.ok(!text.includes(catalog.services[0].summary));
      assert.ok(!text.includes(catalog.services[0].availability.usable));
      assert.ok(!text.includes(catalog.services[0].location_note));
      assert.ok(!classes.includes('service-availability'));
    } else {
      assert.equal(nodes.find(node => node.dataset?.serviceId)?.tagName, 'article');
      assert.ok(text.includes(catalog.services[0].summary));
      assert.ok(text.includes(catalog.services[0].availability.usable));
      assert.ok(text.includes(catalog.services[0].location_note));
    }
  }
});

test('an empty compact catalog retains valid list markup and a route to Möglichkeiten', async () => {
  const view = catalogDocument('compact', { serviceProvider: 'KIEZ-P-HAIN' });
  const fetch = async url => ({ ok: true, json: async () => url.pathname.endsWith('/services.v1.json') ? catalog : community });
  await api.mount(view.document, fetch, new URL('https://gemden.red/assets/'));
  assert.equal(view.nodes().find(node => node.className === 'service-empty').tagName, 'li');
  assert.ok(view.nodes().some(node => node.href === 'https://gemden.red/leistungen/'));
});
