# 03 · LAYOUT BLUEPRINTS (v2) — estructura de cada página

> Wireframes conceptuales en ASCII. Navegación constante en todas las páginas (06 §1). Regla global: grid "alas + escenario" (01 §4.3) — rail izquierdo = contexto; escenario = obra. El contenido público está en inglés; aquí se muestra el copy propuesto. Todo el contenido marcado `(d)` es propuesto/por confirmar.
> **Rutas:** `/` · `/work` · `/work/[slug]` · `/about` · `/press` · `/exhibitions` · `/contact`

---

## A. HOME `/` — cuatro actos

La única página con los tres movimientos de iluminación (01 §2). Escala vertical generosa; la Home entera se lee en ~6 pantallas.

### Acto I — Vestíbulo (luz)

```text
┌─────────────────────────────────────────────────────────────────┐
│ Linet Sánchez                                    work about ... ⋯│  ← header mínimo, sin caja
│                                                                 │
│                                                                 │
│ │  ← rail 3/12                 │   ┌───────────────┐            │
│   (vacío)                      │   │               │            │
│                                │   │  [obra 1:     │ ← escenario 7/12
│  The architecture of memory    │   │   arcos, luz] │   en poza bone
│  is an empty stage lit for     │   │   ~780px      │   reveal único
│  no one.                       │   │               │   (06 §2)
│  — statement en Newsreader     │   │               │            │
│    italic, --fs-body-lg        │   └───────────────┘            │
│                                │   Untitled #4 · 2012–2016      │
│                                │   inkjet pigment print         │
│                                │   100 × 150 cm                 │
│                                │                                │
│                                │            (vacío 2/12 →)      │
└─────────────────────────────────────────────────────────────────┘
```

- H1 = nombre de la artista, solo en el wordmark del header; **la statement de una línea es el verdadero "hero"**. Nada de hero-image a sangre (límite de resolución de assets, 05 §4).
- Placa de la obra bajo la imagen: formato museo (01 §4.5).

### Acto II — Catálogo (luz)

```text
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  The catalogue (rail)          │  2012 — 2016  Untitled series  │
│  Series listed once, in        │  [obra]                        │
│  chronological order, as       │  ~640px  ─ escalas alternadas  │
│  thin rules of text:           │                                │
│                                │              2015 — 2016  00:00:00 │
│  2012 — 2016  Untitled series  │              [obra diptico ~540px] │
│  2015 — 2016  00:00:00         │                                    │
│  2017 — 2021  Untitled series #2                   2018 — 2020  00:00:00 #2 │
│  2018 — 2020  00:00:00 #2      │       [obra]                      │
│  2019 — 2020  Untitled*        │       (pozas de distinta altura;  │
│  2021 —  002 video stills      │        la cronología manda, no el │
│  2023 — 2024  00:00:00 #3 Sets │        encaje en grilla)          │
│                                │                                    │
└─────────────────────────────────────────────────────────────────┘
```

- Lista índice en el rail (años en tabular) + **una obra por serie** en el escenario alternando escala/orientación: asimetría reconstruida (principio 5), no grilla de tarjetas.
- Cada obra enlaza a `/work/[slug]`. El índice del rail enlaza a anclas de la misma página. `*` = la serie 2019–2020 sale del dossier con títulos en inglés ya asignados — copy definitivo en 05.

### Acto III — `00:00:00` (penumbra, el acto oscuro)

```text
┌─────────────────────────────────────────────────────────────────┐
│█████████████████████████████████████████████████████████████████│
│█ a sangre completa, --stage ─────────────────────────────────── █│
│█                                                               █│
│█                                    00:00:00                    █│
│█                  ┌──────────┐  ┌──────────┐                    █│
│█   (vacío)        │ diptych  │  │ diptych  │    (vacío)        █│
│█                  │ panel A  │  │ panel B  │                    █│
│█                  │ stage-well│ │ stage-well│                   █│
│█                  └──────────┘  └──────────┘                    █│
│█                                                               █│
│█      Untitled, from the series 00:00:00 · diptych             █│
│█      digital photography · 100 × 150 cm each · 2015 — 2016    █│
│█      → work detail                    texto --stage-ink       █│
│█                                                               █│
│█   "The space preserves time in compression."                  █│
│█    — Gaston Bachelard, The Poetics of Space (d)               █│
│█████████████████████████████████████████████████████████████████│
└─────────────────────────────────────────────────────────────────┘
```

- Full‑bleed real (`100vw`), mínimo `--space-10` de aire interno; la cita va en Newsreader italic, pequeña, alineada a la izquierda del bloque (no centrada; solo la obra se centra — es un escenario).
- Sin botón decorativo; el enlace al detalle es el propio pie/enlace textual subrayado.

### Acto IV — Colofón (luz)

```text
┌─────────────────────────────────────────────────────────────────┐
│  About (rail)                  │  Linet Sánchez is a visual     │
│                                │  artist … (d) — 3 líneas       │
│                                │                                │
│                                │        Exhibitions — state (d) │
│                                │        Press — state (d)       │
│                                │        dos líneas, --meta      │
│                                │                                │
│  Contact                       │  linetsg@gmail.com             │
│  (rail, --fs-meta)             │  @linetsanchezart              │
│                                │                                │
│  Linet Sánchez   © 2025 (d)    │         work · about · contact │
└─────────────────────────────────────────────────────────────────┘
```

- Footer = colofón del mismo acto: tres columnas de texto puro, sin cajas. El año con `©` va como contenido editorial, no como sello.

---

## B. WORK `/work` — el catálogo

```text
┌─────────────────────────────────────────────────────────────────┐
│ header                                                          │
│                                                                 │
│ Work                          2012 — 2025  photography          │
│ (display, --fs-display)       sculpture        video ← líneas  │
│                                                  --meta, 1 fila │
│ ────────────────────────────── hairline (la única estructural) │
│                                                                 │
│ 2012 — 2016        │  [obra 1: poza bone, escala original]     │
│ Untitled series    │                                           │
│ photography · 11   │                                           │
│ works              │                                           │
│ ───────────────────┼───────────────────────────────────────────│
│ 2015 — 2016        │        [obra: diptych en dos pozas]       │
│ 00:00:00           │                                           │
│ photography · 12   │                                           │
│ ───────────────────┼───────────────────────────────────────────│
│ … (todas las series del dossier, mismo patrón alternado)       │
└─────────────────────────────────────────────────────────────────┘
```

- Una fila por serie (9 series del dossier → 9 filas). Cada fila = años tabulares + serie + soporte/medios en rail, una imagen representativa a la derecha.
- Escalas alternadas fila a fila (arriba/abajo, corta/larga) — catálogo de cronología, no mosaico.
- Fila entera clicable → `/work/[slug]`; hover: la imagen "se enciende" de `0.94 → 1`.

## C. SERIE / OBRA `/work/[slug]` — el visor

```text
┌─────────────────────────────────────────────────────────────────┐
│ header            Work                            ← breadcrumb │
│                                                                 │
│ 00:00:00, 2015 — 2016                                             │
│ digital photography (placa de serie)                             │
│                                                                 │
│ statement de la serie (d): 3–5 líneas, --fs-body-lg             │
│ (traducción del dossier, marcada por confirmar — 05 §3)         │
│                                                                 │
│                                                                 │
│      Untitled, from 00:00:00                                    │
│      ┌─────────────────────────────────┐                        │
│      │      [obra actual, completa]    │ ← 1 obra por vista     │
│      →  │        (poza bone)            │   ← prev               │
│      └─────────────────────────────────┘   → next               │
│      Untitled (hall) · 100 × 150 cm                              │
│      2019 — 2020 · digital photography                          │
│                                                                 │
│      03 / 09   ← contador tabular                               │
│                                                                 │
│ ← previous work                                     next work → │
│ (flechas de teclado left/right documentadas en 06 §3; el símbolo │
│  "→" del diseño es solo tipográfico en el enlace textual)       │
└─────────────────────────────────────────────────────────────────┘
```

- Visor secuencial a la Collienne (01 §3): una obra por vista, navegación con enlaces `<a>` reales (cmd/‑click funcionan), deep link por obra (`/work/[slug]#untitled-hall`).
- El rail lleva: título de la serie, statement corto, y la lista de obras de la serie como índice lateral (obra actual marcada).
- Enlaza también a las esculturas de la misma serie si corresponde (caso 2017–2018, dossier).

## D. ABOUT `/about`

```text
┌─────────────────────────────────────────────────────────────────┐
│ header                                                          │
│                                                                 │
│ About          │  Artist statement (d — traducción del dossier) │
│                │  ····· 5–6 párrafos, Newsreader, --fs-body-lg ·│
│                │  ························· (líneas de aire)   │
│                │                                                │
│                │  ─ Practice                                    │
│                │  photography · sculpture · video  (--meta)     │
│                │                                                │
│                │  ─ Curriculum (estado: pendiente de entrega)   │
│                │  Empty state --meta:                           │
│                │  "Curriculum vitae is being documented." (d)   │
│                │                                                │
│                │  [retrato de la artista — POZA VACÍA si no     │
│                │   llegó el asset: placa "portrait pending"]    │
└─────────────────────────────────────────────────────────────────┘
```

- Statement íntegro en itálica ligera de Newsreader (voz de la artista); CV y retrato en estado vacío explícito hasta llegar los materiales (05 §6).

## E. PRESS `/press` · F. EXHIBITIONS `/exhibitions`

```text
┌─────────────────────────────────────────────────────────────────┐
│ header                                                          │
│                                                                 │
│ Press                           Press documentation will be     │
│ (--fs-display)                  published here.                 │
│                                 (empty state --meta, una línea, │
│                                  sin cajas ni bordes — 06 §5)   │
│                                 Contact for press inquiries →   │
│                                 linetsg@gmail.com               │
└─────────────────────────────────────────────────────────────────┘
```

Idéntico en estructura a Exhibitions (título + estado vacío + vía de contacto). Es la página más corta del sitio a propósito: **el vacío también es diseño** (principio 2); cuando llegue material de prensa, el mismo layout toma una lista de tipo colofón (año — publicación — enlace) sin tarjetas.

## G. CONTACT `/contact`

```text
┌─────────────────────────────────────────────────────────────────┐
│ header                                                          │
│                                                                 │
│ Contact          │  For exhibitions, acquisitions, press        │
│ (--fs-display)   │  and professional enquiries:  (d)            │
│                  │                                              │
│                  │  linetsg@gmail.com          ← enlace texto   │
│                  │  @linetsanchezart           ← enlace texto   │
│                  │                                              │
│                  │  Studio:                                     │
│                  │  Havana, Cuba  ‹ciudad por confirmar (05 §6)›│
│                  │                                              │
│                  │  (sin formulario en v2: las consultas        │
│                  │   profesionales se dirigen por email —       │
│                  │   decisión de diseño, 06 §6)                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## Notas transversales de los blueprints

1. **Header siempre igual y siempre en luz** (fondo `--plaster` sólido, sticky): no navega "sobre" el acto oscuro — al recorrer la penumbra aparece como barra clara estable, nunca se integra al acto.
2. El footer de **todas** las páginas = Acto IV (colofón); la Home no repite un bloque de contacto distinto, lo usa.
3. Los estados vacíos nunca usan cajas ni ilustraciones; una línea en `--meta`.
4. Toda lista es de texto puro (años tabulares). Las únicas imágenes del sitio son de la artista, en pozas, nunca recortadas.
5. El scroll de la Home es la única narrativa vertical de más de 5 pantallas; las páginas internas completan en 1–2 pantallas.
