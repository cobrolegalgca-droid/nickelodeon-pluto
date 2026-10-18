# Pluto TV: Nick y Reality (plugin de Kino)

Series de **Nickelodeon** y **realities** de Pluto TV, gratis y en español, dentro de
[Kino](https://kinotvapp.github.io/kino-plugins/): Inicio, búsqueda, capítulos, reproducción y
descargas.

## Qué hace

- **Inicio** con doce filas: lo más visto de Nick, todas las series, comedias juveniles, Nick Jr.,
  animación clásica, acción y aventura, películas y especiales, y cinco filas de reality
  (Reality y competencia, Cocina y concursos, Empeños/subastas/autos, Supervivencia y desafíos,
  Todo el reality).
- **Buscar** por nombre, sin importar tildes ni mayúsculas («padrinos magicos» encuentra
  «Los Padrinos Mágicos»; «masterchef» encuentra las trece variantes).
- **Capítulos** de cada serie, con temporada, número, sinopsis y miniatura.
- **Reproducir** el capítulo o la película en HLS, con la sesión anónima que Pluto TV entrega sola.
- **Descargar** para ver sin conexión (HLS en VOD con cifrado AES-128, que Kino guarda).

No pide usuario, contraseña, región ni dirección de servidor. No usa ninguna cuenta.

## Catálogo

- **78 títulos de Nickelodeon**: las categorías *Nickelodeon Kids* y *Nickelodeon Teen* de Pluto TV,
  más los títulos de Nick Jr. disponibles en la región.
- **175 títulos de reality**: la categoría *Reality* de Pluto TV (194 en total; 16 no tienen
  capítulos en Pluto y se quedaron fuera), más *Survivor México* y *Todo un Chef*.

Todos los títulos se verificaron uno por uno contra la API de Pluto: tienen capítulos y su video
responde. El catálogo va escrito en el plugin, así que si Pluto agrega o quita títulos hace falta
una versión nueva.

**No están en Pluto LATAM**: *Cupcake Wars* y *¿Quién da más?* (Storage Wars). Lo más parecido es
*Empeños a lo bestia* (Hardcore Pawn), *Beverly Hills Pawn* y *Trato Hecho*.

## Instalar

En Kino: **Ajustes → Plugins → Agregar** (en el celular, menú ☰ → Plugins → botón **+**), escribe
`cobrolegalgca-droid/nickelodeon-pluto`, pulsa **Agregar**, lee la hoja de permisos y pulsa
**Instalar**.

## Permisos que verás

- *Puede descargar videos para verlos sin conexión.*
- *Puede reproducir video desde cualquier servidor que indique* (en rojo): los segmentos del video
  salen de los CDN de Pluto TV, que cambian de nombre, así que el plugin declara `streamHosts: any`.

## Requisitos y límites

- Kino **0.9.44 o más nuevo** (`apiVersion` 4).
- Pluto TV tiene que estar disponible en el país de la persona: el catálogo sale de su API pública
  y el video lo entrega su propio servicio.
- Este plugin **no** es oficial de Pluto TV, Paramount ni Nickelodeon, y no está afiliado a esas
  marcas. El ícono es un dibujo propio, no el logo de Nickelodeon.

## Desarrollo

El kit de pruebas está en `sdk/` (Node 18 o más nuevo):

```
node sdk/validate.mjs .
node sdk/run.mjs . search "masterchef"
node sdk/run.mjs . home
node sdk/run.mjs . episodes 's:survivor-mexico'
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
