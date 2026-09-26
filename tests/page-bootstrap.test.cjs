const test = require('node:test');
const assert = require('node:assert/strict');

const {
  createOwnProfilePage,
  describePageError,
  profilePageId,
  profileSlug,
  validateSlug,
  validateTitle
} = require('../konto/page-bootstrap.js');

function validDocument() {
  return {
    id: 'PAGE-MEM-JULIUS',
    subject: { kind: 'member', id: 'MEM-JULIUS' },
    regions: []
  };
}

test('derives only a valid profile page ID from a stable member ID', () => {
  assert.equal(profilePageId('MEM-JULIUS'), 'PAGE-MEM-JULIUS');
  assert.throws(() => profilePageId(''), /Mitglieds-ID/);
  assert.throws(() => profilePageId('ADMIN-JULIUS'), /Mitglieds-ID/);
  assert.throws(() => profilePageId('MEM-julius'), /Mitglieds-ID/);
});

test('validates the fixed slug and title before an RPC can run', () => {
  assert.equal(validateSlug('julius'), 'julius');
  assert.equal(profileSlug('Léni Groß', 'MEM-LENI'), 'leni-gross');
  assert.equal(validateTitle(' Julius '), 'Julius');
  assert.throws(() => validateSlug('../admin'), /Seitenpfad/);
  assert.throws(() => validateTitle(''), /Seitentitel/);
});

test('creates the personal page only through the dedicated authenticated RPC', async () => {
  const calls = [];
  const client = {
    rpc: async (name, args) => {
      calls.push({ name, args });
      return {
        data: [{
          page_id: 'PAGE-MEM-JULIUS',
          revision_id: '11111111-1111-4111-8111-111111111111',
          revision_number: 1
        }],
        error: null
      };
    }
  };
  const fetchCalls = [];
  const fetchImpl = async (url, options) => {
    fetchCalls.push({ url, options });
    return { ok: true, json: async () => validDocument() };
  };

  const result = await createOwnProfilePage(client, {
    stableId: 'MEM-JULIUS',
    slug: 'julius',
    title: 'Julius',
    templateUrl: '../assets/data/pages/julius.v1.json',
    fetchImpl
  });

  assert.equal(result.page_id, 'PAGE-MEM-JULIUS');
  assert.equal(fetchCalls.length, 1);
  assert.deepEqual(fetchCalls[0], {
    url: '../assets/data/pages/julius.v1.json',
    options: {
      credentials: 'same-origin',
      headers: { Accept: 'application/json' }
    }
  });
  assert.deepEqual(calls, [{
    name: 'create_own_profile_page',
    args: {
      page_slug: 'julius',
      page_title: 'Julius',
      initial_document: validDocument()
    }
  }]);
  assert.equal('owner_user_id' in calls[0].args, false);
  assert.equal('page_id' in calls[0].args, false);
});

test('specializes the shared member template before the authenticated RPC', async () => {
  const fs = require('node:fs');
  const path = require('node:path');
  const template = JSON.parse(fs.readFileSync(
    path.join(__dirname, '..', 'assets', 'data', 'pages', 'member-profile.v1.json'),
    'utf8'
  ));
  let rpcArgs = null;
  const client = {
    rpc: async (_name, args) => {
      rpcArgs = args;
      return {
        data: [{
          page_id: 'PAGE-MEM-LENI',
          revision_id: '22222222-2222-4222-8222-222222222222',
          revision_number: 1
        }],
        error: null
      };
    }
  };

  await createOwnProfilePage(client, {
    stableId: 'MEM-LENI',
    slug: 'leni',
    title: 'Leni',
    displayName: 'Leni',
    templateUrl: '/assets/data/pages/member-profile.v1.json',
    fetchImpl: async () => ({ ok: true, json: async () => template })
  });

  assert.equal(rpcArgs.initial_document.id, 'PAGE-MEM-LENI');
  assert.equal(rpcArgs.initial_document.subject.id, 'MEM-LENI');
  assert.equal(rpcArgs.initial_document.bindings.member.id, 'MEM-LENI');
  assert.equal(rpcArgs.initial_document.regions[0].modules[0].props.breadcrumb.at(-1).label, 'Leni');
});

test('blocks a template for another page or member before the RPC', async () => {
  let rpcCalls = 0;
  const client = {
    rpc: async () => {
      rpcCalls += 1;
      return { data: [], error: null };
    }
  };

  await assert.rejects(
    createOwnProfilePage(client, {
      stableId: 'MEM-JULIUS',
      slug: 'julius',
      title: 'Julius',
      templateUrl: '/wrong.json',
      fetchImpl: async () => ({
        ok: true,
        json: async () => ({
          id: 'PAGE-MEM-OTHER',
          subject: { kind: 'member', id: 'MEM-OTHER' }
        })
      })
    }),
    /gehört nicht zu diesem Mitgliedskonto/
  );
  assert.equal(rpcCalls, 0);
});

test('rejects an unconfirmed RPC response and translates expected server errors', async () => {
  await assert.rejects(
    createOwnProfilePage({
      rpc: async () => ({ data: [], error: null })
    }, {
      stableId: 'MEM-JULIUS',
      slug: 'julius',
      title: 'Julius',
      templateUrl: '/julius.json',
      fetchImpl: async () => ({ ok: true, json: async () => validDocument() })
    }),
    /nicht bestätigt/
  );

  assert.match(describePageError({ code: '23505', message: 'duplicate key' }), /bereits vorhanden/);
  assert.match(describePageError({ code: '42501', message: 'Authentication required' }), /gültigen Sitzung/);
  assert.equal(describePageError({ message: 'provider internals' }), 'Die persönliche Seite konnte nicht angelegt werden.');
});

test('ships the page bootstrap helper before the account controller', () => {
  const fs = require('node:fs');
  const path = require('node:path');
  const html = fs.readFileSync(path.join(__dirname, '..', 'konto', 'index.html'), 'utf8');
  assert.ok(html.indexOf('./page-bootstrap.js') < html.indexOf('./konto.js'));
  assert.match(html, /id="page-create-button"/);
  assert.match(html, /veröffentlicht wird dabei nichts/i);
});
