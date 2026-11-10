# ART_DIRECTION — The Architecture of Memory

> Documento de referencia creativa. Toda decisión visual debe reforzar el concepto rector. Detalle operativo en `DESIGN_TOKENS.md`, `TYPOGRAPHY.md`, `LAYOUT_AND_SPACING.md`, `COMPONENT_GUIDELINES.md` e `INTERACTION_GUIDELINES.md`.

## Concepto

**THE ARCHITECTURE OF MEMORY**
Tagline conceptual: *"A digital space between memory, absence and imagination."*

La interfaz no es un contenedor de obras: es una extensión del universo conceptual de la artista. El sitio debe traducir su práctica (espacios arquitectónicos sin figuras, memoria, tiempo, reconstrucción) en comportamiento y composición digital.

La experiencia debe sentirse como entrar a una exposición contemporánea curada o explorar el libro monográfico impreso de una artista — no como una web comercial.

## Filosofía: arquitectura editorial minimalista

Combina cuatro referencias:

1. **Diseño editorial de arte contemporáneo** — revistas y catálogos de galería.
2. **Arquitectura minimalista** — precisión, geometría, materiales sobrios.
3. **Books de artista** — secuencia, ritmo de página, blanco.
4. **Diseño de exposición de museo** — sala como encuadre, obra como protagonista.
5. **Composición fotográfica cinematográfica** — encuadre, peso visual, pausa.

## Los cinco principios, traducidos a decisiones de interfaz

### A. Arquitectura y espacio → estructura
- Grids precisos y composiciones geométricas; alineación deliberada, nunca casual.
- Las retículas son visibles en el resultado: columnas, márgenes y bloques se sienten construidos.
- Alinear elementos con intención (borde editorial, líneas base compartidas).

### B. Ausencia y vacío → espacio negativo
- El espacio negativo es material de diseño con el mismo peso que el contenido.
- No rellenar áreas vacías solo porque existen; dar aire a obras, tipografía y composiciones.
- Los estados vacíos (Press/Exhibitions sin contenido) son una oportunidad: sobriedad, no compensación.

### C. Memoria y tiempo → ritmo y quietud
- El sitio debe sentirse contemplativo y atemporal: nada de urgencia, contadores, banners o prisa.
- Ritmo visual controlado: secuencias editoriales, pausas, transiciones contenidas.
- Sin carruseles automáticos ni animación decorativa.

### D. Teatralidad → la imagen como escena
- Las imágenes se presentan como escenas o experiencias espaciales: heroe cinematográfico, obra a gran escala, composición deliberada.
- La interfaz se retira ante la obra; el marco es austero para que la escena domine.
- Encaja con el trasfondo de la artista (ballet, teatro): sensibilidad escénica sin literalidad teatral.

### E. Reconstrucción e introspección → descubrimiento
- Layouts modulares y asimetría: composiciones pensadas para recorrer, no plantillas repetidas.
- Cambios sutiles de escala y posición generan el sentido de descubrimiento del book de artista.
- Evitar simetrías mecánicas y tarjetas idénticas en fila.

## Decisiones derivadas (resumen operativo)

| Derivación | Regla |
|---|---|
| Color | La obra aporta el color del sitio; la paleta de interfaz es neutra cálida (65% Warm Paper). Sin colores de acento. |
| Tipografía | Serif editorial para display (Cormorant Garamond), sans interface discreta (Inter). |
| Espaciado | Generoso, base 4, secciones amplias; el vacío es deliberado. |
| Composición | Asimetría controlada, sin tarjetas idénticas. |
| Motion | Contenido: reveals sutiles, zoom máx. 1.02, transiciones 200–500ms. Prohibido: parallax excesivo, carruseles, efectos 3D. |
| Bordes | 1px concreto (#D3D1CA) para divisores; radio 0; sin sombras decorativas. |

## Lo que el art direction prohíbe

- Plantillas genéricas o elementos visuales "de moda" que contradigan la dirección.
- Colores de acento brillantes.
- Decoración no funcional (iconos, ilustraciones, gradientes).
- Efectos artificiales que compitan con las obras.

Ver la lista completa de prohibiciones en `../CLAUDE.md` §5 y `INTERACTION_GUIDELINES.md`.
