(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  if (root) root.FFE_PAGE_BOOTSTRAP = Object.freeze(api);
})(typeof window === 'object' ? window : null, function () {
  function pageError(code, message) {
    const error = new Error(message);
    error.code = code;
    return error;
  }

  function requireClientMethod(client, method) {
    if (!client || typeof client[method] !== 'function') {
      throw pageError('page_client_unavailable', 'Die sichere Seiteneinrichtung ist momentan nicht verfügbar.');
    }
  }

  function profilePageId(stableId) {
    const value = String(stableId || '').trim();
    if (!/^MEM-[A-Z0-9-]+$/.test(value)) {
      throw pageError('page_stable_id_invalid', 'Zum Anlegen der Seite ist eine bestätigte Mitglieds-ID erforderlich.');
    }
    return `PAGE-${value}`;
  }

  function validateSlug(slug) {
    const value = String(slug || '').trim();
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value)) {
      throw pageError('page_slug_invalid', 'Der vorgesehene Seitenpfad ist ungültig.');
    }
    return value;
  }

  function validateTitle(title) {
    const value = String(title || '').trim();
    if (!value || value.length > 160) {
      throw pageError('page_title_invalid', 'Der vorgesehene Seitentitel ist ungültig.');
    }
    return value;
  }

  async function loadInitialDocument(fetchImpl, templateUrl, expectedPageId, stableId) {
    if (typeof fetchImpl !== 'function') {
      throw pageError('page_template_unavailable', 'Die sichere Startvorlage ist momentan nicht verfügbar.');
    }

    let response;
    try {
      response = await fetchImpl(templateUrl, {
        credentials: 'same-origin',
        headers: { Accept: 'application/json' }
      });
    } catch {
      throw pageError('page_template_network', 'Die Startvorlage konnte nicht geladen werden.');
    }
    if (!response?.ok || typeof response.json !== 'function') {
      throw pageError('page_template_unavailable', 'Die Startvorlage konnte nicht geladen werden.');
    }

    let document;
    try {
      document = await response.json();
    } catch {
      throw pageError('page_template_invalid', 'Die Startvorlage ist nicht gültig.');
    }

    if (document?.id !== expectedPageId
      || document?.subject?.kind !== 'member'
      || document?.subject?.id !== stableId) {
      throw pageError('page_template_invalid', 'Die Startvorlage gehört nicht zu diesem Mitgliedskonto.');
    }
    return document;
  }

  function firstResultRow(data) {
    if (Array.isArray(data)) return data[0] || null;
    return data && typeof data === 'object' ? data : null;
  }

  async function createOwnProfilePage(client, {
    stableId,
    slug,
    title,
    templateUrl,
    fetchImpl
  }) {
    requireClientMethod(client, 'rpc');
    const expectedPageId = profilePageId(stableId);
    const safeSlug = validateSlug(slug);
    const safeTitle = validateTitle(title);
    const initialDocument = await loadInitialDocument(
      fetchImpl,
      templateUrl,
      expectedPageId,
      stableId
    );

    const { data, error } = await client.rpc('create_own_profile_page', {
      page_slug: safeSlug,
      page_title: safeTitle,
      initial_document: initialDocument
    });
    if (error) throw error;

    const row = firstResultRow(data);
    if (row?.page_id !== expectedPageId
      || typeof row.revision_id !== 'string'
      || !/^\d+$/.test(String(row.revision_number))) {
      throw pageError('page_response_invalid', 'Die Datenbank hat die Seiteneinrichtung nicht bestätigt.');
    }
    return row;
  }

  function describePageError(error, fallback = 'Die persönliche Seite konnte nicht angelegt werden.') {
    const source = `${error?.code || ''} ${error?.message || error || ''}`.toLowerCase();
    if (/23505|duplicate key|already exists/.test(source)) {
      return 'Deine persönliche Seite ist bereits vorhanden. Der aktuelle Stand wird neu geladen.';
    }
    if (/42501|authentication required|confirmed stable member id/.test(source)) {
      return 'Die Seite darf nur aus einer gültigen Sitzung mit bestätigter Mitglieds-ID angelegt werden.';
    }
    if (/page_template|page_slug|page_title|wrong page id|invalid page title or slug/.test(source)) {
      return error.message || 'Die freigegebene Startvorlage ist ungültig.';
    }
    if (/network|fetch|offline/.test(source)) {
      return 'Die Seiteneinrichtung konnte den Server nicht erreichen. Bitte prüfe die Verbindung.';
    }
    return fallback;
  }

  return {
    createOwnProfilePage,
    describePageError,
    profilePageId,
    validateSlug,
    validateTitle
  };
});
