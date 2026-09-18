# V6 Preproduction — Mac Miller Artist Showcase

> **Status:** PRE-INTEGRATION  
> **Runtime code:** LOCKED except for documentation until the Pre-Repo Gate is passed.  
> **Canonical objective:** The implemented site must remain perceptually equivalent to the approved visual references, or improve them only through deliberate overlays, interactions, real typography, responsive composition and validated easter eggs.

## Canonical documents

- `PRODUCTION_PIPELINE.md` — full preproduction-to-GitHub pipeline, quality gates and Definition of Done.
- `SCENE_CONTRACT_TEMPLATE.yaml` — single source-of-truth schema for each scene.
- Existing production code remains unchanged until all 11 scenes are locked.

## Final scene set

1. S00 — Home / Larry Fisherman
2. S01 — Macadelic
3. S02 — Watching Movies with the Sound Off
4. S03 — Faces
5. S04 — GO:OD AM
6. S05 — The Divine Feminine
7. S06 — Swimming
8. S07 — Circles
9. S08 — Archive
10. S09 — Memorial / Absence Present
11. S10 — Celebration of Life

## Frozen decisions

- Master architecture: **clean raster master + semantic HTML + CSS + a small number of production SVG overlays**.
- Do not reconstruct cinematic scenes out of dozens of SVGs.
- Home and Celebration remain pixel-art scenes.
- The Divine Feminine keeps the high-ponytail feminine silhouette as the dominant portal motif.
- Memorial remains absence-first: empty stage, microphone, red velvet rug, restrained white powder traces, `DON'T TRIP` cap.
- Archive uses the approved long, densely populated archival table as its master visual.
- Copy is intentionally minimal: scene/album name, optional microcopy, CTA.
- Interactive easter eggs use HTML/CSS primitives where possible; JavaScript is not required for the narrative.
- GitHub runtime implementation begins only after the Pre-Repo Gate in `PRODUCTION_PIPELINE.md` passes.

## Status model

```text
REFERENCE_FROZEN
→ CLEAN_MASTER_APPROVED
→ SCENE_CONTRACT_APPROVED
→ ASSETS_APPROVED
→ DESKTOP_COMPOSITE_APPROVED
→ RESPONSIVE_APPROVED
→ SCENE_LOCKED
```

Only `SCENE_LOCKED` scenes are eligible for final repository integration.
