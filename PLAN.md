# Design Colosseum — Plan de revisión

Objetivo: comparar 6 "modelos" de diseño web (skills / specs para agentes) generando con cada uno
3 sitios web sobre el mismo tema, con 3 niveles de prompt (corto / medio / largo), para luego
evaluarlos y decidir cuál nos quedamos.

---

## 1. Los 6 contendientes (y dos asimetrías importantes)

| # | Modelo | Tipo real | Cómo se usa | Licencia | Notas |
|---|--------|-----------|-------------|----------|-------|
| 01 | **google-labs-code/design.md** | Spec de formato + CLI (no es un "skill de diseño" al uso) | Defines un `DESIGN.md` con tokens; CLI hace lint/export a Tailwind/CSS | Apache-2.0 | **No es comparable 1:1** — ver §5 |
| 02 | **nextlevelbuilder/ui-ux-pro-max-skill** | Claude skill + motor en Python | 161 reglas, 67 estilos, scripts `.py` que recomiendan sistema de diseño | MIT | Pesado; requiere correr Python |
| 03 | **pbakaus/impeccable** | Claude skill + 23 comandos | `/craft`, `/audit`, `/polish`… + anti-patrones deterministas | Apache-2.0 | Registra slash commands |
| 04 | **alchaincyf/huashu-design** | Claude skill (SKILL.md en chino) | Genera prototipos/slides/motion; scripts de export | MIT | Bilingüe; lo acotaremos a "sitio web" |
| 05 | **leonxlnx/taste-skill** | Colección de SKILL.md | `design-taste-frontend` es el todoterreno; tiene "diales" 1-10 | MIT | Ligero, puro markdown |
| 06 | **Oruga420/claude-code-skills → sesh-acid-pipeline** | Pipeline de 5 fases (lead-gen→brand→build→outreach→inbox); diseño = Fase 3 | Sub-skills designer/ui/ux + "anti-template gate" + `03-design-personality.md` + scripts `karpathy_score.mjs`, `visual_contrast_check.mjs` | **verificar** (repo monorepo) | **No es comparable 1:1** — ver §5 |

**Dos asimetrías a tener en cuenta:**
- `design.md` no mejora el diseño de Claude — es un formato para *documentar* sistemas de diseño.
- `sesh-acid-pipeline` no es un skill de diseño puro — es un pipeline de ventas/marketing donde el
  diseño es solo la Fase 3, y espera un "brand bible" real, imágenes harvested con HTTP 200, y
  produce un sitio **Next.js multipágina** (no un HTML único).

Ambos se incluyen, pero su score se lee en contexto (ver §5).

---

## 2. Respuesta a tu pregunta: ¿varios modelos juntos en una sesión?

**No.** Cada modelo se prueba en una sesión / contexto **aislado**. Razones:

1. **Contaminación cruzada** — sus filosofías de diseño se mezclarían y no podríamos atribuir un
   resultado a un modelo concreto.
2. **Colisión de comandos** — `impeccable` y `ui-ux-pro-max` registran slash commands; cargarlos
   juntos genera conflictos.
3. **Trazabilidad** — el sentido del colosseum es comparar, y eso exige una variable por corrida.

El único punto donde se "juntan" es en la **evaluación**. Excepción menor: yo (orquestador) sí
tengo los 5 a la vista para coordinar, pero **cada generación es en solitario**.

---

## 3. Estructura de carpetas

```
Design Colloseum/
├── PLAN.md                      ← este archivo
├── _models/                     ← TEMPORAL (se borra al elegir ganador)
│   ├── design.md/
│   ├── ui-ux-pro-max-skill/
│   ├── impeccable/
│   ├── huashu-design/
│   ├── taste-skill/
│   └── sesh-acid-pipeline/      ← solo la subcarpeta del monorepo
├── prompts/prompts.md           ← los 3 prompts canónicos (congelados)
├── results/
│   ├── 00-baseline/{S,M,L}/     ← Claude sin skill (control)
│   ├── 01-design-md/{S,M,L}/
│   ├── 02-ui-ux-pro-max/{S,M,L}/
│   ├── 03-impeccable/{S,M,L}/
│   ├── 04-huashu-design/{S,M,L}/
│   ├── 05-taste-skill/{S,M,L}/
│   └── 06-sesh-acid-pipeline/{S,M,L}/
├── evaluation/
│   ├── rubric.md
│   ├── reports/                 ← un informe individual por modelo
│   │   ├── 00-baseline.md
│   │   ├── 01-design-md.md
│   │   ├── … (uno por fila)
│   │   └── 06-sesh-acid-pipeline.md
│   ├── scores.csv               ← matriz de puntajes (modelo × prompt × dimensión)
│   └── screenshots/             ← capturas desktop + mobile de las 21 celdas
└── viewer/                      ← visor web servido en localhost:3500
    ├── index.html
    ├── app.js
    └── manifest.json            ← describe las 21 celdas (rutas, thumbnails, scores)
```

Cada celda (`results/<modelo>/<S|M|L>/`) contiene: `index.html` autocontenido (+ assets si hace
falta) y un `run-notes.md` (qué archivos del skill se cargaron, qué scripts se corrieron, supuestos).

---

## 4. Los 3 prompts (mismo tema: pádel, para que sean comparables)

Tema fijo en los 3 niveles para aislar la variable "longitud del prompt".

- **S — Corto:** `Diseñame una web sobre padel.`
- **M — Medio:** `Diseña una landing page para un club de pádel llamado "Padel Pro Club". Debe
  tener hero, sección de pistas y reservas, precios y contacto. Que se vea moderno y profesional.`
- **L — Largo:** brief detallado — marca "Padel Pro Club" (club premium urbano, público 25-45,
  tono enérgico pero elegante), secciones: hero con CTA de reserva, ventajas del club, 6 pistas con
  estado, planes de membresía (3 tiers), galería, testimonios, FAQ, footer con mapa/horarios;
  responsive mobile-first; paleta sugerida (azules profundos + acento lima); microinteracciones en
  hover y scroll; accesibilidad AA.

→ Texto final exacto se congela en `prompts/prompts.md` antes de empezar (revisable por ti).

---

## 5. Controles de equidad (mismas reglas para todos)

- Mismo modelo base (Claude), mismo tema, mismos 3 prompts.
- **Contrato de salida idéntico:** "produce un `index.html` responsive y autocontenido (CSS/JS
  inline, se permiten CDNs). No hagas preguntas; asume lo razonable."
- Cada celda = un subagente nuevo, sin memoria de las otras celdas, con **solo** los archivos de su
  modelo disponibles en `_models/<modelo>/`.
- Para modelos con scripts (ui-ux-pro-max → Python; huashu → shell/export), el subagente **sí
  ejecuta** los scripts como manda el skill: así medimos el modelo real, no una versión recortada.
- **huashu** se acota: solo entregable "sitio web" (sus features de slides/motion quedan fuera de
  esta comparación; se pueden anotar aparte).
- **design.md** se prueba en su uso intencionado: el subagente primero redacta un `DESIGN.md` con
  tokens para la marca y luego construye el sitio desde esos tokens. Su score se interpreta sabiendo
  que es un tipo de herramienta distinto.
- **sesh-acid-pipeline** se prueba en modo **"capa de diseño"** (recomendado): se le da al subagente
  solo la parte de diseño del pipeline — `03-design-personality.md`, los sub-skills designer/ui/ux,
  el "anti-template gate" y los scripts `karpathy_score.mjs` + `visual_contrast_check.mjs` — y se
  saltan las fases de lead-gen, outreach e inbox (irrelevantes para el colosseum). Como su salida
  natural es Next.js multipágina, a **este modelo se le permite** entregar un mini-proyecto estático
  multi-archivo en lugar del `index.html` único; igual es screenshot-able. Alternativa más fiel pero
  manual: darle un "brand bible" sintético de Padel Pro Club y dejar correr la Fase 3 completa.
- **Baseline (00):** Claude sin ningún skill, mismos 3 prompts. Es el control — sin él no sabemos
  si un skill aporta o resta.

Total de celdas: **7 filas × 3 prompts = 21 sitios** (6 modelos + baseline).

---

## 6. Fases de ejecución

- **Fase 0 — Setup:** crear estructura de carpetas, `git clone` de los repos en `_models/` (para
  `sesh-acid-pipeline` se clona el monorepo y se conserva solo `sesh-acid-pipeline/`; **verificar
  licencia** del repo `Oruga420/claude-code-skills`), inspeccionar cada uno (localizar SKILL.md /
  specs / scripts), congelar `prompts/prompts.md` y `evaluation/rubric.md`.
- **Fase 1 — Baseline:** 3 corridas sin skill.
- **Fase 2 — Modelos:** 18 corridas, un subagente aislado por celda. Paralelizable.
- **Fase 3 — Screenshots:** servir `results/` con un static server local, capturar cada sitio en
  desktop (1440px) y mobile (390px) a `evaluation/screenshots/`, y generar `viewer/manifest.json`.
- **Fase 4 — Evaluación individual:** cada uno de los 7 (6 modelos + baseline) se evalúa **por
  separado**, no en ranking. Por modelo se produce `evaluation/reports/<NN>-<modelo>.md` con:
  - puntaje por dimensión para cada prompt (S/M/L) — rúbrica 1-5:
    1. Primera impresión / "wow" (no genérico)
    2. Jerarquía visual y layout
    3. Tipografía
    4. Color y contraste
    5. Espaciado y ritmo
    6. Responsive (mobile/desktop)
    7. Motion e interacción
    8. Accesibilidad (contraste, semántica, alt)
    9. Calidad de código
    10. Adherencia al prompt / completitud
  - cómo escala el modelo con la longitud del prompt (¿mejora mucho con el brief largo? ¿ya brilla
    con el corto?)
  - fortalezas, debilidades, y para qué tipo de proyecto conviene.
  Todos los puntajes se vuelcan también a `evaluation/scores.csv`. El scoring lo hago a ciegas
  (celdas con código, sin nombre de modelo) para evitar sesgo; tú revisas en el visor.
- **Fase 5 — Visor en localhost:3500:** ver §7.
- **Fase 6 — Decisión:** elegir ganador, conservar su repo, **borrar `_models/`** y los repos
  perdedores. Loguear decisión en la wiki (`wiki/decisiones.md`).

---

## 7. Visor de resultados (localhost:3500)

App estática mínima en `viewer/`, servida en `localhost:3500`, con navegación de 2 niveles:

- **Pantalla 1 — elección de prompt:** 3 cards grandes → **Prompt base** · **Prompt medio** ·
  **Prompt elaborado**.
- **Pantalla 2 — grid de diseños:** al hacer click en un prompt, se abre una grilla con una card
  por modelo (7 cards: baseline + 6 modelos), cada una con su screenshot de thumbnail, el nombre
  del modelo y su puntaje resumido.
- **Detalle:** click en una card → abre el `index.html` de esa celda (en iframe a pantalla
  completa o pestaña nueva), con un botón para volver y un link a su informe individual.

> **Puerto:** el visor se sirve en `localhost:3500` (libre — el MCP de Redesign ocupa el `:3000`).

---

## 8. Coste / esfuerzo estimado

21 generaciones de sitio + 42 screenshots + visor. Es automatizable con subagentes en paralelo,
pero es una corrida pesada (varias horas-token). Se puede recortar si quieres: p.ej. quitar el
baseline, o empezar solo con el prompt M para una primera criba y luego correr S y L solo a los
finalistas.

---

## 9. Decisiones abiertas para tu revisión

1. ¿Tema fijo "pádel" en los 3 niveles? (recomendado, sí) ¿o variar el tema por nivel?
2. ¿Incluimos el **baseline** sin skill? (recomendado, sí — es el control)
3. ¿Corremos las **21 celdas de una** o hacemos **criba con prompt M** primero y solo finalistas
   con S y L?
4. ¿`design.md` y `sesh-acid-pipeline` dentro del head-to-head (con su asterisco) o evaluados
   **aparte** por ser otra categoría de herramienta?
5. Fidelidad: subagentes aislados (automatizable, lo que propongo) vs. sesiones reales de Claude
   Code con cada skill instalado de verdad (más fiel, más manual).
6. `sesh-acid-pipeline`: ¿modo **"capa de diseño"** (recomendado, automatizable) o **Fase 3
   completa** con brand bible sintético (más fiel, más manual)?
