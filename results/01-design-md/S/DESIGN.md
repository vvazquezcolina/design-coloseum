---
version: alpha
name: VoltSwap Design System
description: >-
  Sistema de diseño para VoltSwap, un taller de ingeniería que convierte autos
  de combustión interna a 100% eléctricos. La identidad combina la solidez de un
  taller mecánico serio con la limpieza y energía de la movilidad eléctrica.
colors:
  surface: "#13161B"
  surface-dim: "#0E1014"
  surface-bright: "#1C2027"
  surface-container-low: "#171A20"
  surface-container: "#1C2027"
  surface-container-high: "#242931"
  surface-container-highest: "#2E343D"
  on-surface: "#EEF1F4"
  on-surface-variant: "#A7B0BB"
  outline: "#3A4250"
  primary: "#2CE6C8"
  on-primary: "#062B25"
  primary-container: "#0F4F45"
  on-primary-container: "#9DF4E6"
  primary-dim: "#1FB7A0"
  secondary: "#5A6675"
  on-secondary: "#EEF1F4"
  secondary-container: "#262C35"
  on-secondary-container: "#C3CCD7"
  tertiary: "#F2B53C"
  on-tertiary: "#3A2A05"
  outline-line: "#333A44"
  outline-variant: "#272D36"
  inverse-surface: "#EEF1F4"
  inverse-on-surface: "#13161B"
  success: "#3FD07A"
  error: "#FF6B6B"
typography:
  display:
    fontFamily: Space Grotesk
    fontSize: 64px
    fontWeight: "700"
    lineHeight: 1.05
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 40px
    fontWeight: "600"
    lineHeight: 1.12
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 28px
    fontWeight: "600"
    lineHeight: 1.2
    letterSpacing: -0.01em
  title-lg:
    fontFamily: Space Grotesk
    fontSize: 20px
    fontWeight: "600"
    lineHeight: 1.3
    letterSpacing: 0em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: "400"
    lineHeight: 1.6
    letterSpacing: 0em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: "400"
    lineHeight: 1.65
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: "400"
    lineHeight: 1.5
    letterSpacing: 0em
  label-lg:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: "600"
    lineHeight: 1
    letterSpacing: 0em
  label-caps:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: "600"
    lineHeight: 1
    letterSpacing: 0.14em
  data:
    fontFamily: Space Grotesk
    fontSize: 44px
    fontWeight: "700"
    lineHeight: 1
    letterSpacing: -0.02em
rounded:
  none: 0px
  sm: 4px
  md: 8px
  lg: 14px
  xl: 24px
  full: 9999px
spacing:
  unit: 8px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 32px
  xl: 64px
  xxl: 96px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
  container-max: 1200px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.full}"
    padding: 16px
    height: 52px
  button-primary-hover:
    backgroundColor: "{colors.primary-dim}"
  button-secondary:
    backgroundColor: transparent
    textColor: "{colors.on-surface}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.full}"
    padding: 16px
    height: 52px
  button-secondary-hover:
    backgroundColor: "{colors.surface-container-high}"
  card:
    backgroundColor: "{colors.surface-container}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.lg}"
    padding: "{spacing.gutter}"
  card-hover:
    backgroundColor: "{colors.surface-container-high}"
  card-feature:
    backgroundColor: "{colors.surface-container-low}"
    rounded: "{rounded.xl}"
    padding: 32px
  chip:
    backgroundColor: "{colors.surface-container-high}"
    textColor: "{colors.on-surface-variant}"
    typography: "{typography.label-caps}"
    rounded: "{rounded.full}"
    padding: 8px
  chip-accent:
    backgroundColor: "{colors.primary-container}"
    textColor: "{colors.on-primary-container}"
  input-field:
    backgroundColor: "{colors.surface-dim}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 14px
  input-field-focus:
    backgroundColor: "{colors.surface-container-low}"
  nav-link:
    textColor: "{colors.on-surface-variant}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.sm}"
  nav-link-hover:
    textColor: "{colors.on-surface}"
  stat-value:
    textColor: "{colors.primary}"
    typography: "{typography.data}"
---

# VoltSwap Design System

## Overview

VoltSwap es un taller de ingeniería que electrifica autos de combustión interna:
conserva la carrocería y el carácter del auto, reemplaza el tren motriz por un
sistema 100% eléctrico. La marca debe transmitir **competencia técnica** y
**confianza**, sin caer en lo frío ni en lo genérico de la tecnología.

El sistema adopta una estética de **"taller oscuro de precisión"**: fondos
grafito profundos —como el piso de un taller bien iluminado de noche— sobre los
que destaca un único acento eléctrico cian-verde. La sensación buscada es la de
un proyecto serio de ingeniería: ordenado, denso en datos cuando hace falta, y
con espacio para respirar. El público son dueños de autos clásicos y entusiastas
eco-conscientes de 30 a 55 años; el tono visual es sobrio y aspiracional, nunca
infantil ni estridente.

## Colors

La paleta se ancla en neutrales grafito de alto contraste con un solo acento
energético.

- **Surface (#13161B):** Grafito casi negro, base de todas las pantallas.
  Evoca el taller de noche y hace que el acento eléctrico vibre.
- **Surface Containers (#171A20 → #2E343D):** Una escala tonal de grises azulados
  que construye jerarquía por capas en lugar de por sombras pesadas.
- **Primary (#2CE6C8):** Cian-verde eléctrico. Es la "corriente" de la marca:
  se usa exclusivamente para la acción más importante de cada pantalla, datos
  clave y acentos puntuales. Nunca como color de fondo de áreas grandes.
- **Primary Container (#0F4F45):** Verde profundo para chips y realces suaves
  donde el acento puro sería demasiado intenso.
- **Secondary (#5A6675):** Gris azulado utilitario para bordes, metadatos y
  elementos de soporte.
- **Tertiary (#F2B53C):** Ámbar cálido, usado con moderación para señales de
  proceso o pasos numerados; aporta el matiz "mecánico" del taller.
- **On-surface (#EEF1F4 / #A7B0BB):** Texto principal casi blanco y texto
  secundario gris claro, ambos con contraste AA sobre los surfaces oscuros.

## Typography

Estrategia de dos familias que equilibra carácter técnico con legibilidad.

- **Space Grotesk** es la voz de la ingeniería de VoltSwap: geométrica y con
  detalles técnicos. Se usa en todos los titulares, etiquetas en mayúsculas y
  cifras de datos (`data`, `stat-value`). Los titulares grandes llevan tracking
  negativo para sentirse "ensamblados" y sólidos.
- **Inter** sostiene el cuerpo de texto y los párrafos largos: neutra y muy
  legible incluso en tamaños pequeños sobre fondo oscuro.
- Las etiquetas `label-caps` van siempre en mayúsculas con tracking amplio
  (0.14em) para leerse como nomenclatura de taller.

## Layout

El layout usa un modelo **fluido en mobile** y un **grid de ancho máximo fijo**
de 1200px en desktop, con márgenes generosos (64px) que aíslan el contenido.

El ritmo se gobierna con una base de 8px. Los grupos de contenido relacionados
se agrupan en tarjetas con padding interno amplio (24–32px) y se separan entre
sí con márgenes externos grandes (64–96px) para crear "islas" claras de
información. Mobile-first: una sola columna que escala a 2–3 columnas en
secciones de paquetes y pasos del proceso.

## Elevation & Depth

La profundidad se logra con **capas tonales**, no con sombras pesadas. El fondo
es el `surface` más oscuro; las tarjetas suben en la escala de
`surface-container`. Una superficie más clara = más cerca del usuario.

- **Nivel 1:** Fondo `surface`.
- **Nivel 2:** Tarjetas en `surface-container`, definidas con un borde de 1px
  en `outline-variant`.
- **Nivel 3 (interactivo):** Al hover, la tarjeta sube a `surface-container-high`
  y su borde toma un tinte del `primary`, simulando que la corriente la activa.

## Shapes

El lenguaje de forma es **"suave-técnico"**. Las tarjetas y contenedores usan
`rounded-lg` (14px) y los contenedores destacados `rounded-xl` (24px). Los
botones y chips son completamente redondeados (`rounded-full`) para sentirse
como controles físicos. Los inputs usan `rounded-md` (8px), un radio mínimo que
los mantiene precisos y "ingenieriles".

## Components

### Botones

El botón primario usa el `primary` cian-verde con texto oscuro `on-primary`,
forma de píldora y `label-lg` en Inter; en hover se atenúa a `primary-dim`. El
botón secundario es transparente con texto `on-surface` y en hover gana un
fondo `surface-container-high`. Solo un botón primario por sección.

### Tarjetas

Las tarjetas base parten de `surface-container` con borde sutil; las de tipo
`card-feature` (paquetes, casos antes/después) usan `surface-container-low` y
`rounded-xl`. En hover suben una capa tonal.

### Chips

Los chips comunican etiquetas y categorías en `label-caps`. La variante
`chip-accent` usa `primary-container` para destacar atributos clave como la
capacidad de batería.

### Inputs

Los campos de formulario se anclan en el `surface-dim` más oscuro para dar
máximo contraste al texto ingresado; el foco aclara el fondo a
`surface-container-low` y muestra un anillo `primary` visible.

## Do's and Don'ts

- Usa el color `primary` solo para la acción más importante por pantalla, datos
  clave y acentos puntuales — nunca como fondo de áreas grandes.
- Mantén contraste WCAG AA: texto normal 4.5:1, texto grande 3:1.
- Construye jerarquía con la escala de `surface-container`, no con sombras
  pesadas de color.
- No mezcles más de dos familias tipográficas: Space Grotesk para titulares y
  datos, Inter para cuerpo.
- No uses el ámbar `tertiary` para acciones; es solo señalética de proceso.
- Conserva el foco visible en todos los elementos interactivos (anillo `primary`).
