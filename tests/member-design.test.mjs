import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import design from '../assets/member-design.js';
import published from '../assets/published-member-page.js';
import runtime from '../assets/gemden-modules.js';
import { toPuckData, fromPuckData } from '../editor-src/src/gemden-adapter.mjs';

const json = async name => JSON.parse(await readFile(new URL(`../assets/data/${name}`, import.meta.url), 'utf8'));
const [page, catalog, capabilities] = await Promise.all([json('pages/julius.v1.json'), json('modules.v1.json'), json('capabilities.v1.json')]);

test('every world preserves personal content, identities and bindings through the editor', () => {
  const data = toPuckData(page, catalog);
  data.content.find(item => item.type === 'gemden.profile-hero@1').props.image = 'data:image/webp;base64,YWJj';
  for (const preset of design.PRESETS) {
    const document = fromPuckData(design.applyDesign(data, preset.id), page, catalog);
    runtime.validatePageDocument(document, catalog, capabilities);
    assert.equal(document.id, page.id);
    assert.deepEqual(document.bindings, page.bindings);
    assert.deepEqual(document.regions[0].modules.map(item => item.id).sort(), page.regions[0].modules.map(item => item.id).sort());
    assert.equal(document.regions[0].modules.find(item => item.type === 'gemden.profile-hero').props.image, 'data:image/webp;base64,YWJj');
  }
  assert.equal(data.root.props.preset, page.theme.preset);
});

test('images reject executable formats, remote trackers, encoded paths and oversize documents', () => {
  for (const source of ['javascript:alert(1)', 'data:image/svg+xml;base64,YWJj', 'https://other.example/pic.jpg', '//other.example/pic.jpg', '/assets/../private.png', '/assets/%2e%2e/private.png']) assert.throws(() => design.safeImageSource(source));
  assert.equal(design.safeImageSource('/assets/my-picture.webp'), '/assets/my-picture.webp');
  assert.throws(() => design.safeImageSource(`data:image/png;base64,${'a'.repeat(design.MAX_IMAGE_LENGTH)}`));
  const huge = structuredClone(page);
  huge.regions[0].modules[0].props.extra = 'a'.repeat(1800000);
  assert.throws(() => runtime.validatePageDocument(huge, catalog, capabilities), /zu groß/);
});

function mockClient(rows) {
  const calls = [];
  return { calls, from(table) {
    const call = { table, filters: [] }; calls.push(call);
    const chain = { select(fields) { call.fields = fields; return chain; }, eq(...filter) { call.filters.push(filter); return chain; }, async maybeSingle() { return { data: rows[table], error: null }; } };
    return chain;
  } };
}

test('public design loads only the published pointer and rejects a foreign member or data binding', async () => {
  const revision = structuredClone(page);
  revision.theme.tokens.radius = '40px';
  const rows = { page_documents: { published_revision_id: 'published-revision' }, page_revisions: { id: 'published-revision', page_id: page.id, document: revision } };
  const client = mockClient(rows);
  assert.equal((await published.loadPublishedPage(client, 'MEM-JULIUS', page)).theme.tokens.radius, '40px');
  assert.ok(client.calls[0].filters.some(([key, value]) => key === 'publication_status' && value === 'published'));
  assert.ok(client.calls[0].filters.some(([key, value]) => key === 'visibility' && value === 'public'));
  assert.deepEqual(client.calls[1].filters, [['id', 'published-revision'], ['page_id', page.id]]);
  rows.page_revisions.document.subject.id = 'MEM-OTHER';
  await assert.rejects(published.loadPublishedPage(mockClient(rows), 'MEM-JULIUS', page));
  rows.page_revisions.document = structuredClone(page);
  rows.page_revisions.document.bindings.member.id = 'MEM-OTHER';
  await assert.rejects(published.loadPublishedPage(mockClient(rows), 'MEM-JULIUS', page));
  assert.equal(await published.loadPublishedPage(mockClient({ page_documents: null }), 'MEM-JULIUS', page), page);
});
