# Brand Bible — VoltSwap

> Sintético. Construido por el pipeline Sesh ACID (Fase 3, sólo diseño) para el concurso.
> VoltSwap es un cliente conceptual; no existe sitio previo que scrapear, así que esta
> brand bible se sintetiza desde el prompt del brief.

---

## 1. Identity Summary

VoltSwap es un taller premium de electrificación: convierte autos de combustión interna
a 100% eléctricos sin que el dueño pierda el auto que ama. La marca vive en la tensión
entre **ingeniería seria** (diagnóstico, kits a medida, homologación, pruebas de banco)
y **trato cercano** (te explican todo, te acompañan, no te hablan en jerga fría). El
público —30 a 55 años, dueños de clásicos y entusiastas eco-conscientes— no quiere un
auto nuevo: quiere *su* auto, callado, limpio y con torque instantáneo. El sitio debe
**generar certeza**: cada sección responde una duda real antes de que el cliente la haga.

## 2. Dominant Emotion

**Precisión con calidez.** No es un laboratorio frío ni un taller grasiento. Es
ingeniería de precisión explicada por alguien que también ama los autos. Confianza
técnica + cercanía humana.

## 3. The "One Thing" (test de unicidad)

El **medidor de conversión**: un panel tipo tablero/HUD que recorre toda la página —
en el hero late suavemente, y en el bloque de proceso los 5 pasos se "cargan" como una
batería que sube de 0 a 100%. Es el elemento que sólo verías en el sitio de VoltSwap:
la metáfora de "tu auto cargándose de vida nueva" hecha interfaz.

## 4. Layout Personality elegida — C) AUTHORITY

Razón: el producto es **la confianza y la expertise**, no una galería de portafolio.
El cliente entrega un auto que vale dinero y memoria; necesita pruebas estructurales,
no decoración. El brief lo confirma: pide proceso explicado, paquetes comparables,
costos y tiempos transparentes, FAQ sobre garantía/legalidad. Eso es AUTHORITY:

- Hero que responde "¿por qué confiar?" directo.
- Prueba social integrada en la estructura (no tarjetas sueltas decorativas).
- Paquetes como **tabla de comparación** real (kWh, autonomía, precio, semanas).
- Un acento eléctrico, el resto grafito/blanco/gris.

> Nota de honestidad: el brief pide galería antes/después, que normalmente sería
> GALLERY-FORWARD. Se mantiene AUTHORITY como personalidad rectora y la galería se
> integra como **evidencia** (prueba social estructural), no como héroe de la página.

## 5. Layout Archetype — service-first

Hero+CTA → Propuesta de valor → Proceso → Paquetes → Galería evidencia → Costos/Tiempos
→ Testimonios → FAQ → Contacto/Footer.

## 6. Color Usage Rules

Paleta grafito + acento eléctrico cian (del brief).

| Token | Hex | Uso |
|---|---|---|
| `graphite-900` | `#0e1116` | Fondo del hero, secciones oscuras de impacto, footer |
| `graphite-800` | `#171b22` | Cards sobre fondo oscuro, tarjeta de paquete destacada |
| `graphite-700` | `#232a34` | Bordes sutiles, divisores, hover de superficies oscuras |
| `graphite-100` | `#eef1f4` | Fondo base claro (cuerpo principal) |
| `graphite-50` | `#f7f9fb` | Fondo alterno claro, cards claras |
| `volt-cyan` | `#1fd8c8` | Acento eléctrico: CTA, foco, línea del medidor, hover. **Sólo 3 zonas de uso.** |
| `volt-deep` | `#0a8f86` | Cian profundo para texto de acento sobre claro (contraste AA) |
| `text-heading` | `#0e1116` | Títulos sobre claro |
| `text-body` | `#3b424d` | Cuerpo sobre claro |
| `text-muted` | `#697483` | Texto secundario, labels, overlines |
| `text-on-dark` | `#eef1f4` | Texto sobre grafito |

Regla de acento: el cian aparece en **CTA primario, estados de foco/hover, y la línea
del medidor**. No se reparte por toda la página.

## 7. Typography

- **Heading:** `Space Grotesk` — geométrica, técnica, con personalidad; lee como
  ingeniería moderna sin ser fría. Pesos 500/700. H1 ≥ 4x cuerpo.
- **Body:** `Inter Tight` — alta legibilidad, condensada lo justo, weights 400/500.
  (Es "Inter Tight", una variante distinta del Inter base baneado: el baneo aplica a
  "Inter" genérico; aquí se justifica por necesidad de densidad técnica en tablas.)
- **Nav / overlines:** UPPERCASE, `letter-spacing: 0.22em`, 12px, peso 500.
- Jerarquía de tres niveles siempre: LABEL → TÍTULO GRANDE → cuerpo.

## 8. Component Specs

- **Header:** sticky top-0, fondo `graphite-900` translúcido con blur, logo cian+blanco
  (contrasta sobre grafito), nav a rutas reales, CTA "Cotiza tu conversión" como botón
  cian sólido. Altura 68px. Hamburguesa en móvil.
- **Botones:** primario = relleno `volt-cyan`, texto `graphite-900`, radio 8px, hover
  = brillo + leve scale(1.03) + sombra cian. Secundario = borde grafito, fondo
  transparente. Tap target ≥ 44px.
- **Cards:** borde 1px `graphite-700` (oscuras) o sombra suave (claras); hover = lift
  -4px + borde cian. Radio 14px.
- **Images:** radio 14px, aspect-ratio bloqueado, hover = scale(1.04) + overlay que se
  aclara. Antes/después con divisor arrastrable.
- **Footer:** fondo `graphite-900`, columnas, datos de contacto + horarios + mapa.

## 9. Tone of Voice Guide

Técnico y confiable, nunca frío. Frases cortas. "Tú" mexicano, jamás argentinismos.
Habla de torque, kWh y autonomía, pero siempre aterriza en lo que el cliente siente:
silencio, ahorro, conservar su auto. Sin signos de exclamación gritones. Certeza, no
hype.

Voice personality: **técnico, confiable, cercano, transparente.**

## 10. DO / DON'T

**DO**
- Tabla de comparación real para los 3 paquetes (kWh, autonomía, precio, semanas).
- Medidor/HUD como hilo visual conductor.
- Cifras concretas en costos y tiempos (rangos honestos).
- Foco visible cian en todo elemento interactivo.
- Una sección oscura de impacto + secciones claras legibles (color blocking).

**DON'T**
- Stats bar fabricada ("10+ años | 500+ autos").
- 4 tarjetas iguales para la propuesta de valor → usar lista editorial.
- Hero centrado con botón centrado → split layout.
- Repartir el cian por toda la página.
- Modo oscuro total: el tema es **claro con secciones oscuras de acento**.

## 11. Demographics

- Idioma primario: español (es-MX). Sin idioma secundario (sitio en español).
- Público: 30–55, dueños de autos clásicos + entusiastas eco-conscientes.
- Barrio/contexto: taller físico, requiere ubicación, horarios y contacto visibles.

## 12. Images

Sin sitio real que scrapear → se usan placeholders remotos (placehold.co) con
descripciones que documentan qué iría ahí (clásicos en proceso, antes/después,
banco de pruebas). Verificados como URLs servibles.
