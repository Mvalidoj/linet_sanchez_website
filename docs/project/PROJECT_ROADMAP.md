# PROJECT_ROADMAP — Linet Sánchez · Artist Portfolio

> Vista general del roadmap. Detalle operativo por fases en `../workflow/IMPLEMENTATION_PHASES.md`. Estado a **2026-11-17**.

## Fases

| Fase | Alcance | Estado |
|---|---|---|
| **0 — Inicialización y contexto** | Inspeccionar repositorio, sistema de documentación, CLAUDE.md, roadmap | ✅ Completada |
| **1 — Fundación del sitio** | Scaffold (Astro 7 + TS strict + Tailwind v4, Cloudflare Pages), clean architecture, migración del Home (slideshow CSS, header, footer), stubs de secciones, colecciones de contenido con datos básicos | ✅ Completada (2026-11-17) |
| **2 — Home final** | Pulir la Home tras validación del usuario; aprobación antes de seguir | Pendiente |
| **3 — Work y detalle de proyecto** | Índice Work, `/work/[slug]` estático (`getStaticPaths`), grids de thumbnails, página de obra, visor | Pendiente |
| **4 — About** | Biografía, statement, práctica y CV desde `profile.json` | Pendiente |
| **5 — Press y Exhibitions** | Archivos cronológicos (colecciones ya esquematizadas), estados vacíos | Pendiente |
| **6 — Contact** | Contacto público + resolver el formulario con Cloudflare (ADR-009) | Pendiente |
| **7 — Backfill de contenido** | Poblar las colecciones JSON con material verificado (dossier/obras). Sustituye al plan antiguo de CMS (eliminado) | Pendiente |
| **8 — Optimización y lanzamiento** | Lighthouse, SEO/sitemap (con dominio), analytics, deploy final | Pendiente |

## Regla de gobernanza

Las fases no avanzan solas: **cada transición requiere aprobación explícita del usuario**, incluso al terminar una fase.

## Bloqueadores conocidos

- **Materiales de la artista pendientes de entrega** (imágenes reales de obras, retrato, video, CV, bio verificada) — condicionan las Fases 2–7. Ver `CONTENT_GUIDELINES.md` → "Materiales pendientes".
- **Identificación de obras** (títulos/series finales) pendiente de tratamiento del dossier: `ARTIST_CONTEXT.md` marca el catálogo como preliminar.
- **Dominio de producción por confirmar** — bloquea sitemap/robots/OG completos (Fase 8).
- Dossier PDF disponible en el directorio padre pero pendiente de tratamiento/aprobación.

## Stack (resumen)

Astro 7.4.12 + TypeScript strict + Tailwind CSS v4 (CSS-first), sitio 100% estático, contenido en colecciones JSON del repo, despliegue en Cloudflare Pages + GitHub, Node 22. Detalle: `../architecture/TECHNICAL_ARCHITECTURE.md`.
