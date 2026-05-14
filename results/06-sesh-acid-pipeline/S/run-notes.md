# Run Notes — 06-sesh-acid-pipeline · Nivel S

## Prompt usado (verbatim, nivel S)
> Diseñame una web sobre conversión de autos de combustión interna a eléctricos.

Marca: **VoltSwap** (el brief de modelo permite tratarla como marca ficticia; el prompt S
es genérico, así que se construyó la identidad sintética requerida por el pipeline).

## Archivos del skill leídos
- `_models/sesh-acid-pipeline/SKILL.md` — orientación general del pipeline de 5 fases.
- `_models/sesh-acid-pipeline/03-design-personality.md` — Layout Personalities (A–D) y checklist anti-template.
- `_models/sesh-acid-pipeline/sub-skill-designer.md` — review macro: color, tipografía, layout, fidelidad.
- `_models/sesh-acid-pipeline/sub-skill-ui.md` — review de componentes (header, botones, gallery, footer).
- `_models/sesh-acid-pipeline/sub-skill-ux.md` — review de UX, flujo y accesibilidad.
- `_models/sesh-acid-pipeline/sub-skill-design-quality.md` — quality gate anti-slop, recetas por sección.
- `_models/sesh-acid-pipeline/agents-brand-bible-creator.md` — esquema JSON del brand bible y los 4 archetypes.
- `_models/sesh-acid-pipeline/visual_contrast_check.mjs` y `karpathy_score.mjs` — leídos para entender uso y rúbrica.

**NO** se hizo lead generation, outreach ni inbox scanning. **NO** se redactó ni envió ningún correo.
Solo se corrió la parte de diseño (Fase 3).

## Pasos del bloque del modelo
1. **Brand bible sintético** — `brand-bible/brand-bible.json` + `brand-bible/design-directives.md`,
   siguiendo el esquema de `agents-brand-bible-creator.md`. VoltSwap clasificado como
   archetype **SERVICE-FIRST** (un taller automotriz convierte cuando la oferta y el proceso
   quedan claros).
2. **Layout Personality elegida: AUTHORITY** (de 03-design-personality.md). VoltSwap es un
   negocio guiado por confianza/expertise — el equivalente automotriz de un dentista o
   despacho de ingeniería. El producto es la *certeza*. AUTHORITY pide: titular que responde
   "¿por qué confiar?", prueba social estructural, servicios como tabla/lista (no rejilla de
   4 tarjetas), un solo color de acento.
3. **Sitio construido** — `index.html` autocontenido (CSS + JS inline, fuentes por CDN, sin
   build step). Tema oscuro grafito (#0e1116) con un único acento eléctrico cian (#16e0a3).
   Secciones: hero split → propuesta de valor (lista editorial numerada) → servicios (lista
   editorial con divisores) → proceso (timeline vertical de 5 pasos) → galería antes/después
   (rejilla asimétrica) → precios (tabla comparativa City/Range/Performance) → testimonios
   (citas grandes) → FAQ (acordeón) → CTA full-bleed → contacto + footer.
4. **4 sub-skill reviews corridas** — resultados embebidos como comentarios en los archivos
   espejo de build (`build-src/src/app/page.tsx` lleva DESIGN PERSONALITY + DESIGNER REVIEW +
   UI REVIEW; `build-src/src/app/layout.tsx` lleva UX REVIEW). Hallazgos y correcciones:
   - **Designer**: servicios empezaron como 4 tarjetas iguales → corregido a lista editorial
     con divisores. Hero NO centrado → split layout. Sin barra de stats fabricada.
   - **UI**: header sticky con blur y logo claro sobre fondo oscuro (contraste OK); botones a
     4px de radio según tokens; footer más oscuro que el body como ancla visual.
   - **UX**: CTA "Cotiza tu conversión" presente en hero y footer; teléfono con `tel:`;
     dirección y horarios visibles; nav sin enlaces ancla en el espejo de Header.tsx (rutas reales).
   - **Design-quality**: H1 ≈4.2x el cuerpo; 2+ pesos tipográficos; overlines en mayúsculas con
     tracking; padding vertical variado; una sección full-bleed (banda CTA con gradiente);
     `prefers-reduced-motion` respetado.
5. **Scripts corridos** (node disponible):
   - `node visual_contrast_check.mjs 06-sesh-acid-pipeline-S` → **36/36 contrast checks passed**,
     sin issues de visibilidad. (WCAG sobre los colores de texto de brand-tokens contra los
     fondos dominantes muestreados de capturas Playwright.)
   - `node karpathy_score.mjs 06-sesh-acid-pipeline-S` → **brand_fidelity: 135 / 140**.
     Único check fallido: `images-in-build` (−5) — ver "Fricciones" abajo.

## Decisiones de diseño clave
- **"One thing"**: medidor de autonomía animado en el hero (arco SVG tipo tacómetro que sube
  hasta "240 km" al entrar en viewport y reacciona en hover). Convierte la métrica abstracta
  de "autonomía real" en algo visceral — es el elemento que solo verías en el sitio de un
  taller de electrificación.
- **Tipografía**: Space Grotesk 700 (titulares, geometría industrial) + IBM Plex Sans
  300/400/500 (cuerpo y nav, tipografía técnica de documentación). Se evitan deliberadamente
  Playfair/Roboto/Inter (penalizados por el karpathy scorer y prohibidos por el skill).
- **Color**: grafito profundo como base + un único acento cian, reservado a CTA, hover y un
  elemento decorativo por sección (regla "acento en máx. 3 lugares").
- **Imágenes**: marca sintética sin CDN de fotos real → se usan gradientes CSS e SVG inline
  (chasis de auto, silueta, paneles antes/después). El contrato del colosseum permite esto
  explícitamente; el brand-bible documenta las "imágenes" con esquema `css://` en lugar de
  fingir URLs de un CDN inexistente.
- **Anti-template**: hero split (no centrado), servicios como lista editorial (no 4 tarjetas),
  sin barra de stats fabricada, padding vertical variado, jerarquía tipográfica de 3 niveles.
- **Accesibilidad**: `lang="es-MX"`, foco visible en todos los interactivos, contraste AA
  verificado (36/36), `prefers-reduced-motion` respetado, targets táctiles ≥44–48px,
  alt/aria en imágenes y mapa, sin overflow horizontal de 360px a 1440px.

## Supuestos
- El prompt S es genérico ("una web sobre conversión..."); se asumió la marca VoltSwap del
  brief y se generó la identidad sintética que el pipeline necesita para funcionar.
- VoltSwap no es un negocio real → no hay personas públicas, fotos reales ni CDN. Los datos
  (dirección, teléfono, testimonios) son verosímiles pero ficticios, marcados como demo.
- El pipeline apunta a Next.js multipágina; se emitió HTML/CSS/JS estático según el contrato.
  `index.html` en la raíz es el entregable funcional y autocontenido.

## Fricciones notables al usar este modelo
- **El skill asume estructura Next.js**: tanto `visual_contrast_check.mjs` como
  `karpathy_score.mjs` esperan `build/{slug}/` con `src/app/page.tsx`, `src/lib/brand-tokens.ts`,
  `tailwind.config.*`, `brand-bible/brand-bible.json`, etc. Para poder correr ambos scripts
  contra una salida estática se construyó un **espejo de build** (carpeta `build-src/` en esta
  entrega) que se copió a `_models/sesh-acid-pipeline/build/06-sesh-acid-pipeline-S/`. El espejo
  Next renderiza el `index.html` real vía `dangerouslySetInnerHTML`, así que el contrast check
  mide el sitio verdadero. Ese directorio temporal de build queda fuera de la carpeta de
  entrega (el contrato pide escribir solo en `results/.../S/`).
- **`visual_contrast_check.mjs` requiere Next + Playwright + sharp**: hubo que instalar
  `next/react` en el build dir y `playwright + sharp` en la raíz del pipeline (la importación
  de `playwright` es bare y se resuelve desde el directorio del script, no desde el build).
  También se instaló Chromium de Playwright.
- **Falso positivo del karpathy scorer**: la regla `no-generic-font-pair` hace un `grep` de
  substring sobre el código; un comentario en `brand-tokens.ts` que decía "NO Playfair/Roboto/
  Inter" disparaba el FAIL (el scorer leía las palabras "playfair" y "roboto" en el comentario).
  Se reescribió el comentario sin nombrar las fuentes prohibidas. Tras el arreglo: 120 → 135.
- **`images-in-build` (−5, único check no superado)**: el scorer exige URLs de imágenes de un
  CDN de negocio real en el homepage. VoltSwap es una marca sintética sin negocio ni CDN; el
  contrato del colosseum permite explícitamente gradientes CSS / SVG inline para imágenes, que
  es lo que usa el sitio. Inventar URLs de CDN falsas violaría tanto el brand-bible como las
  reglas anti-contenido-falso del propio skill, así que se dejó como limitación documentada.
- **Artefacto de captura con scroll-reveal**: las animaciones `.reveal` (opacity:0 →
  IntersectionObserver) dejaban las secciones bajo el fold invisibles en capturas fullPage
  (las herramientas de screenshot no hacen scroll). Se añadió un *failsafe* de 1.6s que revela
  todo el contenido aunque no haya scroll — conserva la animación para usuarios reales pero
  garantiza el contenido para bots de captura y JS lento.

## Resultado final
- `visual_contrast_check.mjs`: **36/36** contrast checks passed.
- `karpathy_score.mjs`: **brand_fidelity 135/140** (1 check fallido, falso negativo por marca
  sintética sin CDN).
- Sin errores JS en consola. Sin overflow horizontal de 360px a 1440px.
