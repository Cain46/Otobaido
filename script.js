const videoCard = document.querySelector('[data-youtube-id]');

if (videoCard) {
  videoCard.addEventListener('click', () => {
    const youtubeId = videoCard.dataset.youtubeId;
    const iframe = document.createElement('iframe');

    iframe.className = 'video-embed';
    iframe.src = `https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`;
    iframe.title = 'Video de Otobaido';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    iframe.allowFullscreen = true;
    iframe.referrerPolicy = 'strict-origin-when-cross-origin';

    videoCard.replaceWith(iframe);
  });
}

const programFeed = document.querySelector('[data-program-feed]');

const escapeHtml = (value) =>
  String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');

const renderProgramCards = (items) => {
  if (!programFeed || !Array.isArray(items) || items.length === 0) return;

  const cards = items.slice(0, 3).map((item) => {
    const type = escapeHtml(item.type || 'video');
    const badge = escapeHtml(item.badge || 'Video');
    const title = escapeHtml(item.title || 'Otobaido');
    const description = escapeHtml(item.description || 'Contenido de Otobaido.');
    const url = escapeHtml(item.url || 'https://www.youtube.com/@Otobaido');
    const thumbnail = escapeHtml(item.thumbnail || 'assets/img/programas/ultimo-video.jpg');
    const duration = escapeHtml(item.duration || '');
    const section = escapeHtml(item.section || 'YouTube');
    const meta = escapeHtml(item.meta || 'Video');
    const badgeClass = type === 'live' ? ' live' : type === 'ninja' ? ' ninja' : '';

    return `
      <a class="program-card" href="${url}" target="_blank" rel="noopener noreferrer" aria-label="Ver ${title} en YouTube">
        <figure class="program-thumb">
          <img src="${thumbnail}" alt="${title}" width="640" height="360" loading="lazy" />
          <span class="program-badge${badgeClass}">${badge}</span>
          ${duration ? `<span class="program-duration">${duration}</span>` : ''}
        </figure>
        <div class="program-copy">
          <span class="program-tag">${section}</span>
          <h3>${title}</h3>
          <p>${description}</p>
        </div>
        <footer class="program-meta">
          <span>▶ YouTube</span>
          <span>${meta}</span>
        </footer>
      </a>`;
  }).join('');

  programFeed.innerHTML = cards;
};

if (programFeed) {
  fetch('assets/data/youtube-feed.json', { cache: 'no-store' })
    .then((response) => (response.ok ? response.json() : Promise.reject(new Error('Feed no disponible'))))
    .then(renderProgramCards)
    .catch(() => {
      // Si se abre el HTML como archivo local o falla el JSON, quedan las cards estáticas del HTML.
    });
}
