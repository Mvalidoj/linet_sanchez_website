# TYPOGRAPHY

> Especificación tipográfica. Estado: documentada; se implementará en Fase 1. Tokens numéricos en `DESIGN_TOKENS.md`.

## 1. Familias

### Display primaria — Cormorant Garamond
- Peso: **400**.
- Serif editorial. Uso: títulos grandes (hero, page, section), project titles y artistic statements.
- Aporta el carácter editorial/literario del concepto.

### Interface — Inter
- Pesos: **400 y 500** (no más).
- Uso: navegación, párrafos, metadata, captions y elementos de interfaz.

### Display alternativa — Instrument Serif
- Solo si hay una **razón de diseño clara y justificada**. Por defecto no se usa.

**Prohibido** introducir tipografías adicionales sin razón de diseño explícita y ADR (Regla 2, `../../CLAUDE.md`).

## 2. Asignación por rol

| Elemento | Familia | Peso | Tono |
|---|---|---|---|
| Hero heading | Cormorant Garamond | 400 | Grande, contemplativo |
| Page heading | Cormorant Garamond | 400 | 64px desktop / 40px móvil |
| Section heading | Cormorant Garamond | 400 | — |
| Project title | Cormorant Garamond | 400 | — |
| Statements | Cormorant Garamond | 400 | Gran cuerpo |
| Navegación | Inter | 400/500 | 13px desktop / 12px móvil |
| Párrafos | Inter | 400 | body / body-lg |
| Metadata, captions | Inter | 400 | pequeño, tracking amplio |
| Labels pequeños | Inter | 500 | uppercase permitido |

## 3. Escala (px desktop → móvil)

Hero 88→46 · Page 64→40 · Section 40→30 · Project 32→26 · Body-large 20→18 · Body 16→15 · Metadata 12→11 · Nav 13→12.

## 4. Tipografía fluida

Usar `clamp()` donde aporte (títulos display sobre todo). Patrón previsto:

```css
/* hero: 46px móvil → 88px desktop */
--font-hero: clamp(46px, 6.1vw, 88px);
/* page: 40px → 64px */
--font-page: clamp(40px, 4.5vw, 64px);
```

En Fase 1 se calibrarán los puntos de interpolación contra los breakpoints de `RESPONSIVE_DESIGN.md` (los valores del ejemplo son propuesta).

## 5. Line-heights y tracking

| Contexto | Valor |
|---|---|
| Párrafos | 1.6–1.75 |
| Headings | 0.95–1.1 |
| Metadata letter-spacing | ≈0.08em |
| Uppercase | Solo en labels pequeños (navegación/metadata); nunca en títulos display grandes |

## 6. Reglas de uso

- El hero y los statements son el principal uso expresivo de Cormorant Garamond; en frases largas mantener line-height alto y ancho de columna legible (max-width de párrafo definido en `LAYOUT_AND_SPACING.md`).
- Inter es invisible: la interfaz no destaca tipográficamente sobre la obra.
- Metadata en uppercase + tracking solo en tamanos pequeños (12px), aplicando jerarquías editorial: título serif grande → cuerpo neutro → metadata discreta.
- No usar negritas decorativas; los dos pesos de Inter bastan.
- Cargar las fuentes eficientemente (subsets latin, `font-display: swap` u equivalente), detalle técnico en Fase 1.
