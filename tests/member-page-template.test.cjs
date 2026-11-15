const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const GemDenModules = require('../assets/gemden-modules.js');
const {
  memberIdFromPageId,
  personalizeMemberPageTemplate,
  profilePageId,
  profileSlug,
  publicProfilePath,
  validateMemberId
} = require('../assets/member-page-template.js');

function json(relativePath) {
  return JSON.parse(fs.readFileSync(path.join(__dirname, '..', relativePath), 'utf8'));
}

const template = json('assets/data/pages/member-profile.v1.json');
const modules = json('assets/data/modules.v1.json');
const capabilities = json('assets/data/capabilities.v1.json');

test('personalizes the shared page template for Leni without mutating the source', () => {
  const original = structuredClone(template);
  const page = personalizeMemberPageTemplate(template, {
    stableId: 'MEM-LENI',
    displayName: 'Leni'
  });

  assert.deepEqual(template, original);
  assert.equal(page.id, 'PAGE-MEM-LENI');
  assert.equal(page.subject.id, 'MEM-LENI');
  assert.equal(page.bindings.member.id, 'MEM-LENI');
  assert.equal(page.regions[0].modules[0].props.breadcrumb.at(-1).label, 'Leni');
  assert.equal(page.regions[0].modules[1].props.title, 'Was Leni einbringen kann.');
  assert.equal(page.regions[0].modules[3].props.title, 'Woran Leni arbeitet.');
  assert.doesNotThrow(() => GemDenModules.validatePageDocument(page, modules, capabilities));
});

test('derives stable IDs, safe slugs and one generic public path', () => {
  assert.equal(validateMemberId('MEM-LENI'), 'MEM-LENI');
  assert.equal(profilePageId('MEM-LENI'), 'PAGE-MEM-LENI');
  assert.equal(memberIdFromPageId('PAGE-MEM-LENI'), 'MEM-LENI');
  assert.equal(profileSlug('Léni Groß', 'MEM-LENI'), 'leni-gross');
  assert.equal(publicProfilePath('MEM-LENI'), '/community/mitglieder/profil/?mitglied=MEM-LENI');
  assert.throws(() => memberIdFromPageId('PAGE-KIEZ-P-HAIN'), /Mitgliedsseite/);
  assert.throws(() => validateMemberId('MEM-leni'), /Mitglieds-ID/);
});

test('ships a fail-closed generic public member route', () => {
  const html = fs.readFileSync(path.join(__dirname, '..', 'community', 'mitglieder', 'profil', 'index.html'), 'utf8');
  assert.match(html, /data-public-member-query="mitglied"/);
  assert.match(html, /data-personalize-page-template="true"/);
  assert.match(html, /Dieses Profil ist derzeit nicht öffentlich freigegeben/);
  assert.match(html, /member-page-template\.js/);
});

test('keeps the member subject and binding immutable in every server revision', () => {
  const migration = fs.readFileSync(
    path.join(__dirname, '..', 'supabase', 'migrations', '20260926192738_member_page_subject_integrity.sql'),
    'utf8'
  );

  assert.match(migration, /subject,kind.*distinct from locked_page\.subject_kind/s);
  assert.match(migration, /subject,id.*distinct from locked_page\.subject_id/s);
  assert.match(migration, /bindings,member,id.*distinct from locked_page\.subject_id/s);
  assert.match(migration, /revoke all on function public\.save_page_revision.*from public, anon/s);
});
