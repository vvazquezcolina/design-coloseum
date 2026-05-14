/* Design Colosseum — visor de resultados
   Consume viewer/manifest.json. Navegación de 2 niveles + detalle.
   Servir el RAÍZ del proyecto en localhost:3500; el visor vive en /viewer/. */

(function () {
  "use strict";

  var state = { manifest: null, level: null, view: "prompts" };

  var el = {
    crumbs: document.getElementById("crumbs"),
    screenPrompts: document.getElementById("screen-prompts"),
    screenGrid: document.getElementById("screen-grid"),
    screenDetail: document.getElementById("screen-detail"),
    prompts: document.getElementById("prompts"),
    grid: document.getElementById("grid"),
    gridTitle: document.getElementById("grid-title"),
    detailBar: document.getElementById("detail-bar"),
    detailFrame: document.getElementById("detail-frame")
  };

  function show(view) {
    state.view = view;
    el.screenPrompts.classList.toggle("hidden", view !== "prompts");
    el.screenGrid.classList.toggle("hidden", view !== "grid");
    el.screenDetail.classList.toggle("hidden", view !== "detail");
    if (view !== "detail") el.detailFrame.src = "about:blank";
    renderCrumbs();
    window.scrollTo(0, 0);
  }

  function renderCrumbs() {
    var m = state.manifest;
    var parts = ['<button data-nav="prompts">Prompts</button>'];
    if (state.level && state.view !== "prompts") {
      parts.push(" / ");
      var lbl = m.prompts[state.level].label;
      if (state.view === "grid") {
        parts.push("<span>" + lbl + "</span>");
      } else {
        parts.push('<button data-nav="grid">' + lbl + "</button>");
      }
    }
    el.crumbs.innerHTML = parts.join("");
    Array.prototype.forEach.call(el.crumbs.querySelectorAll("button"), function (b) {
      b.addEventListener("click", function () {
        var nav = b.getAttribute("data-nav");
        if (nav === "prompts") show("prompts");
        else if (nav === "grid") renderGrid(state.level);
      });
    });
  }

  function modelName(id) {
    var found = (state.manifest.models || []).filter(function (x) { return x.id === id; })[0];
    return found ? found.name : id;
  }

  function renderPrompts() {
    var m = state.manifest;
    var order = ["S", "M", "L"];
    el.prompts.innerHTML = "";
    order.forEach(function (lvl) {
      var p = m.prompts[lvl];
      if (!p) return;
      var count = m.cells.filter(function (c) { return c.level === lvl; }).length;
      var card = document.createElement("div");
      card.className = "prompt-card";
      card.setAttribute("role", "button");
      card.setAttribute("tabindex", "0");
      card.innerHTML =
        '<span class="lvl">NIVEL ' + lvl + '</span>' +
        "<h3>" + escapeHtml(p.label) + "</h3>" +
        "<p>" + escapeHtml(p.text) + "</p>" +
        '<span class="meta">' + count + " diseños</span>";
      var go = function () { renderGrid(lvl); };
      card.addEventListener("click", go);
      card.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); go(); }
      });
      el.prompts.appendChild(card);
    });
  }

  function renderGrid(level) {
    state.level = level;
    var m = state.manifest;
    el.gridTitle.textContent = m.prompts[level].label + " — " + m.prompts[level].text;
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
        ? '<div class="score"><b>' + c.total + "</b><span>/ 50</span></div>"
        : '<div class="score unscored"><b>—</b><span>sin puntuar</span></div>';

      card.innerHTML =
        thumbHtml +
        '<div class="body">' +
        '<span class="name">' + escapeHtml(modelName(c.model)) + "</span>" +
        '<span class="sub">' + escapeHtml(c.model) + " · nivel " + c.level + "</span>" +
        scoreHtml +
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

  function renderDetail(c) {
    el.detailBar.innerHTML = "";

    var back = document.createElement("button");
    back.className = "btn";
    back.textContent = "← Volver";
    back.addEventListener("click", function () { renderGrid(state.level); });

    var title = document.createElement("span");
    title.className = "title";
    title.innerHTML = escapeHtml(modelName(c.model)) +
      " <span>· " + escapeHtml(c.model) + " · nivel " + c.level + "</span>";

    var openTab = document.createElement("a");
    openTab.className = "btn primary";
    openTab.textContent = "Abrir en pestaña ↗";
    openTab.href = c.site;
    openTab.target = "_blank";
    openTab.rel = "noopener";

    el.detailBar.appendChild(back);
    el.detailBar.appendChild(title);
    el.detailBar.appendChild(openTab);

    if (c.report) {
      var report = document.createElement("a");
      report.className = "btn";
      report.textContent = "Ver informe del modelo ↗";
      report.href = c.report;
      report.target = "_blank";
      report.rel = "noopener";
      el.detailBar.appendChild(report);
    }

    el.detailFrame.src = c.site;
    show("detail");
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (ch) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch];
    });
  }

  function fail(msg) {
    document.getElementById("app").innerHTML =
      '<p style="color:#9aa0ac">No se pudo cargar el visor: ' + escapeHtml(msg) +
      "<br>Genera <code>viewer/manifest.json</code> y sirve el raíz del proyecto en localhost:3500.</p>";
  }

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
