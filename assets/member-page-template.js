(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  if (root) root.GemDenMemberPageTemplate = Object.freeze(api);
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  const TEMPLATE_PAGE_ID = 'PAGE-MEM-MEMBER';
  const TEMPLATE_MEMBER_ID = 'MEM-MEMBER';
  const MEMBER_ID_PATTERN = /^MEM-[A-Z0-9][A-Z0-9-]*$/;

  function templateError(code, message) {
    const error = new Error(message);
    error.code = code;
    return error;
  }

  function clone(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function validateMemberId(stableId) {
    const value = String(stableId || '').trim();
    if (!MEMBER_ID_PATTERN.test(value)) {
      throw templateError('member_id_invalid', 'Eine bestätigte MEM-Mitglieds-ID ist erforderlich.');
    }
    return value;
  }

  function profilePageId(stableId) {
    return `PAGE-${validateMemberId(stableId)}`;
  }

  function memberIdFromPageId(pageId) {
    const value = String(pageId || '').trim();
    if (!value.startsWith('PAGE-')) {
      throw templateError('page_id_invalid', 'Die PAGE-ID gehört zu keiner persönlichen Mitgliedsseite.');
    }
    const memberId = value.slice(5);
    try {
      validateMemberId(memberId);
    } catch {
      throw templateError('page_id_invalid', 'Die PAGE-ID gehört zu keiner persönlichen Mitgliedsseite.');
    }
    if (profilePageId(memberId) !== value) {
      throw templateError('page_id_invalid', 'Die PAGE-ID gehört zu keiner persönlichen Mitgliedsseite.');
    }
    return memberId;
  }

  function validateDisplayName(displayName) {
    const value = String(displayName || '').trim();
    if (!value || value.length > 120) {
      throw templateError('display_name_invalid', 'Für die persönliche Seite ist ein gültiger Anzeigename erforderlich.');
    }
    return value;
  }

  function profileSlug(displayName, stableId) {
    const name = validateDisplayName(displayName);
    const fallback = validateMemberId(stableId).slice(4).toLowerCase();
    const slug = name
      .normalize('NFKD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/ß/g, 'ss')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')
      .slice(0, 100)
      .replace(/-+$/g, '');
    return slug || fallback;
  }

  function publicProfilePath(stableId) {
    const memberId = validateMemberId(stableId);
    return `/community/mitglieder/profil/?mitglied=${encodeURIComponent(memberId)}`;
  }

  function personalizeMemberPageTemplate(template, { stableId, displayName }) {
    const memberId = validateMemberId(stableId);
    const name = validateDisplayName(displayName);
    if (
      !template
      || template.id !== TEMPLATE_PAGE_ID
      || template.subject?.kind !== 'member'
      || template.subject?.id !== TEMPLATE_MEMBER_ID
      || template.bindings?.member?.kind !== 'entity'
      || template.bindings.member.id !== TEMPLATE_MEMBER_ID
    ) {
      throw templateError('member_template_invalid', 'Die allgemeine Mitgliederseiten-Vorlage ist ungültig.');
    }

    const document = clone(template);
    document.id = profilePageId(memberId);
    document.subject.id = memberId;
    document.bindings.member.id = memberId;

    const modules = document.regions.flatMap(region => region.modules || []);
    const hero = modules.find(module => module.type === 'gemden.profile-hero');
    const skills = modules.find(module => module.type === 'gemden.skill-grid');
    const projects = modules.find(module => module.type === 'gemden.project-grid');
    if (!hero || !skills || !projects) {
      throw templateError('member_template_invalid', 'Der Mitgliederseiten-Vorlage fehlen notwendige Profilmodule.');
    }

    const breadcrumb = Array.isArray(hero.props?.breadcrumb)
      ? hero.props.breadcrumb
      : [];
    if (breadcrumb.length) breadcrumb[breadcrumb.length - 1].label = name;
    skills.props.title = `Was ${name} einbringen kann.`;
    projects.props.title = `Woran ${name} arbeitet.`;
    return document;
  }

  return {
    TEMPLATE_MEMBER_ID,
    TEMPLATE_PAGE_ID,
    memberIdFromPageId,
    personalizeMemberPageTemplate,
    profilePageId,
    profileSlug,
    publicProfilePath,
    validateDisplayName,
    validateMemberId
  };
});
