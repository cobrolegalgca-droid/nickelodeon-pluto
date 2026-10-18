# Nickelodeon en Pluto TV (plugin de Kino)

Series y películas de **Nickelodeon** que Pluto TV ofrece gratis en Latinoamérica, dentro de
[Kino](https://kinotvapp.github.io/kino-plugins/): Inicio, búsqueda, capítulos y reproducción.

## Qué hace

- **Inicio** con siete filas: lo más visto, todas las series, comedias juveniles, Nick Jr.,
  animación clásica, acción y aventura, y películas y especiales.
- **Buscar** por nombre, sin importar tildes ni mayúsculas («padrinos magicos» encuentra
  «Los Padrinos Mágicos»).
- **Capítulos** de cada serie, con temporada, número, sinopsis y miniatura.
- **Reproducir** el capítulo o la película en HLS, con la sesión anónima que Pluto TV entrega sola.
- **Descargar** para ver sin conexión (HLS en VOD con cifrado AES-128, que Kino guarda).

El catálogo sale de las categorías **Nickelodeon Kids** y **Nickelodeon Teen** de Pluto TV, más los títulos de Nick Jr. que Pluto tiene en la región.

No pide usuario, contraseña, región ni dirección de servidor. No usa ninguna cuenta: Pluto TV
entrega una sesión de invitado anónima.

## Instalar

En Kino: **Ajustes → Plugins → Agregar** (en el celular, menú ☰ → Plugins → botón **+**), escribe
`USUARIO/REPO`, pulsa **Agregar**, lee la hoja de permisos y pulsa **Instalar**.

## Permisos que verás

- *Puede descargar videos para verlos sin conexión.*
- *Puede reproducir video desde cualquier servidor que indique* (en rojo): los segmentos del video
  salen de los CDN de Pluto TV, que cambian de nombre, así que el plugin declara `streamHosts: any`.

## Requisitos y límites

- Kino **0.9.44 o más nuevo** (`apiVersion` 4).
- Pluto TV tiene que estar disponible en el país de la persona: el catálogo sale de su API pública
  y el video lo entrega su propio servicio.
- El catálogo va escrito en el plugin (78 títulos verificados): si Pluto TV agrega o quita títulos,
  hace falta una versión nueva del plugin.
- Este plugin **no** es oficial de Pluto TV ni de Paramount, y no está afiliado a Nickelodeon. Las
  marcas son de sus dueños; el ícono es un dibujo propio, no el logo de Nickelodeon.

## Desarrollo

El kit de pruebas está en `sdk/` (Node 18 o más nuevo):

```
node sdk/validate.mjs .
node sdk/run.mjs . search "bob esponja"
node sdk/run.mjs . home
node sdk/run.mjs . episodes 's:spongebob-squarepants-las-ptv1'
node sdk/run.mjs . resolve 'e:<id de capítulo>'
node --test test/plugin.test.mjs
```

`test/fixtures.json` guarda respuestas reales grabadas con `--record`, ya limpias de tokens e IP,
para que la prueba corra sin internet.

## Estructura

- `kino-plugin.json`: manifiesto (id, versión, hosts, capacidades).
- `plugin.js`: el plugin completo, un solo archivo sin imports.
- `icon.png`: el ícono.
- `sdk/`, `contract.json`, `kino.d.ts`: el kit de pruebas y la referencia de la API de Kino.
