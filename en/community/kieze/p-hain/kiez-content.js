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
      title: "Move valves regularly",
      text: "A possible maintenance note: rarely used valves can occasionally be moved carefully. What is appropriate and safe for each component needs to be added by a qualified person and supported by a source.",
      status: "Draft · expert review pending",
      review: "no review date set"
    },
    {
      id: 'PHAIN-KNOW-002',
      title: "Building knowledge wanted",
      text: "Contacts, recurring tasks and useful details about the building should be collected here in a traceable way.",
      status: "open collection",
      review: "no entries yet"
    }
  ],
  board: [
    {
      id: 'PHAIN-BOARD-001',
      title: "P-Hain is open",
      text: "The public prototype is ready. Real contributions will follow once accounts, visibility and moderation permissions are set up.",
      status: "Note",
      review: "As of 16 September 2026"
    }
  ]
};
