# RESPONSIVE_DESIGN.md — Responsive · Linet Sánchez · Artist Portfolio

> **actualizado 2026-11-17 · dirección ratificada (ADR-005)**
>
> **Qué sustituye este documento:** los breakpoints antiguos 1200px/768px de la dirección "Warm Paper" quedan **desechados**. Vigentes: **950px y 480px**, heredados del sistema de referencia (que a 950px redirigía a un skin móvil) con implementación moderna por media queries.
>
> Documento autocontenido. Estado del código: `src/styles/global.css` (bloque responsive al final del archivo); tokens: [DESIGN_TOKENS.md](DESIGN_TOKENS.md) §2.6.

---

## 1. Divergencia vs. el original (declarada)

| Aspecto | Original (referencia) | Vigente |
|---|---|---|
| Estrategia | Redirect a skin móvil independiente a partir de **950px** (`?_mob=1`); la hoja mobile del original NO está disponible (no observable en el material) | **Única hoja CSS con media queries** — decisión moderna ratificada |
| Breakpoints | 950px (redirect); `general.css` usa ≤1400/1280/1024 solo para reducir metadatos; splash por orientación (`#imgFullH/V`, markup no guardado) | **`--breakpoint-md: 950px`** y **`--breakpoint-sm: 480px`** |
| Menú móvil | Skin dedicado | Nav envolvente (wrap); menú móvil dedicado / hamburguesa: **pendiente de fase futura** |

La media query ≤950px del vigente replica el umbral del redirect del original como ancho de página completa → móvil/tablet.

---

## 2. Breakpoints vigentes y comportamiento

### 2.1 Desktop (>950px)

Base. Todo lo descrito en [LAYOUT_AND_SPACING.md](LAYOUT_AND_SPACING.md): header fixed 100px, escenario 1600px, side 30px, nav en una línea con gap 22px, padding-top 145px.

### 2.2 ≤950px (`--breakpoint-md`)

```css
@media (max-width: 950px) {
  :root { --side: 20px; }
  .site-header { position: relative; height: auto; padding: 20px var(--side) 0; }
  .wordmark    { position: static; display: inline-block; }
  .site-nav ul { position: static; margin-top: 8px; flex-wrap: wrap; row-gap: 4px; }
  .intro, .stub-page { padding-top: 32px; }   /* sin header fijo que compensar */
  .slideshow   { width: 100%; }
}
```

| Cambio | Detalle |
|---|---|
| Header | De `fixed` → `relative`, altura auto, padding superior 20px. Sin menú overlay ni hamburguesa (pendiente de fase futura) |
| Wordmark | Flujo normal (ya no absoluto) |
| Nav | Envuelve en filas (`flex-wrap`), row-gap 4px, bajo el wordmark |
| Side | `--side: 20px` (afecta header, footer, scenario padding) |
| Contenido | `padding-top: 32px` (el header ya no es fijo → no hace falta 145px) |
| Slideshow | `width: 100%`; el stage conserva su ratio (`aspect-ratio`) → la obra se escala sin recortar |
| Footer | Sigue una línea; side 20px |

### 2.3 ≤480px (`--breakpoint-sm`)

```css
@media (max-width: 480px) {
  .site-nav ul { gap: 14px; }        /* --nav-gap: 22px → 14px */
  .site-nav a  { font-size: 13.5px; } /* --fs-nav: 14.5px → 13.5px */
}
```

Solo compacta la nav. Todo lo demás hereda de ≤950px.

---

## 3. Reglas transversales (obligatorias en cualquier breakpoint)

1. **Sin overflow horizontal**: ningún componente puede generar scroll lateral; se valida en 375px de ancho.
2. **La obra nunca se recorta ni se estira al reescalar**: ratios nativos intactos (`object-fit: contain`, `aspect-ratio` de stage). Integridad de obra ([ART_DIRECTION.md](ART_DIRECTION.md) §2.6) aplica en todos los viewports.
3. **Touch targets**: nav y controles con área de toque ≥44×44px operativa (el padding de la línea de reserva ya aporta altura; ampliar con padding invisible si un control queda pequeño).
4. **`prefers-reduced-motion`** respeta los tres niveles: slideshow detenido (slide 1 fijo), `--dur-fade: 0ms`, transiciones reducidas — implementado en `global.css`.
5. **Nada de `display: none` en contenido de obra** por breakpoint: las imágenes de obra están en todos los viewports (sí puede ocultarse chrome, nunca contenido editorial ni obra).
6. Meta viewport estándar (`width=device-width, initial-scale=1`), sin `maximum-scale` (no bloquear zoom).

---

## 4. Opción futura del sistema (metadatos ≤1024px)

Del `general.css` del original: entre ≤1400/1280/1024 solo se reduce el tamaño de metadatos a **10.5px a ≤1024**. Queda ratificado como opción futura (cuando existan páginas interiores con metadatos densos): "metadatos a 10.5px en ≤1024px". No aplicar hoy.

---

## 5. Viewports de validación

Todo componente/página nuevo se valida en los seis:

| Viewport | Representa |
|---|---|
| **1440×900** | Desktop estándar |
| **1280×800** | Laptop |
| **1024×768** | Laptop pequeña / tablet horizontal |
| **768×1024** | Tablet vertical |
| **390×844** | Móvil moderno |
| **375×812** | Móvil compacto (validación de overflow) |

Checklist por viewport: nav sin solapar el wordmark · sin overflow horizontal · obra completa visible · aire pre-footer 90px presente · foco de teclado navegable ([INTERACTION_GUIDELINES.md](INTERACTION_GUIDELINES.md)).

---

## 6. Historial

- **2026-11-17:** reescritura. Breakpoints 1200/768 desechados → 950/480 (tokens `--breakpoint-md/sm`). Estrategia ratificada: media queries únicas vs. redirect skin móvil del original. Menú móvil dedicado anotado como pendiente de fase futura.
