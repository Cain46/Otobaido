const links = {
  youtube: "https://www.youtube.com/@otobaido", // Editar si corresponde
  instagram: "https://www.instagram.com/otobaido/", // Editar si corresponde
  twitch: "https://www.twitch.tv/otobaido", // Editar si corresponde
  facebook: "https://www.facebook.com/otobaido", // Editar si corresponde
  tiktok: "https://www.tiktok.com/@otobaido", // Editar si corresponde
  contact: "https://www.instagram.com/otobaido/", // Puede ser mailto:, WhatsApp o Instagram
};

const latestEpisode = {
  season: "Temporada 6",
  chapter: "Capítulo 129",
  title: "Gastón “El Chifla” Spinella + Max",
  topic: "Charlas, motos, ruta y cultura motera en vivo.",
  date: "Martes · 19:30 hs",
  image: "assets/images/episode-placeholder.jpg",
  youtubeUrl: "https://www.youtube.com/@otobaido",
  twitchUrl: "https://www.twitch.tv/otobaido",
};

const episodes = [
  {
    chapter: "Capítulo 129",
    title: "Gastón “El Chifla” Spinella",
    description: "Una charla bien de ruta, comunidad y experiencias sobre dos ruedas.",
    image: "assets/images/episode-placeholder.jpg",
    url: "https://www.youtube.com/@otobaido",
  },
  {
    chapter: "Capítulo 128",
    title: "Mitos de la reprogramación",
    description: "Performance, repros, dudas reales y charla de garage con invitados.",
    image: "assets/images/video-poster.jpg",
    url: "https://www.youtube.com/@otobaido",
  },
  {
    chapter: "Capítulo 127",
    title: "Esteban Grimalt en Otobaido",
    description: "Historias, cámaras, motos y una mesa con espíritu Otobaido.",
    image: "assets/images/otobaido-logo-cover.png",
    url: "https://www.youtube.com/@otobaido",
  },
];

const socialPosts = [
  {
    title: "Último programa",
    description: "Mirá el último vivo y sumate a la charla motera.",
    image: "assets/images/episode-placeholder.jpg",
    url: "https://www.instagram.com/otobaido/",
  },
  {
    title: "Manifiesto Otobaido",
    description: "El camino del motociclista: clan, ronin, respeto y libertad.",
    image: "assets/images/video-poster.jpg",
    url: "https://www.instagram.com/otobaido/",
  },
  {
    title: "Comunidad",
    description: "Seguimos rodando en redes, vivos y encuentros.",
    image: "assets/images/otobaido-logo-cover.png",
    url: "https://www.instagram.com/otobaido/",
  },
];

const $ = (selector) => document.querySelector(selector);

function renderLatestEpisode() {
  const el = $("#latest-card");
  el.innerHTML = `
    <img src="${latestEpisode.image}" alt="${latestEpisode.chapter} - ${latestEpisode.title}">
    <div class="latest-body">
      <p class="meta">${latestEpisode.season} · ${latestEpisode.chapter}</p>
      <h3>${latestEpisode.title}</h3>
      <p>${latestEpisode.topic}</p>
      <p><strong>${latestEpisode.date}</strong></p>
      <div class="episode-actions">
        <a class="btn primary" href="${latestEpisode.youtubeUrl}" target="_blank" rel="noreferrer">Ver en YouTube</a>
        <a class="btn ghost" href="${latestEpisode.twitchUrl}" target="_blank" rel="noreferrer">Ver en Twitch</a>
      </div>
    </div>
  `;
}

function renderCards(items, targetSelector, ctaLabel) {
  const target = $(targetSelector);
  target.innerHTML = items.map((item) => `
    <article class="mini-card">
      <img src="${item.image}" alt="${item.title}">
      <div class="mini-card-body">
        ${item.chapter ? `<p class="meta">${item.chapter}</p>` : ""}
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <a class="btn ghost" href="${item.url}" target="_blank" rel="noreferrer">${ctaLabel}</a>
      </div>
    </article>
  `).join("");
}

function renderSocialLinks() {
  const social = $("#social-links");
  const labels = [
    ["YouTube", links.youtube],
    ["Instagram", links.instagram],
    ["Twitch", links.twitch],
    ["Facebook", links.facebook],
    ["TikTok", links.tiktok],
  ];
  social.innerHTML = labels.map(([label, url]) => `
    <a class="btn ghost" href="${url}" target="_blank" rel="noreferrer">${label}</a>
  `).join("");

  document.querySelectorAll("[data-social='instagram']").forEach((node) => node.setAttribute("href", links.instagram));
  const contact = document.querySelector("[data-contact-link]");
  if (contact) contact.setAttribute("href", links.contact);
}

function setupNav() {
  const toggle = $(".nav-toggle");
  const nav = $(".site-nav");
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  }));
}

renderLatestEpisode();
renderCards(episodes, "#episodes-grid", "Ver capítulo");
renderCards(socialPosts, "#social-grid", "Ver post");
renderSocialLinks();
setupNav();
$("#year").textContent = new Date().getFullYear();
