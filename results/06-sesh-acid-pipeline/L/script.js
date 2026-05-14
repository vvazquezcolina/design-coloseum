/* ============================================================
   VoltSwap — script.js
   Microinteractions: scroll reveal, conversion-meter HUD,
   process battery-charge, before/after slider, accordion,
   mobile nav, AI chatbot demo, watermark dismiss.
   All animation respects prefers-reduced-motion.
   ============================================================ */
(function () {
  'use strict';
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Mobile nav toggle ---------- */
  var burger = document.querySelector('.hamburger');
  var nav = document.getElementById('primary-nav');
  if (burger && nav) {
    burger.addEventListener('click', function () {
      var open = burger.getAttribute('aria-expanded') === 'true';
      burger.setAttribute('aria-expanded', String(!open));
      nav.classList.toggle('is-open', !open);
    });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        burger.setAttribute('aria-expanded', 'false');
        nav.classList.remove('is-open');
      });
    });
  }

  /* ---------- Watermark dismiss ---------- */
  var wmClose = document.querySelector('.watermark__close');
  if (wmClose) {
    wmClose.addEventListener('click', function () {
      var wm = wmClose.closest('.watermark');
      if (wm) wm.style.display = 'none';
    });
  }

  /* ---------- Scroll reveal ---------- */
  var revealEls = document.querySelectorAll('.reveal');
  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  }

  /* ---------- Conversion-meter HUD: fill on view ---------- */
  var hudFill = document.querySelector('.hud__fill');
  var hudPct = document.querySelector('.hud__pct b');
  if (hudFill) {
    var runHud = function () {
      if (reduceMotion) {
        hudFill.style.width = '100%';
        if (hudPct) hudPct.textContent = '100';
        return;
      }
      requestAnimationFrame(function () { hudFill.style.width = '100%'; });
      if (hudPct) {
        var n = 0;
        var tick = setInterval(function () {
          n += 4;
          if (n >= 100) { n = 100; clearInterval(tick); }
          hudPct.textContent = String(n);
        }, 95);
      }
    };
    if ('IntersectionObserver' in window) {
      var hudIo = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { runHud(); hudIo.disconnect(); }
        });
      }, { threshold: 0.4 });
      hudIo.observe(hudFill);
    } else { runHud(); }
  }

  /* ---------- Process: battery charge as steps enter ---------- */
  var steps = Array.prototype.slice.call(document.querySelectorAll('.step'));
  var railFill = document.querySelector('.process__rail-fill');
  if (steps.length && 'IntersectionObserver' in window) {
    var charged = 0;
    var stepIo = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('is-charged');
          stepIo.unobserve(e.target);
          charged++;
          if (railFill) {
            railFill.style.height = Math.round((charged / steps.length) * 100) + '%';
          }
        }
      });
    }, { threshold: 0.55 });
    steps.forEach(function (s) { stepIo.observe(s); });
  } else if (steps.length) {
    steps.forEach(function (s) { s.classList.add('is-charged'); });
    if (railFill) railFill.style.height = '100%';
  }

  /* ---------- Before/After slider ---------- */
  var ba = document.querySelector('.ba');
  if (ba) {
    var after = ba.querySelector('.ba__after');
    var handle = ba.querySelector('.ba__handle');
    var grip = ba.querySelector('.ba__grip');
    var dragging = false;

    var setPos = function (clientX) {
      var rect = ba.getBoundingClientRect();
      var pct = ((clientX - rect.left) / rect.width) * 100;
      pct = Math.max(2, Math.min(98, pct));
      after.style.clipPath = 'inset(0 0 0 ' + pct + '%)';
      handle.style.left = pct + '%';
      grip.style.left = pct + '%';
      ba.setAttribute('aria-valuenow', String(Math.round(pct)));
    };
    var start = function () { dragging = true; };
    var stop = function () { dragging = false; };
    var move = function (ev) {
      if (!dragging) return;
      var x = ev.touches ? ev.touches[0].clientX : ev.clientX;
      setPos(x);
    };
    ba.addEventListener('mousedown', function (e) { start(); setPos(e.clientX); });
    ba.addEventListener('touchstart', function (e) { start(); setPos(e.touches[0].clientX); }, { passive: true });
    window.addEventListener('mousemove', move);
    window.addEventListener('touchmove', move, { passive: true });
    window.addEventListener('mouseup', stop);
    window.addEventListener('touchend', stop);
    /* keyboard support */
    ba.setAttribute('role', 'slider');
    ba.setAttribute('tabindex', '0');
    ba.setAttribute('aria-valuemin', '0');
    ba.setAttribute('aria-valuemax', '100');
    ba.setAttribute('aria-valuenow', '50');
    ba.setAttribute('aria-label', 'Comparador antes y despues de la conversion');
    ba.addEventListener('keydown', function (e) {
      var cur = parseFloat(ba.getAttribute('aria-valuenow')) || 50;
      if (e.key === 'ArrowLeft') { cur -= 4; }
      else if (e.key === 'ArrowRight') { cur += 4; }
      else { return; }
      e.preventDefault();
      cur = Math.max(2, Math.min(98, cur));
      after.style.clipPath = 'inset(0 0 0 ' + cur + '%)';
      handle.style.left = cur + '%';
      grip.style.left = cur + '%';
      ba.setAttribute('aria-valuenow', String(Math.round(cur)));
    });
  }

  /* ---------- FAQ: single-open accordion ---------- */
  var faqItems = document.querySelectorAll('.faq__item');
  faqItems.forEach(function (item) {
    item.addEventListener('toggle', function () {
      if (item.open) {
        faqItems.forEach(function (other) {
          if (other !== item) other.open = false;
        });
      }
    });
  });

  /* ---------- AI Chatbot demo ---------- */
  var cbBtn = document.querySelector('.chatbot-btn');
  var cb = document.querySelector('.chatbot');
  var cbClose = document.querySelector('.chatbot__close');
  var cbForm = document.querySelector('.chatbot__form');
  var cbInput = cbForm ? cbForm.querySelector('input') : null;
  var cbLog = document.querySelector('.chatbot__log');

  var openChat = function () {
    if (!cb) return;
    cb.classList.add('is-open');
    cbBtn.setAttribute('aria-expanded', 'true');
    if (cbInput) cbInput.focus();
  };
  var closeChat = function () {
    if (!cb) return;
    cb.classList.remove('is-open');
    cbBtn.setAttribute('aria-expanded', 'false');
    cbBtn.focus();
  };
  if (cbBtn) cbBtn.addEventListener('click', function () {
    cb.classList.contains('is-open') ? closeChat() : openChat();
  });
  if (cbClose) cbClose.addEventListener('click', closeChat);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && cb && cb.classList.contains('is-open')) closeChat();
  });
  if (cbForm) {
    cbForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var text = (cbInput.value || '').trim();
      if (!text) return;
      var u = document.createElement('div');
      u.className = 'msg msg--user';
      u.textContent = text;
      cbLog.appendChild(u);
      cbInput.value = '';
      cbLog.scrollTop = cbLog.scrollHeight;
      setTimeout(function () {
        var b = document.createElement('div');
        b.className = 'msg msg--bot';
        b.textContent = 'Esta es una vista previa de demostracion. Una vez activado, ' +
          'funcionare con IA para resolver dudas sobre conversiones, agendar tu ' +
          'diagnostico y atender a tus clientes 24/7 en espanol.';
        cbLog.appendChild(b);
        cbLog.scrollTop = cbLog.scrollHeight;
      }, 600);
    });
  }

  /* ---------- Footer year ---------- */
  var y = document.getElementById('year');
  if (y) y.textContent = String(new Date().getFullYear());
})();
