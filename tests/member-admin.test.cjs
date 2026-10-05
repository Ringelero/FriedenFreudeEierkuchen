const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const {
  assignIdentity,
  inviteMember,
  listMembers,
  normalizeDisplayName,
  normalizeEmail,
  normalizeReason,
  normalizeStableId,
  sendMemberLoginLink,
  setMemberAccountStatus,
  setKiezPermission,
  suggestStableId,
  updateMemberDisplayName
} = require('../verwaltung/mitglieder/member-admin.js');

test('normalizes invitation fields and derives a reviewable stable ID', () => {
  assert.equal(normalizeEmail('  LENI@Example.Test '), 'leni@example.test');
  assert.equal(normalizeDisplayName('  Leni   Groß  '), 'Leni Groß');
  assert.equal(suggestStableId('Léni Groß'), 'MEM-LENI-GROSS');
  assert.equal(normalizeStableId(' mem-leni-gross '), 'MEM-LENI-GROSS');
  assert.equal(normalizeReason('  Durch   das Pilotteam bestätigt. '), 'Durch das Pilotteam bestätigt.');
  assert.throws(() => normalizeStableId('ADMIN-LENI'), /MEM-/);
  assert.throws(() => normalizeEmail('keine-mail'), /E-Mail/);
  assert.throws(() => normalizeReason('zu kurz'), /mindestens zwölf Zeichen/);
});

test('sends invitations only through the authenticated Edge Function', async () => {
  const calls = [];
  const client = {
    functions: {
      invoke: async (name, options) => {
        calls.push({ name, options });
        return {
          data: {
            invited: {
              id: '11111111-1111-4111-8111-111111111111',
              email: 'leni@example.test',
              display_name: 'Leni'
            }
          },
          error: null
        };
      }
    }
  };

  const result = await inviteMember(client, {
    email: ' Leni@Example.Test ',
    displayName: ' Leni ',
    reason: 'Die Pilotgruppe hat die Einladung bestätigt.'
  });
  assert.equal(result.email, 'leni@example.test');
  assert.deepEqual(calls, [{
    name: 'member-admin',
    options: {
      method: 'POST',
      body: {
        action: 'invite',
        email: 'leni@example.test',
        display_name: 'Leni',
        reason: 'Die Pilotgruppe hat die Einladung bestätigt.'
      }
    }
  }]);
});

test('loads only a confirmed member administration response', async () => {
  const data = {
    current_user_id: '71111111-1111-4111-8111-111111111111',
    members: [],
    kieze: [],
    audit: [],
    truncated: false
  };
  const client = {
    functions: {
      invoke: async () => ({ data, error: null })
    }
  };
  assert.equal(await listMembers(client), data);

  await assert.rejects(
    listMembers({ functions: { invoke: async () => ({ data: { members: [] }, error: null }) } }),
    /nicht vollständig bestätigt/
  );
});

test('edits account data only through documented Edge Function actions', async () => {
  const calls = [];
  const userId = '72222222-2222-4222-8222-222222222222';
  const client = {
    functions: {
      invoke: async (name, options) => {
        calls.push({ name, options });
        if (options.body.action === 'update_display_name') {
          return {
            data: { account: { user_id: userId, display_name: 'Leni Neu', account_status: 'active' } },
            error: null
          };
        }
        if (options.body.action === 'send_login_link') {
          return {
            data: { login_link: { user_id: userId, sent: true, audit_recorded: true } },
            error: null
          };
        }
        return {
          data: { account: { user_id: userId, display_name: 'Leni Neu', account_status: 'paused' } },
          error: null
        };
      }
    }
  };

  await updateMemberDisplayName(client, {
    userId,
    displayName: '  Leni   Neu ',
    reason: 'Der Anzeigename wurde gemeinsam korrigiert.'
  });
  await sendMemberLoginLink(client, {
    userId,
    reason: 'Der bisherige Einladungslink ist abgelaufen.'
  });
  await setMemberAccountStatus(client, {
    userId,
    accountStatus: 'paused',
    reason: 'Der Zugang wird auf bestätigten Wunsch pausiert.'
  });

  assert.deepEqual(calls.map(call => call.options.body), [
    {
      action: 'update_display_name',
      user_id: userId,
      display_name: 'Leni Neu',
      reason: 'Der Anzeigename wurde gemeinsam korrigiert.'
    },
    {
      action: 'send_login_link',
      user_id: userId,
      reason: 'Der bisherige Einladungslink ist abgelaufen.'
    },
    {
      action: 'set_account_status',
      user_id: userId,
      account_status: 'paused',
      reason: 'Der Zugang wird auf bestätigten Wunsch pausiert.'
    }
  ]);
});

test('assigns a stable identity through the dedicated database function', async () => {
  const calls = [];
  const client = {
    rpc: async (name, args) => {
      calls.push({ name, args });
      return {
        data: [{ user_id: 'user-leni', stable_id: 'MEM-LENI' }],
        error: null
      };
    }
  };
  const result = await assignIdentity(client, {
    userId: 'user-leni',
    stableId: 'mem-leni'
  });
  assert.equal(result.stable_id, 'MEM-LENI');
  assert.deepEqual(calls, [{
    name: 'assign_member_identity',
    args: {
      target_user_id: 'user-leni',
      target_stable_id: 'MEM-LENI'
    }
  }]);
});

test('changes only a scoped Kiez right and requires a documented reason', async () => {
  const calls = [];
  const client = {
    rpc: async (name, args) => {
      calls.push({ name, args });
      return { data: [{ permission_active: true, changed_rows: 1 }], error: null };
    }
  };
  await setKiezPermission(client, {
    userId: 'user-leni',
    kiezId: 'KIEZ-P-HAIN',
    enabled: true,
    reason: 'Durch das Pilotteam bestätigt.'
  });
  assert.deepEqual(calls, [{
    name: 'set_member_kiez_permission',
    args: {
      target_user_id: 'user-leni',
      target_kiez_id: 'KIEZ-P-HAIN',
      requested_enabled: true,
      decision_reason: 'Durch das Pilotteam bestätigt.'
    }
  }]);

  await assert.rejects(
    setKiezPermission(client, {
      userId: 'user-leni',
      kiezId: 'KIEZ-P-HAIN',
      enabled: false,
      reason: 'zu kurz'
    }),
    /mindestens zwölf Zeichen/
  );
  assert.equal(calls.length, 1);
});

test('keeps admin secrets out of browser files and pins Supabase dependencies', () => {
  const html = fs.readFileSync(path.join(__dirname, '..', 'verwaltung', 'mitglieder', 'index.html'), 'utf8');
  const browserJs = fs.readFileSync(path.join(__dirname, '..', 'verwaltung', 'mitglieder', 'member-admin.js'), 'utf8');
  const edgeJs = fs.readFileSync(path.join(__dirname, '..', 'supabase', 'functions', 'member-admin', 'index.ts'), 'utf8');
  const denoConfig = fs.readFileSync(path.join(__dirname, '..', 'supabase', 'functions', 'member-admin', 'deno.json'), 'utf8');

  assert.match(html, /@supabase\/supabase-js@2\.117\.2/);
  assert.doesNotMatch(`${html}\n${browserJs}`, /service_role|SUPABASE_SECRET|supabaseAdmin/);
  assert.match(edgeJs, /ctx\.supabaseAdmin\.auth\.admin\.inviteUserByEmail/);
  assert.match(edgeJs, /auth\.signInWithOtp/);
  assert.match(edgeJs, /shouldCreateUser: false/);
  assert.match(edgeJs, /ban_duration: requestedStatus === "paused"/);
  assert.match(edgeJs, /ACCOUNT_BAN_DURATION = "876000h"/);
  assert.match(edgeJs, /requestedStatus === "paused" \? ACCOUNT_BAN_DURATION : "none"/);
  assert.match(edgeJs, /rpc\("administer_member_account"/);
  assert.match(edgeJs, /permissionKey: "manage_members"/);
  assert.match(denoConfig, /@supabase\/server@1\.8\.0/);
  assert.match(denoConfig, /@supabase\/supabase-js@2\.117\.2/);
});

test('ships filters, account actions and a readable immutable administration history', () => {
  const html = fs.readFileSync(path.join(__dirname, '..', 'verwaltung', 'mitglieder', 'index.html'), 'utf8');
  const controller = fs.readFileSync(path.join(__dirname, '..', 'verwaltung', 'mitglieder', 'verwaltung.js'), 'utf8');
  const migration = fs.readFileSync(
    path.join(__dirname, '..', 'supabase', 'migrations', '20261005121116_member_account_management.sql'),
    'utf8'
  );

  assert.match(html, /id="member-search"/);
  assert.match(html, /id="member-status-filter"/);
  assert.match(html, /id="audit-list"/);
  assert.match(controller, /updateMemberDisplayName/);
  assert.match(controller, /sendMemberLoginLink/);
  assert.match(controller, /setMemberAccountStatus/);
  assert.match(migration, /create table public\.member_admin_events/);
  assert.match(migration, /member_admin_events_prevent_mutation/);
  assert.match(migration, /join public\.profiles as account_profile/);
  assert.match(migration, /account_profile\.account_status = 'active'/);
  assert.match(migration, /grant execute on function public\.administer_member_account[\s\S]+to service_role/);
  assert.doesNotMatch(migration, /grant execute on function public\.administer_member_account[\s\S]{0,120}to authenticated/);
});

test('shows the administration link in the account only after the scoped grant is loaded', () => {
  const html = fs.readFileSync(path.join(__dirname, '..', 'konto', 'index.html'), 'utf8');
  const controller = fs.readFileSync(path.join(__dirname, '..', 'konto', 'konto.js'), 'utf8');
  assert.match(html, /id="member-admin-link"[^>]*hidden/);
  assert.match(controller, /grant\.permission_key === 'manage_members'/);
  assert.match(controller, /grant\.scope_type === 'platform'/);
  assert.match(controller, /grant\.scope_id === 'GemDen'/);
});
