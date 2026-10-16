(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else { root.FFE_HOST_NOTES = api; api.init(); }
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  const KEY = 'ffe-herz-gastgeber-note-v1';
  const KINDS = Object.freeze({ '': 'Noch offen', food: 'Restaurant oder Café', stay: 'Hostel oder Unterkunft', shop: 'Laden oder anderer Ort' });
  const IDEAS = Object.freeze({ visit: 'Besuch mit Tier', rest: 'Platz für Ruhe', meet: 'Gemeinsame Begegnungen', other: 'Eine andere Idee' });
  function normalizeDraft(input) {
    if (!input || typeof input !== 'object' || Array.isArray(input)) throw new Error('Ungültige Notiz.');
    const draft = { version: 1 };
    for (const [key, max] of Object.entries({ name: 100, locality: 120, conditions: 800, next: 500 })) {
      if (input[key] !== undefined && typeof input[key] !== 'string') throw new Error('Ungültige Notiz.');
      draft[key] = (input[key] || '').trim();
      if (draft[key].length > max) throw new Error('Die Notiz ist zu lang. Bitte kürze deine Angaben.');
    }
    draft.kind = Object.hasOwn(KINDS, input.kind) ? input.kind : '';
    draft.ideas = Array.isArray(input.ideas) ? [...new Set(input.ideas.filter(value => Object.hasOwn(IDEAS, value)))] : [];
    return draft;
  }
  function readDraft(storage) {
    const raw = storage.getItem(KEY);
    if (raw === null) return null;
    if (raw.length > 12000) throw new Error('Ungültige Notiz.');
    const parsed = JSON.parse(raw);
    if (parsed?.version !== 1) throw new Error('Unbekanntes Notizformat.');
    return normalizeDraft(parsed);
  }
  function saveDraft(storage, input) {
    const draft = normalizeDraft(input);
    storage.setItem(KEY, JSON.stringify(draft));
    return draft;
  }
  function formatNote(input) {
    const draft = normalizeDraft(input);
    return ['Rubybubys Herz und Schnauze · Gesprächsnotiz', '', 'Vorbereitung für ein erstes Gespräch. Keine Anmeldung oder Zusage eines Betriebs.', '', `Ort: ${draft.name || 'Noch offen'}`, `Art: ${KINDS[draft.kind]}`, `Kiez oder Ort: ${draft.locality || 'Noch offen'}`, '', 'Darüber möchten wir sprechen:', ...(draft.ideas.length ? draft.ideas.map(value => `- ${IDEAS[value]}`) : ['Noch offen']), '', 'Wichtig zu klären:', draft.conditions || 'Welche Tiere, Bereiche und Zeiten passen? Wo ist Ruhe möglich? Welche Zuständigkeiten und Kosten sind zu besprechen?', '', 'Nächster Schritt:', draft.next || 'Ein erstes Gespräch mit dem Betrieb vereinbaren.', '', 'Vor einem öffentlichen Eintrag: Beschreibung, Kontakt, Bedingungen und Freigabe mit dem Betrieb abstimmen.', 'https://gemden.red/leistungen/rubybubys-herz-und-schnauze/gastgeber/'].join('\n');
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
        message('Deine gespeicherte Notiz aus diesem Browser ist geöffnet.');
      }
    } catch (_) { message('Eine gespeicherte Notiz konnte nicht geöffnet werden. Du kannst eine neue Notiz schreiben und als Text mitnehmen.'); }
    form.hidden = false;
    form.addEventListener('input', () => {
      revision++;
      outputWrap.hidden = true;
      output.value = '';
      message('Geändert – noch nicht gespeichert. Es wird nichts automatisch gesendet.');
    });
    form.addEventListener('submit', event => {
      event.preventDefault();
      try { saveDraft(window.localStorage, values()); message('Auf diesem Gerät gespeichert. Die Notiz wurde an niemanden gesendet.'); }
      catch (_) { message('Speichern ist in diesem Browser gerade nicht möglich. Du kannst die Notiz kopieren oder als Text herunterladen.'); }
    });
    form.querySelector('[data-host-copy]').addEventListener('click', async () => {
      const current = revision;
      try {
        const text = formatNote(values());
        output.value = text;
        outputWrap.hidden = false;
        try { await navigator.clipboard.writeText(text); if (revision === current) message('Notiz kopiert. Du entscheidest, wo du sie weitergibst.'); }
        catch (_) { if (revision === current) { output.focus(); output.select(); message('Automatisches Kopieren ist hier nicht möglich. Deine Notiz ist unten zum manuellen Kopieren markiert.'); } }
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
        message('Die Textdatei ist zum Herunterladen vorbereitet. Es wurde nichts gesendet.');
      } catch (_) { message('Der Download konnte nicht gestartet werden. Du kannst die Notiz stattdessen kopieren.'); }
      finally { if (url) setTimeout(() => URL.revokeObjectURL(url), 1000); }
    });
    form.querySelector('[data-host-clear]').addEventListener('click', () => {
      try { window.localStorage.removeItem(KEY); }
      catch (_) { message('Die gespeicherte Notiz konnte nicht entfernt werden. Bitte prüfe die Website-Daten in deinem Browser.'); return; }
      revision++; form.reset(); output.value = ''; outputWrap.hidden = true;
      message('Die Notiz wurde aus diesem Browser entfernt. Bereits kopierte oder heruntergeladene Texte bleiben bei dir.');
    });
  }
  return { KEY, normalizeDraft, readDraft, saveDraft, formatNote, init };
});
