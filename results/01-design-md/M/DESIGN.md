---
version: alpha
name: VoltSwap — Electric Conversion Workshop
description: >-
  Sistema de diseño para VoltSwap, un taller que convierte autos de combustión
  interna a 100% eléctricos. Identidad técnica, moderna y confiable: ingeniería
  visible, energía contenida y acabado premium de concesionaria.
colors:
  primary: "#0B0E11"
  secondary: "#5B6470"
  tertiary: "#1FE07A"
  tertiary-dim: "#16B863"
  neutral: "#F4F6F5"
  surface: "#FFFFFF"
  surface-raised: "#FBFCFC"
  surface-inverse: "#13181D"
  surface-inverse-raised: "#1B222A"
  on-surface: "#0B0E11"
  on-surface-variant: "#5B6470"
  on-surface-inverse: "#EAEEEC"
  on-surface-inverse-variant: "#9AA4AE"
  outline: "#D9DEDC"
  outline-strong: "#B7BFBC"
  outline-inverse: "#2A333C"
  voltage: "#3DB6FF"
  warning: "#F5A623"
  error: "#E5484D"
  on-tertiary: "#04210F"
typography:
  display-lg:
    fontFamily: Space Grotesk
    fontSize: 72px
    fontWeight: 600
    lineHeight: 1.04
    letterSpacing: -0.03em
  display-md:
    fontFamily: Space Grotesk
    fontSize: 52px
    fontWeight: 600
    lineHeight: 1.06
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 34px
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.6
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.65
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.55
  label-lg:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: 600
    lineHeight: 1.2
  label-md:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: 600
    lineHeight: 1.2
  label-caps:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1
    letterSpacing: 0.16em
  data-lg:
    fontFamily: Space Grotesk
    fontSize: 40px
    fontWeight: 600
    lineHeight: 1
    letterSpacing: -0.02em
rounded:
  none: 0px
  sm: 6px
  md: 12px
  lg: 18px
  xl: 28px
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  xxl: 64px
  xxxl: 96px
  gutter: 24px
  margin: 32px
  max-width: 1200px
components:
  button-primary:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.on-tertiary}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.full}"
    height: 52px
    padding: 0 28px
  button-primary-hover:
    backgroundColor: "{colors.tertiary-dim}"
  button-secondary:
    backgroundColor: "{colors.surface-inverse}"
    textColor: "{colors.on-surface-inverse}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.full}"
    height: 52px
    padding: 0 28px
  button-secondary-hover:
    backgroundColor: "{colors.surface-inverse-raised}"
  button-ghost:
    backgroundColor: transparent
    textColor: "{colors.on-surface}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.full}"
    height: 52px
    padding: 0 24px
  button-ghost-hover:
    backgroundColor: "{colors.neutral}"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  card-inverse:
    backgroundColor: "{colors.surface-inverse-raised}"
    textColor: "{colors.on-surface-inverse}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  card-featured:
    backgroundColor: "{colors.surface-inverse}"
    textColor: "{colors.on-surface-inverse}"
    rounded: "{rounded.xl}"
    padding: "{spacing.xl}"
  chip:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: 8px 14px
  chip-accent:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.on-tertiary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: 8px 14px
  input-field:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    height: 52px
    padding: 0 16px
  input-field-focus:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
  step-marker:
    backgroundColor: "{colors.surface-inverse}"
    textColor: "{colors.tertiary}"
    typography: "{typography.label-caps}"
    rounded: "{rounded.full}"
    size: 48px
  nav-bar:
    backgroundColor: rgba(255, 255, 255, 0.82)
    textColor: "{colors.on-surface}"
    rounded: "{rounded.none}"
    height: 72px
---

# VoltSwap — Electric Conversion Workshop

## Overview

VoltSwap es un taller de ingeniería que convierte autos de combustión interna a
propulsión 100% eléctrica. El sistema de diseño debe comunicar tres ideas al
mismo tiempo: **competencia técnica**, **energía limpia** y **confianza de
concesionaria premium**.

La personalidad es la de un ingeniero meticuloso, no la de una startup ruidosa.
La interfaz se siente precisa, ordenada y respira: mucho espacio en blanco,
datos presentados con claridad de instrumento de medición, y un único acento
verde-voltio que aparece sólo donde hay acción o energía. El público objetivo
son dueños de autos clásicos o de uso diario que quieren electrificar su
vehículo sin perder carácter: personas que valoran la transparencia en el
proceso y en el precio.

La respuesta emocional buscada es **tranquilidad informada**: el usuario debe
sentir que está frente a especialistas que documentan cada paso. El modo claro
domina el sitio (taller limpio, luz de día); las secciones de mayor peso
narrativo —proceso y paquete destacado— usan superficies oscuras para evocar el
chasis y el motor, creando contraste dramático sin estridencia.

## Colors

La paleta se construye sobre neutros de alto contraste y un solo acento
electrizante. El verde no se diluye: es el voltaje del sistema.

- **Primary (#0B0E11):** Un negro grafito, casi carbón, usado para titulares,
  texto principal y superficies oscuras de sección. Aporta permanencia y peso
  de ingeniería.
- **Secondary (#5B6470):** Un gris acero para texto de apoyo, metadatos,
  bordes y subtítulos. Es la voz utilitaria del sistema.
- **Tertiary (#1FE07A):** Verde voltio, el único motor de interacción y
  energía. Se reserva para acciones primarias, indicadores de "después" en la
  galería y destellos de dato. `tertiary-dim` (#16B863) es su estado hover.
- **Neutral (#F4F6F5):** Un blanco taller, ligeramente frío, que funda el
  fondo de página y los chips inertes.
- **Surface (#FFFFFF):** Blanco puro para tarjetas elevadas sobre el neutro.
- **Surface Inverse (#13181D):** El grafito de las secciones de proceso y del
  paquete destacado; sobre él el texto usa `on-surface-inverse` (#EAEEEC).
- **Voltage (#3DB6FF):** Azul de diagnóstico, soporte semántico para datos
  secundarios (autonomía, voltaje). Nunca compite con el verde por la acción.
- **Warning (#F5A623) / Error (#E5484D):** Estados semánticos de formulario.

El contraste de `on-surface` sobre `surface` y de `on-tertiary` sobre
`tertiary` supera holgadamente WCAG AA.

## Typography

Dos familias trabajan juntas: **Space Grotesk** para todo lo estructural y
numérico —titulares, marcadores de paso, cifras de precio y datos— porque su
construcción geométrica evoca la precisión de un instrumento. **Inter** para
todo el texto corrido, por su legibilidad serena en párrafos largos.

- **Display y Headline:** Space Grotesk en SemiBold/Medium con tracking
  negativo. Voz institucional, técnica, confiable.
- **Body:** Inter Regular, 16–18px, interlineado generoso (1.6+) para que la
  explicación del proceso se lea sin fatiga.
- **Label-caps:** Space Grotesk en mayúsculas con tracking amplio (0.16em)
  para etiquetas de sección, kickers y marcadores de paso. Evoca la
  rotulación de un tablero.
- **Data:** `data-lg` y `display` numéricos comparten Space Grotesk para que
  precios y métricas se lean como lecturas de medidor.

## Layout

El layout sigue un **grid de ancho máximo fijo** de 1200px, centrado, con
márgenes laterales de 32px que colapsan en móvil. Dentro, las secciones se
ordenan en una sola columna de bloques generosos; las rejillas internas
(servicios, pasos, galería) usan de 2 a 4 columnas con gutter de 24px.

El ritmo vertical se gobierna por una **escala base de 8px**, con medio paso de
4px para microajustes. La separación entre secciones mayores es de 96px
(`xxxl`) en escritorio para dar aire de taller. Las tarjetas agrupan información
relacionada con padding interno de 24–40px según su jerarquía.

La navegación es una barra fija translúcida de 72px que se asienta sobre el
contenido al hacer scroll.

## Elevation & Depth

La profundidad se logra por **capas tonales y bordes**, no por sombras pesadas.

- **Nivel 0 (fondo):** `neutral` (#F4F6F5), el piso del taller.
- **Nivel 1 (tarjeta):** `surface` blanco con borde de 1px en `outline`
  (#D9DEDC) y una sombra suavísima (`0 1px 3px rgba(11,14,17,0.06)`).
- **Nivel 2 (tarjeta elevada / hover):** misma superficie, sombra ampliada
  (`0 12px 32px rgba(11,14,17,0.10)`) y borde en `outline-strong`.
- **Secciones oscuras:** `surface-inverse` no usa sombra; se separa del resto
  por contraste tonal puro y bordes en `outline-inverse`.

El acento verde puede emitir un halo sutil (`0 0 0 4px rgba(31,224,122,0.18)`)
en estados de foco e indicadores de "energía activa".

## Shapes

El lenguaje formal combina **rectángulos de esquina suave** para contenedores
con **píldoras completas** para todo lo accionable —botones y chips—,
estableciendo una distinción clara: lo redondo se toca, lo suave-rectangular se
lee.

- **Tarjetas estándar:** radio `lg` (18px).
- **Tarjetas destacadas / hero:** radio `xl` (28px).
- **Inputs:** radio `md` (12px), suficientemente sobrio para un formulario.
- **Botones y chips:** radio `full`, píldora completa.
- **Marcadores de paso:** círculo perfecto de 48px.

Los íconos son lineales, trazo de 2px con terminaciones redondeadas, alineados
al peso de los bordes de 1px.

## Components

### Botones

Tres variantes. **Primary** es la píldora verde voltio sobre texto grafito
oscuro: una sola por vista, reservada a "Agendar conversión". **Secondary** es
la píldora grafito para acciones de apoyo de alto compromiso. **Ghost** es
transparente con hover neutro para navegación y acciones terciarias. Todos
miden 52px de alto y usan `label-lg`.

### Tarjetas

`card` para servicios y bloques informativos sobre fondo claro. `card-inverse`
y `card-featured` para el paquete destacado y los pasos del proceso sobre fondo
oscuro: el paquete recomendado se eleva con radio `xl`, padding `xl` y un chip
de acento "Recomendado".

### Chips

`chip` neutro para etiquetas inertes (tags de galería, specs). `chip-accent`
verde para destacar el estado "Después" y el paquete recomendado.

### Marcadores de paso

Círculo grafito de 48px con número/etiqueta en verde (`label-caps`). Conectan
los cuatro pasos del proceso de conversión con una línea guía vertical.

### Campos de formulario

`input-field` blanco con borde `outline`, radio `md`, alto de 52px. En foco, el
borde pasa a `tertiary` y aparece el halo verde de 4px. Los estados de error
usan el color `error` en borde y texto de ayuda.

### Barra de navegación

Translúcida (`rgba(255,255,255,0.82)`) con `backdrop-filter: blur(12px)`,
72px de alto, borde inferior de 1px en `outline`. El logotipo a la izquierda,
enlaces ancla al centro, botón primary a la derecha.

## Do's and Don'ts

- **Do** usar el verde voltio sólo para una acción primaria por vista y para
  marcar el estado "Después" / "energía activa".
- **Don't** rellenar superficies grandes con verde; pierde su carga eléctrica.
- **Do** mantener Space Grotesk para cifras y etiquetas, Inter para párrafos.
- **Don't** mezclar más de dos familias tipográficas en una misma pantalla.
- **Do** apoyar la profundidad en bordes de 1px y capas tonales.
- **Don't** usar sombras oscuras y pesadas; rompen la sensación de taller
  limpio y luminoso.
- **Do** mantener el grid de 1200px y la escala de 8px en todos los bloques.
- **Don't** mezclar esquinas de píldora y esquinas suaves en el mismo tipo de
  elemento: lo accionable es píldora, lo contenedor es suave-rectangular.
- **Do** justificar los párrafos largos de contenido para un acabado editorial
  cuidado; **don't** justificar titulares, etiquetas ni microcopy.
- **Do** preservar contraste WCAG AA (4.5:1) en todo texto sobre su superficie.
