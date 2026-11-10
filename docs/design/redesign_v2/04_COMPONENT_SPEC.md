# 04 · ESPECIFICACIÓN DE COMPONENTES (v2)

> Anatomía, estados y comportamiento de cada componente. Nombres listos para clase BEM en la fase de ejecución. Tokens referenciados: `02_*`. Sin bordes, sombras, radios ni iconos (02 §6, §9, §11).

---

## 1. Header / navegación primaria — `site-header`

**Rol:** único elemento persistente. Bodega-izquierda = palabra marca; escenario-derecha = nav.

**Anatomía:**
```
┌──────────────────────────────────────────────────────────┐
│ Linet Sánchez                    Work  About  Contact   ⋯│
└──────────────────────────────────────────────────────────┘
```
- `<header>` fijo (`position: sticky; top: 0`), fondo `--plaster` sólido, **sin sombra ni borde** al hacer scroll (se distingue por el aire propio).
- Wordmark: "Linet Sánchez", Newsreader `--fs-title`, peso 300, enlaza a `/`. Nunca en mayúsculas.
- Nav primaria (Instrument Sans, `--fs-nav`): solo 3 entradas en desktop — `Work` / `About` / `Contact` + botón de texto `More` que abre el panel (ver ítem 2). Página activa: subrayado fino persistente (`text-underline-offset: 0.35em`); hover en las demás: subrayado con transición 160ms. `aria-current="page"` en la activa.
- La nav es minimal a propósito (referencia Collienne, 01 §3): las páginas `Work/About/Contact` son las de decisión; `Press` y `Exhibitions` se enlazan desde `More` y desde el colofón — el brief fija que no se añaden secciones primarias nuevas sin aprobación; aquí solo se reordena la jerarquía visual, no la de rutas.
- Altura del header: `--space-8`; skip-link primero en el DOM (`--z-skip`).
- Keyboard: el header es `<nav aria-label="Primary">`; el botón `More` es `<button aria-expanded aria-controls>` (web guidelines: botón vs. `<a>`).

**Estados:** default · página activa · hover (subrayado 160ms) · focus-visible (outline 2px `--ink`, offset 3px) · scroll: sin cambios.

---

## 2. Menú extendido (panel `More` + móvil) — `menu-panel`

- Un único panel reutilizado en desktop (`More`) y móvil (hamburguesa de texto `Menu` — el botón es texto, no icono).
- Diálogo modal accessible: `role="dialog" aria-modal="true"`, focus trap, cierre con `Esc`, `overscroll-behavior: contain`, publicación del estado en el botón (`aria-expanded`).
- Contenido: las 6 rutas como lista vertical de texto en Newsreader `--fs-display` (una tipografía, sin cajas); la ruta activa marcada por subrayado permanente.
- Fondo: `--plaster` (nunca oscuro: es navegación, no escena).
- Transición de apertura 250ms (`opacity` + `transform: translateY(-8px→0)`, interruptible, cancelable con pointerdown). `prefers-reduced-motion`: sin transform, solo opacidad instantánea.
- Móvil: mismo panel a pantalla completa (no drawer lateral: la escena no se desliza, aparece).

---

## 3. Wordmark — `wordmark`

- Texto puro; **no es logo gráfico** (02 §9). Dos tamaños: header (`--fs-title`) y colofón (igual). Color `--ink`; en ningún caso decorado (sin itálica, sin tracking).

## 4. Statement / enunciado curatorial — `statement`

- Newsreader italic, `--fs-body-lg`, `--lh-body`, máx ~12 palabras por línea, ancho máx `52ch`.
- El único bloque del sitio permitido al aire libre (sin placa). Color `--ink`.
- Variante `statement--hero` (Home Acto I): puede convivir con la obra a la derecha; verticalmente centrada respecto a la poza.

## 5. Placa de obra (caption) — `work-plate`

**Anatomía (la etiqueta de museo, 01 §4.5):**
```
Untitled (hall) · 2019 — 2020        ← Newsreader italic, --fs-meta, --ink
digital photography · 100 × 150 cm   ← Instrument Sans, --fs-meta, --meta, tnum
```
- Dos líneas, separadas por espacio, **sin puntos medios decorativos en la primera línea** (el separador del título/año es el espacio). Sin enlaces dentro de la placa salvo que toda la obra lo sea (Home catálogo).
- Estados: default · dentro de obra clicable (la placa hereda el hover: `--meta → --ink` 200ms).
- Restricción 06 §4: no usar `·` como separador entre grupos (solo dentro de línea de metadatos técnicos).

## 6. Poza de obra (contenedor de imagen) — `work-well`

- `<figure>` con fondo `--bone` (o `--stage-well` en penumbra); padding interior `--space-5`; `object-fit: contain`; `width/height` explícitos.
- La poza exista para **no recortar** y dar a la obra un plano blanco uniforme (Regla 8). Altura = proporción natural de la obra + aire; nunca `aspect-ratio` forzado que recorte.
- Estados: reposo (imagen `opacity: .94`) → hover/focus (imagen opacity 1 en 320ms — "se enciende"). En táctil, reposo = encendida (no hay hover; 06 §3).

## 7. Índice de series (catálogo) — `series-index`

- `<ol>` de filas (cronología real = secuencia legítima, pero **sin numeración visible**: el año hace el orden, 01 §3).
- Fila: rail con años `tnum --fs-meta` + nombre de serie Newsreader `--fs-title` + soporte/contador de obras en `--meta`; poza derecha con `--img-rest → --img-lit`.
- Fila clicable completa (`<a>` envolvente con `display:block`); hover en toda la fila: nombre pasa de peso 300→400 (subrayado solo en el nombre).
- Variante en rail (Home Acto II): solo años + nombre, cada uno con enlace ancla.

## 8. Visor secuencial (detalle de serie) — `work-viewer`

- Vista única con: obra (`work-well` ampliado), placa debajo, contador `03 / 09` (`--fs-meta`, `tnum`), enlaces `previous/next` como texto en los extremos del bloque.
- Deep‑link y navegación por teclado: flechas ←/→ cuando el focus está en el visor (`tabindex="0"` + `keydown`); **las flechas también son enlaces `<a>` reales** (cmd/click, SEO, 06 §3).
- El contador es el motivo cronótico en su función pura (01 §4.4).
- Transición de cambio de obra: cross‑fade de 300ms solo en `opacity` (transform prohibido aquí: la obra no se mueve, se ilumina/apaga).

## 9. Cita — `quote`

- Newsreader italic `--fs-body-lg`; autoría en `--meta` (Instrument Sans, tabular no necesario). Uso: Bachelard en acto III (Home) y About. Sin comillas tipográficas decorativas sobredimensionadas; comillas curvas normales (" … ", 06 §4).

## 10. Estado vacío — `empty-state`

- Una sola línea: `--fs-meta`, `--meta`, sin caja, sin icono, sin borde. Copy direccional (06 §5). Si aplica, termina con la vía de contacto subrayada.

## 11. Enlace de texto — `text-link`

- Subrayado fino persistente, `text-underline-offset: 0.3em`, hover: color `--ink` + offset 0.22em (junta 160ms). Sin `→` al final, sin flechas. `external`: `rel="noopener"`, sin icono externo.

## 12. Footer / colofón — `site-footer`

- Cuatro columnas de texto puro sobre `--plaster` (wordmark / colofón de nav breve / enlaces Work·About·Contact / ©). Sin bordes horizontales salvo `--hairline` de 1px opcional top (la separación con la última sección es, por defecto, espacio).
- El footer es el Acto IV de la Home (03 §A) y el mismo bloque en todas las páginas.

## 13. Botón de texto — `text-action`

- No hay botones sólidos en el sitio. La única acción es enlace de texto (ítem 11). Si algún día hay envío de formulario, el submit es enlace de texto con el mismo patrón — decisión registrada para no abrir la puerta a botones genéricos.

## 14. Skip-link — `skip-link`

- Primero del DOM, visible solo en focus (`:focus-visible`), texto "Skip to content", estilo text-link en negrita, `--z-skip`.

---

## Matriz de estados global (para QA de la ejecución)

| Componente | hover | focus-visible | active/aria | reduced-motion |
|---|---|---|---|---|
| nav link | subrayado | outline 2px | subrayado persistente | iguales |
| menu panel | — | focus trap visible | `aria-expanded` | sin transform |
| work-well | opacity .94→1 | igual que hover | — | sin transición |
| series-index fila | peso 300→400 | outline en fila | `aria-current` | sin transición |
| work-viewer | — | outline en obra | contador tabular | cross‑fade → corte |
| text-link | color+offset | outline 2px | visited = `--meta` | iguales |
