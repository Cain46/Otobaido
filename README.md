# Otobaido Web

Primera versión estática de **otobaido.com** para publicar en GitHub Pages.

Esta versión está pensada para probar rápido el dominio propio y dejar viva una landing oficial con identidad Otobaido: samurái, moto, Bushido, comunidad, ruta y redes.

## Qué incluye

- `index.html`: estructura de la landing.
- `styles.css`: estilos responsive con paleta negro/blanco/rojo.
- `app.js`: datos editables de episodios, redes y últimos posteos.
- `CNAME`: dominio personalizado `otobaido.com`.
- `.nojekyll`: evita procesamiento de Jekyll en GitHub Pages.
- `assets/`: logo, poster e intro optimizada en MP4.

## Cómo editar links y contenido

Abrir `app.js` y modificar:

```js
const links = {
  youtube: "https://www.youtube.com/@otobaido",
  instagram: "https://www.instagram.com/otobaido/",
  twitch: "https://www.twitch.tv/otobaido",
  facebook: "https://www.facebook.com/otobaido",
  tiktok: "https://www.tiktok.com/@otobaido",
  contact: "https://www.instagram.com/otobaido/",
};
```

También se editan ahí:

- `latestEpisode`
- `episodes`
- `socialPosts`

## Publicación rápida en GitHub Pages

1. Crear un repositorio nuevo, por ejemplo:

```txt
otobaido-web
```

2. Subir todos los archivos de esta carpeta a la raíz del repo.

3. Ir a:

```txt
Settings → Pages
```

4. En **Build and deployment**, elegir:

```txt
Deploy from a branch
```

5. Seleccionar:

```txt
Branch: main
Folder: /root
```

6. Guardar.

GitHub va a publicar primero una URL parecida a:

```txt
https://TU_USUARIO.github.io/otobaido-web/
```

## Configurar dominio otobaido.com

En GitHub:

```txt
Settings → Pages → Custom domain
```

Colocar:

```txt
otobaido.com
```

El archivo `CNAME` ya viene incluido con ese dominio.

## DNS del dominio

En el proveedor donde está comprado `otobaido.com`, crear estos registros para el dominio raíz:

```txt
Tipo: A
Host/Nombre: @
Valor: 185.199.108.153

Tipo: A
Host/Nombre: @
Valor: 185.199.109.153

Tipo: A
Host/Nombre: @
Valor: 185.199.110.153

Tipo: A
Host/Nombre: @
Valor: 185.199.111.153
```

Para `www`:

```txt
Tipo: CNAME
Host/Nombre: www
Valor: TU_USUARIO.github.io
```

Cuando GitHub detecte el dominio, activar:

```txt
Enforce HTTPS
```

Puede tardar desde unos minutos hasta algunas horas.

## Nota sobre el video

El video original era pesado. Para esta primera versión se generó una copia optimizada:

```txt
assets/video/otobaido-intro.mp4
```

Peso aproximado: 7 MB.

## Próximos pasos sugeridos

- Reemplazar links provisionales por los definitivos.
- Subir flyers reales de capítulos.
- Agregar el canal de YouTube correcto.
- Agregar Instagram real.
- Evaluar versión React/Vite cuando ya esté validado el dominio.

