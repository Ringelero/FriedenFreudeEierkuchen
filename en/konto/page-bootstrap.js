(function (root, factory) {
  const memberTemplate = typeof module === 'object' && module.exports
    ? require('../assets/member-page-template.js')
    : root?.GemDenMemberPageTemplate;
  const api = factory(memberTemplate);
  if (typeof module === 'object' && module.exports) module.exports = api;
  if (root) root.FFE_PAGE_BOOTSTRAP = Object.freeze(api);
})(typeof window === 'object' ? window : null, function (memberTemplate) {
  function pageError(code, message) {
    const error = new Error(message);
    error.code = code;
    return error;
  }

  function requireClientMethod(client, method) {
    if (!client || typeof client[method] !== 'function') {
      throw pageError('page_client_unavailable', "Secure page setup is currently unavailable.");
    }
  }

  function profilePageId(stableId) {
    if (!memberTemplate?.profilePageId) {
      throw pageError('page_template_unavailable', "The general member page template is currently unavailable.");
    }
    try {
      return memberTemplate.profilePageId(stableId);
    } catch {
      throw pageError('page_stable_id_invalid', "A confirmed member ID is required to create the page.");
    }
  }

  function profileSlug(displayName, stableId) {
    if (!memberTemplate?.profileSlug) {
      throw pageError('page_template_unavailable', "The general member page template is currently unavailable.");
    }
    try {
      return memberTemplate.profileSlug(displayName, stableId);
    } catch (error) {
      throw pageError(error?.code || 'page_slug_invalid', error?.message || "The intended page path is invalid.");
    }
  }

  function validateSlug(slug) {
    const value = String(slug || '').trim();
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value)) {
      throw pageError('page_slug_invalid', "The intended page path is invalid.");
    }
    return value;
  }

  function validateTitle(title) {
    const value = String(title || '').trim();
    if (!value || value.length > 160) {
      throw pageError('page_title_invalid', "The intended page title is invalid.");
    }
    return value;
  }

  async function loadInitialDocument(fetchImpl, templateUrl, expectedPageId, stableId, displayName) {
    if (typeof fetchImpl !== 'function') {
      throw pageError('page_template_unavailable', "The secure starter template is currently unavailable.");
    }

    let response;
    try {
      response = await fetchImpl(templateUrl, {
        credentials: 'same-origin',
        headers: { Accept: 'application/json' }
      });
    } catch {
      throw pageError('page_template_network', "The starter template could not be loaded.");
    }
    if (!response?.ok || typeof response.json !== 'function') {
      throw pageError('page_template_unavailable', "The starter template could not be loaded.");
    }

    let document;
    try {
      document = await response.json();
    } catch {
      throw pageError('page_template_invalid', "The starter template is invalid.");
    }

    if (document?.id === memberTemplate?.TEMPLATE_PAGE_ID) {
      try {
        document = memberTemplate.personalizeMemberPageTemplate(document, {
          stableId,
          displayName
        });
      } catch (error) {
        throw pageError(error?.code || 'page_template_invalid', error?.message || "The starter template is invalid.");
      }
    }

    if (document?.id !== expectedPageId
      || document?.subject?.kind !== 'member'
      || document?.subject?.id !== stableId) {
      throw pageError('page_template_invalid', "The starter template does not belong to this member account.");
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
    displayName = title,
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
      stableId,
      displayName
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
      throw pageError('page_response_invalid', "The database did not confirm page setup.");
    }
    return row;
  }

  function describePageError(error, fallback = "The personal page could not be created.") {
    const source = `${error?.code || ''} ${error?.message || error || ''}`.toLowerCase();
    if (/23505|duplicate key|already exists/.test(source)) {
      return "Your personal page already exists. Reloading the current version.";
    }
    if (/42501|authentication required|confirmed stable member id/.test(source)) {
      return "The page may only be created from a valid session with a confirmed member ID.";
    }
    if (/page_template|page_slug|page_title|wrong page id|invalid page title or slug/.test(source)) {
      return error.message || "The approved starter template is invalid.";
    }
    if (/network|fetch|offline/.test(source)) {
      return "Page setup could not reach the server. Please check your connection.";
    }
    return fallback;
  }

  return {
    createOwnProfilePage,
    describePageError,
    profilePageId,
    profileSlug,
    validateSlug,
    validateTitle
  };
});
