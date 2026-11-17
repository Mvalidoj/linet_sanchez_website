# QUALITY_CHECKLIST

> Checklist reutilizable. Aplica a cada página/componente nuevo y a cada entrega de fase. Marcar las desviaciones conocidas en el reporte final (Regla 12). Estado a **2026-11-17**; la referencia de cada regla es la bíblia de diseño en `../design/`.

## 1. Consistencia visual

- [ ] Usa solo los tokens definidos en `@theme` (`src/styles/global.css`) y los patrones ratificados en la bíblia `../design/` (especialmente `DESIGN_TOKENS.md` y `ART_DIRECTION.md`). Si hubo token nuevo, está documentado en el mismo cambio.
- [ ] Border radius 0; sin shadows, sin gradientes, sin iconos decorativos.
- [ ] La composición sigue la retícula y el espaciado de `LAYOUT_AND_SPACING.md`; alineaciones deliberadas.
- [ ] Tipografía correcta por rol según `TYPOGRAPHY.md` (Arial system, sin webfonts).
- [ ] El resultado es coherente con la dirección ratificada (estructura de pinomusi.com adaptada al contenido de Linet Sánchez); nada genérico ni "de plantilla".

## 2. Responsive

- [ ] Validado en los **6 viewports** definidos en `../design/RESPONSIVE_DESIGN.md`; sin overflow horizontal en ninguna sección.
- [ ] Breakpoints vigentes **950 / 480** aplicados; sin valores ad-hoc.
- [ ] Comportamiento móvil intencional (jerarquía mantenida), no desktop encogido.
- [ ] Aspect ratios de las obras preservados (imágenes sin recorte).
- [ ] El espacio negativo sobrevive en móvil; espaciado reducido con cuidado.

## 3. Contenido e integridad

- [ ] Cero contenido inventado (bio, títulos, fechas, dimensiones, exposiciones, premios, materiales, curadores).
- [ ] Nivel de cada dato clasificado (**verified / preliminary / awaiting confirmation**) y reflejado en código/docs (`../project/CONTENT_GUIDELINES.md` §2).
- [ ] Campos desconocidos: omitidos o marcados en el JSON; sin "TBD" decorativo ni relleno.
- [ ] Estado vacío sobrio en secciones sin contenido (no relleno compensatorio).
- [ ] Las obras se muestran con assets reales o placeholders claramente identificados (nunca stock disfrazado de obra). Placeholders actuales identificados si aplican.
- [ ] Copy visible del sitio en inglés; documentación interna en español (ADR-001).

## 4. Accesibilidad

- [ ] Operable por teclado completo; orden de foco lógico.
- [ ] Foco visible (`focus-visible` 2px, patrón vigente) en todo elemento interactivo.
- [ ] Skip-link presente y funcional.
- [ ] Alt text descriptivo y factual en **todas** las imágenes (obligatorio por esquema zod: `artworkSchema` y `slideshow[].alt`).
- [ ] HTML semántico y jerarquía de headings correcta.
- [ ] `prefers-reduced-motion` respetado (sin crossfade/transiciones cuando reduce).
- [ ] Sin lightbox implementado todavía: el focus-trap de visores aplica en cuanto exista (Fase 3).

## 5. Interacción / motion

- [ ] Solo interacciones permitidas (`../design/INTERACTION_GUIDELINES.md`); ninguna de las prohibidas.
- [ ] Duraciones vigentes: slideshow crossfade **350 ms** con ciclo de **5 s** por slide (6 slides), enlaces **.2s**, hover de thumbnails vía **opacity .8**. Sin zoom de imagen (no usar el patrón antiguo de escala 1.02).
- [ ] Funcionalidad no depende de la animación.
- [ ] Anima solo `opacity`/`transform`; un solo patrón de hover por tipo de componente en todo el sitio.

## 6. Performance / código

- [ ] **Cero JS de cliente en la Home** (objetivo del proyecto: 0 `<script>` en páginas estáticas); todo JS nuevo justificado.
- [ ] **Invariantes de clean architecture** (`TECHNICAL_ARCHITECTURE.md` §4):
  - [ ] `grep` en `src/domain/` no devuelve imports runtime de Astro (solo `import type`).
  - [ ] `getCollection` aparece solo en `src/data/queries.ts`; las páginas no acceden a datos directamente.
- [ ] Imágenes de obra servidas **byte a byte** desde `public/` (¿ checksum idéntico al original?); sin `astro:assets`/procesado sobre obras (ADR-007).
- [ ] Sin dependencias nuevas sin justificación; calidad de imagen nunca sacrificada por optimización.
- [ ] Build de Node 22 limpio (`npm run build` y `astro check` sin errores) antes de dar por concluida la tarea.
- [ ] Sin duplicación: reutiliza componentes existentes; sin rewrite de arquitectura funcional.
- [ ] SEO básico por página donde aplique (`<title>`, meta description); completar sitemap/OG en Fase 8.

## 7. Documentación

- [ ] Tokens nuevos documentados junto a su implementación (y en la bíblia `../design/` si corresponde).
- [ ] Componentes nuevos/reglas nuevas reflejados en `COMPONENT_GUIDELINES.md`.
- [ ] Cambios de estructura en `FILE_STRUCTURE.md`; modelo de datos en `CONTENT_MODEL.md`.
- [ ] Decisiones nuevas o modificadas con ADR en `ARCHITECTURAL_DECISIONS.md`.
- [ ] Estado de fase actualizado en `IMPLEMENTATION_PHASES.md` / `PROJECT_ROADMAP.md`.

## 8. Reporte final (Regla 12)

- [ ] Qué se implementó · archivos creados/modificados · decisiones de diseño · responsive validado · validación realizada (build, check, checklist) · limitaciones conocidas · documentación actualizada.
