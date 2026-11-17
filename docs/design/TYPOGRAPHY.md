# TYPOGRAPHY.md — Tipografía · Linet Sánchez · Artist Portfolio

> **actualizado 2026-11-17 · dirección ratificada (ADR-005)**
>
> **Qué sustituye este documento:** la escala Cormorant Garamond (display/serif) + Inter (UI) de la dirección anterior queda **desechada**. Vigente: **una sola familia, Arial, en todo el sitio, sin webfonts** — decisión del usuario ratificada el 2026-11-17. La referencia original carga Roboto para el body y usa Arial en la UI; esta es una divergencia consciente y declarada (ver [ART_DIRECTION.md](ART_DIRECTION.md) §3).
>
> Este documento es autocontenido: describe el sistema tipográfico completo sin necesidad de consultar la referencia.

---

## 1. Familia única

```css
font-family: var(--font-site); /* Arial, Helvetica, sans-serif */
```

- **Cero webfonts.** Sin `@font-face`, sin Google Fonts, sin `font-display`. El sitio es offline-safe y el stack del sistema (`Arial, Helvetica, sans-serif`) se resuelve con fuentes del propio SO.
- La selección tipográfica NO es un elemento de identidad: la identidad la llevan el vacío, la obra y la geometría. Cambiar de familia jamás se usa para marcar jerarquía (principio 3 de [ART_DIRECTION.md](ART_DIRECTION.md)).
- Glifos de detalle (×, ‹ ›, flechas de visor): `"Courier New", monospace` únicamente en esos caracteres decorativos. La itálica Times New Roman del original aparece solo en glifos "i" decorativos: **no replicar** salvo paridad exacta con el original.

---

## 2. Escala por rol (valores exactos, vigentes)

| Rol | Tamaño | Interlineado | Peso | Color | Notas |
|---|---|---|---|---|---|
| **Body** | 13px | 1.9 | regular | `#666666` | Texto de todo el sitio; base `body` en `global.css` |
| **H1** | 13px | — | bold | `#666666` | Mismo tamaño que el body; solo lo distingue el bold |
| **H2** | 15px | — | regular | `#666666` | El heading MAYOR es apenas más grande que el body |
| **H3** | 12px | — | regular | `#666666` | Por debajo del body; labels y subtítulos internos |
| **Nav** | 14.5px (`--fs-nav`) | — | regular | `#666666` | Siempre en **lowercase**; 13.5px a ≤480px |
| **Wordmark** | 15px (`--fs-wordmark`) | — | bold | `#2e2e2e` | Nombre de la artista en el header |
| **Metadatos / footnotes** | 12px (`--fs-meta`) | — | regular | `#666666` | Fechas, materiales, notas |
| **Micro-caption** | 10px | — | regular | `#666666` | **UPPERCASE**; bloque de altura fija 205px (`formatTextObj`) con clip para alinear los rótulos de un grid de thumbs |
| **Didascalia** | `smaller` (~11–12px) | 150% | regular | `#666666` | Pie de obra dentro de thumbnails (`didaDscTxt`) |
| **Footer / counter** | 12px | — | regular | `#999999` | Footer a 1 línea; contador del visor |

Lectura de la escala: es una **franja estrecha** — de 10px a 15px. Toda la jerarquía cabe en 5px de diferencia. Eso es deliberado: el volumen tipográfico nunca compite con la obra.

---

## 3. Jerarquía sin cambiar de familia

La jerarquía se construye SOLO con estos cuatro parámetros:

1. **Tamaño** (franja 10–15px, §2).
2. **Peso** (regular vs bold; H1 y wordmark son los dos únicos bold).
3. **Posición** (márgenes, aire vertical — [LAYOUT_AND_SPACING.md](LAYOUT_AND_SPACING.md)).
4. **Color** (`#666` base, `#000` interactivo, `#999` débil, `#2e2e2e` wordmark).

Y un señalador de énfasis: **UPPERCASE** (micro-captions, 10px).

Prohibido para jerarquía: cambiar de familia, itálicas decorativas, cajas/fondos de color, tamaño de display >15px salvo aprobación documentada.

---

## 4. Enlaces y la "línea de reserva"

Los enlaces usan **subrayado permanente**: es el único señalador de enlace del sistema (sin cambios de color de fondo, sin hover de cajas).

| Contexto | Reposo | Hover / foco | Detalle |
|---|---|---|---|
| Enlace de texto | subrayado, `#666666` | `#000000` | `text-underline-offset: 2px` (vigente en `global.css`) |
| Nav del header | **sin subrayado**, con border-bottom 1px del color del fondo ("línea de reserva") | border-bottom 1px `#666666`; color → `#000` | La línea de reserva garantiza cero salto de layout al hover |
| Página activa en nav | `aria-current="page"` → border-bottom visible `#666666` | — | Equivalente del item subrayado del original |

```css
.site-nav a {
  padding: 6px 0 2px 0;
  border-bottom: 1px solid var(--color-bg);   /* línea de reserva */
}
.site-nav a:hover, .site-nav a:focus { border-bottom-color: var(--color-ink); }
.site-nav a[aria-current='page']     { border-bottom-color: var(--color-ink); }
```

---

## 5. Divergencia Arial vs Roboto (documentada)

| Aspecto | Original (referencia) | Sitio de Linet (vigente) |
|---|---|---|
| Body | Roboto, webfont | Arial 13px / 1.9 |
| UI (nav, botones) | Arial | Arial |
| Webfonts | Sí (carga Roboto) | **No, ninguna** |
| Motivo | — | Decisión del usuario (2026-11-17): simplicidad, offline-safe, cero dependencias externas; el sistema tipográfico funciona con la familia universal |

Consecuencia aceptada: métricas ligeramente distintas de Roboto en el body (Arial es algo más ancha). Los interlineados y la franja de tamaños de §2 absorben la diferencia sin ajustes por página.

---

## 6. Reglas prácticas de escritura tipográfica

1. Todo el nav y las secciones en **lowercase** (work, about, exhibitions, press, contact).
2. Headings: `h1` 13px bold y `h2` 15px regular son suficientes para cualquier página interior; no introducir niveles más grandes.
3. Nada de text-shadow, letter-spacing decorativo o `font-stretch`.
4. Micro-captions uppercase SIEMPRE con altura fija y clip si conviven en un grid (`formatTextObj`, 205px): los rótulos alinean aunque las descripciones varíen de longitud. Detalle: [COMPONENT_GUIDELINES.md](COMPONENT_GUIDELINES.md).
5. El color `#999999` (12px) es exclusivo de footer/counter-texto débil; no usar para texto que el usuario deba leer completivo (contraste bajo intencional, no accesibilidad pobre — el texto de contenido va en `#666`).

---

## 7. Historial

- **2026-11-17:** reescritura completa. Cormorant Garamond + Inter desechados como sistema vigente. Ratificado Arial único sin webfonts (decisión de usuario, 2026-11-17; registrar divergencia también en ADR).
