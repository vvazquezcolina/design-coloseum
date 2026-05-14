# DESIGN.md — VoltSwap

Sistema de diseño para la web de VoltSwap. Register: **brand**. Construido en CSS
plano, tokens en OKLCH, sin frameworks.

## Color strategy

**Committed.** El color que carga la marca es un **naranja de señal de taller**
(pintura de herramienta, cinta de precaución, marca de torque). No es decorativo:
marca acción, calor y trabajo manual. El "eléctrico" se dice con un **teal funcional
y sobrio**, usado solo como marcador de estado (lo que ya está electrificado, datos
en vivo), nunca como fondo ni como glow. Se evita a propósito el cian-neón por
reflejo de categoría EV y el negro-cripto.

Base: neutros cálidos tintados hacia el naranja de marca (concreto, papel, grafito).
Nunca `#000` ni `#fff`.

## Color tokens (OKLCH)

```
--paper        oklch(0.967 0.006 70)    /* fondo principal, papel de taller cálido */
--paper-sunk   oklch(0.938 0.008 68)    /* secciones hundidas, bloques de datos */
--ink          oklch(0.225 0.012 55)    /* texto de cuerpo, casi negro tintado */
--graphite     oklch(0.375 0.013 58)    /* subtítulos, texto de apoyo grande */
--ash          oklch(0.565 0.012 60)    /* etiquetas, captions, meta */
--hairline     oklch(0.875 0.008 65)    /* bordes finos, reglas */
--steel        oklch(0.305 0.018 250)   /* superficie oscura puntual (footer, hero panel) */
--steel-deep   oklch(0.235 0.020 252)   /* footer profundo */

--torch        oklch(0.685 0.185 47)    /* NARANJA de marca — acento que carga */
--torch-hot    oklch(0.620 0.195 42)    /* hover/pressed del naranja */
--torch-wash   oklch(0.945 0.040 60)    /* tinte naranja muy claro para fondos */

--volt         oklch(0.760 0.115 195)   /* TEAL funcional — solo estado/datos */
--volt-deep    oklch(0.520 0.085 205)   /* teal sobre fondo claro, texto */
```

Sobre `--steel` el texto va en `--paper`; line-height +0.06 por ser texto claro
sobre oscuro.

## Typography

Procedimiento de selección aplicado. Palabras de voz: preciso, templado, honesto.
Reflejos rechazados (Inter, Space Grotesk, IBM Plex Mono). Objeto físico: el cuaderno
de campo de un ingeniero mecánico + un manual de taller de los 70 + la carátula de un
instrumento de medición.

- **Display / headings — `Archivo`** (con `Archivo` en pesos 600–800, tracking
  ajustado): grotesca robusta, industrial, lee como rótulo de tablero de
  especificaciones. No "designy", sí mecánica.
- **Body — `Hanken Grotesk`**: sans humanista, cálida y muy legible en párrafo largo.
  Da el "templado" sin caer en lo neutro corporativo.
- **Datos / etiquetas técnicas — `JetBrains Mono`**: mono para cifras (kWh, km,
  semanas), códigos de paso y micro-etiquetas. Es la voz del cuaderno de notas. No
  es disfraz: la web ES un documento técnico.

Escala fluida, ratio ≥1.25:

```
--step--1  clamp(0.82rem, 0.80rem + 0.10vw, 0.88rem)
--step-0   clamp(1.00rem, 0.96rem + 0.20vw, 1.10rem)
--step-1   clamp(1.27rem, 1.18rem + 0.45vw, 1.55rem)
--step-2   clamp(1.62rem, 1.45rem + 0.85vw, 2.18rem)
--step-3   clamp(2.05rem, 1.75rem + 1.55vw, 3.05rem)
--step-4   clamp(2.60rem, 2.05rem + 2.75vw, 4.30rem)
--step-5   clamp(3.30rem, 2.40rem + 4.60vw, 6.20rem)
```

Medida de cuerpo: 62–70ch máximo.

## Spacing

Ritmo variable, no padding uniforme. Escala base (rem): `0.25 0.5 0.75 1 1.5 2 3 4 6 8 12`.
Separaciones de sección generosas (`clamp(4rem, 9vw, 8rem)`), agrupaciones internas
apretadas. Contenedor de lectura máx. `72rem`; banda de texto largo máx. `40rem`.

## Radius & elevation

- Radios pequeños y mecánicos: `--r-sm 4px`, `--r-md 8px`, `--r-lg 14px`. Nada
  redondo-blando; esto es metal, no app de salud.
- Elevación por borde + sombra sutil tintada, no por glow. `--shadow-1` y `--shadow-2`
  con tinte cálido. Glassmorphism prohibido.

## Components

- **Kicker técnico**: micro-etiqueta en mono, `--ash`, con un guion corto de color
  `--torch`. Usado con moderación, no encima de cada sección.
- **Bloque de dato**: número grande en `Archivo`, unidad en mono, etiqueta debajo en
  `--ash`. Borde completo `--hairline`, fondo `--paper-sunk`. Nunca side-stripe.
- **Paso de proceso**: número de paso en mono grande tipo sello, título, descripción.
  Conectados por una línea/regla, no por tarjetas idénticas apiladas.
- **Botón primario**: relleno `--torch`, texto `--ink` oscuro (contraste AA verificado),
  radio `--r-sm`. Hover: `--torch-hot` + leve translación. Foco visible: anillo doble.
- **Botón secundario**: borde `--ink`, fondo transparente.
- **Tarjeta de paquete**: solo 3, diferenciadas (la de en medio destacada por fondo
  `--steel`, no por escala desigual accidental).

## Motion

- Reveal de entrada por sección con stagger, `IntersectionObserver`, traslación + fade.
- Curvas ease-out exponenciales. Sin bounce, sin elastic.
- No animar propiedades de layout. Transform y opacity.
- Respeta `prefers-reduced-motion`: todo el movimiento se desactiva, el contenido
  queda visible.
- Microinteracción de marca: en hover sobre datos/pasos, la regla conectora se
  "energiza" con un barrido `--volt` muy breve.

## Accessibility

- Contraste AA en todo texto. `--torch` se usa como fondo con texto `--ink`, no como
  texto pequeño sobre claro.
- Foco visible con anillo de 2px `--volt-deep` + offset.
- Semántica real: `header/main/section/footer`, headings en orden, `nav` con labels.
- Targets táctiles ≥44px.
