import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import GemDenModules from '../assets/gemden-modules.js';
import {
  analyzePageRequest,
  applyPageProposal,
  assertBlobPageCapability,
  BLOB_PAGE_CAPABILITY,
  createPageProposal,
  createPageProposalFromIntent
} from '../editor-src/src/blob-assistant.mjs';
import { fromPuckData, toPuckData } from '../editor-src/src/gemden-adapter.mjs';

async function json(path) {
  return JSON.parse(await readFile(new URL(path, import.meta.url), 'utf8'));
}

const [page, modules, capabilities, baseline, ruleRegressions] = await Promise.all([
  json('../assets/data/pages/julius.v1.json'),
  json('../assets/data/modules.v1.json'),
  json('../assets/data/capabilities.v1.json'),
  json('../assistant/evals/blob-page-intents.v1.json'),
  json('../assistant/evals/blob-page-rule-regressions.v1.json')
]);

test('Blob page composition is proposal-only and requires the declared AI operations', () => {
  assert.equal(BLOB_PAGE_CAPABILITY.mode, 'proposal_only');
  assert.equal(BLOB_PAGE_CAPABILITY.human_confirmation_required, true);
  assert.equal(BLOB_PAGE_CAPABILITY.autosave, false);
  assert.equal(BLOB_PAGE_CAPABILITY.publish, false);
  assert.equal(assertBlobPageCapability(page), true);

  const restricted = structuredClone(page);
  restricted.capability_context.ai_operation_refs = restricted.capability_context.ai_operation_refs.filter(id => id !== 'OP-T05');
  assert.throws(() => assertBlobPageCapability(restricted), /OP-T05/);
});

test('Blob turns a style request into a small explainable proposal', () => {
  const proposal = createPageProposal('Mach die Seite goldener, runder und ruhiger.', page);
  assert.equal(proposal.recognized, true);
  assert.equal(proposal.operations.length, 1);
  assert.deepEqual(proposal.operations[0], {
    type: 'theme.set',
    values: {
      accent: '#b86b00',
      accent_deep: '#744000',
      surface: '#fff9ec',
      motion: 'none',
      radius: '40px'
    }
  });
  assert.match(proposal.summary, /goldene Farbwelt/);
  assert.match(proposal.summary, /Bewegung ausschalten/);
});

test('Blob recognizes natural requests to stop motion without a fallback choice', () => {
  const analysis = analyzePageRequest('Bitte keine Bewegung mehr.', page);
  assert.equal(analysis.reason, 'recognized_by_rules');
  assert.deepEqual(analysis.proposal.operations, [{
    type: 'theme.set',
    values: { motion: 'none' }
  }]);
  assert.deepEqual(analysis.proposal.questions, []);
});

test('Blob can propose one explicit module reorder without hidden ranking', () => {
  const proposal = createPageProposal('Bitte Projekte und Wege ganz nach oben.', page);
  assert.deepEqual(proposal.operations, [{
    type: 'module.move',
    component_type: 'gemden.link-cards@1',
    to_index: 0
  }]);
  assert.match(proposal.summary, /Projekte und Wege/);
});

test('Blob can style one named module without changing the whole page', () => {
  const proposal = createPageProposal('Mach die Fähigkeiten minzfarben und lass sie schweben.', page);
  assert.deepEqual(proposal.operations, [{
    type: 'module.appearance.set',
    component_type: 'gemden.skill-grid@1',
    values: { tone: 'mint', motion: 'float' }
  }]);

  const current = toPuckData(page, modules);
  const next = applyPageProposal(current, proposal);
  const skills = next.content.find(component => component.type === 'gemden.skill-grid@1');
  assert.equal(skills.props.tone, 'mint');
  assert.equal(skills.props.motion, 'float');
  assert.equal(next.root.props.accent, current.root.props.accent);
  assert.doesNotThrow(() => GemDenModules.validatePageDocument(
    fromPuckData(next, page, modules),
    modules,
    capabilities
  ));
});

test('Blob can update a declared section text from an exact quoted value', () => {
  const proposal = createPageProposal('Nenne die Überschrift der Fähigkeiten „Meine Superkräfte.“', page);
  assert.deepEqual(proposal.operations, [{
    type: 'module.text.set',
    component_type: 'gemden.skill-grid@1',
    field: 'title',
    value: 'Meine Superkräfte.'
  }]);

  const next = applyPageProposal(toPuckData(page, modules), proposal);
  const skills = next.content.find(component => component.type === 'gemden.skill-grid@1');
  assert.equal(skills.props.title, 'Meine Superkräfte.');
  assert.doesNotThrow(() => GemDenModules.validatePageDocument(
    fromPuckData(next, page, modules),
    modules,
    capabilities
  ));
});

test('module edits stay explicit, scoped and fail closed', () => {
  const ambiguous = createPageProposal('Nenne die Überschrift „Neu“.', page);
  assert.equal(ambiguous.recognized, false);
  assert.deepEqual(ambiguous.operations, []);

  const unsupported = createPageProposal('Nenne die Einleitung der Projekte „Neu“.', page);
  assert.equal(unsupported.recognized, false);
  assert.deepEqual(unsupported.operations, []);

  const unsafe = createPageProposal('Nenne die Überschrift der Fähigkeiten „<script>“.', page);
  assert.equal(unsafe.recognized, false);
  assert.deepEqual(unsafe.operations, []);

  const same = createPageProposal('Nenne die Überschrift der Fähigkeiten „Was Julius einbringen kann.“', page);
  assert.equal(same.recognized, false);
  assert.deepEqual(same.operations, []);
});

test('an unknown request stays an explicit question and changes nothing', () => {
  const proposal = createPageProposal('Mach es irgendwie majestätischer.', page);
  assert.equal(proposal.recognized, false);
  assert.deepEqual(proposal.operations, []);
  assert.equal(proposal.questions.length, 1);
  const current = toPuckData(page, modules);
  assert.deepEqual(applyPageProposal(current, proposal), current);
});

test('applying a Blob proposal is immutable and remains a valid GemDen page', () => {
  const current = toPuckData(page, modules);
  const untouched = structuredClone(current);
  const proposal = createPageProposal('Fähigkeiten zuerst, bitte sanfter und mit Minze.', page);
  const next = applyPageProposal(current, proposal);
  assert.deepEqual(current, untouched);
  assert.equal(next.content[0].type, 'gemden.skill-grid@1');
  assert.equal(next.root.props.accent, '#008b7d');
  assert.equal(next.root.props.motion, 'gentle');

  const document = fromPuckData(next, page, modules);
  assert.doesNotThrow(() => GemDenModules.validatePageDocument(document, modules, capabilities));
});

test('the executor rejects invented operations and arbitrary theme, module and text fields', () => {
  const current = toPuckData(page, modules);
  const base = createPageProposal('Mach die Seite ruhiger.', page);
  const invented = structuredClone(base);
  invented.operations = [{ type: 'page.publish' }];
  assert.throws(() => applyPageProposal(current, invented), /nicht freigeschaltet/);

  const unsafe = structuredClone(base);
  unsafe.operations = [{ type: 'theme.set', values: { custom_css: 'body { display: none }' } }];
  assert.throws(() => applyPageProposal(current, unsafe), /custom_css nicht ändern/);

  const moduleStyle = structuredClone(base);
  moduleStyle.operations = [{
    type: 'module.appearance.set',
    component_type: 'gemden.skill-grid@1',
    values: { custom_css: 'display:none' }
  }];
  assert.throws(() => applyPageProposal(current, moduleStyle), /custom_css nicht ändern/);

  const moduleText = structuredClone(base);
  moduleText.operations = [{
    type: 'module.text.set',
    component_type: 'gemden.profile-hero@1',
    field: 'bio',
    value: 'Ungeprüfter Profiltext'
  }];
  assert.throws(() => applyPageProposal(current, moduleText), /Textfeld bio/);
});

test('rule terms use word boundaries instead of unsafe substrings', () => {
  const analysis = analyzePageRequest('Brot und Warmwasser sind Themen der Seite.', page);
  assert.equal(analysis.proposal.recognized, false);
  assert.deepEqual(analysis.proposal.operations, []);
});

test('forbidden mixed requests and contradictory changes fail closed', () => {
  const forbidden = analyzePageRequest('Mach die Seite warm und veröffentliche sie sofort.', page);
  assert.equal(forbidden.reason, 'forbidden_request');
  assert.deepEqual(forbidden.proposal.operations, []);

  const styles = analyzePageRequest('Mach die Bewegung ruhig und lebendig.', page);
  assert.equal(styles.reason, 'conflicting_request');
  assert.deepEqual(styles.proposal.operations, []);

  const positions = analyzePageRequest('Zeige Fähigkeiten und Projekte als Erstes.', page);
  assert.equal(positions.reason, 'conflicting_request');
  assert.deepEqual(positions.proposal.operations, []);
});

test('current settings, current order and absent modules never become no-op changes', () => {
  const theme = analyzePageRequest('Nutze die rubinrote Farbwelt.', page);
  assert.equal(theme.reason, 'no_change');
  assert.equal(theme.proposal.recognized, false);

  const position = analyzePageRequest('Zeige das Profil als Erstes.', page);
  assert.equal(position.reason, 'no_change');
  assert.deepEqual(position.proposal.operations, []);

  const absentPage = structuredClone(page);
  absentPage.regions[0].modules = [];
  const absent = analyzePageRequest('Zeige Projekte als Erstes.', absentPage);
  assert.equal(absent.reason, 'missing_module');
  assert.deepEqual(absent.proposal.operations, []);
});

test('guided choices compile through deterministic presets without claiming an Ollama provider', () => {
  const proposal = createPageProposalFromIntent('Direktauswahl: Farbwelt – Gold.', page, {
    theme: 'gold',
    motion: 'unchanged',
    radius: 'unchanged',
    move: 'unchanged',
    clarify: false
  }, { mode: 'local-rule-pilot' });

  assert.deepEqual(proposal.assistant, { id: 'blob', mode: 'local-rule-pilot' });
  assert.deepEqual(proposal.operations, [{
    type: 'theme.set',
    values: { accent: '#b86b00', accent_deep: '#744000', surface: '#fff9ec' }
  }]);
});

test('deterministic rules satisfy the complete twelve-case baseline', async t => {
  for (const item of baseline.cases) {
    await t.test(item.id, () => {
      const analysis = analyzePageRequest(item.prompt, page);
      assert.equal(analysis.proposal.recognized, item.expected.recognized);
      assert.deepEqual(
        analysis.proposal.operations.map(operation => operation.type),
        item.expected.operation_types
      );
      if (item.expected.question_required) assert.ok(analysis.proposal.questions.length > 0);
    });
  }
});

test('phrases from the rejected 2B evaluation stay deterministic regressions', async t => {
  for (const item of ruleRegressions.cases) {
    await t.test(item.id, () => {
      const expected = item.expected_intent;
      const casePage = structuredClone(page);
      if (expected.motion === 'expressive') casePage.theme.motion = 'gentle';
      const analysis = analyzePageRequest(item.prompt, casePage);

      if (expected.clarify) {
        assert.equal(analysis.proposal.recognized, false);
        assert.deepEqual(analysis.proposal.operations, []);
        assert.ok(analysis.proposal.questions.length > 0);
        return;
      }

      const operationTypes = [];
      if ([expected.theme, expected.motion, expected.radius].some(value => value !== 'unchanged')) {
        operationTypes.push('theme.set');
      }
      if (expected.move !== 'unchanged') operationTypes.push('module.move');

      assert.equal(analysis.reason, 'recognized_by_rules');
      assert.deepEqual(
        analysis.proposal.operations.map(operation => operation.type),
        operationTypes
      );
      assert.deepEqual(analysis.proposal.assistant, { id: 'blob', mode: 'local-rule-pilot' });
    });
  }
});

