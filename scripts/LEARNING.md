# Learning-house content

Edit German and English together in `learning-data.mjs`. The three longer guides live in `learning-pilots/de-*.md` and their structurally matching `en-*.md` counterparts. The video exercise is in `learning-video.mjs`.

Run `node scripts/build-learning.mjs`, then `node scripts/build-languages.mjs`. Commit the resulting German pages, English output and translation dictionary with the source change. Both generators support `--check`; CI detects stale output.

Source links belong to the section they support. Check the original article and intended scope before adding clinical or behavioural advice. Keep media provenance and the extent of any video review in the private work record. Do not copy third-party video files or images into the site. YouTube players load only after the visitor presses the explicit load button; direct original-provider links remain available.

Generated woodland illustrations are decorative. The optional CSS light animation is decorative too. Neither is evidence of an animal's emotional state or a demonstration of a medical procedure.
