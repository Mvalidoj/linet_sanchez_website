# EXECUTION_PHASES — fases de ejecución de la web v2

> Reemplaza operativamente a las fases v1 del raíz para este repositorio. **Gobernanza: no se inicia una fase sin la aprobación explícita del usuario; al cerrar una fase, correr `QUALITY_CHECKLIST.md` y presentar el informe (qué se implementó, archivos, decisiones, responsive, validación, limitaciones, docs actualizados).**
> Cada fase consume `../design/redesign_v2/` (referencias por número de doc §). El stack se resuelve en F-0b (`../architecture/ADR-000_STACK.md`); la estructura física de archivos de F-1+ depende de esa decisión.

---

## F-0 Contexto ✅ COMPLETADA

- [x] Paquete de diseño `redesign_v2` aprobado y trasladado a este repo.
- [x] Capa de contexto montada (este árbol de `docs/` + `CLAUDE.md` + ADR-000 + inventarios).

## F-0b Decisión de stack — EN CURSO (bloquea todo lo demás)

- Resolver `../architecture/ADR-000_STACK.md`: Opción A (estático) / Opción B (Next.js + TS) u otra declarada; registrar fecha y decisión.
- Sincronizar tras la decisión: `../ARCHITECTURE.md`, `../../CLAUDE.md §4`.
- **DoD:** ADR-000 en estado "Aceptado" con los árboles de archivos de F-1 concretados para el stack elegido. Sin código.

## F-1 Fundación visual (tokens + base)

**Alcance:** materializar el sistema: tokens literales de `02` (color, tipo, escala, espacio, grid, motion, z-index §1–§11), descarga y carga de las fuentes (`../project/ASSETS_MANIFEST.md §2`), base stylesheet, layout maestro "alas+escenario" (`02 §5`), header/nav + menú modal (`04 §1–§2`), skip-link (`04 §14`), colofón/footer (`04 §12`).

**DoD:**
- [ ] `02 §12` checklist completo (tokens únicos, fuentes con preload/swap, theme-color).
- [ ] Header, menú modal (focus trap, Esc, devolución de focus) y footer funcionan según matriz de estados de `04`.
- [ ] Validación responsive del layout base en móvil/tablet/desktop (`06 §4`).
- [ ] **Pausa: aprobación del usuario antes de F-2.**

## F-2 Componentes

**Alcance:** implementar `04 §3–§13` como piezas reutilizables: wordmark, statement, work-plate (placa), work-well (poza con regla `contain` + estados encendido), series-index (catálogo y variante rail), work-viewer (visor con deep-link + contador `aria-live`), quote, empty-state, text-link, text-action. Sin páginas aún (los componentes se prueban en una página de labor si el stack lo permite).

**DoD:**
- [ ] Cada componente cumple su matriz de estados (hover/focus/aria/reduced-motion).
- [ ] Placas y estados vacíos usan el lenguaje de marcas de `../project/CONTENT_STATUS.md §1`.
- [ ] Sin valores mágicos fuera de tokens.
- [ ] **Pausa: aprobación antes de F-3.**

## F-3 Home `/` (los cuatro actos)

**Alcance:** página completa según `03 §A`: Acto I (vestíbulo: statement + obra con reveal único), Acto II (catálogo de series escaladas), Acto III (acto oscuro `00:00:00`, full-bleed, diptych + cita Bachelard), Acto IV (colofón real con datos verificados de `05 §4`).
**Con contenido real:** los 6 assets disponibles con placa mínima y marcas de `CONTENT_STATUS` — nada de títulos inventados.

**DoD:**
- [ ] El blueprint `03 §A` reproducido; reveal único con reduced-motion apagado (`06 §2`).
- [ ] Render de imágenes dentro del límite 1.5× (`../project/ASSETS_MANIFEST.md §1`).
- [ ] Responsive completo y `QUALITY_CHECKLIST.md` al 100%.
- [ ] **Pausa: aprobación antes de F-4.**

## F-4 Work: catálogo + serie/obra

**Alcance:** `/work` según `03 §B` (9 filas de series del dossier, escalas alternadas, una imagen representativa por serie) y `/work/[slug]` según `03 §C` (statement de serie, visor secuencial con deep-link por obra, prev/next como enlaces reales, contador). Video de serie 6 como still + bloqueo B7.

**DoD:**
- [ ] Deep-links funcionales (cmd/click, navegación teclado ←/→); `aria-live` en contador.
- [ ] Datos al 100% trazables a `05 §2–§4`; gaps declarados sin rellenar.
- [ ] **Pausa: aprobación antes de F-5.**

## F-5 About / Press / Exhibitions / Contact

**Alcance:** páginas según `03 §D–§G`: statement íntegro (`(d-EN)` en revisión interna hasta B1), estados vacíos con copy de `CONTENT_STATUS §3`, contacto con email + Instagram + ciudad (B8).

**DoD:** estados vacíos + marcas correctos; sin datos no verificados publicados; checklist de calidad completa.

## F-6 QA global y pulido

- [ ] `QUALITY_CHECKLIST.md` íntegro, a mano (no automático) sobre todas las páginas/rutas.
- [ ] Auditoría Lighthouse (perf/a11y/SEO ≥ 90; objetivos de `06 §7`: CLS < 0.1).
- [ ] Informe final y actualización de `../ARCHITECTURE.md` (estado post-fases) y de los ADR implicados.

---

## Dependencias transversales

- **Contenido:** los bloqueantes de `../project/CONTENT_STATUS.md` se monitorean en TODAS las fases; nada de código depende de ellos (estados vacíos siempre).
- **Assets:** fuentes en F-1; video si llega; límite de render vigente hasta assets finales.
- **Stack:** solo F-0b lo decide; todo lo anterior es agnóstico.
