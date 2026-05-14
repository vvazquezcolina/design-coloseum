# Rúbrica de evaluación — Design Colosseum

Cada celda (`results/<modelo>/<S|M|L>/index.html`) se puntúa **1–5** en 10 dimensiones.
El scoring se hace **a ciegas**: las celdas se identifican por código, sin nombre de modelo,
hasta terminar de puntuar.

Escala: **1** = malo / ausente · **2** = pobre · **3** = aceptable · **4** = bueno · **5** = excelente.

| # | Dimensión | Qué se mira |
|---|-----------|-------------|
| 1 | Primera impresión / "wow" | ¿Se ve profesional y no genérico? ¿Sorprende o parece plantilla? |
| 2 | Jerarquía visual y layout | Orden de lectura, composición, uso del espacio, foco claro |
| 3 | Tipografía | Elección, escala, contraste tipográfico, legibilidad, ritmo |
| 4 | Color y contraste | Paleta coherente, uso del acento, contraste suficiente |
| 5 | Espaciado y ritmo | Padding/margin consistentes, aire, alineación, grid |
| 6 | Responsive | Comportamiento en desktop 1440px y mobile 390px |
| 7 | Motion e interacción | Hover, scroll, microinteracciones; aportan o estorban |
| 8 | Accesibilidad | Contraste AA, foco visible, semántica, alt text |
| 9 | Calidad de código | HTML semántico, CSS limpio, sin hacks, mantenible |
| 10 | Adherencia al prompt | ¿Cubre lo pedido? Completitud de secciones, tema correcto |

**Total por celda:** /50. **Total por modelo:** suma de sus 3 celdas, /150.

## Lecturas adicionales por modelo (informe individual)

Más allá del número, cada informe (`evaluation/reports/<NN>-<modelo>.md`) responde:

- **Escalado con el prompt:** ¿el modelo ya brilla con el prompt corto, o necesita el brief
  largo para destacar? ¿La curva S→M→L es plana, ascendente o irregular?
- **Fortalezas:** qué hace consistentemente bien.
- **Debilidades:** dónde falla o introduce ruido.
- **Para qué sirve:** tipo de proyecto / usuario para el que conviene este modelo.
- **Fricción de uso:** qué tan fácil fue invocarlo (scripts, dependencias, contexto requerido).

## Notas de equidad

- Mismo modelo base (Claude), mismo tema, mismos 3 prompts congelados.
- A todos se les pidió el mismo contrato de salida (un `index.html` autocontenido), salvo
  `06-sesh-acid-pipeline`, al que se le permitió salida estática multi-archivo por su naturaleza.
- `01-design-md` y `06-sesh-acid-pipeline` no son skills de diseño "puros" — sus puntajes se
  leen con ese contexto (ver PLAN.md §1 y §5).
- No se inyectó ninguna regla de estilo propia (p.ej. justificación de texto) para no
  contaminar la comparación: cada modelo diseñó a su criterio.
