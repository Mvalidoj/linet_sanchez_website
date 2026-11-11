# mockup-v2/ — Maqueta HTML/CSS "THE EMPTY STAGE" (Home)

> Validación visual del concepto v2 aprobado (`docs/design/redesign_v2/`). HTML + CSS puro, **sin JS ni build**. Descartable — no es el sitio de producción y no evoluciona hacia él (la ejecución real parte de `docs/workflow/EXECUTION_PHASES.md` F-1).

## Cómo abrirla

Abrir `index.html` directamente (`file://`). Todo es local: fuentes woff2 variable (Newsreader roman/italic + Instrument Sans, latín) e imágenes se referencian desde `assets/images/`.

Notas:
- Si el ordenador no tiene internet la maqueta funciona igual (fuentes locales). *(Las fuentes se descargaron con nombres `Newsreader-var-latin.woff2`, `Newsreader-Italic-var-latin.woff2`, `InstrumentSans-var-latin.woff2` — ver `docs/project/ASSETS_MANIFEST.md §2`.)*
- Requiere navegador moderno (`:has()`, `details`, fuentes variables). Chrome/Edge/Firefox recientes.

## Qué valida

- **Tokens literal de `02`** (`css/tokens.css`): paleta monocroma, yeso frío `#F3F2F0`, escala fluida Newsreader ultrafina + Instrument Sans tabular, hairline restringida.
- **Los 4 actos de la Home** (`03 §A`): vestíbulo con reveal único, catálogo con escalas alternadas, **acto oscuro a sangre con `00:00:00`** y cita Bachelard, colofón.
- Placas de obra tipo etiqueta de museo, pozas `contain` sin recortes, hover "encendido" (`.94 → 1`).
- Estados de foco, skip-link, mobile/tablet/desktop.

## Qué NO valida / limitaciones (mockup sin JS)

| Límite | Detalle | Real |
|---|---|---|
| Menú móvil | checkbox-hack CSS: se abre/pulsa con puntero; cierre con "Close" (dentro del panel) o clic en cualquier zona vacía (scrim-label oculto); con teclado el foco llega al label pero no se conmuta con Enter en todos los navegadores; sin focus trap ni `Esc` | panel modal accesible en F-1 (04 §2) |
| Menú desktop "More" | `<details>` nativo (accesible pero sin transición) | componente con motion en F-1 |
| Estado del menú | `body:has(...)` + `overflow:hidden` (sin scroll-lock real por focus) | focus trap real en F-1 |
| Reveal | animation CSS al cargar (una vez, sin control por visita) | JS mínimo en ejecución para "una vez por visita" |
| Navegación | enlaces a `#` (las otras rutas no existen) | F-4/F-5 |
| Mapping imagen↔serie | a propósito NO realizado (identificación pendiente, CONTENT_STATUS B2) | placas con título en F-4 |
| Imágenes | 6 JPG ~720–750px; render limitado 1.5× (`ASSETS_MANIFEST §1`) | assets finales pendientes de la artista |

## Estructura

```text
mockup-v2/
├── index.html       Solo la Home (los 4 actos) — copy propuesto (d)/(d-EN) marcado en comentarios
├── css/tokens.css   Traslación literal de redesign_v2/02 — el único archivo para copiar a F-1
├── css/styles.css   Layout de la maqueta (desechable)
└── assets/fonts/    woff2 variables locales (OFL, Google Fonts)
```

Con el OK del concepto: F-0b (ADR-000 stack) → F-1 (tokens reales + componentes).
