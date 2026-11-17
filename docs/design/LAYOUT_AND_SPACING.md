# LAYOUT_AND_SPACING.md — Layout y espaciado · Linet Sánchez · Artist Portfolio

> **actualizado 2026-11-17 · dirección ratificada (ADR-005)**
>
> **Qué sustituye este documento:** el grid editorial multi-columna y la escala de espaciado 4/8 de la dirección anterior ("Warm Paper") quedan **desechados**. Vigente: el sistema de escenario + ritmo vertical + grids `divGrid-*` extraído del sistema de referencia y ya parcialmente implementado en [src/styles/global.css](../../src/styles/global.css).
>
> Documento autocontenido: todos los valores están aquí. La carpeta `pinomusi/` es material de archivo.

---

## 1. Escenario global

La página es un "papel" único, centrado, de ancho contenido:

```css
.intro / .stub-page (escenario) {
  max-width: var(--content-max);      /* 1600px */
  margin: 0 auto;
  padding: var(--top-offset) var(--side) var(--air-bottom) var(--side);
  min-height: calc(100vh - var(--header-height));
}
```

| Parámetro | Valor | Nota |
|---|---|---|
| Ancho máximo | **1600px** (`--content-max`) | El contenido nunca crece más allá; monitores anchos ganan aire a los lados |
| Padding superior | **145px** (`--top-offset`) | Contenido arranca bajo el header fijo de 100px; el original usa 130–145px según página — vigente 145 |
| Laterales | **30px** (`--side`) | **20px a ≤950px** |
| Inferior | **90px** (`--air-bottom`) | Aire de silencio pre-footer: el vacío es la última pieza de cada página |
| Min-height | `calc(100vh - 100px)` | La página siempre llega al fold con contenido/aire |

El original enmarca el escenario con `position: relative` + offset superior **130px** en algunas plantillas; aquí se normaliza a **145px** (valor vigente) — anotado como normalización consciente al migrar.

---

## 2. Header, wordmark y nav (geometría exacta)

Header **fixed**, blanco, sin borde en reposo:

```css
.site-header {
  position: fixed;
  height: var(--header-height);   /* 100px */
  background: var(--color-bg);    /* cubre el scroll bajo él */
  z-index: 10;
}
.site-header::after {
  /* hairline 1px #e1e1e1 (menuOnPage) solo on-scroll — requiere JS mínimo,
     PENDIENTE; en reposo opacity: 0 */
  border-bottom: 1px solid var(--color-hairline-dark);
  opacity: 0;
}
```

| Elemento | Geometría |
|---|---|
| **Wordmark** | `position: absolute; left: var(--side) /* 30px */; top: 34px` · 15px bold `#2e2e2e` · `max-width: 240px` en el original (permite nombre en dos líneas sin invadir la nav) |
| **Nav** | `position: absolute; right: var(--side) /* 30px */; top: 40px` · `display: flex; gap: var(--nav-gap) /* 22px */` · items en lowercase, 14.5px |
| **Comportamiento on-scroll** | Original: ocultar header al bajar (fadeOut 200ms + slideUp 350ms) · mostrar al subir (fadeIn 400ms + slideDown 250ms) + hairline `menuOnPage` · **PENDIENTE de implementar** (requiere JS mínimo, decisión futura). Estado vigente: header estático siempre visible |

A ≤950px el header pasa a `position: relative` con altura auto y la nav envuelve (fila con wrap). Ver [RESPONSIVE_DESIGN.md](RESPONSIVE_DESIGN.md).

---

## 3. Ritmo vertical (valores exactos)

Sistema de aire, de arriba a abajo de la página:

| Aire | Valor | Dónde |
|---|---|---|
| Bajo header (inicio de contenido) | **145px** (original 130–145) | `--top-offset` en `.intro`/`.stub-page` |
| Intro / lead de página | padding-top **32px** a ≤950px | Responsivo |
| Entre bloques de texto | **30–70px** según densidad (p con `padding-bottom: 30px`; bloques bio con 70px) | No token: escala semántica mínima |
| Aire inferior de grids de obra | **85px** (`divGrid-*` padding-bottom) | Todo grid de thumbnails |
| Separador grande entre secciones | `hr.hrSpace` con aire total **185px** | Divisor editorial |
| Aire pre-footer | **90px** (`--air-bottom`) | Siempre; es el cierre de cada página |
| Footer | `padding: 0 30px 24px` (una línea, 12px) | Vigente |

Regla de lectura: el aire crece hacia los extremos de la página (más abajo del header, máximo antes del footer). Nada de espaciado simétrico tipo márgenes uniformes.

Ejemplos concretos del sistema (futuros): bloques `#bioInfo` con `padding-bottom: 70px`; entradas de diary con `padding-top: 55px`; formulario de contacto con `margin-bottom: 60px`; captions con bloque fijo de **205px**.

---

## 4. El stage del home (fórmula vigente)

La home es un escenario de obra única y centrada. Su anchura se deriva de la **altura disponible** y del **ratio nativo de la obra más alta**:

```css
.slideshow {
  width: min(100%, calc((100svh - var(--top-offset) - var(--air-bottom)) * var(--slideshow-ratio)));
  aspect-ratio: var(--slideshow-ratio);
  margin: 0 auto;
}
/* --top-offset: 145px · --air-bottom: 90px · --slideshow-ratio: 720 / 892 */
```

- La obra **más alta** (720×892) fija el ratio del stage → el stage no cambia de tamaño entre slides → **CLS 0**.
- Dentro del stage, cada obra renderiza con `object-fit: contain`, `width/height` nativos explícitos (nunca crop). Integridad de obra: [ART_DIRECTION.md](ART_DIRECTION.md) §2.6.
- Equivalencia con el original: la referencia animaba la altura del contenedor (200ms) tras lazyload; aquí la altura es constante por construcción. Decisión migrada consciente, más robusta y sin JS.

---

## 5. Grids `divGrid-*` — sistema para páginas de obra (futuro)

Sistema de grids de thumbnails del sistema de referencia, **ratificado** para las páginas interiores de obra (aún sin página que lo use). Estructura común:

```css
.portfolioElem { float: left; overflow: hidden; }   /* entrada + hover */
/* entrada: animación slidefromup 1s (margin-top -20px → 0) */
/* hover thumb: opacity .80, transition all .3s */
divGrid   { padding-bottom: 85px; }
```

Variantes ratificadas (anchos de gaps en px, desktop → breakpoints menores del original):

| Variante | Columnas | Gap (col / row) | Uso previsto |
|---|---|---|---|
| `divGrid-3` | 3 | 60 / 37.5 | Listado de series/obras |
| `divGrid-5` | 5 | 45 / 22.5 | Sets fotográficos densos |
| `divGrid-4` | 4 | 52.5 / 30 | Estándar de galería |
| `divGrid-2` | 2 | 67.5 / 45 | Obra grande, contraste a escala |
| `divGrid-7` | 7 | 30 / 15 | Contact sheets / filmstrips |
| `divGrid-1` | 1 | 60 / 30, `max-width: 200mm` (~756px) centrado | Formato "página de libro" — lectura unitaria |
| `divGrid-journal` | no uniforme | nth-child 1–8: anchos **57 / 32.95 / 27 / 53 / 36.95 / 24 / 45 / 30 %**, solapes con márgenes negativos (−23%, solape −% 7) | Maquetación editorial tipo revista |

Captions del grid (ver [COMPONENT_GUIDELINES.md](COMPONENT_GUIDELINES.md)): micro-caption uppercase 10px en bloque fijo de **205px** con clip (alinea los rótulos), contador `#countFoto` con `line-height: 50px`, didascalia `smaller` con `line-height: 150%`.

**Prohibición:** no sustituir este sistema por un grid mecánico de columnas iguales (ni CSS Grid uniforme, ni utilitario de framework). La asimetría y la no-uniformidad son parte de la identidad editorial (principio 5 de [ART_DIRECTION.md](ART_DIRECTION.md)). Si una página futura necesita un caso no cubierto aquí, se ratifica como nueva variante de esta tabla y se documenta — nunca un grid ad-hoc.

---

## 6. Anchos y formatos futuros (páginas interiores)

| Elemento | Ancho / límite |
|---|---|
| Página de obra (vertical) | columna foto 33% float left · columna descripción 63% float right |
| Página de obra (variante horizontal `.dscHorz`) | descripción 350px · texto 655px · imagen `max-height: 85vh; max-width: none` |
| Imagen grande de obra | `max-height: 88vh` (vertical) / `85vh` (horizontal), `width: 100%` máx, contain |
| Tira de galería de obra | thumbs 22% con margin 2% |
| Bloque diary | texto 75% float left · columna lateral sticky 20% float right |
| Buscador / paginación | 66% / 33% right |
| Bio (`#bio`) | stage `max-width: 1200px`; bloques bio con columnas 30%/25%/72% |
| Inputs de formulario | `width: 98%; max-width: 400px; padding: 6px; font: 12px; box-sizing: border-box` |

---

## 7. Historial

- **2026-11-17:** reescritura completa alineada con ADR-005. Desechado: grid editorial de la dirección "Warm Paper", escala de espaciado anterior. Ratificado y normalizado: escenario 1600/145/30/90, stage del home con fórmula CLS 0, sistema completo de grids `divGrid-*` como base futura de páginas de obra.
