import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import GemDenModules from '../assets/gemden-modules.js';
import {
  createLocalDraft,
  editorStorageKey,
  fromPuckData,
  toPuckData
} from '../editor-src/src/gemden-adapter.mjs';

async function json(path) {
  return JSON.parse(await readFile(new URL(path, import.meta.url), 'utf8'));
}

const [page, modules, capabilities] = await Promise.all([
  json('../assets/data/pages/julius.v1.json'),
  json('../assets/data/modules.v1.json'),
  json('../assets/data/capabilities.v1.json')
]);

test('Puck adapter round-trips the Julius page without changing its contract', () => {
  const editorData = toPuckData(page, modules);
  const restored = fromPuckData(editorData, page, modules);
  assert.deepEqual(restored, page);
  assert.doesNotThrow(() => GemDenModules.validatePageDocument(restored, modules, capabilities));
});

test('editor order, copy and declared fields become a valid GemDen page', () => {
  const editorData = toPuckData(page, modules);
  const skills = editorData.content.find(item => item.type === 'gemden.skill-grid@1');
  const links = editorData.content.find(item => item.type === 'gemden.link-cards@1');
  const editedSkills = {
    ...structuredClone(skills),
    props: {
      ...structuredClone(skills.props),
      id: 'julius-skills-copy',
      title: 'Noch mehr, was Julius kann.',
      tone: 'mint',
      motion: 'float'
    }
  };
  editorData.content = [links, editedSkills, ...editorData.content.filter(item => item !== links)];
  editorData.root.props.radius = '40px';
  editorData.root.props.motion = 'gentle';

  const document = fromPuckData(editorData, page, modules);
  assert.equal(document.regions[0].modules[0].type, 'gemden.link-cards');
  assert.equal(document.regions[0].modules[1].id, 'julius-skills-copy');
  assert.equal(document.regions[0].modules[1].bindings.skills, 'skills');
  assert.equal(document.regions[0].modules[1].props.title, 'Noch mehr, was Julius kann.');
  assert.equal(document.regions[0].modules[1].appearance.tone, 'mint');
  assert.equal(document.theme.tokens.radius, '40px');
  assert.equal(document.theme.motion, 'gentle');
  assert.doesNotThrow(() => GemDenModules.validatePageDocument(document, modules, capabilities));
});

test('the adapter blocks external and scriptable link-card destinations', () => {
  const editorData = toPuckData(page, modules);
  const links = editorData.content.find(item => item.type === 'gemden.link-cards@1');
  links.props.items[0].href = 'https://example.com/phishing';
  assert.throws(
    () => fromPuckData(editorData, page, modules),
    /nur interne Pfade/
  );

  links.props.items[0].href = 'javascript:alert(1)';
  assert.throws(
    () => fromPuckData(editorData, page, modules),
    /nur interne Pfade/
  );
});

test('undeclared module capabilities still fail after visual editing', () => {
  const restrictedPage = structuredClone(page);
  restrictedPage.capability_context.module_permission_grants = ['module:navigation.internal'];
  const editorData = toPuckData(page, modules);
  assert.throws(
    () => fromPuckData(editorData, restrictedPage, modules),
    /gewährt module:data.public.community.read nicht/
  );
});

test('local drafts are explicitly versioned and scoped to a stable PAGE ID', () => {
  const draft = createLocalDraft(page, '2026-09-20T20:00:00.000Z');
  assert.equal(editorStorageKey(page.id), 'gemden:page-draft:v1:PAGE-MEM-JULIUS');
  assert.equal(draft.format, 'gemden-local-draft');
  assert.equal(draft.version, 1);
  assert.equal(draft.page_id, page.id);
  assert.equal(draft.saved_at, '2026-09-20T20:00:00.000Z');
  assert.deepEqual(draft.document, page);
  assert.notEqual(draft.document, page);
});

test('module catalogs reject editor fields that can write outside declared props', () => {
  const poisoned = structuredClone(modules);
  poisoned.modules[0].editor.fields[0].target = '__proto__.polluted';
  assert.throws(
    () => GemDenModules.validateModuleCatalog(poisoned, capabilities),
    /unsicheres Editor-Ziel/
  );
});
