# Blob's Heart & Hound raccoon

`assets/blob-raccoon.js` supplies the scoped appearance and finite greeting animation. `blob.js` loads the small module only for the service, meeting-place view and calendar. Other areas retain their existing character.

`isContext()` recognises the service and all child routes, including English, the walking map with the explicit service ID, and the `CICEK` calendar. Shared views update their URL synchronously from click/change handlers; a microtask checks the scope after those handlers. History navigation is observed too. No polling or replacement of browser history functions is used.

The approved three transparent character illustrations are reused. The small face loads in an active context; body poses load on opening Blob. The SVG greeting reuses the same waving WebP for the body and clipped foreleg. Its masks and pivot use a 710 × 800 reference frame and belong to that particular pose; update them together if the artwork changes. There is no video or canvas rendering.

The greeting lasts 2.6 seconds. Clicking the figure replays it; closing the panel or hiding the page cancels it. The local `gemden_blob_raccoon_motion_v1` preference stores only `on` or `off`. The operating system's reduced-motion preference always takes precedence. No account setting or server data is changed.

Maintain German and English together via `translations/en.json`, then run `build-learning.mjs` and `build-languages.mjs`. The scope and motion policy are covered by `tests/blob-raccoon.test.cjs`.
