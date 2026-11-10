# QUALITY_CHECKLIST

> Checklist reutilizable. Aplica a cada página/componente nuevo y a cada entrega de fase. Marcar las desviaciones conocidas en el reporte final (Regla 12).

## 1. Consistencia visual

- [ ] Usa solo tokens de `../design/DESIGN_TOKENS.md` (colores, espaciado, tipografía, transiciones). Si hubo token nuevo, está documentado.
- [ ] Border radius 0; sin shadow, gradientes ni iconos decorativos.
- [ ] La composición sigue la retícula (12/6/4 cols) y el espaciado de `LAYOUT_AND_SPACING.md`; alineaciones deliberadas.
- [ ] Tipografía correcta por rol (Cormorant Garamond display / Inter interface) según `TYPOGRAPHY.md`.
- [ ] El resultado refuerza "THE ARCHITECTURE OF MEMORY"; nada genérico ni "de plantilla".

## 2. Responsive

- [ ] Validado en 1440×900, 1024×768 (tablet apaisada), 768×1024 y 390×844 (mínimo); sin overflow horizontal en ninguna sección.
- [ ] Comportamiento móvil intencional (columna única legible, jerarquía mantenida), no desktop encogido.
- [ ] Aspect ratios de obras preservados.
- [ ] Espaciado móvil reducido con cuidado; el espacio negativo sobrevive.
- [ ] Menú móvil: overlay accesible, focus trap, cierres con Esc y bloqueo de scroll.

## 3. Contenido e integridad

- [ ] Cero contenido inventado (bio, títulos, fechas, dimensiones, exposiciones, premios, materiales, curadores).
- [ ] Nivel de cada dato clasificado (verified / preliminary / pending) y reflejado en código/docs (`../project/CONTENT_GUIDELINES.md`).
- [ ] Campos desconocidos: omitidos o marcados; sin "TBD" decorativo.
- [ ] Estado vacío sobrio en secciones sin contenido (no relleno compensatorio).
- [ ] Las obras se muestran con assets reales o placeholders claramente identificados (nunca stock disfrazado de obra).
- [ ] Copy visible del sitio en inglés; sin mezclar idiomas en la UI.

## 4. Accesibilidad

- [ ] Operable por teclado completo; orden de foco lógico.
- [ ] Foco visible en todo elemento interactivo.
- [ ] Alt text descriptivo y factual en todas las imágenes.
- [ ] HTML semántico y jerarquía de headings correcta.
- [ ] Contrastes suficientes (metadata Stone Grey sobre fondos nuevos).
- [ ] `prefers-reduced-motion` respetado (sin reveals/zoom cuando reduce).
- [ ] Lightbox y modales: focus trap, Esc, retorno de foco, `aria-*` correctos.

## 5. Interacción / motion

- [ ] Solo interacciones permitidas (`../design/INTERACTION_GUIDELINES.md` §3); ninguna de las prohibidas (§4).
- [ ] Duraciones estándar (200/250/300/500ms, zoom máx. 1.02).
- [ ] Funcionalidad no depende de la animación.
- [ ] Anima solo `opacity`/`transform`.
- [ ] Un solo patrón de hover por tipo de componente, todo el sitio.

## 6. Performance / código

- [ ] JS mínimo; sin dependencias nuevas sin justificación.
- [ ] Imágenes: formatos modernos cuando proceda, lazy loading bajo el fold, preload solo del hero si justificado.
- [ ] Calidad de imagen no sacrificada por optimización (Regla 8).
- [ ] Sin duplicación: reutiliza componentes existentes; sin rewrite de arquitectura funcional.
- [ ] Código legible, seguimiento del idioma/convenios del código existente.
- [ ] SEO básico por página: `<title>`, meta description, Open Graph; structured data cuando aplique (`Person` / `VisualArtwork`).

## 7. Documentación

- [ ] Tokens nuevos documentados en `DESIGN_TOKENS.md`.
- [ ] Componentes nuevos/reglas nuevas reflejadas en `COMPONENT_GUIDELINES.md`.
- [ ] Cambios de estructura en `FILE_STRUCTURE.md`.
- [ ] Decisiones nuevas o modificadas con ADR en `ARCHITECTURAL_DECISIONS.md`.
- [ ] Estado de fase actualizado en `IMPLEMENTATION_PHASES.md` / `PROJECT_ROADMAP.md`.

## 8. Reporte final (Regla 12)

- [ ] Qué se implementó · archivos creados/modificados · decisiones de diseño · responsive validado · validación realizada · limitaciones conocidas · documentación actualizada.
