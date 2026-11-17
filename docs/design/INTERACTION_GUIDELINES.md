# INTERACTION_GUIDELINES.md — Interacción y motion · Linet Sánchez · Artist Portfolio

> **actualizado 2026-11-17 · dirección ratificada (ADR-005)**
>
> **Qué sustituye este documento:** las reglas de motion de la dirección "Warm Paper" (fade-ins cinematográficos, parallax, HERO) quedan **desechadas**. Vigente: el sistema de interacción del portal ratificado — motion sobrio, opacidades y transiciones cortas, a11y estricta.
>
> Documento autocontenido. Estado del código: `src/styles/global.css`.

---

## 1. Filosofía de interacción

El sitio es **contemplativo**: el motion nunca anuncia, acompaña. Tres pilares:

1. **CSS-first: CERO JS donde sea posible.** La home entera funciona sin una línea de JS. Cualquier JS futuro (visor, on-scroll del header, plegables) debe **justificarse en un ADR** y ser mínimo.
2. **La transición, no la animación.** Se animan estados de interacción (hover, foco) y el crossfade ratificado de la home. Nada se mueve "para dar vida".
3. **La navegación entre obras es ambiental e invisible** — zonas fantasma, flechas que emergen al hover, teclado. El diseño confía en la exploración.

---

## 2. Motion ratificado (vigente)

| Interacción | Comportamiento | Estado |
|---|---|---|
| **Crossfade de la home** | CSS puro, sin JS: 6 slides × dwell **5s** (`--dur-dwell`), fade **350ms** (`--dur-fade`) solapado en fronteras, ciclo **30s**. Solo anima `opacity`. Estado de reposo: slide 1 visible | [IMPLEMENTADO] |
| **Enlaces y foco** | `color #666 → #000`; transición `all .20s ease` (tabla §4) | [IMPLEMENTADO*] (color sí; el .20s es la duración ratificada del sistema) |
| **Nav: línea de reserva** | border-bottom 1px del color de fondo → se enciende `#666` en hover/activo SIN salto de layout. Página activa: `aria-current="page"` | [IMPLEMENTADO] |
| **`prefers-reduced-motion`** | Slideshow detenido (slide 1 fijo), `animation: none`, tokens anulados (`--dur-fade: 0ms`, `--dur-dwell: 99999s`) | [IMPLEMENTADO] |
| **Foco visible** | `:focus-visible` con `--focus-outline: 2px solid #000`, offset 3px | [IMPLEMENTADO] |
| **Skip link** | Visible al foco, desplazado `translateY(-200%)` en reposo, transition transform 150ms | [IMPLEMENTADO] |

> El slideshow automático de la home es la **EXCEPCIÓN ratificada** a la regla antigua anti-carruseles: es la escena de la home, no un ornament. En el resto del sitio NO existe autoplay ni motion no solicitado.

\* Nota honesta de estado: en `global.css` el color de link se hardcodea sin transición explícita; la duración .20s es la del sistema ratificado y se aplica al emitir transiciones en la fase que toque.

---

## 3. Interacciones ambientales (futuras, ratificadas)

### 3.1 Hover sobre obra (thumbs)

- Foto: `opacity → .80`, `transition: all .30s`. Nunca zoom, nunca scale, nunca overlay de color.
- Zonas fantasma: opacity 0 → .80 al hover (35% × 300px en el original).
- Subrayado: único señalador de enlace de texto ([TYPOGRAPHY.md](TYPOGRAPHY.md) §4).

### 3.2 Flechas del visor

‹ › en Courier, opacity 0 → 1 al hover, cambio de color según modo (blanco/negro), `transition: .45s ease`, con shift de padding de 20px. Zonas de clic invisibles de 50% × 100% de pantalla. Teclado ←/→. Counter 12px top-left. Ver anatomía completa: [COMPONENT_GUIDELINES.md](COMPONENT_GUIDELINES.md) §2.3.

### 3.3 Entrada de obra (slides from up)

`slidefromup 1s`: margin-top −20px → 0. Única animación de entrada ratificada para thumbs y fotos de bio. Sin stagger decorativo.

---

## 4. Tabla completa de duraciones del sistema

Duraciones del sistema de referencia, ratificadas para las fases futuras (vigentes: ver §2; tokens ya emitidos: solo `--dur-fade` y `--dur-dwell` en `@theme` — [DESIGN_TOKENS.md](DESIGN_TOKENS.md) §2.5):

| Duración | Uso | Origen |
|---|---|---|
| `.20s` | Links (color) | transiciones de link |
| `.30s` | Thumbs (hover .80) · botones y banners | hover de obra |
| `.45s` | Flechas del visor | navegación ambiental |
| `.50s` | `resizeDuration` del visor (transición de tamaño entre obras, secuencia sincronizada) | visor |
| `.80s`–`.85s` | ScrollTo de secciones (800/850ms) | navegación interna de página |
| `500ms` | Toggle de menú móvil | skin móvil del original |
| `.5s–.55s` | ScrollTo genérico (500/550ms) | secciones |
| `1s` | Entrada `slidefromup` | thumbs y fotos |
| `150ms` | Skip link (transform) | [IMPLEMENTADO] en `global.css` |
| `200ms` | Header fadeOut al bajar / lazyload (original, lazyload fadeTo 2000ms con threshold 600) | **sin equivalente vigente** |
| `350ms / 250ms` | Header slideUp (ocultar ↓) / slideDown (mostrar ↑) · muestra con fadeIn **400ms** | on-scroll del header: PENDIENTE, requiere JS mínimo + ADR |
| `200ms` | Animación de altura del slideshow del original | sustituida por stage de ratio fijo (CLS 0) |
| `350ms / 5s / 30s` | Crossfade home / dwell / ciclo completo | [IMPLEMENTADO] |
| `8s continuous` | Slideshow interno del visor (PLAY) | visor, futuro |
| `500ms / 1250ms` | Feedback de "copiado" (mostrar / ocultar) | detalle del original; solo si se pide |
| `2000ms` | Fade del loader inicial del original | no replicar: el sitio es estático y rápido |

---

## 5. Prohibiciones (absolutas)

- **Parallax**, scroll-jacking, snap de scroll.
- **Zoom decorativo** sobre obra (el zoom solo existe como visor §3.2, si se implementa).
- **Cursor personalizado** (custom cursors, followers).
- **Audio en autoplay**; cualquier audio solo por decisión explícita del usuario con control visible.
- **Autoplay de motion fuera de la home**: ningún carrusel, marquee o loop animado en páginas interiores.
- Sombras, gradientes, scale sobre obra, tilt 3D, blur decorativo — prohibiciones de [ART_DIRECTION.md](ART_DIRECTION.md) §4.
- Skeletons/spinners decorativos: el sitio es estático; si algo carga, se resuelve sin teatro.

**Excepción ratificada (única):** el crossfade automático de la home (6 × 5s, fade 350ms) — es la excepción de la regla antigua anti-carruseles, decidida en ADR-005 y en el diseño de fase, y respeta `prefers-reduced-motion`.

---

## 6. A11y obligatoria (cada componente, cada fase)

1. **Teclado 100%**: todo lo operable con ratón es operable con teclado; las zonas fantasma del visor tienen equivalentes de teclado (←/→, Esc cerrar). El foco nunca queda atrapado sin escape.
2. **Foco visible**: `:focus-visible` con `--focus-outline` (2px negro, offset 3px) en todos los interactivos — ya implementado; ningún `outline: none` de facturación sin reemplazo.
3. **`prefers-reduced-motion`**: implementado para el slideshow (slide 1 fijo + tokens anulados); cualquier motion futuro define su estado de reposo bajo reduced motion.
4. **Skip link**: implementado (`position: absolute`, `translateY(-200%)` reposo, visible al foco).
5. **`alt` obligatorio en TODA obra**: descripción real de la obra; si falta el dato, `alt` identifica el carácter placeholder ("content pending: description") en vez de dejar el atributo vacío por accidente.
6. **Nav con `aria-current="page"`** para la página activa; landmarks (`header`, `nav`, `main`, `footer`); headings de a11y ocultos (`.visually-hidden`) donde el layout no los expone.
7. **Touch targets** operativos ≥44×44px en móvil (padding invisible permitido).
8. **Contraste**: el contraste bajo `#666` sobre blanco es deliberado y aceptado para la interfaz; TODO texto que el usuario deba leer y no sea decorativo va en `#666` o más oscuro — nunca `#999` para contenido importante.

---

## 7. Gobernanza de JS

- **Regla**: CSS-first. La home demuestra el estándar (0 JS).
- Cualquier JS nuevo (visor, header on-scroll, menú móvil, plegables) exige: (a) demostrar que CSS no puede resolverlo, (b) ADR que lo registre, (c) degradación sin JS funcional (el contenido nunca depende de JS para existir).
- Header on-scroll (hide/show + hairline) es el candidato más cercano: documentado como pendiente en [ART_DIRECTION.md](ART_DIRECTION.md) §3.

---

## 8. Historial

- **2026-11-17:** reescritura completa. Motion "Warm Paper" desechado. Ratificado: crossfade CSS-only de la home como excepción al anti-carrusel, tabla completa de duraciones del sistema, prohibiciones y checklist a11y.
