(function () {
  const client = window.FFE_SUPABASE_CLIENT;
  const authFlow = window.FFE_AUTH_FLOW;
  const pageBootstrap = window.FFE_PAGE_BOOTSTRAP;
  const profileWorkspace = window.FFE_PROFILE_WORKSPACE;
  const publicationCenter = window.FFE_PUBLICATION_CENTER;
  const opportunityWorkspace = window.FFE_OPPORTUNITY_WORKSPACE;
  const resonanceWorkspace = window.FFE_RESONANCE_WORKSPACE;
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
  const memberAdminLink = document.getElementById('member-admin-link');
  const logoutButton = document.getElementById('logout-button');
  let authErrorFromUrl = authFlow?.authErrorFromLocation(location) || '';
  let currentUser = null;
  let currentProfile = null;
  let renderedAccountId = null;

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
      private: "private",
      members: "for members",
      public: "public"
    }[profile.visibility] || profile.visibility;
    const publication = {
      draft: "Draft",
      published: "published",
      archived: 'archiviert'
    }[profile.publication_status] || profile.publication_status;
    return `${publication} · ${visibility}`;
  }

  function describePermissions(grants) {
    if (!grants.length) return "No additional permissions granted";
    return grants.map(grant => `${grant.permission_key}:${grant.scope_id}`).join(', ');
  }

  function applyProfile(profile) {
    currentProfile = { ...currentProfile, ...profile };
    profileWorkspace.setProfile(currentProfile);
    publicationCenter.setProfile(currentProfile);
    opportunityWorkspace.setProfile(currentProfile);
    resonanceWorkspace.setProfile(currentProfile);
    document.getElementById('profile-heading').textContent = currentProfile.display_name || "Your profile";
    document.getElementById('account-profile-status').textContent = formatProfileStatus(currentProfile);
    document.getElementById('profile-display-name').value = currentProfile.display_name || '';
    document.getElementById('profile-visibility').value = currentProfile.visibility;
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
      pageWorkshopLink.href = `../gestalten/?page=${encodeURIComponent(page.id)}`;
      pageWorkshopLink.textContent = `${currentProfile?.display_name || "Profile"}– open workshop`;
      const revisionLabel = page.revision_count === 1 ? "a server revision" : `${page.revision_count} Server-Revisionen`;
      setMessage(pageStatus, `${page.id} is ready as a private draft with ${revisionLabel} . Nothing has been published.`, 'success');
      return;
    }

    pageCreateButton.hidden = false;
    pageCreateButton.disabled = false;
    pageWorkshopLink.hidden = true;
    setMessage(pageStatus, `${expectedPageId} has not been created yet. Only your own session may create the private draft.`);
  }

  async function loadPageState(user, profile) {
    pageCreateButton.disabled = true;
    pageWorkshopLink.hidden = true;
    setMessage(pageStatus, "Checking page status securely …");
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
      .select('id,stable_id,display_name,visibility,publication_status,account_status')
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
    if (!profileResult.data) throw new Error("No profile has been found for this account yet.");

    const profile = profileResult.data;
    currentProfile = profile;
    document.getElementById('profile-heading').textContent = profile.display_name || "Your profile";
    document.getElementById('account-stable-id').textContent = profile.stable_id || "Not assigned yet";
    document.getElementById('account-profile-status').textContent = formatProfileStatus(profile);
    const now = Date.now();
    const activeGrants = (permissionResult.data || []).filter(grant => {
      const hasStarted = Date.parse(grant.starts_at) <= now;
      const hasNotEnded = !grant.ends_at || Date.parse(grant.ends_at) > now;
      return hasStarted && hasNotEnded;
    });
    document.getElementById('account-permissions').textContent = describePermissions(activeGrants);
    memberAdminLink.hidden = !activeGrants.some(grant => (
      grant.permission_key === 'manage_members'
      && grant.scope_type === 'platform'
      && grant.scope_id === 'GemDen'
    ));
    document.getElementById('profile-display-name').value = profile.display_name || '';
    document.getElementById('profile-visibility').value = profile.visibility;
    setMessage(accountDataStatus, "Your profile and permissions have been loaded through your own session.", 'success');
    profileForm.hidden = false;

    try {
      await loadPageState(user, profile);
    } catch (error) {
      pageCreateButton.disabled = true;
      pageWorkshopLink.hidden = true;
      setMessage(pageStatus, pageBootstrap.describePageError(error, "The secure page status could not be loaded."), 'error');
    }

    try {
      await profileWorkspace.initialize({ client, profile });
    } catch {
      // Die Portfolio-Werkstatt zeigt ihren eigenen, präziseren Fehlerzustand.
    }

    try {
      await publicationCenter.initialize({
        client,
        profile,
        profileWorkspace,
        opportunityWorkspace,
        onProfileChange: applyProfile
      });
    } catch (error) {
      const target = document.getElementById('publication-status');
      if (target) setMessage(target, error.message || "The publication centre could not be loaded.", 'error');
    }

    try {
      await opportunityWorkspace.initialize({ client, profile });
    } catch (error) {
      const target = document.getElementById('opportunity-status');
      if (target) setMessage(target, error.message || "The opportunities could not be loaded.", 'error');
    }

    try {
      await resonanceWorkspace.initialize({ client, profile });
    } catch (error) {
      const target = document.getElementById('resonance-status');
      if (target) setMessage(target, error.message || "The private responses could not be loaded.", 'error');
    }
  }

  async function renderSession(session) {
    const nextUser = session?.user || null;
    // A fresh document discards every workspace, form and pending request of the previous account.
    if (renderedAccountId && renderedAccountId !== nextUser?.id) {
      signedInPanel.hidden = true;
      location.reload();
      return;
    }
    renderedAccountId = nextUser?.id || null;
    currentUser = nextUser;
    currentProfile = null;
    memberAdminLink.hidden = true;
    profileWorkspace?.reset();
    publicationCenter?.reset();
    opportunityWorkspace?.reset({ clearDraft: !currentUser });
    resonanceWorkspace?.reset();
    signedOutPanel.hidden = Boolean(currentUser);
    signedInPanel.hidden = !currentUser;

    if (!currentUser) {
      setConnection("Ready to sign in", 'open');
      if (authErrorFromUrl) {
        cleanAuthAddress();
        setMessage(loginStatus, authFlow.describeAuthError(authErrorFromUrl), 'error');
        authErrorFromUrl = '';
      }
      return;
    }

    cleanAuthAddress();
    setConnection("Securely signed in");
    document.getElementById('account-email').textContent = currentUser.email || "No email address stored";
    document.getElementById('account-stable-id').textContent = "Loading …";
    document.getElementById('account-profile-status').textContent = "Loading …";
    document.getElementById('account-permissions').textContent = "Loading …";
    setMessage(accountDataStatus, "Loading profile data securely …");
    profileForm.hidden = true;

    try {
      await loadAccountData(currentUser);
    } catch (error) {
      setConnection("Signed in · profile data unavailable", 'open');
      document.getElementById('account-profile-status').textContent = "Could not be loaded";
      setMessage(accountDataStatus, error.message || "The profile could not be loaded.", 'error');
    }
  }

  if (!client || !authFlow || !pageBootstrap || !profileWorkspace || !publicationCenter || !opportunityWorkspace || !resonanceWorkspace) {
    signedOutPanel.hidden = false;
    setConnection("Connection unavailable", 'open');
    loginSubmit.disabled = true;
    loginLinkSubmit.disabled = true;
    passwordSubmit.disabled = true;
    pageCreateButton.disabled = true;
    setMessage(loginStatus, window.FFE_SUPABASE_ERROR || "Sign-in could not be started.", 'error');
    return;
  }

  loginForm.addEventListener('submit', async event => {
    event.preventDefault();
    const emailInput = document.getElementById('login-email');
    const email = emailInput.value.trim();
    const password = document.getElementById('login-password').value;
    if (!email) {
      emailInput.focus();
      setMessage(loginStatus, "Please enter the email address you were invited with.", 'error');
      return;
    }

    loginSubmit.disabled = true;
    setMessage(loginStatus, "Establishing a secure session …");
    try {
      const data = await authFlow.signInWithPassword(client, { email, password });
      document.getElementById('login-password').value = '';
      setMessage(loginStatus, "This browser is now securely signed in.", 'success');
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
      setMessage(loginStatus, "Please enter the email address you were invited with.", 'error');
      return;
    }

    loginLinkSubmit.disabled = true;
    setMessage(loginStatus, "Requesting the one-time sign-in link …");
    try {
      const redirectTo = new URL('/konto/', location.href).href;
      await authFlow.requestEmailLogin(client, { email, redirectTo });
      setMessage(loginStatus, "If the address has been invited, the one-time link will arrive in the inbox shortly. Open it on one device, then set a password in your account.", 'success');
    } catch (error) {
      setMessage(loginStatus, authFlow.describeAuthError(error, "The link could not be sent."), 'error');
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
    setMessage(passwordStatus, "Saving the new password securely …");
    try {
      await authFlow.updatePassword(client, { password, confirmation });
      passwordForm.reset();
      setMessage(passwordStatus, "Password saved. You can now use it to sign in in other browsers.", 'success');
    } catch (error) {
      setMessage(passwordStatus, authFlow.describeAuthError(error, "The password could not be saved."), 'error');
    } finally {
      passwordSubmit.disabled = false;
    }
  });

  pageCreateButton.addEventListener('click', async () => {
    if (!currentUser || !currentProfile) return;

    pageCreateButton.disabled = true;
    setMessage(pageStatus, "Securely creating your private member page and its first revision …");
    try {
      const displayName = currentProfile.display_name || "Member";
      const result = await pageBootstrap.createOwnProfilePage(client, {
        stableId: currentProfile.stable_id,
        slug: pageBootstrap.profileSlug(displayName, currentProfile.stable_id),
        title: displayName,
        displayName,
        templateUrl: '../assets/data/pages/member-profile.v1.json',
        fetchImpl: window.fetch.bind(window)
      });
      renderPageState({
        id: result.page_id,
        revision_count: Number(result.revision_number)
      }, result.page_id);
      setMessage(pageStatus, `${result.page_id} was created through your own session as a private draft with server revision ${result.revision_number} . Nothing has been published.`, 'success');
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
    const visibility = document.getElementById('profile-visibility').value;
    if (!displayName) {
      setMessage(profileStatus, "Please enter a display name.", 'error');
      return;
    }

    profileSubmit.disabled = true;
    setMessage(profileStatus, "Saving your profile …");
    try {
      const { data, error } = await client
        .from('profiles')
        .update({ display_name: displayName, visibility })
        .eq('id', currentUser.id)
        .select('id,stable_id,display_name,visibility,publication_status,account_status')
        .single();
      if (error) throw error;
      applyProfile(data);
      setMessage(profileStatus, "Saved. Supabase checked the change using your own session.", 'success');
    } catch (error) {
      setMessage(profileStatus, error.message || "The profile could not be saved.", 'error');
    } finally {
      profileSubmit.disabled = false;
    }
  });

  logoutButton.addEventListener('click', async () => {
    logoutButton.disabled = true;
    try {
      const { error } = await client.auth.signOut({ scope: 'local' });
      if (error) throw error;
      setMessage(loginStatus, "You're signed out on this device.", 'success');
    } catch (error) {
      setMessage(profileStatus, error.message || "Sign-out failed.", 'error');
    } finally {
      logoutButton.disabled = false;
    }
  });

  window.addEventListener('pageshow', event => {
    if (event.persisted) location.reload();
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
      setConnection("Session could not be checked", 'open');
      setMessage(loginStatus, error.message || "The session could not be checked.", 'error');
    });
})();
