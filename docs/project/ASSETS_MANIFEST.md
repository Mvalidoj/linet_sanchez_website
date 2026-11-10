# ASSETS_MANIFEST — inventario de assets y dependencias materiales

> Estado real de los archivos binarios. Fuente de resolución/límites: `../design/redesign_v2/02_DESIGN_TOKENS.md §7` y `05_CONTENT_MAP.md §5`.

---

## 1. Imágenes de obra — disponibles (6)

Todas en `assets/images/` (no renombrar: son material de la artista; la identificación con obras está pendiente — `CONTENT_STATUS.md B2`). Resolución nativa 720–750 px:

| Archivo | Descripción visual (alt propuesto `(d)`) |
|---|---|
| `SnapInsta.to_621461517_…_750.jpg` | stairway diagonal, haz de luz en maqueta blanca |
| `SnapInsta.to_754068894_…_720.jpg` | luz sobre superficie arqueada de rejilla blanca |
| `SnapInsta.to_755693858_…_750.jpg` | escalera estrecha entre dos muros blancos |
| `SnapInsta.to_793024467_…_750.jpg` | arcos ojivales de ladrillo blanco iluminados (candidata a Acto I de Home) |
| `SnapInsta.to_830349656_…_720.jpg` | planchas curvas de madera apiladas en maqueta vertical |
| `SnapInsta.to_830390327_…_720.jpg` | maqueta de madera sobre fondo oscuro (candidata a poza del visor) |

**Regla de render mientras no lleguen assets finales:** el tamaño renderizado ≤ 1.5× la resolución nativa (≈1100 px); `width`/`height` explícitos; `object-fit: contain` (nunca recortar). Home sin hero full-bleed por este motivo (03 §A).

## 2. Tipos de letra — PENDIENTES de descarga (requisito de F-1)

| Fuente | Archivo esperado en `assets/fonts/` (o el equivalente según stack — ADR-000) | Subconjunto | Peso/Ejes |
|---|---|---|---|
| Newsreader (variable) | `Newsreader-var-latin.woff2` (+ su variante italic) | latín | wght 200–800, opsz 6–72, SOFT/WONK en default |
| Instrument Sans (variable) | `InstrumentSans-var-latin.woff2` | latín | wght 400–600 |

Requisitos de carga (02 §12): `preload` de la display, `font-display: swap`, `size-adjust` calibrado para evitar CLS, fallback Georgia / Helvetica+Arial. **Licencia:** ambas son Google Fonts (OFL) — descargables en woff2.

## 3. Video

- Serie 6: necesita asset Full HD de la artista (bloqueante B7). Espera: `assets/video/` con poster JPG + fuente MP4/web (`06 §6`: sin autoplay, botón de texto, reduced-motion).

## 4. Assets pendientes de entrega por la artista

| Asset | Estado | Uso previsto |
|---|---|---|
| Retrato de la artista | pendiente (B4) | `/about` retrato |
| Imágenes de obra en resolución final (≥2000px) | pendiente | hero/pozas a mayor escala (elimina límite 1.5×) |
| Identificación de los 6 assets disponibles | pendiente (B2) | placas con título/medidas reales |
| Dossier EN en PDF | pendiente (B5) | `/press` descargable |
| CV en PDF | pendiente (B3) | `/about` CV |

## 5. Convenciones de uso

- Las obras NUNCA se renombran ni se recolorean; en la web se referencian desde `assets/images/`.
- Los woff2 descargados sí se colocan/renombran según el §2.
- Cada asset nuevo entra en este inventario (fecha + rastro).
