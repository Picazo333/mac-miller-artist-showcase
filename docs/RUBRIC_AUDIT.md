# 4Geeks Rubric Audit — Mac Miller: The Long Way Around

Status: **READY TO SUBMIT**

This file converts the assignment requirements into an evidence matrix. It is intentionally academic and does not treat optional Director's Cut work as a substitute for required rubric items.

| Criterion | Evidence | Verification | Status |
|---|---|---|---|
| Start from the 4Geeks HTML boilerplate | Initial repository commit `ceeb76a8e43eab3ec1f517fd624cb7dbfc14a8c4` contains the original `# HTML Hello` 4Geeks Academy README, `learn.json` and `server.py` | Git history / initial tree inspection | PASS |
| Main HTML document | `index.html` exists at repository root | Repository inspection | PASS |
| External CSS file | `index.html` loads `styles.css`; no inline `<style>` blocks or `style=` attributes are used | Source inspection | PASS |
| HTML + CSS only | No executable JavaScript is present | Source/runtime audit | PASS |
| No frontend framework/template dependency in final runtime | Final page uses native HTML/CSS; no framework runtime is loaded | Source inspection | PASS |
| Semantic HTML | `header`, `nav`, `main`, `section` and `footer` are used | Source inspection | PASS |
| Navigation with internal anchors | Scene index and scene CTAs use valid fragment anchors; final audit found 0 broken internal anchors | Runtime/source audit | PASS |
| Hero / cover | S00 Home is the opening full-screen narrative scene | Runtime inspection | PASS |
| About section | Required `About` section is present | Runtime/source inspection | PASS |
| Career section | Required `Career` section is present | Runtime/source inspection | PASS |
| Upcoming Shows section | Required `Upcoming Shows` section is present and does not invent future events | Runtime/source inspection | PASS |
| Footer | Semantic footer is present | Source inspection | PASS |
| Flexbox | Flexbox is used in the canonical stylesheet | CSS inspection | PASS |
| Responsive design | 16 media-query blocks plus viewport QA at 390, 768, 1024, 1440 and 1920 px; sanity checks at 360, 430 and 1366 px | CSS + visual QA | PASS |
| Accessibility | Keyboard-capable native controls, `:focus-visible`, reduced-motion support; Lighthouse Accessibility evidence | Source/runtime/PageSpeed | PASS |
| SEO basics | Title, description, canonical URL, Open Graph metadata and crawl directives are present | Source inspection | PASS |
| Schema.org | Schema.org microdata is present in the final HTML | Source/runtime inspection | PASS |
| Public GitHub repository | `Picazo333/mac-miller-artist-showcase` is public; default branch is `main` | GitHub repository API | PASS |
| Public deployed URL | GitHub Pages: `https://picazo333.github.io/mac-miller-artist-showcase/` | Live runtime verification | PASS |
| PageSpeed Performance >= 80 | Submitted screenshot shows 100 Performance; independent post-hotfix run returned 99 | PageSpeed Insights | PASS |
| PageSpeed screenshot committed | `docs/evidence/pagespeed-mobile-final.png` | Repository inspection | PASS |
| Final remote state | Final visual hotfix merged to `main`; runtime loads Circles and Archive cleanup overlays | GitHub + live runtime verification | PASS |
| Submission artifact | Required submission is the public repository URL | Assignment delivery requirement | PASS |

## Final PageSpeed evidence

Submitted screenshot:

`docs/evidence/pagespeed-mobile-final.png`

Submitted scores shown in the final evidence:

- Performance: **100**
- Accessibility: **100**
- Best Practices: **100**
- SEO: **100**
- Agentic Browsing: **2/2**

Independent post-hotfix verification:

- Performance: **99**
- Accessibility: **100**
- Best Practices: **100**
- SEO: **100**

The rubric threshold is Performance >= 80.

## Final submission

Submit this repository URL:

https://github.com/Picazo333/mac-miller-artist-showcase

Supporting public deployment:

https://picazo333.github.io/mac-miller-artist-showcase/

## Remaining rubric blockers

**None identified.**

The remaining work after this point is optional study/defense material, not part of the required academic submission.
