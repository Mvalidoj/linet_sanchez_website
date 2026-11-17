# CONTENT_MODEL — Modelo de contenido (implementado)

> **Estado: implementado (2026-11-17).** Sin CMS externo: contenido versionado en el repo como **content collections** de Astro — JSON + loaders + esquemas zod definidos en `src/content.config.ts` (única fuente de shapes; los tipos de `src/domain/types.ts` se derivan con `z.infer`). Las reglas de contenido (niveles de verificación, no inventar) viven en `../project/CONTENT_GUIDELINES.md`.

## Relaciones alto nivel

```
Home (singleton slideshow)
Profile (singleton)  →  datos de contacto y de artista
Project (n) ──embebe──▶ Artwork (n)   [Artwork NO es colección: vive dentro de Project]
Press (n)            (independiente)
Exhibition (n)       (independiente)
```

Diferencia de clave sobre el plan original: **Artwork está embebida en cada Project** (`z.object` interno), no como colección independiente. Ajustes al modelo = cambiar `content.config.ts` + ADR.

## Loaders

| Colección | Loader | Fuente | Entradas |
|---|---|---|---|
| `home` | `file()` | `src/content/home.json` | Singleton: mapa `id → data` |
| `profile` | `file()` | `src/content/profile.json` | Singleton: mapa `id → data` |
| `projects` | `glob()` | `src/content/projects/*.json` | Un JSON por proyecto |
| `press` | `glob()` | `src/content/press/*.json` | Un JSON por mención |
| `exhibitions` | `glob()` | `src/content/exhibitions/*.json` | Un JSON por exposición |

El `id` de cada entrada lo genera Astro; no se declara en el esquema. El acceso es siempre vía `src/data/queries.ts` (invariante de arquitectura, `TECHNICAL_ARCHITECTURE.md` §4).

## Tipos (campos exactos de `src/content.config.ts`)

### Home (singleton — `homeSchema`)

| Campo | Tipo | Regla |
|---|---|---|
| `slideshow` | array, máx **6** elementos | Entradas del slideshow de la Home |
| `slideshow[].image` | string (rutas `/images/home/…`) | Ruta real en `public/` |
| `slideshow[].width` / `.height` | number int positivo | Para reservar proporciones |
| `slideshow[].alt` | string | **Obligatorio** |
| `slideshow[].href` | string, default `'/work'` | Enlace por obra |

### Profile (singleton — `profileSchema`)

| Campo | Tipo | Regla |
|---|---|---|
| `name` | string | |
| `location` | string | opcional |
| `email` | string | verificado (`linetsg@gmail.com`) |
| `instagram` | string | verificado (`@linetsanchezart`) |
| `biography` | string | opcional — vacío hasta tener bio verificada |
| `artistStatement` | string | opcional |
| `portrait` | string | opcional (imagen pendiente de entrega) |
| `cv` | string | opcional |

### Project (`projectSchema`)

| Campo | Tipo | Regla |
|---|---|---|
| `title` | string | **opcional** — identificación pendiente del dossier; nunca inventar |
| `year` | string | opcional |
| `discipline` | enum `photography \| sculpture \| video` | obligatorio |
| `coverImage` | string | obligatorio |
| `description` / `artistStatement` / `credits` | string | opcionales |
| `artworks` | array de **Artwork**, default `[]` | ver tipo embebido abajo |
| `displayOrder` | number int, default `0` | orden en índices |
| `status` | enum `published \| draft`, default `draft` | nada entra en producción salvo `published` |
| `featured` | boolean, default `false` | "Selected Works" en Home |

### Artwork (embebida en Project — `artworkSchema`, no es colección)

| Campo | Tipo | Regla |
|---|---|---|
| `title` | string | **opcional** — solo si está verificado |
| `image` | string | obligatorio |
| `year` / `dimensions` / `technique` / `caption` | string | opcionales |
| `alt` | string | **OBLIGATORIO para toda obra** |
| `order` | number int, default `0` | orden dentro del proyecto |

### Press (`pressSchema`)

| Campo | Tipo | Regla |
|---|---|---|
| `publication` | string | obligatorio |
| `title` | string | obligatorio |
| `date` | date (coercido con `z.coerce.date()`) | opcional |
| `author` / `type` / `description` | string | opcionales |
| `externalUrl` | URL válida (`z.url()`) | obligatorio |

### Exhibition (`exhibitionSchema`)

| Campo | Tipo | Regla |
|---|---|---|
| `title` | string | obligatorio |
| `kind` | enum `solo \| group` | obligatorio |
| `venue` | string | obligatorio |
| `city` / `country` / `dates` (`string`, rango o periodo) / `curator` / `description` | string | opcionales |
| `images` | array de strings, default `[]` | Rutas en `public/` |

## Reglas del modelo

1. **Alt text siempre** en cada obra y en cada entrada del slideshow (accesibilidad + SEO).
2. Los campos con identificación pendiente (`title`, `year`, `dimensions`,…) son **opcionales de propósito**: se omiten o se marcan en el propio JSON ("artwork identification pending"); nunca se rellenan por rellenar.
3. **Nada entra en producción salvo `status: 'published'`** (en Projects).
4. **Sin datos inventados:** solo contenido verified entra en los JSON; preliminary queda como referencia interna hasta verificación.
5. **Cambiar contenido = editar los JSON y hacer commit** → Cloudflare Pages redeploya. No hay panel de administración; el repo es el "CMS".
6. Colecciones `projects`, `press` y `exhibitions` están **vacías hasta el backfill de Fase 7**, bloqueado por los materiales del dossier (ver `../project/CONTENT_GUIDELINES.md` → "Materiales pendientes"). Cada carpeta incluye un README: "content pending — do not invent".
