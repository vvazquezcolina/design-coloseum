# Run Notes — VoltSwap landing (modelo 05-taste-skill)

## Archivos del skill leídos
- `_models/taste-skill/skills/taste-skill/SKILL.md` — leído íntegro (única fuente). No existen otros archivos en la carpeta del skill.

## Cómo se aplicó el skill

### Diales baseline (8 / 6 / 4)
- **DESIGN_VARIANCE 8** → layouts asimétricos en todas las secciones: hero split `1.05fr / 0.95fr`, grid de paquetes `7/5` de 12 columnas, galería antes/después con `col-span` alternados (7/5, 5/5, 7), headers left-aligned sobre contenido. Fallback estricto a una columna en `< md`.
- **MOTION_INTENSITY 6** → rango "Fluid CSS": reveals en scroll vía `IntersectionObserver` (nunca `addEventListener('scroll')`), cascadas con `transition-delay`, marquee infinito de marcas, punto de estado "respirando", feedback táctil `:active` con `translateY/scale`. Todo animado solo con `transform`/`opacity`. `prefers-reduced-motion` desactiva animaciones.
- **VISUAL_DENSITY 4** → "Daily App Mode": espaciados normales, métricas y servicios sin cajas (líneas divisorias `divide-x`/`divide-y`/`border-t`), tabla de precios sin cards. Números en `font-mono` (Space Grotesk).

### Bias correction (Sección 3)
- **Tipografía:** sin Inter — display con `Outfit`, mono con `Space Grotesk`. `tracking-tighter leading-none` en headlines. H1 controlado por peso/color, no escala gigante.
- **Color:** un solo acento (`volt` verde esmeralda #1ea672, saturación moderada). Base neutral cálida consistente (#f4f5f3 / ink #15171a / carbon). Sin morado/azul-IA, sin glows neón, sin gradientes de texto, sin negro puro.
- **Layout:** anti-center bias — ningún hero centrado. Anti-3-column-cards — servicios en fila de 4 con divisores (no cards), paquetes en grid asimétrico zig-zag.
- **Materialidad:** cards solo donde la elevación comunica jerarquía (paquetes, formulario, panel hero). Sombras tintadas al fondo.
- **Estados interactivos:** formulario con loading (spinner + label), success y error inline + validación por campo con texto bajo el input. Labels arriba del input, `gap-2`.

### Anti-slop / AI tells evitados
- Sin emojis (íconos SVG inline con `stroke-width` consistente 1.8–2.2).
- Sin Unsplash — `placehold.co` para comparadores antes/después; ilustración del auto en SVG inline.
- Nombres realistas no genéricos ("Renata Alcántara" como placeholder), datos "messy" (+52 (33) 2841-7019, $385,000, 214 conversiones), sin "99.99%" ni nombres tipo Acme.
- Sin filler words tipo "elevate/seamless"; copy concreto en español mexicano.

## Decisiones de diseño clave
- **Comparador antes/después interactivo** (drag) como pieza central de la galería: encaja con el dominio (conversión = transformación visible) y da una micro-interacción memorable sin librerías.
- **Panel "telemetría" en el hero** en lugar de foto: transmite el lado técnico/confiable del taller con SVG + lecturas tipo dashboard.
- **Sección de paquetes en fondo oscuro** (`ink`) para romper el ritmo y dar peso al bloque comercial.
- Texto largo (párrafos de proceso, precios, legal) justificado con `text-justify: inter-word; hyphens: manual` por regla global; UI/headings quedan en `left/start`.

## Supuestos
- Sin build step: Tailwind por CDN con config inline. No usé React UMD — vanilla JS basta para reveals, comparador y formulario; menos peso y cero riesgo de hidratación en archivo estático.
- Marca, ciudad (Guadalajara), precios en MXN y rangos de autonomía inventados de forma plausible; el prompt pedía "precios estimados".
- Formulario simula envío (timeout) — no hay backend en un archivo estático.

## Fricción notable
- El skill asume React/Next/Tailwind con Framer Motion para casi toda la sección de motion (magnetic buttons, `layoutId`, `staggerChildren`, Bento 2.0). El contrato pide un `index.html` estático, así que adapté: micro-físicas magnéticas y orquestación Framer se sustituyeron por su equivalente permitido en el propio skill (CSS `transition` + cascada de `animation-delay`, rango MOTION 4-7). Se conservaron las *directivas de diseño*; se omitieron las *implementaciones específicas de librería* por incompatibilidad de stack.
- Las directivas de RSC, `package.json` verification e `'use client'` no aplican a un único archivo estático — ignoradas conscientemente.
- Pre-flight check del skill cumplido salvo los puntos que dependen de React (global state, Client Components aislados) por no usar React.
