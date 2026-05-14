# run-notes — VoltSwap landing (modelo: 03-impeccable)

## Archivos del skill leídos

- `_models/impeccable/skill/SKILL.md` — workflow, Setup, shared design laws, command router. La tarea ("diseña una landing page") cae en el comando `craft`, register `brand`.
- `reference/brand.md` — register de marca (cargado por ser register=brand). De aquí salen las decisiones clave: brand slop test, segundo slop test de "aesthetic lane", procedimiento de selección de fuentes, lista de reflejos rechazados (fuentes y lanes), estrategia de color Committed, reglas de imagery obligatoria.
- `reference/craft.md` — flujo de craft. Sin generación de imágenes nativa en este harness, así que el paso 3 (visual-direction-by-generation) se omite explícitamente y se construye directo desde el brief, como indica el propio craft.md.
- `reference/spatial-design.md` — base 4pt, rejilla auto-fit, jerarquía multidimensión, "cards no son obligatorias".
- `reference/typography.md` — escala modular, fluid type acotado, `text-wrap: balance/pretty`, tracking en all-caps.
- `_models/impeccable/CLAUDE.md` (llegó como system-reminder) — regla de color tokens, "sin em dashes", el AI-slop test. Respetado.

## Scripts corridos

- `node scripts/load-context.mjs` con `IMPECCABLE_CONTEXT_DIR` apuntando a la carpeta de salida. Devolvió `hasProduct: true`, `hasDesign: true`, `contextDir` correcto. Consumí el JSON completo, sin pipes.
- No corrí scripts de live-browser (prohibido por la consigna).
- Verifiqué cada ID de Unsplash con `curl -o /dev/null -w "%{http_code}"` antes de referenciarlo. Descarté 3 IDs que daban 404 (`1632823471565...`, `1599256871679...`, `1487830947372...`). Las 5 imágenes finales devuelven 200 a las dimensiones exactas usadas.

## Contexto creado

- `PRODUCT.md` — register `brand`. Usuarios (dueño sentimental, pragmático urbano, flota chica), tono "templado, preciso, sin estridencia", anti-referencias (cliché EV neón, SaaS genérica, eco-ingenuo, garage-hobbyista), principios estratégicos (la confianza se muestra, números antes que adjetivos, el coche del cliente es el héroe, honestidad de precio).
- `DESIGN.md` — lane nombrada: "manual de servicio técnico industrial de los 80, reimpreso en buen papel". Color Committed. Tipografía elegida por el procedimiento del skill.

## Decisiones de diseño clave

1. **Aesthetic lane nombrada y anti-reflejo doble.** Primer reflejo del rubro EV = cian/azul-eléctrico sobre negro: rechazado. Segundo reflejo (editorial-magazine: serif display italic + labels mono + reglas) también rechazado: la lane es manual de servicio técnico, rejilla visible, anotaciones tipo plano, fichas tabulares. La lectura "eléctrico" llega por contenido y tipo, no por la paleta.
2. **Color Committed.** Naranja seguridad/señalización templado (`oklch(0.745 0.158 62)`) como color de marca, no neón: naranja de torquímetro y lámpara de inspección. Fondo blanco-hueso cálido tintado, tinta casi-negra cálida, una sola escala de grises tintada. Superficie carbón puntual en "Proceso" y "Contacto" como arte-dirección por sección (no tema dark global), donde el naranja brilla como luz de inspección. Todos los neutros tintados hacia el hue de marca; cero `#000`/`#fff`.
3. **Tipografía por procedimiento, no por reflejo.** Display: **Archivo** (grotesca de señalización industrial, no está en la ban list). Cuerpo: **Hanken Grotesk** (humanista, x-height alta) tras rechazar IBM Plex Sans por estar en la lista. Datos/etiquetas: **Martian Mono** solo en cifras, etiquetas de spec, números de paso y cotas; el mono es literal (lecturas de instrumento), nunca cuerpo. Escala fluida `clamp()` ~1.333.
4. **Layout asimétrico con rejilla visible.** Hero no centrado (titular grande izquierda + foto con anotaciones tipo plano derecha). Líneas hairline `ruled` que se asoman en los bordes de cada sección como líneas de cota. Espaciado fluido, ritmo variado.
5. **Cards solo donde son la mejor afordancia.** "Cómo funciona" NO son tarjetas: secuencia de 5 pasos numerados con línea conectora, como un procedimiento. Paquetes sí son tarjetas (comparables en rejilla, una destacada en naranja). Galería en frames. Sin tarjetas anidadas, sin border-left de color.
6. **Números antes que adjetivos.** Spec-strip en el hero (240 km, 6 sem, 24 meses, 130+), metas de tiempo en cada paso, desglose de precio real con total ($268,000 MXN) y 4 factores que mueven el precio. La sección de precios cumple el principio "honestidad como diferenciador": precio a la vista, sin esconderlo tras un formulario.
7. **Comparador antes/después** como única interacción "de juguete", justificada por el brief: divisor arrastrable con `clip-path`, soporte de teclado (flechas/Home/End), `role="slider"` con `aria-valuenow`.
8. **Imagery real obligatoria** (brief con autos/taller/antes-después): 5 fotos Unsplash verificadas, alt text descriptivo como parte de la voz, `loading="lazy"` bajo el pliegue, overlay tintado sutil en el hero.
9. **Motion sobrio:** reveal escalonado por scroll vía IntersectionObserver, ease-out-expo, sin rebote. `prefers-reduced-motion` respetado (todo aparece sin desplazamiento, scroll-behavior auto).
10. **Estados y semántica:** form con validación inline (blur + submit), estados invalid con mensajes, estado de éxito con `aria-live`, foco gestionado; skip link, focus-visible, landmarks, touch targets, `:focus` con anillo naranja.
11. **Copy:** español mexicano (PRODUCT.md global del usuario lo pide). Cero em dashes. Sin signos de admiración (lo pide el tono de PRODUCT.md). Sin headings restated. Texto largo de párrafos sin justificar porque el copy es de UI/marketing corto, no prosa larga de artículo (la regla global de justificar aplica a texto corrido extenso, no a leads de landing).

## Supuestos

- Datos del negocio (dirección, teléfono, correo, precios en MXN, autonomías, plazos) son inventados pero plausibles y consistentes entre secciones. CDMX como ubicación por el perfil mexicano del usuario.
- El brief no pide framework; es un `index.html` autocontenido por contrato de la consigna. craft.md Step 0 normalmente preguntaría, pero la consigna fija "single index.html".
- "Servicios/paquetes" se interpretó como 3 niveles de conversión (Esencial / Calle / Largo alcance), que es el eje real de decisión del cliente.

## Fricción notable

- El skill asume harness con generación de imágenes nativa (Codex) para los gates 2-4 de craft. Sin eso, craft.md indica colapsar esos gates en el brief y construir directo: eso se hizo, anunciándolo.
- La consigna prohíbe los scripts de live-browser, que son el paso 5 (iterate visually) de craft. Sin navegador conectado ni screenshot tool en este entorno, la revisión visual fue estática: lectura del código contra el brief, los DON'Ts del skill y los anti-patrones. No pude verificar render real en viewport.
- ~3 de 11 IDs de Unsplash probados daban 404 pese a parecer válidos; confirma la advertencia del skill sobre verificar URLs. Me quedé solo con los 200 confirmados.
