(function () {
  const client = window.FFE_SUPABASE_CLIENT;
  const connectionChip = document.getElementById('connection-chip');
  const signedOutPanel = document.getElementById('signed-out-panel');
  const signedInPanel = document.getElementById('signed-in-panel');
  const loginForm = document.getElementById('login-form');
  const loginSubmit = document.getElementById('login-submit');
  const loginStatus = document.getElementById('login-status');
  const accountDataStatus = document.getElementById('account-data-status');
  const profileForm = document.getElementById('profile-form');
  const profileSubmit = document.getElementById('profile-submit');
  const profileStatus = document.getElementById('profile-status');
  const logoutButton = document.getElementById('logout-button');
  const authErrorFromUrl = new URLSearchParams(location.hash.slice(1)).get('error_description');
  let currentUser = null;

  function setMessage(target, message, state) {
    target.textContent = message;
    if (state) target.dataset.state = state;
    else delete target.dataset.state;
  }

  function setConnection(label, state) {
    connectionChip.textContent = label;
    connectionChip.className = `status-chip${state === 'open' ? ' open' : state === 'experiment' ? ' experiment' : ''}`;
  }

  function formatProfileStatus(profile) {
    const visibility = {
      private: 'privat',
      members: 'für Mitglieder',
      public: 'öffentlich'
    }[profile.visibility] || profile.visibility;
    const publication = {
      draft: 'Entwurf',
      published: 'veröffentlicht',
      archived: 'archiviert'
    }[profile.publication_status] || profile.publication_status;
    return `${publication} · ${visibility}`;
  }

  function describePermissions(grants) {
    if (!grants.length) return 'Keine erweiterten Rechte vergeben';
    return grants.map(grant => `${grant.permission_key}:${grant.scope_id}`).join(', ');
  }

  function cleanAuthAddress() {
    const hasAuthHash = /(?:access_token|error_description|type)=/.test(location.hash);
    const hasAuthCode = new URLSearchParams(location.search).has('code');
    if (hasAuthHash || hasAuthCode) history.replaceState(null, '', location.pathname);
  }

  async function loadAccountData(user) {
    const profileQuery = client
      .from('profiles')
      .select('id,stable_id,display_name,bio,visibility,publication_status,account_status')
      .eq('id', user.id)
      .maybeSingle();
    const permissionQuery = client
      .from('permission_grants')
      .select('permission_key,scope_type,scope_id,starts_at,ends_at')
      .eq('grantee_user_id', user.id)
      .is('revoked_at', null);

    const [profileResult, permissionResult] = await Promise.all([profileQuery, permissionQuery]);
    if (profileResult.error) throw profileResult.error;
    if (permissionResult.error) throw permissionResult.error;
    if (!profileResult.data) throw new Error('Zu diesem Konto wurde noch kein Profil gefunden.');

    const profile = profileResult.data;
    document.getElementById('profile-heading').textContent = profile.display_name || 'Dein Profil';
    document.getElementById('account-stable-id').textContent = profile.stable_id || 'Noch nicht vergeben';
    document.getElementById('account-profile-status').textContent = formatProfileStatus(profile);
    const now = Date.now();
    const activeGrants = (permissionResult.data || []).filter(grant => {
      const hasStarted = Date.parse(grant.starts_at) <= now;
      const hasNotEnded = !grant.ends_at || Date.parse(grant.ends_at) > now;
      return hasStarted && hasNotEnded;
    });
    document.getElementById('account-permissions').textContent = describePermissions(activeGrants);
    document.getElementById('profile-display-name').value = profile.display_name || '';
    document.getElementById('profile-bio').value = profile.bio || '';
    document.getElementById('profile-visibility').value = profile.visibility;
    setMessage(accountDataStatus, 'Profil und Rechte wurden über deine eigene Sitzung geladen.', 'success');
    profileForm.hidden = false;
  }

  async function renderSession(session) {
    currentUser = session?.user || null;
    signedOutPanel.hidden = Boolean(currentUser);
    signedInPanel.hidden = !currentUser;

    if (!currentUser) {
      setConnection('Bereit zur Anmeldung', 'open');
      if (authErrorFromUrl) {
        cleanAuthAddress();
        setMessage(loginStatus, authErrorFromUrl, 'error');
      }
      return;
    }

    cleanAuthAddress();
    setConnection('Sicher angemeldet');
    document.getElementById('account-email').textContent = currentUser.email || 'Keine E-Mail hinterlegt';
    document.getElementById('account-stable-id').textContent = 'Wird geladen …';
    document.getElementById('account-profile-status').textContent = 'Wird geladen …';
    document.getElementById('account-permissions').textContent = 'Wird geladen …';
    setMessage(accountDataStatus, 'Profildaten werden sicher geladen …');
    profileForm.hidden = true;

    try {
      await loadAccountData(currentUser);
    } catch (error) {
      setConnection('Angemeldet · Profildaten nicht verfügbar', 'open');
      document.getElementById('account-profile-status').textContent = 'Konnte nicht geladen werden';
      setMessage(accountDataStatus, error.message || 'Das Profil konnte nicht geladen werden.', 'error');
    }
  }

  if (!client) {
    signedOutPanel.hidden = false;
    setConnection('Verbindung nicht verfügbar', 'open');
    loginSubmit.disabled = true;
    setMessage(loginStatus, window.FFE_SUPABASE_ERROR || 'Die Anmeldung konnte nicht gestartet werden.', 'error');
    return;
  }

  loginForm.addEventListener('submit', async event => {
    event.preventDefault();
    const email = document.getElementById('login-email').value.trim();
    if (!email) return;

    loginSubmit.disabled = true;
    setMessage(loginStatus, 'Der sichere Anmeldelink wird angefordert …');
    try {
      const redirectTo = new URL('./', location.href).href;
      const { error } = await client.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: redirectTo,
          shouldCreateUser: false
        }
      });
      if (error) throw error;
      loginForm.reset();
      setMessage(loginStatus, 'Falls die Adresse eingeladen ist, liegt der einmalige Link gleich im Postfach.', 'success');
    } catch (error) {
      setMessage(loginStatus, error.message || 'Der Link konnte nicht gesendet werden.', 'error');
    } finally {
      loginSubmit.disabled = false;
    }
  });

  profileForm.addEventListener('submit', async event => {
    event.preventDefault();
    if (!currentUser) return;

    const displayName = document.getElementById('profile-display-name').value.trim();
    const bio = document.getElementById('profile-bio').value.trim();
    const visibility = document.getElementById('profile-visibility').value;
    if (!displayName) {
      setMessage(profileStatus, 'Bitte gib einen Anzeigenamen ein.', 'error');
      return;
    }

    profileSubmit.disabled = true;
    setMessage(profileStatus, 'Dein Profil wird gespeichert …');
    try {
      const { data, error } = await client
        .from('profiles')
        .update({ display_name: displayName, bio, visibility })
        .eq('id', currentUser.id)
        .select('id,stable_id,display_name,bio,visibility,publication_status,account_status')
        .single();
      if (error) throw error;
      document.getElementById('profile-heading').textContent = data.display_name;
      document.getElementById('account-profile-status').textContent = formatProfileStatus(data);
      setMessage(profileStatus, 'Gespeichert. Supabase hat die Änderung mit deiner eigenen Sitzung geprüft.', 'success');
    } catch (error) {
      setMessage(profileStatus, error.message || 'Das Profil konnte nicht gespeichert werden.', 'error');
    } finally {
      profileSubmit.disabled = false;
    }
  });

  logoutButton.addEventListener('click', async () => {
    logoutButton.disabled = true;
    try {
      const { error } = await client.auth.signOut({ scope: 'local' });
      if (error) throw error;
      setMessage(loginStatus, 'Du bist auf diesem Gerät abgemeldet.', 'success');
    } catch (error) {
      setMessage(profileStatus, error.message || 'Die Abmeldung ist fehlgeschlagen.', 'error');
    } finally {
      logoutButton.disabled = false;
    }
  });

  client.auth.onAuthStateChange((_event, session) => {
    window.setTimeout(() => renderSession(session), 0);
  });

  client.auth.getSession()
    .then(({ data, error }) => {
      if (error) throw error;
      renderSession(data.session);
    })
    .catch(error => {
      setConnection('Sitzung konnte nicht geprüft werden', 'open');
      setMessage(loginStatus, error.message || 'Die Sitzung konnte nicht geprüft werden.', 'error');
    });
})();
