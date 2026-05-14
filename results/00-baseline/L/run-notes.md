# VoltSwap — Notas de diseño (00-baseline / L)

## Enfoque general
Grupo de control: sin metodología externa, solo criterio propio. Un solo archivo `index.html` autocontenido, sin build step, sin dependencias JS (vanilla). Fuentes via Google Fonts CDN.

## Decisiones de diseño clave

- **Paleta.** Grises grafito (`#0e1113` → `#3a4248`) como base oscura, acento cian/verde-azulado (`#21e6c1`). Tema oscuro porque transmite "ingeniería" y hace que el acento eléctrico brille sin saturar. Amarillo ámbar (`#ffd166`) como acento terciario muy puntual (estrellas, tag Performance) para no depender de un solo color.
- **Tipografía.** `Sora` para títulos (geométrica, técnica pero con carácter) e `Inter` para cuerpo (legibilidad alta). Refuerza el binomio "técnico + cercano".
- **Hero.** Ilustración SVG inline de un auto clásico con celdas de batería bajo el piso y badge de rayo — comunica el "swap" sin necesidad de fotos. Stats de prueba social inmediata (conversiones, autonomía, garantía). CTA principal "Cotiza tu conversión" verbatim del prompt, repetido en header, hero y banda CTA final.
- **Certeza.** Trust strip bajo el hero, rangos de precio explícitos en tabla, nota de "sin sorpresas", testimonios con auto + paquete específico, FAQ que ataca las 4 objeciones pedidas (garantía, legalidad/homologación, mantenimiento, repuestos). El tono busca generar certeza con datos concretos, no adjetivos.
- **Proceso.** 5 pasos como lista ordenada `<ol>` (semántica correcta), con flechas conectoras en desktop que desaparecen en mobile.
- **Paquetes.** 3 niveles diferenciados por kWh y autonomía como pide el prompt. "Range" destacado como "más elegido" (el patrón clásico de pricing de 3 columnas: el del medio gana).
- **Galería antes/después.** Cada caso es un split de dos imágenes (placehold.co) con tags "Antes/Después" y specs reales. El "después" tiene más saturación, el "antes" desaturado — microdiferencia visual que refuerza la narrativa.

## Microinteracciones
- Hover: lift en cards (translateY), iconos que escalan/rotan, subrayado animado en nav, flecha que se desplaza en botones, escala en imágenes de galería.
- Scroll: header gana borde/opacidad, reveal progresivo de secciones con `IntersectionObserver` y delays escalonados.
- Pulso en el dot del badge del hero.
- FAQ con comportamiento de acordeón (abrir uno cierra los demás) usando `<details>` nativo.

## Accesibilidad (AA)
- Skip link al contenido principal.
- `:focus-visible` con outline cian de 3px en todos los interactivos.
- Contraste: texto cuerpo `#aab3b9`/`#d6dcdf` sobre grafito oscuro pasa AA; cian sobre oscuro y grafito-900 sobre cian (botones) también.
- Semántica: `<header>`, `<main>`, `<section>` con `aria-labelledby`, `<nav>` etiquetadas, `<ol>` para el proceso, `<table>` con `<caption>`/`<th scope>`, `<details>/<summary>` nativos, `<figure>/<figcaption>/<blockquote>` para testimonios.
- `aria-expanded`/`aria-controls` en el toggle de menú móvil.
- SVGs decorativos con `aria-hidden`, SVG informativo del hero con `role="img"` + `aria-label`, imágenes con `alt` descriptivo.
- `prefers-reduced-motion`: desactiva reveals, smooth scroll y animaciones.
- `lang="es-MX"`.

## Justificación de texto
Aplicada la regla global: párrafos de contenido largo (`.prose p`, descripciones, respuestas FAQ) con `text-align: justify` + `text-justify: inter-word` + `hyphens: manual`. UI, headings, labels y botones quedan sin justificar.

## Supuestos
- Ubicación inventada en Monterrey, NL (el prompt pide footer con ubicación pero no la da). Teléfono/email ficticios.
- Precios en MXN, rangos inventados pero plausibles y consistentes entre la sección de paquetes y la tabla de costos.
- "120+ conversiones", garantías de 8 años batería / 3 años resto: inventados como prueba social.
- Sin formulario real de cotización: el CTA abre `mailto:` — un archivo estático no puede procesar formularios y no quería un form falso que no envía.

## Fricción notable
- Equilibrar "premium/oscuro" con contraste AA: hubo que subir varios grises de texto respecto a un primer intento más tenue.
- Sin fotos reales, la galería antes/después depende de placeholders; el SVG del hero compensa la falta de imagen hero de impacto.
- La tabla de costos en mobile se vuelve scroll horizontal (`overflow-x: auto`) — solución pragmática para no romper la comparación de columnas en pantallas chicas.
