import { createLocalDraft, editorStorageKey } from './gemden-adapter.mjs';

const REMOTE_SELECT = 'id,draft_revision_id,published_revision_id,revision_count';
const REVISION_SELECT = 'id,revision_number,document,created_at';

export function editorConflictBackupKey(pageId) {
  return `${editorStorageKey(pageId)}:conflict-backup`;
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function localFallback(publishedDocument, storage) {
  try {
    const raw = storage?.getItem(editorStorageKey(publishedDocument.id));
    if (!raw) return { document: publishedDocument, envelope: null };
    const envelope = JSON.parse(raw);
    if (
      envelope?.format !== 'gemden-local-draft'
      || envelope?.version !== 1
      || envelope?.page_id !== publishedDocument.id
      || !envelope.document
    ) {
      return { document: publishedDocument, envelope: null };
    }
    return { document: envelope.document, envelope };
  } catch {
    return { document: publishedDocument, envelope: null };
  }
}

function isConflict(error) {
  return error?.code === '40001' || /draft changed since it was loaded/i.test(error?.message || '');
}

function isMissingBackend(error) {
  return ['42P01', '42883', 'PGRST202', 'PGRST205'].includes(error?.code);
}

function firstRow(data) {
  return Array.isArray(data) ? data[0] : data;
}

function localStatus(mode) {
  if (mode === 'signed-out') {
    return 'Lokal in diesem Browser gesichert. Nach einer Anmeldung kann zusätzlich eine Server-Revision entstehen. Es wurde nichts veröffentlicht.';
  }
  if (mode === 'remote-conflict') {
    return 'Lokal gesichert. Der Serverstand hat sich geändert; deshalb wurde keine Server-Revision erzeugt. Lade die Werkstatt neu, um beide Stände sicher aufzulösen. Es wurde nichts veröffentlicht.';
  }
  return 'Lokal in diesem Browser gesichert. Die Server-Speicherung ist für diese Seite noch nicht verfügbar. Es wurde nichts veröffentlicht.';
}

export function createPageRevisionStore({
  client = null,
  storage = globalThis.localStorage,
  validateDocument = () => {},
  now = () => new Date().toISOString()
} = {}) {
  let state = {
    pageId: null,
    mode: 'unchecked',
    expectedRevisionId: null,
    publishedRevisionId: null,
    revisionNumber: null
  };
  let conflict = null;

  function writeLocal(document, persistence) {
    assert(storage?.setItem, 'Der lokale Entwurfsspeicher ist nicht verfügbar.');
    const envelope = {
      ...createLocalDraft(document, now()),
      persistence
    };
    storage.setItem(editorStorageKey(document.id), JSON.stringify(envelope));
    return envelope;
  }

  function loadResult(document, source, message) {
    return {
      document: clone(document),
      source,
      mode: state.mode,
      conflict: conflict ? {
        localSavedAt: conflict.localEnvelope?.saved_at || null,
        remoteRevisionId: conflict.remoteRevisionId,
        remoteRevisionNumber: conflict.remoteRevisionNumber
      } : null,
      status: { kind: 'info', message }
    };
  }

  async function load(publishedDocument) {
    assert(publishedDocument?.id, 'Für die Werkstatt fehlt ein Seitendokument.');
    validateDocument(publishedDocument);
    let local = localFallback(publishedDocument, storage);
    if (local.envelope) {
      try {
        validateDocument(local.document);
      } catch {
        local = { document: publishedDocument, envelope: null };
      }
    }
    const fallbackDocument = local.document;
    state = {
      pageId: publishedDocument.id,
      mode: 'local-only',
      expectedRevisionId: null,
      publishedRevisionId: null,
      revisionNumber: null
    };
    conflict = null;

    if (!client?.auth?.getSession || !client?.from || !client?.rpc) {
      return loadResult(
        fallbackDocument,
        local.envelope ? 'local' : 'published',
        local.envelope
          ? 'Lokaler Entwurf wiederhergestellt. Die Server-Speicherung ist noch nicht verbunden; veröffentlicht wurde nichts.'
          : 'Werkstatt bereit. Entwürfe werden zunächst auf diesem Gerät gespeichert; veröffentlicht wird erst in einem getrennten Schritt.'
      );
    }

    let session;
    try {
      const result = await client.auth.getSession();
      if (result?.error) throw result.error;
      session = result?.data?.session;
    } catch {
      state.mode = 'remote-unavailable';
      return loadResult(
        fallbackDocument,
        local.envelope ? 'local' : 'published',
        'Die Sitzung konnte nicht sicher geprüft werden. Die Werkstatt bleibt lokal nutzbar; veröffentlicht wurde nichts.'
      );
    }

    if (!session?.user) {
      state.mode = 'signed-out';
      return loadResult(
        fallbackDocument,
        local.envelope ? 'local' : 'published',
        local.envelope
          ? 'Lokaler Entwurf wiederhergestellt. Für eine zusätzliche Server-Revision ist eine Anmeldung nötig.'
          : 'Nicht angemeldet. Entwürfe werden auf diesem Gerät gespeichert; veröffentlicht wird erst in einem getrennten Schritt.'
      );
    }

    let pageResult;
    try {
      pageResult = await client
        .from('page_documents')
        .select(REMOTE_SELECT)
        .eq('id', publishedDocument.id)
        .maybeSingle();
    } catch {
      pageResult = { error: new Error('Page storage unavailable') };
    }

    if (pageResult?.error || !pageResult?.data) {
      state.mode = 'remote-unavailable';
      return loadResult(
        fallbackDocument,
        local.envelope ? 'local' : 'published',
        pageResult?.error && isMissingBackend(pageResult.error)
          ? 'Die Server-Revisionen sind noch nicht freigeschaltet. Die Werkstatt speichert bis dahin lokal.'
          : 'Für diese Seite ist keine sichere Server-Speicherung verfügbar. Die Werkstatt speichert lokal.'
      );
    }

    state.expectedRevisionId = pageResult.data.draft_revision_id || null;
    state.publishedRevisionId = pageResult.data.published_revision_id || null;
    state.mode = 'remote-ready';

    if (!state.expectedRevisionId) {
      return loadResult(
        fallbackDocument,
        local.envelope ? 'local' : 'published',
        local.envelope
          ? 'Lokaler Entwurf wiederhergestellt. Die sichere Server-Speicherung ist bereit; veröffentlicht wurde nichts.'
          : 'Werkstatt und sichere Entwurfsspeicherung sind bereit. Eine Veröffentlichung bleibt ein getrennter Schritt.'
      );
    }

    let revisionResult;
    try {
      revisionResult = await client
        .from('page_revisions')
        .select(REVISION_SELECT)
        .eq('page_id', publishedDocument.id)
        .eq('id', state.expectedRevisionId)
        .maybeSingle();
    } catch {
      revisionResult = { error: new Error('Page revision unavailable') };
    }

    if (revisionResult?.error || !revisionResult?.data?.document) {
      state.mode = 'remote-unavailable';
      return loadResult(
        fallbackDocument,
        local.envelope ? 'local' : 'published',
        'Die letzte Server-Revision konnte nicht sicher geladen werden. Die Werkstatt bleibt lokal nutzbar.'
      );
    }

    try {
      validateDocument(revisionResult.data.document);
    } catch {
      state.mode = 'remote-unavailable';
      return loadResult(
        fallbackDocument,
        local.envelope ? 'local' : 'published',
        'Die Server-Revision entspricht nicht dem aktuellen Seitenvertrag. Sie wurde nicht in die Werkstatt übernommen.'
      );
    }

    state.revisionNumber = revisionResult.data.revision_number || null;
    if (local.envelope) {
      const persistence = local.envelope.persistence;
      const matchesRemote = (
        persistence?.state === 'synced'
        && persistence?.revision_id === state.expectedRevisionId
      ) || (
        persistence?.state === 'pending'
        && persistence?.based_on_revision_id === state.expectedRevisionId
      );

      if (!matchesRemote) {
        state.mode = 'remote-conflict';
        conflict = {
          localDocument: clone(local.document),
          localEnvelope: clone(local.envelope),
          remoteDocument: clone(revisionResult.data.document),
          remoteRevisionId: state.expectedRevisionId,
          remoteRevisionNumber: revisionResult.data.revision_number
        };
        return loadResult(
          local.document,
          'local-conflict',
          'Lokaler Entwurf und Serverstand unterscheiden sich. Der lokale Entwurf bleibt erhalten; eine Server-Speicherung ist zum Schutz gesperrt.'
        );
      }

      return loadResult(
        local.document,
        'local',
        'Lokaler Entwurf wiederhergestellt. Die sichere Server-Speicherung ist bereit; veröffentlicht wurde nichts.'
      );
    }

    return loadResult(
      revisionResult.data.document,
      'remote',
      `Server-Revision ${revisionResult.data.revision_number} geladen. Änderungen bleiben Entwürfe, bis sie getrennt veröffentlicht werden.`
    );
  }

  function resolveConflict(choice) {
    assert(state.mode === 'remote-conflict' && conflict, 'Es liegt kein auflösbarer Entwurfskonflikt vor.');
    assert(choice === 'local' || choice === 'remote', 'Unbekannte Konfliktentscheidung.');

    const selected = conflict;
    if (choice === 'local') {
      writeLocal(selected.localDocument, {
        state: 'pending',
        based_on_revision_id: selected.remoteRevisionId,
        conflict_resolution: 'keep-local'
      });
      state.mode = 'remote-ready';
      conflict = null;
      return loadResult(
        selected.localDocument,
        'local-resolved',
        `Lokalen Entwurf geöffnet. Er ist noch nicht serverseitig gesichert; „Entwurf sichern“ würde auf Server-Revision ${selected.remoteRevisionNumber} aufbauen. Veröffentlicht wurde nichts.`
      );
    }

    assert(storage?.setItem, 'Der lokale Entwurfsspeicher ist nicht verfügbar.');
    storage.setItem(editorConflictBackupKey(state.pageId), JSON.stringify({
      ...selected.localEnvelope,
      conflict_backup: {
        created_at: now(),
        replaced_by_revision_id: selected.remoteRevisionId,
        replaced_by_revision_number: selected.remoteRevisionNumber
      }
    }));
    writeLocal(selected.remoteDocument, {
      state: 'synced',
      revision_id: selected.remoteRevisionId,
      revision_number: selected.remoteRevisionNumber
    });
    state.mode = 'remote-ready';
    conflict = null;
    return loadResult(
      selected.remoteDocument,
      'remote-resolved',
      `Server-Revision ${selected.remoteRevisionNumber} geöffnet. Der vorherige lokale Entwurf bleibt als Konflikt-Backup in diesem Browser erhalten. Veröffentlicht wurde nichts.`
    );
  }

  async function save(document, { revisionSummary = 'Änderung in der visuellen Seitenwerkstatt' } = {}) {
    assert(document?.id && document.id === state.pageId, 'Der Entwurf gehört nicht zur geöffneten Seite.');
    validateDocument(document);

    if (state.mode === 'remote-conflict') {
      return {
        localSaved: true,
        remoteSaved: false,
        mode: state.mode,
        status: { kind: 'error', message: localStatus(state.mode) }
      };
    }

    const pendingPersistence = {
      state: 'pending',
      based_on_revision_id: state.expectedRevisionId
    };
    writeLocal(document, pendingPersistence);

    if (state.mode !== 'remote-ready') {
      return {
        localSaved: true,
        remoteSaved: false,
        mode: state.mode,
        status: {
          kind: state.mode === 'remote-conflict' ? 'error' : 'success',
          message: localStatus(state.mode)
        }
      };
    }

    let remoteResult;
    try {
      remoteResult = await client.rpc('save_page_revision', {
        target_page_id: document.id,
        page_document: document,
        expected_revision_id: state.expectedRevisionId,
        revision_summary: revisionSummary
      });
    } catch {
      remoteResult = { error: new Error('Revision save unavailable') };
    }

    if (remoteResult?.error) {
      state.mode = isConflict(remoteResult.error) ? 'remote-conflict' : 'remote-unavailable';
      return {
        localSaved: true,
        remoteSaved: false,
        mode: state.mode,
        status: {
          kind: state.mode === 'remote-conflict' ? 'error' : 'success',
          message: localStatus(state.mode)
        }
      };
    }

    const saved = firstRow(remoteResult?.data);
    if (!saved?.revision_id) {
      state.mode = 'remote-unavailable';
      return {
        localSaved: true,
        remoteSaved: false,
        mode: state.mode,
        status: { kind: 'success', message: localStatus(state.mode) }
      };
    }

    state.expectedRevisionId = saved.revision_id;
    state.publishedRevisionId = saved.published_revision_id || null;
    state.revisionNumber = saved.revision_number || null;
    writeLocal(document, {
      state: 'synced',
      revision_id: saved.revision_id,
      revision_number: saved.revision_number || null
    });

    return {
      localSaved: true,
      remoteSaved: true,
      mode: state.mode,
      revisionId: saved.revision_id,
      revisionNumber: saved.revision_number || null,
      status: {
        kind: 'success',
        message: `Entwurf als Server-Revision ${saved.revision_number} gesichert und zusätzlich lokal abgelegt. Es wurde nichts veröffentlicht.`
      }
    };
  }

  return Object.freeze({ load, resolveConflict, save });
}
