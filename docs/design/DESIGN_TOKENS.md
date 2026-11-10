# DESIGN_TOKENS — Sistema de tokens (especificación)

> **Estado: especificación documentada; aún no implementada en código** (no hay estilos en el repo). En Fase 1 estas definiciones se materializan en el sistema de estilos global. Si se añade o modifica un token, actualizar este documento en el mismo cambio (Regla 2 de `../../CLAUDE.md`).

## 1. Color

Paleta oficial inicial — neutra cálida, sin colores de acento. Las obras aportan el color visual del sitio.

| Token | HEX | Propósito |
|---|---|---|
| `Warm Paper` | `#F3F2EE` | Fondo principal |
| `Gallery Grey` | `#E7E5DF` | Fondo secundario |
| `Soft Black` | `#222220` | Tipografía principal |
| `Stone Grey` | `#898780` | Texto secundario |
| `Concrete` | `#C9C6BE` | Acentos sutiles |
| `Mist` | `#DAD9D3` | Divisores y superficies |
| `White` | `#FFFFFF` | Fondos seleccionados |

Distribución aproximada de fondo: 65% Warm Paper · 20% White · 10% Soft Black · 5% grises.

Divisor estándar: 1px, ≈ `#D3D1CA`.

### Custom properties previstas (Fase 1)

```css
:root {
  --color-warm-paper: #F3F2EE;
  --color-gallery-grey: #E7E5DF;
  --color-soft-black: #222220;
  --color-stone-grey: #898780;
  --color-concrete: #C9C6BE;
  --color-mist: #DAD9D3;
  --color-white: #FFFFFF;
  --color-divider: #D3D1CA;
}
```

## 2. Tipografía (resumen; detalle en `TYPOGRAPHY.md`)

- Display primaria: **Cormorant Garamond** 400 — títulos grandes y statements.
- Interface: **Inter** 400/500 — navegación, párrafos, metadata, captions, UI.
- Display alternativa (solo justificada): **Instrument Serif**.

## 3. Escala tipográfica

| Token | Desktop | Móvil |
|---|---|---|
| `font-hero` | 88px | 46px |
| `font-page` | 64px | 40px |
| `font-section` | 40px | 30px |
| `font-project` | 32px | 26px |
| `font-body-lg` | 20px | 18px |
| `font-body` | 16px | 15px |
| `font-meta` | 12px | 11px |
| `font-nav` | 13px | 12px |

Line-heights: párrafos 1.6–1.75 · headings 0.95–1.1. Tracking metadata ≈ `0.08em`. Uppercase solo para labels pequeños. Usar `clamp()` fluido donde aporte.

```css
/* ejemplo prevista */
--font-hero: clamp(46px, 6vw, 88px);
```

## 4. Espaciado

Base 4 — escala permitida: `4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128 px`. Detalle de uso en `LAYOUT_AND_SPACING.md`.

```css
:root {
  --space-1: 4px;  --space-2: 8px;   --space-3: 12px;
  --space-4: 16px; --space-5: 24px;  --space-6: 32px;
  --space-7: 48px; --space-8: 64px;  --space-9: 96px;
  --space-10: 128px;
}
```

## 5. Layout y grid (resumen; detalle en `LAYOUT_AND_SPACING.md`)

| Token | Valor |
|---|---|
| Ancho máximo de contenido | 1440px |
| Márgenes desktop | 64–80px |
| Márgenes tablet | ≈40px |
| Márgenes móvil | 20–24px |
| Espaciado de sección (desktop) | 120–160px |
| Espaciado contenido relacionado | 24–48px |
| Grid desktop / tablet / móvil | 12 / 6 / 4 columnas |
| Gutters desktop | 24px |
| Gutters móvil | 12–16px |

## 6. Bordes y formas

| Token | Valor |
|---|---|
| `radius-default` | **0px** (fijo — sin tarjetas redondeadas) |
| `border-hairline` | 1px solid #D3D1CA |
| Sombras | Ninguna innecesaria (evitar); si alguna fuera imprescindible, documentarla aquí antes |

## 7. Transiciones (detalle en `INTERACTION_GUIDELINES.md`)

| Token | Valor | Uso |
|---|---|---|
| `duration-hover` | 200ms | Hovers |
| `duration-menu` | 250ms | Menú móvil |
| `duration-reveal` | 500ms | Reveal de imagen |
| `duration-page` | 300ms | Transiciones de página (si procede) |

Easing: suave y contenido (p. ej. `ease-out` o curva equivalente documentada en Fase 1).

## 8. Breakpoints

| Token | Rango |
|---|---|
| `bp-desktop` | ≥1200px |
| `bp-tablet` | 768–1199px |
| `bp-mobile` | <768px |

## 9. Viewports de referencia para validación

1440×900 · 1280×800 · 1024×768 · 768×1024 · 390×844 · 375×812.
