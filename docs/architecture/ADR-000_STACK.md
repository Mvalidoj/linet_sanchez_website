# ADR-000 — Stack de la web v2

> **Estado: PENDIENTE** — debe resolverse antes de la Fase F-1 (`../workflow/EXECUTION_PHASES.md §F-1`). El diseño v2 (`../design/redesign_v2/`) es independiente del stack: no contiene nada que lo condicione salvo los requirements de 02 §12 (assets estáticos, fonts locales) y 06 §7 (performance). Esta decisión solo cambia **cómo** se organiza el código, no **qué** se construye.

---

## Contexto

No existe aún ninguna implementación de la web v2. Antecedentes: maqueta estática v1 (`frontend/mockup/`, HTML/CSS/JS vanilla, sin build — ADR-004 del raíz). La arquitectura raíz v1 (`../../docs/architecture/TECHNICAL_ARCHITECTURE.md`, ADR-003) planificaba Next.js + TS + Sanity + Vercel, pero nada está implementado y el usuario **no ha decidido aún** el stack para v2.

## Opción A — Sitio estático (HTML/CSS/JS vanilla, sin build)

**Qué:** evolución directa del patrón del mockup: páginas HTML + `css/tokens.css` + componentes CSS + JS mínimo (menú, visor). Deploy en cualquier hosting estático (incl. Vercel).

- Pros: ejecución y validación inmediatas (abrir `index.html`), cero dependencias ni puntos de falla de build; el paquete de diseño se traslada 1:1 (tokens como CSS custom properties ya está escrito así); ideal para validar el concepto con la artista antes de escalar; el JS requerido es mínimo (06 §7: sin librerías).
- Contras: contenido duplicado en multilingüe futuro (segunda carpeta o capa JS), sin tipos, sin CMS integrado, los enlaces/deep-links del visor se gestionan a mano; si después se pasa a Next.js, se reescriben páginas (los tokens y CSS se reutilizan casi íntegros).

## Opción B — Next.js + TypeScript + CSS Modules (arquitectura v1, ADR-003)

**Qué:** app de Next.js con App Router, rutas de `CLAUDE.md §5`, tokens en CSS custom properties (`02`) y CSS modules por componente.

- Pros: es el objetivo productivo ya documentado; rutas dinámicas `/work/[slug]` nativas; SEO/metadata óptimos; camino directo a Sanity (fase CMS futura) y despliegue Vercel; tipado del catálogo de obras (05).
- Contras: scaffold + tooling + entorno Node antes de ver nada visual; el primer entregable visible llega más tarde; más superficie para decisiones de arquitectura que no contribuyen ahora a validar el concepto con la artista.

## Criterios de decisión (en ese orden)

1. **Velocidad de validación visual con la artista** (el concepto v2 aún no se ha visto en pantalla).
2. **Coste de reescritura posterior** si se migra a Next.js: A (bajo en tokens/estilos) vs B (cero).
3. **Voluntad de mantener Node/tooling en el flujo de trabajo actual.**
4. **Necesidad real de CMS a corto plazo** (depende de la cadencia de actualización del portfolio).

## Resolución

`Pendiente — el usuario elige A, B u otra variante (p. ej. A con build Astro) en la fase F-0b. Al decidirse: actualizar ESTADO, registrar la fecha y sincronizar CLAUDE.md §4 y EXECUTION_PHASES.md (los pasos de F-1+ son válidos para ambos, con estructura de archivos según el stack elegido).`

## Implicaciones por fase (iguales en A y B)

Todas las fases F-1…F-6 de `../workflow/EXECUTION_PHASES.md` consumen los mismos docs de diseño; lo que cambia es la ruta física de los archivos (`css/`, `*.html` vs `app/`, componentes TSX+CSS modules). El DoD por fase es idéntico (misma `QUALITY_CHECKLIST.md`).
