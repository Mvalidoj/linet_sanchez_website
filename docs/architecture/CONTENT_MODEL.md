# CONTENT_MODEL — Modelo de contenido (planificado)

> **Estado: planificado (CMS no implementado; será Sanity CMS en Fase 7).** Los tipos y campos documentados aquí reflejan los requisitos del brief. Ajustes requerirán ADR. Reglas de contenido en `../project/CONTENT_GUIDELINES.md`.

## Relaciones alto nivel

```
ArtistProfile (1)
  └── referencias: email, social, portrait, CV
Project (n) ──references──▶ Artwork (n)   [una obra puede reutilizarse, sin duplicar datos]
Press (n)        (independiente)
Exhibition (n)   (independiente)
```

**Los proyectos y las obras se modelan por separado** para permitir reutilizar una obra en varios proyectos sin duplicar información.

## Tipos

### ArtistProfile (singleton)
| Campo | Tipo |
|---|---|
| Name | string |
| Portrait | image |
| Biography | text |
| Artist statement | text |
| Location | string |
| Email | string (público: `linetsg@gmail.com` — ver reglas en `../project/CONTENT_GUIDELINES.md`) |
| Social profiles | socials (Instagram: `@linetsanchezart`) |
| CV document | file |

### Project
| Campo | Tipo |
|---|---|
| Title | string |
| Slug | string (único) |
| Year / date range | string o rango |
| Discipline | fotografía / escultura / video (lista) |
| Cover image | image (referencia Artwork o asset propio) |
| Description | text |
| Artist statement | text |
| Artworks | referencia[] → Artwork |
| Credits | text |
| Display order | number |
| Publication status | draft / published |
| Featured | boolean (para "Selected Works" en Home) |

### Artwork
| Campo | Tipo |
|---|---|
| Title | string |
| Image o media | image / video (soporta los dos; media tipo vídeo con referencia de archivo) |
| Year | date/string |
| Dimensions | string |
| Technique / material | string |
| Caption | text |
| Alt text | string (obligatorio) |
| Ordering | number (orden dentro del proyecto) |

### Press
| Campo | Tipo |
|---|---|
| Publication | string |
| Article title | string |
| Date | date |
| Author | string |
| Type | lista (entrevista, review, mención…) |
| Cover image | image (opcional) |
| Description | text |
| External URL | url |

### Exhibition
| Campo | Tipo |
|---|---|
| Title | string |
| Solo / group | lista |
| Venue, City, Country | strings |
| Dates | rango |
| Curator | string |
| Description | text |
| Installation images | image[] |
| Catalogue / external link | url |

## Reglas del modelo

1. **Alt text siempre** para obras (accesibilidad + SEO, ver `../project/CONTENT_GUIDELINES.md` §4).
2. Campos desacoplados de la UI: el frontend consume; la ordenación/featured deciden presentación.
3. Drafts y publicación: nada entra en producción sin estado *published*.
4. **Sin datos inventados en el CMS:** solo verified content entra; preliminary queda fuera hasta confirmación.
5. Los textos editoriales propuestos del brief (hero, statement Home) no se migrarán como "artist statement" aprobado sin confirmación.
