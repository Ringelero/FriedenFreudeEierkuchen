import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';
import { createPageRevisionStore } from '../editor-src/src/page-revision-store.mjs';

const testDirectory = path.dirname(fileURLToPath(import.meta.url));

const page = {
  id: 'PAGE-MEM-JULIUS',
  schema_version: '1.0.0',
  regions: [],
  capability_context: {}
};

function memoryStorage() {
  const values = new Map();
  return {
    getItem: key => values.get(key) ?? null,
    setItem: (key, value) => values.set(key, value),
    value: key => JSON.parse(values.get(key))
  };
}

function query(result, calls, table) {
  const filters = [];
  return {
    select(columns) {
      calls.push({ type: 'select', table, columns });
      return this;
    },
    eq(column, value) {
      filters.push([column, value]);
      calls.push({ type: 'filter', table, column, value });
      return this;
    },
    async maybeSingle() {
      calls.push({ type: 'single', table, filters });
      return result;
    }
  };
}

function authenticatedClient({ pageResult, revisionResult, rpcResult }) {
  const calls = [];
  return {
    calls,
    auth: {
      async getSession() {
        return { data: { session: { user: { id: 'user-1' } } }, error: null };
      }
    },
    from(table) {
      if (table === 'page_documents') return query(pageResult, calls, table);
      if (table === 'page_revisions') return query(revisionResult, calls, table);
      throw new Error(`Unexpected table ${table}`);
    },
    async rpc(name, args) {
      calls.push({ type: 'rpc', name, args });
      return rpcResult;
    }
  };
}

test('signed-out editing stays local and never calls a page RPC', async () => {
  const storage = memoryStorage();
  const rpcCalls = [];
  const client = {
    auth: { getSession: async () => ({ data: { session: null }, error: null }) },
    from() { throw new Error('No table query expected while signed out'); },
    async rpc(name) { rpcCalls.push(name); }
  };
  const store = createPageRevisionStore({ client, storage, validateDocument: () => {}, now: () => '2026-09-23T10:00:00.000Z' });

  const loaded = await store.load(page);
  const changed = { ...page, title: 'Lokaler Entwurf' };
  const saved = await store.save(changed);

  assert.equal(loaded.mode, 'signed-out');
  assert.equal(saved.localSaved, true);
  assert.equal(saved.remoteSaved, false);
  assert.deepEqual(rpcCalls, []);
  assert.deepEqual(storage.value('gemden:page-draft:v1:PAGE-MEM-JULIUS').document, changed);
  assert.match(saved.status.message, /nichts veröffentlicht/i);
});

test('an authorized save calls only the immutable revision RPC with the loaded baseline', async () => {
  const storage = memoryStorage();
  const client = authenticatedClient({
    pageResult: {
      data: { id: page.id, draft_revision_id: null, published_revision_id: null, revision_count: 0 },
      error: null
    },
    revisionResult: null,
    rpcResult: {
      data: [{ revision_id: 'revision-1', revision_number: 1, published_revision_id: null }],
      error: null
    }
  });
  const store = createPageRevisionStore({ client, storage, validateDocument: () => {}, now: () => '2026-09-23T10:00:00.000Z' });

  await store.load(page);
  const saved = await store.save(page);

  const rpcCalls = client.calls.filter(call => call.type === 'rpc');
  assert.equal(saved.remoteSaved, true);
  assert.equal(rpcCalls.length, 1);
  assert.equal(rpcCalls[0].name, 'save_page_revision');
  assert.deepEqual(rpcCalls[0].args, {
    target_page_id: page.id,
    page_document: page,
    expected_revision_id: null,
    revision_summary: 'Änderung in der visuellen Seitenwerkstatt'
  });
  assert.equal(storage.value('gemden:page-draft:v1:PAGE-MEM-JULIUS').persistence.state, 'synced');
  assert.match(saved.status.message, /nichts veröffentlicht/i);
});

test('loads the current private server revision and advances from its exact ID', async () => {
  const storage = memoryStorage();
  const remoteDocument = { ...page, title: 'Serverstand' };
  const editedDocument = { ...page, title: 'Nächster Entwurf' };
  const client = authenticatedClient({
    pageResult: {
      data: {
        id: page.id,
        draft_revision_id: '11111111-1111-4111-8111-111111111111',
        published_revision_id: null,
        revision_count: 1
      },
      error: null
    },
    revisionResult: {
      data: {
        id: '11111111-1111-4111-8111-111111111111',
        revision_number: 1,
        document: remoteDocument,
        created_at: '2026-09-23T09:00:00.000Z'
      },
      error: null
    },
    rpcResult: {
      data: [{
        revision_id: '22222222-2222-4222-8222-222222222222',
        revision_number: 2,
        published_revision_id: null
      }],
      error: null
    }
  });
  const store = createPageRevisionStore({ client, storage, validateDocument: () => {} });

  const loaded = await store.load(page);
  const saved = await store.save(editedDocument);

  assert.equal(loaded.source, 'remote');
  assert.deepEqual(loaded.document, remoteDocument);
  assert.equal(saved.remoteSaved, true);
  assert.equal(saved.revisionNumber, 2);
  const rpcCall = client.calls.find(call => call.type === 'rpc');
  assert.equal(rpcCall.name, 'save_page_revision');
  assert.equal(rpcCall.args.expected_revision_id, '11111111-1111-4111-8111-111111111111');
  assert.equal(rpcCall.args.page_document, editedDocument);
  assert.equal(storage.value('gemden:page-draft:v1:PAGE-MEM-JULIUS').persistence.revision_id, '22222222-2222-4222-8222-222222222222');
});

test('keeps an untracked legacy local draft and blocks an automatic server overwrite', async () => {
  const storage = memoryStorage();
  const localDocument = { ...page, title: 'Ungesicherter Altentwurf' };
  storage.setItem('gemden:page-draft:v1:PAGE-MEM-JULIUS', JSON.stringify({
    format: 'gemden-local-draft',
    version: 1,
    page_id: page.id,
    saved_at: '2026-09-22T10:00:00.000Z',
    document: localDocument
  }));
  const client = authenticatedClient({
    pageResult: {
      data: {
        id: page.id,
        draft_revision_id: '11111111-1111-4111-8111-111111111111',
        published_revision_id: null,
        revision_count: 1
      },
      error: null
    },
    revisionResult: {
      data: {
        id: '11111111-1111-4111-8111-111111111111',
        revision_number: 1,
        document: page,
        created_at: '2026-09-23T09:00:00.000Z'
      },
      error: null
    },
    rpcResult: { data: null, error: null }
  });
  const store = createPageRevisionStore({ client, storage, validateDocument: () => {} });

  const loaded = await store.load(page);
  const saved = await store.save(localDocument);

  assert.equal(loaded.mode, 'remote-conflict');
  assert.equal(loaded.source, 'local-conflict');
  assert.deepEqual(loaded.document, localDocument);
  assert.equal(saved.remoteSaved, false);
  assert.equal(client.calls.some(call => call.type === 'rpc'), false);
  assert.match(saved.status.message, /keine server-revision/i);
});

test('a concurrent server change preserves the edited document locally', async () => {
  const storage = memoryStorage();
  const client = authenticatedClient({
    pageResult: {
      data: { id: page.id, draft_revision_id: 'revision-1', published_revision_id: null, revision_count: 1 },
      error: null
    },
    revisionResult: {
      data: { id: 'revision-1', revision_number: 1, document: page, created_at: '2026-09-23T09:00:00.000Z' },
      error: null
    },
    rpcResult: { data: null, error: { code: '40001', message: 'Draft changed since it was loaded.' } }
  });
  const store = createPageRevisionStore({ client, storage, validateDocument: () => {}, now: () => '2026-09-23T10:00:00.000Z' });
  await store.load(page);
  const changed = { ...page, title: 'Nicht verlieren' };

  const saved = await store.save(changed);

  assert.equal(saved.localSaved, true);
  assert.equal(saved.remoteSaved, false);
  assert.equal(saved.mode, 'remote-conflict');
  assert.deepEqual(storage.value('gemden:page-draft:v1:PAGE-MEM-JULIUS').document, changed);
  assert.match(saved.status.message, /lokal gesichert/i);
  assert.match(saved.status.message, /keine server-revision/i);
});

test('a missing migration fails closed and keeps all saves local', async () => {
  const storage = memoryStorage();
  const client = authenticatedClient({
    pageResult: { data: null, error: { code: '42P01', message: 'relation does not exist' } },
    revisionResult: null,
    rpcResult: { data: null, error: null }
  });
  const store = createPageRevisionStore({ client, storage, validateDocument: () => {}, now: () => '2026-09-23T10:00:00.000Z' });

  const loaded = await store.load(page);
  const saved = await store.save(page);

  assert.equal(loaded.mode, 'remote-unavailable');
  assert.match(loaded.status.message, /noch nicht freigeschaltet/i);
  assert.equal(saved.localSaved, true);
  assert.equal(saved.remoteSaved, false);
  assert.equal(client.calls.some(call => call.type === 'rpc'), false);
});

test('the editor connects the public Supabase client before starting the revision store', () => {
  const html = fs.readFileSync(path.join(testDirectory, '..', 'editor-src', 'index.html'), 'utf8');
  const main = fs.readFileSync(path.join(testDirectory, '..', 'editor-src', 'src', 'main.jsx'), 'utf8');
  const store = fs.readFileSync(path.join(testDirectory, '..', 'editor-src', 'src', 'page-revision-store.mjs'), 'utf8');

  assert.ok(html.indexOf('@supabase/supabase-js@2') < html.indexOf('/src/main.jsx'));
  assert.ok(html.indexOf('/assets/supabase-client.js') < html.indexOf('/src/main.jsx'));
  assert.match(main, /createPageRevisionStore/);
  assert.match(main, /revisionStore\.save/);
  assert.match(store, /client\.rpc\('save_page_revision'/);
  assert.doesNotMatch(store, /publish_page_revision/);
});
