# mockup/ — Maqueta estática de la Home (ADR-004)

> **Esto NO es el sitio de producción.** Es una maqueta descartable (HTML/CSS/JS vanilla, sin build) para ver en la práctica el lenguaje visual documentado en `docs/design/`. Registro oficial: `docs/architecture/ARCHITECTURAL_DECISIONS.md` → **ADR-004**.

## Cómo abrirla

- **Opción A (offline):** abrir `index.html` directamente en el navegador (`file://`).Todo lo que necesita (fuentes, imágenes) es local.
- **Opción B:** servidor estático desde esta carpeta (`python -m http.server 8000`) y abrir `http://localhost:8000`.

## Qué es y qué no es

| Es | No es |
|---|---|
| Validación visual de la dirección "THE ARCHITECTURE OF MEMORY" | Página de producción |
| Materialización de los tokens de `DESIGN_TOKENS.md` | Scaffold de Fase 1 (ADR-003 sigue vigente) |
| Prototipo para revisión de diseño | Contenido publicable |

## Qué se puede validar

- Tipografía (Cormorant Garamond + Inter), escala fluida, ritmo editorial.
- Paleta neutra cálida, hairlines, radius 0, sin sombras/gradientes/iconos.
- Grid editorial asimétrico de Selected Works (desktop/tablet/móvil).
- Menú móvil full-screen accesible (Esc, focus trap, `aria-expanded`).
- `prefers-reduced-motion`.

## Etiquetas visuales

- **Meta "Artwork identification pending":** las 6 imágenes son material de la artista (en `../assets/images/`) cuya identificación como obras concretas está **pendiente de confirmación**. No llevan títulos: asignarles títulos del catálogo preliminar sería inventar una correspondencia no verificada.
- **"Proposed copy — not verified":** el copy editorial (hero, statements, estados vacíos, contacto) son textos **propuestos**, no confirmados por la artista. Aparecen solo con `body.show-drafts` — activar añadiendo la clase al `<body>` `<body class="show-drafts">` y recargando.

## Limitaciones conocidas

- **Resolución de las imágenes (~720–750px):** insuficiente para un hero full-bleed nítido a 1440px. Por eso el hero es una composición editorial dividida a escala natural. Con los assets definitivos (mayor resolución) el hero puede pasar a cinematográfico a sangre sin cambiar el markup.
- Los enlaces de nav y de obra son `#` (no existen las páginas).
- Archivos `styles.css` y `menu.js` son desechables; **`css/tokens.css` es el único archivo pensado para copiarse a Fase 1**.

## Estructura

```text
mockup/
├── index.html          Única página (Home completa)
├── css/tokens.css      Tokens (traslación de DESIGN_TOKENS.md — copiable a Fase 1)
├── css/styles.css      Layout de la maqueta (desechable)
├── js/menu.js          Menú móvil (desechable)
└── assets/fonts/       Cormorant Garamond 400 + Inter variable (woff2, latín)
```

Las imágenes **no se copian**: se referencian desde `../assets/images/` (material de la artista, sin duplicar ni renombrar).
