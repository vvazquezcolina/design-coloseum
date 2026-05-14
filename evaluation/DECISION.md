# Decisión — Design Colosseum

**Fecha:** 2026-05-14
**Tema de prueba:** web de conversión de autos de combustión a eléctricos (marca ficticia VoltSwap)
**Método:** 7 modelos (baseline + 6 skills) × 3 niveles de prompt (S/M/L) = 21 sitios.
Cada uno generado por un subagente aislado. Scoring a ciegas, 1–5 en 10 dimensiones, /50 por celda.

## Ranking final

| # | Modelo | S | M | L | Total /150 | vs. baseline |
|---|--------|---|---|---|-----------|--------------|
| 🏆 1 | **03-impeccable** | 46 | 46 | 48 | **140** | +20 |
| 2 | 02-ui-ux-pro-max | 41 | 42 | 44 | 127 | +7 |
| 3 | **00-baseline** (control) | 39 | 39 | 42 | **120** | — |
| 4 | 05-taste-skill | 39 | 38 | 42 | 119 | −1 |
| 5 | 01-design-md * | 38 | 37 | 40 | 115 | −5 |
| 6 | 06-sesh-acid-pipeline * | 35 | 38 | 38 | 111 | −9 |
| 7 | 04-huashu-design | 36 | 35 | 39 | 110 | −10 |

\* Herramientas de otra categoría (ver PLAN.md §5): `design.md` documenta sistemas de
diseño; `sesh-acid-pipeline` es un pipeline de ventas. Sus puntajes se leen en contexto.

## Ganador: **03-impeccable**

Único modelo que **sube el techo**, no solo el piso:

- **140/150**, con la celda más débil (46) por encima de la mejor de cualquier otro (44).
- 5/5 sostenido en primera impresión, jerarquía, tipografía, color y espaciado en los 3 niveles.
- **Ya brilla con el prompt corto** — no depende del brief largo para destacar (curva alta y plana).
- Es el único resultado que se ve *diseñado* y con voz propia, no *generado*.
- Fricción de uso media (espera `PRODUCT.md`/`DESIGN.md` de contexto, corre scripts de node) — se paga una vez.

## Hallazgo principal

**Solo 2 de 6 skills superan al baseline** (impeccable y ui-ux-pro-max). Los otros cuatro
empatan o quedan por debajo de Claude sin skill — añadieron fricción de invocación sin
añadir calidad. El baseline a 120/150 es un control sano: confirma que Claude solo ya
entrega sitios competentes y completos, y que un skill solo vale la pena si su techo
supera ese piso.

- **Recomendación de adopción:** quedarse con **impeccable**.
- **Mención honorable:** **ui-ux-pro-max** como caballo de batalla de bajo riesgo /
  alta accesibilidad cuando no se busca originalidad.

## Pendiente (requiere confirmación del usuario)

PLAN.md §6 contempla **borrar `_models/`** y los repos perdedores, conservando solo el
del ganador. Es destructivo e irreversible — **no se ejecutó**; queda a confirmación
explícita. Recomendado conservar `_models/impeccable/` y borrar el resto.

## Artefactos

- `evaluation/scores.csv` — matriz completa modelo × prompt × dimensión.
- `evaluation/reports/*.md` — 7 informes individuales.
- `evaluation/screenshots/` — 42 capturas (desktop 1440px + mobile 390px).
- `viewer/` — visor en `localhost:3500/viewer/` (servir el raíz del proyecto).
