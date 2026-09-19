# Director's Cut Balanced — Final Technical Spec

Status: APPROVED FOR IMPLEMENTATION

## Objective

Elevate the existing 11-scene Mac Miller showcase using CSS-only cinematic treatment while preserving all approved masters, the academic HTML/CSS constraints, accessibility, SEO and current narrative structure.

## Locked decisions

- Preserve all 11 approved masters.
- Preserve scene order S00–S10.
- Preserve current copy, verified facts, CTAs and academic sections.
- No executable JavaScript.
- styles.css remains canonical.
- Celebration remains a single approved composite; do not reintroduce sprite-based layout.
- Faces receives the only new art overlay: an SVG patch covering the Spanish board text.
- New visual systems must degrade safely and may not be required for core functionality.

## Systems

1. Cinematic Color Script
2. Signal Lights 2.0
3. Focus Theatre
4. Etched Glass editorial cards
5. Environmental Typography
6. Archive Forensic Lite
7. Ritual Scroll level 2
8. Accessibility / performance safety layer

## Canonical intensity matrix

| Scene | Cinematic | Ritual Scroll | Editorial | Forensic | Living Light |
|---|---:|---:|---:|---:|---:|
| S00 Home | 4 | 2 | 1 | 0 | 4 |
| S01 Macadelic | 5 | 2 | 2 | 0 | 4 |
| S02 Watching | 5 | 2 | 2 | 0 | 4 |
| S03 Faces | 5 | 2 | 3 | 0 | 5 |
| S04 GO:OD AM | 4 | 2 | 2 | 0 | 4 |
| S05 Divine | 4 | 1 | 2 | 0 | 4 |
| S06 Swimming | 4 | 2 | 2 | 0 | 4 |
| S07 Circles | 5 | 2 | 2 | 0 | 5 |
| S08 Archive | 5 | 1 | 1 | 4 | 4 |
| S09 Memorial | 5 | 1 | 1 | 1 | 4 |
| S10 Celebration | 4 | 1 | 1 | 0 | 3 |

## Faces golden-scene gate

Faces must pass before global propagation:
- approved master remains unchanged;
- Spanish board text fully covered;
- patch does not cover Mac or protected focal details;
- color grade matches the approved visual proof direction;
- one subtle ghost title only;
- Signal Light + Focus Theatre + fact card all work without JavaScript;
- 390 / 768 / 1024 / 1440 / 1920 responsive checks pass;
- mobile fact card remains contained inside the Faces scene.

## Faces overlay strategy

assets/overlays/s03-faces-board-patch.svg

- full-frame SVG viewBox 0 0 1672 941;
- transparent background;
- art positioned in the same coordinate system as the master;
- loaded as a scene art layer and cropped with the exact same object-position as the master;
- decorative only (aria-hidden=true);
- no changes to the Faces master raster.

## Global interaction rule

A native details disclosure is the only interactive primitive for album facts.

When open:
- local Signal Light brightens;
- a scene-local dimmer lowers the rest of the scene slightly;
- a localized light field remains around the inspected object;
- Etched Glass fact card appears;
- no card can escape its scene on mobile.

## Responsive acceptance viewports

- 390x844
- 768x1024
- 1024x768
- 1440x900
- 1920x1080

Sanity widths: 360, 430, 1366.

## Performance guardrails

Do not animate:
- fullscreen blur,
- background-position,
- large filter stacks,
- global box-shadow fields.

Prefer:
- opacity,
- transform,
- gradients,
- pseudo-elements,
- small local backdrop filters.

PageSpeed final Performance must remain >=80.

## Definition of Done

PASS requires:
- 11 scenes intact;
- no executable JavaScript;
- styles.css canonical;
- About / Career / Upcoming Shows preserved;
- Schema.org preserved;
- keyboard and focus-visible preserved;
- reduced motion preserved;
- all internal anchors valid;
- no missing local assets;
- no overflow at acceptance viewports;
- PageSpeed >=80;
- final PageSpeed screenshot stored in repo;
- deployed GitHub Pages build matches approved commit.

No UNVERIFIED item may be promoted to PASS without evidence.