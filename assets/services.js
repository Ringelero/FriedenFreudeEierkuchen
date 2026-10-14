(function (root, factory) {
  'use strict';
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  if (root && root.document) {
    root.GemDenServices = api;
    const scriptUrl = root.document.currentScript.src;
    api.mount(root.document, root.fetch.bind(root), new URL('.', scriptUrl));
  }
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const statuses = { building: 'Im Aufbau', open: 'Offen', paused: 'Pausiert', archived: 'Archiviert' };
  const internalPath = /^\/(?:[a-z0-9-]+\/)+(?:#[a-z0-9-]+)?$/;

  function providerMap(community) {
    return new Map(['dynasties', 'kieze', 'communities'].flatMap(key => community[key] || []).map(group => [group.id, group]));
  }

  function validateCatalog(catalog, community) {
    function require(value, message) { if (!value) throw new Error(message); }
    require(catalog?.schema_version === '1.0.0', 'Unbekannter Leistungskatalog.');
    require(Array.isArray(catalog.categories) && Array.isArray(catalog.services), 'Kataloglisten fehlen.');
    const providers = providerMap(community);
    const categories = new Set();
    const ids = new Set();
    const paths = new Set();
    catalog.categories.forEach(category => {
      require(/^[A-Z][A-Z0-9-]*$/.test(category.id) && !categories.has(category.id), 'Kategorie fehlt oder ist doppelt.');
      require(typeof category.name === 'string' && category.name.trim() && internalPath.test(category.public_path), 'Ungültige Kategorie.');
      categories.add(category.id);
    });
    catalog.services.forEach(service => {
      require(/^SERVICE-[A-Z0-9-]+$/.test(service.id) && !ids.has(service.id), 'Leistungs-ID fehlt oder ist doppelt.');
      require(/^\/leistungen\/[a-z0-9-]+\/$/.test(service.public_path) && !paths.has(service.public_path), 'Ungültige oder doppelte Leistungsseite.');
      require(Object.hasOwn(statuses, service.status), 'Unbekannter Angebotsstand.');
      ['name', 'summary', 'location_note'].forEach(key => require(typeof service[key] === 'string' && service[key].trim(), 'Leistungsangaben fehlen.'));
      require(Array.isArray(service.category_ids) && service.category_ids.length && new Set(service.category_ids).size === service.category_ids.length && service.category_ids.every(id => categories.has(id)), 'Unbekannte oder doppelte Themenzuordnung.');
      require(Array.isArray(service.provider_ids) && service.provider_ids.length && new Set(service.provider_ids).size === service.provider_ids.length && service.provider_ids.every(id => providers.has(id) && internalPath.test(providers.get(id).public_path)), 'Unbekannte oder doppelte Anbieterzuordnung.');
      ids.add(service.id);
      paths.add(service.public_path);
    });
    return catalog;
  }

  function selectServices(catalog, filters = {}) {
    return catalog.services.filter(service => service.status !== 'archived'
      && (!filters.categoryId || service.category_ids.includes(filters.categoryId))
      && (!filters.providerId || service.provider_ids.includes(filters.providerId)));
  }

  async function mount(document, fetch, assetRoot) {
    const lists = [...document.querySelectorAll('[data-service-list]')];
    if (!lists.length) return;
    let catalog, community;
    try {
      const responses = await Promise.all(['services.v1.json', 'community-v0.1.json'].map(file => fetch(new URL('data/' + file, assetRoot))));
      if (responses.some(response => !response.ok)) throw new Error('Katalog nicht verfügbar.');
      [catalog, community] = await Promise.all(responses.map(response => response.json()));
      validateCatalog(catalog, community);
    } catch (_) {
      // The HTML links remain usable without JavaScript or when a source cannot be loaded.
      return;
    }
    const providers = providerMap(community);
    const categories = new Map(catalog.categories.map(category => [category.id, category]));
    function node(tag, className, text) {
      const element = document.createElement(tag);
      if (className) element.className = className;
      if (text) element.textContent = text;
      return element;
    }
    function link(text, path) {
      const element = node('a', '', text);
      element.href = new URL('../' + path.slice(1), assetRoot).href;
      return element;
    }
    lists.forEach(list => {
      const selected = selectServices(catalog, { categoryId: list.dataset.serviceCategory, providerId: list.dataset.serviceProvider });
      const contents = document.createDocumentFragment();
      selected.forEach(service => {
        const card = node('article', 'service-card');
        card.dataset.serviceId = service.id;
        const head = node('div', 'service-card-head');
        head.append(node('span', 'service-category', service.category_ids.map(id => categories.get(id).name).join(' · ')), node('span', 'status-chip', statuses[service.status]));
        const title = node('h3');
        title.append(link(service.name, service.public_path));
        const owners = node('p', 'service-providers');
        owners.append(document.createTextNode('Eine Leistung von '));
        service.provider_ids.forEach((id, index) => {
          if (index) owners.append(document.createTextNode(' · '));
          owners.append(link(providers.get(id).name, providers.get(id).public_path));
        });
        const more = link('Vorhaben entdecken →', service.public_path);
        more.className = 'service-card-action';
        card.append(head, title, node('p', 'service-summary', service.summary), owners, node('p', 'service-location', service.location_note), more);
        contents.append(card);
      });
      if (!selected.length) {
        const empty = node('div', 'service-empty');
        empty.append(node('p', '', 'Hier sind noch keine eigenen Leistungen veröffentlicht.'), link('Möglichkeiten entdecken →', '/leistungen/'));
        contents.append(empty);
      }
      list.replaceChildren(contents);
      list.dataset.serviceReady = 'true';
    });
  }

  return { validateCatalog, selectServices, providerMap, mount };
});
