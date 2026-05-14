# run-notes — 01-design-md / M

## Archivos del modelo que leí

- `_models/design.md/docs/spec.md` — especificación completa del formato DESIGN.md:
  estructura (YAML front matter + cuerpo markdown), schema de tokens (colors,
  typography, rounded, spacing, components), orden obligatorio de secciones
  (Overview → Colors → Typography → Layout → Elevation & Depth → Shapes →
  Components → Do's and Don'ts), sintaxis de referencias `{path.to.token}`,
  y la tabla de "Consumer Behavior for Unknown Content".
- `_models/design.md/examples/atmospheric-glass/DESIGN.md` — ejemplo real para
  ver el formato en práctica: cómo se escriben los tokens de componentes con
  variantes (`button-primary` / `button-primary-hover`), uso de referencias,
  y el tono de la prosa por sección.
- `_models/design.md/packages/cli/package.json` — para entender el CLI y sus
  scripts (`lint`, `export`, `build`).
- Hojeé `_models/design.md/packages/cli/src/` (estructura de linter: reglas
  como `contrast-ratio`, `missing-primary`, `section-order`, `broken-ref`,
  `orphaned-tokens`) para diseñar el DESIGN.md de forma que pasara esas reglas.

## Scripts que corrí

- `npm --version` → 10.8.2 disponible. `bun` NO disponible.
- Intenté preparar el CLI: el `build` de `packages/cli` usa `bun build`
  explícitamente y `node_modules` no está instalado (sólo hay `bun.lock`, no
  `package-lock.json`). Instalar dependencias + portar el build a npm habría
  costado tiempo significativo con riesgo de fallo.
- Decisión: **salté el paso de CLI** (es opcional según las instrucciones de
  la tarea: "si cuesta tiempo, sáltalo"). En su lugar validé el DESIGN.md
  manualmente contra la spec y contra las reglas del linter que revisé en el
  código fuente:
  - Orden de secciones correcto.
  - `primary` definido (regla `missing-primary`).
  - >= 9 niveles de tipografía (regla `missing-typography`): definí 11.
  - Todas las referencias `{...}` apuntan a tokens primitivos existentes
    (regla `broken-ref`) — revisado token por token.
  - Sin headings de sección duplicados.
  - Contraste: `on-surface` #0B0E11 sobre `surface` #FFFFFF y `on-tertiary`
    #04210F sobre `tertiary` #1FE07A superan WCAG AA.

## Decisiones de diseño clave

- **Filosofía del modelo**: design.md NO es un skill de estilo; es un formato
  para *documentar* un sistema de diseño. Por eso el flujo fue: (1) escribir
  primero el `DESIGN.md` como fuente de verdad, (2) derivar `index.html`
  estrictamente de esos tokens. Todas las variables CSS en `:root` son copia
  literal de los tokens del front matter.
- **Marca VoltSwap**: taller de conversión EV. Tres atributos a comunicar:
  competencia técnica + energía limpia + confianza premium. Resolví con:
  - Neutros de alto contraste (grafito #0B0E11 / blanco taller #F4F6F5) +
    **un solo acento** verde voltio #1FE07A reservado a acción y al estado
    "Después" / energía activa.
  - Dos tipografías: **Space Grotesk** para lo estructural y numérico
    (titulares, cifras, datos, etiquetas en mayúsculas), **Inter** para texto
    corrido. Refleja "instrumento de medición + lectura serena".
  - Secciones oscuras (`surface-inverse`) para Proceso y paquete destacado:
    contraste dramático que evoca chasis/motor sin estridencia.
- **Componentes**: definí en el DESIGN.md botones (3 variantes + hover), cards
  (normal/inverse/featured), chips (neutro/accent), input-field con foco,
  step-marker y nav-bar. El HTML usa exactamente esos valores.
- **Secciones del prompt**: hero, cómo funciona (4 pasos con step-markers y
  línea guía), servicios/paquetes (3 cards), galería antes/después (4 pares
  con SVG inline gris→verde), precios estimados (3 tiers, "Performance"
  destacado), contacto (info + formulario validado en JS).
- **Imágenes**: cero imágenes locales o remotas. Todo es SVG inline
  (ilustraciones de autos, íconos) y gradientes CSS. El "antes" usa grises
  fríos, el "después" verdes — comunica la conversión visualmente.
- **Tipografía justificada**: apliqué `text-align: justify` con
  `hyphens: manual` sólo a párrafos largos de contenido (clase `.prose`),
  nunca a titulares, etiquetas ni microcopy — conforme a la regla global del
  usuario. `<html lang="es-MX">`.

## Supuestos

- Datos de contacto, precios (MXN) y métricas son ilustrativos/placeholder
  realistas; el prompt pide "precios estimados", así que se etiquetan
  explícitamente como estimaciones no vinculantes.
- Ubicación asumida: Monterrey, MX (mercado plausible para el servicio).
- El formulario no tiene backend: hace una confirmación visual y resetea.

## Fricción notable

- El CLI del modelo está atado a `bun` (el script `build` invoca `bun build`
  directamente) y el repo sólo trae `bun.lock`. Sin bun en el entorno, usar
  el linter/exporter oficial habría requerido instalar bun o reescribir el
  build — desproporcionado para un paso marcado como opcional. Mitigué
  validando a mano contra las reglas del linter leídas en el código fuente.
- La spec deja `components` con "flexibilidad intencional": no hay un set
  cerrado de propiedades, así que elegí nombres de componentes y propiedades
  alineados con el ejemplo `atmospheric-glass` para mantener consistencia.
