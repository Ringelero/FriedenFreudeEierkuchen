/*
 * Öffentliche statische P-Hain-Inhalte.
 * Später werden diese Einträge über das Kiez-Dashboard und Supabase verwaltet.
 */
window.KIEZ_CONTENT = {
  meta: { id: 'KIEZ-P-HAIN', status: 'public-static-prototype', updated: '2026-09-16' },
  events: [],
  knowledge: [
    {
      id: 'PHAIN-KNOW-001',
      title: 'Ventile regelmäßig bewegen',
      text: 'Ein möglicher Wartungshinweis: selten benutzte Ventile können gelegentlich vorsichtig bewegt werden. Was für welches Bauteil sinnvoll und sicher ist, muss fachlich ergänzt und mit einer Quelle versehen werden.',
      status: 'Entwurf · fachliche Prüfung offen',
      review: 'kein Prüfdatum gesetzt'
    },
    {
      id: 'PHAIN-KNOW-002',
      title: 'Hauswissen gesucht',
      text: 'Kontakte, wiederkehrende Aufgaben und hilfreiche Besonderheiten des Hauses sollen hier nachvollziehbar gesammelt werden.',
      status: 'offene Sammlung',
      review: 'noch ohne Einträge'
    }
  ],
  board: [
    {
      id: 'PHAIN-BOARD-001',
      title: 'P-Hain ist eröffnet',
      text: 'Der öffentliche Prototyp steht. Echte Beiträge folgen, sobald Konten, Sichtbarkeit und Moderationsrechte eingerichtet sind.',
      status: 'Hinweis',
      review: 'Stand 16. September 2026'
    }
  ]
};
