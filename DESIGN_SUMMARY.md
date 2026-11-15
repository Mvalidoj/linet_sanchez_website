# Resumen de diseño — "THE EMPTY STAGE" · Portfolio de Linet Sánchez

> Documento de handoff: cualquier IA (o humano) puede ejecutar, escalar o modificar el proyecto solo con esto + los archivos fuente que se listan al final. Valores exactos, no aproximaciones.
> Fecha: 2026-11-10. Estado vigente: Home publicable; resto de rutas sin implementar.

---

## 1. Identidad y concepto

**Proyecto:** portfolio de Linet Sánchez, artista visual contemporánea (fotografía, escultura, video). Audiencia: curadores, galerías, instituciones, coleccionistas, prensa. NO es un portfolio de fotógrafo genérico ni una landing comercial: debe sentirse como una exposición curada o un libro de artista.

**Concepto rector curatorial:** *THE ARCHITECTURE OF MEMORY* — la obra de la artista construye espacios arquitectónicos blancos (maquetas, teatros, escaleras) fotografiados con luz dramática; motivo recurrente del timecode `00:00:00`.

**Concepto de diseño:** *THE EMPTY STAGE* — el sitio es un **teatro vacío antes de la función; la luz es el único suceso**. Tres consecuencias directas sobre todo el diseño:

1. **Monocromo absoluto.** Cero color de acento: el acento del sitio ES la luz. Nada de gradientes, sombras, radios, bordes decorativos, iconos o cards.
2. **Coreografía de iluminación fija por página:** vestíbulo en luz → penumbra escénica → colofón en luz. No hay modo claro/oscuro conmutable.
3. **El aire es el material principal.** El espacio negativo no se rellena: 2 de las 12 columnas del grid quedan deliberadamente vacías a la derecha.

## 2. Estado y reglas de negocio (crítico)

- **Idioma público: inglés.** Documentación interna: español.
- **Regla de no invención (Regla 7):** está PROHIBIDO inventar títulos de obra, años, medidas, materiales, exposiciones. Los datos reales provienen del dossier PDF (`../Dossier 2012-2025 Linet Sánchez español_compressed-3.pdf`). El mapping imagen↔serie NO está hecho a propósito (`CONTENT_STATUS.md`, bloqueante B2).
- **Marcas de contenido en código:** copy propuesto = `(d)`, traducción propuesta = `(d-EN)`, obra sin identificar = `Artwork identification pending` (aparece en las placas de todas las imágenes).
- **Integridad de obra (Regla 8):** nunca recortar/reencuadrar/deformar imágenes — `object-fit: contain` siempre + `width`/`height` explícitos (CLS 0). Render de imágenes limitado a 1.5× su resolución nativa (~720–750px) hasta llegar assets finales.
- **Rutas fijas (no añadir secciones sin aprobación):** `/` · `/work` · `/work/[slug]` · `/about` · `/press` · `/exhibitions` · `/contact`.
- **Contacto público solo:** email + Instagram + ciudad (Havana, Cuba). Teléfono/dirección NUNCA sin confirmación explícita (bloqueante B8).
- **Estado:** ejecutado = solo la Home (mockup HTML/CSS sin JS, publicable). Stack definitivo sin decidir (`docs/architecture/ADR-000_STACK.md` pendiente). Las demás rutas no existen.

## 3. Sistema de design (tokens literales listos para código)

### 3.1 Color (monocromo)

```css
:root {
  /* luz */
  --plaster:#F3F2F0;   /* base del sitio, blanco yeso FRÍO (no crema) */
  --bone:#E9E7E3;      /* poza de obra, paneles alternos */
  --ink:#1D1C1B;       /* texto sobre luz (~13.9:1) */
  /* penumbra */
  --stage:#141413;     /* fondo del acto oscuro (negro teatro, no #000) */
  --stage-ink:#B9B7B2; /* texto sobre penumbra (~7.6:1) */
  --stage-well:#0F0F0E;/* poza de obra en la penumbra */
  /* secundarios */
  --meta:#77756F;      /* metadatos sobre luz (~4.9:1 AA) */
  --meta-dark:#8A8882; /* metadatos sobre penumbra (~4.8:1 AA) */
  --hairline:#DAD8D3;  /* separador 1px, uso RESTRINGIDO solo listados */
}
```

### 3.2 Tipografía

```css
--font-display:'Newsreader',Georgia,serif;    /* display + cuerpo; wght 200–800, ital incl. */
--font-ui:'Instrument Sans',Arial,sans-serif; /* meta/nav/placas; wght 400–600 */
```

- Display hero: Newsreader 200–250, la seña tipográfica. Cuerpo: 400 (nunca <350 en cuerpo). Itálica = voz de la artista.
- Cualquier cifra (años, medidas, `00:00:00`): SIEMPRE `font-variant-numeric: tabular-nums`.
- **Escala fluida (clamp):** `--fs-hero clamp(42px,6.5vw,92px)` · `--fs-display (30,3.8vw,54)` · `--fs-title (22,2.4vw,34)` · `--fs-statement (22,2.4vw,34)` · `--fs-body-lg (18,1.5vw,21)` · `--fs-body (15,1.05vw,17)` · `--fs-meta (12,0.9vw,13)` · `--fs-nav (13,0.95vw,14)`.
- Line-height: display 1.06 · cuerpo 1.55 · meta 1.45. Tracking: display −0.01em · meta +0.04em. **Prohibido ALL-CAPS en labels** (anti-patrón).
- Fuentes: woff2 variable locales (latín) en `assets/fonts/`, `font-display: swap` — el sitio funciona offline.

### 3.3 Espacio y layout

```css
/* ritmo: secciones 192px desktop, 96px móvil; dentro de sección 64px */
--space-1..11: 4/8/12/16/24/32/48/64/96/128/192px;
--max-width:1360px; --cols:12;
--gutter:clamp(16px,1.4vw,24px);
--page-margin:clamp(20px,4vw,64px);
--radius:0; --border:none; --shadow:none;
```

- **Grid "alas + escenario":** rail de 3 columnas (statements, índices, labels) + escenario de 7 (la obra) + 2 columnas VACÍAS a la derecha (el vacío es diseño). Alineación izquierda global; centrar es excepción puntual.
- z-index: base 0 · media 1 · nav 10 · menú 40 · skip 100.

### 3.4 Motion (única coreografía permitida)

```css
--ease:cubic-bezier(0.23,1,0.32,1);
--dur-hover:200ms; --dur-lit:320ms; --dur-reveal:1100ms; --dur-nav:160ms;
```

- Solo se animan `opacity` y `transform`. Un solo gesto de carga por página (reveal de la Home: opacidad 0→0.94 en 1100ms; "una vez por visita" real exige JS).
- **Motivo teatral: la obra "se enciende"** — estado reposo `opacity:.94`, hover/focus `1` en 320ms.
- `prefers-reduced-motion: reduce` lo apaga todo y deja la obra visible.

## 4. Arquitectura visual de la Home (4 actos)

1. **Acto I — Vestíbulo (luz):** statement en Newsreader italic 250, `max-width:17ch`, rail 3 col + poza grande (col 4–11) con reveal único.
2. **Acto II — Catálogo (luz):** índice de las 9 series en rail (años tabulares + hairlines arriba de cada fila, hover peso 300→400) + obras en pozas con **escala alternada** (anchos máx. 42ch/62ch, pares desplazados). Poza = cajón `--bone` con padding 24px.
3. **Acto III — `00:00:00` (penumbra, full-bleed):** fondo `--stage` a sangre completa, marker `00:00:00` tabular (derecha en desktop, izquierda en móvil), poza en `--stage-well` (max-width 560px, centrada), cita de Bachelard en italic, enlace text-link.
4. **Acto IV — Colofón (luz):** statement excerpt, estados vacíos de Press/Exhibitions (texto meta, sin secciones muertas), contacto (email + IG + ciudad), footer con nav + ©. **Estado vacío = texto honesto en gris meta, no sección oculta.**

**Componentes (14 en la spec 04):** site-header (sticky), wordmark, menu-panel, statement, work-plate (placa de museo: título italic Newsreader + meta tabular Instrument), work-well (poza), series-index, work-viewer, quote, empty-state, text-link, site-footer, text-action, skip-link.

## 5. Responsive (verificado en 3 breakpoints)

- **Desktop ≥1200:** grid 12 col completa como arriba. Marker oscuro a la derecha.
- **Tablet 768–1199:** rail colapsa a fila (statement e índice ocupan todo el ancho, índice de series pasa a flex-wrap horizontal sin hairlines), obra ancho completo.
- **Móvil <768:** todo 1 columna; nav principal desaparece → **panel de menú full-screen** (checkbox-hack CSS en el mockup: "Close" dentro + scrim clicable para cerrar); statement `clamp(20px,5.4vw,26px)`; marker oscuro a la izquierda; footer-nav en fila propia.
- A11y AA no negociable: skip-link, `:focus-visible` outline 2px (color adaptado en acto oscuro), contrastes verificados en §3.1, hover nunca es el único canal (focus dispara el mismo "encendido").

## 6. Estructura actual del repo

```text
frontend/                      ← raíz publicable (GitHub Pages)
├── index.html                 ← Home (4 actos, solo HTML/CSS, sin JS)
├── css/tokens.css             ← tokens literales + @font-face (ÚNICO archivo previsto para reuso)
├── css/styles.css             ← layout desechable de la Home
├── assets/images/             ← 6 obras reales JPG (~720–750px, sin identificar)
├── assets/fonts/              ← Newsreader var + italic var + Instrument Sans var (woff2)
├── docs/
│   ├── CLAUDE.md              ← reglas operativas (reglas 7 y 8 de la sección 2 viven aquí)
│   ├── design/redesign_v2/    ← ESPECIFICACIÓN VIGENTE (7 docs: 00 índice, 01 concepto, 02 tokens, 03 blueprints de las 7 rutas, 04 componentes, 05 content-map, 06 interacción)
│   ├── project/CONTENT_STATUS.md    ← bloqueantes B1–B8 y lenguaje de marcas
│   ├── project/ASSETS_MANIFEST.md   ← inventario de assets, alts propuestos
│   └── workflow/                    ← fases de ejecución + QA checklist
└── mockup/, mockup-v2/        ← históricos (mockup-v2 = misma Home; la raíz es la canónica)
```

## 7. Cómo escalar (lo que un implementador debe saber)

1. **Nueva página (About, Press, etc.):** reutilizar los mismos actos/tokens; blueprints completos por ruta en `03_LAYOUT_BLUEPRINTS.md`; el acto oscuro es de la Home y del visor de obra solamente.
2. **Nueva obra/serie:** fila en el índice + poza + placa; SIEMPRE con `Artwork identification pending` hasta tener datos del dossier. Nunca recortar: cada imagen respeta su proporción nativa (contenedor con `width`/`height` explícitos).
3. **Cambiar el look:** todo pasa por `02_DESIGN_TOKENS.md` + `css/tokens.css` — prohibido el valor mágico en componentes. Un token nuevo se documenta en el doc 02 al momento.
4. **Lo que exige JS al pasar a producción** (mockup es CSS-only): panel modal accesible real (focus trap, `Esc`, "una vez por visita"), reveal con control por visita, nada más — el resto ya funciona sin JS.
5. **Anti-patrones prohibidos explícitamente:** cards redondeadas, sombras, gradientes, iconos (IG/email van como texto subrayado, nunca icono), ALL-CAPS labels, middle dots en metadatos, crema `#F4F1EA`, Cormorant+Inter, flechas `→` en enlaces, numbered markers decorativos.
6. **Bloqueantes de contenido vigentes (B1–B8):** aprobación del statement en EN, identificación de obras, CV, retrato, dossier EN, nº de obras de serie 3, video, datos de contacto completos. Ver `docs/project/CONTENT_STATUS.md` — ninguna página avanza publicando contenidos inventados.

## 8. Archivos fuente de verdad (orden de lectura)

`docs/design/redesign_v2/01_DESIGN_CONCEPT.md` (concepto)
→ `02_DESIGN_TOKENS.md` (tokens)
→ `03_LAYOUT_BLUEPRINTS.md` (blueprints por ruta)
→ `04_COMPONENT_SPEC.md` (componentes)
→ `05_CONTENT_MAP.md` (contenido del dossier)
→ `06_INTERACTION_MOTION_A11Y.md` (interacción/a11y)
+ `docs/architecture/ARCHITECTURE.md` (estado real del repo)
+ `docs/architecture/ADR-000_STACK.md` (decisión de stack pendiente)
+ `docs/project/CONTENT_STATUS.md` y `docs/project/ASSETS_MANIFEST.md`
+ `docs/workflow/EXECUTION_PHASES.md` y `docs/workflow/QUALITY_CHECKLIST.md`
