/* Design Colosseum — visor de resultados
   Consume manifest.json (mismo directorio). Navegación de 3 pasos:
   prompts -> grilla de diseños -> detalle de celda con desglose de calificación.
   Servir el RAÍZ del proyecto como sitio estático. */

(function () {
  "use strict";

  var state = { manifest: null, level: null, view: "prompts" };

  var el = {
    screenPrompts: document.getElementById("screen-prompts"),
    screenGrid: document.getElementById("screen-grid"),
    screenDetail: document.getElementById("screen-detail"),
    prompts: document.getElementById("prompts"),
    method: document.getElementById("method"),
    grid: document.getElementById("grid"),
    gridTitle: document.getElementById("grid-title"),
    gridHere: document.getElementById("grid-here"),
    detailHere: document.getElementById("detail-here"),
    scorePanelHost: document.getElementById("score-panel-host"),
    detailBar: document.getElementById("detail-bar"),
    detailFrame: document.getElementById("detail-frame"),
  };

  function show(view) {
    state.view = view;
    el.screenPrompts.classList.toggle("hidden", view !== "prompts");
    el.screenGrid.classList.toggle("hidden", view !== "grid");
    el.screenDetail.classList.toggle("hidden", view !== "detail");
    if (view !== "detail") el.detailFrame.src = "about:blank";
    window.scrollTo(0, 0);
  }

  function modelName(id) {
    var found = (state.manifest.models || []).filter(function (x) { return x.id === id; })[0];
    return found ? found.name : id;
  }

  // --- Navegación: los botones .backbtn de cada pantalla ---
  function wireBackButtons() {
    Array.prototype.forEach.call(document.querySelectorAll(".backbtn"), function (b) {
      b.addEventListener("click", function () {
        var nav = b.getAttribute("data-nav");
        if (nav === "prompts") show("prompts");
        else if (nav === "grid") renderGrid(state.level);
      });
    });
  }

  // --- Pantalla 1: prompts + panel "cómo se calificó" ---
  function renderPrompts() {
    var m = state.manifest;
    el.prompts.innerHTML = "";
    ["S", "M", "L"].forEach(function (lvl) {
      var p = m.prompts[lvl];
      if (!p) return;
      var count = m.cells.filter(function (c) { return c.level === lvl; }).length;
      var card = document.createElement("div");
      card.className = "prompt-card";
      card.setAttribute("role", "button");
      card.setAttribute("tabindex", "0");
      card.innerHTML =
        '<span class="lvl">NIVEL ' + lvl + "</span>" +
        "<h3>" + escapeHtml(p.label) + "</h3>" +
        "<p>" + escapeHtml(p.text) + "</p>" +
        '<span class="meta">Ver los ' + count + " diseños &rarr;</span>";
      var go = function () { renderGrid(lvl); };
      card.addEventListener("click", go);
      card.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); go(); }
      });
      el.prompts.appendChild(card);
    });

    renderMethod();
  }

  function renderMethod() {
    var m = state.manifest;
    var meth = m.method || {};
    var rubric = m.rubric || [];
    var dimsHtml = rubric
      .map(function (d, i) {
        return '<div class="d"><b>' + (i + 1) + ". " + escapeHtml(d.label) + "</b> &mdash; " +
          escapeHtml(d.look || "") + "</div>";
      })
      .join("");
    el.method.innerHTML =
      '<h3><span class="ico">i</span> Cómo se calificó cada diseño</h3>' +
      "<ul>" +
      (meth.blind ? "<li>" + escapeHtml(meth.blind) + "</li>" : "") +
      (meth.scale ? "<li>" + escapeHtml(meth.scale) + "</li>" : "") +
      (meth.perCell ? "<li>" + escapeHtml(meth.perCell) + "</li>" : "") +
      (meth.perModel ? "<li>" + escapeHtml(meth.perModel) + "</li>" : "") +
      "</ul>" +
      (dimsHtml ? '<div class="dims">' + dimsHtml + "</div>" : "");
  }

  // --- Pantalla 2: grilla de diseños ---
  function renderGrid(level) {
    state.level = level;
    var m = state.manifest;
    var prompt = m.prompts[level];
    el.gridHere.textContent = prompt.label + " (nivel " + level + ")";
    el.gridTitle.textContent = "7 diseños para: " + prompt.text;
    el.grid.innerHTML = "";

    var cells = m.cells
      .filter(function (c) { return c.level === level; })
      .sort(function (a, b) { return a.model.localeCompare(b.model); });

    cells.forEach(function (c) {
      var card = document.createElement("div");
      card.className = "cell-card";
      card.setAttribute("role", "button");
      card.setAttribute("tabindex", "0");

      var thumbHtml = c.thumb
        ? '<div class="thumb" style="background-image:url(\'' + c.thumb + "')\"></div>"
        : '<div class="thumb empty">sin screenshot</div>';

      var scoreHtml = (typeof c.total === "number")
        ? '<div class="score"><b>' + c.total + "</b><span>/ 50 puntos</span></div>"
        : '<div class="score unscored"><b>&mdash;</b><span>sin puntuar</span></div>';

      card.innerHTML =
        thumbHtml +
        '<div class="body">' +
        '<span class="name">' + escapeHtml(modelName(c.model)) + "</span>" +
        '<span class="sub">' + escapeHtml(c.model) + " &middot; nivel " + c.level + "</span>" +
        scoreHtml +
        '<span class="open-hint">Clic para ver el sitio y el desglose de la nota &rarr;</span>' +
        "</div>";

      var go = function () { renderDetail(c); };
      card.addEventListener("click", go);
      card.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); go(); }
      });
      el.grid.appendChild(card);
    });

    show("grid");
  }

  // --- Pantalla 3: detalle de celda ---
  function renderDetail(c) {
    var m = state.manifest;
    el.detailHere.textContent =
      modelName(c.model) + " — " + m.prompts[c.level].label + " (nivel " + c.level + ")";

    renderScorePanel(c);

    // Barra de acciones
    el.detailBar.innerHTML = "";
    var title = document.createElement("span");
    title.className = "title";
    title.innerHTML = escapeHtml(modelName(c.model)) +
      " <span>&middot; " + escapeHtml(c.model) + " &middot; nivel " + c.level + "</span>";
    var spacer = document.createElement("span");
    spacer.className = "spacer";

    var openTab = document.createElement("a");
    openTab.className = "btn primary";
    openTab.textContent = "Abrir el sitio en pestaña ↗";
    openTab.href = c.site;
    openTab.target = "_blank";
    openTab.rel = "noopener";

    el.detailBar.appendChild(title);
    el.detailBar.appendChild(spacer);
    el.detailBar.appendChild(openTab);

    if (c.report) {
      var report = document.createElement("a");
      report.className = "btn";
      report.textContent = "Informe completo del modelo ↗";
      report.href = c.report;
      report.target = "_blank";
      report.rel = "noopener";
      el.detailBar.appendChild(report);
    }

    el.detailFrame.src = c.site;
    show("detail");
  }

  function renderScorePanel(c) {
    var m = state.manifest;
    var rubric = m.rubric || [];

    if (typeof c.total !== "number" || !c.scores) {
      el.scorePanelHost.innerHTML =
        '<div class="score-panel"><div class="sp-head"><h3>Calificación</h3></div>' +
        '<div class="sp-note">Esta celda no fue puntuada.</div></div>';
      return;
    }

    var rows = rubric
      .map(function (d, i) {
        var v = c.scores[d.key];
        var bars = "";
        for (var k = 1; k <= 5; k++) bars += '<i class="' + (k <= v ? "on" : "") + '"></i>';
        return (
          '<div class="dim-row" title="' + escapeHtml(d.look || "") + '">' +
          '<span class="dim-label">' + (i + 1) + ". " + escapeHtml(d.label) + "</span>" +
          '<span class="dim-bar">' + bars + "</span>" +
          '<span class="dim-val">' + v + "/5</span>" +
          "</div>"
        );
      })
      .join("");

    el.scorePanelHost.innerHTML =
      '<div class="score-panel">' +
      '<div class="sp-head">' +
      "<h3>Calificación de esta celda</h3>" +
      '<span class="total"><b>' + c.total + "</b> / 50</span>" +
      "</div>" +
      '<div class="sp-note">El total es la suma de las 10 dimensiones (1&ndash;5 cada una). ' +
      "Pasa el cursor sobre cada dimensión para ver qué evalúa.</div>" +
      '<div class="dims-grid">' + rows + "</div>" +
      '<div class="sp-foot">' +
      (m.method && m.method.blind ? escapeHtml(m.method.blind) : "") +
      "</div>" +
      "</div>";
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (ch) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch];
    });
  }

  function fail(msg) {
    document.getElementById("app").innerHTML =
      '<p style="color:#9aa0ac">No se pudo cargar el visor: ' + escapeHtml(msg) +
      "<br>Genera <code>manifest.json</code> (node gen-manifest.mjs) y sirve el raíz del proyecto.</p>";
  }

  wireBackButtons();

  fetch("manifest.json", { cache: "no-store" })
    .then(function (r) {
      if (!r.ok) throw new Error("manifest.json HTTP " + r.status);
      return r.json();
    })
    .then(function (data) {
      state.manifest = data;
      renderPrompts();
      show("prompts");
    })
    .catch(function (e) { fail(e.message); });
})();
