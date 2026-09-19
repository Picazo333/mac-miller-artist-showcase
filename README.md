# Mac Miller — The Long Way Around

Proyecto académico de 4Geeks Academy: una experiencia visual e interactiva construida con HTML, CSS y JavaScript vanilla.

## V6 final

La entrega integra once escenas visuales aprobadas:

1. Home / Larry Fisherman
2. Macadelic
3. Watching Movies with the Sound Off
4. Faces
5. GO:OD AM
6. The Divine Feminine
7. Swimming
8. Circles
9. Archive
10. Memorial / Absence Present
11. Celebration of Life

## Arquitectura

La implementación final usa:

- masters raster aprobados y optimizados a WebP;
- HTML semántico para títulos, navegación y CTAs;
- CSS para composición responsive, overlays y microinteracciones;
- JavaScript mínimo para hotspots, estado activo y navegación;
- seis sprites PNG independientes en Celebration of Life;
- Scene Contracts y un Integration Manifest en `docs/v6-preproduction/`.

## Interacciones

Las escenas incluyen interacciones pequeñas y deliberadas: ondas, luz, CRT, espejo, reloj, órbita, agua, círculos, objetos de archivo, spotlight memorial y personajes pixel-art seleccionables.

Todas las interacciones críticas son accesibles por teclado y existe fallback para `prefers-reduced-motion`.

## Ejecutar

Puede abrirse como sitio estático o mediante:

```bash
python3 server.py
```

## URL

GitHub Pages:

https://picazo333.github.io/mac-miller-artist-showcase/

## Documentación

- `docs/v6-preproduction/PRODUCTION_PIPELINE.md`
- `docs/v6-preproduction/INTEGRATION_MANIFEST.yaml`
- `docs/v6-preproduction/scenes/`
- `docs/FINAL_QA.md`

> Tributo visual estudiantil no oficial.