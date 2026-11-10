# FILE_STRUCTURE

> Estructura del repositorio. **Actualiza este documento con cada cambio de estructura** (Regla 10, `../../CLAUDE.md`): describe el estado real, no solo el plan.

## 1. Estructura actual (real, 2026-11-10)

```text
frontend/                        (D:\Migue\Trabajo\WTS\Proyectos\art_portfolio\frontend)
├── CLAUDE.md                    Punto de entrada; reglas operativas e índice
├── context.txt                  Brief maestro de inicialización (origen del proyecto; no modificar)
├── docs/
│   ├── project/
│   │   ├── PROJECT_OVERVIEW.md
│   │   ├── ARTIST_CONTEXT.md
│   │   ├── CONTENT_GUIDELINES.md
│   │   └── PROJECT_ROADMAP.md
│   ├── design/
│   │   ├── ART_DIRECTION.md
│   │   ├── DESIGN_TOKENS.md
│   │   ├── TYPOGRAPHY.md
│   │   ├── LAYOUT_AND_SPACING.md
│   │   ├── RESPONSIVE_DESIGN.md
│   │   ├── COMPONENT_GUIDELINES.md
│   │   └── INTERACTION_GUIDELINES.md
│   ├── architecture/
│   │   ├── TECHNICAL_ARCHITECTURE.md
│   │   ├── CONTENT_MODEL.md
│   │   ├── FILE_STRUCTURE.md
│   │   └── ARCHITECTURAL_DECISIONS.md
│   └── workflow/
│       ├── DEVELOPMENT_WORKFLOW.md
│       ├── IMPLEMENTATION_PHASES.md
│       └── QUALITY_CHECKLIST.md
└── .git/                        Git inicializado, sin commits (rama master)

# fuera del repo frontend (directorios padres):
art_portfolio/
└── Dossier 2012-2025 Linet Sánchez español_compressed-3.pdf   Único asset de la artista (pendiente de tratamiento)
```

No existe ningún otro archivo ni código.

## 2. Estructura prevista (a crear en Fase 1+, con stack a decidir)

```text
frontend/
├── src/ (o app/)
│   ├── app/                     Rutas: /, /work, /work/[slug], /about, /press, /exhibitions, /contact
│   ├── components/              Componentes reutilizables (header, footer, grids, galería…)
│   ├── styles/                  Estilos globales, tokens (CSS Modules + globals)
│   ├── lib/                     Utilidades, cliente de datos
│   └── types/                   Tipos TS
├── public/                      Assets estáticos (obras, retratos — pendientes de entrega)
├── docs/                        Este sistema de documentación
├── sanity/ (Fase 7)             Schemas Sanity
└── CLAUDE.md
```

La forma exacta (App Router, nombre de carpetas, librerías) se decide al iniciar Fase 1 y se registra con un ADR, actualizando esta página.

## 3. Responsabilidades de directorios (prospectivo)

| Directorio | Responsabilidad | Regla |
|---|---|---|
| `app/` (o `pages/`) | Rutas y páginas, composición de página | Sin estilos crudos inline; usa componentes/styles |
| `components/` | Bloques reutilizables | Solo si son reutilizables de verdad; sin duplicados (Regla 4) |
| `styles/` | Tokens + estilos globales | Tokens siguen `../design/DESIGN_TOKENS.md` |
| `lib/` | Data fetching, constantes, helpers | Sin conocimiento de UI |
| `public/` | Obras y assets reales | Nada de stock disfrazado de obra (Regla 8) |
| `docs/` | Documentación del sistema | Mantener sincronizada siempre |
