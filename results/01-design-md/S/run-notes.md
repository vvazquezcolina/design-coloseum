# run-notes — 01-design-md / Nivel S

## Modelo asignado
`_models/design.md/` — especificación de formato + CLI para *documentar* sistemas
de diseño (formato DESIGN.md). No es un skill de estilo: define cómo escribir
tokens de diseño legibles por humanos y máquinas. El flujo del brief: (1) escribir
un `DESIGN.md` con tokens para VoltSwap siguiendo la spec, (2) opcional lint/export
con el CLI, (3) construir `index.html` estrictamente a partir de esos tokens.

## Prompt usado (verbatim, nivel S)
> Diseñame una web sobre conversión de autos de combustión interna a eléctricos.

Como es el prompt corto y no nombra la marca, se adoptó la marca ficticia
**VoltSwap** que el brief del modelo 01-design-md indica explícitamente para el
`DESIGN.md`. Contenido del sitio en español (es-MX).

## Archivos del skill leídos
- `_models/design.md/docs/spec.md` — spec completa del formato DESIGN.md:
  frontmatter YAML con tokens (`colors`, `typography`, `rounded`, `spacing`,
  `components`), orden de secciones del cuerpo markdown (Overview, Colors,
  Typography, Layout, Elevation & Depth, Shapes, Components, Do's and Don'ts),
  sintaxis de referencias `{path.to.token}`, y comportamiento ante contenido
  desconocido.
- `_models/design.md/examples/totality-festival/DESIGN.md` — ejemplo completo
  para ver el formato aplicado (escala de `surface-container`, estrategia de dos
  tipografías, tokens de componentes con variantes `-hover`).
- Listado de `_models/design.md/examples/` y `packages/cli/` para ubicar tooling.
- `_models/design.md/packages/cli/package.json` — para evaluar el CLI.

## Scripts / CLI
- **CLI no ejecutado.** El paquete `@google/design.md` no trae `dist/` compilado;
  su build requiere `bun` (`bun build ...`) y `bun` no está disponible en el
  entorno (`bun not found`; sí hay `node` y `npm`). El brief marca el paso del
  CLI como **opcional** ("si cuesta tiempo, sáltalo"), así que se omitió el
  lint/export para no gastar tiempo en instalar/compilar la toolchain.
- Mitigación: el `DESIGN.md` se redactó a mano siguiendo la spec al pie de la
  letra (orden de secciones, esquema de tokens, tipos Dimension/Color, sintaxis
  de referencias). Se hizo una autorrevisión y se corrigió un valor de color
  inválido detectado antes de cerrar (`outline` tenía un typo `#3A4estimado`,
  corregido a `#3A4250`) — exactamente el tipo de error que el linter atraparía.

## Decisiones de diseño clave
- **Identidad "taller oscuro de precisión":** base de grises grafito
  (`surface #13161B` + escala `surface-container`) con un único acento eléctrico
  cian-verde (`primary #2CE6C8`). Encaja con el dominio (electrificación de autos)
  y con la guía de la spec de construir jerarquía con capas tonales en vez de
  sombras pesadas de color.
- **Dos tipografías** (patrón del ejemplo totality-festival): Space Grotesk para
  titulares, etiquetas en mayúsculas y cifras de datos; Inter para cuerpo. Vía
  Google Fonts CDN (permitido por el contrato).
- **Tokens → CSS custom properties 1:1.** Cada token del frontmatter de
  `DESIGN.md` se materializó como una variable CSS en `:root` con el mismo nombre
  (`--color-*`, `--rounded-*`, `--space-*`, familias tipográficas). Las clases
  `.t-*` implementan los tokens de `typography`; `.btn`, `.card`, `.chip`,
  `input` implementan los tokens de `components` incluyendo variantes `-hover` /
  `-focus`. El `index.html` no introduce colores, radios ni escalas fuera del
  `DESIGN.md`.
- **Escala tipográfica responsive:** los tokens definen el tamaño desktop; en
  mobile se reduce `display`/`headline-lg` y se vuelve al token completo en
  breakpoints ≥720px / ≥1024px. Mobile-first.
- **Secciones del sitio:** header sticky, hero con ilustración SVG inline + tira
  de stats, propuesta de valor, proceso en 5 pasos, 3 paquetes (City/Range/
  Performance), galería antes/después con tabs accesibles, costos y tiempos, FAQ
  con `<details>`, contacto con formulario + datos del taller, footer.
- **Aplicación de los Do's & Don'ts del propio DESIGN.md:** `primary` solo en la
  acción más importante por sección y en datos clave; jerarquía por escala de
  `surface-container`; máximo dos familias tipográficas; `tertiary` ámbar solo
  como señalética de proceso (números de paso), nunca en acciones; foco visible
  con anillo `primary` en todos los interactivos.

## Supuestos
- Marca = VoltSwap (indicado por el bloque del modelo en el brief).
- Datos de contacto, precios, autonomías y casos son ficticios y de demostración;
  se marcó como tal en el footer.
- Sin build step: un solo `index.html` autocontenido, CSS y JS inline, solo CDN
  de fuentes. Imágenes resueltas con gradientes CSS y SVG inline (sin assets
  locales ni remotos).

## Fricción notable con este modelo
- design.md es un formato de *documentación*, no una guía estética: no prescribe
  qué se ve bien, solo cómo registrar las decisiones. El criterio visual concreto
  (paleta, personalidad, layout) lo aporta el diseñador; el modelo aporta rigor y
  trazabilidad token-a-implementación.
- El CLI sería el principal valor diferenciador (lint + export a Tailwind/JSON),
  pero no se pudo correr por falta de `bun` y por venir sin `dist`. Quedó como
  deuda; se compensó con redacción manual cuidada y autorrevisión de tokens.
- Ventaja real percibida: tener el `DESIGN.md` como fuente de verdad hizo que
  construir el `index.html` fuera mecánico y consistente — cero colores "sueltos"
  y cambios globales triviales vía variables CSS.

## Entregables en esta carpeta
- `DESIGN.md` — sistema de diseño de VoltSwap (frontmatter de tokens + cuerpo).
- `index.html` — sitio autocontenido construido a partir de esos tokens.
- `run-notes.md` — este archivo.
