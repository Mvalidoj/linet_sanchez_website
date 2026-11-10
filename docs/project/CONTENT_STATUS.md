# CONTENT_STATUS — bloqueantes de contenido y lenguaje de marcas

> Derivado de `../design/redesign_v2/05_CONTENT_MAP.md §6–§8`. Este archivo es el estado operativo durante la ejecución: cada bloqueante se cierra aquí y se refleja en el código con la marca correspondiente. Regla 7 (no inventar) obligatoria en `../CLAUDE.md §2`.

---

## 1. Lenguaje de marcas (usarlo en TODO el contenido no verificado)

| Marca | Significado | Cómo aparece al público |
|---|---|---|
| `(d)` | copy editorial propuesto, no confirmado por la artista | se usa en el código; **no se publica** sin confirmar (o se marca en la revisión interna con `body.show-drafts`, patrón del mockup v1) |
| `(d-EN)` | traducción al inglés propuesta del dossier, pendiente de OK | igual que `(d)` |
| `Artwork identification pending` | imagen real del catalogo SIN identificar con obra concreta | texto visible en la placa (`04 §5`, `--fs-meta`), permitido publicar |
| `[state]` | estado vacío con copy direccional | publicable (05 §8) |

## 2. Bloqueantes de contenido — tabla operativa

| # | Bloqueante | Bloquea | Cobertura mientras está abierto |
|---|---|---|---|
| B1 | Aprobación del statement EN (`05 §1`) | `/about` público + excerpt de Home | dejar sección con `(d-EN)` solo en revisión interna |
| B2 | Identificación de los 6 assets con obras del catálogo | placas con título/medidas en Home/catálogo/serie | placa mínima `Artwork identification pending` (05 §5) |
| B3 | CV de la artista | sección CV de `/about` | estado vacío: "Curriculum vitae is being documented." |
| B4 | Retrato de la artista | imagen de `/about` | poza vacía con placa `portrait pending` |
| B5 | Dossier EN como PDF de prensa | material real en `/press` | estado vacío: "Press documentation will be published here." + email |
| B6 | Nº de obras de la serie 3 (30×45cm) | contador "n works" de esa serie | omitir el contador (no publicar números no verificados) |
| B7 | Video Full HD de la serie 6 | reproducción en el visor | still + placa; `Play` apunta al video al llegar (06 §6) |
| B8 | Confirmación teléfono/dirección completa como datos públicos | ficha completa de contacto | publicar solo email + Instagram + "Havana, Cuba" (05 §7) |

## 3. Copy institucional de estados vacíos (verificado como propuesta `(d)`)

- **Press:** "Press documentation will be published here. For press inquiries, write to [linetsg@gmail.com](mailto:linetsg@gmail.com)."
- **Exhibitions:** "Exhibition history is being documented."
- **About/CV:** "Curriculum vitae is being documented."

Estos tres estados vacíos SON publicables (dirección clara; ver 04 §10 y 06 §5). Reglas: una sola línea, `--fs-meta`, `--meta`, sin cajas/iconos, con vía de contacto cuando aplique.

## 4. Datos de contacto verificados (del dossier)

- `linetsg@gmail.com` · `@linetsanchezart` · ciudad: Havana, Cuba.
- **No publicar** sin B8: teléfono y dirección completa (quedan como canal privado).

## 5. Registro de cerrados

_(vacío — al confirmarse cada bloqueante, marcar fecha aquí y actualizar `05_CONTENT_MAP.md` correspondiente.)_
