# run-notes.md — VoltSwap / modelo 03-impeccable

## Archivos del skill que leí

Ruta base: `_models/impeccable/skill/`

- `SKILL.md` — workflow general, setup (context gathering + register), shared design laws, tabla de comandos, routing.
- `reference/brand.md` — register asignado: la tarea es una landing page, por tanto **brand** (el diseño ES el producto). Slop test, lanes de estética a evitar, procedimiento de selección de fuentes, reflex-reject list, color, layout, imagery, motion, brand bans/permissions.
- `reference/craft.md` — flujo de construcción end-to-end. La tarea encaja en `craft` (construir una landing completa).
- `reference/shape.md` — fase de discovery/brief previa a código.
- `reference/spatial-design.md` — escala de espaciado 4pt, grid auto-fit, jerarquía, touch targets, elevación.
- `reference/typography.md` — escala modular, medida 65–75ch, compensación de texto claro sobre oscuro, carga de fuentes, `clamp()` fluido, features OpenType, `text-wrap: balance/pretty`.
- `reference/motion-design.md` — regla 100/300/500, curvas ease-out exponenciales, materiales de motion, stagger con custom properties, `prefers-reduced-motion`, IntersectionObserver.
- `reference/color-and-contrast.md` — OKLCH, neutros tintados, estructura de paleta, 60-30-10, WCAG AA, nunca `#000`/`#fff`.
- `reference/responsive-design.md` — mobile-first con `min-width`, breakpoints guiados por contenido, `pointer`/`hover` queries, safe-area `env()`, tablas que colapsan a tarjetas con `data-label`.
- `reference/interaction-design.md` — los 8 estados interactivos, focus rings con `:focus-visible`, formularios, accordion accesible, skip links, z-index semántico.

No leí archivos de otros modelos bajo `results/` (regla de aislamiento). No usé los scripts de live-browser (instrucción explícita de la tarea).

## Scripts de node que corrí

- `node scripts/load-context.mjs` con `IMPECCABLE_CONTEXT_DIR` apuntando a la carpeta de salida (`results/03-impeccable/L/`). Confirmó `hasProduct: true`, `hasDesign: true` y `contextDir` correcto, devolviendo el JSON completo de `PRODUCT.md` + `DESIGN.md`. No lo re-corrí (el output ya estaba en contexto).

No corrí `pin.mjs`, `live.mjs` ni los demás (no aplicaban a la tarea).

## Setup del skill

- Creé `PRODUCT.md` (requerido) y `DESIGN.md` (opcional, recomendado) en la carpeta de salida antes de cualquier código, con >200 chars y sin marcadores `[TODO]`, así que no se disparó el blocker `teach`.
- **Register: brand.** Cue en la propia tarea ("landing page") + campo `register: brand` en PRODUCT.md. Primera coincidencia gana.
- **Step 3 de craft (visual direction por generación de imágenes):** el harness no tiene generación nativa de imágenes, así que ese paso se omite explícitamente (como exige craft.md) y se construye directo desde el brief. PRODUCT.md/DESIGN.md + el prompt fijan scope, contenido y dirección sin ambigüedad real, así que el "shape" fue compacto e interno.

## Decisiones de diseño clave

- **Estrategia de color: Committed.** Grafito (grises tintados hacia el cian, hue ~195) carga la superficie; un único acento teal-cian eléctrico hace de "corriente": CTAs, foco, números en vivo, estado "después". El acento se mantiene <~12% del peso visual. Esto pasa los dos slop tests: no es el azul-corporativo de fabricante de autos ni el neón-sobre-negro cripto/EV.
- **Tema: dark.** Frase de escena: un ingeniero de 44 años en la nave iluminada de un taller limpio al atardecer, el clásico sobre el elevador, un panel de instrumentos teal a un lado. Es un taller después de hora, no un showroom diurno; eso fuerza el oscuro. Profundidad por lightness de superficie, no por sombras pesadas.
- **Tipografía: tres familias con rol claro.** `Archivo` para display (grotesca con corte mecánico, como señalética estampada en metal), `Hanken Grotesk` para cuerpo/UI (humanista, mantiene la cercanía y se lee bien en oscuro), `Spline Sans Mono` para cifras (kWh, km, precios, números de paso): aquí el mono es *literal* — son lecturas de instrumento, no disfraz "developer". Ninguna está en la reflex-reject list.
- **Layout: grid visible como voz.** Hairlines finos, numeración de sección estilo hoja de especificaciones (`01`–`07`), kickers con número + regla. El taller corre sobre mediciones; el layout muestra sus mediciones. Hero asimétrico (titular sobredimensionado a la izquierda + cluster de instrumentos SVG). Escala de espaciado 4pt, padding de sección fluido con `clamp()`.
- **Sin tarjetas idénticas.** El proceso es un track numerado horizontal en desktop / pila en móvil, con línea de "corriente" conectando los pasos. Los paquetes se diferencian por una barra de batería SVG (celdas que se llenan), no por ser cajas más grandes; el del medio (Range) se eleva como recomendado.
- **Imagery.** El brief implica imágenes (galería antes/después de autos reales). Sin path de verificación de URLs de Unsplash y con riesgo de IDs rotos, opté por **siluetas de auto en SVG inline crafteadas** (un Sedán, una pickup, un coupé deportivo, un hatchback ochentero), con tratamiento before = ámbar/humo de escape y after = teal/rayo de carga. El brand register permite SVG/canvas como "imagery" legítima; preferí esto a divs de color o a imágenes potencialmente rotas. El cluster de instrumentos del hero también es SVG inline con arco de gauge animado.
- **Microinteracciones.** Carga orquestada con reveals escalonados vía IntersectionObserver; hover con lift + ignición del hairline acento; conteo de cifras (autonomía, kWh, stats) al entrar en viewport; barras de batería que se llenan celda por celda con stagger; arco del gauge que se dibuja; slider antes/después arrastrable con pointer en toda la imagen (no solo el thumb nativo). Curvas ease-out-quart/expo, sin bounce.
- **Accesibilidad AA.** Skip link; `:focus-visible` con outline de 2.5px y offset; HTML semántico (`header`/`main`/`section`/`footer`/`nav`/`article`/`figure`/`address`/`dl`); headings jerárquicos; accordion de FAQ con `aria-expanded`/`aria-controls`/`role="region"`; menú móvil con `aria-expanded` y cierre con Escape; sliders con `<input type="range">` real y `aria-label`; touch targets de 44–48px; tabla de costos con `role` y colapso a tarjetas con `data-label` en móvil; contraste verificado mentalmente sobre los tokens OKLCH (texto `--ink`/`--ash` sobre superficies oscuras, acento sobre `--accent-ink`); `prefers-reduced-motion` con path completo (sin animaciones, sin scroll-behavior, reveals visibles de entrada).
- **Idioma:** español mexicano (`lang="es-MX"`), sin argentinismos. Texto largo (leads de sección, respuestas de FAQ) justificado con `text-align: justify` + `text-justify: inter-word` + `hyphens: manual`, según la regla dura global; headings, labels, botones y microcopy quedan sin justificar.

## Supuestos

- Sin verificación posible de URLs de imágenes remotas → cero dependencia de placeholders externos; toda la imagery es SVG/CSS autocontenida. El archivo renderiza bien como estático sin build step.
- Datos del negocio (precios en MXN, rangos de kWh/autonomía/semanas, dirección en Vallejo CDMX, horarios, teléfono/correo, casos, testimonios, nombres) son inventados pero plausibles y coherentes entre secciones (los números del hero, paquetes, galería y tabla de costos concuerdan). Marca ficticia para el ejercicio.
- "Cotiza tu conversión" como CTA principal apunta a `mailto:` con asunto pre-llenado y hay un `tel:` secundario, ya que no hay backend de formulario en un entregable de un solo archivo.
- Fuentes vía Google Fonts CDN (permitido por el contrato de salida); `display=swap` para evitar FOIT.

## Fricción notable

- **Gates de craft vs. tarea de un solo turno.** craft.md insiste en múltiples gates de usuario (shape confirmado, preguntas de dirección, paleta, mock aprobado) y en parar en cada uno. La tarea explícita es autónoma y sin preguntas, así que comprimí shape/dirección en los archivos de contexto (PRODUCT.md/DESIGN.md) y dejé constancia del razonamiento ahí, en vez de hacer pausas de confirmación. Es la desviación consciente más grande respecto al flujo literal del skill.
- **Imagery sin generación nativa ni verificación.** brand.md es enfático en que cero imágenes es un bug en briefs que implican imágenes, y en no sustituir fotos por divs de color. Sin generación de imágenes ni fetch para verificar IDs de Unsplash, la lectura correcta del propio skill ("SVG/canvas también es imagery", "prefiere pocas que sí existen a muchas adivinadas") me llevó a siluetas SVG crafteadas. Es una interpretación, no una instrucción literal.
- Los scripts de live-browser quedaron prohibidos por la tarea, así que la "iteración visual" del Step 5 de craft (mirar lo construido en navegador) no se pudo ejecutar; la validación fue por revisión de código contra las referencias y los bans del skill.
- El loader (`load-context.mjs`) imprime el JSON completo de ambos archivos de contexto; es verboso pero el skill prohíbe pipearlo por `head`/`jq`, así que se consumió entero.
