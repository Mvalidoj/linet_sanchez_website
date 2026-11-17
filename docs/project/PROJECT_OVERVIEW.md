# PROJECT_OVERVIEW — Linet Sánchez · Artist Portfolio

## Qué es

Sitio web editorial y sofisticado para la artista visual contemporánea **Linet Sánchez**. Es su portfolio digital principal y su plataforma de presentación profesional. Arquitectura preparada para multilingüe; **idioma público inicial: inglés**.

La **dirección visual ratificada** (2026-11-17, ADR-005) es una estructura editorial basada en la referencia pinomusi.com, adaptada al contenido y la práctica de Linet Sánchez. La especificación creativa vigente completa — concepto, paleta, tipografía, layout, interacción — vive en `docs/design/` (bíblia de diseño, especialmente `ART_DIRECTION.md`); este documento no la duplica.

El sitio no es solo un contenedor de obras: debe sentirse como una exposición curada o un libro de artista impreso.

## Qué NO debe ser

- Un portfolio genérico de fotógrafo.
- Una web corporativa.
- Una landing page comercial.
- Una plantilla de portfolio preconstruida.

## Audiencia

- Instituciones de arte internacionales.
- Curadores.
- Galerías.
- Coleccionistas de arte.
- Investigadores.
- Periodistas.
- Organizaciones culturales.
- Profesionales del arte e interesados en artes visuales contemporáneas.

El sitio debe comunicar identidad artística, credibilidad profesional y profundidad conceptual.

## Alcance — arquitectura de información

Exactamente **seis secciones principales**:

| Sección | Ruta |
|---|---|
| Home | `/` |
| Work | `/work` |
| Proyecto individual | `/work/[slug]` |
| About | `/about` |
| Press | `/press` |
| Exhibitions | `/exhibitions` |
| Contact | `/contact` |

La sección Work soporta páginas de detalle por proyecto y distintos medios (fotografía, escultura, video). **No introducir secciones de navegación primarias adicionales sin aprobación explícita.** Ver `docs/design/COMPONENT_GUIDELINES.md` y `docs/project/CONTENT_GUIDELINES.md`.

## Estado actual (2026-11-17)

- **Fases 0 y 1 completadas.** Fase 1 (hoy) construyó la fundación del sitio: **Astro 7 + TypeScript strict + Tailwind CSS v4**, sitio 100% estático, despliegue previsto en **Cloudflare Pages + GitHub**, contenido en colecciones JSON del repo (sin CMS). Stack completo y arquitectura de capas: `docs/architecture/TECHNICAL_ARCHITECTURE.md`.
- **Implementado:** Home migrada fielmente (slideshow crossfade CSS puro, 6 obras servidas byte a byte en `public/images/home/`, header fijo, footer, skip-link), stubs "Content coming soon." en `/work`, `/about`, `/exhibitions`, `/press`, `/contact`, y colecciones de contenido con datos básicos verificados (`home.json`, `profile.json`; projects/press/exhibitions vacías).
- **Próxima fase:** 2 — Home final (pulir tras la validación del usuario).
- **Materiales de la artista:** pendientes de entrega (bloqueadores del contenido real). Ver `CONTENT_GUIDELINES.md` → "Materiales pendientes".

## Próximos pasos

Fase 2 — Home final, tras la aprobación explícita del usuario de la Fase 1. Roadmap completo en `docs/workflow/IMPLEMENTATION_PHASES.md`.
