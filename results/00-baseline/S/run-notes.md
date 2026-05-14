# Run notes — 00-baseline / Nivel S

## Modelo
`00-baseline` = grupo de control. **No se usó ningún skill, guía ni metodología de
diseño externa.** Todo el diseño salió de criterio propio de diseñador.

## Prompt usado (verbatim, nivel S)
> Diseñame una web sobre conversión de autos de combustión interna a eléctricos.

## Archivos de skill leídos
Ninguno. El brief de baseline prohíbe explícitamente usar skills. Durante la sesión
el entorno ofreció skills (`ui-ux-pro-max`, `impeccable`, etc.); se ignoraron a
propósito para mantener la condición de control.

## Scripts corridos
Ninguno (no aplica para este modelo).

## Decisiones de diseño clave
- **Marca:** el prompt S no fija marca (VoltSwap es solo para M y L), así que inventé
  una marca ficticia neutra: **ReVolt**, taller de electrificación.
- **Paleta:** base grafito oscuro (#14181c → #3a434e) con un acento verde-menta
  eléctrico (#00e0a4). Oscuro porque transmite tecnología/ingeniería y hace resaltar
  el acento "eléctrico". Un solo acento para mantener foco.
- **Tipografía:** stack de sistema (sin dependencias externas) — el prompt es corto y
  no pedía fuentes; prioricé carga instantánea y cero CDN frágiles. Pesos 700/800 para
  títulos, tracking negativo para un look moderno.
- **Estructura de una sola página:** header sticky → hero → beneficios → proceso (4
  pasos) → galería antes/después → precios (3 paquetes) → FAQ acordeón → CTA → footer.
  Es el esqueleto estándar y completo para un sitio de servicio/conversión.
- **Imágenes:** sin imágenes locales ni remotas; usé SVG inline (siluetas de auto) y
  gradientes CSS para las tarjetas antes/después. Mantiene el archivo 100%
  autocontenido y sin dependencias rotas.
- **Microinteracciones:** hover lift en tarjetas/botones, reveal on scroll con
  IntersectionObserver, acordeón FAQ, badges flotantes animados en el hero, anillo
  cónico girando detrás del auto. Suaves, no estridentes.
- **Accesibilidad:** `lang="es-MX"`, `:focus-visible` con outline de acento,
  `aria-expanded` en el acordeón, semántica con `section`/`nav`/`footer`, contraste
  alto texto/fondo.
- **Responsive:** mobile-first en los breakpoints; grids colapsan a 1–2 columnas,
  menú hamburguesa bajo 940px.
- **Regla de la casa:** párrafos de texto largo (`.prose p`) justificados con
  `text-justify: inter-word` y `hyphens: manual`. Headings, botones y microcopy
  quedan sin justificar.

## Supuestos
- Contenido y cifras (autonomía, precios MXN, semanas de taller) son ilustrativos
  y plausibles, no datos reales — el prompt no proporciona ninguno.
- Idioma del contenido: español de México.

## Fricción notable
- Ninguna técnica. La única "fricción" fue ignorar activamente los skills que el
  entorno sugería, ya que la condición de baseline lo exige.

## Entregables
- `index.html` — sitio completo, autocontenido, sin build step.
- `run-notes.md` — este archivo.
