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
    const heading = node('h1', 'Du hast dieses Profil blockiert.');
    heading.tabIndex = -1;
    notice.append(heading, link('Blockierte Profile verwalten', localRoot + 'konto/#account-profile-blocks'));
    section.append(notice);
    root.replaceChildren(section);
    root.dataset.publicDataSource = 'blocked-profile';
    document.title = 'Mitgliedsprofil · GemDen';
    heading.focus();
  }

  function mount(root, member, state) {
    if (state === 'own') return;
    const panel = node('details');
    panel.className = 'notice gdm-profile-actions';
    const summary = node('summary', 'Profil melden oder blockieren');
    panel.append(summary);
    if (state === 'guest') {
      panel.append(node('p', 'Melde dich an, um dieses Profil zu melden oder zu blockieren.'));
      panel.append(link('Jetzt anmelden', localRoot + 'konto/'));
      root.append(panel);
      return;
    }
    const form = node('form');
    const label = node('label', 'Was möchtest du melden?');
    const note = node('textarea');
    note.required = true;
    note.minLength = 10;
    note.maxLength = 2000;
    note.rows = 3;
    note.placeholder = 'Beschreibe kurz, was das Team prüfen soll.';
    label.append(note);
    const send = button('Meldung senden');
    send.type = 'submit';
    form.append(label, node('p', 'Die Meldung geht privat an das GemDen-Team.'), send);
    const status = node('p');
    status.setAttribute('role', 'status');
    const block = button('Profil blockieren');
    const blockNote = node('p', 'Blockieren blendet das Mitgliedsprofil aus und stoppt neue direkte Anfragen, Nachrichten und Betreuungsabsprachen.');
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
        status.textContent = 'Bitte beschreibe das Problem in mindestens zehn Zeichen.';
        return;
      }
      busy(true);
      try {
        const outcome = await action(member, 'report', note.value);
        if (outcome === 'reported') {
          status.textContent = 'Deine Meldung ist beim GemDen-Team eingegangen.';
          form.reset();
        } else if (outcome === 'already_reported') {
          status.textContent = 'Zu diesem Profil hast du schon eine offene Meldung.';
        } else if (outcome === 'limit') {
          status.textContent = 'Du hast heute bereits mehrere Tickets gesendet. Bitte versuche es morgen wieder.';
        } else {
          status.textContent = 'Dieses Profil ist gerade nicht verfügbar.';
        }
      } catch {
        status.textContent = 'Deine Meldung konnte gerade nicht gesendet werden.';
      } finally {
        busy(false);
      }
    });

    block.addEventListener('click', async () => {
      if (block.disabled || !confirm('Dieses Mitgliedsprofil blockieren?')) return;
      busy(true);
      try {
        if (await action(member, 'block') !== 'blocked') throw new Error();
        showBlocked(root);
      } catch {
        status.textContent = 'Das Profil konnte gerade nicht blockiert werden.';
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
      status.textContent = 'Blockierte Profile werden geladen …';
      try {
        const blocks = await result(client.rpc('get_own_profile_blocks'));
        if (current !== revision) return;
        status.textContent = blocks.length ? '' : 'Du hast keine Profile blockiert.';
        list.replaceChildren(...blocks.map(block => {
          const row = node('li');
          const unblock = button('Blockierung aufheben');
          row.append(node('span', block.display_name || block.member_id), unblock);
          unblock.addEventListener('click', async () => {
            const actor = user;
            unblock.disabled = true;
            try {
              if (await action(block.member_id, 'unblock') !== 'unblocked') throw new Error();
              if (actor === user) await loadBlocks();
            } catch {
              if (actor === user) status.textContent = 'Die Blockierung konnte gerade nicht aufgehoben werden.';
            } finally {
              unblock.disabled = false;
            }
          });
          return row;
        }));
      } catch {
        if (current === revision) status.textContent = 'Blockierte Profile konnten gerade nicht geladen werden.';
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
