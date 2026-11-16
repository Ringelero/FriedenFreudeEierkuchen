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
    for (const node of localized.nodes.filter(n => n.public_path)) {
      assert.ok(readFileSync(join(__dirname, '..', language, node.public_path, 'index.html'), 'utf8').includes('<h1'));
    }
    for (const node of localized.nodes.filter(n => n.kind === 'service')) {
      assert.equal(node.public_path, services.find(s => s.id === node.id).public_path);
      assert.ok(readFileSync(join(__dirname, '..', language, node.public_path, 'index.html'), 'utf8').includes('<h1'));
    }
  }
});

test('initial view has only the two entries; expansion reveals the selected relationships', () => {
  assert.deepEqual(visibleGraph(catalogue, new Set()).nodes.map(n => n.id), roots);
  const graph = visibleGraph(catalogue, new Set([...roots, 'DYN-RUBYBUBYS', 'SYN-ALTERNATIVE']));
  assert.equal(graph.nodes.length, raw.nodes.length);
  assert.equal(graph.nodes.filter(n => n.id === shared).length, 1);
  assert.deepEqual(graph.links.filter(l => l.to === shared).map(l => l.from).sort(), ['DYN-RUBYBUBYS', 'SYN-ALTERNATIVE']);
});

test('each branch can reveal the places or services it links to', () => {
  const dynasties = visibleGraph(catalogue, new Set([roots[0], 'DYN-RUBYBUBYS', 'SYN-ALTERNATIVE']));
  assert.deepEqual(dynasties.nodes.filter(node => node.depth > 0).map(node => node.id), [
    'DYN-RUBYBUBYS','PLACE-THREEDEN',shared,'SERVICE-RUBYBUBYS-HERZ-SCHNAUZE'
  ]);
  assert.deepEqual(dynasties.links.filter(link => link.to === shared), [{from:'DYN-RUBYBUBYS',to:shared}]);
  const synergies = visibleGraph(catalogue, new Set([roots[1], 'DYN-RUBYBUBYS', 'SYN-ALTERNATIVE']));
  assert.equal(synergies.nodes.filter(node => node.kind === 'synergy').length, 16);
  assert.deepEqual(synergies.nodes.filter(node => node.kind === 'service').map(node => node.id),[shared]);
  assert.ok(!synergies.nodes.some(node => node.kind === 'place'));
});

test('invalid and duplicate links are ignored; cyclic extensions terminate without duplicate nodes', () => {
  const extended = sanitiseCatalogue({nodes: [...raw.nodes, raw.nodes[2]], links: [...raw.links,
    raw.links[0], {from: 'MISSING', to: shared}, {from: shared, to: shared},
    {from: shared, to: 'DYN-RUBYBUBYS'}]});
  const graph = visibleGraph(extended, new Set([...roots, ...raw.nodes.map(n => n.id)]));
  assert.equal(graph.nodes.length, new Set(graph.nodes.map(n => n.id)).size);
  assert.equal(graph.nodes.length, raw.nodes.length);
  assert.equal(graph.links.length, raw.links.length + 1);
});

test('revealed dynasty services connect to visible synergies even before the synergies are expanded', () => {
  const dynasty = 'DYN-RUBYBUBYS';
  const alternatives = 'SYN-ALTERNATIVE';
  const connaisseurs = 'SYN-CONNAISSEURS';
  const dogService = 'SERVICE-RUBYBUBYS-HERZ-SCHNAUZE';
  const crossLinks = selection => visibleGraph(catalogue, new Set([...roots, ...selection])).links.filter(
    link => [alternatives, connaisseurs].includes(link.from));
  const expected = [{from:alternatives,to:shared}, {from:connaisseurs,to:dogService}];
  assert.deepEqual(crossLinks([]), []);
  assert.deepEqual(crossLinks([dynasty]), expected);
  assert.deepEqual(crossLinks([alternatives, connaisseurs]), expected);
  assert.deepEqual(crossLinks([connaisseurs]), [{from:connaisseurs,to:dogService}]);
  assert.deepEqual(crossLinks([connaisseurs, alternatives, dynasty]), expected);
});
