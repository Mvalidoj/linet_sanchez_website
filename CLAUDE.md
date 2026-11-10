# CLAUDE.md — Linet Sánchez · Artist Portfolio (frontend)

> **Punto de entrada obligatorio para cada sesión en este repositorio.** Aquí vive el proyecto frontend. Lee este archivo y los docs que la tarea requiera antes de tocar nada. El repositorio es la fuente de verdad persistente; no asumas que el contexto de una conversación anterior es suficiente.

---

## 1. Qué es este proyecto

- **Sitio web del portfolio de Linet Sánchez**, artista visual contemporánea (fotografía, escultura, video). Audiencia: instituciones, curadores, galerías, coleccionistas, prensa.
- **Concepto curatorial (vigente):** *THE ARCHITECTURE OF MEMORY*.
- **Concepto de diseño (vigente):** *THE EMPTY STAGE* — el sitio es un teatro vacío antes de la función; **la luz es el único suceso**; blanco arquitectónico + penumbra escénica + motivo `00:00:00` en cifras tabulares. Detalle completo: `docs/design/redesign_v2/01_DESIGN_CONCEPT.md`.
- **Idioma público:** inglés. **Documentación interna:** español.
- Lo que NO debe ser: portfolio genérico de fotógrafo, web corporativa, plantilla, landing comercial. Debe sentirse como una exposición curada o un libro de artista.

## 2. Reglas operativas (obligatorias)

1. **No inventar contenido.** Todo dato de obra (títulos, medidas, años, soportes) proviene del dossier. Las marcas de estado del contenido se definen en `docs/project/CONTENT_STATUS.md` — usarlas SIEMPRE en el código y el copy.
2. **Integridad de la obra.** Jamás recortar, deformar ni retocar imágenes de obra (`object-fit: contain` + proporciones reales). Render limitado según `docs/project/ASSETS_MANIFEST.md` hasta llegar assets finales.
3. **Tokens-first.** Ningún valor mágico de color/espaciado/tipografía en componentes: todo pasa por el sistema de `docs/design/redesign_v2/02_DESIGN_TOKENS.md`. Un token nuevo exige documentar el cambio ahí mismo.
4. **Solo lo pedido.** Implementar la fase en curso, completa; no anticipar infraestructura ni páginas futuras. **No se inicia una fase sin aprobación explícita del usuario** (gobernanza completa en `docs/workflow/EXECUTION_PHASES.md`).
5. **Diseño del sistema v2 es la única fuente de diseño** (`docs/design/redesign_v2/`). Nada de: bordes decorativos, sombras, gradientes, iconos, radios > 0, cards, patrones genéricos de UI.
6. **Accesibilidad AA no negociable** (`docs/design/redesign_v2/06_INTERACTION_MOTION_A11Y.md`) y QA con `docs/workflow/QUALITY_CHECKLIST.md` al cierre de cada fase.
7. **Decisiones relevantes se documentan:** cambiar algo establecido exige actualizar el doc y el ADR implicado. No alterar el sistema en silencio.

## 3. Mapa de la capa de contexto

```text
frontend/
├── CLAUDE.md                             ← ESTE ARCHIVO (entrada)
├── docs/
│   ├── design/redesign_v2/               ← ESPECIFICACIÓN DE DISEÑO VIGENTE (única fuente, aprobada)
│   │   ├── 00_README.md                  índice, estado, pendientes de decisión
│   │   ├── 01_DESIGN_CONCEPT.md          concepto, referencias, riesgos/variantes
│   │   ├── 02_DESIGN_TOKENS.md           tokens listos para código (color, tipo, grid, motion)
│   │   ├── 03_LAYOUT_BLUEPRINTS.md       wireframe de las 7 rutas
│   │   ├── 04_COMPONENT_SPEC.md          anatomía/estados de los 14 componentes
│   │   ├── 05_CONTENT_MAP.md             dossier → sitio: series, obras, placas, contacto
│   │   └── 06_INTERACTION_MOTION_A11Y.md interacción, responsive, WCAG AA, performance
│   ├── architecture/
│   │   ├── ADR-000_STACK.md              ← DECISIÓN PENDIENTE: stack (resolver antes de la F-1)
│   │   └── ARCHITECTURE.md               estado real del repositorio
│   ├── project/
│   │   ├── CONTENT_STATUS.md             bloqueantes de contenido + lenguaje de marcas `(d)` / `(d-EN)`
│   │   └── ASSETS_MANIFEST.md            inventario de assets, fuentes a descargar, límites de render
│   └── workflow/
│       ├── EXECUTION_PHASES.md           fases de ejecución + Definition of Done + gobernanza
│       └── QUALITY_CHECKLIST.md          QA por fase (correr al cerrar cada una)
├── assets/images/                        ← 6 obras reales (identificación pendiente)
└── mockup/                               ← maqueta v1 (histórico; solo referencia, NO evolucionar)
```

## 4. Estado actual

- **Fase actual: F-0b** — resolver `docs/architecture/ADR-000_STACK.md` (el contexto ya está montado).
- **Implementado de la web v2: nada.** La única artefacta anterior es `mockup/` (v1, descartable, no evolucionar).
- **Fase prevista a continuación:** F-1 Fundación visual (tokens + fuentes + base layout) — requiere ADR-000 resuelto y aprobación.

## 5. Rutas del sitio (fijas)

`/` · `/work` · `/work/[slug]` · `/about` · `/press` · `/exhibitions` · `/contact` — no añadir secciones primarias sin aprobación explícita.

## 6. Materiales de referencia fuera del repo (no versionados)

- Dossier oficial: `../Dossier 2012-2025 Linet Sánchez español_compressed-3.pdf` (raíz del workspace).
- Sitios de referencia: `../docs/references/reference_pages.txt` (contexto histórico).
