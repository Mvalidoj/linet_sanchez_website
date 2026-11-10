# RESPONSIVE_DESIGN

> Comportamiento responsive de todo el sitio. Aplica a cada componente y página (Regla 6 de `../../CLAUDE.md`). Breakpoints y viewports de referencia también en `DESIGN_TOKENS.md` §8–9.

## 1. Breakpoints

| Dispositivo | Rango | Retícula | Márgenes |
|---|---|---|---|
| Desktop | ≥1200px | 12 columnas | 64–80px |
| Tablet | 768–1199px | 6 columnas | ≈40px |
| Móvil | <768px | 4 columnas | 20–24px |

Ancho máximo de contenido: 1440px en todos los dispositivos.

## 2. Viewports de referencia (validación)

- 1440 × 900
- 1280 × 800
- 1024 × 768
- 768 × 1024
- 390 × 844
- 375 × 812

Todo componente/página nuevo se valida al menos en 1440, 1024, 768 y 390 (checklist en `../workflow/QUALITY_CHECKLIST.md`).

## 3. Filosofía

**El diseño responsive es intencional, no una contracción.** No "encoger el desktop": cada dispositivo tiene su propia sensibilidad editorial.

### Desktop
- Composiciones editoriales asimétricas de 12 columnas, espacios negativos amplios (secciones 120–160px), imágenes a gran escala.

### Tablet
- Reordenar la retícula a 6 columnas: mantener jerarquías y rhythm, reducir márgenes a ≈40px.
- Las composiciones asimétricas pueden simplificarse pero deben seguir pareciendo diseñadas — no apiladas por defecto.

### Móvil
- Flujo de lectura natural en una columna.
- Tipografía según escala móvil (`DESIGN_TOKENS.md` §3): line-height cómodo, sin tracking excesivo.
- **Preservar aspect ratios de las obras** (Principio D: la escena no se deforma).
- Reducir espaciado cuidadosamente sin eliminar el espacio negativo.
- Navegación accesible: menú minimalista que abre overlay/navegación de pantalla completa (especificación en `COMPONENT_GUIDELINES.md`).
- **Sin overflow horizontal en ninguna sección.**

## 4. Reglas transversales

1. Ningún elemento crea scroll horizontal no intencionado (imágenes, tablas, metadata largos).
2. Las imágenes de obra mantienen su proporción y no se recortan agresivamente para "encajar" (Regla 8, `../../CLAUDE.md`).
3. La jerarquía tipográfica se mantiene en los tres breakpoints (escala móvil propia, no escalado CSS uniforme).
4. Touch targets cómodos en móvil (nav, lightbox, prev/next de galería).
5. El hero mantiene protagonismo en móvil (65–75vh).
6. Validar con `prefers-reduced-motion` activado (`INTERACTION_GUIDELINES.md`).
