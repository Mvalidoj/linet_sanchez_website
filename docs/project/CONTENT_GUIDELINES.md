# CONTENT_GUIDELINES — Linet Sánchez · Artist Portfolio

> Reglas de contenido para todo el sitio. Las obras reales de la artista tienen prioridad absoluta sobre cualquier material de stock o generado. **Nunca representar imágenes de stock o generadas como obras reales de Linet Sánchez.**

## 1. Idioma público

- El sitio público se publica **solo en inglés** (arquitectura preparada para multilingüe, pero sin otras traducciones activas).
- La **documentación interna** (`docs/`, CLAUDE.md) está en **español** (ADR-001).
- Todo copy visible debe ir en inglés: navegación, títulos, captions, metadata, botones, estados vacíos, SEO/OG.

## 2. Niveles de información

Toda información de contenido debe clasificarse en uno de tres niveles, y el código/documentación debe reflejarlo:

| Nivel | Significado | Tratamiento permitido |
|---|---|---|
| **Verified** | Confirmado contra el dossier o aprobado por la artista | Publicable tal cual |
| **Preliminary** | Extraído del dossier en análisis previo, no confirmado | Solo como referencia interna de trabajo; publicar solo tras verificación |
| **Awaiting confirmation / missing** | Desconocido | **Documentar el hueco, no rellenarlo.** Si aparece en UI, marcarlo claramente como pendiente o mostrar estado vacío |

## 3. Reglas de no invención

Nunca inventar:

- Detalles biográficos de la artista.
- Títulos de obras o proyectos.
- Fechas.
- Exposiciones, venues, curadores, ciudades.
- Publicaciones o prensa.
- Premios.
- Materiales o técnicas.
- Dimensiones.
- Galerías, representación, colecciones.
- Citas o declaraciones de la artista.

**Si falta información:** no rellenarla. Documentar el hueco (en esta documentación, marcándolo como *awaiting confirmation*) y pedirla cuando sea necesaria. Si el hueco es visible en UI, usar un estado vacío sobrio (ver `../../design/COMPONENT_GUIDELINES.md`).

**Textos editoriales propuestos del brief** (hero, statement introductorio, contacto) son propuestas, **no citas verificadas de la artista**, y no deben presentarse como statements aprobados hasta confirmación.

## 4. Metadatos de obras

Cada obra, cuando se conozca, debería tener (según el modelo de contenido en `../architecture/CONTENT_MODEL.md`): título, año, dimensiones, técnica/material, caption y **alt text**.

- **Alt text:** descriptivo, factual, en inglés. Describir el espacio/composición (p. ej. "Photograph of an empty interior with natural light falling across tiled walls"), no interpretación artística no aprobada. Si no se puede describir una obra porque la imagen no está disponible, registrar el hueco.
- **Captions:** solo con información verificada (título, año, medio, dimensiones cuando existan).

## 5. Integridad de las obras

- Nunca recortar, recolorear, distorsionar o modificar obras de forma que comprometa su presentación original.
- Las obras aportan el color del sitio: **nunca modificar los colores de la obra para que casen con la interfaz**.
- Mantener proporciones/aspect ratio originales en las composiciones.
- Si se usa un placeholder, **identificarlo claramente** (nunca parecerse a una obra real).

## 6. Contacto — información pública conocida

- Email: `linetsg@gmail.com`
- Instagram: `@linetsanchezart`

No exponer direcciones privadas ni información personal sensible.

## 7. Materiales pendientes de entrega (estado 2026-11-10)

Decisión del usuario: **por ahora no se incorporan los archivos al repositorio.**

| Material | Estado |
|---|---|
| Dossier PDF 2012–2025 (español) | Existe en directorio padre (`art_portfolio/`), pendiente de tratamiento/aprobación |
| Imágenes de las ~8 obras catalogadas | Pendientes de entrega |
| Retrato de la artista | Pendiente de entrega |
| Video de obra (`00:00:00 #2`, 2021) | Pendiente de entrega |
| Documentación de exposiciones / prensa | Pendiente de confirmación |
| Información biográfica verificada (bio, CV) | Pendiente (contenida en el dossier, no tratado) |

**Consecuencia práctica:** hasta que lleguen los materiales, cualquier página con imágenes usará placeholders claramente identificados o composiciones tipográficas; los estados de Press/Exhibitions serán estados vacíos sobrios.
