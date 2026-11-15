(function () {
  const client = window.FFE_SUPABASE_CLIENT;
  if (!client) return;
  const settings = document.getElementById('account-profile-blocks');
  const localRoot = document.documentElement.lang === 'en' ? '/en/' : '/';

  function node(tag, text) {
    const item = document.createElement(tag);
    if (text) item.textContent = text;
    return item;
  }

  function link(text, url) {
    const anchor = node('a', text);
    anchor.href = url;
    return anchor;
  }

  function button(text) {
    const control = node('button', text);
    control.type = 'button';
    control.className = 'button secondary';
    return control;
  }

  async function result(request) {
    const { data, error } = await request;
    if (error) throw error;
    return data;
  }

  function action(member, operation, note = null) {
    return result(client.rpc('moderate_member_profile', { member, operation, note }));
  }

  async function profileState(member) {
    const { session } = await result(client.auth.getSession());
    const user = session?.user.id || null;
    client.auth.onAuthStateChange((_event, next) => {
      if ((next?.user.id || null) !== user) window.setTimeout(() => location.reload(), 0);
    });
    return user ? action(member, 'status') : 'guest';
  }

  function showBlocked(root) {
    const section = node('section');
    section.className = 'section';
    const notice = node('div');
    notice.className = 'notice';
    const heading = node('h1', "You blocked this profile.");
    heading.tabIndex = -1;
    notice.append(heading, link("Manage blocked profiles", localRoot + 'konto/#account-profile-blocks'));
    section.append(notice);
    root.replaceChildren(section);
    root.dataset.publicDataSource = 'blocked-profile';
    document.title = "Member profile · GemDen";
    heading.focus();
  }

  function mount(root, member, state) {
    if (state === 'own') return;
    const panel = node('details');
    panel.className = 'notice gdm-profile-actions';
    const summary = node('summary', "Report or block profile");
    panel.append(summary);
    if (state === 'guest') {
      panel.append(node('p', "Sign in to report or block this profile."));
      panel.append(link("Sign in now", localRoot + 'konto/'));
      root.append(panel);
      return;
    }
    const form = node('form');
    const label = node('label', "What would you like to report?");
    const note = node('textarea');
    note.required = true;
    note.minLength = 10;
    note.maxLength = 2000;
    note.rows = 3;
    note.placeholder = "Briefly describe what the team should review.";
    label.append(note);
    const send = button("Send report");
    send.type = 'submit';
    form.append(label, node('p', "Your report goes privately to the GemDen team."), send);
    const status = node('p');
    status.setAttribute('role', 'status');
    const block = button("Block profile");
    const blockNote = node('p', "Blocking hides the member profile and stops new direct requests, messages and care arrangements.");
    panel.append(form, blockNote, block, status);
    root.append(panel);

    function busy(value) {
      send.disabled = value;
      block.disabled = value;
    }

    form.addEventListener('submit', async event => {
      event.preventDefault();
      if (send.disabled) return;
      if (note.value.trim().length < 10) {
        status.textContent = "Please describe the issue in at least ten characters.";
        return;
      }
      busy(true);
      try {
        const outcome = await action(member, 'report', note.value);
        if (outcome === 'reported') {
          status.textContent = "The GemDen team received your report.";
          form.reset();
        } else if (outcome === 'already_reported') {
          status.textContent = "You already have an open report for this profile.";
        } else if (outcome === 'limit') {
          status.textContent = "You have already sent several tickets today. Please try again tomorrow.";
        } else {
          status.textContent = "This profile is currently unavailable.";
        }
      } catch {
        status.textContent = "Your report could not be sent just now.";
      } finally {
        busy(false);
      }
    });

    block.addEventListener('click', async () => {
      if (block.disabled || !confirm("Block this member profile?")) return;
      busy(true);
      try {
        if (await action(member, 'block') !== 'blocked') throw new Error();
        showBlocked(root);
      } catch {
        status.textContent = "This profile could not be blocked just now.";
      } finally {
        busy(false);
      }
    });
  }

  if (settings) {
    const list = settings.querySelector('ul');
    const status = settings.querySelector('[role="status"]');
    let revision = 0;
    let user = null;

    async function loadBlocks() {
      const current = ++revision;
      status.textContent = "Loading blocked profiles …";
      try {
        const blocks = await result(client.rpc('get_own_profile_blocks'));
        if (current !== revision) return;
        status.textContent = blocks.length ? '' : "You haven't blocked any profiles.";
        list.replaceChildren(...blocks.map(block => {
          const row = node('li');
          const unblock = button("Unblock");
          row.append(node('span', block.display_name || block.member_id), unblock);
          unblock.addEventListener('click', async () => {
            const actor = user;
            unblock.disabled = true;
            try {
              if (await action(block.member_id, 'unblock') !== 'unblocked') throw new Error();
              if (actor === user) await loadBlocks();
            } catch {
              if (actor === user) status.textContent = "This profile could not be unblocked just now.";
            } finally {
              unblock.disabled = false;
            }
          });
          return row;
        }));
      } catch {
        if (current === revision) status.textContent = "Blocked profiles could not be loaded just now.";
      }
    }

    settings.addEventListener('toggle', () => {
      if (settings.open && user) loadBlocks();
    });
    client.auth.onAuthStateChange((_event, session) => window.setTimeout(() => {
      const next = session?.user.id || null;
      if (next === user) return;
      user = next;
      revision++;
      list.replaceChildren();
      status.textContent = '';
      if (user && settings.open) loadBlocks();
    }, 0));
  }

  window.GemDenProfileModeration = { profileState, mount, showBlocked };
})();
