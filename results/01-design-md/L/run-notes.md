# Run notes — 01-design-md / VoltSwap

## Archivos del modelo que leí
- `_models/design.md/docs/spec.md` — spec completa del formato DESIGN.md: estructura frontmatter YAML + cuerpo markdown, schema de tokens (colors, typography, rounded, spacing, components), orden de secciones (Overview, Colors, Typography, Layout, Elevation & Depth, Shapes, Components, Do's and Don'ts), sintaxis de referencias `{path.to.token}`.
- `_models/design.md/examples/atmospheric-glass/DESIGN.md` — ejemplo completo: convenciones de nombres de tokens, uso de referencias en `components`, prosa por sección.
- `_models/design.md/examples/totality-festival/DESIGN.md` (parcial) — confirmé convención de escala de superficies `surface-container-*` y tipografía con roles.
- `_models/design.md/packages/cli/package.json` — para evaluar la CLI.

## Scripts / CLI
- La CLI (`@google/design.md`) requiere **bun** para build (`bun build ...`) y no hay `dist/` precompilado ni `node_modules` instalado.
- `which bun` → no encontrado. Solo hay `node` v20 y `npm` (vía nvm).
- Decisión: **salté el lint/export de la CLI** — instalar deps + buildear sin bun costaba tiempo y la consigna lo permite explícitamente ("si cuesta tiempo, sáltalo"). En su lugar validé manualmente el DESIGN.md contra `spec.md`: orden de secciones correcto, sin headings `##` duplicados, todos los valores Color en `#hex`, Dimensions con unidad válida, referencias `{...}` apuntan a primitivos (salvo `typography` dentro de `components`, permitido por la spec).

## Decisiones de diseño clave
- **Filosofía del modelo**: DESIGN.md no es un skill de estilo, es un formato de documentación. Por eso el flujo fue: (1) redactar tokens normativos en `DESIGN.md`, (2) construir `index.html` consumiendo *solo* esos tokens vía CSS custom properties — cada `--token` del `:root` es copia 1:1 del frontmatter.
- **Paleta**: grises grafito escalonados (`surface-container-*` de #0A0C0F a #2C333E) como pide el prompt, + acento eléctrico cian-verdoso `primary #16E0C8`. Acento usado con disciplina (CTA, datos, foco), nunca como relleno grande.
- **Tipografía con rol semántico**: Sora (títulos, voz de ingeniería), Inter (texto corrido legible), JetBrains Mono (toda cifra técnica — kWh, km, semanas, precio — y labels en mayúsculas). El mono refuerza la "certeza" que pide el brief: los números se leen como instrumentos.
- **Profundidad por capas tonales**, no sombras duras (sección Elevation de la spec). Sombras solo suaves/amplias en nav sticky y pricing card destacada.
- **Accesibilidad AA**: anillo de foco visible 2px `primary` en todo interactivo; skip-link; `<details>`/`<summary>` nativos para FAQ; labels siempre visibles + helper text + `aria-invalid` en validación; contraste verificado (on-surface #ECEFF3 sobre grafitos, primary sobre on-primary oscuro); `prefers-reduced-motion` desactiva animaciones.
- **Microinteracciones**: hover (translateY/translateX, cambio de superficie tonal, glow del CTA), scroll-reveal vía IntersectionObserver, nav con blur+sombra al hacer scroll, FAQ acordeón (uno abierto a la vez).
- **Mobile-first**: una columna fluida con `container-padding` 24px; grids reflujan a 1 col bajo 640–900px; rejilla fija max 1200px en desktop; tabla de costos colapsa a tarjetas con etiquetas generadas por CSS en móvil.
- **Imágenes**: SVG inline (logo, auto del hero) + gradientes CSS (hero visual, bandas CTA) + placeholders remotos `placehold.co` para galería/avatares. Sin archivos locales.
- **Justificación de texto**: aplicada solo a párrafos de contenido largo (`.prose p` — testimonios, FAQ, footer intro, CTA) con `text-justify:inter-word; hyphens:manual`; títulos, labels y microcopy quedan alineados a la izquierda. `lang="es-MX"`.

## Supuestos
- Datos de negocio (precios MXN, autonomías, kWh por paquete, semanas, dirección en Monterrey, teléfono/correo, nombres de testimonios y casos) son inventados pero plausibles — el brief no los proporcionó.
- "Cotiza tu conversión" se implementó como formulario ancla en la misma página (sin backend); el submit valida y muestra confirmación client-side.
- Tres familias de Google Fonts vía CDN (permitido por el contrato de salida).

## Fricción notable
- La CLI del modelo es bun-only sin artefacto precompilado: imposible lint/export rápido sin instalar un runtime nuevo. La validación quedó manual contra `spec.md`.
- La spec de `components` es deliberadamente flexible ("actively evolving"); elegí propiedades del set recomendado (`backgroundColor`, `textColor`, `typography`, `rounded`, `padding`, `height`, `size`) y variantes `-hover`/`-active`/`-focus` según la convención del ejemplo.
