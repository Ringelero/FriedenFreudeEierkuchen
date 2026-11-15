const test = require('node:test');
const assert = require('node:assert/strict');

const {
  authErrorFromLocation,
  describeAuthError,
  hasAuthCallbackParams,
  requestEmailLogin,
  signInWithPassword,
  updatePassword,
  validateNewPassword
} = require('../konto/auth-flow.js');

test('requires a confirmed password with at least twelve characters', () => {
  assert.equal(validateNewPassword('eine-lange-passphrase', 'eine-lange-passphrase'), 'eine-lange-passphrase');
  assert.throws(() => validateNewPassword('zu-kurz', 'zu-kurz'), /zwölf Zeichen/);
  assert.throws(() => validateNewPassword('eine-lange-passphrase', 'andere-passphrase'), /stimmen nicht überein/);
});

test('reads auth errors from query strings and legacy hash redirects', () => {
  assert.equal(
    authErrorFromLocation({ search: '?error_description=expired+code', hash: '' }),
    'expired code'
  );
  assert.equal(
    authErrorFromLocation({ search: '', hash: '#error_description=invalid+link&type=email' }),
    'invalid link'
  );
  assert.equal(hasAuthCallbackParams({ search: '?error_description=expired+code', hash: '' }), true);
  assert.equal(hasAuthCallbackParams({ search: '?page=PAGE-MEM-JULIUS', hash: '#inhalt' }), false);
});

test('translates rate limits and expired tokens without leaking raw provider text', () => {
  assert.match(describeAuthError({ message: 'email rate limit exceeded' }), /Zu viele Anfragen/);
  assert.match(describeAuthError({ code: 'otp_expired', message: 'Token has expired' }), /Anmeldelink ist ungültig oder abgelaufen/);
  assert.equal(describeAuthError({ message: 'Invalid login credentials' }), 'E-Mail-Adresse oder Passwort stimmen nicht.');
  assert.match(describeAuthError({ code: 'weak_password', message: 'Password is too weak' }), /mindestens zwölf Zeichen/);
  assert.match(describeAuthError(new Error('Die beiden Passwörter stimmen nicht überein.')), /stimmen nicht überein/);
  assert.equal(describeAuthError({ message: 'unexpected provider detail' }), 'Die Anmeldung konnte nicht abgeschlossen werden.');
});

test('requests an email login only for an existing invited account', async () => {
  const calls = [];
  const client = {
    auth: {
      signInWithOtp: async payload => {
        calls.push(payload);
        return { data: { user: null, session: null }, error: null };
      }
    }
  };

  await requestEmailLogin(client, {
    email: '  julius@example.test ',
    redirectTo: 'https://gemden.red/konto/'
  });

  assert.deepEqual(calls, [{
    email: 'julius@example.test',
    options: {
      emailRedirectTo: 'https://gemden.red/konto/',
      shouldCreateUser: false
    }
  }]);
});

test('signs in with password in the current browser and requires a session', async () => {
  const calls = [];
  const session = { user: { id: 'user-julius' } };
  const client = {
    auth: {
      signInWithPassword: async payload => {
        calls.push(payload);
        return { data: { session, user: session.user }, error: null };
      }
    }
  };

  const result = await signInWithPassword(client, {
    email: 'julius@example.test',
    password: 'browser-secret'
  });

  assert.equal(result.session, session);
  assert.deepEqual(calls, [{
    email: 'julius@example.test',
    password: 'browser-secret'
  }]);

  await assert.rejects(
    signInWithPassword({ auth: { signInWithPassword: async () => ({ data: {}, error: null }) } }, {
      email: 'julius@example.test',
      password: 'browser-secret'
    }),
    /keine sichere Sitzung/
  );
});

test('lets only the signed-in client set a confirmed password', async () => {
  const calls = [];
  const client = {
    auth: {
      getSession: async () => ({
        data: { session: { user: { id: 'user-julius' } } },
        error: null
      }),
      updateUser: async payload => {
        calls.push(payload);
        return { data: { user: { id: 'user-julius' } }, error: null };
      }
    }
  };

  await updatePassword(client, {
    password: 'eine-lange-passphrase',
    confirmation: 'eine-lange-passphrase'
  });
  assert.deepEqual(calls, [{ password: 'eine-lange-passphrase' }]);

  await assert.rejects(
    updatePassword({
      auth: {
        getSession: async () => ({ data: { session: null }, error: null }),
        updateUser: async () => {
          throw new Error('must not be called');
        }
      }
    }, {
      password: 'eine-lange-passphrase',
      confirmation: 'eine-lange-passphrase'
    }),
    /sichere Anmeldung erforderlich/
  );
});

test('ships the auth helper before the account controller and marks password fields correctly', () => {
  const fs = require('node:fs');
  const path = require('node:path');
  const accountHtml = fs.readFileSync(path.join(__dirname, '..', 'konto', 'index.html'), 'utf8');

  assert.ok(accountHtml.indexOf('./auth-flow.js') < accountHtml.indexOf('./konto.js'));
  assert.match(accountHtml, /autocomplete="current-password"/);
  assert.equal((accountHtml.match(/autocomplete="new-password"/g) || []).length, 2);
});
