const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const api = require('../assets/services.js');
const root = path.resolve(__dirname, '..');
const catalog = JSON.parse(fs.readFileSync(path.join(root, 'assets/data/services.v1.json'), 'utf8'));
const community = JSON.parse(fs.readFileSync(path.join(root, 'assets/data/community-v0.1.json'), 'utf8'));
const clone = value => JSON.parse(JSON.stringify(value));

test('a shared service retains its identity across topic and community views', () => {
  const fixture = clone(catalog);
  fixture.services[0].provider_ids.push('KIEZ-P-HAIN');
  api.validateCatalog(fixture, community);
  const topic = api.selectServices(fixture, { categoryId: 'SOCIAL' });
  const dynasty = api.selectServices(fixture, { providerId: 'DYN-RUBYBUBYS' });
  const kiez = api.selectServices(fixture, { providerId: 'KIEZ-P-HAIN' });
  assert.equal(topic.length, 1);
  assert.equal(topic[0], dynasty[0]);
  assert.equal(topic[0], kiez[0]);
  assert.equal(api.selectServices(fixture, { categoryId: 'UNKNOWN' }).length, 0);
  assert.equal(api.selectServices(fixture, { providerId: 'UNKNOWN' }).length, 0);
});

test('a service does not appear as another community offer and archived records disappear', () => {
  assert.equal(api.selectServices(catalog, { providerId: 'KIEZ-P-HAIN' }).length, 0);
  assert.equal(api.selectServices(catalog, { providerId: 'DYN-RUBYBUBYS', categoryId: 'SOCIAL' }).length, 1);
  const archived = clone(catalog);
  archived.services[0].status = 'archived';
  assert.equal(api.selectServices(archived).length, 0);
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
