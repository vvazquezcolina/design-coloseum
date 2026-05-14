# 🏟️ Design Colosseum

**A blind, controlled experiment: do AI "design skills" actually make AI design better?**

Six design-focused AI skills were put in an arena against each other — and against a
no-skill control. Each one generated the **same website three times** (short, medium and
long prompts). All 21 sites were then scored **blind**, by code, across **10 design
dimensions**. The result is a browsable verdict on which design skill is worth adopting.

🔗 **[Live results viewer →](https://design-colosseum.vercel.app)** &nbsp;·&nbsp; 📊 [`evaluation/DECISION.md`](evaluation/DECISION.md) &nbsp;·&nbsp; 🗂️ [`evaluation/scores.csv`](evaluation/scores.csv)

---

## The question

AI "skills" for design are everywhere — curated rule packs, queryable design databases,
multi-phase pipelines. They *claim* to make a model design better. **Do they?** And if so,
**which one**, and **by how much** over just asking the model directly?

The only honest way to answer is a controlled comparison: same base model, same brief,
same output contract, one variable changed at a time.

## The arena

| | |
|---|---|
| **Contenders** | 6 design skills + **1 no-skill baseline** (the control) |
| **Task** | A landing page for *VoltSwap*, a workshop that converts combustion cars to 100% electric |
| **Prompt levels** | **S** (one line) · **M** (a paragraph) · **L** (a full creative brief) — same topic, so prompt length is the only variable |
| **Cells** | 7 contenders × 3 prompts = **21 self-contained websites** |
| **Isolation** | Each site built by a **fresh, isolated agent** with access *only* to its assigned skill — no cross-contamination, full traceability |
| **Scoring** | **Blind** (by code, model name hidden), **1–5 on 10 dimensions**, /50 per cell |

The 10 dimensions: first impression · visual hierarchy · typography · color & contrast ·
spacing & rhythm · responsive · motion & interaction · accessibility · code quality ·
prompt adherence.

## The verdict

| # | Skill | S | M | L | **Total /150** | vs. baseline |
|---|-------|---|---|---|----------------|--------------|
| 🥇 | **impeccable** | 46 | 46 | 48 | **140** | **+20** |
| 🥈 | ui-ux-pro-max | 41 | 42 | 44 | 127 | +7 |
| 🥉 | **baseline** *(no skill — the control)* | 39 | 39 | 42 | **120** | — |
| 4 | taste-skill | 39 | 38 | 42 | 119 | −1 |
| 5 | design.md \* | 38 | 37 | 40 | 115 | −5 |
| 6 | sesh-acid-pipeline \* | 35 | 38 | 38 | 111 | −9 |
| 7 | huashu-design | 36 | 35 | 39 | 110 | −10 |

<sub>\* Different category of tool — `design.md` documents design systems; `sesh-acid-pipeline` is a sales pipeline where design is one phase. Scored, but read in context.</sub>

### 🔑 Key finding

> **Only 2 of 6 skills beat the no-skill baseline.** The other four tied or *lost* to
> simply asking the model directly — they added invocation friction without adding
> quality. A design skill is only worth it if its **ceiling** clears the baseline's
> **floor**.

**Winner — `impeccable`:** the only contender that raises the ceiling, not just the
floor. Its *weakest* cell (46) beats every other skill's *best* cell. It already shines on
the one-line prompt — it doesn't need a detailed brief to perform. It's the only output
that looks *designed*, not *generated*.

## Browse it yourself

The [**results viewer**](https://design-colosseum.vercel.app) is a tiny static app:

1. **Pick a prompt level** (S / M / L)
2. **See all 7 designs** side by side, each with its blind score
3. **Click any card** to open the actual generated site in-frame, plus a link to that
   skill's full written report

Or run it locally:

```bash
python3 -m http.server 3500    # then open http://localhost:3500
```

## What's in here

```
.
├── index.html / app.js / manifest.json   ← the results viewer (static, no build)
├── results/<skill>/<S|M|L>/               ← the 21 generated websites + run-notes
├── evaluation/
│   ├── DECISION.md                        ← the final verdict
│   ├── scores.csv                         ← full score matrix (cell × dimension)
│   ├── rubric.md                          ← the 10-dimension scoring rubric
│   ├── reports/                           ← 7 individual skill reports
│   ├── screenshots/                       ← desktop captures of all 21 cells
│   └── screenshot.mjs                     ← Puppeteer capture script
├── prompts/prompts.md                     ← the 3 frozen prompts
├── PLAN.md / _AGENT_BRIEF.md              ← experiment design & agent contracts
└── gen-manifest.mjs                       ← builds manifest.json from scores.csv
```

## How it was built

The whole pipeline ran as an **orchestrated multi-agent harness**:

- **21 isolated generator agents** — one per cell, each given *only* its assigned skill
  and the frozen prompt for its level. No agent could see another's output.
- **Automated capture** — a Puppeteer script screenshots all 21 sites at desktop (1440px)
  and mobile (390px), with an `IntersectionObserver` patch so scroll-reveal animations
  don't leave blank captures.
- **Blind scoring** — cells scored by code, model identity hidden until scoring was done,
  backed by an objective code-quality pass (semantic HTML, ARIA, focus states,
  `prefers-reduced-motion`).
- **Static viewer** — zero-build, deployed to Vercel.

## The contenders

| Skill | Source | Type |
|-------|--------|------|
| `impeccable` 🥇 | [pbakaus/impeccable](https://github.com/pbakaus/impeccable) | Design skill + slash commands |
| `ui-ux-pro-max` 🥈 | [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | Skill + queryable design DB |
| `taste-skill` | [leonxlnx/taste-skill](https://github.com/leonxlnx/taste-skill) | Markdown skill with "dials" |
| `design.md` | [google-labs-code/design.md](https://github.com/google-labs-code/design.md) | Design-system format + CLI |
| `sesh-acid-pipeline` | [Oruga420/claude-code-skills](https://github.com/Oruga420/claude-code-skills) | 5-phase sales pipeline |
| `huashu-design` | [alchaincyf/huashu-design](https://github.com/alchaincyf/huashu-design) | Design skill (prototypes/slides) |

All skills are the property of their respective authors and were used only to generate
comparison artifacts. The cloned skill repos themselves are **not** redistributed here.

---

<sub>Built with Claude Code · controlled experiment, May 2026 · 7 contenders, 21 sites, 1 verdict.</sub>
