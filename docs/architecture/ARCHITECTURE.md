# ARCHITECTURE — estado real del repositorio `frontend/`

> Foto del estado real (no de planes). Fecha: 2025-11-10. Actualizar con cada fase cerrada.

## Inventariado

```text
frontend/
├── CLAUDE.md                              punto de entrada (v2)
├── docs/                                  capa de contexto v2 (nueva)
│   ├── architecture/                      ADR-000 (pendiente) + este archivo
│   ├── design/redesign_v2/                especificación de diseño vigente (7 docs)
│   ├── project/                           CONTENT_STATUS + ASSETS_MANIFEST
│   └── workflow/                          EXECUTION_PHASES + QUALITY_CHECKLIST
├── assets/images/                         6 obras reales de la artista (JPG ~720–750px)
└── mockup/                                maqueta v1 (histórico, ADR-004 del raíz)
    ├── index.html  css/  js/  assets/fonts/ (Cormorant Garamond 400 + Inter variable)
```

## Lo que NO existe todavía

- Cualquier implementación de la web v2 (no hay, por ahora, carpeta de build ni código de la v2).
- Fuentes de la v2 (Newsreader + Instrument Sans) — pendiente de descarga en F-1 (ver `../project/ASSETS_MANIFEST.md`).
- CMS, tooling, test runner, CI, deploy.

## Decisiones de arquitectura vigentes

| ADR | Decisión | Estado |
|---|---|---|
| ADR-000 (este repo) | Stack de la web v2 (estático vs Next.js) | **PENDIENTE** — bloquea F-1 |
| ADR-004 (raíz) | Maqueta v1 estática desechable como validación visual | Vigente pero solo como histórico — la v2 NO evoluciona desde su código |
| Fuentes v2 | Newsreader + Instrument Sans (02 §2) | Especificado, sin descargar/instalar |

## Notas

- El diseño v2 (`../design/redesign_v2/02_DESIGN_TOKENS.md`) está escrito en formato CSS custom properties agnóstico del stack: trasladable 1:1 a `css/tokens.css` (Opción A) o a tokens globales de Next.js (Opción B).
- El JS de la v2 es mínimo y sin librerías (06 §7): menú modal, navegación del visor, reveal. Todo lo demás debe funcionar sin JS.
