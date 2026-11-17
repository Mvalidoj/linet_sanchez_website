# ART_DIRECTION.md — Dirección de arte · Linet Sánchez · Artist Portfolio

> **actualizado 2026-11-17 · dirección ratificada (ADR-005)**
>
> **Qué sustituye este documento:** reemplaza por completo la dirección anterior "THE ARCHITECTURE OF MEMORY" con paleta "Warm Paper" y sistema tipográfico Cormorant Garamond + Inter. Esa dirección está **desechada** y solo se conserva aquí como referencia histórica. La dirección vigente fue ratificada en ADR-005: **el sitio replica la ESTRUCTURA visual de pinomusi.com** con el contenido de Linet Sánchez.
>
> Este documento es una **bíblia autocontenida**: contiene todo lo necesario para mantener el diseño consistente sin volver a consultar el material de la referencia (`pinomusi/` es material de archivo). REGLA ABSOLUTA: nunca se copia contenido editorial de la referencia (textos, títulos, fotografías); estos documentos describen el SISTEMA visual, no su contenido.

---

## 1. Qué es el sitio

Un portfolio de artista con naturaleza editorial: se lee como una **maquetación impresa** — papel blanco, jerarquía tipográfica austera, la obra como único elemento cromático y protagonista absoluto.

**Audiencia:** instituciones, curadores, galerías, coleccionistas, investigadores, prensa y profesionales del arte.

**Lo que NO debe ser:**
- Un portfolio genérico de fotógrafo.
- Una web corporativa o landing comercial.
- Una plantilla decorativa.

El rasgo identitario vigente es: **la interfaz se retira ante la obra**. El diseño no compite con las imágenes; las enmarca con discreción y desaparece.

---

## 2. Los 9 principios (con evidencia del sistema)

### 2.1 Monocromatismo estricto sobre blanco

La paleta funcional es de 5 grises más blanco y negro: `#ffffff` (fondo), `#f0f0f0` (hairline de imagen), `#999999` (texto débil/footer), `#666666` (texto base) y `#2e2e2e` (wordmark) — con `#000000` reservado a hover/interacción. La única tinta de estado es `#DE363A` (error de formulario). No existe color de marca: **la obra es el único elemento cromático del sitio**. Detalle completo en [DESIGN_TOKENS.md](DESIGN_TOKENS.md).

### 2.2 La interfaz se retira ante la obra

Texto base `#666666` sobre blanco: un contraste deliberadamente bajo. El negro `#000` queda reservado a hover e interacción. En visores de obra, el overlay es blanco opaco al 100% (la foto queda "sobre papel") con fade instantáneo (duración 0).

### 2.3 Jerarquía solo por tamaño, peso, posición y color de texto

Nunca por cambio de familia, ni por bloques, tarjetas o cajas. El **subrayado** es el único señalador de enlace. Ver [TYPOGRAPHY.md](TYPOGRAPHY.md).

### 2.4 Ritmo vertical generoso

El vacío es un elemento de diseño y se dimensiona con valores concretos: aire pre-footer **90px**, separador `hr` de **185px**, contenido que arranca a **130–145px** bajo el header fijo, grids con **85px** de aire inferior, párrafos con **30px** inferior. Detalle completo en [LAYOUT_AND_SPACING.md](LAYOUT_AND_SPACING.md).

### 2.5 Composición editorial tipo maquetación impresa

Grids **no uniformes**: la variante "journal" del sistema de grids alterna anchos (57% / 32.95% / 27% / 53%…) con solapes por márgenes negativos, imitando el ritmo de una revista o libro de artista. Nada de columnas mecánicas idénticas en todos los bloques.

### 2.6 La foto nunca se recorta ni se estira

Sin `object-fit: cover` sobre obra. Contenedores con `max-height: 88vh` (vertical) o `85vh` (horizontal) y `object-fit: contain`. Los ratios nativos de cada obra se preservan siempre (regla de integridad de obra, CLAUDE.md §4.8). Única excepción conocida en el sistema de referencia: la variante `.roundImg` (círculo 50%) — existe en el sistema pero **no se usa por defecto**.

### 2.7 Hairline 1px `#f0f0f0` como único marco de imagen

Toda imagen de obra (miniatura y grande) se enmarca con un borde de 1px `#f0f0f0`. **Nunca** sombras sobre obra, **nunca** bordes decorativos.

### 2.8 Navegación ambiental invisible

La navegación entre obra y obra es fantasma: zonas de clic invisibles (en la referencia, 35% × 300px, opacity 0 → .80 al hover), flechas de visor ‹ › en Courier que pasan de opacity 0 a 1 al hover con transición de .45s, y navegación con teclado ←/→. El diseño confía en que el usuario explore; no anuncia controles. Detalle en [INTERACTION_GUIDELINES.md](INTERACTION_GUIDELINES.md).

### 2.9 Bilingüismo como textura (patrón del original, no vigente)

El sitio original marca la segunda lengua con itálica como textura visual. **Nota:** el sitio de Linet es solo inglés (ADR-001); este patrón se aplica únicamente si algún día se pide soporte bilingüe. No implementar por defecto.

---

## 3. Divergencias conscientes respecto a la referencia

Ratificado el 2026-11-17. Son decisiones adoptadas, documentadas y vigentes:

| # | Divergencia | Referencia (original) | Sitio de Linet (vigente) |
|---|---|---|---|
| 1 | **Tipografía** | Roboto (body, webfont) + Arial (UI) | **Solo Arial en todo, sin webfonts** — decisión del usuario (2026-11-17). Ver [TYPOGRAPHY.md](TYPOGRAPHY.md). |
| 2 | **Responsive** | Redirect a skin móvil independiente (`?_mob=1`) a partir de 950px | **Media queries CSS** (950px y 480px) sobre una única hoja. Ver [RESPONSIVE_DESIGN.md](RESPONSIVE_DESIGN.md). |
| 3 | **Slideshow de la home** | JS (lazyload, precarga, animación de altura 200ms) | **Crossfade CSS puro, CERO JS en la home**: 6 slides × 5s de permanencia, fade de 350ms solapado, ciclo de 30s. La estabilidad de altura se resuelve fijando el ratio del stage al de la obra más alta (720/892) → CLS 0. Ver [COMPONENT_GUIDELINES.md](COMPONENT_GUIDELINES.md). |
| 4 | **Extras comerciales del original** | Carrito, banner de cookies, botón fullscreen, botón "i" de share | **Fuera de scope.** No se replican: no aplican a un portfolio editorial. |

Además, el comportamiento on-scroll del header (ocultar al bajar / mostrar al subir + hairline 1px `#e1e1e1`, 200/350/400/250ms) está **PENDIENTE de implementar**: requiere JS mínimo y es una decisión futura. Estado actual: header estático siempre visible, hairline en reposo con opacity 0.

---

## 4. Prohibiciones permanentes (heredadas de CLAUDE.md §5, vigentes en esta dirección)

- Tarjetas redondeadas, sombras, gradientes, iconos decorativos.
- Componentes de UI genéricos y bordes innecesarios.
- Efectos artificiales: parallax, zoom decorativo, cursor personalizado, audio en autoplay (excepción ratificada: el slideshow automático de la home, ver [INTERACTION_GUIDELINES.md](INTERACTION_GUIDELINES.md)).
- Inventario de contenido: nunca inventar títulos, fechas, materiales, dimensiones, exposiciones (CLAUDE.md §4.7).

---

## 5. Documentos del sistema de diseño

| Documento | Contenido |
|---|---|
| [DESIGN_TOKENS.md](DESIGN_TOKENS.md) | Tokens vigentes en `@theme` + tokens reservados para fases futuras. |
| [TYPOGRAPHY.md](TYPOGRAPHY.md) | Arial única familia, escala por rol, jerarquía, enlaces. |
| [LAYOUT_AND_SPACING.md](LAYOUT_AND_SPACING.md) | Escenario global, header, ritmo vertical, grids divGrid-*. |
| [RESPONSIVE_DESIGN.md](RESPONSIVE_DESIGN.md) | Breakpoints 950/480px, comportamiento por viewport, validación. |
| [COMPONENT_GUIDELINES.md](COMPONENT_GUIDELINES.md) | Anatomía por componente; implementado vs. pendiente por fase. |
| [INTERACTION_GUIDELINES.md](INTERACTION_GUIDELINES.md) | Motion ratificado, tabla de duraciones, prohibiciones, a11y. |

Arquitectura y estado real del código: [TECHNICAL_ARCHITECTURE.md](../architecture/TECHNICAL_ARCHITECTURE.md) · Decisiones: [ARCHITECTURAL_DECISIONS.md](../architecture/ARCHITECTURAL_DECISIONS.md) (ADR-005 ratifica esta dirección; ADR-003 marca lo scaffoldado; ADR-007 documenta el tratamiento de imágenes de obra). Origen del brief: `context.txt`.
