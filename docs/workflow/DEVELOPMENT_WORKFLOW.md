# DEVELOPMENT_WORKFLOW

> Cómo abordar cada tarea/solicitud en este proyecto. Válido para cualquier sesión futura.

## Flujo estándar de una tarea

1. **Leer contexto** (Regla 1): CLAUDE.md + los documentos relevantes al task (p. ej. para un componente: `COMPONENT_GUIDELINES.md`, `DESIGN_TOKENS.md`, `RESPONSIVE_DESIGN.md`, `INTERACTION_GUIDELINES.md`).
2. **Inspeccionar lo existente** (Regla 4): revisar implementaciones y dependencias relacionadas antes de tocar nada; preferir extender sobre duplicar.
3. **Aclarar si hace falta** (Regla 11): si el requisito admite interpretaciones con diseños/architecturas notablemente distintas, preguntar una única pregunta concisa. Decisiones menores: juicio profesional + documentar el supuesto.
4. **Planificar** el alcance exacto: qué archivos, qué tokens, qué componentes. Si el task cambia una decisión establecida, preparar el ADR (Regla 9).
5. **Implementar solo lo pedido** (Regla 5), respetando tokens, layout, responsive y reglas de interacción. Respetar las capas (`src/domain`, `src/data/queries.ts`, `src/pages`): contenidos por JSON/commit, presentación en pages/components.
6. **Validar** con `../workflow/QUALITY_CHECKLIST.md` (los 6 viewports de `RESPONSIVE_DESIGN.md` + teclado + reduced motion):
   - **Comprobar invariantes de arquitectura antes de concluir:** `grep` en `src/domain/` sin imports runtime de Astro (solo `import type`); `getCollection` solo en `src/data/queries.ts`; 0 `<script>` de cliente en páginas estáticas; build de Node 22 verde (Node 22 local portable / `NODE_VERSION=22` en CI) y `astro check` sin errores.
7. **Actualizar documentación** (Regla 10): tokens CSS → `src/styles/global.css` + bíblia `../design/` (p. ej. `DESIGN_TOKENS.md`); componentes → `COMPONENT_GUIDELINES.md`; estructura → `../architecture/FILE_STRUCTURE.md`; modelo de datos → `../architecture/CONTENT_MODEL.md`; decisiones → ADR en `../architecture/ARCHITECTURAL_DECISIONS.md`; estado de fase → `IMPLEMENTATION_PHASES.md` / `../project/PROJECT_ROADMAP.md`.
8. **Reportar** (Regla 12): qué se implementó, archivos tocados, decisiones de diseño, responsive, validación, limitaciones, docs actualizados.

## Convenciones de sesión

- Una tarea = una fase o feature; no ampliar el alcance por iniciativa propia.
- Cambios de diseño/arquitectura establecidos: nunca en silencio; ADR + documento(s) afectados.
- Contenido nuevo: solo verified (o marcar como pendiente de verificación); nunca inventado. El contenido vive en los JSON de `src/content/` (`../architecture/CONTENT_MODEL.md`): cambiarlo es un commit, no un panel de administración.
- Si un requisito choca con la documentación, se actualiza documentación primero (con ADR si es decisión), código después.

## Criterios para no sobredimensionar

- ¿El task pide una página? Implementar esa página, no las demás.
- ¿Necesita un componente nuevo? Comprobar antes si uno existente cubre el caso con parámetros.
- ¿Hace falta una dependencia? Justificarla; preferir solución pequeña sin librería (JS mínimo es un objetivo del proyecto).
