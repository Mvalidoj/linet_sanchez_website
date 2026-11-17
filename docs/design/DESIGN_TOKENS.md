# DESIGN_TOKENS.md — Tokens de diseño · Linet Sánchez · Artist Portfolio

> **actualizado 2026-11-17 · dirección ratificada (ADR-005)**
>
> **Qué sustituye este documento:** la paleta "Warm Paper" y los tokens tipográficos Cormorant Garamond + Inter de la dirección anterior quedan **desechados**. Este documento lista los tokens VIGENTES, tal y como viven hoy en el bloque `@theme` de [src/styles/global.css](../../src/styles/global.css) (Tailwind v4), más los tokens RESERVADOS tomados del sistema de referencia para fases futuras.
>
> Fuente de verdad del código: el bloque `@theme` de `src/styles/global.css`. Este documento es su espejo documental. La carpeta `pinomusi/` es material de archivo: los valores de este doc bastan para trabajar sin volver a consultarla.

---

## 1. Regla de gobernanza

**Todo token nuevo se añade al bloque `@theme` y a este documento en el mismo cambio.** Ningún valor mágico en componentes: si un color, tamaño, duración o anchura se usa más de una vez (o se prevé reutilizar), es token. Los tokens reservados (§3) no se emiten en `@theme` hasta que la fase que los necesita los implemente.

---

## 2. Tokens VIGENTES (emitidos en `@theme`)

### 2.1 Color — monocromatismo estricto

| Token | Valor | Rol | Evidencia / uso |
|---|---|---|---|
| `--color-bg` | `#ffffff` | Fondo de página, header, botones | Todo el sitio; overlay de visor "papel" |
| `--color-ink` | `#666666` | Texto base, enlaces, nav, headings | Contraste bajo deliberado: la interfaz se retira |
| `--color-ink-strong` | `#000000` | Hover / activo, texto de botones, flechas de visor | Único negro; nunca grandes bloques |
| `--color-wordmark` | `#2e2e2e` | Wordmark del header | `.wordmark` |
| `--color-hairline` | `#f0f0f0` | Hairline 1px universal de imagen | Marco de TODA obra (thumb y grande) |
| `--color-hairline-dark` | `#e1e1e1` | Hairline bajo header al scroll (`menuOnPage`) | `.site-header::after` (opacity 0 en reposo) |
| `--focus-outline` | `2px solid #000000` | Anillo de foco visible | `:focus-visible`, offset 3px |

**Tokens de estado del sistema de referencia ya ratificados pero aún NO emitidos:** ver §3 (incluye la única tinta de estado `#DE363A`).

### 2.2 Tipografía

| Token | Valor | Rol |
|---|---|---|
| `--font-site` | `Arial, Helvetica, sans-serif` | Única familia del sitio, sin webfonts (divergencia consciente del original, que carga Roboto — ver [TYPOGRAPHY.md](TYPOGRAPHY.md)) |
| `--fs-nav` | `14.5px` | Navegación (lowercase) |
| `--fs-wordmark` | `15px` | Wordmark del header |
| `--fs-meta` | `12px` | Metadatos, footer, notas |

La escala completa por rol (body 13px, H2 15px, micro-caption 10px, etc.) está en [TYPOGRAPHY.md](TYPOGRAPHY.md); solo los tamaños con token viven en `@theme`.

### 2.3 Layout

| Token | Valor | Rol |
|---|---|---|
| `--header-height` | `100px` | Altura del header fijo |
| `--content-max` | `1600px` | Ancho máximo del escenario |
| `--side` | `30px` (→ `20px` a ≤950px) | Margen lateral de página |
| `--top-offset` | `145px` | Offset del contenido bajo el header fijo |
| `--nav-gap` | `22px` (→ `14px` a ≤480px) | Separación entre items de nav |
| `--air-bottom` | `90px` | Aire de silencio pre-footer |

### 2.4 Slideshow de la home

| Token | Valor | Rol |
|---|---|---|
| `--slideshow-ratio` | `720 / 892` | Ratio nativo de la obra más alta; fija el stage para CLS 0. **Las 6 keyframes del crossfade asumen exactamente 6 slides (ciclo 30s): si cambia el número de slides, regenerarlas** (comentario de `global.css`). |

### 2.5 Motion

| Token | Valor | Rol |
|---|---|---|
| `--dur-fade` | `350ms` | Crossfade entre slides |
| `--dur-dwell` | `5s` | Permanencia de cada obra (ciclo total = `--dur-dwell` × 6 = 30s) |

Con `prefers-reduced-motion: reduce`: `--dur-fade: 0ms` y `--dur-dwell: 99999s` (crossfade effectively disabled) + `animation: none` en slides. Tabla completa de duraciones del sistema (vigente y futura): [INTERACTION_GUIDELINES.md](INTERACTION_GUIDELINES.md).

### 2.6 Breakpoints

| Token | Valor | Rol |
|---|---|---|
| `--breakpoint-md` | `950px` | Header pasa a relative, side 20px |
| `--breakpoint-sm` | `480px` | Nav compacta (gap 14px, 13.5px) |

**Nota de implementación:** los breakpoints de Tailwind v4 se configuran a partir de estas variables; NO usar los defaults de Tailwind (768px/1024px). Detalle: [RESPONSIVE_DESIGN.md](RESPONSIVE_DESIGN.md).

---

## 3. Tokens RESERVADOS para fases futuras

Tomados del sistema de referencia y ratificados como parte del sistema. **Aún no se emiten en `@theme`**; se incorporan en la fase que los necesite, junto con su documentación aquí (§1).

### 3.1 Color

| Valor | Rol futuro | Origen / evidencia |
|---|---|---|
| `#999999` | Footer y texto débil, bordes de botones píldora | Footer/counter 12px del original |
| `#b3b3b3` | `hr` punteado (separadores) | News/diary: `hr dotted` |
| `#fbfbfb` | Fondo de banners | Banners flotantes del original |
| `#f5f5f5` | Hover de botones | Estado hover botón |
| `#d7d7d7` | Borde de banners flotantes | Banners flotantes |
| `#DE363A` | **Única tinta de estado**: error de formulario | `general.css:697`; clase `.error` en contact form |
| `#cccccc` | Bordes internos de carrito | Fuera de scope (carrito no se replica) |
| `#333333` | Texto bold de carrito | Fuera de scope |
| `#0A0A0A` | Fondo del visor en modo negro (toggle B/W) | Visor blanco: modo claro `#EEE` / negro `#0A0A0A` |
| `#0078C1` | Focus de input — **color de sistema del navegador; NO usar.** El foco del sitio es `--focus-outline` negro | Evidencia, no token |

### 3.2 Radios

Existen en el sistema de referencia como radios de `border-radius`: **30 / 45 / 50%** (píldoras, botones, `.roundImg` circular). El sitio de Linet NO usa elementos de UI redondeados por defecto (prohibición CLAUDE.md §5); estos radios quedan reservados únicamente si una fase los requiere y se justifica.

### 3.3 Duraciones

Reservadas del sistema de referencia para las implementaciones futuras listadas en las páginas interiores ([COMPONENT_GUIDELINES.md](COMPONENT_GUIDELINES.md)):

| Valor | Uso futuro |
|---|---|
| `.20s` | Transición de links |
| `.30s` | Thumbs (hover opacity .80) y botones/banners |
| `.45s` | Flechas de visor |
| `.50s` | `resizeDuration` del visor |
| `1s` | Animación de entrada `slidefromup` |
| `200ms` | Animación de altura del slideshow del original (sustituida por stage de ratio fijo — ver [ART_DIRECTION.md](ART_DIRECTION.md) §3) |
| `500ms` | Toggle de menú móvil del original |

### 3.4 Espaciado y grid (futuro)

Valores del sistema de grids `divGrid-*` y páginas interiores que aún no tienen página: gaps 60/37.5 · 45/22.5 · 52.5/30 · 67.5/45 · 30/15 · 60/30 px por breakpoint, aire inferior de grid 85px, `hrSpace` 185px, separación entre entradas de diary 55px. Detail completo: [LAYOUT_AND_SPACING.md](LAYOUT_AND_SPACING.md).

---

## 4. Opacidades estándar del sistema

| Opacity | Uso | Estado |
|---|---|---|
| `.80` | Hover sobre imagen (thumb) y zonas fantasma de navegación | Vigente en el sistema; thumbs pendientes de fase futura |
| `.70` | Controles del visor | Reservado (visor pendiente) |
| `.20` | Separadores `sepDiv` | Reservado |
| `1.0` | Overlay de visor blanco opaco (la obra "sobre papel") | Reservado |
| `0 → 1` | Flechas de visor al hover; zonas fantasma 0 → .80 | Reservado; flechas con transición .45s |

---

## 5. Historial

- **2026-11-17:** reescritura completa alineada con la dirección ratificada (ADR-005). Paleta "Warm Paper" y tipográficos Cormorant/Inter desechados. Tokens vigentes espejados desde `src/styles/global.css` (migración de `css/tokens.css` + `css/styles.css` del mockup).
