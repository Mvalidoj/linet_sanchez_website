# 06 · INTERACCIÓN, MOTION, ACCESIBILIDAD Y RESPONSIVE (v2)

> Comportamiento completo del sitio una vez ejecutado. Basado en las skills `web-design-guidelines` (Vercel Interface Guidelines) y `ui-ux-pro-max` (reglas UX priorizadas). Tokens: `02_*`.

---

## 1. Principio de interacción

**La luz responde, nada se agita.** Todo movimiento es un encendido o un apagado (`opacity`); el sitio nunca desplaza elementos al hacer scroll, no esconde elementos por accidente, y responde en ≤200 ms a cualquier acción del usuario. No hay carousels ni animaciones en loop.

---

## 2. El único gesto de carga (reveal)

- **Dónde:** Home, Acto I, la primera obra. **Una vez por visita** (no por scroll).
- **Qué:** la obra pasa de `opacity: 0` a `opacity: .94` en 1100 ms (`--ease`), con la placa apareciendo en fade de 400 ms desde 600 ms. Todo el resto de la Home llega estático (sin fade‑up en cada sección — patrón genérico vetado por diseño).
- **Interruptible:** el fade no bloquea la interacción (la obra es clicable desde t=0).
- **`prefers-reduced-motion: reduce`:** obra visible de inmediato, placa visible, sin fades ni cross‑fades (03 §A, nota transversal).

---

## 3. Interacciones definidas

| Interacción | Respuesta | Timing |
|---|---|---|
| Hover en obra (`work-well`) | imagen `opacity .94 → 1` ("se enciende") | 320 ms, ease `--ease` |
| Salida de hover | vuelve a `.94`; **táctil: reposo = encendida** (pointer: coarse) | 240 ms |
| Hover en fila de catálogo | peso del nombre 300→400; imagen se enciende | 200 ms |
| Nav / text-link | subrayado + offset + color | 160–200 ms |
| Apertura menú | panel modal: fade + translateY 8px; focus al primer enlace | 250 ms |
| Cierre menú | inverso; focus **regresa al botón** que lo abrió | 200 ms |
| Escape / clic fuera | cierra el panel (cualquier estado) | inmediato |
| Visor de obra: ← / → | navega a obra prev./sig. (enlaces `<a>` reales; keydown adicional) | corte o cross‑fade 300 ms (reduced‑motion: corte) |
| Cambio de obra | fade de la imagen 300 ms **sin** mover el layout; placa cambia con fade 200 ms | 300 ms |
| Formularios | (v2 no tiene formularios; decisión en 06 §6) | — |

- Todo elemento interactivo mín. 44×44 px de área de toque (los enlaces de texto llevan padding invisible que suma área sin cambiar el dibujo).
- `touch-action: manipulation` en interactivos; `-webkit-tap-highlight-color: transparent` + feedback propio (hover/focus), nunca sin reemplazo.
- Nada anidado con hover‑only como única vía (toda acción tiene focus/teclado equivalente).

---

## 4. Responsive (desktop ≥1200 · tablet 768–1199 · móvil <768)

### Grid "alas + escenario"
| Rango | Rail 3/12 | Escenario 7/12 | Cambios |
|---|---|---|---|
| Desktop | izquierda, sticky en visor de serie | centro-izquierda | modelo base |
| Tablet | fila superior horizontal (meta sobre obra) | 8/12, obra más grande | el rail deja de ser columna |
| Móvil | bajo la obra (placa inmediatamente debajo) | 100% ancho menos margins | la obra manda, la placa la sigue |

### Reglas por breakpoint
- **Tipografía fluida por clamp** (02 §3); el salto principal entre `--fs-hero` y `--fs-display` ocurre en tablet.
- **Home acto II:** en desktop alternan escalas; en móvil desaparecen los índices del rail arriba y se vuelven lista simple de años+serie por encima de la imagen de cada bloque.
- **Acto oscuro:** full-bleed en todos los rangos; el diptych pasa a apilarse verticalmente bajo 768 px (panel A sobre panel B, sin recorte — Regla 8).
- **Nav:** en ≤768 px el botón `Menu` sustituye a la nav horizontal (mismo panel modal del 04 §2); wordmark siempre visible.
- **Visor:** en ≤768 px los enlaces prev/next quedan bajo el contador, apilados; swipe no sustituye a los enlaces (el gesto es un extra, no la única vía).
- **Sin scroll horizontal en ningún caso**; `env(safe-area-inset-*)` respetado en full-bleed del acto oscuro.

---

## 5. Accesibilidad (objetivo: WCAG 2.1 AA)

1. **Contraste verificado por par** — tabla en 02 §1.
2. **Semántica primero:** `header/nav/main/footer/figure/figcaption/cite` reales; ARIA solo donde el HTML no alcanza (diálogo del menú).
3. **Headings jerárquicos:** un solo `h1` visible por página (statement del Acto I en Home es `p`, no `h1` — el `h1` de la Home es el wordmark; decisión documentada).
4. **Skip-link** al `main` (04 §14); `scroll-margin-top` en anclas.
5. **Focus visible** en todo interactivo (outline 2px `--ink`, offset 3px; en acto oscuro outline `--stage-ink`); nunca se elimina outline sin reemplazo.
6. **Overlay/menu:** `aria-modal`, focus trap, `Esc`, `overscroll-behavior: contain`, devolución de focus.
7. **Imágenes:** `alt` descriptivo de la obra (luz/composición, no interpretación crítica); cuando la imagen es enlace a obra, el `alt` + nombre de placa es suficientemente descriptivo; placas `figcaption` reales.
8. **`aria-live="polite"`** en el contador del visor (anuncia "3 / 9" al navegar).
9. **El acto oscuro** no usa `filter` ni `mix-blend-mode` sobre texto; el contraste es de color real (02 §1).
10. **Texto:** sin gris‑sobre‑gris por debajo del AA; `tabular-nums` en datos; `text-wrap` en headings/parrafos (02 §3).
11. **Movimiento:** reduced-motion apaga reveals, cross‑fades y apertura con transform (02 §8, 06 §2).
12. **Objetivos táctiles** ≥44 px (06 §3).

---

## 6. Decisiones de interacción explícitas

1. **Sin formulario en v2.** Las consultas profesionales por email (etiqueta de la galería: los curadores escriben). Una v3 puede añadirlo; el layout de `/contact` ya reserva el hueco (03 §G).
2. **Sin lightbox a pantalla de terceros:** el visor de obra es la propia página de serie (nada de overlays de imagen): deep‑linkable, cmd/click, SEO.
3. **El hover "encendido" es progresivo y no cambia el texto:** nunca se reemplaza contenido por hover (regla de hover feedback con realimentación de contraste).
4. **Sin auto‑play de video:** la serie 6 se muestra con poster + botón de texto "Play" `aria-pressed`; `prefers-reduced-motion` = sin autoplay, siempre reproducción explícita; el video nunca se reproduce con sonido por defecto.

---

## 7. Performance (base para la ejecución)

- **Fuentes:** 2 woff2 variable, `preload` de la display, `font-display: swap`, subconjunto latín; `size-adjust` calibrado para reducir CLS del swap.
- **Imágenes:** `width`/`height` explícitos (CLS 0); lazy‑loading en todo lo que no sea la primera obra de la Home (`fetchpriority="high"` solo ahí); formatos WebP/AVIF sobre JPEG original si el peso lo pide (decisión de ejecución, no de diseño).
- **JS mínimo:** el sitio funcionalmente vive sin JS (enlaces reales); el JS de la fase de ejecución se limita a: menú modal, visor ←/→, control del reveal. Sin librerías.
- **CLS objetivo < 0.1** — el layout no depende de medidas runtime; grid/flex nativos.

---

## 8. QA checklist pre-entrega (resumen)

- [ ] Todos los pares de color AA (tabla 02 §1) verificados en implementación.
- [ ] Tab navegación completa: header → skip → contenido → placa interactiva → footer, sin trampas.
- [ ] Menú: open/close, `Esc`, focus trap, devolución de focus, `aria-expanded` correcto.
- [ ] Reveal único solo en Home y solo primera vez; reduced-motion lo apaga.
- [ ] Ninguna imagen recortada (`object-fit: contain` + proporciones naturales).
- [ ] Sin scroll horizontal en 320 / 375 / 768 / 1024 / 1440 / 1920 px.
- [ ] `alt` en todas las imágenes; `figcaption` en todas las placas.
- [ ] Sin `transition: all`; solo `opacity`/`transform` en propiedades animadas.
- [ ] Contador de visor anunciado con `aria-live`.
- [ ] Estados vacíos presentes en press/exhibitions/cv según `05 §8`.
