# PageSpeed validation — final deployed revision

Final public URL:

https://picazo333.github.io/mac-miller-artist-showcase/

Approved merge commit:

`54995622fe3eb5aefdc5c441e9ce89d681ac6c2b`

PageSpeed Insights was rerun against the clean final URL on **Sep 20, 2026 at 00:53 UTC**, using the **Mobile** Lighthouse profile (Emulated Moto G Power, Slow 4G, Lighthouse 13.4.1).

## Final Lighthouse scores

- Performance: **100**
- Accessibility: **100**
- Best Practices: **100**
- SEO: **100**
- Agentic Browsing: **2/2**

## Performance metrics

- First Contentful Paint (FCP): **0.9 s**
- Largest Contentful Paint (LCP): **1.5 s**
- Total Blocking Time (TBT): **0 ms**
- Cumulative Layout Shift (CLS): **0**
- Speed Index: **0.9 s**

The report showed no CrUX field data for this URL; the values above are the current Lighthouse lab results.

## Final evidence

- Screenshot: `docs/evidence/pagespeed-mobile-final.png`
- PageSpeed URL: https://pagespeed.web.dev/analysis?url=https%3A%2F%2Fpicazo333.github.io%2Fmac-miller-artist-showcase%2F&form_factor=mobile
- Production runtime verification confirmed:
  - Phase 1 Faces Golden Scene CSS is deployed;
  - Phase 2 S00–S10 scene direction CSS is deployed;
  - Faces board patch loads;
  - Faces Focus Theatre changes state and the fact card remains scene-contained;
  - Archive Focus Theatre / Forensic Lite changes state and the card remains scene-contained;
  - Celebration composite decodes at **1672×941** with no broken-image state;
  - scroll-driven `directorBreathe` is absent from the final CSS.

## Remaining optimization opportunities

PageSpeed still reports optional opportunities such as longer cache lifetimes, image-delivery savings, CSS minification and non-composited animation diagnostics. They do **not** prevent the current build from scoring 100 Performance and are not blockers for this academic delivery.
