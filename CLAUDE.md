# CLAUDE.md — Linet Sánchez · Artist Portfolio

> **Punto de entrada obligatorio para cada sesión de trabajo.** Lee este archivo y la documentación pertinente al task antes de hacer ningún cambio. El repositorio es la fuente de verdad persistente; no asumas que el contexto de una conversación anterior es suficiente.

---

## 1. Identidad del proyecto

| Campo | Valor |
|---|---|
| Proyecto | Linet Sánchez — Artist Portfolio |
| Naturaleza | Sitio web editorial, sofisticado, listo para multilingüe (idioma público inicial: **inglés**) |
| Cliente | Linet Sánchez, artista visual contemporánea (fotografía, escultura, video) |
| Audiencia | Instituciones, curadores, galerías, coleccionistas, investigadores, prensa, profesionales del arte |
| Concepto rector | **THE ARCHITECTURE OF MEMORY** — "A digital space between memory, absence and imagination" |

**Lo que NO debe ser:** un portfolio genérico de fotógrafo, una web corporativa, una landing comercial o una plantilla. Debe sentirse como una exposición curada o un libro de artista impreso.

**Nota de idioma:** todo el sitio público se publica en inglés, pero **la documentación interna (`docs/` y este archivo) se mantiene en español** (decisión registrada en ADR-001).

## 2. Principios de diseño obligatorios

Cinco principios guían cada decisión visual. Detalle completo en `docs/design/ART_DIRECTION.md`:

1. **Arquitectura y espacio** — grids precisos, geometría, alineación deliberada.
2. **Ausencia y vacío** — el espacio negativo es un elemento de diseño; no rellenar por rellenar.
3. **Memoria y tiempo** — ritmo visual controlado, contemplativo, atemporal.
4. **Teatralidad** — las imágenes como escenas; encuadre cinematográfico, composición deliberada.
5. **Reconstrucción e introspección** — layouts modulares, asimetría, cambios sutiles de escala.

## 3. Índice de documentación

- **Contexto y alcance**
  - [docs/project/PROJECT_OVERVIEW.md](docs/project/PROJECT_OVERVIEW.md) — qué es, audiencia, estado actual.
  - [docs/project/ARTIST_CONTEXT.md](docs/project/ARTIST_CONTEXT.md) — práctica, temas, universo conceptual, referencias preliminares.
  - [docs/project/CONTENT_GUIDELINES.md](docs/project/CONTENT_GUIDELINES.md) — reglas de contenido, inglés público, no inventar.
  - [docs/project/PROJECT_ROADMAP.md](docs/project/PROJECT_ROADMAP.md) — roadmap en una vista.
- **Diseño**
  - [docs/design/ART_DIRECTION.md](docs/design/ART_DIRECTION.md) — concepto creativo completo.
  - [docs/design/DESIGN_TOKENS.md](docs/design/DESIGN_TOKENS.md) — paleta, tokens (especificación; aún no implementados).
  - [docs/design/TYPOGRAPHY.md](docs/design/TYPOGRAPHY.md) — Cormorant Garamond + Inter, escalas.
  - [docs/design/LAYOUT_AND_SPACING.md](docs/design/LAYOUT_AND_SPACING.md) — grid, anchos, espaciado.
  - [docs/design/RESPONSIVE_DESIGN.md](docs/design/RESPONSIVE_DESIGN.md) — comportamiento desktop/tablet/móvil.
  - [docs/design/COMPONENT_GUIDELINES.md](docs/design/COMPONENT_GUIDELINES.md) — reglas por componente.
  - [docs/design/INTERACTION_GUIDELINES.md](docs/design/INTERACTION_GUIDELINES.md) — motion, accesibilidad, teclado.
- **Arquitectura**
  - [docs/architecture/TECHNICAL_ARCHITECTURE.md](docs/architecture/TECHNICAL_ARCHITECTURE.md) — arquitectura planificada vs. implementada.
  - [docs/architecture/CONTENT_MODEL.md](docs/architecture/CONTENT_MODEL.md) — modelo de contenido Sanity planificado.
  - [docs/architecture/FILE_STRUCTURE.md](docs/architecture/FILE_STRUCTURE.md) — estructura del repositorio.
  - [docs/architecture/ARCHITECTURAL_DECISIONS.md](docs/architecture/ARCHITECTURAL_DECISIONS.md) — registros ADR.
- **Flujo de trabajo**
  - [docs/workflow/DEVELOPMENT_WORKFLOW.md](docs/workflow/DEVELOPMENT_WORKFLOW.md) — cómo abordar cada tarea.
  - [docs/workflow/IMPLEMENTATION_PHASES.md](docs/workflow/IMPLEMENTATION_PHASES.md) — fases de desarrollo.
  - [docs/workflow/QUALITY_CHECKLIST.md](docs/workflow/QUALITY_CHECKLIST.md) — checklist de calidad reutilizable.

Origen de todo: `context.txt` (brief maestro de inicialización, no modificar sin consenso).

## 4. Reglas operativas permanentes

1. **Leer el contexto primero.** Antes de cambiar nada, leer CLAUDE.md y la documentación pertinente al task.
2. **Preservar el design system.** Nunca introducir un color, tipografía, espaciado, tratamiento de borde o patrón de interacción nuevo sin razón clara. Reutilizar tokens existentes; si hace falta uno nuevo, documentarlo junto a su implementación.
3. **Preservar la identidad artística.** Toda decisión visual refuerza "THE ARCHITECTURE OF MEMORY". No plantillas genéricas ni modas visuales.
4. **Respetar lo implementado.** Inspeccionar antes de modificar un componente. Preferir extender lo existente antes que duplicar. No reescribir arquitectura que funciona sin justificación.
5. **Trabajo incremental.** Implementar solo la fase o feature pedida. No anticipar infraestructura futura. No implementar varias páginas cuando se pide una.
6. **Consistencia responsive.** Todo componente/página nuevo funciona en desktop, tablet y móvil, siguiendo `RESPONSIVE_DESIGN.md`.
7. **No inventar contenido.** Nunca inventar: biografía, títulos de obra, fechas, exposiciones, publicaciones, premios, materiales, dimensiones, curadores, galerías. Solo información verificada; marcar explícitamente lo faltante.
8. **Proteger la integridad de las obras.** Nunca recortar, recolorear, distorsionar ni modificar obras. Usar assets reales; si hay placeholders, identificarlos claramente.
9. **Documentar decisiones importantes.** Cambiar una decisión establecida exige: justificar, identificar docs afectados, actualizar el ADR y actualizar el documento correspondiente. No alterar el sistema en silencio.
10. **Mantener documentación sincronizada.** Toda función reutilizable, token, regla o estructura nueva se documenta donde corresponda. La documentación describe el estado real, no un plan caducado.
11. **Preguntar ante supuestos sustanciales.** Si un requisito importante admite interpretaciones muy distintas, hacer una pregunta concisa antes de proceder. Decisiones menores: juicio profesional + anotar el supuesto.
12. **Explicar los cambios de implementación.** Al final de cada task: qué se implementó, archivos tocados, decisiones de diseño, comportamiento responsive, validación, limitaciones conocidas y documentación actualizada.

## 5. Convenciones técnicas

- **Arquitectura planificada** (aún NO implementada): Next.js + React + TypeScript, Sanity CMS, CSS Modules o sistema de estilos estructurado, hosting en Vercel. Detalle y estado real en `docs/architecture/TECHNICAL_ARCHITECTURE.md`.
- **Secciones:** Home / Work / About / Press / Exhibitions / Contact — rutas `/`, `/work`, `/work/[slug]`, `/about`, `/press`, `/exhibitions`, `/contact`. No añadir secciones de navegación primarias sin aprobación explícita.
- **Idioma público:** inglés. **Documentación interna:** español.
- **Estilo de código:** seguir el idioma predominante del código en cada momento (una vez exista código frontend, los identificadores y comentarios irán en inglés).
- Evitar siempre: tarjetas redondeadas, sombras innecesarias, gradientes, iconos decorativos, componentes de UI genéricos, bordes innecesarios, efectos artificiales.

## 6. Estado del proyecto

- **Fase actual:** 0 — Inicialización y contexto (en curso).
- **Implementación:** ninguna. El repositorio solo contiene este sistema de documentación, `context.txt` y git inicializado.
- **Materiales de la artista:** pendientes de entrega (dossier PDF, imágenes de obra, retrato, video, CV). Ver `docs/project/CONTENT_GUIDELINES.md` → "Materiales pendientes".
- Próxima fase prevista: **Fase 1 — Fundación visual** (requiere aprobación explícita; ver `docs/workflow/IMPLEMENTATION_PHASES.md`).

## 7. Gobernanza de fases

Las fases (`IMPLEMENTATION_PHASES.md`) establecen el orden pero **no se avanza automáticamente** al terminar una: hay que esperar aprobación explícita. No empezar la siguiente fase sin el OK del usuario.
