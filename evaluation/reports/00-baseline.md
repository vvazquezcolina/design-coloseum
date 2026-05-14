# Informe — 00-baseline (control, sin skill)

**Total: 120/150** · S 39 · M 39 · L 42

## Puntajes por dimensión

| Dimensión | S | M | L |
|---|---|---|---|
| 1. Primera impresión / wow | 4 | 4 | 4 |
| 2. Jerarquía visual y layout | 4 | 4 | 4 |
| 3. Tipografía | 4 | 4 | 4 |
| 4. Color y contraste | 4 | 4 | 4 |
| 5. Espaciado y ritmo | 4 | 4 | 4 |
| 6. Responsive | 4 | 4 | 4 |
| 7. Motion e interacción | 3 | 3 | 4 |
| 8. Accesibilidad | 3 | 3 | 4 |
| 9. Calidad de código | 4 | 4 | 5 |
| 10. Adherencia al prompt | 5 | 5 | 5 |
| **Total** | **39** | **39** | **42** |

## Escalado con el prompt

Curva **plana-ascendente**. Claude sin skill ya entrega un sitio competente y completo
con el prompt corto: tema bien interpretado, secciones razonables, dark theme con acento
verde coherente. La diferencia S→L es modesta (+3): con el brief largo aparecen
testimonios, tabla de costos, `prefers-reduced-motion` y más `aria-*`, pero el lenguaje
visual no cambia de nivel. No necesita el brief para rendir; tampoco despega con él.

## Fortalezas

- **Consistencia y completitud**: las tres celdas cubren todo lo pedido sin huecos.
- **Código limpio y semántico**: `<section>`/`<header>`/`<footer>`, 33–60 KB, sin hacks.
- **Tema oscuro cohesivo**: paleta grafito + verde bien aplicada, contraste correcto.

## Debilidades

- **Techo de "wow" en 4**: profesional pero reconociblemente "dark SaaS genérico"; no
  sorprende ni tiene voz propia.
- **Motion y accesibilidad tibios** en S/M: transiciones mínimas, sin `reduced-motion`
  hasta el nivel L, `alt` ausente donde hay arte SVG sin rotular.

## Para qué sirve

Es el **piso de referencia**: cualquier skill que no supere 120/150 no está aportando.
Útil para entender qué obtienes "gratis" — un sitio sólido y entregable, sin distinción.

## Fricción de uso

Cero. Es Claude tal cual. Sin scripts, sin contexto, sin dependencias.

## Lectura en contexto

Que el control llegue a 120 y supere a 4 de los 6 skills es el hallazgo más incómodo del
colosseum: varios skills añadieron fricción sin añadir calidad.
