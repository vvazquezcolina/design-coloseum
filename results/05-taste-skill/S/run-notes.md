# run-notes — 05-taste-skill / Nivel S

## Prompt usado (verbatim, nivel S)
> Diseñame una web sobre conversión de autos de combustión interna a eléctricos.

## Archivos del skill leídos
- `_models/taste-skill/skills/taste-skill/SKILL.md` (completo, secciones 1–10).
- `_AGENT_BRIEF.md` y `prompts/prompts.md`.

No hay scripts en este skill: es una guía de directivas pura, no trae CLI ni base de datos.

## Adaptación al contrato del concurso
El skill asume React/Next/Tailwind con Framer Motion. El contrato pide un único
`index.html` autocontenido. Decisiones de adaptación, conservando todas las
directivas de diseño:
- **Tailwind por CDN** + config inline (sin build step).
- **Sin React UMD ni Framer Motion**: para MOTION_INTENSITY 6 el propio skill
  define el rango 4–7 como "Fluid CSS" (`transition: cubic-bezier(0.16,1,0.3,1)`,
  cascadas con `animation-delay`, solo `transform`/`opacity`). Framer Motion solo
  es obligatorio para 8–10, así que se respetó el dial con CSS puro + un
  `IntersectionObserver` (el skill prohíbe `window.addEventListener('scroll')`).
- Componentes "isolados" del skill se traducen a secciones limpias; los estados
  interactivos (loading/success/error) se hacen con JS vanilla mínimo.

## Diales aplicados (baseline 8 / 6 / 4)
- **DESIGN_VARIANCE 8** → hero split asimétrico `lg:grid-cols-[1.05fr_0.95fr]`,
  grids con unidades fraccionarias (`1.3fr 1fr 1fr` en paquetes, `1.4fr 1fr` en
  galería), columnas sticky desfasadas, zonas de aire. Override móvil: todo
  colapsa a una sola columna `< md`.
- **MOTION_INTENSITY 6** → reveals escalonados al scroll, marquee kinético,
  línea SVG que se "dibuja", indicador "breathing", hover/active tactile.
- **VISUAL_DENSITY 4** → "Daily App Mode": espaciado normal de web app,
  números en `font-mono`, sin sobrecargar.

## Reglas anti-slop / corrección de sesgo aplicadas
- **Sin Inter**: tipografía display/UI = `Outfit`; numérica = `Space Mono`.
- **THE LILA BAN**: cero morados/neón. Base neutra (grises tinta `#0e0f11`…),
  un único acento eléctrico cian/verde-azulado desaturado (`volt`, sat < 80%).
- **Anti-center**: ningún hero ni H1 centrado; todo left-aligned / split.
- **Anti 3-card-row**: la sección de beneficios es lista zig-zag con divisores,
  no tres tarjetas iguales. Métricas del hero sin cajas, separadas por `divide-x`.
- **Sin emojis**: todos los íconos son SVG inline con `stroke-width` 1.8–2.
- **Sin negro puro**: fondo oscuro `#0e0f11` (zinc-950-ish), no `#000`.
- **Sin glows neón**: sombras tintadas al fondo, borde interior 1px en glass.
- **Sin Unsplash**: placeholders `picsum.photos/seed/...`.
- **Datos orgánicos**: nombres realistas (Renata Buendía), cifras "sucias"
  (268 km, 1.40 $/km, +52 (55) 4187 1928), no `99.99%` ni `John Doe`.
- **Sin filler words**: se evitaron "Elevate/Seamless/Next-Gen".
- **Marca contextual**: "Reborn EV" (el nivel S no fija marca; VoltSwap es solo
  para M y L según el brief).
- **Hero paradigm**: imagen relevante con fade gracioso hacia el color de fondo.
- **Estados de interacción**: formulario con label arriba, helper text en
  markup, error inline, estado loading (spinner no genérico circular… aquí sí
  spinner pero acompañado de label "Enviando") y estado success compuesto.

## Accesibilidad
- `lang="es-MX"`, `:focus-visible` con outline del acento, semántica (`header`,
  `nav`, `main`, `section`, `dl`, `ol`, `details/summary`), `aria-label` en
  navegación e íconos `aria-hidden`. `prefers-reduced-motion` desactiva reveals,
  marquee y smooth scroll.
- Texto largo justificado (`.prose-just`: `text-align: justify` +
  `hyphens: manual`) en párrafos de contenido corrido; headings, labels y
  microcopy quedan sin justificar, según la regla global.

## Supuestos
- Contenido en español, audiencia mexicana (precios en MXN, CDMX).
- Nivel S sin marca obligatoria → se inventó "Reborn EV".
- Pre-flight check del SKILL: `min-h-[100dvh]` en hero, `max-w-7xl mx-auto`,
  colapso móvil garantizado, estados empty/loading/error presentes, cards
  omitidas a favor de espaciado donde se pudo.

## Fricción notable
- El skill está 100% orientado a un stack React/Next con Framer Motion; varias
  secciones (9. Motion-Engine Bento, magnetic micro-physics, `useMotionValue`)
  no aplican a un HTML estático de una página. Se siguió la jerarquía del propio
  skill: los diales mandan, y con MOTION_INTENSITY 6 el CSS fluido es la vía
  correcta y explícitamente sancionada por la Sección 6.
- Pequeño ajuste post-build: se usó `bg-ink-100` sin definir esa tonalidad en el
  config; corregido a `bg-ink-900/8`.
