# 02 · DESIGN TOKENS (v2) — "THE EMPTY STAGE"

> Traslación directa del concepto (01). Este archivo está escrito para copiarse literalmente a código en la fase de ejecución (nombres listos para CSS custom properties). Sustituye a la especificación v1 del raíz (`DESIGN_TOKENS.md`) y a `mockup/css/tokens.css` de la maqueta histórica.

---

## 1. Color

Monocromo absoluto. Sin acento cromático: el acento del sitio es la luz (concepto 01 §4.1).

```css
:root {
  /* luz */
  --plaster:   #F3F2F0;  /* base del sitio, blanco yeso (frío, no crema) */
  --bone:      #E9E7E3;  /* "poza" de obra, paneles alternos, hover de fondos */
  --ink:       #1D1C1B;  /* texto sobre luz */

  /* penumbra */
  --stage:     #141413;  /* fondo del acto oscuro (negro teatro, no #000) */
  --stage-ink: #B9B7B2;  /* texto sobre penumbra (AA en --stage) */
  --stage-well:#0F0F0E;  /* poza de obra en la penumbra */

  /* secundarios */
  --meta:      #77756F;  /* texto secundario sobre luz (>= 4.5:1) */
  --meta-dark: #8A8882;  /* texto secundario sobre penumbra */
  --hairline:  #DAD8D3;  /* separador mínimo; uso restringido (01 §6) */
}
```

### Contraste verificado ( WCAG 2.1 AA)
| Par | Ratio | Uso |
|---|---|---|
| `--ink` sobre `--plaster` | ~13.9:1 | cuerpo y display |
| `--meta` sobre `--plaster` | ~4.9:1 | metadatos pequeños |
| `--stage-ink` sobre `--stage` | ~7.6:1 | texto en acto oscuro |
| `--meta-dark` sobre `--stage` | ~4.8:1 | metadatos en acto oscuro |

Sin modo claro/oscuro conmutable: la coreografía de iluminación es fija por página (01 §2).

---

## 2. Tipografía

```css
:root {
  --font-display: 'Newsreader', Georgia, serif;   /* display + cuerpo; eje óptico 6–72 */
  --font-ui:      'Instrument Sans', 'Helvetica Neue', Arial, sans-serif; /* meta/nav/placas */
}
```

**Carga:** variable (2 woff2, latín) con `font-display: swap` y `size-adjust` comprobado; fallback Georgia/Arial para evitar CLS. Peso fino solo en display; **nunca** se usa peso <350 en cuerpo de texto.

**Roles:**
| Rol | Fuente | Peso / optica | Nota |
|---|---|---|---|
| Display hero | Newsreader | 200–250, opsz máximo | la seña tipográfica del sitio |
| Encabezado de sección | Newsreader | 300, opsz alto | |
| Cuerpo | Newsreader | 400, opsz texto | itálica = voz de la artista |
| Placas/meta/nav | Instrument Sans | 450 | `font-feature-settings: 'tnum'` donde haya cifras |

---

## 3. Escala tipográfica (fluida, clamp)

```css
:root {
  --fs-hero:    clamp(42px, 6.5vw, 92px);
  --fs-display: clamp(30px, 3.8vw, 54px);
  --fs-title:   clamp(22px, 2.4vw, 34px);
  /* añadido al aplicar el mockup v2 (2025-11-10): el statement hero del Acto I
     necesita peso visual propio sobre la poza — antes iba en --fs-body-lg */
  --fs-statement: clamp(22px, 2.4vw, 34px);
  --fs-body-lg: clamp(18px, 1.5vw, 21px);
  --fs-body:    clamp(15px, 1.05vw, 17px);
  --fs-meta:    clamp(12px, 0.9vw, 13px);
  --fs-nav:     clamp(13px, 0.95vw, 14px);
}

:root {
  --lh-display: 1.06;
  --lh-body:    1.55;   /* serif: más alto; máx. 68–72ch por línea */
  --lh-meta:    1.45;
  --ls-display: -0.01em;
  --ls-meta:    0.04em; /* sin mayúsculas forzadas (01 §3) */
}
```

Encabezados con `text-wrap: balance`; párrafos con `text-wrap: pretty`. Cifras de años/medidas SIEMPRE con `font-variant-numeric: tabular-nums` (motivo `00:00:00`, 01 §4.4).

---

## 4. Espacio (base 4)

```css
:root {
  --space-1:4px; --space-2:8px; --space-3:12px; --space-4:16px;
  --space-5:24px; --space-6:32px; --space-7:48px; --space-8:64px;
  --space-9:96px; --space-10:128px; --space-11:192px;
}
```

Ritmo editorial: entre secciones grandes, `--space-11` en desktop / `--space-9` móvil y tablet; dentro de sección, `--space-8`. El aire es el material principal del sitio.

---

## 5. Layout y grid

```css
:root {
  --max-width: 1360px;
  --cols: 12;                 /* desktop */
  --rail: span 3;             /* las alas: pies, meta, nav auxiliar */
  --stage-area: span 7;       /* la obra, con 2 columnas de vacío a la derecha */
  --gutter: clamp(16px, 1.4vw, 24px);
  --page-margin: clamp(20px, 4vw, 64px);
  --bp-tablet: 768px;
  --bp-desktop: 1200px;
}
```

Alineación izquierda global; las piezas centrales son excepción puntual del acto oscuro (01 §4.3). Comportamiento responsive detallado en 06 §4.

---

## 6. Forma y bordes

```css
:root {
  --radius: 0;                 /* cero global — sin tarjetas, sin redondeos */
  --border: none;              /* regla: ningún borde decorativo.
     Única excepción permitida: hairline de 1px entre placas de obra
     listadas en visor (uso contado, no estructural). */
  --shadow: none;              /* sin sombras en ningún estado */
}
```

---

## 7. Imágenes de obra

```css
:root {
  --img-well: var(--bone);        /* poza sobre luz */
  --img-well-dark: var(--stage-well);
  --img-lit: 1;                   /* estado normal: obra encendida */
  --img-rest: 0.94;               /* reposo: obra "apagada" sin interacción */
  --img-hover-dur: 320ms;         /* encendido al posar el cursor/aparcar foco */
}
```

Regla de integridad (Regla 8): `object-fit: contain` dentro de la poza; **nunca recorte** ni reencuadre; `width`/`height` explícitos en cada `<img>` (CLS 0). Al assets de baja resolución (~720–750px) se les limita el tamaño de render a 1.5× de su ancho nativo hasta llegar assets finales (05 §4).

---

## 8. Motion (única coreografía permitida)

```css
:root {
  --ease: cubic-bezier(0.23, 1, 0.32, 1);  /* luces de teatro: arranque suave */
  --dur-hover: 200ms;
  --dur-lit:   320ms;       /* encendido de obra (hover/focus) */
  --dur-reveal:1100ms;      /* único gesto de carga de la Home (06 §2) */
  --dur-nav:   160ms;
}
```

Se animan **solo** `opacity` y `transform`; nada se desplaza en scroll; ningún loop decorativo; `prefers-reduced-motion: reduce` apaga el gesto de revelado y deja la obra visible (06 §2).

---

## 9. Iconos, ornamento

`0`. Sin iconos, sin logos SVG decorativos, sin flechas ornamentales, sin marcas gráficas. La única notación gráfica es la cronótica `00:00:00` / contadores en cifras tabulares (01 §4.4). Instagram y demás enlaces a terceros van como texto subrayado, nunca como icono.

---

## 10. Desglose de variantes (si el acto oscuro se rechaza)

Los tokens están diseñados para que las variantes no rompan el sistema:
- (a) **Penumbra solo en el detalle de obra:** `--stage` se aplica al visor de `series/[slug]`; Home queda en luz. Solo cambia el alcance, no el token.
- (b) **Sitio completo en luz:** se elimina todo uso de `--stage`; la seña memorable pasa a ser el gesto de encendido de obra. Nada más cambia.

---

## 11. Z-index y capas

```css
:root {
  --z-base: 0; --z-media: 1; --z-nav: 10; --z-menu: 40; --z-skip: 100;
}
```

---

## 12. Checklist de traslación a código (para la fase siguiente)

1. Un solo archivo `tokens.css` con estos bloques; cero valores mágicos en componentes.
2. Fuentes descargadas como woff2 variable (latín) en `assets/fonts/`; `preload` de la display; `font-display: swap`.
3. `<meta name="theme-color">` = `#F3F2F0` (Home y páginas en luz); el acto oscuro no cambia el theme-color (es sección, no tema).
4. `color-scheme: light` en `<html>` de páginas base; el bloque oscuro declara `color-scheme: dark` local no obligatorio (no hay formularios dentro del acto).
5. Verificar ratios AA del §1 tras implementar.
