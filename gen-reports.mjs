/* Renderiza los informes Markdown de evaluation/ como páginas HTML estilizadas
   para usuario final (mismo tema oscuro que el visor).
   Entrada: evaluation/reports/*.md + evaluation/DECISION.md
   Salida:  los mismos nombres con extensión .html
   Uso: node gen-reports.mjs */
import { readFileSync, writeFileSync, readdirSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { marked } from "marked";

const ROOT = dirname(fileURLToPath(import.meta.url));
const REPORTS_DIR = join(ROOT, "evaluation", "reports");

marked.setOptions({ gfm: true, breaks: false });

function page(title, bodyHtml) {
  return `<!DOCTYPE html>
<html lang="es-MX">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${title} — Design Colosseum</title>
<style>
  :root {
    --bg:#0e1014; --surface:#171a21; --surface-2:#1e222b; --border:#2a2f3a;
    --text:#e6e8ec; --text-dim:#9aa0ac; --accent:#3ad8c4; --accent-dim:#1f8d7f;
  }
  * { box-sizing:border-box; margin:0; padding:0; }
  body {
    background:var(--bg); color:var(--text);
    font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing:antialiased; line-height:1.65;
  }
  .wrap { max-width:760px; margin:0 auto; padding:28px 24px 96px; }
  .topbar {
    display:flex; align-items:center; gap:12px; flex-wrap:wrap;
    border-bottom:1px solid var(--border); padding-bottom:18px; margin-bottom:32px;
  }
  .topbar .brand { font-size:15px; font-weight:700; }
  .topbar .tag {
    font-size:11px; color:var(--accent); border:1px solid var(--accent-dim);
    padding:2px 8px; border-radius:999px;
  }
  .topbar .back {
    margin-left:auto; font-size:13px; font-weight:600; color:var(--text);
    text-decoration:none; background:var(--surface-2); border:1px solid var(--border);
    padding:8px 15px 8px 12px; border-radius:999px; transition:all .15s ease;
  }
  .topbar .back:hover { border-color:var(--accent); color:var(--accent); }

  .prose h1 { font-size:28px; letter-spacing:-0.01em; margin:8px 0 20px; line-height:1.25; }
  .prose h2 { font-size:19px; margin:34px 0 12px; letter-spacing:-0.01em;
    padding-bottom:6px; border-bottom:1px solid var(--border); }
  .prose h3 { font-size:15px; margin:24px 0 8px; color:var(--text); }
  /* Texto largo justificado (regla global del entorno) */
  .prose p, .prose li {
    text-align:justify; text-justify:inter-word; hyphens:manual; -webkit-hyphens:manual;
  }
  .prose p { margin:12px 0; color:var(--text); }
  .prose ul, .prose ol { margin:12px 0 12px 22px; }
  .prose li { margin:5px 0; }
  .prose li::marker { color:var(--accent-dim); }
  .prose strong { color:#fff; font-weight:650; }
  .prose a { color:var(--accent); }
  .prose hr { border:0; border-top:1px solid var(--border); margin:30px 0; }
  .prose blockquote {
    margin:16px 0; padding:12px 18px; background:var(--surface);
    border-left:3px solid var(--accent-dim); border-radius:0 8px 8px 0; color:var(--text-dim);
  }
  .prose blockquote p { color:var(--text-dim); }
  .prose code {
    background:var(--surface-2); border:1px solid var(--border); border-radius:4px;
    padding:1px 5px; font-size:0.88em;
    font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;
  }
  .prose pre {
    background:var(--surface); border:1px solid var(--border); border-radius:10px;
    padding:16px; overflow:auto; margin:16px 0;
  }
  .prose pre code { background:none; border:0; padding:0; }
  .prose table {
    width:100%; border-collapse:collapse; margin:18px 0; font-size:13.5px;
  }
  .prose th, .prose td {
    border:1px solid var(--border); padding:8px 11px; text-align:left;
  }
  .prose th { background:var(--surface-2); font-weight:650; }
  .prose tr:nth-child(even) td { background:rgba(255,255,255,0.015); }
  .prose sub, .prose small { color:var(--text-dim); font-size:12px; }
  footer {
    margin-top:48px; padding-top:18px; border-top:1px solid var(--border);
    font-size:12px; color:var(--text-dim); text-align:center;
  }
</style>
</head>
<body>
<div class="wrap">
  <div class="topbar">
    <span class="brand">Design Colosseum</span>
    <span class="tag">informe</span>
    <a class="back" href="/">&larr; Volver al visor</a>
  </div>
  <article class="prose">
${bodyHtml}
  </article>
  <footer>Design Colosseum &middot; evaluación a ciegas &middot; 7 modelos &times; 3 prompts</footer>
</div>
</body>
</html>
`;
}

function titleFromMarkdown(md, fallback) {
  const m = md.match(/^#\s+(.+)$/m);
  return m ? m[1].replace(/[#*`]/g, "").trim() : fallback;
}

const targets = [];
for (const f of readdirSync(REPORTS_DIR)) {
  if (f.endsWith(".md")) targets.push(join(REPORTS_DIR, f));
}
targets.push(join(ROOT, "evaluation", "DECISION.md"));

let count = 0;
for (const mdPath of targets) {
  const md = readFileSync(mdPath, "utf8");
  const title = titleFromMarkdown(md, mdPath.split("/").pop());
  const html = page(title, marked.parse(md));
  const outPath = mdPath.replace(/\.md$/, ".html");
  writeFileSync(outPath, html);
  count++;
  console.log("  ✓ " + outPath.replace(ROOT + "/", ""));
}
console.log(`\n${count} informes renderizados a HTML.`);
