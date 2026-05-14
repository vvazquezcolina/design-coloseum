# Run Notes — VoltSwap (modelo 05-taste-skill, variante L)

## Archivos del skill leídos

- `_models/taste-skill/skills/taste-skill/SKILL.md` — leído íntegro (las 10 secciones).
  Es el único archivo del skill; no hay archivos auxiliares ni referencias externas dentro del skill.

## Diales aplicados (baseline del skill, sin override del usuario)

- **DESIGN_VARIANCE: 8** — layout asimétrico. Ningún hero ni H1 centrado. Se usaron:
  grids fraccionales (`grid-cols-[1.05fr_0.95fr]`, `[0.8fr_1.2fr]`, `[0.85fr_1.15fr]`),
  bento asimétrico en Propuesta de valor (fila ancho+estrecho / estrecho+ancho),
  paquete Range desfasado con `md:-mt-4 md:mb-4`, columnas sticky vs. scroll en Proceso/Costos/FAQ.
  Override móvil respetado: todo colapsa a una sola columna por debajo de `md:`.
- **MOTION_INTENSITY: 6** — banda "Fluid CSS" (4-7). Sin Framer Motion (no aplica en
  archivo estático). Transiciones con `cubic-bezier(0.16,1,0.3,1)`, cascadas con
  `transition-delay` vía `data-delay`, reveals por `IntersectionObserver` (nunca
  `addEventListener('scroll')`). Microinteracciones perpetuas discretas: marquee cinético,
  `pulse-dot`. Animación solo en `transform`/`opacity`.
- **VISUAL_DENSITY: 4** — "Daily App Mode". Espaciado estándar (`py-24 sm:py-32`,
  `p-7`/`p-9` en cards). Mandato del skill: `font-mono` (JetBrains Mono) para TODOS los
  números (kWh, km, precios, horarios, teléfono, métricas).

## Decisiones de diseño clave

- **Tipografía anti-slop:** Inter prohibido. Display = Cabinet Grotesk, body = Satoshi
  (ambos vía Fontshare CDN), números = JetBrains Mono. H1 controlado por peso/color, no
  por escala gigante (`text-4xl sm:text-5xl lg:text-6xl`, no más).
- **Color:** un solo acento. Base neutra grafito (escala `ink` 950-600, nada de `#000000`
  puro — el más oscuro es `#0c0e10`). Acento eléctrico cian/verde-azulado (`volt #2bd4c4`,
  saturación bajo 80%). Sin "AI purple", sin neon glows: profundidad por bordes internos
  (`spotlight::before` con máscara) y sombras tintadas al fondo.
- **Anti "3 cards iguales":** la Propuesta de valor NO es la fila genérica de 3 tarjetas;
  es un bento de 4 piezas con tamaños mixtos. El Proceso es lista vertical con línea-guía
  y números que reaccionan al hover, no cards. Costos usa tabla con `divide-y`, no cajas.
- **Hero asimétrico:** split 50/50 con texto a la izquierda y un asset SVG técnico a la
  derecha (esquema de conversión del powertrain dibujado a mano en SVG inline), badge
  flotante "Cero." Cumple "The Standard Hero Paradigm" del skill.
- **Estados interactivos (Rule 5):** el formulario de cotización implementa el ciclo
  completo — validación inline con error bajo el input, estado loading (spinner + label
  "Enviando..."), estado success compuesto con opción de reenviar. Botones con feedback
  táctil (`:active` → `translate-y` + `scale`).
- **Accesibilidad AA:** `lang="es-MX"`, skip link, foco visible (`outline` cian 2px),
  semántica (`header/main/footer/section/article/figure/address/dl/table` con `caption`),
  `aria-expanded` en menú móvil, `aria-label` en sliders y enlaces de ícono,
  `prefers-reduced-motion` desactiva reveals/marquee/pulse. Contraste: texto sobre grafito
  con `ink-600`+ y blanco; acento cian sobre `ink-950`.
- **Anti-emoji:** cero emojis. Todos los íconos son SVG inline con `stroke-width` 1.8/2.x.
- **Datos orgánicos:** nombres realistas y no genéricos (Mariana Escárcega, Rodrigo
  Belmonte, Tania Verdusco), cifras "sucias" (142 conversiones, 410 km, 47 min, ~68%,
  +52 55 8471 9263), precios en rangos reales MXN. Sin "John Doe", sin `99.99%`.
- **Avatares:** iniciales sobre `volt-ink`, no íconos "egg" genéricos.
- **Galería antes/después:** slider real arrastrable (input range con thumb estilizado),
  placeholders de `placehold.co` con colores de marca (no Unsplash, no picsum roto).
- **Grain:** overlay `fixed inset-0 pointer-events-none z-60`, fuera de contenedores con
  scroll, como exige la sección 5 de performance.

## Supuestos

- Contrato = `index.html` autocontenido. El skill asume React/Next/Tailwind; se adaptó:
  Tailwind por CDN (config inline), sin React UMD (no era necesario; el JS vanilla cubre
  menú, reveals, sliders y formulario sin riesgo de hidratación). Por eso las directivas
  de RSC/Framer Motion/`'use client'` se tradujeron a su equivalente CSS/JS válido.
- Marca ficticia: ubicación CDMX (Iztacalco), teléfonos y correo inventados pero con
  formato mexicano realista. "desde 2017", 142 conversiones — cifras plausibles inventadas.
- Texto largo justificado (`text-align: justify` + `hyphens: manual`) según la regla global
  del usuario; headings, labels, botones y microcopy quedan sin justificar.
- Español mexicano, tono técnico-confiable; cero argentinismos.

## Fricción notable

- El skill está muy orientado a React/Next + Framer Motion + GSAP/Three. Buena parte de
  las secciones 4, 8 y 9 (magnetic physics con `useMotionValue`, `layoutId`, Bento 2.0 con
  `AnimatePresence`) no son trasladables literalmente a un HTML estático sin build. Se
  conservó la *intención* (perpetual micro-interactions, spotlight border cards, staggered
  reveals, kinetic marquee) con CSS/JS vanilla en vez de la implementación prescrita.
- `MOTION_INTENSITY 6` pide cascadas de `animation-delay` y reveals; sin Framer se resolvió
  con `IntersectionObserver` + `transition-delay`, que el propio skill admite en la banda 4-7.
- El skill prohíbe `@phosphor-icons/react`/Radix solo como *import path*; al no haber bundler
  se usaron SVG primitivos limpios con `stroke-width` estandarizado, que el skill permite
  explícitamente como alternativa.
- Tensión menor entre VISUAL_DENSITY 4 (espacioso) y la cantidad de secciones requeridas
  (9). Se resolvió con secciones altas y bien separadas en lugar de comprimir.
- MCP servers se desconectaron a mitad de sesión; no afectó la tarea (no se necesitaban).
