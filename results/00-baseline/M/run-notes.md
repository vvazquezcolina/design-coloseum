# VoltSwap — Notas de diseño (00-baseline)

## Enfoque general
Landing en un solo archivo HTML autocontenido, sin build step. Solo dependencia externa: Google Fonts (Sora para titulares, Inter para texto). Todo el resto es CSS y JS inline.

## Decisiones de diseño clave

- **Paleta dark + acento "volt".** Un taller de conversión EV vive entre "auto/mecánica" (oscuro, técnico) y "energía limpia" (verde eléctrico). Elegí fondo casi negro azulado con un verde `#4ade80` como acento principal y un azul eléctrico secundario. El dark mode comunica modernidad y deja respirar a los gradientes de "energía".
- **Sin imágenes reales.** En vez de placeholders genéricos de placehold.co, dibujé ilustraciones SVG inline de autos (silueta) tanto para el hero como para la galería. Da identidad propia, carga instantánea y control total del color. El "antes" usa tonos ámbar (gasolina) y el "después" verde/azul (eléctrico).
- **Hero con tarjeta de specs.** En lugar de una foto, el hero muestra una "ficha técnica" del auto convertido (autonomía, 0-100, costo/100km). Refuerza el ángulo de confianza/ingeniería que pedía el prompt.
- **Galería antes/después interactiva.** Slider arrastrable real (mouse + touch) con clip-path. Es el componente más memorable y encaja literal con "galería antes/después".
- **Proceso en 4 pasos** con numeración y tiempos estimados por etapa — transparencia = confianza.
- **3 paquetes** (Urbano / Performance / Heritage) con el del medio destacado, patrón de pricing reconocible. Heritage cubre el caso de autos clásicos, que es un nicho real y atractivo de la conversión EV.
- **Tabla de precios estimados** separada de los paquetes: rangos por tipo de vehículo, con nota de letra chica honesta sobre qué no incluye. El prompt pedía "precios estimados", no precios cerrados.
- **Formulario de contacto funcional** en front-end (validación nativa + estado de éxito), con datos de contacto reales-plausibles al lado.

## Supuestos
- Mercado mexicano: precios en MXN, ubicación en Monterrey, español mexicano (`lang="es-MX"`), teléfono +52.
- Cifras (autonomías, precios, tiempos, "+180 conversiones") son inventadas pero plausibles; en producción se reemplazan con datos reales.
- No hay backend: el form solo simula el envío.

## Justificación de texto
Apliqué `text-align: justify` con `text-justify: inter-word` y `hyphens: manual` solo donde tendría sentido (párrafos largos), pero la mayoría de los bloques de esta landing son copy de UI corto (leads, descripciones de cards, microcopy) que NO se justifican según la regla — se dejaron en `left/start` por defecto. No hubo bloques de texto corrido suficientemente largos para justificar, así que se mantuvo el default del navegador.

## Fricción notable
- Equilibrar "moderno/dark" sin caer en cliché de startup genérica: lo resolví con las ilustraciones SVG de autos, que anclan el sitio al rubro automotriz.
- El slider antes/después necesitó manejar tanto `clip-path` inicial en CSS como recálculo en JS; cuidé que el estado inicial (50%) se vea bien aunque el JS no corra.
- Sin imágenes reales, transmitir "confianza" recae en copy (garantías, proceso transparente, specs, nota de precios honesta) y en jerarquía visual limpia.
