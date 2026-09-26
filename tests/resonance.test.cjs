const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const {
  createResponsePayload,
  submitOpportunityResponse
} = require('../leistungen/opportunities.js');
const {
  partitionResponses,
  responseActionPayload,
  responseMessagePayload
} = require('../konto/resonance-workspace.js');

const opportunityId = '11111111-1111-4111-8111-111111111111';
const responseId = '22222222-2222-4222-8222-222222222222';

function responseClient(calls) {
  return {
    from(table) {
      assert.equal(table, 'opportunity_responses');
      return {
        insert(payload) {
          calls.push(payload);
          return {
            select(columns) {
              assert.match(columns, /opportunity_id/);
              return {
                single: async () => ({
                  data: { id: responseId, stable_id: 'RES-TEST', status: 'pending', ...payload },
                  error: null
                })
              };
            }
          };
        }
      };
    }
  };
}

test('a public response payload contains only the opportunity, intent and trimmed message', () => {
  assert.deepEqual(
    createResponsePayload(opportunityId, 'help', '  Ich kann am Samstag helfen.  '),
    {
      opportunity_id: opportunityId,
      response_type: 'help',
      message: 'Ich kann am Samstag helfen.'
    }
  );
  assert.throws(() => createResponsePayload(opportunityId, 'score', 'Hallo'), /wähle/);
  assert.throws(() => createResponsePayload(opportunityId, 'help', '   '), /zwischen 1 und 2000/);
  assert.throws(() => createResponsePayload('not-an-id', 'help', 'Hallo'), /gültige Kennung/);
});

test('submitting resonance never sends a member, owner, status or contact field', async () => {
  const calls = [];
  const result = await submitOpportunityResponse(responseClient(calls), {
    opportunityId,
    responseType: 'question',
    message: '  Ist ein erstes Gespräch möglich? '
  });
  assert.equal(result.status, 'pending');
  assert.deepEqual(calls, [{
    opportunity_id: opportunityId,
    response_type: 'question',
    message: 'Ist ein erstes Gespräch möglich?'
  }]);
  assert.equal('responder_member_id' in calls[0], false);
  assert.equal('opportunity_owner_member_id' in calls[0], false);
  assert.equal('status' in calls[0], false);
  assert.equal('email' in calls[0], false);
});

test('response decisions and messages are append-only narrow commands', () => {
  assert.deepEqual(responseActionPayload(responseId, 'accepted'), {
    response_id: responseId,
    target_status: 'accepted'
  });
  assert.deepEqual(responseMessagePayload(responseId, '  Dann Dienstag?  '), {
    response_id: responseId,
    body: 'Dann Dienstag?'
  });
  assert.throws(() => responseActionPayload(responseId, 'pending'), /ungültig/);
  assert.throws(() => responseMessagePayload(responseId, ''), /zwischen 1 und 4000/);
});

test('the inbox model separates incoming and sent responses by stable member identity', () => {
  const responses = [
    { id: 'incoming', opportunity_owner_member_id: 'MEM-ME', responder_member_id: 'MEM-OTHER' },
    { id: 'sent', opportunity_owner_member_id: 'MEM-OTHER', responder_member_id: 'MEM-ME' },
    { id: 'unrelated', opportunity_owner_member_id: 'MEM-A', responder_member_id: 'MEM-B' }
  ];
  const split = partitionResponses(responses, 'MEM-ME');
  assert.deepEqual(split.incoming.map(item => item.id), ['incoming']);
  assert.deepEqual(split.sent.map(item => item.id), ['sent']);
});

test('the account ships the private inbox before the account controller', () => {
  const html = fs.readFileSync(path.join(__dirname, '..', 'konto', 'index.html'), 'utf8');
  assert.match(html, /id="resonance-center"/);
  assert.match(html, /Eingegangen/);
  assert.match(html, /Gesendet/);
  assert.ok(html.indexOf('./resonance-workspace.js') < html.indexOf('./konto.js'));
});

test('the resonance migration keeps identity derivation private and enables RLS everywhere', () => {
  const sql = fs.readFileSync(
    path.join(__dirname, '..', 'supabase', 'migrations', '20260925202520_resonance_core.sql'),
    'utf8'
  );
  assert.match(sql, /revoke update \(publication_status\)[\s\S]+public\.opportunities[\s\S]+authenticated/i);
  assert.match(sql, /target_kind in \([\s\S]+'opportunity'/i);
  for (const table of ['opportunity_responses', 'opportunity_response_actions', 'opportunity_response_messages']) {
    assert.match(sql, new RegExp(`create table public\\.${table}`, 'i'));
    assert.match(sql, new RegExp(`alter table public\\.${table} enable row level security`, 'i'));
  }
  assert.match(sql, /function ffe_private\.prepare_opportunity_response\(\)[\s\S]+security definer/i);
  assert.match(sql, /revoke all on function ffe_private\.prepare_opportunity_response\(\)[\s\S]+authenticated/i);
  assert.match(sql, /grant insert \(opportunity_id, response_type, message\)/i);
  assert.doesNotMatch(sql, /grant (insert|update|delete) on table public\.opportunity_responses to authenticated/i);
  assert.doesNotMatch(sql, /function public\./i);
});

test('the opportunity editor no longer writes publication state directly', () => {
  const source = fs.readFileSync(path.join(__dirname, '..', 'konto', 'opportunity-workspace.js'), 'utf8');
  assert.match(source, /kind: 'opportunity'/);
  assert.match(source, /setOwnPortfolioPublication/);
  assert.doesNotMatch(source, /update\(\{\s*publication_status:/);
  assert.doesNotMatch(source, /insert\(\{[\s\S]{0,900}publication_status:/);
});
