# IMPLEMENTATION_PHASES

> Roadmap operativo del proyecto. Vista de una página en `../project/PROJECT_ROADMAP.md`. **Regla de gobernanza: no se pasa a la siguiente fase sin aprobación explícita del usuario.**

## Fase 0 — Inicialización y contexto (en curso)

- Inspeccionar repositorio y materiales disponibles. ✅ (repo virgen; único asset: dossier PDF pendiente de tratamiento — ADR-002)
- Crear sistema de contexto completo (CLAUDE.md + docs/). ✅ este sistema
- Establecer design system documentado y roadmap. ✅
- No implementar la web. ✅ (sin código, sin dependencias)
- Pendiente en Fase 0: tratado del dossier PDF cuando el usuario lo autorice (biografía verificada, referencias de obras, exposiciones) y entrega de assets.

## Fase 1 — Fundación visual

- Decidir stack y scaffold (Next.js + TS + estilo CSS Modules — ADR al efecto).
- Estilos globales y design tokens (materializar `../design/DESIGN_TOKENS.md`).
- Tipografía (Cormorant Garamond + Inter, escala fluida).
- Grid/layout utilities según `../design/LAYOUT_AND_SPACING.md`.
- Header/navegación y footer.
- Validar el lenguaje visual (breakpoints + checklist).

## Fase 2 — Home

- Página completa según dirección (header, hero, statement, Selected Works, About preview, Press/Exhibitions preview, contacto, footer).
- Con materiales reales de la artista (requiere ADR-002 resuelto).
- Validación desktop/tablet/móvil; refinar jerarquía y composición.
- **Aprobación explícita antes de avanzar.**

## Fase 3 — Work y detalle de proyecto

- Índice `/work` editorial; `/work/[slug]`.
- Soporte de los tres medios (fotografía, escultura, video).
- Galerías, prev/next, lightbox, metadata de obra.

## Fase 4 — About

- Biografía, statement, práctica, CV. Solo contenido verificado.

## Fase 5 — Press y Exhibitions

- Archivos editoriales cronológicos con metadata completa.
- Estados vacíos sobrios cuando falte contenido.

## Fase 6 — Contact

- Información pública (email + Instagram) y formulario.
- Validación y protección antispam según necesidad.

## Fase 7 — Integración CMS (Sanity)

- Schemas según `../architecture/CONTENT_MODEL.md`.
- Conexión al frontend; drafts, publicación, orden, featured.
- Migración del contenido estático aprobado al CMS.

## Fase 8 — Optimización y lanzamiento

- Performance (Lighthouse 90+), accesibilidad (95+), SEO (95+), seguridad, analytics.
- Validación responsive final; deploy (Vercel).

---

**Estado actual:** Fase 0 en curso; siguiente = Fase 1, requiere aprobación usuario.
