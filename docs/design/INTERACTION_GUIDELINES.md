# INTERACTION_GUIDELINES

> Motion, interacción y accesibilidad de todo el sitio. Estado: especificación. Tokens de duración en `DESIGN_TOKENS.md` §7. Estado: se materializará en Fase 1.

## 1. Filosofía

El motion es **sutil y propositivo**: apoya el ritmo contemplativo del concepto (Principio C), nunca entretiene ni decora. Cero ruido.

## 2. Timings estándar

| Interacción | Duración |
|---|---|
| Hover | 200ms |
| Menú móvil | 250ms |
| Reveal de imagen | 500ms |
| Transición de página (si procede) | 300ms |

## 3. Interacciones permitidas

- **Reveal de imagen discreto** — aparición contenida (opacidad/transform leves) al entrar en viewport.
- **Zoom de imagen muy suave** — hover, escala máxima **1.02**, sin overshoot.
- **Navegación** — transiciones de subrayado u opacidad en hover/active.
- **Anchor navigation** suave.
- **Menú móvil** accesible (overlay/full-screen).
- **Lightbox** de obra cuando sea relevante.
- **Prev/next** dentro de galerías de proyecto.

## 4. Interacciones prohibidas

- Carruseles de reproducción automática.
- Parallax excesivo.
- Cursor personalizado.
- 3D decorativo.
- Audio de reproducción automática.
- Animaciones distractoras o decorativas (spinners elaborados, fondos animados, etc.).
- Efectos de scroll que compitan con la contemplación de la obra.

## 5. Accesibilidad — interacción

- **Todos** los elementos interactivos operables por teclado: navegación, proyectos, galería (prev/next), lightbox, menú móvil.
- **Estados de foco visibles** en todo elemento interactivo (outline sobrio coherente con el sistema — se definirá en Fase 1).
- Focus trap en menú móvil y lightbox; retorno de foco al cerrar.
- Lightbox: cierra con `Esc`; prev/next con flechas.
- Navegación semántica (`<nav>`, `<main>`, headings jerárquicos) — detalle HTML en implementación.
- Contraste: Soft Black sobre Warm Paper cumple; comprobar siempre contrastes de metadata (Stone Grey) en nuevos fondos.

## 6. `prefers-reduced-motion`

Obligatorio:

```css
@media (prefers-reduced-motion: reduce) {
  /* desactivar reveals, zooms y transiciones no esenciales */
}
```

Con la preferencia activa: sin reveals ni zoom; los cambios de estado pasan a instantáneos o casi (sin opacidades animadas largas). La funcionalidad nunca depende de la animación.

## 7. Reglas de implementación

1. La función nunca depende de motion: sin JS/animación todo sigue accesible y legible.
2. Animar solo `opacity` y `transform` (sin layout thrashing), salvo excepción justificada y documentada.
3. Un solo estado de hover coherente por tipo de componente (misma duración/curva en todo el sitio).
4. El reveal de imagen nunca retrasa la visibilidad de contenido crítico más allá del estándar (lazy + reveal coexisten, ver objetivos de performance en `../architecture/TECHNICAL_ARCHITECTURE.md`).
