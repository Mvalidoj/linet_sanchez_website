# IMPLEMENTATION_PHASES

> Roadmap operativo del proyecto. Vista de una página en `../project/PROJECT_ROADMAP.md`. **Regla de gobernanza: las fases no avanzan solas — no se pasa a la siguiente fase sin aprobación explícita del usuario.**

Detalles técnicos vigentes: `../architecture/TECHNICAL_ARCHITECTURE.md`. Modelo de contenido: `../architecture/CONTENT_MODEL.md`.

## Fase 0 — Inicialización y contexto — ✅ COMPLETADA

- Sistema de contexto completo (CLAUDE.md + docs/) y roadmap. ✅
- Sin implementación web durante la fase. ✅

## Fase 1 — Fundación del sitio (Astro + migración Home) — ✅ COMPLETADA (2026-11-17)

- Scaffold ratificado con ADR: Astro 7.4.12 + TypeScript strict + Tailwind CSS v4 (CSS-first, `@theme` en `src/styles/global.css`), site 100% estático, sin CMS (content collections JSON). ✅
- Clean architecture adaptada: `content.config.ts` (esquemas zod) · `content/` · `domain/` (Astro-free en runtime) · `data/queries.ts` · `layouts/` · `components/` · `pages/`. ✅
- Home migrada fielmente de la referencia ratificada: 6 obras en `public/images/home/` (byte a byte), slideshow crossfade CSS puro (6 slides × 5 s, transición 350 ms), header fijo 100px, footer, skip-link, `aria-current` en nav, favicon. ✅
- Stubs "Content coming soon." en `/work`, `/about`, `/exhibitions`, `/press`, `/contact`. ✅
- Colecciones: `home.json` y `profile.json` con datos básicos verificados; `projects/`, `press/`, `exhibitions/` vacías (README "content pending — do not invent"). ✅
- Verificación: build de 6 páginas, 0 `<script>` de cliente, `astro check` 0 errores, checksums de imágenes idénticos, `dist` limpio. ✅
- Decide cómo se despliega: Cloudflare Pages + GitHub (`NODE_VERSION=22`). ✅ (configuración en el dashboard de Cloudflare pendiente de la primera conexión al repo)

## Fase 2 — Home final

- Pulir la Home tras la validación del usuario de Fase 1 (ajustes de composición, textos con contenido verificado disponible).
- Validación desktop/tablet/móvil según `../design/RESPONSIVE_DESIGN.md` + checklist.
- **Aprobación explícita antes de avanzar.**

## Fase 3 — Work y detalle de proyecto

- Índice `/work` (grids de thumbnails) y `/work/[slug]` **estático** vía `getStaticPaths` consumiendo `data/queries.ts`.
- Página de obra: metadata (título/año/dimensiones/technique cuando existan), captions, alt.
- Visor/galería según `../design/COMPONENT_GUIDELINES.md` y `INTERACTION_GUIDELINES.md`; los tres medios (photography/sculpture/video) representados de forma apropiada.
- Depende del backfill para contenido real.

## Fase 4 — About

- Biografía, statement, práctica y CV desde `profile.json`. Solo contenido verificado (bloqueado por materiales).

## Fase 5 — Press y Exhibitions

- Archivos editoriales cronológicos; las colecciones ya están esquematizadas y listas (`CONTENT_MODEL.md`).
- Estados vacíos sobrios donde falte contenido.

## Fase 6 — Contact

- Información pública (email + Instagram) ya verificado en `profile.json`.
- Resolver el **formulario** (ADR-009 lo difirió): `mailto:` vs Cloudflare Pages Function vs servicio externo; validación y protección antispam según la opción elegida.

## Fase 7 — Backfill de contenido

- Poblar `projects/`, `press/`, `exhibitions/` y ampliar `profile.json` con material **verificado** (dossier tratado + obras identificadas), respetando niveles de `../project/CONTENT_GUIDELINES.md`.
- Cambios de contenido en las colecciones = commits a los JSON (`CONTENT_MODEL.md`).
- **Sustituye a la antigua fase de integración de CMS, eliminada** (el sitio no lleva CMS: ADR-004).

## Fase 8 — Optimización y lanzamiento

- Performance (Lighthouse 90+) y accesibilidad (95+).
- SEO técnico completo una vez confirmado el **dominio de producción**: `site` en `astro.config.mjs`, sitemap, robots, Open Graph, structured data.
- Analytics según lo que pida la artista; revisión de la deuda del header on-scroll.
- Deploy final en Cloudflare Pages.

---

**Estado actual:** Fases 0 y 1 completadas; siguiente = **Fase 2**, requiere aprobación explícita del usuario.
