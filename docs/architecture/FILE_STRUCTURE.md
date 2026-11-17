# FILE_STRUCTURE

> Estructura real del repositorio. **Actualiza este documento con cada cambio de estructura** (Regla 10, `../../CLAUDE.md`): describe el estado real, no planes. Estado a **2026-11-17**.

## 1. Árbol real (2026-11-17)

```text
frontend/
├── package.json                 Scripts dev/build/preview; deps astro, tailwindcss, @tailwindcss/vite, typescript; @astrojs/check (dev); engines node >=22.22
├── astro.config.mjs             vite.plugins con @tailwindcss/vite; output estático por defecto (site sin definir: dominio pendiente)
├── tsconfig.json                astro/tsconfigs/strict + aliases @domain/@data/@components/@layouts/@styles (excluye dist, node_modules, pinomusi, docs)
├── .gitignore                   pinomusi/, node_modules/, dist/, .astro/
├── CLAUDE.md                    Punto de entrada; reglas operativas e índice
├── context.txt                  Brief maestro de inicialización (no modificar sin consenso)
│
├── src/
│   ├── content.config.ts        Esquemas zod + loaders (file/glob) de las 5 colecciones — única fuente de shapes
│   ├── content/
│   │   ├── home.json            Slideshow de la Home (hasta 6 entradas: image, width, height, alt, href)
│   │   ├── profile.json         Artist profile singleton (name, location, email, instagram, + campos opcionales)
│   │   ├── projects/            Vacía — README "content pending — do not invent"
│   │   ├── press/               Vacía — README idem
│   │   └── exhibitions/         Vacía — README idem
│   ├── domain/
│   │   ├── types.ts             Tipos puros derivados de los esquemas (z.infer) — sin imports runtime de astro
│   │   └── mappers/home.ts      Mapper de datos crudos → tipos de dominio
│   ├── data/
│   │   └── queries.ts           ÚNICA capa que llama getCollection (orden/filtros centralizados)
│   ├── layouts/
│   │   └── BaseLayout.astro     Plantilla base (head, skip-link, header, footer)
│   ├── components/
│   │   ├── SiteHeader.astro     Header fijo 100px con nav (aria-current en sección activa)
│   │   ├── SiteFooter.astro     Footer global
│   │   └── Slideshow.astro      Slideshow crossfade CSS puro (6 slides × 5s, transición 350ms)
│   ├── pages/
│   │   ├── index.astro          Home (migrada de la referencia en Fase 1)
│   │   ├── work/index.astro     Stub "Content coming soon."
│   │   ├── about.astro          Stub idem
│   │   ├── exhibitions.astro    Stub idem
│   │   ├── press.astro          Stub idem
│   │   └── contact.astro        Stub idem
│   └── styles/
│       └── global.css           @import "tailwindcss" + @theme + CSS ratificado (única hoja de estilos)
│
├── public/
│   ├── favicon.svg
│   └── images/home/             6 obras (work-1.jpg … work-4.jpg, work-5.webp, work-6.webp) — servidas byte a byte
│
├── docs/
│   ├── project/                 PROJECT_OVERVIEW · ARTIST_CONTEXT · CONTENT_GUIDELINES · PROJECT_ROADMAP
│   ├── design/                  Bíblia de diseño vigente (ART_DIRECTION, DESIGN_TOKENS, TYPOGRAPHY, …)
│   ├── architecture/            TECHNICAL_ARCHITECTURE · CONTENT_MODEL · FILE_STRUCTURE · ARCHITECTURAL_DECISIONS
│   └── workflow/                DEVELOPMENT_WORKFLOW · IMPLEMENTATION_PHASES · QUALITY_CHECKLIST
│
├── pinomusi/                    Referencia local de diseño (HTML + assets de pinomusi.com). En .gitignore: existe solo en local, NO está en el repo ni llega a dist
├── node_modules/ .astro/ dist/  Generados (ignorados)
└── .git/                        Git; ramas principales: main, develop, mockup; trabajo actual: copied_design

# Fuera del repo (directorio padre):
art_portfolio/
└── Dossier 2012-2025 Linet Sánchez español_compressed-3.pdf   Único asset original de la artista (pendiente de tratamiento)
```

## 2. Responsabilidad de cada carpeta

| Ruta | Responsabilidad | Regla |
|---|---|---|
| `src/content.config.ts` | Esquemas zod + loaders de contenido | Única fuente de shapes; nunca duplicar interfaces de datos |
| `src/content/` | Datos del sitio (JSON versionados) | Cambiar contenido = commit; nada inventado (niveles en `../project/CONTENT_GUIDELINES.md`) |
| `src/domain/` | Tipos puros + mappers | Sin imports runtime de Astro (solo `import type`); sin lógica de UI ni de fetch |
| `src/data/` | Acceso a datos | Único lugar con `getCollection`; orden y filtros aquí |
| `src/layouts/` | Plantillas base de página | Estructura común: head, skip-link, header, footer |
| `src/components/` | Bloques de presentación reutilizables | Solo si son reutilizables de verdad (Regla 4) |
| `src/pages/` | Rutas | Páginas finas: composición, sin `getCollection` directo ni lógica de datos |
| `src/styles/` | Una sola hoja (`global.css`) | Tokens en `@theme` + CSS ratificado; no crear hojas nuevas sin decidirlo |
| `public/` | Assets servidos tal cual | Las obras van byte a byte, sin procesado (ADR-007); nada de stock disfrazado de obra |
| `docs/` | Documentación del sistema | Mantener sincronizada siempre (en español, ADR-001) |
| `pinomusi/` | Referencia de diseño, solo local | Ignorada por git; nunca referenciada desde el sitio ni publicada |
