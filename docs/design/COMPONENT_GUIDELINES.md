# COMPONENT_GUIDELINES

> Reglas visuales y de comportamiento para componentes reutilizables. Estado: especificación (Fase 1+); se irá ampliando por fase. Tokens en `DESIGN_TOKENS.md`; interacción/teclado en `INTERACTION_GUIDELINES.md`; composición en `LAYOUT_AND_SPACING.md`.

## Convenciones comunes

- Radio 0, sin sombras decorativas, sin gradientes, sin iconos decorativos, sin componentes genéricos de UI kit (ver `../../CLAUDE.md` §5).
- Metadata/captions: Inter, 11–12px, Stone Grey, tracking ≈0.08em, uppercase solo labels.
- Toda sección usa los anchos/márgenes de `LAYOUT_AND_SPACING.md`.
- Los estados vacíos son deliberados y sobrios (Principio B): composición mínima, sin relleno compensatorio.

## 1. Header

- Wordmark: **LINET SÁNCHEZ** (texto, no logo gráfico).
- Navegación: Home / Work / About / Press / Exhibitions / Contact — Inter 13px desktop / 12px móvil.
- Tipografía contenida, espaciado generoso; fondo transparente o Warm Paper.
- Estado activo de sección: sutil (subrayado u opacidad — ver `INTERACTION_GUIDELINES.md`).
- Móvil: menú minimalista que abre un overlay o navegación a pantalla completa (250ms, accesible, ver §7).

## 2. Hero (Home)

- Imagen de la artista cuando exista (asset real, nunca stock disfrazado de obra — Regla 8).
- Alturas objetivo: desktop 70–85vh · móvil 65–75vh.
- Texto propuesto: título "Between memory, absence and imagination." + statement de apoyo (del brief; **no presenta citas verificados de la artista**).
- Proporciones cinematográficas, espacio negativo, tipografía editorial (Cormorant Garamond).
- Prohibido: carrusel automático, botones estilo marketing.

## 3. Nav de secciones / enlaces internos

- Enlaces de texto, sin botones genéricos. Hover/active con transición sutil (200ms).
- CTA de contacto: enlace sobrio (texto o subrayado), nunca botón prominente.

## 4. Presentación de proyectos (grid de Works)

- Grid editorial asimétrico (`LAYOUT_AND_SPACING.md` §5). **Evitar tarjetas idénticas.**
- Cada proyecto puede incluir: imagen, título, año, disciplina; descripción corta **solo cuando verificada**.
- Título en Cormorant Garamond; año/disciplina en metadata Inter.
- Hover: reveal/zoom sutil (máx. escala 1.02); el link área completa de la imagen debe ser accesible por teclado.

## 5. Galerías y metadata de obra (Work/[slug])

- Imágenes con proporciones originales preservadas; sin recortes agresivos.
- Captions en Stone Grey: título, año, medio, dimensiones — **solo datos verificados** (`../project/CONTENT_GUIDELINES.md`).
- Prev/next dentro de la galería con controles sobrios y teclado accesible.
- Lightbox cuando sea relevante: fondo neutro, obra protagonista, cierre con Esc/click fuera, ver `INTERACTION_GUIDELINES.md`.
- Video: elemento en línea, sin autoplay con sonido; controles nativos o sobrios.

## 6. Captions y metadata

- Posición alineada a retícula (bajo la imagen, o al margen donde la composición lo pida).
- Si falta un dato (dimensiones, etc.): omitir el campo, sin "—" ni "TBD" decorativo en producción; documentar el hueco.

## 7. Menú móvil

- Trigger discreto en header; abre overlay/nav full-screen en 250ms.
- Overlays accesibles: focus trap, cierre con Esc, aria-expanded en el trigger, bloqueo de scroll de fondo.

## 8. Footer

- Minimalista: wordmark, navegación reducida, contacto público (email + Instagram, ver `../project/CONTENT_GUIDELINES.md` §6), copyright.
- Tipografía Inter pequeña; división con divisor hairline si procede.

## 9. Estados vacíos (Press/Exhibitions y previews)

- Composición sobria: label de sección + frase corta editorial; nunca iconos ilustrativos ni gráficos de relleno.
- En Home, los previews de Press/Exhibitions sin contenido aprobado usan estos estados vacíos, **no referencias inventadas**.
