# Run notes — 02-ui-ux-pro-max / Nivel S

## Asignación
- **Modelo:** `02-ui-ux-pro-max` (`_models/ui-ux-pro-max-skill/.claude/skills/ui-ux-pro-max/`)
- **Nivel:** S
- **Prompt verbatim:** "Diseñame una web sobre conversión de autos de combustión interna a eléctricos."
- **Salida:** `index.html` autocontenido + este archivo.

## Archivos del skill leídos
- `.claude/skills/ui-ux-pro-max/SKILL.md` — workflow, tabla de prioridades de reglas (1→10), Quick Reference, pre-delivery checklist.
- `CLAUDE.md` del repo — confirmó la ruta real de los scripts: `src/ui-ux-pro-max/scripts/search.py` (el SKILL.md usa una ruta relativa distinta).

## Scripts corridos (Python 3.14.0 disponible, sin dependencias externas)

Todos desde `_models/ui-ux-pro-max-skill/`:

1. **Design system (paso 2, obligatorio):**
   `python3 src/ui-ux-pro-max/scripts/search.py "automotive EV conversion service workshop modern technical trustworthy" --design-system -p "VoltSwap"`
   - Pattern: **Funnel (3-Step Conversion)**.
   - Style recomendado: **3D & Hyperrealism** → marcado por el propio script como `Performance: Poor` / `Accessibility: Not accessible`.
   - Colors: paleta **Automotive/Car Dealership** (#1E293B grafito + #DC2626 rojo acción).
   - Typography: Syncopate / Space Mono.

2. **Domain `style`:** `... "automotive technical trustworthy modern minimal" --domain style -n 4`
   - Devolvió **Soft UI Evolution** (WCAG AA+, perf Excellent) y **Enterprise SaaS / Modern Professional** como alternativas accesibles.

3. **Domain `color`:** `... "automotive service electric green graphite" --domain color -n 4`
   - Devolvió la paleta **EV/Charging Ecosystem**: primary #0891B2 (cian eléctrico), accent #16A34A (verde eco, "ajustado para WCAG 3:1"), surface tint #ECFEFF. Encaja exactamente con el tema del prompt.

4. **Domain `typography`:** `... "modern technical professional trustworthy automotive" --domain typography -n 3`
   - Devolvió **Modern Dark Cinema (Inter system)** — Inter como familia única de precisión, técnica/premium.

5. **Domain `landing`:** `... "service conversion hero process social-proof pricing" --domain landing -n 3`
   - Devolvió **Trust & Authority + Conversion**: orden Hero → Proof/stats → Solución → CTA; "Get Quote" como CTA primario; acento solo para CTA; pricing transparente; formulario de baja fricción.

6. **Domain `ux`:** `... "animation accessibility scroll hover loading" --domain ux -n 6`
   - Reglas High aplicadas: respetar `prefers-reduced-motion`, `scroll-behavior: smooth`, sin scroll horizontal, hover+tap (no solo hover), feedback en estados async, animaciones infinitas solo para loaders.

## Decisiones de diseño clave (síntesis priorizada del SKILL.md)

El SKILL.md ordena las categorías por prioridad 1→10, con **Accesibilidad (CRITICAL)** y **Touch & Interaction (CRITICAL)** por encima de **Style Selection (HIGH)**. Por eso:

- **Override del estilo recomendado.** El script propuso "3D & Hyperrealism", pero él mismo lo etiqueta `Poor performance` / `Not accessible`. El contrato pide un único `index.html` estático sin build y bien renderizado. Siguiendo la jerarquía del propio skill (a11y y performance ganan a estética), adopté **Soft UI Evolution + Modern Professional**: sombras suaves multicapa, radios 8–20px, transiciones 200–300ms, foco visible, contraste AA+. Documentado como decisión consciente, no como descuido.
- **Colores:** descarté la paleta genérica "Automotive/Car" (grafito + rojo) y usé **EV/Charging Ecosystem** porque el dominio `color` la devolvió específicamente para este tipo de producto y el rojo no comunica "eléctrico/eco". Base grafito (#1E293B/#0F172A) + acento cian #0891B2 + verde eco #16A34A. `--muted-foreground` se oscureció de #64748B a #475569 para garantizar 4.5:1 sobre blanco.
- **Patrón de página:** combiné **Trust & Authority + Conversion** (del dominio `landing`) con el espíritu de funnel del `--design-system`: Hero con stats de confianza → Ventajas → Proceso en 5 pasos → Paquetes → Galería antes/después → FAQ → Contacto. CTA primario único y consistente ("Cotiza tu conversión").
- **Tipografía:** Inter vía Google Fonts (`display=swap`, con preconnect) — sistema de precisión de una sola familia con jerarquía por peso (700/600/500/400) y `letter-spacing` negativo en headings. Cifras con `font-variant-numeric: tabular-nums` en precios y specs (regla `number-tabular`).
- **Imágenes:** cero archivos locales. Todo es CSS (gradientes radiales, sombras) y SVG inline (logo, íconos tipo Lucide stroke 2px consistente, siluetas de auto antes/después). Ningún emoji como ícono (regla `no-emoji-icons`).
- **Accesibilidad:** `lang="es-MX"`, skip-link, jerarquía h1→h2→h3 sin saltos, `:focus-visible` 3px, FAQ como `<button aria-expanded/aria-controls>` con `role="region"`, formulario con labels visibles + `autocomplete` + tipos semánticos (`email`/`tel`) + `aria-live` en el estado de éxito + auto-focus al primer campo inválido, `aria-label` en íconos decorativos marcados `aria-hidden`.
- **Movimiento:** scroll-reveal vía IntersectionObserver, hover lifts sutiles (translateY), todo bajo bloque `@media (prefers-reduced-motion: reduce)` que neutraliza transiciones y scroll suave.
- **Responsive mobile-first:** breakpoints 680/900px, nav colapsable con menú móvil accesible, sin scroll horizontal (`overflow-x:hidden`), targets táctiles ≥44–48px, grids con `auto-fit minmax`.
- **Justificación de texto:** se aplicó la receta de texto largo (`text-align: justify; text-justify: inter-word; hyphens: manual`) solo a párrafos de contenido corrido (`.prose`, `.faq-a`); headings, labels, botones y microcopy quedaron sin justificar.

## Contenido
- Nivel S no fija marca, así que usé una marca ficticia coherente: **VoltAuto** (no "VoltSwap", reservada para M/L). Contenido 100% en español mexicano: ventajas, proceso de 5 pasos, 3 paquetes (City/Range/Performance) con precios estimados en MXN, galería antes/después con 3 casos, FAQ (legalidad, garantía, mantenimiento, repuestos), contacto con formulario y footer con ubicación/horario.

## Fricción notable al usar este modelo
- **Ruta de scripts inconsistente:** el `SKILL.md` documenta `skills/ui-ux-pro-max/scripts/search.py`, pero la ruta real en el repo es `src/ui-ux-pro-max/scripts/search.py` (aclarado solo en `CLAUDE.md`). Hubo que verificar con `find`.
- **El `--design-system` recomendó un estilo que el mismo script califica de no accesible y de mal rendimiento.** El flujo "obligatorio" del paso 2 entrega una recomendación que choca con las reglas CRITICAL de su propio SKILL.md; hay que hacer los `--domain` de respaldo para corregirlo. La tabla de prioridades del SKILL.md fue la que permitió resolver el conflicto.
- **El skill está fuertemente orientado a React Native / app móvil** (stack único `react-native`, checklists de "safe area", "haptics", "bottom nav"). Para una landing web autocontenida hubo que traducir esas reglas a su equivalente web (focus rings, sticky header con safe padding, hover+tap, etc.). Las reglas de UX subyacentes sí transfieren bien.
- Los scripts corren sin dependencias y son rápidos; la salida ASCII-box es legible pero el formato `-f markdown` habría sido más cómodo para citar.

## Verificación final (Quick Reference §1–§3 + checklist)
- [x] Sin emojis como íconos — todo SVG inline, stroke consistente 2–2.5px.
- [x] Contraste de texto AA (texto sobre blanco/grafito ≥4.5:1; secundario oscurecido).
- [x] `:focus-visible` visible en todos los interactivos.
- [x] `prefers-reduced-motion` respetado (bloque dedicado + guard en JS).
- [x] Responsive verificado en breakpoints 375/680/900/1024+, sin scroll horizontal.
- [x] Targets táctiles ≥44–48px; hover states con transición 200–300ms.
- [x] Formulario: labels visibles, tipos semánticos, `aria-live`, focus al primer error.
- [x] Sin build step, sin imágenes locales — sirve directo como estático.
