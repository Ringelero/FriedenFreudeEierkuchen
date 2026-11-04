const test = require('node:test');
const assert = require('node:assert/strict');
const {readFileSync} = require('node:fs');
const {join} = require('node:path');
const {sanitiseCatalogue, visibleGraph} = require('../community/connections.js');
const raw = JSON.parse(readFileSync(join(__dirname, '../assets/data/community-connections.v1.json'), 'utf8'));
const catalogue = sanitiseCatalogue(raw);
const roots = ['ROOT-DYNASTIES', 'ROOT-SYNERGIES'];
const shared = 'SERVICE-RUBYBUBYS-OBDACHLOSENHILFE';

test('both languages retain canonical service identities and existing destination pages', () => {
  const services = JSON.parse(readFileSync(join(__dirname, '../assets/data/services.v1.json'), 'utf8')).services;
  for (const language of ['', 'en/']) {
    const localized = JSON.parse(readFileSync(join(__dirname, '..', language, 'assets/data/community-connections.v1.json'), 'utf8'));
    for (const node of localized.nodes.filter(n => n.kind === 'service')) {
      assert.equal(node.public_path, services.find(s => s.id === node.id).public_path);
      assert.ok(readFileSync(join(__dirname, '..', language, node.public_path, 'index.html'), 'utf8').includes('<h1'));
    }
  }
});

test('initial view has only the two entries; expansion reveals the selected relationships', () => {
  assert.deepEqual(visibleGraph(catalogue, new Set()).nodes.map(n => n.id), roots);
  const graph = visibleGraph(catalogue, new Set([...roots, 'DYN-RUBYBUBYS', 'SYN-ALTERNATIVE']));
  assert.equal(graph.nodes.length, 7);
  assert.equal(graph.nodes.filter(n => n.id === shared).length, 1);
  assert.deepEqual(graph.links.filter(l => l.to === shared).map(l => l.from).sort(), ['DYN-RUBYBUBYS', 'SYN-ALTERNATIVE']);
});

test('closing either root retains the shared service through the other root', () => {
  for (const [root, group, hidden] of [
    [roots[0], 'DYN-RUBYBUBYS', 'SYN-ALTERNATIVE'],
    [roots[1], 'SYN-ALTERNATIVE', 'DYN-RUBYBUBYS']
  ]) {
    const graph = visibleGraph(catalogue, new Set([root, 'DYN-RUBYBUBYS', 'SYN-ALTERNATIVE']));
    assert.ok(graph.nodes.some(n => n.id === shared));
    assert.ok(!graph.nodes.some(n => n.id === hidden));
    assert.deepEqual(graph.links.filter(l => l.to === shared), [{from: group, to: shared}]);
  }
});

test('invalid and duplicate links are ignored; cyclic extensions terminate without duplicate nodes', () => {
  const extended = sanitiseCatalogue({nodes: [...raw.nodes, raw.nodes[2]], links: [...raw.links,
    raw.links[0], {from: 'MISSING', to: shared}, {from: shared, to: shared},
    {from: shared, to: 'DYN-RUBYBUBYS'}]});
  const graph = visibleGraph(extended, new Set([...roots, ...raw.nodes.map(n => n.id)]));
  assert.equal(graph.nodes.length, new Set(graph.nodes.map(n => n.id)).size);
  assert.equal(graph.nodes.length, 7);
  assert.equal(graph.links.length, 7);
});
