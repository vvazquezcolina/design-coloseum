# Run Notes — VoltSwap landing (modelo 04-huashu-design)

## Archivos del skill leídos

- `_models/huashu-design/SKILL.md` — completo (en chino). Filosofía central, flujo
  "Junior Designer", protocolo de activos, las "4 preguntas de posición", tabla
  anti-AI-slop, references route table.
- `_models/huashu-design/references/design-styles.md` — biblioteca de 20 filosofías
  de diseño. Seleccioné **04 Fathom Information Design** + rigor de retícula de
  **10 Müller-Brockmann**.
- `_models/huashu-design/references/content-guidelines.md` — blacklist completa de
  AI slop, normas de contenido, escala (tamaños tipográficos, contraste AA), CSS
  avanzado recomendado.
- Listado del árbol completo del modelo para confirmar qué aplica (ignoré todo lo
  de slides / video / PPTX / narración / SFX por instrucción de la tarea).

## Scripts corridos

- Ninguno de los scripts del skill (todos son de export PPTX/video/TTS, fuera de
  alcance).
- Validación propia con `node -e` sobre el HTML generado: doctype, lang, balance
  de etiquetas script/style, presencia de las 8 secciones requeridas + CTA, y
  chequeo de que no haya emoji usados como iconos (anti-slop). Todo PASS.

## Estilo elegido y por qué

El prompt pide "ingeniería seria pero trato cercano", "técnico y confiable sin ser
frío", "genera certeza". En la biblioteca de huashu eso mapea casi 1:1 a:

- **04 Fathom Information Design**: "cada pixel debe cargar información", estética
  de revista científica + diseño moderno, paleta neutra (grises + navy + un color
  de realce), sistema de notas/citas integrado al layout. Camino de ejecución =
  **HTML render** (datos precisos, layout controlable) — exactamente lo que
  recomienda la tabla del skill para estilos que dependen de tipografía y datos.
- Mezclado con la disciplina de retícula de **Müller-Brockmann** (bordes honestos,
  alineación estricta, sin decoración gratuita).

El "trato cercano" se inyecta con **titulares en serif editorial** (Newsreader) en
itálica para los acentos — humaniza sin perder seriedad.

## Las 4 preguntas de posición (huashu workflow)

- **Rol narrativo**: landing de conversión, objetivo único = "Cotiza tu conversión".
- **Distancia del espectador**: 1 m laptop / 25 cm móvil → diseño mobile-first.
- **Temperatura visual**: confianza técnica, cálida-no-fría.
- **Capacidad**: 9 secciones, caben en un scroll largo bien ritmado alternando
  fondos claro/grafito para dar respiración.

## Decisiones de diseño clave

- **Paleta**: base de grises grafito (`#14171a` → `#3a434c`) + papel cálido
  (`#f4f3ef`) + **un único acento eléctrico teal/cian** (`#00c2a8` / `#1ee0c6`).
  Acento usado con disciplina (CTAs, datos clave, hovers), nunca como relleno.
- **Tipografía** (evitando explícitamente la blacklist del skill — nada de Inter,
  Roboto, Fraunces, Space Grotesk): **Newsreader** serif para titulares,
  **IBM Plex Sans** para cuerpo, **IBM Plex Mono** para datos/HUD/fichas técnicas.
- **Datos como decoración primaria** (firma Fathom): panel "ficha técnica" en el
  hero, banda de medición tipo instrumento, tabla de costos con barras, números
  de ingeniería reales (kWh, km, semanas) en mono.
- **Sin tarjetas redondeadas con border-left de color** (slop señalado): se usa
  retícula con bordes finos honestos, radio mínimo de 3px, y subrayados/under-bars
  animados en hover en vez del patrón Material.
- **Microinteracciones**: header con sombra al scroll, underline animado en nav,
  reveal escalonado por IntersectionObserver, hover-lift en paquetes/casos, barra
  de progreso bajo cada celda de valor, FAQ acordeón, y un **comparador
  antes/después arrastrable** (mouse + touch + teclado).
- **Imágenes**: no se dibujó imagery en SVG (regla dura anti-slop). El logo es una
  marca geométrica propia (rayo en circuito) — SVG como icono/forma, permitido.
  Galería antes/después usa placeholders remotos honestos de placehold.co con
  etiquetas claras "ANTES / DESPUÉS".
- **Accesibilidad AA**: skip-link, `:focus-visible` con outline de acento, HTML
  semántico (`main`, `section`, `article`, `figure`, `address`, `table` con
  `caption`/`scope`), `aria-expanded` en nav y FAQ, comparador focuseable con
  control por flechas, `prefers-reduced-motion` respetado (desactiva reveals y
  transiciones), contraste de cuerpo ≥ 4.5:1, hit targets ≥ 44px.
- **Texto largo justificado**: las respuestas del FAQ (`.prose p`) usan
  `text-align: justify` + `text-justify: inter-word` + `hyphens: manual` con
  `lang="es-MX"` en `<html>`. El resto del copy (UI, headings, cards cortas) se
  deja en alineación natural.

## Supuestos

VoltSwap es una marca ficticia para este ejercicio. Son ilustrativos y deberían
reemplazarse por datos reales antes de publicar:

- Dirección (Guadalajara, Jalisco), horarios, teléfono, email y WhatsApp.
- Rangos de precio en MXN, tiempos en semanas, capacidades kWh y autonomías por
  paquete (City 30 / Range 62 / Performance 90 kWh).
- Métricas del hero (142 conversiones, 8 años de garantía, 100% homologadas).
- Testimonios y los 3 casos de la galería (todos marcados como demostrativos; el
  footer también lo indica).
- Afirmaciones de legalidad/homologación están redactadas en términos generales
  porque la normativa real varía por país/estado; un cliente real debe ajustarlas.

## Fricción notable

- `SKILL.md` excede el límite de tokens de lectura (26k); se leyó en dos pasadas
  con offset/limit.
- El skill está muy orientado a slides/video/PPTX/narración con audio; gran parte
  del archivo no aplica a una landing estática de una sola página — se filtró por
  la routing table y se ignoraron `assets/sfx`, `scripts/*`, references de
  animación-video.
- El protocolo de "activos de marca" del skill asume una marca real con logo/fotos
  oficiales; al ser VoltSwap ficticio se aplicó el fallback honesto: marca
  geométrica propia + placeholders etiquetados, sin inventar fotos ni dibujar
  imagery en SVG.
- Sin navegador headless disponible en el flujo: la verificación fue estructural
  (parser de Node) en lugar de screenshot con Playlright como sugiere el skill.
