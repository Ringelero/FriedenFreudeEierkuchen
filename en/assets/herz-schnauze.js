(function () {
  'use strict';
  function reveal(hash) {
    let id;
    try { id = decodeURIComponent(hash.replace(/^#/, '')); } catch (_) { return; }
    const target = document.getElementById(id);
    const chapter = target?.closest('details[data-service-chapter]');
    if (chapter) chapter.open = true;
  }
  document.addEventListener('click', event => {
    const link = event.target.closest('a[href^="#"]');
    if (link) reveal(link.getAttribute('href'));
  });
  window.addEventListener('hashchange', () => reveal(window.location.hash));
  reveal(window.location.hash);
})();
