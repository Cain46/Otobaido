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


## Ajuste v5.5
El poster del módulo de video vuelve al formato visual previo y ahora redirige al enlace de YouTube solicitado: `https://youtu.be/fepRUErdgLs?si=nspdMXLD9x5gzM18`, donde se conserva el video con subtítulos en español.


## Ajuste v5.6
El bloque principal de video ahora usa el poster local del samurái, ninja y moto. Al hacer clic en el poster, se reemplaza inline por el reproductor de YouTube dentro de la web usando el enlace de la presentación con subtítulos en español. También se mantiene el botón **Ver en YouTube**.


## Ajuste v5.8
Se movió el ícono de play del poster a la esquina inferior izquierda del bloque de video, al estilo control visual. También se eliminó el botón **Ver en YouTube** del poster y del estado de reproducción embebida para simplificar la interfaz.


## Ajuste v5.9
Se agregó el footer **Redes** usando el arte exacto provisto como imagen (`assets/img/redes-footer.png`) y hotspots invisibles sobre cada botón para mantener el diseño idéntico y hacer clickeables Instagram, YouTube, Twitch, Facebook, TikTok y X.


## Ajuste v5.10
El footer de redes fue reconstruido con botones individuales recortados del arte aprobado. Cada imagen funciona como botón clickeable hacia la red oficial de Otobaido. El bloque quedó centrado y un poco más chico.


## Ajuste v5.11
Se redujo un poco más el ancho visual del bloque de redes y el tamaño máximo de cada botón para evitar que queden cortados en los extremos. También se añadió padding lateral interno al footer de redes.


## Ajuste v5.12
El footer de redes ahora usa un layout flex centrado con ancho por botón gobernado por el tamaño real de cada imagen. Ya no se fuerza una grilla de columnas iguales. Los botones se renderizan con altura fija y ancho automático para evitar cortes en los extremos.


## Ajuste v5.13
El footer de redes fue rehecho en piezas limpias: una imagen de título y seis botones individuales normalizados a un mismo canvas de 116x56 px, con separación de 2 px entre botones. Cada botón es su propio enlace clickeable a la red social oficial de Otobaido.


## Ajuste v5.14
Se reinició el footer de redes con enfoque incremental. Se conserva el separador REDES exacto del arte aprobado y se deja solo el botón de Instagram, usando su recorte exacto como botón clickeable.


## Ajuste v5.15
Se agregó el segundo botón del footer de redes: **YouTube**, usando su recorte exacto como botón clickeable y manteniendo el separador REDES aprobado.


## Ajuste v5.16
Se agregó el tercer botón del footer de redes: **Twitch**, usando su recorte exacto como botón clickeable y manteniendo el separador REDES aprobado.


## Ajuste v5.17
Se agregó el cuarto botón del footer de redes: **Facebook**, usando su recorte exacto como botón clickeable y manteniendo el separador REDES aprobado.


## Ajuste v5.18
Se agregó el quinto botón del footer de redes: **TikTok**, usando su recorte exacto como botón clickeable y manteniendo el separador REDES aprobado.


## Ajuste v5.19
Se agregó el sexto y último botón del footer de redes: **X**, usando su recorte exacto como botón clickeable y manteniendo el separador REDES aprobado.


## Ajuste v5.20
Se corrigió el botón de X del footer de redes. Se rehizo el recorte con un ancho mayor para conservar completo el borde derecho y evitar que el ícono se vea cortado.


## Ajuste v5.21
Se corrigió definitivamente el botón de X del footer. El recorte elimina la franja/separador rojo que quedaba pegado desde TikTok y vuelve al tamaño estándar de los botones del footer.


## Ajuste v5.22
Se realizó un microajuste de alineación sobre el botón de X en el footer de redes, desplazándolo apenas 1 px para alinearlo visualmente con el resto de los botones.
