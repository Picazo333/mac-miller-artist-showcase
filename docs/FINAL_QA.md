# Final QA — V6 Integration

## Scope

Integración final de las 11 escenas visuales aprobadas sin generar una nueva dirección artística.

## Structural gate

- [x] Existen 11 secciones `.scene`.
- [x] Los IDs de escena son únicos.
- [x] La navegación interna apunta a esas 11 escenas.
- [x] Los 11 masters WebP están presentes en `assets/`.
- [x] Los seis sprites PNG de Celebration están presentes.
- [x] `index.html` carga exclusivamente el runtime V6 mediante `v6.css` y `v6.js`.
- [x] No se requiere framework frontend.

## Accessibility gate

- [x] Skip link presente.
- [x] Cada escena tiene heading semántico o heading oculto.
- [x] Easter eggs interactivos implementados como botones reales.
- [x] Los botones tienen nombres accesibles.
- [x] Los seis personajes de Celebration son focusables individualmente.
- [x] Archive comunica sus labels mediante `aria-live`.
- [x] Los masters decorativos usan `alt=""`; la información esencial vive en HTML.
- [x] Hay estado `:focus-visible`.
- [x] `prefers-reduced-motion` reduce animaciones y transiciones.
- [x] El índice móvil puede cerrarse con Escape.

## Visual fidelity gate

- [x] S00 conserva Larry Fisherman.
- [x] S01 usa el master aprobado de Macadelic.
- [x] S02 usa el master aprobado de Watching Movies.
- [x] S03 usa Faces v2 corregido.
- [x] S04 conserva el reloj monumental de GO:OD AM aprobado por excepción.
- [x] S05 conserva la silueta femenina con high ponytail.
- [x] S06 conserva el traje rosa de Swimming.
- [x] S07 conserva la última referencia aprobada de Circles.
- [x] S08 usa la mesa larga y densa de Archive.
- [x] S09 conserva escenario vacío, micrófono, alfombra roja y DON'T TRIP.
- [x] S10 usa escenario limpio + seis sprites pixel-art independientes.

## Interaction gate

- [x] Home: ripple/fireflies.
- [x] Macadelic: lamp/smoke.
- [x] Watching Movies: CRT/scanline.
- [x] Faces: mirror/eye.
- [x] GO:OD AM: clock/portal.
- [x] Divine Feminine: orbit/ponytail light.
- [x] Swimming: water/window lift.
- [x] Circles: ring/reflection.
- [x] Archive: six semantic hotspots.
- [x] Memorial: spotlight + short Brand Name reveal.
- [x] Celebration: six selectable collaborators.

## Responsive policy

Focal positions de los responsive proofs aprobados se trasladan a CSS. Celebration no recorta colaboradores: redistribuye los seis sprites en grid móvil.

## Performance gate

- [x] Masters convertidos a WebP y limitados a 1440 px de ancho.
- [x] Sólo S00 usa `fetchpriority=high`.
- [x] S01–S10 usan lazy loading.
- [x] No hay dependencia de frameworks ni runtimes de animación externos.

## Remaining verification

- [ ] GitHub Pages debe comprobarse después del merge a `main`.
- [ ] Los enlaces externos se consideran correctos según el runtime anterior; la disponibilidad de servicios externos depende de sus proveedores.

## Definition of Done

Mergear `v6-final-integration` a `main`, esperar el despliegue de GitHub Pages y verificar que la URL pública responde con el runtime V6.