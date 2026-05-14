# Brief para agentes generadores — Design Colosseum

Eres **un concursante** de un "design colosseum": se comparan varios skills de diseño web
haciendo que cada uno genere el mismo sitio. Trabajas en **AISLAMIENTO**.

## Reglas de aislamiento (obligatorias)
- NO leas las salidas de otros modelos bajo `results/`.
- NO uses ninguna metodología, skill o guía de diseño que no sea la que te asignaron.
- No preguntes nada al usuario. Asume lo razonable y avanza.

## La tarea
Genera un sitio web para el prompt que te toca por nivel (S, M o L). El texto exacto de los
3 prompts está en `prompts/prompts.md` — usa **verbatim** el de tu nivel, no lo modifiques.
El contenido del sitio va **en español**.

## Contrato de salida
- Escribe TODO únicamente dentro de tu carpeta asignada: `results/<NN-modelo>/<NIVEL>/`.
- Produce `index.html`: **un archivo autocontenido** (CSS y JS inline; se permiten CDNs para
  fuentes, Tailwind, React UMD, librerías de íconos). Debe renderizar bien al servir la carpeta
  como archivos estáticos — **sin build step**, sin depender de imágenes locales que no crees tú.
  Para imágenes usa gradientes CSS, SVG inline, o placeholders remotos
  (`https://placehold.co`, `https://source.unsplash.com`).
  - **Excepción solo para `06-sesh-acid-pipeline`:** se permite salida estática multi-archivo,
    pero DEBE existir un `index.html` funcional en la raíz de tu carpeta.
- Escribe también `run-notes.md` en la misma carpeta: qué archivos del skill leíste, qué scripts
  corriste (y su salida/score si aplica), decisiones de diseño clave, supuestos, y cualquier
  fricción notable al usar este modelo.

Haz el mejor sitio posible **dentro de la filosofía de tu modelo asignado**.

---

## Bloques por modelo

### 00-baseline
NO uses ningún skill, guía ni metodología de diseño externa. Diseña solo con tu propio criterio
de diseñador competente. Eres el grupo de control.

### 01-design-md
Tu modelo: `_models/design.md/`. Es una **especificación de formato + CLI** para *documentar*
sistemas de diseño (no es un skill de estilo). Lee `_models/design.md/docs/spec.md` y hojea
`_models/design.md/examples/` para aprender el formato DESIGN.md. Luego:
1. Redacta un archivo `DESIGN.md` en tu carpeta de salida con tokens de diseño (colores,
   tipografía, espaciado, radios, componentes) para la marca VoltSwap, siguiendo la spec.
2. Opcional: usa el CLI en `_models/design.md/packages/cli` para lint/export (`npm`/`bun` si
   están disponibles — si cuesta tiempo, sáltalo).
3. Construye `index.html` estrictamente a partir de esos tokens. Deja el `DESIGN.md` junto al
   `index.html`.

### 02-ui-ux-pro-max
Tu modelo: `_models/ui-ux-pro-max-skill/.claude/skills/ui-ux-pro-max/`. Lee su `SKILL.md`.
Trae una base de datos consultable — **CORRE** sus scripts de Python (`scripts/search.py`,
`scripts/design_system.py`, `scripts/core.py`) contra los CSV de `data/` para obtener
recomendaciones de estilo/color/fuentes/UX para este tipo de producto (`python3` está
disponible; instala dependencias si hace falta). Sigue las reglas priorizadas del `SKILL.md`
y las recomendaciones de los scripts. Luego construye `index.html`.

### 03-impeccable
Tu modelo: `_models/impeccable/skill/`. Lee `SKILL.md` y sigue su workflow. Espera archivos de
contexto: crea un `PRODUCT.md` (y opcionalmente `DESIGN.md`) para VoltSwap en tu carpeta de
salida y apunta el skill ahí con `IMPECCABLE_CONTEXT_DIR=<tu carpeta de salida>`. Carga la
referencia de "register" que corresponda y la del sub-comando `craft` (`reference/craft.md`).
Puedes correr sus scripts de node (p.ej. `scripts/load-context.mjs`) — node está disponible.
Luego construye `index.html`. NO uses los scripts de live-browser.

### 04-huashu-design
Tu modelo: `_models/huashu-design/`. Lee `SKILL.md` (está en chino — lo entiendes) y los
archivos relevantes de `references/` (sobre todo `design-styles.md`, `content-guidelines.md`
y la guía anti-AI-slop). Sigue la filosofía de diseño de huashu, su workflow de "Junior
Designer" y su checklist anti-AI-slop para producir un sitio de una sola página de alta
fidelidad. Ignora las partes de slides/video/PPTX — no aplican aquí. Construye `index.html`.

### 05-taste-skill
Tu modelo: `_models/taste-skill/skills/taste-skill/SKILL.md`. Léelo y sigue sus directivas:
los diales baseline (DESIGN_VARIANCE 8 / MOTION_INTENSITY 6 / VISUAL_DENSITY 4), las reglas de
corrección de sesgo, y las directivas de tipografía/color/layout y anti-slop. El skill asume
React/Next/Tailwind — adáptalo a nuestro contrato: un solo `index.html` autocontenido usando
Tailwind por CDN (y React UMD por CDN si quieres), pero **conserva todas las directivas de
diseño del skill**. Construye `index.html`.

### 06-sesh-acid-pipeline
Tu modelo: `_models/sesh-acid-pipeline/`. Es un pipeline de ventas de 5 fases; tú corres
**solo la parte de DISEÑO (Fase 3)**. Lee `SKILL.md` para orientarte, luego lee y sigue:
`03-design-personality.md`, `sub-skill-design-quality.md`, `sub-skill-designer.md`,
`sub-skill-ui.md`, `sub-skill-ux.md`. **NO** hagas lead generation, outreach ni inbox scanning.
**NO** envíes ni redactes ningún correo. Pasos:
1. Escribe un "brand bible" sintético breve para VoltSwap en tu carpeta de salida.
2. Elige una Layout Personality.
3. Construye el sitio.
4. Corre las 4 sub-skill reviews (designer/ui/ux/design-quality).
5. Corre `node _models/sesh-acid-pipeline/visual_contrast_check.mjs` y
   `node _models/sesh-acid-pipeline/karpathy_score.mjs` contra tu salida (lee el uso de cada
   script primero; node disponible). Anota el karpathy score en `run-notes.md`.
El skill apunta a Next.js multipágina — en su lugar emite **HTML/CSS/JS estático** sin build
step; se permite multi-archivo pero DEBE haber un `index.html` funcional en la raíz.
