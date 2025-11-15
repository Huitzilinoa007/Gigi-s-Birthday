function toggleFlame(candle) {
  const flame = candle.querySelector(".flame");
  flame.classList.toggle("off");
  checkAllOff();
}

function checkAllOff() {
  const flames = document.querySelectorAll(".flame");
  const allOff = Array.from(flames).every((f) => f.classList.contains("off"));

  if (allOff) {
    clearInterval(window.balloonInterval);
    clearInterval(window.confettiInterval);

    const text = document.getElementById("wish-text");
    const cake = document.getElementById("cake");
    const title = document.getElementById("title");
    const main = document.getElementById("main-page");

    // Aplicar estilos CSS correctamente
    main.style.display = "flex";
    main.style.flexDirection = "column";
    main.style.justifyContent = "flex-start";
    main.style.alignItems = "center";

    text.style.opacity = "1";

    cake.classList.add("fade-out");
    title.classList.add("fade-out");
    cake.classList.add("hidden");

    setTimeout(() => {
      title.classList.add("hidden");

      document.body.style.background = "white";

      setTimeout(() => {
        text.classList.add("fade-out");

        setTimeout(() => {
          text.classList.add("hidden");
          main.style.display = "block";

          setTimeout(() => {
            main.style.opacity = "1";
          }, 50);
        }, 1200);
      }, 800);
    }, 1000);
  }
}

/* ============================================================
   ✅ NUEVA SECCIÓN — GLOBOS ANIMADOS
============================================================ */

function createBalloon() {
  const balloon = document.createElement("div");
  balloon.classList.add("balloon");

  balloon.style.left = Math.random() * 100 + "vw";
  balloon.style.animationDuration = 5 + Math.random() * 5 + "s";

  // color suave tipo fiesta
  const colors = ["#ff6b81", "#feca57", "#48dbfb", "#1dd1a1", "#a29bfe"];
  balloon.style.background = colors[Math.floor(Math.random() * colors.length)];

  document.body.appendChild(balloon);

  setTimeout(() => balloon.remove(), 12000);
}

// uno cada 0.8s
window.balloonInterval = setInterval(createBalloon, 800);

/* ============================================================
   ✅ NUEVA SECCIÓN — CONFETTI CONTINUO
============================================================ */

function spawnConfetti() {
  const colors = [
    "#ff3838",
    "#ff9f1a",
    "#fffa65",
    "#32ff7e",
    "#7efff5",
    "#18dcff",
    "#7d5fff",
    "#e84393",
  ];

  const conf = document.createElement("div");
  conf.classList.add("confetti");

  conf.style.left = Math.random() * 100 + "vw";
  conf.style.background = colors[Math.floor(Math.random() * colors.length)];
  conf.style.width = 8 + Math.random() * 6 + "px";
  conf.style.height = 8 + Math.random() * 6 + "px";

  conf.style.animationDuration = 3 + Math.random() * 3 + "s";

  document.body.appendChild(conf);

  setTimeout(() => conf.remove(), 7000);
}

// caída constante, pieza por pieza
window.confettiInterval = setInterval(spawnConfetti, 120);

/* ============================================================
   ✅ CONTROL DE SUBPÁGINAS (compatible con tu main.style.display = "block")
============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  const main = document.getElementById("main-page");

  // Ocultar main inicialmente para evitar errores
  if (main) {
    main.style.display = "none";
    main.style.opacity = "0";
  }

  // Abrir subpágina
  document.querySelectorAll("[data-open]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = document.getElementById(btn.dataset.open);
      if (!target) return;

      // Ocultar main
      main.style.opacity = "0";
      setTimeout(() => {
        main.style.display = "none";

        // Mostrar subpágina
        target.classList.add("active");
      }, 300);
    });
  });

  // Cerrar subpágina y volver al main
  document.querySelectorAll("[data-close]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = document.getElementById(btn.dataset.close);
      if (!target) return;

      // Ocultar subpágina
      target.classList.remove("active");

      setTimeout(() => {
        // Mostrar main
        main.style.display = "block";
        setTimeout(() => {
          main.style.opacity = "1";
        }, 30);
      }, 300);
    });
  });
});

const carrusel = document.getElementById("miCarrusel");
const textoDesc = document.getElementById("textoDescripcion");

carrusel.addEventListener("slid.bs.carousel", function (event) {
  const item = event.relatedTarget;
  const texto = item.getAttribute("data-desc");
  textoDesc.textContent = texto;
});
