# 05 · MAPA DE CONTENIDO (v2) — del dossier al sitio

> Fuente única de verdad: **dossier 2012–2025** (PDF oficial, copia en el raíz del workspace fuera de este repo: `../Dossier 2012-2025 Linet Sánchez español_compressed-3.pdf`) + `assets/images/`. Nada de este archivo es inventado; lo no verificado va marcado. La copia pública es **inglés**; la traducción del statement es **propuesta** `(d-EN)`: pendiente de revisión/aprobación de la artista antes de publicar (Regla 7).

---

## 1. Statement de la artista — texto íntegro del dossier

**Original (dossier, español):** el texto completo citado abajo; **traducción propuesta al inglés `(d-EN)`** para `/about` (bloque principal) y excerpt para Home (Acto I: ver §3).

> **Propuesta de traducción `(d-EN)` — no verified:**
>
> "My work moves between photography, sculpture and video. I build empty, colorless architectural spaces out of models, which I then photograph, film or exhibit as sculptural objects.
>
> These architectures come mostly from remembered places tied to personal experiences: houses I have lived in, the theatre where I danced as a girl, or simply spaces of my memory I have never been to. For me, memory is not a static archive but a shifting organism which, in its attempt to exist, changes and seeks new forms to adhere to our consciousness.
>
> My training in classical ballet as a teenager drew me to the aesthetics of the scenic — to the potential of an empty stage as an active container and modifier of human behaviour; a void that is not absence, but a bond with the intangible and the fleeting. What moves me as well is the solitude inherent in the human being, condemned to a single perspective, unable to share their mental space with anyone else.
>
> My pieces operate as a form of shelter: places of control over what is in fact chaotic and shifting. A need for introspection becomes evident in them, a need to reconstruct my past and my present against the constant dissatisfaction produced by the memory of what no longer is, or never was. In a depressed country where the past is rewritten and the future blurs, exile — mental or physical — becomes the only form of survival."
>
> \*(pendiente: confirmar con la artista; no publicar hasta OK.)*

---

## 2. Catálogo de series (para `/work` y blueprints)

Orden cronológico. Todos los datos son del dossier. `n obras` = works listadas en el dossier.

| # | Serie (EN) | Años | Soporte / técnica | Medidas | Obras listadas |
|---|---|---|---|---|---|
| 1 | Untitled series | 2012 — 2016 | Photographic print, pigment inkjet on photo paper | 100 × 150 cm | #1–#11 (11) |
| 2 | 00:00:00 (diptychs) | 2015 — 2016 | Digital photography | 100 × 150 cm each | 1 diptych (2 panels) |
| 3 | 00:00:00 (stage variations) | 2015 — 2016 | Digital photography | 30 × 45 cm each | serie (nº no especificado) |
| 4 | Untitled series #2 | 2017 — 2021 | Digital photography | 100 × 160 cm | (door) · (staircase) · (corridor) · (stage) |
| 5 | 00:00:00 #2 | 2018 — 2020 | Digital photography | 100 × 150 cm | (hall) · (room) · (room) 2 · (room) 3 · (room) 4 · (studio) · (bathroom) · (stairs) = 8 |
| 6 | 00:00:00 #2 — video stills | 2021 | Video, Full HD (stills) | — | Scholarship · Bathroom · Room 1 · Room 2 |
| 7 | Untitled series — sculptures | 2014 — 2018 | Wood, glass, mat board, vinyl, LED lights | ver §4 | #1–#8 |
| 8 | Untitled series — reliefs | 2017 — 2018 | 3D print (PLA); mat board + MDF + enamel; mat board + foam; wood + MDF | ver §4 | (staircase) · (staircase) #2 · (rooftop) · (bedroom) (+4 details) |
| 9 | 00:00:00 #3 — the Sets | 2023 — 2024 | Digital photography, Hahnemühle Photo Rag Baryta 325 gsm | ver §4 | Set #1–#7 (7) |

`*` Las traducciones de títulos de obra sin título: el dossier ya usa "Untitled" para las series 5 (2018–2020). Para series 1–4 `(d-EN)` = propuesto.
`(nota)` La serie 6 (video stills) existe como obra de video — el sitio debe mostrarla como grupo con reproductor `poster` + `prefers-reduced-motion` fallback (06 §4).

---

## 3. Home — bloques y fuentes

| Bloque (see 03 §A) | Texto propuesto `(d)` | Fuente / verificación |
|---|---|---|
| Acto I — statement | "The architecture of memory is an empty stage lit for no one." | **propuesto** (derivado del dossier, no literal del statement) |
| Acto I — obra | 1 obra de la serie 1, placa completa (ver §5 imágenes) | imagen disponible, identificación pendiente |
| Acto II — obra y placas | 1 obra por cada serie 1–5, 7 y 9; serie 8 solo si hay asset | dossier ✓ |
| Acto III — cita | "The space preserves time in compression." — Gastón Bachelard, *The Poetics of Space* `(d-EN)` | dossier ✓ (cita original ES: "el espacio conserva tiempo comprimido") |
| Acto IV — about excerpt | 3 líneas del statement §1 `(d-EN)` | dossier ✓ |
| Acto IV — estados vacíos press/exhibitions | §5 abajo | — |

---

## 4. Fichas de obra con medidas verificate (para `work-plate`)

**Serie 1:** 11 obras `Untitled #1…#11` · 100 × 150 cm
**Serie 2:** diptych, panel 100 × 150 cm each
**Serie 3:** 30 × 45 cm each (`n` = el dossier no lo lista: **gap declarado**)
**Serie 4:** (door) · (staircase) · (corridor) · (stage) · 100 × 160 cm → `Untitled (door)` etc. `(d-EN)`
**Serie 5:** 8 obras con nombres EN ya publicados en el dossier → usarlos **literales**: `Untitled (hall)`, `Untitled (room)`, `Untitled (room) 2`, `Untitled (room) 3`, `Untitled (room) 4`, `Untitled (studio)`, `Untitled (bathroom)`, `Untitled (stairs)` · 100 × 150 cm · 2019–2020
**Serie 6:** 4 video stills (`Scholarship`, `Bathroom`, `Room 1`, `Room 2`) · Full HD
**Serie 7 (esculturas):** #1 45×45×19 · #2 45×45×20 · #3 45×45×15 · #4 45×45×19 · #5 45×45×21 · #6 45×45×18 · #7 35×35×14 · #8 35×35×16 (cm) · años 2015/2016/2017/2018 según ficha
**Serie 8 (relieves):** (staircase) 68×68×7 cm PLA 2017 · (staircase) #2 68×68×7 mat board, MDF, enamel 2018 · (rooftop) 42×42×36 mat board, foam 2017 · (bedroom) 48×48×16 wood, MDF, enamel 2018 → títulos EN `(d-EN)` (dossier ES: escalera, azotea, habitación)
**Serie 9 (Sets):** Set #1 132 × 101.5 · Set #2 100 × 85 · Set #3 132 × 95 · Set #4 100 × 134 · Set #5 100 × 118 · Set #6 100 × 108 · Set #7 132 × 104 (cm)

---

## 5. Imágenes disponibles (6) — identificación pendiente

Las 6 imágenes reales (`assets/images/` de este repo) **no pueden ser asociadas** todavía a ninguno de los títulos del dossier: identificación pendiente de la artista. Mientras tanto:
- En el sitio usan placa mínima: `"Artwork identification pending"` en `--meta` (nunca un título provisional).
- Limitar render a máx. 1.5× su resolución nativa (720–750 px) hasta recibir assets finales (05 §6); Home sin hero full-bleed por esto (`03 §A`).

---

## 6. Pendientes de entrega por la artista (bloqueantes `content`)

| Material | Estado | Impacto |
|---|---|---|
| Aprobación del statement EN (§1) | pendiente | bloquea `/about` público y excerpt Home |
| Identificación de los 6 assets | pendiente | bloquea placas de obra en Home/catálogo |
| CV / curriculum vitae | pendiente | bloquea sección CV de `/about` |
| Retrato de la artista | pendiente | bloquea `/about` retrato en poza |
| Dossier PDF descargable | el propio dossier sirve como fuente del sitio → versión EN para prensa **pendiente** | bloquea `press` con material real |
| Nº de obras serie 3 | dossier no lo lista | gap declarado — no rellenar |
| Asset de video (Full HD) para serie 6 | pendiente | `work-viewer` muestra still + reproductor cuando llegue |
| Confirmación de datos de contacto completo | pendiente (ver §7) | bloquea `/contact` público |

---

## 7. Contacto

Verificado en dossier: `linetsg@gmail.com` · Instagram `@linetsanchezart` · teléfono `(+53) 52625680` · dirección completa `Calle 13 #1102 …` La Habana.
**Decisión editorial propuesta:** en el sitio público se publican email + Instagram + ciudad ("Havana, Cuba"). Teléfono y dirección completa permanecen fuera del sitio (canal de contacto de la artista para consultas profesionales es el email); publicarlos requiere confirmación explícita. `03 §G`.

---

## 8. Copy institucional propuesto `(d)` para estados vacíos

- `Press` → "Press documentation will be published here. For press inquiries, write to linetsg@gmail.com."
- `Exhibitions` → "Exhibition history is being documented."
- `About/CV` → "Curriculum vitae is being documented."
- `Work/Serie 3 número de obras` → el contador omite obras mientras la ficha no esté completa (no publica "n obras" si `n` no está verificado).

Todos los estados vacíos siguen `04 §10` y el copy de `06 §5` (direccional, sin tono de marca).
