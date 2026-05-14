# Run notes — 04-huashu-design · Nivel S

## Prompt usado (verbatim, nivel S)
> Diseñame una web sobre conversión de autos de combustión interna a eléctricos.

## Archivos del skill leídos
- `_models/huashu-design/SKILL.md` — completo (en chino), en dos lecturas por tamaño.
  Núcleo aplicado: filosofía #0–#6, modo Junior Designer, checklist anti-AI-slop,
  modo "Asesor de dirección de diseño" (Fallback) para prompts vagos.
- `_models/huashu-design/references/content-guidelines.md` — lista negra de AI slop,
  reglas de escala/contraste, "CSS神器" (text-wrap, hanging-punctuation, oklch).
- `_models/huashu-design/references/design-styles.md` — librería de 20 filosofías;
  de aquí elegí la dirección #04 Fathom Information Design.
- `_models/huashu-design/references/workflow.md` — flujo Junior Designer (Pass 1–4),
  estructura de assumptions en el header.
- Ignoré, según el brief, todo lo de slides/video/PPTX/voiceover/narration.

## Scripts corridos
- Ninguno de los scripts del skill aplica (son de video/PPTX/TTS — fuera de alcance).
- Verificación propia: chequeo de balance de tags con Node (`details` 5/5,
  `section` 8/8, `lang="es-MX"` presente, 50.2 KB, un solo archivo autocontenido).
  No hay build step ni dependencias locales.

## Decisión de diseño clave: por qué modo Fallback + estilo Fathom
El prompt S es deliberadamente vago: sin marca, sin design system, sin referencia,
sin público. La filosofía huashu dice que hacer hi-fi "por intuición genérica"
produce slop, y que ante ambigüedad se entra al **modo Asesor de dirección**.
Como trabajo en aislamiento (no puedo preguntarle al manager), en vez de quedarme
bloqueado: elegí **una** dirección clara, la justifiqué y la ejecuté a fondo,
dejando los supuestos documentados en el header del `index.html` (Pass 1 del
modo Junior Designer — "corregir barato").

Dirección elegida: **#04 Fathom Information Design** ("cada píxel carga
información"; estética de revista científica + visualización de datos rigurosa).
Es la elección correcta para este tema porque convertir un auto de gasolina a
eléctrico es ante todo un acto de **ingeniería**: el sitio debe explicar el
proceso y los órdenes de magnitud con honestidad, no vender humo. También es la
elección que más se aleja del slop obvio del nicho ("landing de startup EV con
gradiente morado").

## Sistema de diseño
- **Color**: grafito `#14171c` + papel `#f4f3ef` + acero `#5b6470` + UN acento
  eléctrico cian-verdoso `oklch(0.78 0.13 190)`. El acento marca SOLO el flujo de
  energía; el "antes/combustión" usa un ámbar `oklch(0.62 0.16 55)`. Sin gradientes.
- **Tipografía**: Spectral (serif editorial, display) + IBM Plex Sans (cuerpo) +
  IBM Plex Mono (datos / HUD numérico). Ninguna fuente de la lista negra
  (Inter/Roboto/Space Grotesk/Fraunces).
- **Retícula**: contenedor 1180px, baseline 8px, números tabulares alineados a la
  derecha como en una tabla de revista científica.
- **El "detalle al 120%"**: el diagrama de bloques del intercambio de tren motriz
  (sección "Tren motriz") — fondo tinta, dos columnas "se retira / se instala",
  masas tachadas vs. nuevas, animación discreta de flujo de energía. El resto del
  sitio se mantiene al 80% deliberadamente.

## Checklist anti-AI-slop (verificado)
- Sin gradiente morado/rainbow/mesh. Sin emoji como iconografía. Sin tarjeta
  redondeada + border-left de color (uso rejillas de 1px y contraste de fondo).
- **Sin imagery dibujada en SVG**: no dibujé coches. El "antes/después" usa
  *placeholders honestos* etiquetados (rejilla técnica + texto "Fotografía del
  vehículo … 1600×1000") más barras de datos que SÍ son contenido. El corte del
  tren motriz es un diagrama de bloques, no una ilustración.
- **Sin "data slop" ni "quote slop"**: no inventé "10 000 clientes felices" ni
  testimonios. Las cifras son rangos etiquetados como estimaciones de orden de
  magnitud, con tres notas al pie (§1 costo energético, §2 autonomía, §3 costo)
  que explican de qué dependen. El costo se expresa como escala relativa $–$$$$,
  no como precio cerrado.
- `text-wrap: balance/pretty`, `hanging-punctuation`, `oklch()` — los detalles de
  tipografía que huashu llama "impuesto al gusto".
- Justificación de texto largo según la preferencia global del usuario
  (`text-align: justify` + `hyphens: manual`), solo en párrafos de cuerpo; los
  headings, labels y microcopy quedan en `start`.

## Accesibilidad
- `lang="es-MX"`, HTML semántico (`header/main/section/article/figure/footer`,
  `<details>` nativo para el FAQ con acordeón exclusivo).
- Foco visible (`:focus-visible` con outline del acento).
- `prefers-reduced-motion`: desactiva reveal-on-scroll, pulsos y animaciones de
  flujo; el contenido aparece estático.
- Contraste: tinta sobre papel y papel sobre tinta superan AA holgadamente; el
  acento se usa para texto solo en su variante profunda (`oklch(0.55 …)`).

## Microinteracciones
- Reveal-on-scroll discreto (IntersectionObserver, con fallback).
- Hover en pasos del proceso (la barra de progreso se completa), en CTAs
  (elevación + sombra del acento), en filas de tabla y nav.
- FAQ acordeón exclusivo; el signo "+" rota a "×" al abrir.

## Supuestos
- Nivel S no pide la marca ficticia VoltSwap (esa es para M y L), así que el sitio
  usa un título genérico de documento, "Conversión EV", y NO inventa logo,
  testimonios ni datos de un taller concreto. Es una web informativa de una
  página, coherente con un prompt corto y abierto.
- Público asumido: dueños de autos evaluando electrificar + lectores técnicos.

## Caveats para el manager
- Las cifras de kWh, autonomía, costo y tiempo son **órdenes de magnitud
  ilustrativos** típicos del mercado de conversiones, no datos de una operación
  real. Están marcados con § y explicados en notas al pie. Un taller real debe
  sustituirlos por sus propios números.
- El bloque antes/después usa placeholders honestos donde irían fotos reales de
  casos de conversión (la filosofía huashu prefiere un placeholder honesto a un
  SVG dibujado o a una foto de stock decorativa).

## Fricción notable al usar este modelo
- El `SKILL.md` es muy extenso (~26k tokens) y excede el límite de lectura de una
  sola pasada; hubo que leerlo en dos partes.
- El skill está fuertemente orientado a slides/animación/video con voiceover y a
  prototipos de iOS; buena parte de su volumen (scripts, assets de audio,
  pipelines) no aplica a "una web de una página". El brief ya pedía ignorar eso,
  pero implica que el valor real del skill para esta tarea fue su **filosofía**
  (anti-slop, Junior Designer, asesor de dirección) más que su tooling.
- El modelo asume un loop conversacional con el "manager" (checkpoints 🛑 donde
  hay que parar y esperar). En aislamiento eso no es posible; lo adapté volcando
  los assumptions/reasoning al header del HTML, que es justamente el artefacto
  del Pass 1 que huashu pide mostrar.
