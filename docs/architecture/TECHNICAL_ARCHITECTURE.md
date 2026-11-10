# TECHNICAL_ARCHITECTURE

> Distinguir siempre **arquitectura planificada** de **arquitectura implementada**. Este documento se actualiza en cada fase para reflejar el estado real (`FILE_STRUCTURE.md` complementa la vista de árbol).

## 1. Estado actual (2026-11-10)

**Implementado: nada.** El repositorio contiene solo este sistema de documentación, `context.txt` y git inicializado (rama `master`, sin commits). No hay `package.json`, framework, estilos ni código.

## 2. Arquitectura planificada (producción)

Según el brief, la arquitectura de producción esperada es:

| Capa | Tecnología | Notas |
|---|---|---|
| Framework | **Next.js** (React) | App Router probable; se decidirá en Fase 1 con ADR |
| Lenguaje | **TypeScript** | Obligatorio en código frontend |
| CMS | **Sanity CMS** | El sitio será content-driven; ver `CONTENT_MODEL.md` |
| Estilos | **CSS Modules** (o sistema estructurado equivalente) | Sin CSS-in-JS decorativo ni UI kits genéricos |
| Hosting | **Vercel** | — |

**No se inicializa el framework en Fase 0.** La decisión exacta (versiones, App Router vs Pages Router, estructura) se documenta con un ADR al iniciar Fase 1.

## 3. Objetivos de calidad (producción)

- Lighthouse: Performance **90+** · A11y **95+** · SEO **95+** · Best Practices **95+**.
- Imágenes: responsive, WebP/AVIF cuando proceda, lazy loading bajo el fold, preload solo del hero (si justificado).
- JavaScript mínimo, HTML semántico.
- SEO: metadata apropiada, Open Graph, sitemap, structured data (`Person`, `VisualArtwork` cuando aplique).
- No sacrificar calidad de imagen por optimización agresiva (Regla 8, `../../CLAUDE.md`).

## 4. Restricciones y decisiones ya tomadas

- Idioma público: inglés (arquitectura multilingüe lista de facto i18n-ready, sin runtime de traducciones inicial).
- Documentación interna en español (ADR-001).
- Secciones: las 6 del brief; sin secciones nuevas sin aprobación.
- Contacto público: email + Instagram únicamente; sin formulario complejo hasta Fase 6.

## 5. Estrategia CMS

Fase 7: schemas Sanity para Artist Profile, Projects, Artwork, Press, Exhibitions (`CONTENT_MODEL.md`), conexión al frontend, control de drafts/publicación/orden/featured y migración del contenido estático aprobado. El CMS debe permitir cambios de contenido **sin modificar código frontend**.

## 6. Deuda conocida / pendientes

- Decidir el stack concreto de Fase 1 y documentar ADR.
- Definir estrategia de imágenes de la artista (assets pendientes de entrega).
- Estrategia i18n concreta (subpath `/en` etc.) — se decide cuando aplique; hoy: solo inglés.
