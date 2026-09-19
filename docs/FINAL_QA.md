# Final QA — CSS-only delivery

## Structural

- [x] 11 narrative scenes exist.
- [x] Internal scene anchors are unique.
- [x] `index.html` references `styles.css`.
- [x] `v6.css` and `v6.js` are no longer part of the runtime.
- [x] No executable JavaScript is present.
- [x] Schema.org is implemented with HTML microdata.
- [x] About, Career and Upcoming Shows are present.
- [x] All local runtime asset references resolve in the repository.

## Interaction

- [x] Home retains a visible warm Signal Light controlling its water/light interaction.
- [x] Seven album scenes use native `details/summary` fact cards.
- [x] Album fact cards include supporting source links.
- [x] Archive uses four native disclosure easter eggs.
- [x] Memorial uses a native disclosure on the microphone.
- [x] Celebration uses six native sprite disclosures.
- [x] No interaction requires JavaScript.
- [x] Keyboard focus is visible.
- [x] Reduced-motion fallback exists.

## Content / navigation

- [x] All seven album secondary CTAs read `Siguiente →`.
- [x] Album descriptions remain visible in their editorial cards.
- [x] Fact cards are separate from the persistent album descriptions.
- [x] Upcoming Shows does not invent future performances.

## Sprite treatment

- [x] Sprites use real `img` elements rather than cropped CSS background layers.
- [x] Sprite images use `object-fit: contain`.
- [x] Mobile layout reflows to a 3-column grid instead of cropping characters.
- [x] Edge/reflection clipping is softened with a CSS mask.

## Remaining evidence gate

After merge/deploy:

- [ ] Run PageSpeed Insights against the deployed final URL.
- [ ] Confirm Performance >= 80.
- [ ] Confirm current SEO result.
- [ ] Save the required PageSpeed evidence PNG in the repository.
- [ ] Validate the deployed final URL, not an older cached build.

## Known source limitation

The approved scene masters were generated at approximately 1536–1672 px wide. The site does not intentionally upscale or re-interpret them; additional detail beyond the approved source resolution would require a separate super-resolution pass.
