# LAYOUT_AND_SPACING

> Especificación de retícula, anchos y espaciado. Estado: documentada; se implementará en Fase 1. La composición editorial (asimetría, secuencia) se rige por `ART_DIRECTION.md` principios B y E.

## 1. Sistema de espaciado

Base 4 — únicamente estos múltiplos:

```
4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128 px
```

Reglas de uso:

- **Espaciado de sección (desktop):** 120–160px — las secciones respiran; el vacío es deliberado (Principio B).
- **Espaciado entre contenido relacionado:** 24–48px.
- Reducir el espaciado en móvil con cuidado, **sin suprimir el espacio negativo**.

## 2. Anchos y márgenes

| Medida | Valor |
|---|---|
| Ancho máximo de contenido | **1440px** |
| Márgenes desktop (≥1200px) | 64–80px |
| Márgenes tablet (768–1199px) | ≈40px |
| Márgenes móvil (<768px) | 20–24px |

El ancho máximo define el "marco de sala": dentro de él, composiciones editoriales; fuera, solo fondo Warm Paper.

## 3. Retícula

| Dispositivo | Columnas | Gutters |
|---|---|---|
| Desktop | 12 | 24px |
| Tablet | 6 | — |
| Móvil | 4 | 12–16px |

Reglas de composición:

- Las obras y los bloques editoriales ocupan **rangos de columnas deliberados** (p. ej. imagen 7 columnas + texto 4 desplazado; imagen 5 con título fuera del eje).
- **Asimetría controlada como norma** (Principio E): evitar series de tarjetas idénticas; variar spans, offsets y escalas entre elementos de una misma lista.
- La retícula debe percibirse: alineaciones exactas, bordes editoriales compartidos; nunca desalineación casual.

## 4. Divisores y formas

- Divisor estándar: **1px, ≈#D3D1CA** — para separar secciones del mismo nivel o contenidos de distinta naturaleza.
- **Border radius: 0px** en todo el sitio.
- Prohibido: sombras innecesarias, gradientes, bordes decorativos, tarjetas redondeadas (ver `../../CLAUDE.md` §5).

## 5. Composición editorial (reglas aplicables a cualquier página)

1. Cada página abre con una declaración grande y contenida (heading/statement) o una imagen protagonista — nunca con un bloque utilitario denso.
2. Alternar densidades: sección cinematográfica → pausa en blanco → sección modular.
3. El texto acompaña: max-width de párrafo contenido (≈60–70ch en body), nunca líneas largas de extremo a extremo.
4. Metadata y captions se colocan alineadas a la retícula, en Stone Grey, con tracking amplio.
5. En listas de obras/proyectos, cada ítem puede variar en span columnas y escala para crear ritmo de recorrido.

## 6. Móvil — conversión del layout

- Flujo de lectura natural en una columna; simplificar composiciones complejas de la retícula, no apilarlas mecánicamente.
- Preservar aspect ratio de las obras.
- Mantener espacio negativo (reducir 120–160px → valores proporcionales, no eliminar).
- Sin overflow horizontal. Ver `RESPONSIVE_DESIGN.md`.
