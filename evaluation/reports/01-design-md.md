# Informe — 01-design-md

**Total: 115/150** · S 38 · M 37 · L 40

> Asimetría declarada (PLAN.md §1 y §5): `design.md` no es un skill de estilo, es una
> **spec de formato + CLI para documentar sistemas de diseño**. Se probó en su uso
> intencionado — el subagente redactó un `DESIGN.md` con tokens y construyó el sitio
> desde ahí. Su puntaje se lee con ese contexto.

## Puntajes por dimensión

| Dimensión | S | M | L |
|---|---|---|---|
| 1. Primera impresión / wow | 3 | 3 | 3 |
| 2. Jerarquía visual y layout | 4 | 4 | 4 |
| 3. Tipografía | 4 | 4 | 4 |
| 4. Color y contraste | 4 | 4 | 4 |
| 5. Espaciado y ritmo | 4 | 4 | 4 |
| 6. Responsive | 4 | 4 | 4 |
| 7. Motion e interacción | 3 | 3 | 3 |
| 8. Accesibilidad | 4 | 3 | 4 |
| 9. Calidad de código | 4 | 4 | 5 |
| 10. Adherencia al prompt | 4 | 4 | 5 |
| **Total** | **38** | **37** | **40** |

## Escalado con el prompt

Curva **plana** (38 / 37 / 40). El valor de design.md no está en escalar con el brief
sino en la **disciplina de tokens**: las tres celdas son internamente coherentes porque
derivan de un `DESIGN.md` explícito. Pero esa misma disciplina produce resultados
*correctos y predecibles*, no memorables — el "wow" se queda en 3 en los tres niveles.

## Fortalezas

- **Coherencia sistémica**: color, tipografía, espaciado y radios salen de tokens
  declarados; nada se siente improvisado.
- **Trazabilidad**: el `DESIGN.md` queda como artefacto auditable junto al `index.html`.
- **Buen código** en L (token discipline, 9 `role=`, 9 `:focus`).

## Debilidades

- **Bajo impacto visual**: tokens correctos ≠ diseño con voz. Se ve como el baseline pero
  un punto por debajo en primera impresión.
- **Galería antes/después floja**: bloques de gradiente de color en S y L en lugar de
  composiciones reales — el punto más débil de adherencia.
- **Motion mínimo** en los tres niveles.

## Para qué sirve

Para **documentar y mantener** un sistema de diseño existente, o para equipos que
necesitan que el diseño sea auditable y reproducible. No es la herramienta para "haz que
se vea increíble" — es la herramienta para "haz que sea consistente y rastreable".

## Fricción de uso

**Media-alta para este caso de uso.** El CLI requiere `bun` (no disponible en el
entorno), así que el subagente validó el `DESIGN.md` a mano. El flujo "escribe tokens →
construye desde tokens" añade un paso intermedio que no todos los proyectos quieren.
