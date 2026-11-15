# Website languages

German is the maintained source. English pages live under `/en/` and use the same layouts, IDs, forms, service relationships and account backend. The site does not call a machine translation service at runtime. Personal messages, profiles, tickets, calendar event titles and other member-written content stay in the author's language.

## Adding or changing content

1. Edit the German page, shared script or public catalogue once.
2. Run `npm run build:languages` (or `node scripts/build-languages.mjs`).
3. The build reports missing source strings in `translations/missing-en.json`. Add their English wording to `translations/en.json`. Keys are the exact German source with whitespace normalised; values are English text. Keep proper names, IDs, units, numerical limits, publication rules and privacy promises intact.
4. Run the build again and commit the source, dictionary and generated `/en/` output together.
5. `npm run check:languages` verifies coverage and that the generated version is current. The Translation completeness GitHub workflow runs this check on pull requests and main, alongside language-specific regression checks.

English is generated from the common source rather than maintained as a second hand-edited website. Do not edit generated `/en/` files directly. New layouts, shared images and functional changes need one implementation; only new or changed wording needs a translation. Existing translations are reused. New interactive widgets must keep user-written values separate from built-in UI labels. The string detector flags text and common German UI literals; unusual dynamic wording should be added explicitly to the dictionary and verified in the English view.

`en-search-terms.json` holds English equivalents for rule-based navigation and matching terms. Technical IDs, API actions, form values and selectors remain stable. The parser under `scripts/vendor/` is a build-only MIT-licensed tool from the npm registry; it is not loaded by visitors.

## Navigation, accounts and reference material

- DE/EN switches the same page and retains query parameters and anchors. Language preference is stored only on that browser. Direct English links open English even if an earlier preference was German. Static language links and English page text also work without JavaScript.
- Both languages share the same origin and existing account/session. Permissions, publication gates and private data storage do not change. Password-recovery callbacks keep the existing canonical `/konto/` URL; the local language preference then selects its English counterpart.
- Images and third-party libraries are reused from their original paths. English scripts, styles and built-in public catalogues are generated on publication; visitors do not download the translation dictionary or a translator library.
- The FFE system index is translated for orientation. The original German source is still explicitly linked and remains the reference. Institutional IDs, source document names and the current/experimental/archive distinctions are preserved.
- Proper names remain: GemDen, FriedenFreudeEierkuchen, FFE, Blob, Rubybubys, Rubybubys Herz und Schnauze, P-Hain, Travelkiez, ThreeDen and Çiçek.
