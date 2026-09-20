# Mac Miller — The Long Way Around

Proyecto académico de 4Geeks Academy: una experiencia visual e interactiva construida exclusivamente con HTML y CSS.

## Experiencia final

La entrega integra once escenas:

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

- `index.html` como documento semántico;
- `styles.css` como única hoja de estilos canónica;
- cero JavaScript ejecutable;
- `<details>/<summary>` y controles HTML nativos para interacción;
- Schema.org mediante microdata HTML;
- masters visuales WebP ya aprobados;
- un composite pixel-art aprobado y restaurado como runtime canónico para Celebration of Life;
- Scene Contracts e Integration Manifest en `docs/v6-preproduction/`.

## Interacción

Cada álbum incluye un **Signal Light** visible. Al activarlo aparece una tarjeta breve con un dato verificado del proyecto y su fuente. Home conserva la interacción de ondas/luces; Archive contiene cuatro easter eggs; Memorial revela una línea breve de *Brand Name*; Celebration cierra la narrativa con el composite pixel-art aprobado.

Todo funciona con HTML + CSS, teclado y `prefers-reduced-motion`.

## Director's Cut Balanced

La capa final de dirección visual añade, sin JavaScript ni reemplazar los masters aprobados:

- color grading cinematográfico por escena;
- Focus Theatre al abrir datos curiosos;
- tarjetas Etched Glass;
- tipografía ambiental en siete capítulos;
- Forensic Lite en Archive;
- parche SVG full-frame sobre el pizarrón de Faces;
- fallbacks de contraste y movimiento reducido.

La especificación aprobada vive en `docs/DIRECTORS_CUT_BALANCED_SPEC.md`.

## Estructura académica

Al final de la experiencia se incluyen las secciones requeridas:

- About
- Career
- Upcoming Shows

## Ejecutar

Puede abrirse como sitio estático o mediante:

```bash
python3 server.py
```

## URL

GitHub Pages:

https://picazo333.github.io/mac-miller-artist-showcase/

## Evidencia de rúbrica

- PageSpeed / Lighthouse: evidencia PNG en `docs/evidence/pagespeed-mobile-final.png`
- Auditoría de criterios: `docs/RUBRIC_AUDIT.md`
- QA técnico final: `docs/FINAL_QA.md`
- Sitio público: https://picazo333.github.io/mac-miller-artist-showcase/

La captura final aportada para entrega muestra **100 Performance, 100 Accessibility, 100 Best Practices y 100 SEO**. Una verificación independiente posterior al hotfix visual obtuvo **99 / 100 / 100 / 100**, todavía muy por encima del mínimo académico de 80 en Performance.

## Documentación

- `docs/v6-preproduction/PRODUCTION_PIPELINE.md`
- `docs/v6-preproduction/INTEGRATION_MANIFEST.yaml`
- `docs/v6-preproduction/scenes/`
- `docs/FINAL_QA.md`

> Tributo visual estudiantil no oficial.