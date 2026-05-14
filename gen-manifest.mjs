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
      report: `evaluation/reports/${m.id}.md`,
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
  prompts: PROMPTS,
  models: MODELS,
  cells,
};

writeFileSync(join(ROOT, "manifest.json"), JSON.stringify(manifest, null, 2));
console.log(`manifest.json escrito en la raíz: ${cells.length} celdas, ${MODELS.length} modelos.`);
