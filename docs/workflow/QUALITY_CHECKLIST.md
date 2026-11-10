# QUALITY_CHECKLIST — QA por fase (v2)

> Correr al cierre de cada fase antes de pedir aprobación. Fuentes: `../design/redesign_v2/06 §8`, matriz de estados del 04, reglas de placas/estados vacíos del 05, `CONTENT_STATUS` y `ASSETS_MANIFEST`. Marca ✓ / ✗ con nota; todo ✗ se resuelve o se declara como limitación en el informe de fase.

## 1. Sistema de diseño

- [ ] Ningún color/espaciado/tipografía fuera de tokens (`02`); sin valores mágicos en componentes.
- [ ] Sin bordes decorativos, sombras, gradientes, iconos, radios > 0, cards, patrones genéricos.
- [ ] `--hairline` usado solo donde 04/03 lo permiten.
- [ ] Todas las obras sin recorte (`object-fit: contain`, proporciones naturales, width/height explícitos).
- [ ] Render de imágenes dentro del límite 1.5× hasta assets finales (`ASSETS_MANIFEST §1`).

## 2. Contenido y marcas

- [ ] Todo dato de obra trazable a `05 §2–§4`; ningún título/medida/año inventado.
- [ ] Cada texto no verificado lleva su marca del lenguaje `CONTENT_STATUS §1` (`(d)`, `(d-EN)`, `Artwork identification pending`).
- [ ] Estados vacíos presentes con copy de `CONTENT_STATUS §3` (una línea, sin cajas, vía de contacto cuando aplique).
- [ ] Contacto público = email + Instagram + ciudad (sin teléfono/dirección — B8).

## 3. Tipografía y microtexto

- [ ] `tabular-nums` en años/medidas/contadores/timestamps.
- [ ] Sin mayúsculas forzadas en labels; tracking solo `--ls-meta`.
- [ ] `text-wrap: balance` en headings; `text-wrap: pretty` en párrafos; máx. 68–72 ch por línea de cuerpo.
- [ ] Comillas curvas y `…` (no `...`); espacios no separables en unidades ("100 × 150 cm").

## 4. Accesibilidad (AA)

- [ ] Contraste verificado de todos los pares usados (tabla `02 §1`).
- [ ] Un solo `h1` por página; jerarquía de headings correcta; `scroll-margin-top` en anclas.
- [ ] Skip-link presente y funcional; foco visible (outline 2px) en TODO interactivo.
- [ ] Menú modal: `role="dialog"`, `aria-modal`, focus trap, `Esc`, devolución de focus, `aria-expanded` correcto.
- [ ] Imágenes con `alt` descriptivo; `figcaption` en cada placa.
- [ ] Contador del visor con `aria-live="polite"`; deep-links como `<a>` reales.
- [ ] Áreas táctiles ≥ 44 px; `touch-action: manipulation`; nada hover-only.
- [ ] `prefers-reduced-motion`: reveal y cross-fades apagados, obra visible al instante.

## 5. Interacción / motion

- [ ] Reveal único SOLO en Home Acto I (una vez por visita); ningún fade en cada sección ni en scroll.
- [ ] Solo `opacity`/`transform` animados; nunca `transition: all`; timings de `02 §8`.
- [ ] Hover de obra `.94 → 1` en 320 ms; reposo encendido en táctil.
- [ ] Sin carousels, loops o autoplay (`06 §6`: video con botón de texto, sin sonido por defecto).

## 6. Responsive

- [ ] Desktop ≥1200 / tablet 768–1199 / móvil <768 según `06 §4` (rail desaparece como columna, placa bajo obra, nav → menú modal).
- [ ] Sin scroll horizontal en 320/375/768/1024/1440/1920 px.
- [ ] Acto oscuro full-bleed con safe-area insets respetado; diptych apila vertical bajo 768 px.

## 7. Performance

- [ ] 2 woff2 variable preloadeados, `font-display: swap`, `size-adjust` calibrado.
- [ ] `fetchpriority="high"` solo en primera obra de Home; `loading="lazy"` en el resto.
- [ ] JS mínimo sin librerías y sitio funcional sin JS (navegación, placas, catálogo).
- [ ] CLS < 0.1.

## 8. Documentación

- [ ] Token nuevo o cambio de patrón → actualizado en el doc correspondiente (no en silencio).
- [ ] Bloqueantes `CONTENT_STATUS §2` revisados (¿alguna marca ya resoluble?).
- [ ] `../ARCHITECTURE.md` actualizado si cambió el estado del repo.

## 9. Informe de fase (plantilla mínima)

1. Qué se implementó (alcance vs. DoD de la fase) · 2. Archivos tocados · 3. Decisiones de diseño · 4. Comportamiento responsive · 5. Validación (esta checklist) · 6. Limitaciones conocidas (bloqueantes abiertos) · 7. Docs actualizados · 8. Solicitud de aprobación para la siguiente fase.
