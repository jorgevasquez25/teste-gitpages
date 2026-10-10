// Botões "Fechar" das barras laterais, com botão flutuante para reabrir.
// A escolha fica salva no navegador de quem está lendo.
(function () {
  var KEY = "sigma-sidebars";
  var root = document.documentElement;
  var sidebars = [
    { name: "primary", label: "menu", reopen: "☰ Menu" },
    { name: "secondary", label: "índice", reopen: "≡ Índice" }
  ];

  function load() {
    try {
      return JSON.parse(localStorage.getItem(KEY)) || {};
    } catch (e) {
      return {};
    }
  }

  function save(state) {
    try {
      localStorage.setItem(KEY, JSON.stringify(state));
    } catch (e) {}
  }

  var state = load();

  function apply() {
    root.classList.toggle("sg-hide-primary", !!state.primary);
    root.classList.toggle("sg-hide-secondary", !!state.secondary);
  }

  function setHidden(name, hidden) {
    state[name] = hidden;
    save(state);
    apply();
  }

  function setup() {
    apply();
    sidebars.forEach(function (sidebar) {
      var inner = document.querySelector(".md-sidebar--" + sidebar.name + " .md-sidebar__inner");
      // Páginas sem títulos internos não têm índice: não há o que fechar.
      if (!inner || !inner.querySelector(".md-nav__list")) return;

      if (!inner.querySelector(".sg-close")) {
        var close = document.createElement("button");
        close.type = "button";
        close.className = "sg-close";
        close.setAttribute("aria-label", "Fechar " + sidebar.label);
        close.innerHTML = '<span aria-hidden="true">✕</span> Fechar';
        close.addEventListener("click", function () {
          setHidden(sidebar.name, true);
        });
        inner.insertBefore(close, inner.firstChild);
      }

      if (!document.querySelector(".sg-reopen--" + sidebar.name)) {
        var reopen = document.createElement("button");
        reopen.type = "button";
        reopen.className = "sg-reopen sg-reopen--" + sidebar.name;
        reopen.setAttribute("aria-label", "Abrir " + sidebar.label);
        reopen.textContent = sidebar.reopen;
        reopen.addEventListener("click", function () {
          setHidden(sidebar.name, false);
        });
        document.body.appendChild(reopen);
      }
    });
  }

  if (typeof document$ !== "undefined") {
    document$.subscribe(setup);
  } else if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setup);
  } else {
    setup();
  }
})();
