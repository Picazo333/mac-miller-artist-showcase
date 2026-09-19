# Phase 2 — global propagation S00–S10, runtime visual proof

Rendered from `index.html` with headless Chromium (Playwright), `prefers-reduced-motion: reduce`,
device scale factor 1, sRGB, against branch `claude-director-cut-repair`. Runtime captures of the
real page, not mockups.

## Contact sheets

| File | Shows |
|---|---|
| `contact-1440x900-closed.webp` | All eleven scenes, resting state, desktop |
| `contact-1440x900-open.webp` | Every available open state, desktop (13 disclosures: one per album scene, four for Archive, one for Memorial) |
| `contact-390x844-closed.webp` | All eleven scenes, resting state, phone |
| `contact-390x844-open.webp` | Every available open state, phone |
| `contact-1440x900-closed-BEFORE-phase2.webp` | The same desktop sheet at the Phase 1 commit, for comparison |

Celebration has no disclosure by design, so it appears in the closed sheets only.

## Individual proofs

`s01-macadelic-*`, `s08-archive-*` (closed plus two of the four object states),
`s09-memorial-*`, `s10-celebration-*`, and `s08-archive-390-open.webp`.

## Golden Faces regression gate

`GATE-faces-*` are Faces re-rendered at the end of Phase 2. Each one is **pixel-identical** to the
Phase 1 proof in `../phase1-faces/` — zero differing pixels across all four states, verified by
full-frame RGB comparison after every shared change. Faces was frozen, not re-approved by eye.

Two shared-refactor regressions were caught by that gate during Phase 2 and fixed before this
commit: the Faces patch lost its phone-width crop sync (`object-position: 55% 54%`) when the
shared block was rewritten, and the persistent-card hairline changed alpha. Both were restored to
the Phase 1 values.

## Known defect, not caused by this work

`assets/s10-celebration-composite.webp` is **truncated**: its VP8 chunk header declares 70 436
bytes while the file is 12 158. No browser can decode it, so Celebration renders as an empty dark
field with a broken-image marker. It is the only image on the site that fails to decode (1 of 12).
The only copy in the whole repository history is the same truncated blob, so there is nothing to
restore from. The two `s10-celebration-*-BROKEN-ASSET.webp` files record that state. Celebration's
CSS direction is complete and asset-independent; it will read correctly the moment an intact
composite lands at the same path.

## Verification performed

- **Geometry**, scripted at 390x844, 768x1024, 1024x768, 1440x900, 1920x1080 and the 360 / 430 /
  1366 sanity widths, for every disclosure in both states: fact card inside its own scene, no
  overlap with the persistent editorial card, no overlap with a CTA, no horizontal document
  overflow.
- **Hit testing** at 360, 390 and 430: every Signal Light remains the topmost element at its own
  centre point in both the closed and the open state, so no card can swallow the control that
  closes it.
- **Keyboard**: all 13 disclosures open and close with `Enter` from keyboard focus, each with an
  `aria-label`; `:focus-visible` outline preserved.
- **Reduced motion**: animations `none`, transitions `0s`, while the grade and the Focus Theatre
  state change survive.
- **High contrast**: opaque editorial surfaces, `backdrop-filter: none`, ghost typography reduced,
  grade preserved.
- **Performance**: full-page scroll, median of three runs. This build is faster than the
  pre-Phase-2 baseline (p95 frame 17.5 ms vs 31.3 ms, frames over 50 ms 0 vs 1) because the
  scroll-driven camera breathing was removed — every scene now carries a raster filter, and
  re-rasterising a filtered full-frame plate each scroll tick cost more than the effect was worth.
