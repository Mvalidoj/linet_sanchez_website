# TECHNICAL_ARCHITECTURE

> Describe la arquitectura **implementada**, no planes. `FILE_STRUCTURE.md` complementa la vista de árbol; las decisiones y su justificación viven en `ARCHITECTURAL_DECISIONS.md` (ADRs). Actualizado a **2026-11-17** (Fase 1 ejecutada).

## 1. Estado real (2026-11-17, Fase 1 completada)

Sitio estático funcional construido con **Astro**: scaffold completo, Home migrada fielmente y páginas stub de las secciones restantes. Verificado en la entrega de Fase 1:

- Build estático: **6 páginas** generadas en `dist`.
- **0 `<script>` de cliente** en el HTML generado (el slideshow es CSS puro).
- `astro check` (TypeScript strict): **0 errores**.
- Imágenes de obras en `public/images/home/` copiadas **byte a byte** (checksum idéntico al original).
- `dist` no contiene `pinomusi/`, `docs/` ni `context.txt` (excluidos por diseño).

## 2. Stack técnico

| Capa | Tecnología | Notas |
|---|---|---|
| Framework | **Astro 7.4.12** (`astro ^7.4.12`) | Output 100% estático, sin adapter |
| Lenguaje | **TypeScript strict** (`astro/tsconfigs/strict`) + `@astrojs/check` | Aliases `@domain/*`, `@data/*`, `@components/*`, `@layouts/*`, `@styles/*` en `tsconfig.json` |
| Estilos | **Tailwind CSS v4, CSS-first** | `@import "tailwindcss"` + bloque `@theme` en `src/styles/global.css` (una sola hoja); plugin `@tailwindcss/vite` en `astro.config.mjs`. **Sin** `tailwind.config.js`, **sin** integración `@astrojs/tailwind` |
| CMS | **Ninguno** | Contenido versionado en el repo: content collections (JSON + loaders `file`/`glob` + zod de `astro/zod`). Un cambio de contenido = un commit a los JSON |
| Hosting | **Cloudflare Pages + GitHub** | Build `npm run build`, output `dist`, `NODE_VERSION=22` (≥ 22.22) configurado en el dashboard |
| Runtime | **Node 22** (≥ 22.22.0) | Requisito de Astro 7; fijado en `package.json` → `engines` |

## 3. Estrategia de build y deploy

1. Push a GitHub → Cloudflare Pages detecta el commit.
2. Cloudflare instala dependencias y ejecuta `npm run build` con `NODE_VERSION=22` (≥ 22.22).
3. El output `dist/` se publica como archivos estáticos (sin funciones serverless por ahora).
4. `npm run preview` sirve `dist` localmente para verificación de build.

Notas:

- `site` en `astro.config.mjs` queda **sin definir a propósito**: el dominio de producción no está confirmado; sitemap/robots/OG completos quedan para Fase 8.
- `pinomusi/` (referencia local, en `.gitignore`), `docs/` y `context.txt` no llegan a `dist`: Astro solo publica `src/`, `public/` y archivos raíz de código.
- Sin formularios ni endpoints todavía; el formulario de contacto se decide en Fase 6 (ver §8).

## 4. Arquitectura de capas (clean architecture adaptada a Astro)

```text
src/
├── content.config.ts    # Esquemas zod + loaders — ÚNICA fuente de shapes; types derivados con z.infer
├── content/             # Datos: home.json, profile.json, projects/, press/, exhibitions/
├── domain/              # Tipos puros + mappers — SIN imports runtime de astro (solo `import type`; verificable con grep)
├── data/queries.ts      # ÚNICA capa que llama getCollection (orden y filtros centralizados aquí)
├── layouts/             # Plantillas base (BaseLayout)
├── components/          # Componentes de presentación (SiteHeader, SiteFooter, Slideshow)
├── pages/               # Rutas — páginas finas: composición, sin lógica de datos
└── styles/global.css    # @import "tailwindcss" + @theme + CSS ratificado (una sola hoja)
```

**Invariantes (comprobar en cada cambio, ver `../workflow/QUALITY_CHECKLIST.md`):**

1. `pages/` no llama `getCollection` directamente: pasa por `data/queries.ts`.
2. `domain/` no importa Astro en runtime (solo `import type`): `grep` de `from 'astro'` en `src/domain/` devuelve solo usos de tipos.
3. Los esquemas se exportan como **valores** desde `content.config.ts` y los tipos de dominio se derivan con `z.infer`: cero interfaces duplicadas de shapes.
4. Presentación (`layouts/`, `components/`, `pages/`) consume dominio; la lógica de orden/filtrado vive en `data/`.

## 5. Objetivos de calidad

- **Lighthouse:** Performance 90+ · A11y 95+ · SEO 95+ · Best Practices 95+ (vigente).
- **JavaScript de cliente: cero** como objetivo de la Home (hoy: 0 `<script>`). Cualquier JS futuro debe justificarse (objetivo conocido del header on-scroll, ver §8).
- **Imágenes sin recorte ni manipulación** (ver §6; Regla 8 de `../../CLAUDE.md` y ADR-007).
- HTML semántico, HTML/CSS puro por defecto, dependencias mínimas.
- SEO: completar en Fase 8 cuando exista dominio (sitemap, robots, Open Graph, structured data `Person`/`VisualArtwork` si aplica).

## 6. Restricciones y decisiones técnicas vigentes

- Idioma público: **inglés**; documentación interna en español (ADR-001). Multilingüe listo de facto (sin runtime de traducciones inicial).
- Secciones: exactamente las 6 del brief (`/`, `/work`, `/work/[slug]`, `/about`, `/press`, `/exhibitions`, `/contact`); ninguna nueva sin aprobación explícita.
- **Política de imágenes:** las obras se sirven **byte a byte** desde `public/` con `<img>` plano — sin `astro:assets`/`sharp` para obras (riesgo de recorte/recompresión). `astro:assets` solo para assets no-obra. Si algún día se optimizaran obras, solo con `fit="contain"` y revisión humana (ADR-007).
- Contacto público: email (`linetsg@gmail.com`) + Instagram (`@linetsanchezart`); el formulario se define en Fase 6 (ADR-009).
- Dirección visual ratificada: estructura de referencia pinomusi.com adaptada con contenido de Linet Sánchez; la bíblia de diseño vigente vive en `../design/` (ver `ART_DIRECTION.md`).

## 7. Estrategia de contenido

- Todas las colecciones están definidas en `src/content.config.ts` (esquemas zod + loaders `file` para singletons, `glob` para entradas por archivo). Modelo de campos exacto: `CONTENT_MODEL.md`.
- **No existe backend de contenido:** editar contenido = editar los JSON de `src/content/` y hacer commit → redeploy en Cloudflare Pages.
- Contenido actual: `home.json` y `profile.json` rellenos con datos básicos verificados; `projects/`, `press/` y `exhibitions/` **vacías** (README con la regla "content pending — do not invent") hasta el backfill de Fase 7.
- Nada entra en producción salvo contenido verificado (niveles en `../project/CONTENT_GUIDELINES.md`).

## 8. Deuda conocida / pendientes

| Deuda | Detalle | Cuándo |
|---|---|---|
| Header on-scroll | El comportamiento de hairline al hacer scroll requiere JS mínimo; hoy el header es estático. Decisión pendiente | Al definirlo con diseño |
| Dominio y SEO técnico | `site` sin definir; sitemap/robots/Open Graph/structured data pospuestos | Fase 8 |
| Formulario de contacto | Email + Instagram hoy. Decidir cómo con Cloudflare: `mailto:` vs Pages Function vs servicio externo | Fase 6 |
| Backfill de contenido | Poblar `projects/`, `press/`, `exhibitions/` (y ampliar `profile`) con material verificado del dossier | Fase 7 |
| Estrategia i18n concreta | Subpath `/en` etc. si algún día aplica; hoy solo inglés | Cuando aplique |
