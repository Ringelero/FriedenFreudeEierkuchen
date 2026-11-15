(function () {
  const client = window.FFE_SUPABASE_CLIENT;
  if (!client) return;
  const form = document.getElementById('account-deletion-form');
  const confirmation = document.getElementById('account-deletion-confirm');
  const status = document.getElementById('deletion-request-status');
  const reply = document.getElementById('deletion-request-response');
  const note = document.getElementById('deletion-login-note');
  const button = form.querySelector('button[type="submit"]');
  const labels = new Map([
    ['open', "We have received your deletion request."],
    ['planned', "Your deletion request is scheduled for processing."],
    ['working', "Your deletion request is being processed."],
    ['done', "The team has finished processing your request."],
    ['closed', "The team has closed this request."]
  ]);
  let userId = null;
  let revision = 0;

  function showLoginNote() {
    note.hidden = Boolean(userId) || location.hash !== '#konto-loeschen';
  }

  async function update(submit) {
    const current = ++revision;
    try {
      const { data, error } = await client.rpc('own_account_deletion', { submit_request: submit });
      if (current !== revision) return;
      if (error) throw error;
      status.textContent = labels.get(data?.state) || '';
      status.dataset.state = '';
      reply.textContent = data?.response || '';
      reply.hidden = !reply.textContent;
      form.hidden = Boolean(data && data.state !== 'closed');
      if (submit) form.reset();
    } catch {
      if (current !== revision) return;
      status.textContent = submit
        ? "Your deletion request could not be confirmed just now. Please try again."
        : "Your deletion request status could not be loaded just now.";
      status.dataset.state = 'error';
    } finally {
      if (current === revision) button.disabled = false;
    }
  }

  function setSession(session) {
    const next = session?.user.id || null;
    showLoginNote();
    if (next === userId) return;
    userId = next;
    revision++;
    showLoginNote();
    form.hidden = true;
    form.reset();
    reply.hidden = true;
    reply.textContent = '';
    status.textContent = '';
    status.dataset.state = '';
    if (userId) update(false);
  }

  showLoginNote();
  window.addEventListener('hashchange', showLoginNote);
  client.auth.onAuthStateChange((_event, session) => window.setTimeout(() => setSession(session), 0));
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!userId || form.hidden || button.disabled || !confirmation.checked) return;
    button.disabled = true;
    update(true);
  });
})();
