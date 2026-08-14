/* =========================================================
   LOS MICHIS — script.js
   Para agregar contenido nuevo, buscá al integrante acá abajo
   y sumale un objeto dentro de su lista "items". No hace falta
   tocar el HTML ni el CSS.

   Cada item tiene esta forma:
   {
     tipo: "youtube" | "videojuego" | "pagina" | "otro",
     titulo: "Nombre corto del contenido",
     descripcion: "Una o dos líneas contando qué es y por qué está bueno.",
     link: "https://..."   (a YouTube, Mediafire, u otra página)
   }
   ========================================================= */

const TIPOS = {
  youtube:    { label: "VIDEO", clase: "tipo-video" },
  videojuego: { label: "JUEGO", clase: "tipo-juego" },
  pagina:     { label: "WEB",   clase: "tipo-web"   },
  Canal:     { label: "CANAL",   clase: "tipo-canal"   },
  otro:       { label: "OTRO",  clase: "tipo-otro"  },
};

const miembros = [
  {
    id: "benjamin-hernando",
    numero: "01",
    nombre: "Benjamín Hernando",
    iniciales: "BH",
    foto: "assets/integrantes/benjamin-hernando.jpg",
    descripcion: "Hernando es la mente prodigia de los michis, con un aura inminente y hermosura angelical, sus exitos hablan por si solo.",
    items: [
      {
        tipo: "videojuego",
        titulo: "Geo Jump",
        descripcion: "Geo Jump fue el proyecto que lo inició todo para Los Michis y una joya emblemática de la ESIM. Creado gracias a la colaboración de casi todo el grupo, el juego destacó por su apasionada comunidad de speedrunners, quienes llevaron la experiencia al límite compitiendo por superar récords. Más que un simple juego, Geo Jump demostró el potencial del trabajo en equipo, consolidando una comunidad fiel y un legado inolvidable en la historia de la ESIM..",
        imagen: "assets/items/geo-jump.jpg",
        link: "https://scratch.mit.edu/projects/1058009583",
      },
    ],
  },
  {
    id: "mauricio-martinez",
    numero: "02",
    nombre: "Mauricio Martínez",
    iniciales: "MM",
    foto: "assets/integrantes/mauricio-martinez.jpg",
    descripcion: "Mauri es una de las mentes maestras de michis, creador de muchisimos proyectos y linuxero de corazon ",
    items: [
      {
        tipo: "Canal",
        titulo: "Mauriprod",
        descripcion: "Considerado una auténtica joya contemporánea, este creador ha demostrado una versatilidad única al liderar diversos proyectos que abarcan desde composiciones musicales hasta ingeniosas propuestas cómicas. Su canal funciona como un verdadero patrimonio a la imaginación, reuniendo un valioso archivo de videos centrados en el universo de Los Michis; un espacio donde la creatividad no tiene límites y donde, según cuentan las leyendas de la comunidad, aún descansa un aura de misterio debido a la gran LOST MEDIA que alguna vez formó parte de su historia.",
        imagen: "assets/items/mauriprod.jpg",
        link: "https://www.youtube.com/@mauriprod",
      },
    ],
  },
  {
    id: "juan-perez",
    numero: "03",
    nombre: "Juan Pérez",
    iniciales: "JP",
    foto: "assets/integrantes/juan-perez.jpg",
    descripcion: "El perez, El Zurako, WHOL. El mas fachero/Rompecorazones y con mas aura de los Michis.",
    items: [],
  },
  {
    id: "lautaro-edelman",
    numero: "04",
    nombre: "Lautaro Edelman",
    iniciales: "LE",
    foto: "assets/integrantes/lautaro-edelman.jpg",
    descripcion: "Lauta, el ricky ricon, Edelman, es conocido por sus dotes de tecnologia y por que su casa es el spot de juntadas.",
    items: [],
  },
  {
    id: "juan-benitez",
    numero: "05",
    nombre: "Juan Benítez",
    iniciales: "JB",
    foto: "assets/integrantes/juan-benitez.jpg",
    descripcion: "Juanma es el integrante mas pavo, nombrado rey IA por su chatGTP customizado.",
    items: [],
  },
  {
    id: "guillermo-maj",
    numero: "06",
    nombre: "Guillermo Maj",
    iniciales: "GM",
    foto: "",
    descripcion: "Maj, el integrante que descendio y quedo en tercero, su nombre es usado en muchos memes internos.",
    items: [],
  },
  {
    id: "tobias-karabyn",
    numero: "07",
    nombre: "Tobías Karabyn",
    iniciales: "TK",
    foto: "assets/integrantes/tobias-karabyn.jpg",
    descripcion: "Tobi es el integrante fugaz, pocas veces aparece pero cuando lo hace la juntada se pone chingona, cada una de sus apariciones es memorable.",
    items: [],
  },
  {
    id: "joaquin-caballero",
    numero: "08",
    nombre: "Joaquín Caballero",
    iniciales: "JC",
    foto: "assets/integrantes/joaquin-caballero.jpg",
    descripcion: "Joa es el novato de los michis, nuevo integrante que nunca viene a las juntadas pero por su calidad de amistad es merecedor de pertenecer al grupo.",
    items: [],
  },
];

/* ========================= Render ========================= */

function metaTexto(cantidad) {
  if (cantidad === 0) return "Expediente vacío";
  if (cantidad === 1) return "1 ítem archivado";
  return `${cantidad} ítems archivados`;
}

function primerNombre(nombreCompleto) {
  return nombreCompleto.split(" ")[0];
}

function avatarHTML(miembro, clase) {
  if (miembro.foto) {
    return `<span class="${clase} ${clase}--foto" style="background-image:url('${miembro.foto}')" role="img" aria-label="Foto de ${miembro.nombre}"></span>`;
  }
  return `<span class="${clase}">${miembro.iniciales}</span>`;
}

function renderItems(items) {
  if (!items || items.length === 0) {
    return `<div class="vacio">Todavía no se subió nada acá.</div>`;
  }

  const filas = items
    .map((it) => {
      const tipo = TIPOS[it.tipo] || TIPOS.otro;

      return `
        <li class="item">

          ${
            it.imagen
              ? `
                <div class="item__imagen">
                  <img 
                    src="${it.imagen}" 
                    alt="Imagen de ${it.titulo}"
                    loading="lazy"
                  >
                </div>
              `
              : ""
          }

          <span class="stamp ${tipo.clase}">${tipo.label}</span>

          <div class="item__body">
            <h4 class="item__titulo">${it.titulo}</h4>
            <p class="item__descripcion">${it.descripcion}</p>
          </div>

          <a 
            class="item__link" 
            href="${it.link}" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Abrir ↗
          </a>

        </li>`;
    })
    .join("");

  return `<ul class="items">${filas}</ul>`;
}

function renderGridFichas() {
  const contenedor = document.getElementById("grid-fichas");
  contenedor.innerHTML = miembros
    .map(
      (m) => `
      <button class="ficha reveal" type="button" data-target="${m.id}">
        <div class="ficha__top">
          <span class="ficha__numero">${m.numero}</span>
          ${avatarHTML(m, "ficha__avatar")}
        </div>
        <h3 class="ficha__nombre">${m.nombre}</h3>
        <p class="ficha__meta">${metaTexto(m.items.length)}</p>
      </button>`
    )
    .join("");
}

function renderAcordeon() {
  const contenedor = document.getElementById("acordeon");
  contenedor.innerHTML = miembros
    .map(
      (m) => `
      <div class="expediente reveal" id="exp-${m.id}">
        <button class="expediente__header" type="button" aria-expanded="false" aria-controls="panel-${m.id}">
          <span class="expediente__numero">${m.numero}</span>
          ${avatarHTML(m, "expediente__avatar")}
          <span class="expediente__nombre">${m.nombre}</span>
          <svg class="expediente__chevron" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
            <path d="M4 6l4 4 4-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <div class="expediente__panel" id="panel-${m.id}" hidden>
          <p class="expediente__label">Sobre ${primerNombre(m.nombre)}</p>
          <p class="expediente__descripcion">${m.descripcion}</p>
          <p class="expediente__label expediente__label--items">Archivado</p>
          ${renderItems(m.items)}
        </div>
      </div>`
    )
    .join("");
}

/* ======================= Interacción ======================= */

function abrirExpediente(id, { hacerScroll = true } = {}) {
  document.querySelectorAll(".expediente").forEach((exp) => {
    const header = exp.querySelector(".expediente__header");
    const panel = exp.querySelector(".expediente__panel");
    const esElElegido = exp.id === `exp-${id}`;

    header.setAttribute("aria-expanded", esElElegido ? "true" : "false");
    panel.hidden = !esElElegido;
    exp.classList.toggle("is-open", esElElegido);
  });

  if (hacerScroll) {
    const el = document.getElementById(`exp-${id}`);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function alternarExpediente(id) {
  const exp = document.getElementById(`exp-${id}`);
  const header = exp.querySelector(".expediente__header");
  const yaEstabaAbierto = header.getAttribute("aria-expanded") === "true";

  if (yaEstabaAbierto) {
    header.setAttribute("aria-expanded", "false");
    exp.querySelector(".expediente__panel").hidden = true;
    exp.classList.remove("is-open");
  } else {
    abrirExpediente(id, { hacerScroll: false });
  }
}

function inicializarEventos() {
  document.getElementById("grid-fichas").addEventListener("click", (e) => {
    const ficha = e.target.closest(".ficha");
    if (!ficha) return;
    abrirExpediente(ficha.dataset.target);
  });

  document.getElementById("acordeon").addEventListener("click", (e) => {
    const header = e.target.closest(".expediente__header");
    if (!header) return;
    const id = header.closest(".expediente").id.replace("exp-", "");
    alternarExpediente(id);
  });
}

/* ==================== Aparición al scrollear ==================== */

function inicializarRevelado() {
  const prefiereMenosMovimiento = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  const elementos = document.querySelectorAll(".reveal");

  if (prefiereMenosMovimiento || !("IntersectionObserver" in window)) {
    elementos.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          entrada.target.classList.add("is-visible");
          observer.unobserve(entrada.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  elementos.forEach((el) => observer.observe(el));
}

/* ============================ Inicio ============================ */

document.addEventListener("DOMContentLoaded", () => {
  renderGridFichas();
  renderAcordeon();
  inicializarEventos();
  inicializarMinijuego();
  inicializarRevelado();
});
/* ======================== Minijuego Michis ======================== */

// Lista de personas que NO son Michis
// Asegúrate de guardar sus imágenes en la carpeta /assets/no-integrantes/
const noMiembros = [
  { nombre: "Intruso 1", foto: "assets/no-integrantes/persona1.jpg" },
  { nombre: "Intruso 2", foto: "assets/no-integrantes/persona2.jpg" },
  { nombre: "Intruso 3", foto: "assets/no-integrantes/persona3.jpg" },
];

let michiScore = 0;
let michiGameInterval = null;
let juegoActivo = false;

function actualizarMarcador() {
  const scoreElem = document.getElementById("michi-score");
  if (scoreElem) scoreElem.textContent = michiScore;
}

function perderJuego(motivo) {
  juegoActivo = false;
  if (michiGameInterval) clearInterval(michiGameInterval);

  // Limpiar objetivos restantes en pantalla
  const container = document.getElementById("michi-game-area");
  if (container) {
    const targets = container.querySelectorAll(".michi-target");
    targets.forEach((t) => t.remove());
  }

  // Mostrar mensaje de derrota forzando display: flex
  const overlay = document.getElementById("michi-game-over");
  const mensaje = document.getElementById("michi-game-over-msg");
  if (overlay && mensaje) {
    mensaje.textContent = motivo;
    overlay.style.display = "flex";
  }
}

function reiniciarJuego() {
  michiScore = 0;
  actualizarMarcador();
  juegoActivo = true;

  // Ocultar overlays con CSS inline para garantizar que se oculten
  const startOverlay = document.getElementById("michi-game-start");
  if (startOverlay) startOverlay.style.display = "none";

  const gameOverOverlay = document.getElementById("michi-game-over");
  if (gameOverOverlay) gameOverOverlay.style.display = "none";

  // Limpiar fichas viejas
  const container = document.getElementById("michi-game-area");
  if (container) {
    const targets = container.querySelectorAll(".michi-target");
    targets.forEach((t) => t.remove());
  }

  // Arrancar el loop del juego
  if (michiGameInterval) clearInterval(michiGameInterval);
  michiGameInterval = setInterval(crearMichiFlotante, 1400);
}

window.reiniciarJuego = reiniciarJuego;

function crearMichiFlotante() {
  if (!juegoActivo) return;

  const container = document.getElementById("michi-game-area");
  if (!container) return;

  const miembrosConFoto = miembros.filter((m) => m.foto);
  if (miembrosConFoto.length === 0) return;

  // 30% de probabilidad de que aparezca un NO integrante
  const esIntruso = Math.random() < 0.3 && noMiembros.length > 0;
  
  let objetivoData;
  if (esIntruso) {
    objetivoData = noMiembros[Math.floor(Math.random() * noMiembros.length)];
  } else {
    objetivoData = miembrosConFoto[Math.floor(Math.random() * miembrosConFoto.length)];
  }

  // Crear elemento del personaje
  const target = document.createElement("button");
  target.className = `michi-target ${esIntruso ? "michi-target--intruso" : ""}`;
  target.type = "button";
  target.style.backgroundImage = `url('${objetivoData.foto}')`;

  // Posición aleatoria dentro del área del juego
  const rect = container.getBoundingClientRect();
  const posX = Math.random() * (rect.width - 60);
  const posY = Math.random() * (rect.height - 60);

  target.style.left = `${Math.max(10, posX)}px`;
  target.style.top = `${Math.max(10, posY)}px`;

  // Evento al hacer clic
  target.addEventListener("click", (e) => {
    e.stopPropagation();
    if (!juegoActivo) return;

    if (esIntruso) {
      perderJuego(`¡Cagaste! Cliqueaste a un impostor (${objetivoData.nombre}).`);
    } else {
      michiScore++;
      actualizarMarcador();

      target.style.transform = "scale(0) rotate(180deg)";
      target.style.opacity = "0";
      setTimeout(() => target.remove(), 200);
    }
  });

  container.appendChild(target);

  // Temporizador para desaparecer el ícono
  setTimeout(() => {
    if (target.parentNode && juegoActivo) {
      if (!esIntruso) {
        perderJuego("¡Se te escapó un Michi! Récord reiniciado.");
      } else {
        target.style.opacity = "0";
        setTimeout(() => target.remove(), 300);
      }
    }
  }, 3000);
}

function inicializarMinijuego() {
  if (!document.getElementById("michi-game-section")) {
    const footerGame = document.createElement("section");
    footerGame.id = "michi-game-section";
    footerGame.className = "michi-game-section reveal";
    footerGame.innerHTML = `
      <div class="michi-game-header">
        <h3>🎮 Caza-Michis</h3>
        <p>Atrapá solo a los Michis reales. ¡Si cliqueás a un impostor o dejás pasar a un Michi, perdés!</p>
        <div class="michi-score-board">Puntos: <span id="michi-score">0</span></div>
      </div>
      <div id="michi-game-area" class="michi-game-area">
        <!-- Overlay inicial (visible al principio) -->
        <div id="michi-game-start" class="michi-game-over" style="display: flex;">
          <button type="button" id="michi-start-btn" class="michi-retry-btn">▶ Empezar a jugar</button>
        </div>

        <!-- Overlay de Game Over (oculto al principio) -->
        <div id="michi-game-over" class="michi-game-over" style="display: none;">
          <p id="michi-game-over-msg">¡Perdiste!</p>
          <button type="button" id="michi-retry-btn" class="michi-retry-btn">Intentar de nuevo ↻</button>
        </div>
      </div>
    `;
    document.body.appendChild(footerGame);

    // Listeners para iniciar/reiniciar
    const startBtn = document.getElementById("michi-start-btn");
    if (startBtn) startBtn.addEventListener("click", reiniciarJuego);

    const retryBtn = document.getElementById("michi-retry-btn");
    if (retryBtn) retryBtn.addEventListener("click", reiniciarJuego);
  }

  michiScore = 0;
  actualizarMarcador();
}