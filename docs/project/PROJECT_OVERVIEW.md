# PROJECT_OVERVIEW — Linet Sánchez · Artist Portfolio

## Qué es

Sitio web editorial y sofisticado para la artista visual contemporánea **Linet Sánchez**. Será su portfolio digital principal y su plataforma de presentación profesional. Arquitectura preparada para multilingüe; **idioma público inicial: inglés**.

El concepto rector es **THE ARCHITECTURE OF MEMORY** — "A digital space between memory, absence and imagination". El sitio no es solo un contenedor de obras: es una extensión del universo conceptual de la artista. La experiencia debe sentirse como entrar en una exposición contemporánea curada o explorar un libro monográfico impreso.

## Qué NO debe ser

- Un portfolio genérico de fotógrafo.
- Una web corporativa.
- Una landing page comercial.
- Una plantilla de portfolio preconstruida.

## Audiencia

- Instituciones de arte internacionales.
- Curadores.
- Galerías.
- Coleccionistas de arte.
- Investigadores.
- Periodistas.
- Organizaciones culturales.
- Profesionales del arte e interesados en artes visuales contemporáneas.

El sitio debe comunicar identidad artística, credibilidad profesional y profundidad conceptual.

## Alcance — arquitectura de información

Exactamente **seis secciones principales**:

| Sección | Ruta |
|---|---|
| Home | `/` |
| Work | `/work` |
| Proyecto individual | `/work/[slug]` |
| About | `/about` |
| Press | `/press` |
| Exhibitions | `/exhibitions` |
| Contact | `/contact` |

La sección Work soporta páginas de detalle por proyecto y distintos medios (fotografía, escultura, video). **No introducir secciones de navegación primarias adicionales sin aprobación explícita.** Ver `docs/design/COMPONENT_GUIDELINES.md` y `docs/project/CONTENT_GUIDELINES.md`.

## Estado actual (2026-11-10)

- **Fase 0 en curso:** sistema de contexto y documentación (este conjunto de documentos).
- **Implementación:** ninguna. Sin framework scaffoldado, sin `package.json`, sin código. Repositorio git inicializado (rama `master`) sin commits + `context.txt` (brief maestro) + `docs/`.
- **Materiales de la artista:** pendientes de entrega. Único asset disponible: `Dossier 2012-2025 Linet Sánchez español_compressed-3.pdf` (4,8 MB, en el directorio padre `art_portfolio/`), aún no tratado por decisión del usuario. Ver `CONTENT_GUIDELINES.md` → "Materiales pendientes".
- No hay conflicto entre archivos existentes y el brief: el repositorio estaba vacío salvo `context.txt`.

## Próximos pasos

Fase 1 — Fundación visual (estilos globales, tokens, tipografía, grid, navegación y footer), **previa aprobación explícita**. Roadmap completo en `docs/workflow/IMPLEMENTATION_PHASES.md`.
