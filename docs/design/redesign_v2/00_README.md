# redesign_v2 — Paquete conceptual de rediseño · "THE EMPTY STAGE"

> **Estado: ESPECIFICACIÓN VIGENTE para la ejecución** (aprobada por el usuario el 2025-11-10 como base del rediseño v2). Este paquete es la única fuente de diseño del sitio. No sustituye a la documentación v1 del raíz (`../../…`/`docs/` del raíz, histórico); el mockup v1 (`../../mockup/`) queda como registro histórico. **No contiene código** — es la especificación que las fases de `docs/workflow/EXECUTION_PHASES.md` materializan.

---

## Índice del paquete

| Archivo | Qué contiene |
|---|---|
| [01_DESIGN_CONCEPT.md](01_DESIGN_CONCEPT.md) | El concepto: origen en la obra (escenario vacío, luz como único suceso, motivo `00:00:00`), coreografía de iluminación de 3 movimientos, análisis de los sitios de referencia, anti-defaults, riesgos declarados |
| [02_DESIGN_TOKENS.md](02_DESIGN_TOKENS.md) | Sistema completo listo para copiar a código: paleta monocroma con contraste AA verificado, Newsreader + Instrument Sans, escala fluida, espacio, grid "alas + escenario", imágenes en poza sin recorte, motion, variantes de contingencia |
| [03_LAYOUT_BLUEPRINTS.md](03_LAYOUT_BLUEPRINTS.md) | Wireframe de cada página: Home (4 actos), Work (catálogo de series), serie/obra (visor), About, Press, Exhibitions, Contact + notas transversales |
| [04_COMPONENT_SPEC.md](04_COMPONENT_SPEC.md) | Anatomía y estados de 14 componentes (header, menú, placas de obra, poza, catálogo, visor, cita, estados vacíos, colofón…) + matriz de estados para QA |
| [05_CONTENT_MAP.md](05_CONTENT_MAP.md) | Del dossier al sitio: statement en inglés propuesto `(d-EN)`, catálogo de 9 series con medidas/soportes/años verificados, fichas de obra, pendientes declarados, contacto |
| [06_INTERACTION_MOTION_A11Y.md](06_INTERACTION_MOTION_A11Y.md) | Motion (reveal único "encendido"), interacciones, responsive por breakpoint, accesibilidad WCAG AA, decisiones explícitas (sin formularios, sin lightbox, sin autoplay), performance y checklist QA |

## Cómo leerlo / en qué orden

1. **Decidir dirección:** 01 (concepto) → el punto clave a validar es el acto oscuro del §2 y el §7 (riesgos/variantes).
2. **Validar sistema:** 02 + 03.
3. **Validar piezas:** 04 + 06.
4. **Validar contenido:** 05 — donde cada dato rastreable al dossier y se lista lo que falta para publicar.

## Qué hace falta del usuario / de la artista antes de ejecutar

- **OK al concepto** (y, en particular, al acto oscuro — o la variante preferida de 02 §10).
- **OK al copy EN del statement** (o correcciones — `05 §1`).
- Ningún otro bloqueante técnico: el paquete está diseñado para construirse con los assets actuales (~720–750px) sin hero full-bleed, con las placas marcando identificación pendiente.

## Skills utilizadas en este paquete y para qué

| Skill | Uso concreto |
|---|---|
| `frontend-design` | Metodología de diseño: doble pasada (plan → crítica anti-genérico), decisión de "una sola osadía" (acto oscuro), grounding en el subject matter (física de la obra), checklist de patrones genéricos de IA evitados (crema, Cormorant+Inter, eyebrows ALL‑CAPS, middle dots, cards…), principios de copywriting |
| `ui-ux-pro-max` | Reglas UX priorizadas (accesibilidad · interacción · tipografía/color · nav · motion), filas de su base (Minimalism & Swiss Style; pairing editorial) usadas para validar la dirección y declarar el fallback al no haber Python disponible para la búsqueda en máquina; contraste/dianas táctiles/motion context-aware |
| `web-design-guidelines` | Checklist íntegro de Vercel Interface Guidelines (fetched fresh): semántica, focus-visible, aria-live, tabular-nums, CLS/preload, safe-area, reduced-motion, copy activo, anti‑patrones — aplicadas íntegras en 06 y la matriz QA de 04 |
| *(Exploración)* WebFetch sobre `reference_pages.txt` | Análisis estructural de luctuymans.be y gregorcollienne.com (los accesibles); lo no verificable no se citó |

## Reglas respetadas (CLAUDE.md)

- Regla 7 (no inventar): todo dato de obra = dossier; pendientes marcados.
- Regla 8 (integridad de obra): pozas con `contain`, sin recortes, render limitado por resolución.
- ADR-001 (idiomas): doc interna ES / copia pública EN.
- Regla 9 (decisiones): v1 no se toca hasta aprobación; las variantes de contingencia están documentadas.
