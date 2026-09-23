(function () {
  const client = window.FFE_SUPABASE_CLIENT;
  const authFlow = window.FFE_AUTH_FLOW;
  const pageBootstrap = window.FFE_PAGE_BOOTSTRAP;
  const connectionChip = document.getElementById('connection-chip');
  const signedOutPanel = document.getElementById('signed-out-panel');
  const signedInPanel = document.getElementById('signed-in-panel');
  const loginForm = document.getElementById('login-form');
  const loginSubmit = document.getElementById('login-submit');
  const loginLinkSubmit = document.getElementById('login-link-submit');
  const loginStatus = document.getElementById('login-status');
  const accountDataStatus = document.getElementById('account-data-status');
  const profileForm = document.getElementById('profile-form');
  const profileSubmit = document.getElementById('profile-submit');
  const profileStatus = document.getElementById('profile-status');
  const passwordForm = document.getElementById('password-form');
  const passwordSubmit = document.getElementById('password-submit');
  const passwordStatus = document.getElementById('password-status');
  const pageCreateButton = document.getElementById('page-create-button');
  const pageWorkshopLink = document.getElementById('page-workshop-link');
  const pageStatus = document.getElementById('page-status');
  const logoutButton = document.getElementById('logout-button');
  let authErrorFromUrl = authFlow?.authErrorFromLocation(location) || '';
  let currentUser = null;
  let currentProfile = null;

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
    if (authFlow?.hasAuthCallbackParams(location)) {
      history.replaceState(null, '', location.pathname);
    }
  }

  function renderPageState(page, expectedPageId) {
    if (page) {
      pageCreateButton.hidden = true;
      pageCreateButton.disabled = true;
      pageWorkshopLink.hidden = false;
      const revisionLabel = page.revision_count === 1 ? 'eine Server-Revision' : `${page.revision_count} Server-Revisionen`;
      setMessage(pageStatus, `${page.id} ist als privater Entwurf mit ${revisionLabel} bereit. Veröffentlicht wurde nichts.`, 'success');
      return;
    }

    pageCreateButton.hidden = false;
    pageCreateButton.disabled = false;
    pageWorkshopLink.hidden = true;
    setMessage(pageStatus, `${expectedPageId} ist noch nicht angelegt. Nur deine eigene Sitzung darf den privaten Entwurf erzeugen.`);
  }

  async function loadPageState(user, profile) {
    pageCreateButton.disabled = true;
    pageWorkshopLink.hidden = true;
    setMessage(pageStatus, 'Seitenstatus wird sicher geprüft …');
    const expectedPageId = pageBootstrap.profilePageId(profile.stable_id);
    const { data, error } = await client
      .from('page_documents')
      .select('id,title,visibility,publication_status,draft_revision_id,published_revision_id,revision_count')
      .eq('id', expectedPageId)
      .eq('owner_user_id', user.id)
      .maybeSingle();
    if (error) throw error;
    renderPageState(data, expectedPageId);
    return data;
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
    currentProfile = profile;
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

    try {
      await loadPageState(user, profile);
    } catch (error) {
      pageCreateButton.disabled = true;
      pageWorkshopLink.hidden = true;
      setMessage(pageStatus, pageBootstrap.describePageError(error, 'Der sichere Seitenstatus konnte nicht geladen werden.'), 'error');
    }
  }

  async function renderSession(session) {
    currentUser = session?.user || null;
    currentProfile = null;
    signedOutPanel.hidden = Boolean(currentUser);
    signedInPanel.hidden = !currentUser;

    if (!currentUser) {
      setConnection('Bereit zur Anmeldung', 'open');
      if (authErrorFromUrl) {
        cleanAuthAddress();
        setMessage(loginStatus, authFlow.describeAuthError(authErrorFromUrl), 'error');
        authErrorFromUrl = '';
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

  if (!client || !authFlow || !pageBootstrap) {
    signedOutPanel.hidden = false;
    setConnection('Verbindung nicht verfügbar', 'open');
    loginSubmit.disabled = true;
    loginLinkSubmit.disabled = true;
    passwordSubmit.disabled = true;
    pageCreateButton.disabled = true;
    setMessage(loginStatus, window.FFE_SUPABASE_ERROR || 'Die Anmeldung konnte nicht gestartet werden.', 'error');
    return;
  }

  loginForm.addEventListener('submit', async event => {
    event.preventDefault();
    const emailInput = document.getElementById('login-email');
    const email = emailInput.value.trim();
    const password = document.getElementById('login-password').value;
    if (!email) {
      emailInput.focus();
      setMessage(loginStatus, 'Bitte gib deine eingeladene E-Mail-Adresse ein.', 'error');
      return;
    }

    loginSubmit.disabled = true;
    setMessage(loginStatus, 'Die sichere Sitzung wird aufgebaut …');
    try {
      const data = await authFlow.signInWithPassword(client, { email, password });
      document.getElementById('login-password').value = '';
      setMessage(loginStatus, 'Dieser Browser ist jetzt sicher angemeldet.', 'success');
      await renderSession(data.session);
    } catch (error) {
      setMessage(loginStatus, authFlow.describeAuthError(error), 'error');
    } finally {
      loginSubmit.disabled = false;
    }
  });

  loginLinkSubmit.addEventListener('click', async () => {
    const email = document.getElementById('login-email').value.trim();
    if (!email) {
      document.getElementById('login-email').focus();
      setMessage(loginStatus, 'Bitte gib deine eingeladene E-Mail-Adresse ein.', 'error');
      return;
    }

    loginLinkSubmit.disabled = true;
    setMessage(loginStatus, 'Der einmalige Anmeldelink wird angefordert …');
    try {
      const redirectTo = new URL('./', location.href).href;
      await authFlow.requestEmailLogin(client, { email, redirectTo });
      setMessage(loginStatus, 'Falls die Adresse eingeladen ist, liegt der einmalige Link gleich im Postfach. Öffne ihn auf einem Gerät und setze danach im Konto ein Passwort.', 'success');
    } catch (error) {
      setMessage(loginStatus, authFlow.describeAuthError(error, 'Der Link konnte nicht gesendet werden.'), 'error');
    } finally {
      loginLinkSubmit.disabled = false;
    }
  });

  passwordForm.addEventListener('submit', async event => {
    event.preventDefault();
    if (!currentUser) return;

    const password = document.getElementById('new-password').value;
    const confirmation = document.getElementById('confirm-password').value;
    passwordSubmit.disabled = true;
    setMessage(passwordStatus, 'Das neue Passwort wird sicher gespeichert …');
    try {
      await authFlow.updatePassword(client, { password, confirmation });
      passwordForm.reset();
      setMessage(passwordStatus, 'Passwort gespeichert. Du kannst dich damit jetzt in anderen Browsern anmelden.', 'success');
    } catch (error) {
      setMessage(passwordStatus, authFlow.describeAuthError(error, 'Das Passwort konnte nicht gespeichert werden.'), 'error');
    } finally {
      passwordSubmit.disabled = false;
    }
  });

  pageCreateButton.addEventListener('click', async () => {
    if (!currentUser || !currentProfile) return;

    pageCreateButton.disabled = true;
    setMessage(pageStatus, 'Die private Julius-Seite und ihre erste Revision werden sicher angelegt …');
    try {
      const result = await pageBootstrap.createOwnProfilePage(client, {
        stableId: currentProfile.stable_id,
        slug: 'julius',
        title: currentProfile.display_name || 'Julius',
        templateUrl: '../assets/data/pages/julius.v1.json',
        fetchImpl: window.fetch.bind(window)
      });
      renderPageState({
        id: result.page_id,
        revision_count: Number(result.revision_number)
      }, result.page_id);
      setMessage(pageStatus, `${result.page_id} wurde über deine eigene Sitzung als privater Entwurf mit Server-Revision ${result.revision_number} angelegt. Veröffentlicht wurde nichts.`, 'success');
    } catch (error) {
      try {
        const page = await loadPageState(currentUser, currentProfile);
        if (page) return;
      } catch {
        // Die ursprüngliche, sicher übersetzte Fehlermeldung bleibt maßgeblich.
      }
      pageCreateButton.disabled = false;
      setMessage(pageStatus, pageBootstrap.describePageError(error), 'error');
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
