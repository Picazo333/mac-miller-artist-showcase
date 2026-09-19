# Phase 1 — Faces Golden Scene, runtime visual proof

Rendered from `index.html` with headless Chromium (Playwright), `prefers-reduced-motion: reduce`,
device scale factor 1 except where noted, against commit of branch `claude-director-cut-repair`.
These are runtime captures of the real page, not mockups.

| File | Shows |
|---|---|
| `faces-1440x900-closed.webp` | Acceptance viewport, resting state |
| `faces-1440x900-open.webp` | Acceptance viewport, fact disclosure open (Focus Theatre) |
| `faces-390x844-closed.webp` | Mobile acceptance viewport, resting state |
| `faces-390x844-open.webp` | Mobile acceptance viewport, fact open, card scene-contained |
| `faces-768x1024-open.webp` | Tablet acceptance viewport, fact open |
| `faces-1920x1080-closed.webp` | Large desktop acceptance viewport, resting state |
| `board-patch-coverage-8-viewports.webp` | Board patch close-up at 390 / 768 / 1024 / 1440 / 1920 / 360 / 430 / 1366, captured at DPR 2 |
| `board-before-patch-1440.webp` | The board before the fix — the patch was not rendering |
| `board-after-patch-1440.webp` | The same crop with the patch rendering and covering the Spanish copy |

## What the board captures prove

Before this branch the patch SVG referenced its artwork with a relative `href`. Browsers refuse to
load external resources from an SVG that is itself loaded through `<img>`, so the element was in the
DOM, reported `complete === true`, and painted nothing. `board-before-patch-1440.webp` is that state:
the Spanish board copy (`¿IDEAS / ANSIEDAD / DISCIPLINA / PLACER / FUTURO / ¿QUIÉN SOY?`) is fully
legible.

`board-after-patch-1440.webp` and the eight-viewport sheet show the approved patch artwork rendering
in the master's coordinate system, fully covering that copy, with Mac, the candles, the skull, the
mask cluster and the surrounding reflection field untouched.

## Verification method

- Board coverage and focal protection: visual inspection of the eight close-ups above.
- Layout: scripted geometry assertions at all eight viewports — fact card inside the Faces section,
  no overlap with the persistent editorial card, no horizontal document overflow.
- Scope: full-page pixel diff of all eleven scenes against the pre-change tree at 1440x900 and
  390x844. Every scene other than Faces is byte-identical; Faces changes across ~89% of its pixels.
- Accessibility: keyboard `Enter` toggles the native disclosure, `:focus-visible` outline preserved,
  `prefers-reduced-motion: reduce` disables every animation and transition while keeping the grade
  and the Focus Theatre state change, `prefers-contrast: more` restores opaque editorial surfaces.
