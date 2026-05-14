/* Design Colosseum — captura screenshots de las 21 celdas.
   Usa puppeteer-core + el Chrome del sistema (sin descargar navegador).
   Salida: evaluation/screenshots/<NN-modelo>-<NIVEL>-{desktop,mobile}.png
   Uso: node evaluation/screenshot.mjs */

import puppeteer from "puppeteer-core";
import { fileURLToPath, pathToFileURL } from "url";
import { dirname, join } from "path";
import { existsSync, mkdirSync, readdirSync } from "fs";

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)));
const RESULTS = join(ROOT, "results");
const OUT = join(ROOT, "evaluation", "screenshots");
const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

const MODELS = [
  "00-baseline", "01-design-md", "02-ui-ux-pro-max", "03-impeccable",
  "04-huashu-design", "05-taste-skill", "06-sesh-acid-pipeline",
];
const LEVELS = ["S", "M", "L"];

const VIEWPORTS = {
  desktop: { width: 1440, height: 900, deviceScaleFactor: 1 },
  mobile: { width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true },
};

if (!existsSync(OUT)) mkdirSync(OUT, { recursive: true });

// Parche: hace que CADA elemento observado por IntersectionObserver se
// considere visible de inmediato. Mata el fallo de "zonas en blanco" en
// capturas full-page con animaciones reveal-on-scroll.
function patchIntersectionObserver() {
  const realIO = window.IntersectionObserver;
  window.IntersectionObserver = class {
    constructor(cb) { this._cb = cb; this._real = new realIO(() => {}); }
    observe(el) {
      try {
        this._cb(
          [{
            isIntersecting: true, intersectionRatio: 1, target: el,
            boundingClientRect: el.getBoundingClientRect(),
            intersectionRect: el.getBoundingClientRect(),
            rootBounds: null, time: performance.now(),
          }],
          this
        );
      } catch (e) { /* noop */ }
    }
    unobserve() {} disconnect() {} takeRecords() { return []; }
  };
}

async function autoScroll(page) {
  // Para animaciones basadas en scroll listeners / GSAP ScrollTrigger.
  await page.evaluate(async () => {
    await new Promise((res) => {
      let y = 0;
      const step = 300;
      const timer = setInterval(() => {
        window.scrollBy(0, step);
        y += step;
        if (y >= document.body.scrollHeight + window.innerHeight) {
          clearInterval(timer);
          window.scrollTo(0, 0);
          res();
        }
      }, 110);
    });
  });
  await new Promise((r) => setTimeout(r, 600));
}

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: "new",
  args: ["--no-sandbox", "--hide-scrollbars", "--force-color-profile=srgb"],
});

let ok = 0, miss = 0, fail = 0;

for (const model of MODELS) {
  for (const level of LEVELS) {
    const cellDir = join(RESULTS, model, level);
    const indexPath = join(cellDir, "index.html");
    if (!existsSync(indexPath)) {
      console.log(`MISS  ${model}/${level} — sin index.html`);
      miss++;
      continue;
    }
    const url = pathToFileURL(indexPath).href;
    for (const [name, vp] of Object.entries(VIEWPORTS)) {
      const page = await browser.newPage();
      try {
        await page.evaluateOnNewDocument(patchIntersectionObserver);
        await page.setViewport(vp);
        await page.goto(url, { waitUntil: "networkidle2", timeout: 45000 });
        await autoScroll(page);
        const file = join(OUT, `${model}-${level}-${name}.png`);
        await page.screenshot({ path: file, fullPage: true });
        console.log(`OK    ${model}/${level} ${name}`);
        ok++;
      } catch (e) {
        console.log(`FAIL  ${model}/${level} ${name} — ${e.message}`);
        fail++;
      } finally {
        await page.close();
      }
    }
  }
}

await browser.close();
console.log(`\nListo. OK=${ok}  MISS=${miss}  FAIL=${fail}`);
console.log("PNGs en:", OUT);
console.log("Contenido:", readdirSync(OUT).length, "archivos");
