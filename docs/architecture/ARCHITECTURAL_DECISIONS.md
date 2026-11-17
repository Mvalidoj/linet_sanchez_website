# ARCHITECTURAL_DECISIONS — Registros (ADR)

> Sistema ligero de Architecture Decision Records. **Cada decisión importante de arquitectura o diseño queda registrada aquí** con: decisión, contexto, alternativas, razonamiento, consecuencias, fecha y estado. Prohibido cambiar decisiones aprobadas en silencio (Regla 9, `../../CLAUDE.md`): nueva entrada que marque la anterior como superseded y actualice los documentos afectados.

## Formato

```markdown
### ADR-NNN — <Título>
- **Estado:** proposed | accepted | superseded (por ADR-XXX)
- **Fecha:** YYYY-MM-DD
- **Decisión:**
- **Contexto:**
- **Alternativas consideradas:**
- **Razonamiento:**
- **Consecuencias:**
```

---

### ADR-001 — La documentación interna del proyecto se mantiene en español
- **Estado:** accepted
- **Fecha:** 2026-11-10
- **Decisión:** Todos los documentos `docs/` y CLAUDE.md se escriben en español. El sitio público permanece en inglés.
- **Contexto:** El brief maestro (`context.txt`) está en inglés y el sitio inicial se publica en inglés, pero el equipo de trabajo opera en español.
- **Alternativas consideradas:** documentación toda en inglés (coherencia con el sitio); mixto (reglas en inglés, conceptos en español).
- **Razonamiento:** decisión del usuario en la sesión de Fase 0; reduce fricción de revisión para el cliente. Los nombres de archivo y tokens se mantienen en inglés (convención técnica estándar).
- **Consecuencias:** el copy del sitio sigue su propio idioma (inglés); cualquier traducción futura de docs es tarea explícita aparte.

### ADR-002 — Los materiales de la artista no se incorporan todavía al repositorio
- **Estado:** accepted
- **Fecha:** 2026-11-10
- **Decisión:** Por ahora no se añaden los archivos (imágenes, retrato, video, tratamiento del dossier PDF) al `frontend/`. La documentación los lista como pendientes de entrega.
- **Contexto:** El único asset disponible es el dossier PDF (directorio padre `art_portfolio/`); el resto de materiales falta. El usuario decidió no incorporar archivos en esta fase.
- **Alternativas consideradas:** extraer ya contenido del PDF para poblar datos; generar placeholders visuales de obras.
- **Razonamiento:** Fase 0 no implementa páginas ni consume assets; extraer contenido sin aprobación violaría el nivel preliminar/verificado (`../project/CONTENT_GUIDELINES.md`). Placeholders de obra reales violarían la Regla 8.
- **Consecuencias:** Fases 2–5 dependen de la entrega de materiales; hasta entonces, cualquier maqueta usa placeholders identificados o composiciones tipográficas y estados vacíos.

### ADR-003 — Fase 0 no implementa ni scaffolda código; los tokens quedan solo documentados
- **Estado:** accepted
- **Fecha:** 2026-11-10
- **Decisión:** En Fase 0 no se instala framework, no se crea `package.json` ni estilos. `DESIGN_TOKENS.md` define los tokens como especificación (custom properties previstas) a materializar en Fase 1.
- **Contexto:** El brief exige establecer reglas antes de codificar ("Do not implement the complete website", "Do not install dependencies").
- **Alternativas consideradas:** scaffoldar Next.js ya para acelerar Fase 1.
- **Razonamiento:** el orden del brief (reglas primero) asegura que la fundación técnica se construya sobre decisiones documentadas; el scaffold anticipado no aporta valor en Fase 0.
- **Consecuencias:** la primera sesión de Fase 1 empezará con la decisión del stack (ADR propio) y el scaffold del proyecto.

### ADR-004 — Stack: Astro estático + TypeScript + Tailwind v4, sin CMS, despliegue en Cloudflare Pages
- **Estado:** accepted
- **Fecha:** 2026-11-17
- **Decisión:** El sitio se construye con **Astro 7.4.x + TypeScript (strict)** y **Tailwind CSS v4** (CSS-first: tokens en `@theme` dentro de `src/styles/global.css`, plugin `@tailwindcss/vite`; sin `tailwind.config.js`). Output 100% estático (sin adapter). **Se elimina Sanity CMS** y se cancela la arquitectura planificada Next.js/Vercel: el contenido vive en content collections locales (JSON + loaders, ver `CONTENT_MODEL.md`) y el despliegue es **Cloudflare Pages + GitHub** (build `npm run build`, output `dist`, `NODE_VERSION=22` — Astro 7 exige Node ≥ 22.22).
- **Contexto:** El usuario redefinió el proyecto: página estática con archivos incrustados en el repo, look profesional, sin necesidad de edición remota de contenido; se exploraron y compararon stack alternativos en sesión.
- **Alternativas consideradas:** (a) Next.js static export (más complejo y con más JS residual para un sitio de 7 rutas); (b) HTML puro sin build (el contenido y el boilerplate se duplicarían a mano en `/work/[slug]`); (c) Eleventy (sin imágenes/DX a la altura); (d) Astro + Sanity (se descarta por el nuevo requisito "sin CMS").
- **Razonamiento:** Astro genera HTML estático con **cero JS de cliente por defecto** (el requisito duro del brief) y cas perfecto con la dirección CSS-only del Home ya construido; TypeScript strict + content collections dan tipo de extremo a extremo sin backend; Cloudflare Pages ofrece deploy por Git con HTTPS.
- **Consecuencias:** cambios de contenido = commits a JSON; revalidar en producción requiere rebuild (aceptable: contenido estático); Node local ≥ 22.22 requerido para desarrollar; los CLAUDE.md y todo `docs/` se sincronizan en el mismo cambio.

### ADR-005 — Dirección visual ratificada: estructura de pinomusi.com (supersede la spec "THE ARCHITECTURE OF MEMORY")
- **Estado:** accepted
- **Fecha:** 2026-11-17
- **Decisión:** La dirección visual oficial del sitio es la **estructura de pinomusi.com** adaptada al contenido de Linet Sánchez (header fijo blanco 100px, wordmark izquierda, nav en minúsculas a la derecha, texto `#666666` sobre blanco, obra centrada a escala natural con crossfade CSS, hairlines `#f0f0f0`/`#e1e1e1`, familia única Arial sin webfonts). **La spec visual "THE ARCHITECTURE OF MEMORY"** (Cormorant Garamond + Inter, paleta Warm Paper, hero cinematográfico, grids asimétricos) **queda superseded**; la descripción completa y autocontenida del sistema vigente vive en `../design/` (bíblia de diseño reescrita hoy).
- **Contexto:** La réplica del Home se implementó y aprobó antes de esta ratificación (rama `copied_design`); el usuario la ratifica explícitamente y descarta la spec anterior. Hay dos decisiones tipográficas ratificadas dentro de esta dirección: (1) **solo Arial, sin webfonts** — divergencia consciente, la referencia usa Roboto para el body; (2) jerarquía por tamaño/peso/color de texto, nunca por familia.
- **Alternativas consideradas:** mantener la spec del brief (descartada por decisión del usuario); híbrido estructura-pinomusi + tipografía editorial del brief (descartado en la misma consulta).
- **Razonamiento:** el trabajo ya aprobado es fiel a la referencia y "se ve bien y profesional" según el usuario; la ratificación elimina la doble dirección de diseño que convivía en el proyecto.
- **Consecuencias:** los 7 documentos de `docs/design/` se reescriben describiendo el sistema vigente; `context.txt` se reescribe (ADR-008); el slideshow automático de la Home es una **excepción ratificada** a la antigua prohibición de carruseles automáticos; cualquier elemento visual nuevo debe seguir la bíblia de diseño, no la referencia (que queda como material de archivo).

### ADR-006 — Clean architecture adaptada a Astro (capas reales sin DI ni repos)
- **Estado:** accepted
- **Fecha:** 2026-11-17
- **Decisión:** Estructura en capas validada por investigación comunitaria (2026): `src/content.config.ts` (schemas zod + loaders, única fuente de shapes), `src/content/` (datos), `src/domain/` (tipos derivados con `z.infer` + mappers; **sin imports runtime de Astro** — verificación con grep), `src/data/queries.ts` (**única capa que llama `getCollection`**; orden determinista y filtros de drafts aquí), presentación con páginas finas (`src/pages`), componentes, layouts y una sola hoja global `src/styles/global.css`. Sin DI, sin contratos de repositorio, sin presenters, sin `features/`.
- **Contexto:** El usuario pidió "clean architecture adaptada a Astro de una forma comprobada, como la haría un desarrollador senior especializado en Astro"; se evaluaron tres estructuras comunitarias (clean con DI/repos, feature-based/modular, convención + lib ligera).
- **Alternativas consideradas:** clean completa con repos y DI (sobre-ingeniería para 7 rutas estáticas: paga solo si hay migración de fuente de datos, y las collections ya son el seam); feature-based (calibrado para catálogos/carrito, produce carpetas de un archivo aquí); sin capas (las queries y tipos se dispersarían por páginas).
- **Razonamiento:** el valor real aquí es aislamiento verificable: `domain` sin dependencia de Astro (compilador borra los `import type`), un solo punto de acceso a datos (cambiarlo mañana solo mueve `data/queries.ts`), y cero duplicación de tipos (`z.infer`).
- **Consecuencias:** invariantes con tests de grep en la verificación de cada fase: `src/domain/**` sin imports runtime de astro; `getCollection` fuera de `src/data/**` y `content.config.ts` prohibido. Documentado en `TECHNICAL_ARCHITECTURE.md` y `FILE_STRUCTURE.md`.

### ADR-007 — Política de imágenes: obras byte a byte, sin procesamiento
- **Estado:** accepted
- **Fecha:** 2026-11-17
- **Decisión:** Las obras se sirven **sin transformación ninguna** desde `public/images/` con `<img>` plano + `width`/`height` explícitos (sin `astro:assets`/sharp en Fase 1). Si en una fase futura se optimizara alguna obra: `fit="contain"` y revisión humana previa. `astro:assets` queda reservado para imágenes no-obra (nada por ahora).
- **Contexto:** La regla dura del proyecto (Regla 8: nunca recortar/recolorear/distorsionar obra) choca con el `fit: cover` por defecto y el re-encode de sharp; las 6 imágenes del Home ya son ligeras (~750px) y el CLS 0 está garantizado por atributos dimensionales.
- **Alternativas consideradas:** astro:assets con AVIF/WebP (riesgo de recorte y re-encode sin beneficio medible); pre-generar variantes manuales (posible en Fase 8 si Lighthouse lo pidiera).
- **Razonamiento:** la integridad de la obra manda sobre la micro-optimización; la verificación usa checksums (`git hash-object`) para garantizar byte-identidad.
- **Consecuencias:** las variantes AVIF/WebP y cualquier resizing futuro quedan explícitamente bloqueados sin ADR nuevo; el "airline" original usaba un resizer server-side 1600×1600, equivalente aceptable anotado en la bíblia de diseño.

### ADR-008 — Reescritura de `context.txt` (revoca la regla "no modificar sin consenso")
- **Estado:** accepted
- **Fecha:** 2026-11-17
- **Decisión:** `context.txt` deja de ser el brief maestro original (Next.js/Sanity/THE ARCHITECTURE OF MEMORY) y se **reescribe como brief vigente** describiendo el estado actual del proyecto (stack ratificado, dirección visual, arquitectura de capas, secciones, reglas operativas). La regla permanente "context.txt no se modifica sin consenso" queda **revocada por consenso explícito del usuario** en esa fecha; el texto original conserva su historia en git y en los ADRs.
- **Contexto:** El brief original describía decisiones ya desechadas; mantenerlo contradecía "la documentación describe el estado real" (Regla 10).
- **Alternativas consideradas:** archivarlo como histórico (descartado: el usuario eligió reescribirlo).
- **Razonamiento:** una sola fuente de verdad vigente sin contradicciones; la trazabilidad del cambio vive en este ADR y en git.
- **Consecuencias:** `context.txt` ahora puede actualizarse en futuras re-ratificaciones, siempre consensualmente y con ADR.

### ADR-009 — Formulario de contacto: decisión diferida
- **Estado:** deferred
- **Fecha:** 2026-11-17
- **Nota:** Con despliegue en Cloudflare Pages y sin backend, el mecanismo del futuro formulario de Contact (mailto enlazado, Pages Function, o servicio externo) queda **sin decidir** hasta la Fase de Contact. Hasta entonces el contacto público es email + Instagram (`linetsg@gmail.com`, `@linetsanchezart`), sin datos privados. No bloquea ninguna fase anterior.
