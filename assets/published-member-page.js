(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  if (root) root.GemDenPublishedMemberPage = Object.freeze(api);
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  function sameValue(a, b) {
    if (a === b) return true;
    if (!a || !b || typeof a !== 'object' || typeof b !== 'object') return false;
    const keys = Object.keys(a);
    return keys.length === Object.keys(b).length && keys.every(key => Object.prototype.hasOwnProperty.call(b, key) && sameValue(a[key], b[key]));
  }

  async function loadPublishedPage(client, memberId, fallback, alternatives = []) {
    const pageId = `PAGE-${memberId}`;
    const { data: page, error } = await client.from('page_documents')
      .select('id,subject_kind,subject_id,published_revision_id')
      .eq('id', pageId).eq('subject_kind', 'member').eq('subject_id', memberId)
      .eq('visibility', 'public').eq('publication_status', 'published').maybeSingle();
    if (error) throw error;
    if (!page) return fallback;
    if (!page.published_revision_id) throw new Error('Der freigegebenen Seite fehlt eine veröffentlichte Revision.');
    const result = await client.from('page_revisions').select('id,page_id,document')
      .eq('id', page.published_revision_id).eq('page_id', pageId).maybeSingle();
    if (result.error) throw result.error;
    const revision = result.data;
    const document = revision?.document;
    if (!document || revision.id !== page.published_revision_id || revision.page_id !== pageId
      || document.id !== pageId || document.subject?.kind !== 'member' || document.subject?.id !== memberId
      || ![fallback, ...alternatives].some(base => base.id === pageId && base.subject?.id === memberId
        && sameValue(document.bindings, base.bindings) && sameValue(document.data_sources, base.data_sources))) {
      throw new Error('Die veröffentlichte Gestaltung gehört nicht zum freigegebenen Profil.');
    }
    return document;
  }
  return { loadPublishedPage };
});
