# Informe — 04-huashu-design

**Total: 110/150** · S 36 · M 35 · L 39 — **7.º lugar**

## Puntajes por dimensión

| Dimensión | S | M | L |
|---|---|---|---|
| 1. Primera impresión / wow | 3 | 3 | 3 |
| 2. Jerarquía visual y layout | 4 | 4 | 4 |
| 3. Tipografía | 4 | 4 | 4 |
| 4. Color y contraste | 3 | 4 | 4 |
| 5. Espaciado y ritmo | 4 | 4 | 4 |
| 6. Responsive | 4 | 4 | 4 |
| 7. Motion e interacción | 3 | 3 | 3 |
| 8. Accesibilidad | 3 | 2 | 4 |
| 9. Calidad de código | 4 | 3 | 4 |
| 10. Adherencia al prompt | 4 | 4 | 5 |
| **Total** | **36** | **35** | **39** |

## Escalado con el prompt

Curva **irregular con dip en M** (36 → 35 → 39). El nivel M es el más flojo: `aria-*`
cae a 4 en todo el documento y el código baja a 3. Solo en L, con el brief que exige
explícitamente accesibilidad AA, el modelo se ordena. Necesita que le pidan las cosas.

## Fortalezas

- **Restraint editorial**: estética de white-paper técnico, mucho aire, tipografía
  cuidada. Para cierto público (técnico, sobrio) esto es una virtud.
- **Filosofía anti-AI-slop visible**: no hay stock fotográfico genérico ni datos
  inventados llamativos; el run-notes documenta la disciplina.
- Jerarquía y espaciado correctos y consistentes (4/4/4).

## Debilidades

- **Riesgo de leerse como "sin terminar"**: la austeridad extrema y el texto diminuto
  hacen que S parezca un borrador más que una landing. "Wow" clavado en 3.
- **Accesibilidad inconsistente**: la celda M apenas tiene 4 atributos `aria-*` en todo
  el sitio — el punto más bajo del colosseum en a11y.
- **Acento de color subutilizado**: en S el diseño es casi monocromo, el cian apenas
  aparece.
- Motion casi inexistente en los tres niveles.

## Para qué sirve

Documentación técnica, sitios institucionales sobrios, casos donde el cliente
explícitamente quiere "menos es más". Su SKILL.md está orientado a slides/PPTX/motion
—acotarlo a "sitio web" lo deja fuera de su terreno fuerte, lo que probablemente penaliza
su resultado aquí.

## Fricción de uso

**Media.** SKILL.md en chino (legible). Hay que filtrar mucho material no aplicable
(slides, video, export PPTX) para llegar a la parte de "sitio web". El workflow "Junior
Designer" + checklist anti-slop es claro una vez que lo encuentras.
