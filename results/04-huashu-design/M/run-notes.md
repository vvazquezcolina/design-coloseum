# Run Notes — 04-huashu-design / VoltSwap

## Archivos del skill que leí

- `SKILL.md` (completo, en chino) — filosofía core, protocolo de activos de marca, workflow Junior Designer, anti-AI-slop, modo asesor de dirección de diseño.
- `references/workflow.md` — flujo Junior Designer (Pass 1 supuestos+placeholders → Pass 2 componentes → Pass 3 pulido → Pass 4 verificación).
- `references/content-guidelines.md` — blacklist completa de AI slop (gradiente morado, emoji, tarjetas redondeadas con border-left de color, SVG de imágenes, data slop, fuentes Inter/Roboto/Fraunces/Space Grotesk), reglas de escala y CSS avanzado.
- `references/design-styles.md` — librería de 20 filosofías de diseño en 5 escuelas.
- `assets/showcases/website-homepage/homepage-build.html` — referencia de calidad y estructura de un HTML "build" de huashu.

## Scripts corridos

- Ninguno del skill (los scripts son de slides/video/PPTX/TTS — fuera de alcance por instrucción).
- Verificación propia: chequeo de balance de tags con `python3` (sections, divs, svgs, form, script, ids referenciados por JS). Todo balanceado.

## Decisiones de diseño clave

1. **Sin protocolo de activos de marca.** "VoltSwap" es marca ficticia para el encargo; no hay producto real verificable ni logo oficial que buscar (el protocolo §1.a se dispara con marcas reales). Por eso construí identidad desde cero y la **declaré como supuesto** en el comentario de cabecera del HTML — que es exactamente el Pass 1 del workflow Junior Designer (escribir supuestos antes de ejecutar).

2. **Dirección de diseño: Build (minimalismo de lujo) + Fathom (diseño de información científico).** El brief pide "moderno, profesional y confiable" para un taller de *ingeniería automotriz*. Elegí el cruce de dos escuelas del style library: la sobriedad de Build y el rigor de reporte técnico de Fathom. Esto evita el default "landing SaaS genérica".

3. **Sistema de diseño declarado de antemano** (no improvisado):
   - Color: tinta `#14181C` sobre papel cálido `#F4F2ED`. **Un solo acento**, un verde "volt" definido en `oklch()` para no derivar el tono al ajustar luminosidad — usado con avaricia (datos clave, hover, una línea, el comparador). Sin segundo acento.
   - Tipografía: `Archivo` (display, con carácter), `IBM Plex Sans` (texto), `IBM Plex Mono` (specs/labels). **Evité explícitamente** Inter/Roboto/Fraunces/Space Grotesk porque están en la blacklist del skill. El mono es la "firma" de "esto es ingeniería medida".
   - Ritmo: secciones alternan papel / tinta full-bleed. Máximo 2 fondos.

4. **Antes/Después como diagramas técnicos, no fotos stock.** El skill prohíbe fotos decorativas y SVG de imágenes figurativas. Pero para un taller de ingeniería, *el sistema mecánico ES el contenido*, no decoración. Construí un comparador interactivo (slider con `clip-path`) entre dos **diagramas SVG técnicos**: el tren de combustión (motor, transmisión, tanque, escape) vs. el tren eléctrico (motor PMSM, pack LFP, inversor, cableado HV). Honesto y on-brief: mostramos la arquitectura, no una foto bonita.

5. **Anti-data-slop en precios y stats.** El brief pide "precios estimados" — los presento como **rangos** con un disclaimer explícito de que no son cotización. No inventé "10,000 clientes felices" ni "99.9% uptime". Los números del hero (kWh, km, V, g/km) son specs físicas reales del dominio de conversión EV, no métricas de marketing fabricadas.

6. **Sin emoji, sin tarjetas redondeadas con border-left de color, sin bento porque sí.** Íconos = SVG inline geométricos de trazo a tamaño de ícono real (los únicos SVG "imagen" son los diagramas técnicos, que el skill permite como data viz). Esquinas rectas en todo. Grid de fondo del hero muy tenue con máscara radial — atmósfera, no ruido.

7. **Detalle al 120% / resto al 80%:** el comparador antes/después es la pieza donde concentré el esfuerzo (SVG técnicos detallados con etiquetas mono, slider sincronizado, deltas de specs debajo). El resto mantiene un 80% sólido y consistente.

## Supuestos

- Audiencia: dueños de autos clásicos / entusiastas / flotas que quieren electrificar sin comprar auto nuevo. Decisión de alto ticket → la página prioriza confianza de ingeniería sobre "startup juguetona".
- Acción de conversión objetivo: agendar diagnóstico (formulario de contacto, fase 01 del proceso).
- Datos de empresa (años, # de conversiones): no inventados. Ubicación, teléfono y correo son placeholders evidentes (`+52 442 000 0000`, `hola@voltswap.mx`).
- Idioma: español de México (`lang="es-MX"`), tono profesional neutro.

## Fricción notable

- El skill está casi todo orientado a slides / animaciones / video / prototipos de App / PPTX. La parte aplicable a "sitio web de una página estática" es la **filosofía** (anti-slop, sistema antes de ejecutar, placeholder honesto, variations) más que un pipeline concreto. No hay un "website builder" paso a paso; tomé la filosofía y el ejemplo de showcase como guía.
- El workflow ideal de huashu es iterativo con el manager (mostrar Pass 1, esperar feedback, etc.). En aislamiento sin usuario, comprimí los passes en una sola entrega pero **conservé el espíritu del Pass 1**: los supuestos y el razonamiento quedan escritos como comentario en la cabecera del HTML, que es justo lo que el workflow pide ("si ves que la dirección está mal, ahora es el momento más barato de cambiarla").
- `SKILL.md` excede el límite de tokens de lectura de una sola pasada; lo leí en tres tramos.

## Caveats / next steps

- El formulario no envía a ningún backend (es estático); al enviar muestra confirmación de demo. Conectar a un endpoint real o servicio de formularios.
- Ubicación/teléfono/correo son placeholders — reemplazar con datos reales.
- Si hubiera marca real, tocaría correr el protocolo de activos: logo real, color real, foto/render reales. Aquí la identidad es un supuesto declarado.
