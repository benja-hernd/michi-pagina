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
  otro:       { label: "OTRO",  clase: "tipo-otro"  },
};

const miembros = [
  {
    id: "benjamin-hernando",
    numero: "01",
    nombre: "Benjamín Hernando",
    iniciales: "BH",
    foto: "assets/integrantes/benjamin-hernando.jpg",
    descripcion: "Hernando es la mente prodigia de los michis, sus exitos hablan por si solo.",
    items: [
      {
        tipo: "videojuego",
        titulo: "Geo Jump",
        descripcion: "El juego que lo inició todo. Geo Jump se convirtió rápidamente en uno de los títulos más importantes dentro de la historia de Los Michis, siendo recordado por muchos como una verdadera joya de la ESIM. Durante varios años, el juego logró reunir a una comunidad de jugadores especialmente dedicada, destacándose sobre todo por su creciente y aferrada comunidad de speedrunners, quienes se encargaron de llevar la experiencia al límite y buscar constantemente nuevas formas de superar los récords existentes. El proyecto nació gracias a la colaboración de casi todos Los Michis, convirtiéndose no solamente en un juego, sino también en uno de los primeros grandes proyectos realizados en conjunto por el grupo. Cada integrante aportó, de una manera u otra, para que Geo Jump pudiera convertirse en lo que finalmente fue. Con el paso del tiempo, el juego fue ganando reconocimiento y construyendo su propia pequeña historia dentro de la comunidad. Durante varios años, Geo Jump fue considerado por muchos como la joya de la ESIM, tanto por su propuesta como por la comunidad que consiguió formar a su alrededor. Las partidas, los intentos de superar marcas y la competencia entre jugadores terminaron convirtiéndose en una parte fundamental de la identidad del juego. Lo que comenzó como un proyecto realizado entre amigos terminó creando una comunidad que mantuvo vivo el juego durante años y que convirtió cada nuevo récord en un pequeño acontecimiento. Por todo esto, Geo Jump ocupa un lugar especial en la historia de Los Michis: fue el comienzo de todo, el proyecto que demostró lo que podía lograrse cuando prácticamente todo el grupo trabajaba en conjunto y, con el tiempo, terminó convirtiéndose en uno de los juegos más recordados de la ESIM.",
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
    foto: "",
    descripcion: "Mauri es una de las mentes maestras de michis, creador de muchisimos proyectos y linuxero de corazon ",
    items: [
      {
        tipo: "Canal",
        titulo: "Mauriprod",
        descripcion: "Joya contemporanea autor de varios proyectos desde musicales hasta comicos, su canal cuenta como un patrimonio a la imaginacion y recopila videos relacionados a los michis (se cuenta que hay mucho contenido borrado)",
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
    descripcion: "El perez, portador de mil apodos, es un reconocido momero del fondo que siempre liga las cagadas a pedo (incluso cuando no tiene que ver).",
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
  inicializarRevelado();
});