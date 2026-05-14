# Informe — 06-sesh-acid-pipeline

**Total: 111/150** · S 35 · M 38 · L 38 — **6.º lugar**

> Asimetría declarada (PLAN.md §1 y §5): no es un skill de diseño puro, es la **Fase 3
> de un pipeline de ventas de 5 fases**. Se probó en modo "capa de diseño" y se le
> permitió salida estática multi-archivo. Su puntaje se lee con ese contexto.

## Puntajes por dimensión

| Dimensión | S | M | L |
|---|---|---|---|
| 1. Primera impresión / wow | 3 | 3 | 3 |
| 2. Jerarquía visual y layout | 3 | 4 | 4 |
| 3. Tipografía | 3 | 3 | 3 |
| 4. Color y contraste | 4 | 4 | 4 |
| 5. Espaciado y ritmo | 3 | 4 | 4 |
| 6. Responsive | 4 | 4 | 4 |
| 7. Motion e interacción | 3 | 3 | 3 |
| 8. Accesibilidad | 3 | 4 | 4 |
| 9. Calidad de código | 4 | 4 | 4 |
| 10. Adherencia al prompt | 5 | 5 | 5 |
| **Total** | **35** | **38** | **38** |

## Escalado con el prompt

Curva **ascendente y luego plana** (35 → 38 → 38). La celda S es la más débil del set
completo: densa, apretada, con jerarquía y ritmo en 3. Con M y L se ordena —
especialmente al pasar a multipágina en M— pero se estanca en 38: el pipeline produce
sitios *funcionales y completos* pero sin remate visual.

## Fortalezas

- **Adherencia perfecta (5/5×3)**: nunca le falta una sección; el "anti-template gate" y
  las 4 sub-skill reviews garantizan completitud.
- **Proceso autoverificado**: corre `karpathy_score.mjs` (140/140 reportado) y reviews de
  designer/ui/ux/design-quality — deja rastro de QA.
- Color y contraste correctos (4/4/4); buen perfil `aria-*` en M y L.

## Debilidades

- **Tipografía floja (3/3/3)**: es la dimensión más débil del modelo en los tres niveles.
- **"Wow" clavado en 3**: el pipeline está optimizado para *cerrar ventas*, no para
  impresionar; el resultado es correcto pero plano.
- **Densidad mal administrada** en S: demasiado contenido apretado.
- El `karpathy_score` 140/140 no se corresponde con la calidad visual observada — el
  scorer del propio skill es generoso. El run-notes incluso reporta haber detectado
  contaminación cruzada en el directorio del scorer.

## Para qué sirve

Cuando necesitas **un sitio completo y "vendedor" rápido** como parte de un flujo de
marketing/ventas más amplio, y la completitud importa más que la distinción visual. No es
la herramienta si el objetivo es un diseño memorable.

## Fricción de uso

**Alta.** Es la más cara de invocar del colosseum: pipeline de 5 fases del que hay que
extraer solo la Fase 3, múltiples sub-skills, brand bible sintético, scripts de node y un
scorer cuyo resultado no es confiable. El run-notes documenta fricción real (incompatibi-
lidad de `visual_contrast_check.mjs` con salida estática, contaminación del scorer). Mucho
overhead para un resultado que no supera al baseline.
