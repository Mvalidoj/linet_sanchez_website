# COMPONENT_GUIDELINES.md — Componentes · Linet Sánchez · Artist Portfolio

> **actualizado 2026-11-17 · dirección ratificada (ADR-005)**
>
> **Qué sustituye este documento:** las fichas de componentes de la dirección "Warm Paper" (tarjetas, hero cinematográfico, botones genéricos) quedan **desechadas**. Vigente: anatomía de los componentes implementados + guías de los componentes futuros derivadas del sistema de referencia.
>
> Cada componente se marca con su estado: **[IMPLEMENTADO]** (existe en `src/`; el CSS de `global.css` es su verdad) o **[FUTURO — plantilla derivada del CSS del portal; sin HTML de referencia]** (los valores provienen del análisis de `general.css`/JS de la referencia; el HTML del original no se guardó, por lo que cada plantilla interior futura debe ratificar su markup al implementarse).

---

## 1. Componentes implementados

### 1.1 SiteHeader [IMPLEMENTADO]

Header fijo blanco 100px sobre todo el sitio.

```
┌───────────────────────────────────────────────────┐
│ Wordmark (left 30px, top 34px)      nav (right 30px, top 40px, gap 22px) │
│ 15px bold #2e2e2e                   5 items lowercase 14.5px #666        │
└───────────────────────────────────────────────────┘
```

- Sin hairline en reposo; hairline 1px `#e1e1e1` solo on-scroll (`.site-header::after`, opacity 0 — requiere JS mínimo, **pendiente**; ver [ART_DIRECTION.md](ART_DIRECTION.md) §3).
- Nav: work / about / exhibitions / press / contact. Con "línea de reserva" y `aria-current="page"` para la página activa ([TYPOGRAPHY.md](TYPOGRAPHY.md) §4).
- El header no cambia de altura en scroll; se comporta como papel fijo.
- Reglas: no añadir items de nav primaria sin aprobación (CLAUDE.md §5); nada de logos-imagen: el wordmark es texto.

### 1.2 SiteFooter [IMPLEMENTADO]

**Una línea**: texto 12px `#666`, `padding: 0 30px 24px`, tras los 90px de aire pre-footer. Sin columnas, sin enlaces sociales, sin hairline superior (el aire ES el separador). Silencio como cierre de página.

### 1.3 Slideshow (stage del home) [IMPLEMENTADO]

La home es un escenario de obra única, centrada y sin ningún otro contenido.

```
stage: width min(100%, calc((100svh - 145px - 90px) × --slideshow-ratio)) · aspect-ratio 720/892
slide: absolute inset 0, centrado flex
img:   object-fit contain · width/height nativos explícitos · border 1px #f0f0f0
```

- **Crossfade CSS puro, CERO JS**: 6 slides × dwell 5s, fade 350ms solapado en fronteras, ciclo 30s. Keyframes por slide con porcentajes exactos: 1s = 3.333%, 0.35s = 1.1667%. Solo anima `opacity`.
- Estado de reposo (sin animación / reduced motion): slide 1 visible (`.slide:first-child { opacity: 1 }`).
- `prefers-reduced-motion: reduce`: `animation: none` + tokens anulados (`--dur-fade: 0ms`, `--dur-dwell: 99999s`).
- Las 6 keyframes asumen exactamente 6 slides: si cambia el número, regenerarlas (nota en `global.css`).
- El slideshow automático es la **EXCEPCIÓN ratificada** a la regla general contra carruseles: es el corazón teatral de la home (una a una, las obras se iluminan). En ningún otro sitio del sitio hay autoplay.
- Resolvió sin JS lo que el original hacía con lazyload + precarga + animación de altura (200ms): stage de ratio fijo → CLS 0.

### 1.4 Stub pages [IMPLEMENTADO]

Páginas placeholder de fase, con el heading del sistema (13px bold `#666`) y nota de "content pending" si la página aún no tiene contenido real. Nunca con contenido inventado (CLAUDE.md §4.7).

---

## 2. Componentes futuros [FUTURO — plantillas derivadas del CSS del portal; sin HTML de referencia]

> Origen: análisis de `general.css` y JSs de la referencia. Los valores son ratificados; el markup definitivo se decide al implementar cada fase. Ninguno usa contenido editorial de la referencia.

### 2.1 Grid de thumbs (galería/listado)

```css
.portfolioElem { float: left; overflow: hidden; }
/* entrada: slidefromup 1s — margin-top: -20px → 0 */
/* hover: opacity .80 sobre thumb, transition all .3s */
```

- Variantes de grid `divGrid-*` (3/5/4/2/7/1 columnas y `divGrid-journal`): ver tabla completa en [LAYOUT_AND_SPACING.md](LAYOUT_AND_SPACING.md) §5; aire inferior 85px.
- **Caption**:
  - `[formatText]` micro-caption 10px UPPERCASE en bloque de **altura fija 205px** con clip → los rótulos alinean entre thumbs aunque varíe el texto.
  - `[countFoto]`: contador de la serie, `line-height: 50px`.
  - `[didaDscTxt]`: didascalia, `smaller` (~11–12px), `line-height: 150%`.
  - Contenido del caption: solo datos reales de la obra (serie, material, año si existe). Vacío sobrio si falta: "content pending" identificado, nunca relleno.
- Descripción de portfolio con toggle plegable (`slideToggle` slow en el original).

### 2.2 Página de obra individual

Dos columnas flotadas:

| Parte | Ancho | Contenido |
|---|---|---|
| `#workFoto` | **33%**, float left | Imagen principal + tira de galería (thumbs **22%** con margin 2%) |
| `#workDsc` | **63%**, float right, `margin-bottom 40px` | Título, metadatos, descripción |

- Imagen grande: `max-height: 88vh`, `max-width: 100%`, contain (obra vertical). Sin crop ([ART_DIRECTION.md](ART_DIRECTION.md) §2.6).
- Variante horizontal (`.dscHorz`): descripción **350px** · texto **655px** · imagen `max-height: 85vh; max-width: none`.
- Miniatura/imagen → abren el visor (§2.3). Marco 1px `#f0f0f0` en toda imagen de obra.

### 2.3 Visor blanco ("Shadowbox", a re-implementar sin jQuery)

Overlay de pantalla completa, blanco opaco 100% — la obra "sobre papel".

| Elemento | Anatomía |
|---|---|
| Fondo | Overlay blanco 100% (modo papel) o cuerpo `#EEE`; modo negro alternativo `#0A0A0A` con toggle B/W |
| Counter | `n/total`, 12px, top-left, `#999` |
| CLOSE | × en Courier bold 23px, top-right |
| PLAY / PAUSE | top; slideshow interno de **8s continuous** |
| Prev / next | Zonas invisibles **50% × 100%** de pantalla, opacity 0 → .80 al hover; flechas ‹ › en Courier, opacity 0 → 1 al hover, transición **.45s**, con shift de padding 20px (navegación ambiental, [ART_DIRECTION.md](ART_DIRECTION.md) §2.8) |
| Título | bottom-left, 12px |
| Comportamiento | `resizeDuration: .5s` (secuencia sincronizada), `user-select: none`, teclado ←/→, hash de historial por obra |

Implementar sin jQuery, con JS mínimo y justificado (regla CSS-first de [INTERACTION_GUIDELINES.md](INTERACTION_GUIDELINES.md)); requiere ADR.

### 2.4 News / diary

```
[ texto entrada: 75% float left ]  [ columna lateral sticky: 20% float right ]
```

- Fecha/tags con `margin-bottom: 10px`.
- Separación entre entradas: `padding-top: 55px`, con `hr` punteado `#b3b3b3`.
- Búsqueda 66% · paginación 33% alineada a la derecha.
- Solo entradas reales; sin contenido de ejemplo.

### 2.5 About / bio

- Stage `#bio` con `max-width: 1200px`.
- Bloques bio0–bio8 con alineación **30% / 25% / 72%** (izquierda / derecha / centro): composición modular asimétrica, no bio corrida.
- `#bioInfo` con `padding-bottom: 70px`.
- Fotografías con entrada `slidefromup 1s`.
- Iconos sociales de 36px con `padding: 3px 5px 2px 0` (si existen perfiles reales; nunca placeholders de redes).

### 2.6 Contact form

| Elemento | Valor |
|---|---|
| Inputs | `width: 98%; max-width: 400px; padding: 6px; font-size: 12px; box-sizing: border-box` |
| Checkbox | alineado al flujo (auto) |
| Submit | `padding: 5px 35px` |
| Formulario | `#contactsForm`, `margin-bottom: 60px` |
| Error | clase `.error` → **`#DE363A`** (única tinta de estado del sistema) |
| Página legal | `#legal`, `padding: 20px`, `margin: auto 50px` |

### 2.7 Tratamiento de imágenes (transversal)

- `border: 1px solid #f0f0f0` en TODA imagen de obra (thumb e imagen grande).
- `contain` nunca crop; `max-height: 88vh` (vertical) / `85vh` (horizontal).
- Sin sombras ni radius sobre obra. Variante `.roundImg` (círculo 50%) existe en el sistema pero **no se usa por defecto**.
- Resizer original del portal: servido a 1600×1600 por el servidor. Equivalente aceptable: servir originales <2000px o pre-generar variantes — **decisión futura**. Hoy: obras byte-a-byte en `public/` (ADR-007).

### 2.8 Estados vacíos

Sobrios y explícitos: "content pending" identificable, tipografía del sistema (12–13px `#666`), sin ilustraciones ni skeletons decorativos. Nunca inventar contenido para rellenar.

---

## 3. Fuera de scope (decidido, no implementar)

Del portal original, excluidos (ver [ART_DIRECTION.md](ART_DIRECTION.md) §3): carrito y sus bordes internos, banner de cookies, botón fullscreen, botón "i" de share.

---

## 4. Historial

- **2026-11-17:** reescritura. Fichas "Warm Paper" desechadas. Implementados ratificados desde `global.css`; plantillas interiores etiquetadas como derivadas del CSS del portal, con markup pendiente de ratificar por fase.
