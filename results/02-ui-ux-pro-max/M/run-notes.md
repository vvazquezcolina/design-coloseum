# VoltSwap — Run Notes (modelo: 02-ui-ux-pro-max)

## Archivos del skill leídos
- `_models/ui-ux-pro-max-skill/.claude/skills/ui-ux-pro-max/SKILL.md` — workflow, tabla de prioridades de reglas (1→10), Quick Reference de las 10 categorías UX, checklist pre-entrega.
- `_models/ui-ux-pro-max-skill/CLAUDE.md` — arquitectura del repo, ubicación real de scripts/CSV (`src/ui-ux-pro-max/`), comando de búsqueda.
- Estructura de datos: `src/ui-ux-pro-max/data/` (styles.csv, colors.csv, typography.csv, landing.csv, ux-guidelines.csv, etc.) y `scripts/` (search.py, core.py, design_system.py).

Nota: la carpeta del skill (`.claude/skills/...`) solo contenía `SKILL.md`; el resto son symlinks a `src/ui-ux-pro-max/`, así que corrí los scripts desde ahí.

## Scripts corridos y recomendaciones obtenidas

### 1. `search.py --design-system` (Step 2, requerido)
Query: `"automotive EV electric car conversion workshop service modern professional trustworthy"` -p "VoltSwap"
- Pattern: **Funnel / Hero + secciones progresivas** con múltiples CTAs.
- Style propuesto: **3D & Hyperrealism** → ⚠️ marcado *Performance: Poor*, *Accessibility: Not accessible*. **RECHAZADO** (viola Prioridad 1 Accessibility y Prioridad 3 Performance del SKILL.md).
- Colors propuestos: paleta "Automotive/Car Dealership" (gris oscuro + rojo). Genérica de concesionaria, no transmite "eléctrico/eco".
- Typography propuesta: **EB Garamond + Lato** ("Legal Professional"). **RECHAZADO**: personalidad de bufete legal, no de taller tecnológico moderno.

### 2. `search.py --domain style` -n 4
Query: `"modern professional automotive technology clean"`
- Resultados: Soft UI Evolution (Perf ⚡Excelente, A11y WCAG AA+), Swiss Modernism 2.0 (AAA), Flat Design (AAA), Minimalism & Swiss Style (AAA).
- **ELEGIDO: híbrido Soft UI Evolution + Swiss Modernism 2.0** — sombras suaves multicapa, radius 8–14px, animaciones 200–300ms, grid sistemático, un solo color de acento. Cumple Prioridad 4 (Style Selection) sin sacrificar Prioridad 1/3.

### 3. `search.py --domain typography` -n 4
Query: `"modern professional technology trustworthy automotive"`
- **ELEGIDO: "Modern Professional" → Poppins (headings) + Open Sans (body)**. Geométrica + humanista, "modern, professional, clean, corporate, friendly". Mejor fit que las opciones legal/medical.

### 4. `search.py --domain color` -n 4
Query: `"automotive technology green energy electric trustworthy"`
- **ELEGIDO: paleta "EV/Charging Ecosystem"** — Primary `#0891B2` (cyan eléctrico), Accent `#16A34A` (verde eco, ya ajustado a WCAG 3:1), Background `#ECFEFF`, Foreground `#164E63`. Match directo con el producto. Tokens semánticos en `:root`.

### 5. `search.py --domain landing` -n 3
Query: `"hero process services pricing gallery contact social-proof"`
- **ELEGIDO: "Hero + Testimonials + CTA"** — orden: Hero → problema/solución → testimonios → CTA. CTA en hero (sticky) + post-testimonios. Extendido con las secciones que pide el prompt (proceso, paquetes, galería, precios, contacto).

### 6. `search.py --domain ux` -n 6
Query: `"animation accessibility loading form contrast"`
- Aplicado: contraste mínimo 4.5:1, `<label for>` en todos los inputs, feedback de carga (spinner) + estado éxito/error en submit, animaciones infinitas solo en loaders (el spinner es la única).

## Decisiones de diseño clave
1. **Override del design-system en estilo y tipografía**: el SKILL.md prioriza Accessibility (1) y Performance (3) por encima de Style Selection (4). El estilo 3D/Hyperrealism recomendado falla ambas, así que se sustituyó por el híbrido Soft UI + Swiss de las búsquedas de dominio, todas WCAG AA+/AAA y performance excelente.
2. **Paleta orientada al producto**: cyan eléctrico + verde eco comunican "EV" mejor que el gris+rojo de concesionaria. Se usó la variante ya ajustada a WCAG.
3. **Sin assets locales**: hero y "before/after" usan SVG inline (ilustración del auto) y `https://placehold.co`. Avatares de testimonios también placeholders remotos. `width`/`height` declarados en todas las imágenes para evitar CLS (Prioridad 3).
4. **Accesibilidad construida desde la base**: skip-link, focus-visible 3px, `aria-expanded` en el toggle móvil, `role="alert"` + `aria-live="polite"` en errores y estado del form, jerarquía de headings h1→h4 sin saltos, `lang="es-MX"`, estrellas de rating con texto `visually-hidden`.
5. **Touch targets ≥48px**: botones e inputs con `min-height: 48–54px`, toggle móvil 48×48.
6. **Animación con sentido**: reveal-on-scroll vía IntersectionObserver con stagger de 40ms; transiciones 240ms ease; todo desactivado bajo `prefers-reduced-motion`.
7. **Formulario**: validación inline en `blur` (no en cada tecla), error debajo del campo, foco automático al primer campo inválido tras submit, estados loading→success simulados, `inputmode`/`autocomplete`/`type` semánticos para teclado móvil correcto.
8. **Justificación de texto**: NO se aplicó `text-align: justify`. La regla global del usuario aplica a "texto largo" (artículos, legales, párrafos de contenido corrido). Esta es una landing de copy de UI corto (leads, descripciones de card, microcopy), explícitamente excluida en la regla. Se dejó en `left/start`.

## Supuestos
- Negocio ubicado en México (precios en MXN, español mexicano, teléfono +52, dirección en Monterrey). Coherente con el perfil del usuario.
- Datos de contacto, precios, estadísticas (340 autos, autonomías, garantías) son placeholders realistas — el prompt pide "precios estimados".
- El formulario no tiene backend: submit simulado con `setTimeout` para demostrar el patrón de feedback. Producción requeriría endpoint real.
- Stack: HTML/CSS/JS autocontenido (el contrato pide archivo estático sin build). El SKILL.md menciona React Native como stack del skill, pero el contrato de salida manda HTML estático — se priorizó el contrato.

## Fricción notable
- La carpeta del skill (`.claude/skills/ui-ux-pro-max/`) solo exponía `SKILL.md`; los scripts y CSV estaban vía symlink en `src/ui-ux-pro-max/`. Hubo que leer el `CLAUDE.md` para ubicarlos y ajustar las rutas de los comandos.
- `--design-system` devolvió recomendaciones de estilo/tipografía contradictorias con las propias prioridades del SKILL.md (3D/Hyperrealism es "Poor performance / Not accessible" pero Accessibility es Prioridad 1). El motor parece pesar el match temático ("automotive premium") por encima de las restricciones de a11y/perf. Resolución: las búsquedas `--domain` dieron alternativas correctas y se siguió la jerarquía de prioridades documentada.
- `search.py --domain ux` emitió system-reminders de otros skills (`impeccable`) — ignorados por las reglas de aislamiento del colosseum.
- Python disponible es 3.14.0; los scripts corrieron sin dependencias externas, sin necesidad de instalar nada.
