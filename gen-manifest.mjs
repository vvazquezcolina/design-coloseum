/* Genera manifest.json (en la raíz) a partir de evaluation/scores.csv.
   El visor vive en la raíz del proyecto, así que las rutas son relativas a "/".
   Uso: node gen-manifest.mjs */
import { readFileSync, writeFileSync, existsSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const ROOT = dirname(fileURLToPath(import.meta.url));

const MODELS = [
  { id: "00-baseline", name: "Baseline (Claude sin skill)" },
  { id: "01-design-md", name: "design.md" },
  { id: "02-ui-ux-pro-max", name: "ui-ux-pro-max" },
  { id: "03-impeccable", name: "impeccable" },
  { id: "04-huashu-design", name: "huashu-design" },
  { id: "05-taste-skill", name: "taste-skill" },
  { id: "06-sesh-acid-pipeline", name: "sesh-acid-pipeline" },
];

// Rúbrica: el orden y las claves coinciden con el header de scores.csv.
const RUBRIC = [
  { key: "d1_wow", label: "Primera impresión / wow", look: "¿Se ve profesional y no genérico? ¿Sorprende o parece plantilla?" },
  { key: "d2_hierarchy", label: "Jerarquía visual y layout", look: "Orden de lectura, composición, uso del espacio, foco claro." },
  { key: "d3_typography", label: "Tipografía", look: "Elección, escala, contraste tipográfico, legibilidad, ritmo." },
  { key: "d4_color", label: "Color y contraste", look: "Paleta coherente, uso del acento, contraste suficiente." },
  { key: "d5_spacing", label: "Espaciado y ritmo", look: "Padding/margin consistentes, aire, alineación, grid." },
  { key: "d6_responsive", label: "Responsive", look: "Comportamiento en desktop 1440px y mobile 390px." },
  { key: "d7_motion", label: "Motion e interacción", look: "Hover, scroll, microinteracciones; ¿aportan o estorban?" },
  { key: "d8_accesibilidad", label: "Accesibilidad", look: "Contraste AA, foco visible, semántica, alt text." },
  { key: "d9_codigo", label: "Calidad de código", look: "HTML semántico, CSS limpio, sin hacks, mantenible." },
  { key: "d10_adherencia", label: "Adherencia al prompt", look: "¿Cubre lo pedido? Completitud de secciones, tema correcto." },
];

const METHOD = {
  scale: "Cada dimensión se puntúa 1–5: 1 = malo/ausente · 2 = pobre · 3 = aceptable · 4 = bueno · 5 = excelente.",
  perCell: "Las 10 dimensiones suman el total de la celda, sobre /50.",
  perModel: "Cada modelo tiene 3 celdas (prompt S, M y L); su total es la suma, sobre /150.",
  blind: "El scoring se hizo a ciegas: las celdas se identificaron por código, sin nombre de modelo, hasta terminar de puntuar. Dimensiones 7/8/9 se apoyaron además en un análisis objetivo del código (HTML semántico, ARIA, foco, prefers-reduced-motion).",
};

const PROMPTS = {
  S: {
    label: "Prompt base",
    text: "Diseñame una web sobre conversión de autos de combustión interna a eléctricos.",
  },
  M: {
    label: "Prompt medio",
    text: "Landing page para «VoltSwap», taller que convierte autos de combustión a 100% eléctricos: hero, proceso, servicios/paquetes, galería antes/después, precios y contacto.",
  },
  L: {
    label: "Prompt elaborado",
    text: "Landing premium de «VoltSwap» con marca/público definidos, proceso en 5 pasos, 3 paquetes (City/Range/Performance), galería, costos, testimonios, FAQ, footer; responsive, paleta grafito + cian, microinteracciones y accesibilidad AA.",
  },
};

const csv = readFileSync(join(ROOT, "evaluation", "scores.csv"), "utf8").trim().split("\n");
const header = csv[0].split(",");
const rows = csv.slice(1).map((line) => {
  const v = line.split(",");
  const o = {};
  header.forEach((h, i) => (o[h] = v[i]));
  return o;
});

const cells = [];
for (const m of MODELS) {
  for (const level of ["S", "M", "L"]) {
    const row = rows.find((r) => r.model === m.id && r.prompt === level);
    const thumbPath = join("evaluation", "screenshots", `${m.id}-${level}-desktop.png`);
    const cell = {
      model: m.id,
      level,
      site: `results/${m.id}/${level}/index.html`,
      thumb: existsSync(join(ROOT, thumbPath)) ? thumbPath.replace(/\\/g, "/") : null,
      thumbMobile: `evaluation/screenshots/${m.id}-${level}-mobile.png`,
      report: `evaluation/reports/${m.id}.html`,
    };
    if (row) {
      cell.total = Number(row.total_50);
      cell.scores = {};
      header.filter((h) => h.startsWith("d")).forEach((h) => (cell.scores[h] = Number(row[h])));
    }
    cells.push(cell);
  }
}

const manifest = {
  generated: new Date().toISOString(),
  title: "Design Colosseum",
  note: "7 modelos (baseline + 6 skills) × 3 niveles de prompt. Tema: conversión de autos de combustión a eléctricos. Scoring 1-5 en 10 dimensiones, /50 por celda.",
  rubric: RUBRIC,
  method: METHOD,
  prompts: PROMPTS,
  models: MODELS,
  cells,
};

writeFileSync(join(ROOT, "manifest.json"), JSON.stringify(manifest, null, 2));
console.log(`manifest.json escrito en la raíz: ${cells.length} celdas, ${MODELS.length} modelos.`);
