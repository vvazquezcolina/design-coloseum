# Brand Bible — VoltSwap (sintético)

> Documento sintético. VoltSwap es un negocio ficticio para el "design colosseum";
> no existe sitio real que rastrear, así que esta biblia de marca se construye
> de forma deductiva a partir del prompt y del tipo de negocio: un taller de
> conversión de autos de combustión a 100% eléctricos.

---

## 1. Identidad en un párrafo

VoltSwap es un taller de ingeniería automotriz que le da una segunda vida a los
autos que la gente ya ama: toma vehículos de combustión interna y los convierte
en eléctricos al 100%. No vende autos nuevos — preserva los que ya existen y los
vuelve limpios, silenciosos y modernos. La marca vive en la intersección de dos
mundos: la grasa y el torque del taller mecánico tradicional, y la precisión
limpia de la ingeniería eléctrica. El cliente le entrega a VoltSwap algo con
valor sentimental o histórico; VoltSwap se lo devuelve relevante para las
próximas dos décadas. Confianza, transparencia técnica y orgullo de oficio son
el centro de todo.

## 2. Las 5 preguntas de personalidad (Skill 03)

1. **Emoción dominante:** confianza con energía. No es lujo frío ni es taller
   sucio — es precisión cálida. El cliente debe sentir "esta gente sabe lo que
   hace y me va a explicar cada paso".
2. **¿El producto es el trabajo o es la confianza/expertise?** Es la **confianza
   y el expertise**. La conversión es invisible una vez terminada (el auto se ve
   casi igual por fuera); lo que se vende es el proceso de ingeniería, la
   garantía y la seguridad. Esto empuja hacia personalidad **AUTHORITY**, con un
   toque de galería para el antes/después.
3. **¿Qué tan establecidos?** Negocio moderno, técnico, de nicho emergente
   (electromovilidad). No "heritage" — limpio, contemporáneo, confiado pero sin
   pretensión de 50 años de historia.
4. **¿Qué sienten los clientes ahí?** Alivio y entusiasmo: "no tuve que tirar mi
   auto", "me explicaron el rango real, sin humo". Sensación de decisión
   inteligente y bien acompañada.
5. **¿Qué NUNCA encajaría?** Estética de concesionaria de lujo, fuentes serif
   decorativas, modo oscuro tipo "gaming", stock photos genéricas de gente en
   traje, lenguaje corporativo vacío ("soluciones de movilidad sustentable").
   Tampoco encaja lo "sucio/grunge" de taller de hojalatería.

## 3. Tema general

**LIGHT.** Fondo claro, técnico, con secciones de contraste en azul-noche
profundo para los momentos de impacto (CTA, proceso). Decisión deliberada:
sub-skill-designer y el karpathy scorer penalizan el dark-mode por defecto, y
además un taller que vende *confianza y transparencia* se lee mejor en claro
—blueprint sobre papel, no laboratorio secreto.

`overallTheme: "light, clean, technical — predominantly light with deep
electric-navy dark accent sections"`

## 4. Paleta de color (8+ con contexto de uso)

| Token        | Hex       | Uso |
|--------------|-----------|-----|
| primary      | `#0b6e4f` | Verde "voltio/energía limpia". CTAs primarios, acentos de marca, checkmarks. |
| secondary    | `#f4b500` | Amarillo eléctrico / chispa. Highlights, badges, hover, subrayados. |
| navy         | `#0e1b2c` | Azul noche profundo. Secciones de contraste (proceso, CTA), footer, header. |
| navySoft     | `#16304a` | Azul noche más suave para tarjetas sobre fondo navy. |
| bgMain       | `#f7f9fb` | Fondo principal, gris-azulado casi blanco (papel técnico). |
| bgAlt        | `#eef2f6` | Fondo alterno de secciones, blueprint claro. |
| bgCard       | `#ffffff` | Tarjetas, paneles de precios. |
| textHeading  | `#0e1b2c` | Títulos sobre fondo claro (mismo navy). |
| textBody     | `#3a4654` | Cuerpo de texto sobre fondo claro. |
| textMuted    | `#6b7785` | Texto secundario, labels, captions. |
| line         | `#d4dde4` | Bordes, divisores, grids de blueprint. |
| onDark       | `#eaf1f6` | Texto sobre secciones navy. |

## 5. Tipografía

- **Heading:** `Space Grotesk` — geométrica, técnica, contemporánea; tiene
  carácter de ingeniería sin ser fría. Pesos 500/700. NO es Playfair/Inter/Roboto
  (defaults baneados por el scorer).
- **Body:** `Source Sans 3` — humanista, altamente legible en párrafos largos,
  pareja natural de una grotesk geométrica. Pesos 400/600.
- **Mono (acento):** `JetBrains Mono` — para datos técnicos: cifras de rango,
  kWh, números de paquete, specs. Refuerza el "esto es ingeniería de verdad".
- Overlines: UPPERCASE, `letter-spacing: 0.28em`, 12px, en mono o grotesk 500.
- H1 ≥ 4x el cuerpo (cuerpo 17px → H1 clamp ~64–88px).

## 6. Arquetipo de layout

`service-first` — el negocio vende confianza/proceso/garantía, no un catálogo
visual. Orden de secciones en la home:
`hero → cómo funciona → servicios/paquetes → galería antes/después → precios →
contacto`.

(El prompt exige todas estas secciones en la landing, así que la home las
incluye como teasers + páginas dedicadas para el detalle, respetando "homepage
no es un volcado de secciones" pero cumpliendo el brief.)

## 7. Layout Personality elegida

**C) AUTHORITY** (con un módulo galería para el antes/después).
Justificación: el trabajo terminado es casi invisible (un VW Sedán sigue
pareciendo un VW Sedán), así que no es un negocio gallery-first. Lo que convierte
es responder "¿por qué confiar en que mi auto va a quedar seguro?": hero que
plantea la promesa, proceso estructural en 5 pasos, prueba social integrada,
paquetes como tabla comparativa de precios, garantía explícita.

## 8. Voz de marca

- **Tono:** experto cercano. Técnico pero traducido. "Te decimos el rango real,
  no el de folleto."
- **Personalidad:** `["confiable", "técnico-transparente", "entusiasta", "directo"]`
- **CTA primario:** "Agenda tu diagnóstico"
- Español de México, neutro-profesional. Cero argentinismos. Nada de "tú" forzado
  ni corporativo.
- Captions de marca (muestras de voz, estilo redes):
  - "Este Caribe 1989 ya no necesita gasolinera. 240 km de rango, motor silencioso, mismo cariño."
  - "Convertir > desechar. Tu auto tiene buena carrocería, dale un buen corazón."
  - "Pregunta favorita del taller: ‘¿y cuánto rinde de verdad?’ Spoiler: te damos el número real."
  - "Día 14 de 21: instalando el pack de baterías en un Golf MK3. Foto del torque, porque sí."

## 9. Componentes (inventario)

- **Header:** sticky, top 0, fondo `navy`, logo claro (lockup "VOLT⚡SWAP"),
  altura 72px, nav 4 items + botón CTA amarillo. Menú móvil hamburguesa.
- **Hero:** split — copy a la izquierda (overline + H1 + subtítulo + 2 CTAs +
  micro-prueba), panel visual a la derecha (SVG de auto "antes/después" con
  blueprint). NO centrado.
- **Botones:** radio 6px (técnico, no pill, no sharp total). Primario =
  `primary` sólido texto blanco; secundario = outline navy; CTA header =
  `secondary` amarillo texto navy. Hover: shift + leve elevación.
- **Cards:** fondo blanco, borde `line` 1px, sombra suave; hover eleva + borde
  `primary`. Tabla de precios: 3 columnas, la de en medio destacada.
- **Imágenes:** radio 10px. Antes/después con slider/comparación. Aquí se usan
  gradientes CSS + SVG inline (no hay fotos reales — negocio sintético).
- **Footer:** fondo `navy`, 4 columnas, contacto completo (tel, mail, dirección,
  horario), iconos sociales SVG.

## 10. DO / DON'T

**DO**
- Tono de blueprint: grids sutiles, líneas técnicas, números en mono.
- Mostrar el proceso en pasos numerados explícitos (01–05).
- Precios estimados con rango honesto y nota "el diagnóstico ajusta el número".
- Galería antes/después con control de comparación real.
- Una sección navy de alto contraste para el CTA final.
- Microcopy que responde objeciones ("¿y la garantía?", "¿pierdo la placa?").

**DON'T**
- Nada de dark-mode global.
- Nada de Playfair / Inter / Roboto.
- Nada de barra de stats inventada ("+500 autos | 10 años | 4.9★").
- Nada de stock photos de gente genérica.
- Nada de CTAs vagas tipo "Conoce más".
- Nada de jerga corporativa hueca.

## 11. "La única cosa" (uniqueness test)

El **comparador antes/después interactivo** combinado con el **medidor de rango**
que recalcula en vivo: el visitante arrastra el slider sobre su tipo de auto y ve
el motor de combustión transformándose en pack de baterías, mientras un velocí­metro
de rango sube de "0 km eléctricos" a su rango estimado. Es el negocio entero
—convertir lo viejo en algo con futuro— en un solo gesto de la mano.
