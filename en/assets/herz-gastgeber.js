(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else { root.FFE_HOST_NOTES = api; api.init(); }
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  const KEY = 'ffe-herz-gastgeber-note-v1';
  const KINDS = Object.freeze({ '': "Still undecided", food: "Restaurant or café", stay: "Hostel or accommodation", shop: "Shop or other place" });
  const IDEAS = Object.freeze({ visit: "Visiting with an animal", rest: "A quiet place", meet: "Meeting together", other: "Another idea" });
  function normalizeDraft(input) {
    if (!input || typeof input !== 'object' || Array.isArray(input)) throw new Error("Invalid note.");
    const draft = { version: 1 };
    for (const [key, max] of Object.entries({ name: 100, locality: 120, conditions: 800, next: 500 })) {
      if (input[key] !== undefined && typeof input[key] !== 'string') throw new Error("Invalid note.");
      draft[key] = (input[key] || '').trim();
      if (draft[key].length > max) throw new Error("The note is too long. Please shorten your details.");
    }
    draft.kind = Object.hasOwn(KINDS, input.kind) ? input.kind : '';
    draft.ideas = Array.isArray(input.ideas) ? [...new Set(input.ideas.filter(value => Object.hasOwn(IDEAS, value)))] : [];
    return draft;
  }
  function readDraft(storage) {
    const raw = storage.getItem(KEY);
    if (raw === null) return null;
    if (raw.length > 12000) throw new Error("Invalid note.");
    const parsed = JSON.parse(raw);
    if (parsed?.version !== 1) throw new Error("Unknown note format.");
    return normalizeDraft(parsed);
  }
  function saveDraft(storage, input) {
    const draft = normalizeDraft(input);
    storage.setItem(KEY, JSON.stringify(draft));
    return draft;
  }
  function formatNote(input) {
    const draft = normalizeDraft(input);
    return ["Rubybubys Herz und Schnauze · Conversation note", '', "Preparation for a first conversation. Not a registration or commitment by a business.", '', `Place: ${draft.name || "Still undecided"}`, `Type: ${KINDS[draft.kind]}`, `Neighbourhood or place: ${draft.locality || "Still undecided"}`, '', "What we'd like to discuss:", ...(draft.ideas.length ? draft.ideas.map(value => `- ${IDEAS[value]}`) : ["Still undecided"]), '', "Important points to clarify:", draft.conditions || "Which animals, areas and times are suitable? Where is a quiet space possible? Which responsibilities and costs need discussing?", '', "Next step:", draft.next || "Arrange a first conversation with the business.", '', "Before a public listing: agree the description, contact, conditions and release with the business.", 'https://gemden.red/leistungen/rubybubys-herz-und-schnauze/gastgeber/'].join('\n');
  }
  function init() {
    const form = document.querySelector('[data-host-form]');
    if (!form) return;
    const status = form.querySelector('[data-host-status]');
    const outputWrap = form.querySelector('[data-host-output-wrap]');
    const output = form.querySelector('[data-host-output]');
    let revision = 0;
    const message = text => { status.textContent = text; };
    const values = () => normalizeDraft({ ...Object.fromEntries(new FormData(form)), ideas: new FormData(form).getAll('ideas') });
    try {
      const saved = readDraft(window.localStorage);
      if (saved) {
        for (const key of ['name', 'kind', 'locality', 'conditions', 'next']) form.elements.namedItem(key).value = saved[key];
        for (const box of form.querySelectorAll('[name="ideas"]')) box.checked = saved.ideas.includes(box.value);
        message("Your saved note from this browser is open.");
      }
    } catch (_) { message("A saved note could not be opened. You can write a new note and take it with you as text."); }
    form.hidden = false;
    form.addEventListener('input', () => {
      revision++;
      outputWrap.hidden = true;
      output.value = '';
      message("Changed – not saved yet. Nothing is sent automatically.");
    });
    form.addEventListener('submit', event => {
      event.preventDefault();
      try { saveDraft(window.localStorage, values()); message("Saved on this device. The note was not sent to anyone."); }
      catch (_) { message("Saving is currently unavailable in this browser. You can copy the note or download it as text."); }
    });
    form.querySelector('[data-host-copy]').addEventListener('click', async () => {
      const current = revision;
      try {
        const text = formatNote(values());
        output.value = text;
        outputWrap.hidden = false;
        try { await navigator.clipboard.writeText(text); if (revision === current) message("Note copied. You decide where to share it."); }
        catch (_) { if (revision === current) { output.focus(); output.select(); message("Automatic copying is not possible here. Your note is selected below for manual copying."); } }
      } catch (error) { message(error.message); }
    });
    form.querySelector('[data-host-download]').addEventListener('click', () => {
      let url;
      try {
        url = URL.createObjectURL(new Blob([formatNote(values())], { type: 'text/plain;charset=utf-8' }));
        const link = document.createElement('a');
        link.href = url;
        link.download = 'herz-und-schnauze-gespraechsnotiz.txt';
        document.body.append(link); link.click(); link.remove();
        message("The text file is ready to download. Nothing was sent.");
      } catch (_) { message("The download could not be started. You can copy the note instead."); }
      finally { if (url) setTimeout(() => URL.revokeObjectURL(url), 1000); }
    });
    form.querySelector('[data-host-clear]').addEventListener('click', () => {
      try { window.localStorage.removeItem(KEY); }
      catch (_) { message("The saved note could not be removed. Please check the website data in your browser."); return; }
      revision++; form.reset(); output.value = ''; outputWrap.hidden = true;
      message("The note was removed from this browser. Text you have already copied or downloaded stays with you.");
    });
  }
  return { KEY, normalizeDraft, readDraft, saveDraft, formatNote, init };
});
