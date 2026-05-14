# Design Directives — VoltSwap

## Identity Summary
VoltSwap es un taller de electrificación que convierte autos de combustión interna a 100% eléctricos. La marca vive en la intersección de ingeniería seria y trato cercano: técnica sin ser fría. El sitio debe transmitir **certeza** — que estas son las manos correctas para tocar un auto que el dueño ama. Estética grafito oscuro con un único acento eléctrico cian/verde-azulado, tipografía industrial pero legible, y un proceso explicado paso a paso para disolver el miedo a lo desconocido.

## DO
- Usar fondo grafito profundo (#0e1116) en toda la página; tema oscuro consistente.
- Un solo acento eléctrico (#16e0a3) reservado para CTA, hover y exactamente un elemento decorativo por sección.
- Hero en **split layout**: titular grande + propuesta de valor a la izquierda, panel visual del auto a la derecha. Nunca centrado.
- Hero answers "¿por qué confiar?" con una promesa de valor concreta, no "Bienvenido a VoltSwap".
- Servicios y proceso como **lista editorial / tabla**, no como rejilla de 4 tarjetas idénticas.
- Etiquetas overline en MAYÚSCULAS con `letter-spacing: 0.18em` arriba de cada H2 (jerarquía de 3 niveles).
- Variar el padding vertical entre secciones: unas respiran (120px), otras compactas (64px).
- Una sección CTA full-bleed con el gradiente de marca — el bloque más saturado de la página.
- Microinteracciones en hover (escala + cambio de borde) y revelaciones al hacer scroll; respetar `prefers-reduced-motion`.
- Contraste AA: cuerpo gris claro sobre grafito, texto oscuro sobre el botón cian.
- Datos de contacto reales y verosímiles, teléfono con `tel:`, foco visible en navegación.

## DON'T
- No usar barra de estadísticas fabricadas ("+500 autos | 6 años | 5 estrellas").
- No usar rejilla de 4 tarjetas iguales para servicios.
- No centrar el hero ni poner botón centrado debajo de texto centrado.
- No usar Playfair, Roboto ni Inter.
- No usar fondos claros — el sitio es de tema oscuro de principio a fin.
- No usar CTA genérico tipo "Saber más"; usar "Cotiza tu conversión", "Ver el proceso".
- No usar enlaces ancla (`href="#..."`) en el header; cada item de nav apunta a una ruta/página real.
- No saturar de acento cian — máximo 3 zonas de uso por viewport.

## Font Pairing
Heading: **Space Grotesk** 700 — geometría industrial que evoca ingeniería y precisión mecánica sin ser fría.
Body: **IBM Plex Sans** 300/400/500 — tipografía técnica diseñada para legibilidad de documentación; refuerza la seriedad ingenieril.
Nav: **IBM Plex Sans** 500, uppercase, `letter-spacing: 0.18em` — etiquetas compactas y técnicas.

## Color Usage Rules
- CTA principal: #16e0a3 (cian eléctrico) con texto #06231b (verde casi negro) — alto contraste.
- Alternancia de secciones: #0e1116 → #161b22 → #0e1116; tarjetas en #1c232d.
- CTA secundario: transparente con borde #2a323d, se rellena en hover.
- Nunca usar el cian para bloques de texto largos ni para fondos amplios — se reserva como señal de acción.
- Sección de testimonios: inversión de contraste leve (tarjetas más claras sobre grafito).

## Layout Personality: AUTHORITY (de 03-design-personality.md)
Rationale: VoltSwap es un negocio de servicio guiado por confianza/expertise — el equivalente automotriz de un dentista o despacho de ingeniería. El producto es la **certeza**, no un portafolio que se vende solo. AUTHORITY pide: titular que responde "¿por qué confiar?", prueba social estructural, servicios como tabla comparativa, un solo color de acento.

## Layout Archetype: SERVICE-FIRST
Rationale: La conversión sucede cuando la oferta y el proceso quedan claros. `contentPriority` empieza por `services` y el CTA primario es "Cotiza tu conversión".

## Section Order (del archetype)
1. **Hero** — split layout: promesa de valor + CTA dual / panel visual del auto.
2. **Propuesta de valor** — 4 beneficios en lista editorial con números, no tarjetas.
3. **Servicios** — qué incluye cada conversión, lista editorial con divisores.
4. **Proceso de conversión** — 5 pasos numerados en timeline vertical.
5. **Galería antes/después** — rejilla asimétrica (uno grande + apilados).
6. **Precios estimados** — tabla comparativa City / Range / Performance.
7. **Testimonios** — citas grandes con nombre real, inversión de contraste.
8. **Preguntas frecuentes** — acordeón (garantía, legalidad, mantenimiento, repuestos).
9. **Contacto + Footer** — ubicación, horarios, teléfono, formulario simple.

## The "One Thing"
El **medidor de autonomía animado** en el hero: un arco SVG tipo tacómetro que se llena hasta "240 km" al cargar la página y reacciona en hover — convierte la métrica abstracta de "autonomía real" en algo visceral y mecánico. Es el elemento que solo verías en el sitio de un taller de electrificación.

## Anti-Template Checklist (verificado)
- [x] Hero NO centrado → split layout izquierda/derecha.
- [x] Servicios NO son 4 tarjetas iguales → lista editorial con divisores.
- [x] Sin barra de estadísticas fabricadas.
- [x] Padding vertical variado entre secciones.
- [x] Al menos una sección full-bleed (bloque CTA con gradiente).
- [x] Overlines en mayúsculas en cada sección (jerarquía de 3 niveles).
- [x] Dos+ pesos tipográficos en contraste visible.
- [x] CTA específico, no "Saber más".
