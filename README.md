# Otobaido - v5 por bloques

Versión para GitHub Pages armada por módulos, sin cambiar la estética aprobada.

## Incluye

- Banner principal sin el texto superior “Programa / Comunidad / Cultura Motera”.
- Módulo de video con poster visual y carga del video de YouTube al hacer click.
- Módulo “¿Qué es Otobaido?” actualizado sin cuadro de texto visible, integrado al pergamino.
- Módulo “Últimos Programas” con 3 cards:
  - Último Vivo
  - Último Video
  - Ninjita

## Datos de YouTube

La sección “Últimos Programas” queda preparada para actualizarse desde:

```text
assets/data/youtube-feed.json
```

Por ahora el JSON contiene datos base/manuales para mantener la estética y no exponer API keys en el frontend. Más adelante podemos conectar GitHub Actions para actualizar ese JSON automáticamente usando YouTube Data API o un proceso seguro del lado de GitHub.

## Deploy en GitHub Pages

Subir estos archivos a la rama publicada por GitHub Pages. El archivo `.nojekyll` evita procesamiento extra.


## Ajuste tipográfico v5.2
El bloque **Últimos Programas** ahora usa **Bebas Neue** en títulos y labels para evitar problemas de glifos y mejorar la legibilidad. El texto descriptivo conserva la línea serif del módulo **¿Qué es Otobaido?**


## Ajuste v5.4
El módulo de video principal se cambió a una card visual que abre YouTube en pestaña nueva. Esto evita el Error 153 del reproductor embebido en vistas locales o configuraciones donde YouTube bloquea el iframe.
