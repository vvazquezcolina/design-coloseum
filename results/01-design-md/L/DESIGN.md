---
version: alpha
name: VoltSwap Design System
description: Sistema de diseño para VoltSwap, taller premium de electrificación que convierte autos de combustión interna a 100% eléctricos. Ingeniería seria con trato cercano.
colors:
  primary: "#16E0C8"
  primary-strong: "#0FB8A6"
  primary-soft: "#7DEEE0"
  on-primary: "#04201C"
  surface: "#13161B"
  surface-dim: "#0D0F13"
  surface-bright: "#1E232B"
  surface-container-lowest: "#0A0C0F"
  surface-container-low: "#15191F"
  surface-container: "#1A1F27"
  surface-container-high: "#222831"
  surface-container-highest: "#2C333E"
  on-surface: "#ECEFF3"
  on-surface-variant: "#A6AEBB"
  outline: "#3A434F"
  outline-variant: "#262C35"
  secondary: "#5AA9FF"
  on-secondary: "#04243F"
  tertiary: "#FFC857"
  on-tertiary: "#2E2200"
  success: "#3FD17A"
  on-success: "#04210F"
  error: "#FF6B6B"
  on-error: "#2A0606"
  background: "#0D0F13"
  on-background: "#ECEFF3"
typography:
  display-lg:
    fontFamily: Sora
    fontSize: 60px
    fontWeight: "700"
    lineHeight: 1.05
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Sora
    fontSize: 38px
    fontWeight: "700"
    lineHeight: 1.15
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Sora
    fontSize: 26px
    fontWeight: "600"
    lineHeight: 1.25
    letterSpacing: -0.01em
  title-md:
    fontFamily: Sora
    fontSize: 20px
    fontWeight: "600"
    lineHeight: 1.3
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: "400"
    lineHeight: 1.6
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: "400"
    lineHeight: 1.65
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: "400"
    lineHeight: 1.55
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: "600"
    lineHeight: 1.2
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: "600"
    lineHeight: 1
    letterSpacing: 0.14em
  data-lg:
    fontFamily: JetBrains Mono
    fontSize: 30px
    fontWeight: "700"
    lineHeight: 1.1
    letterSpacing: -0.01em
rounded:
  none: 0px
  sm: 6px
  md: 12px
  lg: 18px
  xl: 28px
  full: 9999px
spacing:
  unit: 8px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  2xl: 64px
  3xl: 96px
  container-padding: 24px
  section-margin: 96px
  card-gap: 24px
  max-width: 1200px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    height: 52px
    padding: 0 28px
  button-primary-hover:
    backgroundColor: "{colors.primary-soft}"
  button-primary-active:
    backgroundColor: "{colors.primary-strong}"
  button-ghost:
    backgroundColor: transparent
    textColor: "{colors.on-surface}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    height: 52px
    padding: 0 24px
  button-ghost-hover:
    backgroundColor: "{colors.surface-container-high}"
  card:
    backgroundColor: "{colors.surface-container}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  card-hover:
    backgroundColor: "{colors.surface-container-high}"
  card-feature:
    backgroundColor: "{colors.surface-container-low}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.xl}"
    padding: "{spacing.xl}"
  pricing-card-highlight:
    backgroundColor: "{colors.surface-container-high}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.xl}"
    padding: "{spacing.xl}"
  chip:
    backgroundColor: "{colors.surface-container-high}"
    textColor: "{colors.primary}"
    typography: "{typography.label-caps}"
    rounded: "{rounded.full}"
    padding: 8px 14px
  step-index:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.data-lg}"
    rounded: "{rounded.full}"
    size: 56px
  input-field:
    backgroundColor: "{colors.surface-container-lowest}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    height: 52px
    padding: 0 16px
  input-field-focus:
    backgroundColor: "{colors.surface-container-low}"
  nav-bar:
    backgroundColor: "{colors.surface-container-low}"
    textColor: "{colors.on-surface}"
    height: 72px
  footer:
    backgroundColor: "{colors.surface-container-lowest}"
    textColor: "{colors.on-surface-variant}"
    padding: "{spacing.2xl}"
---

## Overview

VoltSwap es un taller premium de electrificación: convierte autos de combustión interna a 100% eléctricos sin que el dueño tenga que renunciar al auto que ama. El sistema de diseño debe transmitir **ingeniería seria con trato cercano**: la precisión de un laboratorio mecánico, pero la calidez de un taller donde te explican las cosas mirándote a los ojos.

El público es de 30 a 55 años: dueños de autos clásicos y entusiastas eco-conscientes. Buscan **certeza** — pruebas, números, procesos claros — antes que promesas. Por eso la interfaz se apoya en datos visibles (kWh, autonomía, semanas, costos) tratados con tipografía monoespaciada, como lecturas de un instrumento.

La estética es **grafito técnico**: superficies oscuras escalonadas que evocan metal y taller, iluminadas por un único acento eléctrico cian-verdoso que funciona como "la corriente". El tono es confiable y técnico, nunca frío: hay aire, hay curvas suaves en los contenedores, hay fotografía real de casos. El acento se usa con disciplina — guía la acción, no decora.

## Colors

La paleta se construye sobre **grises grafito** escalonados que dan profundidad sin recurrir a sombras pesadas, más un **acento eléctrico** único.

- **Primary (#16E0C8):** El acento eléctrico cian-verdoso. Es "la corriente" de la marca: se reserva para la acción más importante de cada pantalla (CTA "Cotiza tu conversión"), datos clave y estados de foco. `primary-strong` (#0FB8A6) para el estado activo/pressed y `primary-soft` (#7DEEE0) para hover, garantizando contraste AA sobre superficies oscuras.
- **Surfaces (grafito):** Una escala de seis niveles desde `surface-container-lowest` (#0A0C0F) hasta `surface-container-highest` (#2C333E). La profundidad se logra subiendo de nivel tonal, no con sombras. El fondo de página es `background` (#0D0F13).
- **On-surface (#ECEFF3):** Texto principal, casi blanco con un matiz frío. `on-surface-variant` (#A6AEBB) para texto secundario, metadatos y captions — siempre verificado a 4.5:1 mínimo sobre las superficies en que se usa.
- **Secondary (#5AA9FF):** Azul eléctrico de apoyo para enlaces, etiquetas informativas y acentos secundarios cuando el cian ya está en uso.
- **Tertiary (#FFC857):** Ámbar cálido, usado con moderación para destacar el paquete recomendado y métricas de ahorro.
- **Success (#3FD17A) / Error (#FF6B6B):** Estados semánticos para validación de formularios y badges de estado ("Entregado", "En proceso").
- **Outline (#3A434F):** Bordes de 1px que definen tarjetas e inputs sobre el grafito; `outline-variant` (#262C35) para divisores sutiles.

## Typography

Tres familias, cada una con un rol claro:

- **Sora** — Títulos y displays. Geométrica pero con personalidad; comunica ingeniería moderna. Pesos 600/700, con letter-spacing negativo en tamaños grandes para una voz compacta y segura.
- **Inter** — Texto corrido. Neutral y altamente legible en párrafos largos, FAQs y descripciones; se justifica en bloques de contenido extenso.
- **JetBrains Mono** — Datos e instrumentos. Toda cifra técnica (kWh, km de autonomía, semanas, rangos de precio) y todas las etiquetas en mayúsculas (`label-caps`) usan monoespaciada: evoca la lectura de un tablero y refuerza la certeza.

La escala va de `display-lg` (60px, hero) a `body-sm` (14px). Las etiquetas `label-caps` van en mayúsculas con tracking amplio (0.14em). Nunca más de dos familias compitiendo en un mismo bloque visual.

## Layout

Layout **mobile-first**. Una sola columna fluida en móvil con `container-padding` de 24px en los costados; en desktop, una **rejilla de ancho máximo fijo** de 1200px (`max-width`) centrada.

El ritmo se rige por una **escala base de 8px** (`unit`), con medio paso de 4px (`xs`) para microajustes. Las secciones se separan con `section-margin` (96px en desktop, comprimido proporcionalmente en móvil). Las tarjetas se agrupan en grids con `card-gap` de 24px y se reflujan a una columna por debajo de 768px. El contenido relacionado se contiene en tarjetas con padding interno generoso (`lg`/`xl`).

## Elevation & Depth

La profundidad se consigue con **capas tonales**, no con sombras dramáticas — coherente con la estética de metal mate de taller.

- **Nivel base:** `background` (#0D0F13), con un gradiente radial muy sutil para no ser plano.
- **Nivel tarjeta:** sube a `surface-container` (#1A1F27) con borde `outline` de 1px.
- **Nivel destacado / hover:** sube a `surface-container-high` (#222831).
- **Sombras:** sólo sombras suaves y amplias (`0 12px 32px rgba(0,0,0,0.35)`) en elementos flotantes (nav sticky, tarjeta de precio destacada). Nunca sombras duras.
- **Foco:** anillo visible de 2px en `primary` con offset de 2px — obligatorio en todo elemento interactivo para accesibilidad AA.

## Shapes

Lenguaje de formas **suave-técnico**: esquinas redondeadas que humanizan el grafito sin perder precisión.

- Tarjetas estándar: `rounded-lg` (18px).
- Tarjetas destacadas y secciones contenedoras: `rounded-xl` (28px).
- Botones y chips: `rounded-full` — píldoras, para un tacto cercano y accesible.
- Inputs: `rounded-md` (12px).
- Los índices de paso del proceso son círculos perfectos (`rounded-full`, 56px).

No se mezclan esquinas vivas y redondeadas en un mismo grupo visual.

## Components

### Botones

`button-primary` es una píldora en color `primary` con texto `on-primary`; se reserva para "Cotiza tu conversión" y conversiones clave — una por vista. Hover aclara a `primary-soft`, active oscurece a `primary-strong`. `button-ghost` es transparente con texto `on-surface` para acciones secundarias; hover rellena con `surface-container-high`. Ambos miden 52px de alto para buen objetivo táctil.

### Tarjetas

`card` (superficie `surface-container`, `rounded-lg`, borde `outline`) es el contenedor base de propuestas de valor, pasos y testimonios; en hover sube a `surface-container-high` y se eleva ligeramente. `card-feature` y `pricing-card-highlight` usan `rounded-xl` y más padding; la tarjeta de precio destacada (paquete Range) lleva borde `primary` y badge "Recomendado".

### Chips e índices

`chip` etiqueta secciones y categorías de galería con `label-caps` en `primary`. `step-index` es el círculo numerado del proceso de conversión: fondo `primary`, número en `data-lg` monoespaciado.

### Inputs

`input-field` para el formulario de cotización: fondo `surface-container-lowest`, borde `outline`, `rounded-md`. En foco sube a `surface-container-low` y muestra el anillo de foco `primary`. Labels siempre visibles (nunca solo placeholder), helper text en `body-sm` / `on-surface-variant`, errores en `error`.

### Navegación y footer

`nav-bar` es sticky, 72px, fondo `surface-container-low` con leve blur al hacer scroll. `footer` usa `surface-container-lowest` con texto `on-surface-variant` y aloja ubicación, horarios y contacto.

## Do's and Don'ts

- Do usar `primary` sólo para la acción más importante de cada vista y para datos clave; es la corriente, no la decoración.
- Don't pintar bloques grandes de relleno en `primary` — pierde su poder de guía y baja el contraste.
- Do mostrar siempre cifras técnicas (kWh, autonomía, semanas, precio) en `JetBrains Mono` para reforzar la certeza.
- Do mantener contraste WCAG AA: 4.5:1 en texto normal, 3:1 en texto grande y en bordes de inputs.
- Do dar a cada elemento interactivo un anillo de foco visible de 2px en `primary`.
- Don't usar sombras duras ni más de dos familias tipográficas en un mismo bloque.
- Don't mezclar esquinas vivas y redondeadas en el mismo grupo de componentes.
- Do justificar párrafos largos de contenido (FAQ, descripciones); dejar títulos, labels y microcopy alineados a la izquierda.
- Do conseguir profundidad subiendo de nivel tonal de superficie, no oscureciendo con sombra.
