# Claude Code Task — Director's Cut Repair

## Mission

Repair the current Director's Cut implementation so the **runtime visibly reaches the level of the approved Faces visual proof**, rather than merely containing subtle technical effects.

This is a **visual calibration and implementation task**, not a redesign.

The current production architecture is valid, but the visual layer is under-calibrated. Treat the current CSS as a baseline that must be strengthened and corrected.

## Hard constraints

- Work only on branch `claude-director-cut-repair`.
- Do not modify approved scene masters.
- Do not regenerate scene artwork.
- Do not introduce executable JavaScript.
- Keep `styles.css` canonical.
- Preserve scene order S00–S10.
- Preserve current navigation, copy, CTAs, SEO, Schema.org, About, Career and Upcoming Shows.
- Celebration remains a single approved composite. Do not reintroduce independent sprite layout.
- Keep native `details/summary` interactions.
- Do not invent new copy, facts or visual motifs.
- Do not propagate to all scenes until Faces passes the Golden Scene gate.

## Source-of-truth files

Read these before editing:

- `docs/DIRECTORS_CUT_BALANCED_SPEC.md`
- `docs/FINAL_QA.md`
- `docs/v6-preproduction/scenes/S03-faces.yaml`
- `docs/v6-preproduction/INTEGRATION_MANIFEST.yaml`
- `index.html`
- `styles.css`

## Current failure diagnosis

The current implementation is technically present but visually too weak:

- grading is too subtle;
- environmental typography is barely visible;
- Etched Glass is too similar to the old card treatment;
- Focus Theatre does not change the scene enough;
- local light signatures are too small/weak;
- Faces does not visually reproduce the approved proof;
- the Faces patch must be verified visually, not merely present in DOM.

The approved target is a clearly visible, cinematic, warm carmine/amber treatment that changes the perceived skin, atmosphere and depth of Faces while preserving the master composition.

## Phase 1 — Faces Golden Scene ONLY

Do not touch other scene calibration until Faces passes.

### A. Faces board patch

Verify that:

- `assets/overlays/s03-faces-board-patch.svg` is actually rendered;
- it wraps the exact approved patch art;
- it covers the disliked Spanish board words in the master;
- it stays aligned with the same responsive crop as the Faces master;
- it does not obscure Mac or protected focal details.

If positioning is wrong, adjust the SVG wrapper coordinates or scene-art alignment only. Do not alter the Faces master.

### B. Faces grading target

Faces must have the strongest treatment in the site.

Starting target variables:

```css
.scene--faces{
  --grade-a:102,18,18;
  --grade-b:186,86,33;
  --heat-rgb:218,119,56;
  --grade-strength:.34;
  --focus-dim:.26;
  --ghost-opacity:.16;
  --ghost-size:clamp(96px,13vw,210px);
  --ghost-x:4%;
  --ghost-y:43%;
  --ghost-rotate:-3deg;
  --signal-rgb:236,162,79;
}
```

These are calibration starting points, not immutable values. Iterate visually.

### C. Faces layer model

Use a clear layer stack:

1. master raster;
2. Faces patch;
3. cinematic grade;
4. vignette/shadow shaping;
5. environmental `FACES` title;
6. existing editorial card;
7. Signal Light;
8. Focus Theatre / active local light;
9. fact card.

No layer may accidentally hide the patch or the content.

### D. Grading

The closed/resting scene must already look materially different from the old runtime.

Use a combination of:

- warm carmine tonal wash;
- amber heat around the central subject;
- controlled vignette;
- lateral shadow shaping;
- soft-light / multiply only where they preserve facial detail.

Do not rely on a single low-opacity overlay.

### E. Environmental typography

`FACES` must be clearly perceptible but integrated into the image.

It must not look like a second primary heading.

### F. Signal Light

Closed state must be discoverable.

Open state must:
- brighten significantly;
- create a local light field;
- visually connect to the fact-card interaction.

### G. Focus Theatre

When the Faces `details` opens:

- the scene background must visibly dim;
- the inspected region must remain warm/luminous;
- the fact card must become the visual secondary focus;
- the state change must be obvious without comparing screenshots side-by-side.

### H. Etched Glass

The fact card must look materially more premium than the current baseline:

- darker, denser glass;
- restrained warm highlight;
- crisp thin border;
- subtle inset line;
- stronger but controlled depth shadow;
- keep readability excellent.

Avoid generic SaaS glassmorphism.

## Responsive gates for Faces

Verify:

- 390x844
- 768x1024
- 1024x768
- 1440x900
- 1920x1080

Sanity widths:
- 360
- 430
- 1366

At each acceptance viewport verify both:

1. closed/resting state;
2. fact open/active state.

## Accessibility / motion

Preserve:

- keyboard operation;
- focus-visible;
- native details/summary;
- reduced-motion fallback;
- no meaningful information only in pseudo-elements.

## Performance

Do not animate:

- fullscreen blur;
- large filter stacks;
- background-position.

Prefer:

- opacity;
- transform;
- gradients;
- local small-area backdrop filters.

## Golden Scene Definition of Done

Faces is PASS only when all are true:

- approved master unchanged;
- patch visible and covering unwanted board words;
- Faces visibly resembles the approved cinematic proof;
- warm carmine/amber skin and atmosphere are obvious;
- environmental FACES title is perceptible;
- closed state already looks premium;
- open state has a clearly stronger Focus Theatre transition;
- fact card is materially improved;
- no overlap with CTA or protected focal content;
- no overflow at acceptance viewports;
- mobile fact card remains inside Faces;
- no executable JavaScript introduced.

## Required output from Claude Code

When finished with Faces:

1. Do **not** propagate to the remaining scenes.
2. Commit all Faces-only changes to `claude-director-cut-repair`.
3. Return:
   - exact files changed;
   - concise explanation of each change;
   - screenshots or screenshot paths for 1440 closed/open and 390 closed/open if browser tooling is available;
   - any remaining uncertainty;
   - commit SHA.
4. Stop and wait for visual approval.

## Phase 2 — DO NOT START WITHOUT APPROVAL

After Faces is approved, a second instruction will authorize propagation across S00–S10 using scene-specific intensity bands.
