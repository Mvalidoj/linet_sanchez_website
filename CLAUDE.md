# CLAUDE.md — Linet Sánchez · Artist Portfolio

> **Punto de entrada obligatorio para cada sesión de trabajo.** Lee este archivo y la documentación pertinente al task antes de hacer ningún cambio. El repositorio es la fuente de verdad persistente; no asumas que el contexto de una conversación anterior es suficiente.

---

## 1. Identidad del proyecto

| Campo | Valor |
|---|---|
| Proyecto | Linet Sánchez — Artist Portfolio |
| Naturaleza | Sitio **100% estático**, editorial y profesional, listo para multilingüe (idioma público inicial: **inglés**) |
| Cliente | Linet Sánchez, artista visual contemporánea (fotografía, escultura, video) |
| Audiencia | Instituciones, curadores, galerías, coleccionistas, investigadores, prensa, profesionales del arte |
| Dirección visual | **Estructura de pinomusi.com ratificada** (ADR-005) — header fijo blanco, obra como protagonista, interfaz que se retira ante la obra. La spec anterior "THE ARCHITECTURE OF MEMORY" queda desechada. |
| Stack | **Astro 7 + TypeScript + Tailwind CSS v4**, sin CMS, despliegue en **Cloudflare Pages + GitHub** (ADR-004) |

**Lo que NO debe ser:** un portfolio genérico de fotógrafo, una web corporativa, una landing comercial o una plantilla. Debe sentirse como una exposición curada o un libro de artista impreso: la obra a escala natural, con la interfaz retirándose ante ella y el espacio vacío como material de diseño.

**Nota de idioma:** todo el sitio público se publica en inglés, pero **la documentación interna (`docs/` y este archivo) se mantiene en español** (ADR-001).

## 2. Principios de diseño obligatorios

La bíblia de diseño completa y autocontenida vive en `docs/design/` (7 documentos, actualizada 2026-11-17). Principios que guían cada decisión:

1. **Monocromatismo estricto sobre blanco** — 5 grises funcionales; la obra es el único color.
2. **La interfaz se retira ante la obra** — contraste bajo, imagen a escala natural, `contain` siempre (`never crop`).
3. **Jerarquía sin cambiar de familia** — tamaño, peso, color de texto y subrayado; una sola tipografía (Arial, sin webfonts).
4. **Ritmo vertical generoso** — aire pre-footer 90px, offsets deliberados (header 100px, contenido 145px).
5. **Marco mínimo** — hairlines de 1px (`#f0f0f0` imágenes, `#e1e1e1` header on-scroll), sin sombras ni radius sobre obra.

## 3. Índice de documentación

- **Contexto y alcance**
  - [docs/project/PROJECT_OVERVIEW.md](docs/project/PROJECT_OVERVIEW.md) — qué es, audiencia, estado actual.
  - [docs/project/ARTIST_CONTEXT.md](docs/project/ARTIST_CONTEXT.md) — práctica, temas, catálogo preliminar, fuentes.
  - [docs/project/CONTENT_GUIDELINES.md](docs/project/CONTENT_GUIDELINES.md) — reglas de contenido, inglés público, no inventar.
  - [docs/project/PROJECT_ROADMAP.md](docs/project/PROJECT_ROADMAP.md) — roadmap en una vista.
- **Diseño (bíblia autocontenida — no consultar pinomusi/)**
  - [docs/design/ART_DIRECTION.md](docs/design/ART_DIRECTION.md) — dirección ratificada, principios y divergencias conscientes.
  - [docs/design/DESIGN_TOKENS.md](docs/design/DESIGN_TOKENS.md) — paleta y tokens vigentes + su `@theme`.
  - [docs/design/TYPOGRAPHY.md](docs/design/TYPOGRAPHY.md) — escala por rol, Arial única familia.
  - [docs/design/LAYOUT_AND_SPACING.md](docs/design/LAYOUT_AND_SPACING.md) — escenario, header, ritmo vertical, grids.
  - [docs/design/RESPONSIVE_DESIGN.md](docs/design/RESPONSIVE_DESIGN.md) — breakpoints 950/480 por breakpoint.
  - [docs/design/COMPONENT_GUIDELINES.md](docs/design/COMPONENT_GUIDELINES.md) — anatomía por componente (implementado y futuro).
  - [docs/design/INTERACTION_GUIDELINES.md](docs/design/INTERACTION_GUIDELINES.md) — motion, a11y, JS mínimo.
- **Arquitectura**
  - [docs/architecture/TECHNICAL_ARCHITECTURE.md](docs/architecture/TECHNICAL_ARCHITECTURE.md) — stack, capas, build y deploy.
  - [docs/architecture/CONTENT_MODEL.md](docs/architecture/CONTENT_MODEL.md) — collections JSON + schemas zod.
  - [docs/architecture/FILE_STRUCTURE.md](docs/architecture/FILE_STRUCTURE.md) — estructura del repositorio.
  - [docs/architecture/ARCHITECTURAL_DECISIONS.md](docs/architecture/ARCHITECTURAL_DECISIONS.md) — registros ADR.
- **Flujo de trabajo**
  - [docs/workflow/DEVELOPMENT_WORKFLOW.md](docs/workflow/DEVELOPMENT_WORKFLOW.md) — cómo abordar cada tarea.
  - [docs/workflow/IMPLEMENTATION_PHASES.md](docs/workflow/IMPLEMENTATION_PHASES.md) — fases de desarrollo.
  - [docs/workflow/QUALITY_CHECKLIST.md](docs/workflow/QUALITY_CHECKLIST.md) — checklist de calidad reutilizable.

Origen: `context.txt` (brief vigente, reescrito con consenso el 2026-11-17, ADR-008).

## 4. Reglas operativas permanentes

1. **Leer el contexto primero.** Antes de cambiar nada, leer CLAUDE.md y la documentación pertinente al task.
2. **Preservar el design system.** Nunca introducir un color, tipografía, espaciado, tratamiento de borde o patrón de interacción nuevo sin razón clara. Los tokens viven en `src/styles/global.css` (`@theme`) y se documentan en `DESIGN_TOKENS.md` en el mismo cambio.
3. **Preservar la identidad visual ratificada.** Toda decisión refuerza la dirección de `docs/design/ART_DIRECTION.md`. La referencia `pinomusi/` es material de archivo: **los docs de diseño mandan, no la página original**. Nunca copiar contenido editorial de ella.
4. **Respetar lo implementado.** Inspeccionar antes de modificar un componente. Preferir extender lo existente antes que duplicar. No reescribir arquitectura que funciona sin justificación (y, si se justifica, ADR).
5. **Trabajo incremental.** Implementar solo la fase o feature pedida. No anticipar infraestructura futura. No implementar varias páginas cuando se pide una. (Ver gobernanza §7.)
6. **Consistencia responsive.** Todo componente/página nuevo funciona en desktop, tablet y móvil siguiendo `RESPONSIVE_DESIGN.md` (breakpoints 950px/480px).
7. **No inventar contenido.** Nunca inventar: biografía, títulos de obra, fechas, exposiciones, publicaciones, premios, materiales, dimensiones, curadores, galerías. Solo información verificada; el contenido de obra va marcado como pendiente (alt "artwork identification pending").
8. **Proteger la integridad de las obras.** Nunca recortar, recolorear, distorsionar ni modificar obras (ADR-007: se sirven byte a byte; verifica con checksum). Nunca usar `object-fit: cover` sobre obra.
9. **Documentar decisiones importantes.** Cambiar una decisión establecida exige: justificar, identificar docs afectados, actualizar el ADR y actualizar el documento correspondiente. No alterar el sistema en silencio.
10. **Mantener documentación sincronizada.** Toda función reutilizable, token, regla o estructura nueva se documenta donde corresponda. La documentación describe el estado real, no un plan caducado.
11. **Preguntar ante supuestos sustanciales.** Si un requisito importante admite interpretaciones muy distintas, hacer una pregunta concisa antes de proceder.
12. **Explicar los cambios de implementación.** Al final de cada task: qué se implementó, archivos tocados, decisiones, comportamiento responsive, validación, limitaciones y docs actualizados.

## 4b. Invariantes de arquitectura (verificar con grep antes de cerrar cada task)

- `src/domain/**` no contiene imports **runtime** de Astro (solo `import type`; no `astro:content` ni `astro/` con "import {").
- `getCollection` solo aparece en `src/data/**` y `src/content.config.ts`; páginas y componentes consumen `@data/queries`.
- Los shapes de dominio se derivan con `z.infer` de los schemas de `content.config.ts` — ninguna interfaz duplicada.
- La Home no tiene `<script>` de cliente (CSS-only: crossfade, nav, footer).
- Las imágenes de obra son byte-identicas a sus originales (`git hash-object`).

## 5. Convenciones técnicas

- **Stack (implementado, ADR-004):** Astro 7.4 + TypeScript (strict, aliases `@domain/*` `@data/*` `@components/*` `@layouts/*`) + Tailwind v4 (CSS-first `@theme`, plugin `@tailwindcss/vite`, sin `tailwind.config.js`). Output estático, **sin adapter**.
- **Contenido:** content collections JSON (`src/content/`) con schemas zod en `src/content.config.ts` (ver `CONTENT_MODEL.md`). Cambios de contenido = commits; no hay CMS.
- **Clean architecture (ADR-006):** `domain/` (tipos+mappers, Astro-free) · `data/queries.ts` (único acceso a collections) · `layouts/components/pages` (presentación fina) · `styles/global.css` (única hoja global).
- **Despliegue:** GitHub → Cloudflare Pages; build `npm run build`, output `dist`, `NODE_VERSION=22` (≥22.22). Sin servidor propio.
- **Secciones:** Home / Work / About / Press / Exhibitions / Contact — rutas `/`, `/work`, `/work/[slug]`, `/about`, `/press`, `/exhibitions`, `/contact`. No añadir secciones de navegación primarias sin aprobación explícita.
- **Idioma público:** inglés. **Documentación interna:** español.
- **Estilo de código:** inglés en identificadores y comentarios; docs internas en español.
- **Node:** ≥ 22.22 (localmente hay binario portable en `%USERPROFILE%\.node22`; en CI lo fija `NODE_VERSION`).
- Evitar siempre: tarjetas redondeadas, sombras, gradientes, iconos decorativos, componentes de UI genéricos, bordes innecesarios, efectos artificiales, webfonts, JS decorativo.

## 6. Estado del proyecto

- **Fase actual:** 1 **completada** (2026-11-17) — fundación Astro + migración fiel del Home + colecciones + docs reescritos. Fase 0 completada (2026-11-10).
- **Implementado:** Home (crossfade CSS-only), header/footer/skip-link, stubs de las 5 rutas del nav ("Content coming soon."), colecciones `home`+`profile` pobladas y `projects`/`press`/`exhibitions` vacías (README "do not invent").
- **Materiales de la artista:** pendientes de entrega (dossier PDF, imágenes de obra reales, retrato, video, CV); identificación de obras pendiente (títulos/series). Ver `CONTENT_GUIDELINES.md` → "Materiales pendientes".
- **Despliegue:** Cloudflare Pages con integración Git (configurar en el dashboard: build `npm run build`, output `dist`, `NODE_VERSION=22`).

## 7. Gobernanza de fases

Las fases (`IMPLEMENTATION_PHASES.md`) establecen el orden pero **no se avanza automáticamente** al terminar una: hay que esperar aprobación explícita del usuario. No empezar la siguiente fase sin su OK.
