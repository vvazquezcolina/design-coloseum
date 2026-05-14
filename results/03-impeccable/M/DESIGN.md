# DESIGN.md — VoltSwap

## Aesthetic lane

Named reference: **manual de servicio técnico industrial alemán de los años 80, reimpreso en buen papel**. Piensa en una hoja de especificaciones de motor: precisa, tabular, con cotas y etiquetas, pero impresa con cuidado. No es brutalismo web, no es editorial-magazine, no es la estética EV de neón sobre negro. Es el rigor de un taller de ingeniería traducido a pantalla: rejilla visible, anotaciones tipo plano, mediciones reales.

## Color strategy

**Committed.** Un color satura la superficie y carga la marca.

- El color de VoltSwap es un **naranja seguridad / amarillo señalización** templado, no neón: el naranja de un torquímetro, de una lámpara de inspección, de una línea pintada en el piso del taller. OKLCH alrededor de `oklch(0.74 0.16 62)`. Rechaza explícitamente el cian/azul-eléctrico del rubro EV: la lectura de "eléctrico" llega por el contenido y la tipografía, no por la paleta.
- Fondo: un blanco-hueso cálido tintado hacia el naranja, `oklch(0.97 0.008 70)` — papel de manual, no blanco puro.
- Tinta: casi-negro tintado cálido, `oklch(0.20 0.012 60)`.
- Grises: una sola escala tintada (líneas de rejilla, etiquetas secundarias, cotas).
- Una superficie oscura puntual para el cómo-funciona: `oklch(0.24 0.014 55)` (carbón cálido), donde el naranja brilla como luz de inspección. Es arte-dirección por sección, no un tema dark global.

## Typography

Procedimiento de selección. Palabras: templado, preciso, sin estridencia.

- **Display / titulares: Archivo** (Omnibus-Type, Google Fonts). Grotesca con cuts anchos y peso firme, lecturas de señalización industrial. No está en la lista de reflejos rechazados (no Inter, no Space Grotesk, no DM Sans). Se usa en pesos 600–800 con tracking apretado para titulares grandes.
- **Cuerpo / UI: IBM Plex Sans** — *rechazado por la lista de reflejos*. En su lugar: **Spline Sans** o **Hanken Grotesk**. Elijo **Hanken Grotesk** para cuerpo: humanista, x-height alta, muy legible en párrafos, sin la frialdad geométrica del cliché tech.
- **Datos / etiquetas técnicas / cotas: Spline Sans Mono** o **Martian Mono**. Uso **Martian Mono** en tamaños pequeños para etiquetas de especificación (km, kWh, meses), números de paso y anotaciones tipo plano. El mono aquí NO es disfraz de "technical": es literal: son lecturas de instrumento. Se usa con mesura, solo en datos y etiquetas, nunca en cuerpo.

Escala fluida con `clamp()`, ratio ~1.333. `text-wrap: balance` en titulares, `pretty` en párrafos.

## Layout

- **Rejilla visible como voz.** Una rejilla de 12 columnas con líneas finas de hairline tintado que se asoman en los bordes de las secciones, como las líneas de cota de un plano. No es decoración: estructura la página.
- Composiciones asimétricas. El hero no está centrado: titular grande a la izquierda, ficha de especificación a la derecha.
- Espaciado fluido con `clamp()`, ritmo variado: separaciones generosas entre secciones, agrupaciones apretadas dentro de fichas técnicas.
- Las tarjetas se usan solo donde son la mejor afordancia: los paquetes de servicio (comparables en rejilla) y los items de la galería. El cómo-funciona NO son tarjetas: es una secuencia numerada con línea conectora, como pasos de un procedimiento.
- Nada de tarjetas anidadas. Nada de border-left de color.

## Imagery

Brief que implica imágenes (autos, taller, antes/después). Hay que enviar imágenes reales.

- Fotos de Unsplash verificadas: autos clásicos / sedanes, interiores de taller mecánico, detalles de motor y cableado. Tono: luz natural, metal, taller real, nada de render 3D ni autos flotando.
- Hero: una foto decidida de un coche con carácter (clásico o sedán con historia), tratada con un overlay sutil tintado para que la tipografía respire encima.
- Galería antes/después: pares de imágenes con un control deslizante o un corte diagonal. "Antes" = motor de combustión / escape; "Después" = tren eléctrico limpio.
- Anotaciones tipo plano sobre algunas imágenes: líneas finas y etiquetas mono señalando componentes.
- SVG inline para: el isotipo (un perno/tornillo o un conector de carga estilizado como pieza técnica), los íconos de paso, las líneas de cota.

## Motion

- Page-load orquestado y sobrio: las líneas de rejilla se dibujan, el titular y la ficha del hero entran escalonados. Ease-out-expo, sin rebote.
- Reveal por scroll en los pasos del proceso y la galería, escalonado.
- El comparador antes/después es la única interacción "de juguete" y está justificada: dejar al usuario ver el cambio con sus propias manos.
- `prefers-reduced-motion`: respetar, todo aparece sin desplazamiento.

## Components

- **Ficha de especificación**: bloque tabular con etiqueta mono + valor grande, líneas hairline entre filas. Aparece en el hero y en precios.
- **Paso de proceso**: número grande mono, título, descripción, conectado al siguiente por una línea vertical.
- **Tarjeta de paquete**: tres niveles (Esencial / Calle / Largo alcance), una destacada con el naranja de marca, lista de incluidos, precio estimado en rango.
- **Comparador antes/después**: imagen con divisor arrastrable.
- **Bloque de contacto**: formulario sobrio + datos del taller, sin modal.
