# VoltSwap — Notas de ejecución (modelo: 02-ui-ux-pro-max)

## Archivos del skill leídos
- `_models/ui-ux-pro-max-skill/.claude/skills/ui-ux-pro-max/SKILL.md` — guía completa: tabla de prioridades 1→10, Quick Reference de 10 categorías UX, workflow de 4 pasos, checklist pre-entrega.
- `_models/ui-ux-pro-max-skill/CLAUDE.md` — arquitectura del repo y comando de búsqueda.
- Estructura inspeccionada: `data/` (CSV) y `scripts/` (search.py, core.py, design_system.py).

## Scripts corridos (Python 3, sin dependencias externas)

### 1. `search.py "..." --design-system -p "VoltSwap"`
Query: `automotive EV conversion premium workshop service classic cars`
Recomendaciones devueltas:
- **Patrón:** Funnel (3-Step Conversion) — progressive disclosure, múltiples CTAs, CTA final.
- **Estilo:** Liquid Glass — premium, translúcido, blur animado, transiciones fluidas 400-600ms. Advertencia: performance moderada-pobre, contraste de texto a vigilar.
- **Colores:** Automotive/Car Dealership → primario grafito `#1E293B`/`#334155`, **acento `#DC2626` (rojo)**, fondo claro `#F8FAFC`. Nota DB: "Premium dark + action red".
- **Tipografía:** Playfair Display / Inter — elegante, lujo, editorial.
- **Efectos a evitar:** "Cheap visuals + Fast animations".

### 2. `search.py "..." --domain color` (5 resultados)
Confirmó que el dataset asocia automotriz con acento rojo, PERO los resultados 2-5 (Smart Home, Photo Editor, Drawing Canvas, Anonymous Community) usan repetidamente **base grafito `#1E293B` + acento cyan/teal `#0891B2`/`#22C55E` sobre fondo oscuro** — patrón válido en la propia DB.

### 3. `search.py "..." --domain typography` (4 resultados)
- Result 2 "Kinetic Motion" (Syncopate/Space Mono) — marcado "Best For: automotive".
- **Result 3 "Modern Dark Cinema (Inter System)"** — keywords: dark, cinematic, **technical, precision, clean, premium, professional**. Sistema de precisión de una sola familia (Inter). Mejor match con el tono del brief.

### 4. `search.py "..." --domain landing` (5 resultados)
Combiné: "Hero + Testimonials + CTA" + "Pricing-Focused Landing" + "Pricing Page + CTA" → orden de secciones: Hero → problema/valor → proceso → pricing 3 tiers → FAQ → CTA final. Estrategia: plan medio destacado con badge "Más elegido", FAQ para resolver objeciones.

### 5. `search.py "..." --domain ux` (8 resultados) y `--domain style` (3 resultados)
- UX: hover-vs-tap (no depender de hover para acciones primarias), respetar `prefers-reduced-motion` (sin scroll-jacking), loading states, smooth scroll en anchors, sin scroll horizontal, hover feedback + cursor pointer.
- Style: "Modern Dark (Cinema Mobile)" — grafito, glassmorphism sutil, bordes hairline `rgba(255,255,255,.08)`, easing `cubic-bezier(.16,1,.3,1)`, blobs ambientales, radius 16, "no pure #000000". Adoptado como base estilística.

## Decisiones de diseño clave
1. **Acento: override del brief sobre la DB.** El script de design-system devolvió rojo `#DC2626` para automotriz, pero el prompt EXIGE "grises grafito + acento eléctrico (verde-azulado/cian)". La regla 4 del SKILL ("color-palette-from-product") y el propio dataset (`--domain color` resultados 2-5) respaldan grafito + cyan/teal sobre oscuro. Acento final: `#2CD8E6` / `#16B5C8`, coherente además con la identidad "Volt/eléctrico".
2. **Estilo: "Modern Dark (Cinema)" en vez de "Liquid Glass".** SKILL advierte que Liquid Glass tiene performance y contraste pobres; el brief pide accesibilidad AA. Modern Dark da el aire premium pedido ("ingeniería seria") manteniendo contraste alto y rendimiento. Glass se usó solo con moderación (header con backdrop-filter, tarjeta hero) — `blur-purpose`.
3. **Tipografía: Inter como sistema único de precisión** (typography Result 3), no Playfair. El brief pide tono "técnico y confiable, sin ser frío" — un display serif lujo no encaja; Inter con jerarquía por peso (800/700/600/500/400) y tracking negativo en titulares cumple `font-pairing`/`weight-hierarchy` y se siente de ingeniería.
4. **Patrón Funnel adaptado a landing larga.** En vez de un funnel literal de 3 pantallas, se aplicó su filosofía: progressive disclosure (proceso en 5 pasos, FAQ con `<details>`), CTA "Cotiza tu conversión" repetido en nav, hero y bloque final (`primary-action`: un solo CTA primario por vista; secundarios como ghost).
5. **Microinteracciones (req. del brief):** hover con `translateY` + cambio de borde/fondo y transición 160-240ms en cards, planes, steps, casos, quotes; barra superior animada en value cards; FAQ con rotación del icono +/×; header que cambia opacidad al hacer scroll. Reveal on-scroll vía `IntersectionObserver` con stagger por `data-d` (80-320ms) — coincide con `stagger-sequence`.
6. **Accesibilidad AA:** skip link, `:focus-visible` con outline 3px de alto contraste, jerarquía de headings secuencial (h1→h2→h3, h2 oculto en footer para no romper el orden), `aria-label` en todos los SVG/iconos decorativos marcados `aria-hidden`, roles de tabla en la tabla de costos, contraste de texto verificado (fg `#EEF1F6` sobre `#0b0f17` ≈ 16:1; muted `#9AA4B6` ≈ 7:1; acento `#2CD8E6` sobre fondo oscuro >7:1; texto `--on-accent` oscuro sobre botón cyan >8:1). Color nunca es el único indicador (estrellas con `aria-label`, badges con texto).
7. **Mobile-first responsive:** breakpoints 375/640/760/940/1000/1080/1100 px; grids colapsan a 1 columna; el "timeline" de 5 pasos pasa de fila horizontal con nodos a grid 2-col y luego a stack; `overflow-x:hidden`; touch targets ≥48px en botones y nav; sin zoom deshabilitado.
8. **Performance:** archivo único autocontenido, solo Google Fonts como CDN con `preconnect` + `display=swap`; ilustraciones de autos como SVG inline (no imágenes externas); scroll listener con `requestAnimationFrame` (throttle); `IntersectionObserver` con `unobserve` tras revelar.
9. **`prefers-reduced-motion`:** media query global que anula animaciones/transiciones y desactiva el scroll-reveal (todo visible de inmediato) — atiende la advertencia UX sobre motion sensitivity.

## Supuestos
- Moneda en MXN y taller ubicado en Monterrey (el brief no especifica país; se eligió México, coherente con el contexto del usuario). Precios, autonomías, kWh, tiempos y testimonios son ilustrativos pero plausibles para el sector.
- Datos de contacto (teléfono, email, dirección) son ficticios de demostración.
- "Antes/después" se resolvió con dos SVG por caso (combustión en tonos óxido vs. eléctrico en grafito+cyan) ya que no hay imágenes reales disponibles y el contrato prohíbe imágenes locales no generadas.

## Fricción notable
- **Conflicto dataset vs. brief en el color de acento:** el `--design-system` insistió en rojo para "automotive". Se resolvió priorizando la instrucción explícita del prompt y apoyándose en los otros resultados de `--domain color` que sí ofrecen grafito+cyan. Documentado arriba.
- El SKILL.md está fuertemente orientado a App UI (iOS/Android/React Native) — su checklist pre-entrega menciona safe areas, haptics, etc. Se tradujeron los principios equivalentes al contexto web (focus-visible, hover+cursor, sin hover-only, smooth scroll, contenedores max-width) que es lo que pedía esta tarea (landing page estática).
- Los scripts no tienen dominio específico "automotive/landing-page de servicio"; el patrón más cercano fue Funnel, que se adaptó en vez de seguirse al pie de la letra.
