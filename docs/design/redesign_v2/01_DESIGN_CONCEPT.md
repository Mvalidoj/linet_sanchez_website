# 01 · CONCEPTO DE DISEÑO — "THE EMPTY STAGE" (v2)

> **Estado:** especificación vigente (aprobada por el usuario). Sustituye al concepto v1 del raíz (`docs/design/` y mockup de `frontend/mockup/`), que quedan solo como histórico.
> **Idioma copia pública:** inglés. Documentación interna: español (ADR-001).
> **Regla:** todo el contenido de obra proviene del dossier real (2012–2025). Nada inventado.

---

## 1. Origen del concepto (por qué este, y no otro)

El rediseño parte de tres hechos verificables del trabajo de la artista:

1. **La obra es espacio vacío a punto de ser escena.** Maquetas arquitectónicas blancas, sin color, filmadas y fotografiadas como escenarios a los que el público nunca entra (dossier: "un set visto desde su exterior", "no develar el interior").
2. **La luz es el único suceso.** En todas las series el protagonista es un haz de luz sobre volumen blanco: arquitectura + iluminación teatral. No hay color en ninguna obra.
3. **El tiempo comprimido.** La artista nomina sus series con la notación de un cronómetro parado en cero: `00:00:00`. La cita estructural de su dossier es Bachelard: *"el espacio conserva tiempo comprimido"*.

El concepto v1 ("THE ARCHITECTURE OF MEMORY", página de papel cálido tipo folleto editorial) describe el *tema* pero no la *física* del trabajo: se parece a cualquier portfolio editorial y deja tratando a la obra como contenido. **v2 se construye sobre la física de la obra: el sitio es un teatro vacío antes de que llegue el público — la luz como única acción.**

Relación con el marco curatorial vigente: "THE ARCHITECTURE OF MEMORY" sigue siendo el concepto curatorial del portfolio; "The Empty Stage" es la expresión de diseño que lo encarna físicamente (arquitectura = el blanco del sitio; memoria/tiempo = la penumbra y el motivo `00:00:00`; teatralidad = la iluminación).

**Una sola osadía** (restraint): el lugar memorable del sitio es **"el acto oscuro"** — una sección a sangre completa en penumbra donde las obras se ven como salen: iluminadas dentro de una arquitectura oscura. Todo lo demás alrededor es callado y disciplinado: blanco yeso, aire, tipografía fina.

---

## 2. Los tres movimientos del sitio (arquitectura narrativa)

| Movimiento | Lúz | Qué hace |
|---|---|---|
| **A. El vestíbulo** (luz) | blanco yeso, aire máximo, tipografía display en peso ultraligero | El visitante "entra" al espacio: nombre, statement en una línea, primeras obras flotando en el vacío |
| **B. El escenario** (penumbra) | negro teatro #141413, obras iluminadas | Donde se expone lo esencial: la serie `00:00:00` y los Sets, vistos como en una sala oscura |
| **C. El colofón** (luz) | blanco yeso de nuevo | Contacto, prensa, expediente: la parte institucional, limpia, curatorial |

No es modo claro/oscuro alternable: es **una coreografía de iluminación fija por página**. La mayoría de las páginas es A + C; la Home tiene los tres movimientos (ver blueprints 03).

> Anotación: esto NO es dark mode. El negro del movimiento B existe solo donde la obra misma vive en penumbra; el contraste y la legibilidad se especifican aparte (06).

---

## 3. Posicionamiento frente a los sitio de referencia

`reference_pages.txt` — 9 sitios de artistas. Análisis basado en estructura real del markup/CSS accesible por HTTP (límites técnicos declarados); no copiamos nada, extraemos decisiones.

| Sitio | Qué confirma el análisis | Qué tomamos | Qué descartamos |
|---|---|---|---|
| **Luc Tuymans** | hero a sangre = una sola obra con pie formal completo (soporte, medidas, colección, crédito fotográfico); nav de 5 entradas; acento único (rojo en flechas); muchísimo vacío | El pie de obra estilo etiqueta de museo (soporte·medidas·año), como información y no como decoración | La obra gigante a sangre a resolución limitada (nuestros assets ~720–750px aún no lo soportan; ver 05) y el acento de color (aquí no hay color: el acento es la luz) |
| **Gregor Collienne** | nav mínimo de 2 enlaces ("Overview"/"Work"); grid de obras sin marcos, con visor secuencial; footer con conmutador Grid/List | La nav mínima funcional y el visor secuencial con contadores para la vista de serie | El grid masivo de thumbnails (140): aquí el catálogo es de series, no un muro de fotos; y la Home debe tener jerarquía, no densidad |
| **Andreassen Søner** | home-first = feed de noticias de exposiciones (credentials-first, público institucional) | El instinto credentials-first lo absorbe la página Exhibitions (estado vacío documentado, 05) | Que la Home sea una lista de noticias: la obra es el protagonista, per brief |
| **Pino Musi, Justin Mortimer, Nikolas Antoniou, Michael Simpson, Kavieng, Viv MGMT** | bloqueados en fetch (SSL/WAF) o estructura genérica | — (no citar ni imitar lo que no pudimos verificar — Regla 7 aplicada al diseño) | — |

**Contra las recetas genéricas (checklist anti-default, aplicado):** sin crema cálido `#F4F1EA` (el v1 caía ahí: punto de partida a superar — el blanco v2 es frío- yeso); sin Cormorant+Inter (par v1, par genérico "Editorial Classic"); sin mayúsculas espaciadas como eyebrow; sin separadores con puntos medios; sin tarjetas, bordes, sombras, radios; sin "→" pegado a enlaces.

---

## 4. Dirección visual única

### 4.1 Color — monocromo absoluto
El sitio no introduce ningún color por encima de la obra: **el acento de este sitio es la luz** (tratamiento de imagen, penumbra, encendido/apagado). Paleta de 6 neutros + 1 para penumbra (tokens completos en 02).

### 4.2 Tipografía como volumen
- **Display y cuerpo: Newsreader** (variable, eje óptico 6–72). En display se usa en **peso 200–250 a gran tamaño óptico**: una garamond contemporánea delgada casi al borde de legibilidad de la pluma — el análogo tipográfico de la arista fina de una maqueta. Itálica reservada a la voz de la artista (statements, cita Bachelard).
- **Meta y navegación: Instrument Sans** (variable). Etiquetas de obra como placas de museo: numeración tabular para medidas y años (`tabular-nums`), tracking 0.04em, **sin mayúsculas forzadas**.
- La escala tipográfica es un gesto deliberado: lo que se ve primero es lo más delgado y grande; funcionan juntos como volumen escénico (tokens y escala en 02).

### 4.3 Layout — las "alas y el escenario"
Grid editorial asimétrico fijo en todo el sitio:
- **Rail de las alas (3/12):** pies de obra, metadatos, navegación secundaria, firma. Zona de lectura de contexto.
- **El escenario (7/12):** la obra, siempre completa — **nunca recortada**: cada imagen se muestra con sus proporciones reales (Regla 8), en una "poza" (`--bone`) que permite que las proporciones muy verticales u horizontales respiren sin recortar.
- Todo alineado a la izquierda (ningún texto centrado salvo el acto oscuro, que centra la obra — es un escenario).
- Espacio negativo estructural: en ningún contenedor se rellena por rellenar; el vacío es elemento (Principio 2 vigente).

### 4.4 Motivo `00:00:00`
El único ornamento del sitio es la notación de tiempo de la propia obra, usada como estructura, no como decoración: la penumbra de la Home se titula `00:00:00` con tipografía tabular delgada; en el detalle de obra, el contador `01 / 09` usa las mismas cifras tabulares. No se añade ningún otro elemento gráfico; **sin iconos, sin logos, sin flechas decorativas**.

### 4.5 Pie de obra — placas de museo
Cada obra se acompaña con el formato del dossier: `Untitled (hall), 2019–2020 · digital photography · 100 × 150 cm` en Instrument Sans con cifras tabulares; crédito del estado (si la obra está identificada o no) solo cuando aplica. Nunca se inventa título ni medidas (Regla 7) y en ningún caso se recorta (Regla 8).

---

## 5. Atmósfera y mood (referencia breve)

- Mood visual: **maño blanco + penumbra de un teatro una hora antes de la función.** Frío, limpio, sin texturas falsas; la única "calidez" entra de la obra misma.
- La página debe sentirse como **sala curada, no folleto**: nada grita, todo es legible, lento, preciso.
- Sensación de tiempo: sin animaciones repetitivas ni carousels; un solo gesto de encendido en la carga de la Home (especificado en 06) y respuestas de interacción instantáneas (≤200 ms).

## 6. Qué deja atrás explicitamente (respecto a v1)

| v1 (mockup actual) | v2 (esta propuesta) |
|---|---|
| Papel cálido `#F3F2EE`, sección de prácticas tipo brochure | Yeso frío, sin secciones de brochure, jerarquía editorial de tres movimientos |
| Cormorant Garamond + Inter (par genérico) | Newsreader ultraligero + Instrument Sans tabular |
| Hairlines estructurales por todas partes | Hairlines solo cuando separan placas de obras; el vacío hace el resto |
| "Selected Works" grid simétrico de 4 | Catálogo de series cronológico con escalas alternadas + acto oscuro único |
| copy draft genérico | copy derivado del dossier real (series, títulos, medidas) y marcado donde falte verificación |

## 7. Riesgos declarados (de diseño, documentados a propósito)

1. **El tipógrafo casi invisible** (peso 200–250): si el peso se percibiese débil en pantallas low‑dpi, se sube a 280–300 sin cambiar el diseño (decisión reversible en tokens).
2. **El acto oscuro:** es la apuesta estética principal; si la artista lo rechazara, la variante descritas son: (a) penumbra solo en detalle de obra, (b) sitio completo en luz. Ambas se mantienen consistentes con estos tokens (ver 02 §10).

**Resultado esperado:** un sitio que *no se parece* a ningún portfolio de referencia y que un curator recuerda — porque es el único en donde el diseño de la web y la lógica interna de la obra coinciden: blanco arquitectónico, penumbra escénica, luz como único suceso.
