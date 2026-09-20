# Final QA — Director's Cut Balanced CSS-only delivery

## Structural

- [x] 11 narrative scenes exist.
- [x] Internal scene anchors are unique.
- [x] `index.html` references `styles.css`.
- [x] No executable JavaScript is present.
- [x] Schema.org microdata remains present.
- [x] About, Career and Upcoming Shows remain present.
- [x] All local runtime asset references resolve in the repository.
- [x] The approved Director's Cut implementation spec is stored in `docs/DIRECTORS_CUT_BALANCED_SPEC.md`.

## Director's Cut visual layer

- [x] Cinematic Color Script is parameterized per scene.
- [x] Seven album scenes receive restrained environmental typography.
- [x] Signal Lights 2.0 reuse native `details/summary`.
- [x] Focus Theatre uses scene-local dimming rather than JavaScript.
- [x] Persistent album cards and fact cards use the Etched Glass system.
- [x] Archive uses Forensic Lite on desktop/tablet and degrades to halo + card on mobile.
- [x] Ritual Scroll level 2 is implemented as restrained scene-exit grading.
- [x] Scroll-driven camera breathing was removed after runtime profiling showed worse scroll performance; the final build keeps the stronger static cinematic treatment without that effect.
- [x] High-contrast and reduced-motion preferences have dedicated fallbacks.

## Faces golden scene

- [x] Approved Faces master remains unchanged.
- [x] `assets/overlays/s03-faces-board-patch.svg` exists.
- [x] `assets/overlays/s03-faces-board-art.webp` contains the exact approved patch artwork, optimized to ~320 px source width for its small rendered size.
- [x] Patch uses full-frame `viewBox="0 0 1672 941"`.
- [x] Patch is decorative and loaded independently of the master.
- [x] Faces receives the highest approved cinematic / living-light intensity.
- [x] Visual runtime proof: board words fully covered at 390 / 768 / 1024 / 1440 / 1920.
- [x] Visual runtime proof: patch does not cover Mac or protected focal details.

## Interaction

- [x] Home retains its native CSS-only water/light interaction.
- [x] Seven album scenes use native fact-card disclosures.
- [x] Album fact cards retain supporting source links.
- [x] Archive uses four meaningful native disclosure easter eggs.
- [x] Memorial uses a native disclosure on the microphone.
- [x] Related fact disclosures share a native `name` group so only one stays open at a time in supporting browsers.
- [x] No interaction requires executable JavaScript.
- [x] Keyboard focus remains visible.
- [x] Reduced-motion fallback exists.
- [x] Mobile fact cards are scene-contained rather than viewport-fixed.

## Celebration

- [x] Runtime uses `assets/s10-celebration-composite.webp`.
- [x] The runtime composite decodes in a real browser. The previously shipped file was truncated
      (VP8 chunk declared 70 436 bytes, file held 12 158) and rendered nothing; it was re-encoded
      from the approved source and verified in Chromium at 1440x900, 390x844 and 1920x1080.
- [x] The approved source master is stored in the repository at
      `assets/sources/homenaje_pixelado_bajo_la_luna.png`, 1672x941, sha256 `097988f0…259f`,
      matching `docs/v6-preproduction/scenes/S10-celebration-of-life.yaml`.
- [x] Moon, halo, floor reflections and all six figures are present and uncropped at every checked
      width; mobile keeps `object-fit: contain` so no collaborator is cropped.
- [x] The old six-sprite layout is deprecated and is not the visual runtime.
- [x] The six represented collaborators remain documented in screen-reader-only HTML.
- [x] No independent sprite box can crop a collaborator.
- [x] Director's Cut only adds restrained grading; no new interaction is introduced.

## Content / navigation

- [x] All seven album secondary CTAs read `Siguiente →`.
- [x] Album descriptions remain visible in their editorial cards.
- [x] Fact cards remain separate from persistent album descriptions.
- [x] Archive facts are object-relevant and source-linked where factual attribution is needed.
- [x] Upcoming Shows does not invent future performances.
- [x] No new generic motivational copy was introduced.

## Static branch audit

- [x] 11 scenes.
- [x] 0 duplicate IDs.
- [x] 0 broken internal anchors.
- [x] 0 missing local runtime assets.
- [x] 0 executable scripts.
- [x] 7 environmental ghost-title elements.
- [x] 12 grouped fact disclosures.
- [x] CSS brace structure passes.
- [x] Faces SVG root/viewBox checks pass.

## Responsive evidence gate

Required runtime screenshots / checks:

- [x] 390x844
- [x] 768x1024
- [x] 1024x768
- [x] 1440x900
- [x] 1920x1080

Sanity checks:

- [x] 360 wide
- [x] 430 wide
- [x] 1366 wide

## Resolution policy

- Approved masters remain the semantic source of truth.
- No CSS upscale is treated as a resolution improvement.
- Higher-resolution variants are optional and may only be created from approved source masters without semantic reinterpretation.
- Responsive `srcset` is deferred unless native-source variants provide a measurable quality benefit without harming PageSpeed.

## Remaining evidence gate after deploy

- [x] Validate deployed GitHub Pages, not an older cached build.
- [x] Confirm visual fidelity of Faces and Archive interactions in the deployed runtime.
- [x] Run PageSpeed Insights against the deployed final URL.
- [x] Confirm Performance >= 80 — final mobile Lighthouse Performance: 100.
- [x] Confirm SEO / Accessibility / Best Practices results — all 100.
- [x] Store the required PageSpeed evidence PNG in the repository at `docs/evidence/pagespeed-mobile-final.png`.
- [x] Confirm the deployed runtime contains the approved final features and hotfix overlays for `966f86b7248a275158a21a268ee4bd3994d914be`.

## Final raster-copy cleanup

- [x] Circles baked quote and fake CTA are visually removed by `assets/overlays/s07-circles-cleanup.svg`.
- [x] Archive baked catalogue copy, fake CTA and dead chronology are visually removed by `assets/overlays/s08-archive-cleanup.svg`.
- [x] Both cleanup plates are CSS-only, decorative and pointer-event-free.
- [x] No master raster, interaction, hotspot, navigation or JavaScript behavior changed.
- [x] Post-hotfix PageSpeed independently remains above the required threshold: Performance 99, Accessibility 100, Best Practices 100, SEO 100.

## Final deployed Lighthouse

- Performance: **100**
- Accessibility: **100**
- Best Practices: **100**
- SEO: **100**
- FCP: **0.9 s**
- LCP: **1.5 s**
- TBT: **0 ms**
- CLS: **0**
- Speed Index: **0.9 s**
- Evidence: `docs/evidence/pagespeed-mobile-final.png`

## Definition of Done

No unchecked item above may be converted to PASS without runtime evidence.
