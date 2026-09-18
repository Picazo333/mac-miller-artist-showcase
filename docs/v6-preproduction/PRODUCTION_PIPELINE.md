# Production Pipeline v1 — V6 Visual System

## 0. Objective

The V6 implementation is not a reinterpretation of the approved visual concepts. The approved visual references are the design source of truth.

### Definition of Done — visual

A scene is complete only when the implemented render is perceptually equivalent to the approved reference, or objectively improves it through:

- clean semantic typography replacing generated pseudo-text;
- production-quality easter eggs;
- restrained HTML/CSS interaction;
- accessible motion;
- responsive recomposition;
- better technical rendering without changing the visual thesis.

A technically valid scene that loses the approved composition, focal point, spatial hierarchy, palette, lighting or atmosphere is **FAIL**.

---

# 1. Architecture decision

Each scene uses four production layers:

```text
SEMANTIC HTML
titles / microcopy / CTA / audio / labels / accessibility
        ↓
SELECTIVE SVG + INTERACTION
easter eggs / transitions / small animated structures
        ↓
AMBIENT CSS
light / grain / glow / opacity / restrained motion
        ↓
CLEAN MASTER BACKGROUND
80–90% of the cinematic visual language
```

## Explicitly rejected architecture

Do not attempt to rebuild approved cinematic backgrounds from many independent SVG primitives.

SVG exists only where vector separation creates measurable value:
- interaction;
- responsive repositioning;
- animation;
- continuity between scenes;
- semantic/hit-area utility.

---

# 2. Source-of-truth hierarchy

```text
Approved Reference
      ↓
Clean Master
      ↓
Scene Contract
      ↓
Production Assets
      ↓
Real Composite
      ↓
Responsive Proof
      ↓
Scene Lock
```

Global specifications are compiled from locked Scene Contracts. Scene Contracts are the authoritative per-scene source of truth.

---

# 3. Scene inventory

| ID | Scene | Visual state | Interaction target |
|---|---|---|---|
| S00 | Home / Larry Fisherman | approved | subtle frog/ripple discovery + CTA |
| S01 | Macadelic | approved | lamp / haze reveal |
| S02 | Watching Movies | approved | CRT power toggle |
| S03 | Faces | approved | mirror / hidden-layer reveal |
| S04 | GO:OD AM | approved | alarm wake-up state |
| S05 | The Divine Feminine | approved | orbital/light reveal |
| S06 | Swimming | approved | light/water-caustic reveal |
| S07 | Circles | approved | sphere/ring pulse |
| S08 | Archive | approved | 5–7 object disclosures |
| S09 | Memorial | approved | stage spotlight toggle |
| S10 | Celebration of Life | approved | pixel collaborator disclosures |

---

# 4. Global narrative rule

The central album journey uses **documented context → artistic distortion**.

The distortion value describes visual composition only. It must never be presented as a medical, psychiatric or psychological score.

Narrative arc:

```text
pixel calm
→ rising turbulence
→ perceptual distortion
→ maximum fragmentation
→ recomposition
→ intimacy / formal stability
→ renewed turbulence
→ quiet repetition
→ archive / evidence
→ absence
→ communal pixel epilogue
```

Home and Celebration are exempt from the distortion system.

---

# 5. Clean Master production

## 5.1 Purpose

A Clean Master is the approved scene with interface-like generated content removed while preserving its visual world.

### Remove

- generated navigation;
- large generated titles that must become HTML;
- generated paragraphs;
- generated CTAs;
- fake tracklists;
- pseudo-text;
- incorrect factual labels.

### Preserve

- architecture;
- character pose;
- approved silhouette;
- lighting;
- props;
- textures;
- correct diegetic text such as `LARRY` or `DON'T TRIP`;
- meaningful visual easter eggs;
- environment;
- perspective;
- palette.

## 5.2 Reference Protection Map

Before each Clean Master edit, classify elements:

### LOCK
Must remain visually unchanged.

### CLEAN
Must be removed and reconstructed behind.

### FLEX
May be subtly reconstructed to restore clean space.

The operation must prefer **editing the approved reference** over regenerating a new interpretation.

## 5.3 Human-in-the-loop

Each scene gets three mandatory checkpoints:

1. **HITL-A — Clean Master**
2. **HITL-B — Desktop composite with real HTML + production easter eggs**
3. **HITL-C — Responsive proof**

Any failed checkpoint creates a repair round. No silent promotion.

---

# 6. Generation budget

Expected production image operations:

- 11 Clean Masters;
- 3–6 expected repair edits;
- 2–4 mobile alternates only if cropping fails.

Expected range: **16–21** image operations.

Hard stop: **25**. If more than 25 are needed, pause and diagnose the pipeline rather than continuing to regenerate.

All visual generations are shown to the user in small batches, preferably one scene at a time.

---

# 7. Scene Contract

Every scene must be fully described by `SCENE_CONTRACT_TEMPLATE.yaml`.

The Scene Contract absorbs what would otherwise be separate hand-maintained documents for:
- narrative matrix;
- safe areas;
- interaction map;
- responsive map;
- easter-egg list;
- scene-specific asset manifest.

Derived views may be generated later, but the Scene Contract remains authoritative.

---

# 8. Copy system

The interface intentionally avoids long AI-style prose.

Per narrative scene:

1. album/section name — required;
2. microcopy — optional;
3. CTA — normally required for album listening or progression.

### Microcopy target

5–12 words preferred.  
18 words hard maximum.

No generic pseudo-poetry. Copy should be specific, human and restrained.

---

# 9. Easter-egg interaction grammar

Interactions must feel like discoveries, not game mechanics.

Supported primitives:

| Primitive | HTML/CSS mechanism | Use |
|---|---|---|
| Toggle | checkbox + label | light / CRT / reveal state |
| Disclosure | details + summary | archive facts / collaborator notes |
| Navigation | anchor | scene progression |
| Hover/focus | CSS | anticipation only; never required content |

Keyboard access is mandatory.

## 9.1 Interaction density

Narrative album scenes: normally **one meaningful interaction** each.

Archive: **5–7** object disclosures.

Celebration: collaborator sprites may each reveal one concise factual line.

## 9.2 Proposed interactions

### S00 Home
Frog/lily-pad interaction creates a restrained ripple. Main CTA: **Seguir la corriente**.

### S01 Macadelic
Lamp toggle reveals a warmer/hazier secondary visual layer.

### S02 Watching Movies
CRT power control activates glow, scanlines and selected hidden references.

### S03 Faces
Mirror interaction reveals a secondary reflection layer without changing the full composition.

### S04 GO:OD AM
Alarm interaction creates the wake-up state: time/light/door emphasis.

### S05 The Divine Feminine
Small orbital object activates backlight/orbit treatment around the approved high-ponytail silhouette.

### S06 Swimming
Light control reveals water-caustic treatment across the room.

### S07 Circles
Floating sphere triggers one restrained ring expansion.

### S08 Archive
5–7 physical objects reveal one-line factual notes. Candidate objects:
- Larry Fisherman cassette/object;
- Pittsburgh artifact;
- DON'T TRIP / Tiny Desk reference;
- 2009 marker;
- reel/tape chronology;
- Most Dope artifact;
- one era-specific archive object.

### S09 Memorial
A stage control activates the spotlight, revealing the empty microphone, rug, cap and restrained powder traces.

### S10 Celebration
Click/focus on a sprite reveals name + one concise collaboration reference. Mac's halo may receive a subtle emphasis state.

---

# 10. SVG policy

Do not use an SVG when the approved raster already communicates the object perfectly.

### Use raster when
- the object is part of the cinematic background;
- it does not move;
- it does not need responsive repositioning;
- it does not need to become a clickable hit area.

### Use SVG when
- animation adds meaning;
- it moves between breakpoints;
- it bridges scenes;
- it requires an independent interactive state;
- vector sharpness is useful.

### Use HTML when
- it is interactive;
- it contains factual/semantic content;
- it must be keyboard accessible.

Target production SVG count: approximately **18–24**, not a quota.

An SVG that does not improve the final composite is deleted.

---

# 11. Composite proof

The first meaningful implementation proof is not an isolated asset. It is:

```text
Clean Master
+ real semantic HTML
+ approved SVG
+ CSS ambient treatment
+ real interaction state
```

The composite is compared directly against the frozen reference.

## Visual Fidelity Gate

A composite must pass:

- Composition Fidelity
- Spatial Fidelity
- Character Fidelity
- Lighting Fidelity
- Palette Fidelity
- Density Fidelity
- Typography Improvement
- Easter Egg Integration
- Scene Identity
- Interaction Quality

Failure of the first six is a scene-level FAIL.

---

# 12. Responsive system

Required proof widths:

- 1440
- 1024
- 768
- 390

1920 is a sanity check, not a blocking target.

Mobile is a recomposition, not a squeezed desktop layout.

### Default strategy

First attempt: crop/reposition the desktop Clean Master.

Generate a separate mobile master only when the dominant idea cannot survive a crop.

Each Scene Contract defines:
- focal point;
- protected zones;
- desktop position;
- tablet position;
- mobile crop;
- optional alternate mobile master.

---

# 13. Accessibility

Every interaction must work by keyboard.

Decorative SVG:
`aria-hidden="true"`.

Informative SVG:
`<title>` + `<desc>`.

Required:
- visible focus;
- semantic headings;
- DOM reading order independent from background art;
- no required information encoded solely in image, color or motion;
- native audio controls where audio remains.

Reduced motion must preserve meaning.

---

# 14. Performance

Production backgrounds:
- archival source retained separately;
- production AVIF preferred;
- WebP fallback;
- no multi-megabyte PNG delivery unless unavoidable.

Initial targets:
- AVIF master: ~180–350 KB where visually acceptable;
- WebP fallback: ~250–450 KB;
- individual SVG: most ≤25 KB, soft ceiling ~80 KB;
- first viewport target <700 KB;
- first meaningful scene target <1 MB;
- full lazy-loaded experience target ~4–6 MB.

These are budgets, not excuses to visibly degrade approved art.

Home gets priority loading. Below-fold media is lazy-loaded.

---

# 15. Per-scene quality requirements

## S00 Home
LOCK:
- top-down pixel Mac;
- `LARRY` cap;
- fishing;
- small lake;
- lily pad + frog;
- negative space.

Do not add album-collage complexity.

## S01 Macadelic
LOCK:
- interior/night world;
- smoke;
- balcony/city;
- romantic-chemical ambiguity;
- medium-high distortion.

Must remain less fragmented than Faces.

## S02 Watching Movies
LOCK:
- room;
- CRT;
- Star Room logic;
- mirror;
- aquarium;
- Mac;
- dark analog atmosphere.

Avoid generic retro-TV styling.

## S03 Faces
LOCK:
- recursive architecture;
- masks/faces;
- impossible rooms;
- rain/funeral/Diablo visual vocabulary;
- maximum scene density.

No later scene may exceed its instability.

## S04 GO:OD AM
LOCK:
- cleaner geometry;
- morning/recomposition;
- clock/alarm;
- doors;
- restrained residual anomaly.

Automatic FAIL if it becomes generic luxury-interior imagery.

## S05 The Divine Feminine
LOCK:
- warm romantic architecture;
- approved high-ponytail feminine silhouette;
- portal/negative-space role;
- floral/orbital vocabulary.

Do not reduce to generic pink romance or a celebrity poster.

## S06 Swimming
LOCK:
- room first;
- water invading architecture;
- Mac;
- portal/window;
- ladder;
- introspective atmosphere.

Automatic FAIL if it becomes a generic ocean scene.

## S07 Circles
LOCK:
- ivory/quiet architecture;
- circular aperture;
- repetition;
- calm;
- breathing room.

Avoid over-decoration.

## S08 Archive
LOCK:
- extremely long archival table;
- intentionally dense trajectory easter eggs;
- warm dark archive;
- deep perspective;
- Pittsburgh / Larry Fisherman / Most Dope / Tiny Desk / era artifacts.

Classify generated labels:
A = correct → preserve.
B = visually harmless but illegible → texture only.
C = incorrect → remove/rebuild.

Interactive objects use real HTML disclosures.

## S09 Memorial
LOCK:
- empty stage;
- microphone;
- red velvet rug;
- restrained white powder traces;
- `DON'T TRIP` cap;
- spotlight.

No dominant Mac portrait. No giant Circle-style portal.

## S10 Celebration
LOCK:
- black stage;
- pixel-art collaborators;
- Mac centered;
- halo;
- simple composition.

No photoreal shrine conversion.

---

# 16. Scene Lock

A scene becomes `SCENE_LOCKED` only when all are true:

```text
Clean Master APPROVED
Scene Contract APPROVED
Production assets APPROVED
Desktop composite APPROVED
Interaction PASS
1024 PASS
768 PASS
390 PASS
Keyboard PASS
Reduced-motion PASS
Visual fidelity PASS
Performance budget PASS
```

No `almost done` state is accepted for final integration.

---

# 17. Pre-Repo Gate

Runtime implementation remains locked until:

- 11/11 approved Clean Masters;
- 11/11 approved Scene Contracts;
- all required production SVGs approved;
- 11/11 desktop composites approved;
- 11/11 mobile proofs approved;
- copy final;
- interactions proven;
- final Visual Spec compiled;
- final Technical Spec compiled;
- final Asset Manifest compiled;
- preintegration QA PASS;
- final red-team PASS.

At this point GitHub implementation should be assembly rather than design.

---

# 18. Final pre-repo red team

Run at least these attacks:

1. **No-SVG test** — page should still look excellent without overlays.
2. **No-motion test** — narrative still works with motion disabled.
3. **390px test** — every scene remains composed.
4. **Slow-network test** — Home loads acceptably and lower scenes defer.
5. **Freeze-vs-render test** — implementation still looks like the approved work.
6. **Keyboard-only test** — all easter eggs remain reachable/understandable.
7. **Pseudo-text test** — no accidental generated fake copy remains semantically important.
8. **Album-specificity test** — each album scene remains distinguishable without reading its heading.

---

# 19. GitHub implementation after unlock

Use an isolated implementation branch.

Recommended sequence:

1. semantic HTML skeleton;
2. background delivery system;
3. global CSS tokens;
4. first scene block;
5. scene-level visual regression;
6. subsequent scene blocks;
7. responsive;
8. accessibility;
9. performance;
10. rubric eval + repair;
11. final Pagespeed;
12. required screenshot evidence;
13. remote/commit verification;
14. merge/deploy only after all gates pass.

Implementation should not reopen major art-direction decisions.

---

# 20. Final academic Definition of Done

The site is not finished until:

- 11/11 visual fidelity PASS;
- 44/44 required viewport proofs PASS;
- all interactions PASS;
- reduced motion PASS;
- semantic HTML PASS;
- HTML/CSS-only requirement PASS;
- accessibility PASS;
- SEO PASS;
- PageSpeed ≥80 hard floor;
- internal performance target ≥95 where feasible without visual degradation;
- full rubric evidence PASS;
- required PageSpeed PNG committed;
- audited commit equals deployed commit.

