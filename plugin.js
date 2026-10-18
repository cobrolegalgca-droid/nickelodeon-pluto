// Nickelodeon en Pluto TV — plugin de Kino.
// Un solo archivo, sin imports: Kino lo carga en un sandbox de QuickJS.
// El catálogo va escrito aquí abajo; los capítulos y el video se piden a la API pública de Pluto TV.

const APP_VERSION = "10.12.242";
const CLIENT_ID = "6f1c2a9e-3b4d-4f6a-9c2e-1a7b8d5e4f30";
const BOOT = "https://boot.pluto.tv/v4/start?appName=web&appVersion=" + APP_VERSION +
  "&deviceVersion=" + APP_VERSION + "&deviceModel=web&deviceMake=Chrome&deviceType=web" +
  "&clientID=" + CLIENT_ID + "&clientModelNumber=web&serverSideAds=false";
const VOD = "https://service-vod.clusters.pluto.tv";
const PLAY = "https://ipv4.pluto.tv/api/tn/video/playout/v2/stitch/hls/episode/";
const SESSION_KEY = "pluto-session-v1";
const UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126 Safari/537.36";

const CATALOG = [{"id":"62503f474a1dfc0013fc97df","slug":"spongebob-squarepants-las-ptv1","name":"Bob Esponja","kind":"series","poster":"https://images.pluto.tv/series/62503f474a1dfc0013fc97df/poster_1784568241479.jpg?fill=blur&fit=fill&fm=jpg&h=1000&q=75&w=694","genres":["animacion","comedia","familia"],"episodes":117,"overview":"Bob Esponja vive junto con su mascota Gary, en una piña en Fondo de Bikini. Bob cocina las mejores hamburguesas del mundo. Junto a su amigo Patricio se mete en todo tipo de problemas de los que no le resultará fácil escapar."},{"id":"65c4db93a40ff70013e98095","slug":"avatar-the-last-airbender-lt","name":"Avatar: La Leyenda de Aang","kind":"series","poster":"https://images.pluto.tv/series/65c4db93a40ff70013e98095/poster_1780403761438.jpg?fill=blur&fit=fill&fm=jpg&h=1000&q=75&w=694","genres":["aventura","fantasia","animacion"],"episodes":60,"overview":"Sigue las aventuras de Aang, el más reciente sucesor de una larga línea de avatares, y sus amigos en un viaje épico para cumplir una misión: salvar al mundo de la despiadada Nación del Fuego que busca conquistar a las demás naciones."},{"id":"64e61ef08a0f710013e510bb","slug":"paw-patrol-lt","name":"PAW Patrol","kind":"series","poster":"https://images.pluto.tv/series/64e61ef08a0f710013e510bb/poster_1788863401790.jpg?fill=blur&fit=fill&fm=jpg&h=1000&q=75&w=694","genres":["animacion","familia"],"episodes":50,"overview":"Un equipo de cachorros liderado por el energético Ryder está siempre listo cuando se trata de ayudar en la ciudad de Bahía Aventura. Tienen todas las herramientas, vehículos y el valor que necesitan para proteger a la comunidad."},{"id":"654e4f4891ee7c001ad64f5d","slug":"dora-the-explorer-lt","name":"Dora la Exploradora","kind":"series","poster":"https://images.pluto.tv/series/654e4f4891ee7c001ad64f5d/poster_1783671842014.jpg?fill=blur&fit=fill&fm=jpg&h=1000&q=75&w=694","genres":["animacion","familia"],"episodes":122,"overview":"Sigue las aventuras de Dora, una niña de siete años que necesita de tu ayuda para resolver misterios. En el camino, nos encontraremos con nuevos amigos, superaremos toda clase de obstáculos y aprenderemos un poquito de inglés."},{"id":"6335f6709d9b7c00133e8611","slug":"go-diego-go-lt","name":"Go, Diego, Go!","kind":"series","poster":"https://images.pluto.tv/series/6335f6709d9b7c00133e8611/poster_1784554201512.jpg?fill=blur&fit=fill&fm=jpg&h=1000&q=75&w=694","genres":["animacion","familia"],"episodes":75,"overview":"Diego, tiene 8 años, es bilingüe y ayuda a los animales que están en peligro alrededor del mundo. Siempre va acompañado de su amigo Jaguar y su hermana Alicia."},{"id":"5e3c1852360fab25879e7c18","slug":"las-pistas-de-blue-latam","name":"Las Pistas de Blue","kind":"series","poster":"https://images.pluto.tv/series/5e3c1852360fab25879e7c18/poster_1786602601344.jpg?fill=blur&fit=fill&fm=jpg&h=1000&q=75&w=694","genres":["animacion","familia"],"episodes":79,"overview":"Steve tiene una perrita azul llamada Blue. Junto con ella y sus amigos, vamos a vivir increíbles aventuras resolviendo misterios por la casa de Steve, ¡siempre con la ayuda de las Pistas de Blue!"},{"id":"6557859062063800133e7b30","slug":"bubble-guppies-lt-ptv1","name":"Bubble Guppies","kind":"series","poster":"https://images.pluto.tv/series/6557859062063800133e7b30/poster_1782137521420.jpg?fill=blur&fit=fill&fm=jpg&h=1000&q=75&w=694","genres":["animacion","familia","musical"],"episodes":78,"overview":"Sumérgente en el salón de clases bajo el agua con Molly, Gil y sus amigos cola de pez. Los preescolares pueden aprender habilidades de preparación escolar como ciencias, matemáticas, literatura y más, a través de canciones, bailes y risas."},{"id":"62460198a1dc4500133678ca","slug":"blaze-and-the-monster-machines-lt","name":"Blaze y las Máquinas Monstruosas","kind":"series","poster":"https://images.pluto.tv/series/62460198a1dc4500133678ca/poster_1781513641653.jpg?fill=blur&fit=fill&fm=jpg&h=1000&q=75&w=694","genres":["animacion","familia","accion"],"episodes":76,"overview":"Blaze es el gran héroe y campeón de las pistas de carreras de Ciudad Axle. Donde quiera que haya problemas, él es la solución, ya que puede hacer cosas que ningún otro camión puede."},{"id":"624601eed0f36a0013e17386","slug":"shimmer-and-shine-lt","name":"Shimmer y Shine","kind":"series","poster":"https://images.pluto.tv/series/624601eed0f36a0013e17386/poster_1786385881753.jpg?fill=blur&fit=fill&fm=jpg&h=1000&q=75&w=694","genres":["animacion","fantasia","familia"],"episodes":84,"overview":"Sigue las aventuras de dos hermanas gemelas genios, Shimmer y Shine. En ocasiones ambas conceden más problemas que deseos cuando su mejor amiga humana, Leah, intenta pedirles ayuda con sus deseos mágicos."},{"id":"6335f5080eb13d00139fce89","slug":"rusty-rivets-lt","name":"Rusty Rivets","kind":"series","poster":"https://images.pluto.tv/series/6335f5080eb13d00139fce89/poster_1783618922190.jpg?fill=blur&fit=fill&fm=jpg&h=1000&q=75&w=694","genres":["animacion","familia"],"episodes":78,"overview":"No importa cuál sea el problema, un avión a escala fuera de control, un tren de circo atorado, o un globo de aire caliente fugitivo, el ingenio de Rusty siempre encuentra el arreglo."},{"id":"601d63d830954c001a5066ef","slug":"top-wing-ptv1","name":"Top Wing","kind":"series","poster":"https://images.pluto.tv/series/601d63d830954c001a5066ef/poster_1782158401358.jpg?fill=blur&fit=fill&fm=jpg&h=1000&q=75&w=694","genres":["animacion","familia","aventura"],"episodes":52,"overview":"Swift es un pajarito que acaba de llegar a la ciudad para su entrenamiento en la Academia Top Wing. Con los otros pájaros que también están allí entrenando, serán capaces de grandes rescates para ayudar y salvar a todos los que lo necesiten."},{"id":"62460215d0f36a0013e17ffc","slug":"team-umizoomi-lt","name":"Team Umizoomi","kind":"series","poster":"https://images.pluto.tv/series/62460215d0f36a0013e17ffc/poster_1769212802725.jpg?fill=blur&fit=fill&fm=jpg&h=1000&q=75&w=694","genres":["animacion","familia"],"episodes":79,"overview":"El equipo Umizoomi resuelve los problemas de todos los días con sus poderes matemáticos para mantener a Ciudad Umi tranquila. Gracias a las matemáticas podremos construir un barco, arreglar un juguete… ¡y solucionar mil enigmas más!"},{"id":"62a375c004ca3000132f057e","slug":"nella-the-princess-knights-lt","name":"Nella, la Princesa Caballero","kind":"series","poster":"https://images.pluto.tv/series/62a375c004ca3000132f057e/poster_1783967401746.jpg?fill=blur&fit=fill&fm=jpg&h=1000&q=75&w=694","genres":["animacion","fantasia","familia"],"episodes":60,"overview":"Nella es más que una princesa. ¡Ella es una princesa valiente! Con la ayuda de sus amigos Sir Garret, Trinket y Clod, Nella rompe barreras, desafía expectativas y lucha por la justicia en cada aventura."},{"id":"6448195ca659cb001acf74ee","slug":"dora-and-friends-into-the-city-lt","name":"Dora and Friends","kind":"series","poster":"https://images.pluto.tv/series/6448195ca659cb001acf74ee/poster_1783595881988.jpg?fill=blur&fit=fill&fm=jpg&h=1000&q=75&w=694","genres":["animacion","familia"],"episodes":40,"overview":"¡Juntos, todos para uno! Dora creció y se trasladó a una ciudad latina, entró a una nueva escuela y encontró un grupo de amigos con una pasión compartida por explorar, que la acompañan en fabulosas aventuras por la ciudad."},{"id":"63ff6e23689edb0013bce4e7","slug":"teenage-mutant-ninja-turtles-lt","name":"Las Tortugas Ninja","kind":"series","poster":"https://images.pluto.tv/series/63ff6e23689edb0013bce4e7/poster_1769238721082.jpg?fill=blur&fit=fill&fm=jpg&h=1000&q=75&w=694","genres":["accion","aventura","animacion"],"episodes":124,"overview":"Leo, Rafa, Mikey y Donnie son tortugas mutantes que han sido entrenadas por el Maestro Splinter."},{"id":"649c499b3e9a7b001393b41e","slug":"kung-fu-panda-legends-of-awesomeness-lt","name":"Kung Fu Panda: La Leyenda de Po","kind":"series","poster":"https://images.pluto.tv/series/649c499b3e9a7b001393b41e/poster_1786532401134.jpg?fill=blur&fit=fill&fm=jpg&h=1000&q=75&w=694","genres":["accion","aventura","animacion","comedia"],"episodes":79,"overview":"El Panda Po ahora vive en las barracas con los 5 Furiosos. Tendrá que enfrentar nuevas responsabilidades durante su continua educación y sus aventuras como el Guerrero Dragón. Ya que ser el Guerrero Dragón no es un destino, es un viaje."},{"id":"649c4af7500e680013c667e5","slug":"the-penguins-of-madagascar-lt","name":"Los Pingüinos de Madagascar","kind":"series","poster":"https://images.pluto.tv/series/649c4af7500e680013c667e5/poster_1784566819734.jpg?fill=blur&fit=fill&fm=jpg&h=1000&q=75&w=694","genres":["comedia","aventura","animacion"],"episodes":80,"overview":"Los pingüinos Skipper, Kowalski, Rico y Cabo, creen que son una tropa de elite dentro del zoológico de Central Park. Cuando no entretienen a los humanos, escapan a las calles de Nueva York para llevar a cabo sus peligrosas misiones."},{"id":"6890ee18df1220b5356be1cf","slug":"the-casagrandes-ptv5","name":"Los Casagrande","kind":"series","poster":"https://images.pluto.tv/series/6890ee18df1220b5356be1cf/poster_1783709642117.jpg?fill=blur&fit=fill&fm=jpg&h=1000&q=75&w=694","genres":["animacion","comedia","familia"],"episodes":19,"overview":"Ronnie es una chica divertida que acaba de mudarse a la casa de su abuela con su madre y vivirá muchas aventuras."},{"id":"6890c7934d15bfbcee241e70","slug":"the-loud-house-ptv4","name":"Una Casa de Locos","kind":"series","poster":"https://images.pluto.tv/series/6890c7934d15bfbcee241e70/poster_1769631481550.jpg?fill=blur&fit=fill&fm=jpg&h=1000&q=75&w=694","genres":["animacion","comedia","familia"],"episodes":26,"overview":"Conoce a Lincoln, un chico de 11 años, que vive en una casa con sus diez hermanas; hermana mayor Lori, ignorantes todavía hermosa rubia Leni, que aspiran ser estrella de rock a Luna."},{"id":"61a6280c178ebd00137ae300","slug":"icarly-lt","name":"iCarly","kind":"series","poster":"https://images.pluto.tv/series/61a6280c178ebd00137ae300/poster_1781024798352.jpg?fill=blur&fit=fill&fm=jpg&h=1000&q=75&w=694","genres":["comedia","familia"],"episodes":22,"overview":"Carly es una adolescente promedio, excepto porque produce y protagoniza su propio show en línea. Ni ella ni sus amigos pensaron en convertirse en grandes estrellas de la red pero lo cierto es que su programa es un gran éxito."},{"id":"6890d79863893d441e1f7996","slug":"victorious-ptv2","name":"Victorious","kind":"series","poster":"https://images.pluto.tv/series/6890d79863893d441e1f7996/poster_1781629225892.jpg?fill=blur&fit=fill&fm=jpg&h=1000&q=75&w=694","genres":["comedia","musical","familia"],"episodes":60,"overview":"Tori Vega es la nueva alumna en la escuela Hollywood Arts, un instituto lleno de talentosos chicos que intentan aprender a ser verdaderos artistas. Ahora, todo está por cambiar.... ¿Podrá Tori ser la estrella principal de su nueva vida?"},{"id":"69b2be7027ed3c42e33c92ca","slug":"drake-and-josh-ptv3","name":"Drake y Josh","kind":"series","poster":"https://images.pluto.tv/series/69b2be7027ed3c42e33c92ca/poster_1783693802049.jpg?fill=blur&fit=fill&fm=jpg&h=1000&q=75&w=694","genres":["comedia","familia"],"episodes":58,"overview":"Dos personajes con diferentes personalidades. Lo único que tienen en común, es que van al mismo colegio. Sin embargo, todo cambia drásticamente, cuando sus padres les anuncian que van a casarse. ¿Podrán llevarse bien?"},{"id":"627281309f694b001374046c","slug":"zoey-101-lt","name":"Zoey 101","kind":"series","poster":"https://images.pluto.tv/series/627281309f694b001374046c/poster_1781021881616.jpg?fill=blur&fit=fill&fm=jpg&h=1000&q=75&w=694","genres":["comedia","familia"],"episodes":56,"overview":"Cuando la Academia Costa del Pacífico, un internado solo para varones, abre sus puertas a estudiantes del sexo femenino, Zoey Brooks no duda en inscribirse. Con su estilo único, ella gana grandes amigos con quienes vive muchas aventuras."},{"id":"6335c10005b8af001385cd88","slug":"big-time-rush-lt","name":"Big Time Rush","kind":"series","poster":"https://images.pluto.tv/series/6335c10005b8af001385cd88/poster_1781103241800.jpg?fill=blur&fit=fill&fm=jpg&h=1000&q=75&w=694","genres":["comedia","musical","familia"],"episodes":73,"overview":"La vida de estos cuatro mejores amigos está a punto de cambiar. Un día están jugando hockey y al siguiente están camino a Los Angeles para convertirse en la nueva sensación del pop."},{"id":"6335bfaa7a31e800133e7ad5","slug":"sam-and-cat-lt","name":"Sam & Cat","kind":"series","poster":"https://images.pluto.tv/series/6335bfaa7a31e800133e7ad5/poster_1783622162090.jpg?fill=blur&fit=fill&fm=jpg&h=1000&q=75&w=694","genres":["comedia","familia"],"episodes":35,"overview":"Sam y Cat serán compañeras de cuarto, se convierten en amigas y socias en un negocio de cuidado de niños."},{"id":"676eb9ea1b8845001356f37b","slug":"henry-danger-hd-ptv1","name":"Henry Danger","kind":"series","poster":"https://images.pluto.tv/series/676eb9ea1b8845001356f37b/poster_1784877841998.jpg?fill=blur&fit=fill&fm=jpg&h=1000&q=75&w=694","genres":["comedia","accion","familia"],"episodes":65,"overview":"Henry Hart obtiene el trabajo de su vida, como el compañero del conocido superhéroe Capitán Man, lo que tiene grandes ventajas. Paga 9 dólares la hora. Tiene la posibilidad de jugar con aparatos de alta tecnología y ¡Puede salvar el mundo!"},{"id":"67d9703c46d66c4aa0a4e0c7","slug":"the-thundermans-hd","name":"Los Thundermans","kind":"series","poster":"https://images.pluto.tv/series/67d9703c46d66c4aa0a4e0c7/poster_1782999001704.jpg?fill=blur&fit=fill&fm=jpg&h=1000&q=75&w=694","genres":["comedia","accion","familia"],"episodes":69,"overview":"Phoebe y Max Thunderman son mellizos de 14 años, pertenecientes a una familia de super héroes. Juntos, y potenciados por una sana rivalidad de hermanos, van a intentar vivir de la manera más normal posible y mantener sus super poderes."},{"id":"665f51f0c0b6d50014cacb5a","slug":"game-shakers-lt","name":"Game Shakers","kind":"series","poster":"https://images.pluto.tv/series/665f51f0c0b6d50014cacb5a/poster_1784536561776.jpg?fill=blur&fit=fill&fm=jpg&h=1000&q=75&w=694","genres":["comedia","familia"],"episodes":61,"overview":"Babe y Kenzie crearon \"Sky Whale\", la ballena voladora, para un proyecto de ciencias, sin embargo, su idea se convirtió en el juego más famoso del año. Ahora están ganando mucho dinero con este nuevo y loco negocio. ¿Qué podría salir mal?"},{"id":"662fb758acbc68001310c521","slug":"school-of-rock-lt-ptv1","name":"Escuela de Rock","kind":"series","poster":"https://images.pluto.tv/series/662fb758acbc68001310c521/poster.jpg?fill=blur&fit=fill&fm=jpg&h=1000&q=75&w=694","genres":["comedia","musical","familia"],"episodes":44,"overview":"Los talentosos estudiantes de la preparatoria de William B. Travis recibirán la lección de sus vidas, a pura música. Con la llegada de Mr. Finn, toda la clase rockeará como nunca antes."},{"id":"651721804827fc001ab50a4c","slug":"how-to-rock-lt","name":"How to Rock","kind":"series","poster":"https://images.pluto.tv/series/651721804827fc001ab50a4c/poster_1785244681713.jpg?fill=blur&fit=fill&fm=jpg&h=1000&q=75&w=694","genres":["comedia","musical","familia"],"episodes":26,"overview":"Kacey formó una banda con las chicas populares, las \"Perfs\", hasta que como no cumplía con los estándares PERFectos, la echaron."},{"id":"67165b931a51490013987010","slug":"cousins-for-life","name":"Cousins for Life","kind":"series","poster":"https://images.pluto.tv/series/67165b931a51490013987010/poster_1783009805525.jpg?fill=blur&fit=fill&fm=jpg&h=1000&q=75&w=694","genres":["comedia","familia"],"episodes":20,"overview":"Cuando los primos Ivy y Stuart se encuentran viviendo bajo el mismo techo, aprenden que si bien no siempre pueden estar de acuerdo, pero están mejor juntos, ¡y cuando se unen son imparables!"},{"id":"5ff49e570108f1001ae20819","slug":"manual-de-supervivencia-escolar-de-ned","name":"Manual de Supervivencia Escolar de Ned","kind":"series","poster":"https://images.pluto.tv/series/5ff49e570108f1001ae20819/poster_1783371962492.jpg?fill=blur&fit=fill&fm=jpg&h=1000&q=75&w=694","genres":["comedia","familia"],"episodes":50,"overview":"Vive las aventuras de Ned Bigby mientras intenta sobrevivir y divertirse en la secundaria. Para lograrlo, ha creado un manual en el que incluye consejos únicos para superar las embarazosas situaciones que ocurren en la escuela."},{"id":"5eff42e91bfe8e001a9a5460","slug":"kenan-y-kel","name":"Kenan y Kel","kind":"series","poster":"https://images.pluto.tv/series/5eff42e91bfe8e001a9a5460/poster_1786440961324.jpg?fill=blur&fit=fill&fm=jpg&h=1000&q=75&w=694","genres":["comedia","familia"],"episodes":62,"overview":"Kenan cree que puede conseguir todo lo que quiere con sólo dos cosas: la ayuda de su mejor amigo, Kel, y sus alocados planes. ¡Claro que esa combinación siempre termina haciendo que los chicos se metan en muchos problemas!"},{"id":"5fe10c930ba4f0001a401c5d","slug":"clarissa-lo-explica-todo","name":"Clarissa lo Explica Todo","kind":"series","poster":"https://images.pluto.tv/series/5fe10c930ba4f0001a401c5d/poster_1782744841408.jpg?fill=blur&fit=fill&fm=jpg&h=1000&q=75&w=694","genres":["comedia","familia"],"episodes":61,"overview":"Con humor y perspicacia, Clarissa Darling, la hija mayor de esta familia de cuatro, examina la vida a través de sus ojos de preadolescente, dando su disparatado punto de vista a todo lo que le sucede."},{"id":"5e33683826aa35a05e2e06e5","slug":"catdog-latam","name":"CatDog","kind":"series","poster":"https://images.pluto.tv/series/5e33683826aa35a05e2e06e5/poster_1768767480958.jpg?fill=blur&fit=fill&fm=jpg&h=1000&q=75&w=694","genres":["animacion","comedia","familia"],"episodes":55,"overview":"Desde que el mundo es mundo, los perros y gatos se han llevado mal...Pero, ¿qué pasa cuando dos personalidades totalmente opuestas se ven obligados a compartir un mismo cuerpo? Prepárense a mil enredos junto a CatDog."},{"id":"5e32082ab5f08674273e624c","slug":"la-vida-moderna-de-rocko-ptv1","name":"La Vida Moderna de Rocko","kind":"series","poster":"https://images.pluto.tv/series/5e32082ab5f08674273e624c/poster_1786538161174.jpg?fill=blur&fit=fill&fm=jpg&h=1000&q=75&w=694","genres":["animacion","comedia","familia"],"episodes":51,"overview":"La Vida Moderna de Rocko narra las aventuras cotidianas de un wallaby australiano llamado Rocko, que está experimentando los desafíos de su nueva vida en una ciudad llamada O-Town con su perro Spunky y sus amigos Heffer y Filburt."},{"id":"5e4445ca9cd486cdb87c1d4f","slug":"angry-beavers-latam","name":"Los Castores Cascarrabias","kind":"series","poster":"https://images.pluto.tv/series/5e4445ca9cd486cdb87c1d4f/poster_1787136121905.jpg?fill=blur&fit=fill&fm=jpg&h=1000&q=75&w=694","genres":["animacion","comedia","familia"],"episodes":55,"overview":"Los Castores Cascarrabias cuenta la historia de Daggett y Norbert, dos hermanos castores que gozan la vida y que, al encontrarse solos por primera vez, tratan de negociar sus rivalidades de hermanos a la vez que se establecen en el mundo."},{"id":"5e29cad3d5346a9b8e714610","slug":"the-wild-thornberrys-latam","name":"Los Thornberrys","kind":"series","poster":"https://images.pluto.tv/series/5e29cad3d5346a9b8e714610/poster_1782739801637.jpg?fill=blur&fit=fill&fm=jpg&h=1000&q=75&w=694","genres":["animacion","aventura","familia"],"episodes":91,"overview":"Los Thornberrys son una familia que viaja por el mundo filmando documentales sobre la vida salvaje. Siempre se encuentran con aventuras increíbles porque Eliza, la hija de 12 años, tiene un secreto: ella puede hablar con los animales."},{"id":"61a6276d178ebd00137ad118","slug":"rocket-power-lt","name":"Rocket Power","kind":"series","poster":"https://images.pluto.tv/series/61a6276d178ebd00137ad118/poster_1769210281483.jpg?fill=blur&fit=fill&fm=jpg&h=1000&q=75&w=694","genres":["animacion","deportivo","familia"],"episodes":69,"overview":"Vive las aventuras cotidianas de de Otto, Reggie, Twister y Sam, quines son expertos en deportes extremos en el sur de California, en la ciudad ficticia de Costa del Océano, en donde disfrutan practicando surfeo, patinaje, patineta y más."},{"id":"615c4e0b5daa86001a53c993","slug":"invader-zim-lt","name":"Invasor Zim","kind":"series","poster":"https://images.pluto.tv/series/615c4e0b5daa86001a53c993/poster_1786093562017.jpg?fill=blur&fit=fill&fm=jpg&h=1000&q=75&w=694","genres":["animacion","ciencia-ficcion","comedia"],"episodes":26,"overview":"Un extraterrestre llamado Zim es enviado a colonizar un planeta lejano. Ese planeta es la Tierra y allí Zim encontrará a su némesis, Dib, un humano que hará lo que sea por detenerlo. ¡Operación Ruina Inevitable 2, está en marcha!"},{"id":"615753f356bf09001321f93c","slug":"el-tigre-the-adventures-of-manny-rivera-lt","name":"El Tigre: Las Aventuras de Manny Rivera","kind":"series","poster":"https://images.pluto.tv/series/615753f356bf09001321f93c/poster_1769208481669.jpg?fill=blur&fit=fill&fm=jpg&h=1000&q=75&w=694","genres":["animacion","accion","comedia"],"episodes":23,"overview":"Como el miembro más joven de la famosa familia Rivera, Manny proviene de una larga línea de hombres poderosos. Su padre, un exsuperhéroe conocido una vez como White Pantera, quiere que Manny crezca para ser bueno y honorable, como él."},{"id":"5f909977397eee001aba59e9","slug":"danny-phantom-latam","name":"Danny Phantom","kind":"series","poster":"https://images.pluto.tv/series/5f909977397eee001aba59e9/poster_1783349281951.jpg?fill=blur&fit=fill&fm=jpg&h=1000&q=75&w=694","genres":["animacion","fantasia","accion"],"episodes":52,"overview":"Danny Phantom es un superhéroe mitad humano - mitad fantasma que lucha, con la ayuda de sus amigos Sam y Tucker, para atrapar fantasmas malvados y proteger la ciudad. Todo eso, mientras intenta tener una vida normal de adolescente."},{"id":"67505f0671cc44001368c5fe","slug":"the-adventures-of-jimmy-neutron-boy-genius-ptv4","name":"Las Aventuras de Jimmy Neutrón","kind":"series","poster":"https://images.pluto.tv/series/67505f0671cc44001368c5fe/poster_1769475602145.jpg?fill=blur&fit=fill&fm=jpg&h=1000&q=75&w=694","genres":["animacion","ciencia-ficcion","comedia"],"episodes":20,"overview":"¡Sigue las aventuras de Jimmy Neutrón en Retroville! Para hacer su vida un poco más interesante, Jimmy se la pasa inventando aparatos y cosas increíbles, pero éstas suelen fallar a menudo y debe salvar a su ciudad de las consecuencias."},{"id":"631a0d4bc38c5300133782a2","slug":"the-fairly-oddparents-lt","name":"Los Padrinos Mágicos","kind":"series","poster":"https://images.pluto.tv/series/631a0d4bc38c5300133782a2/poster_1769236201191.jpg?fill=blur&fit=fill&fm=jpg&h=1000&q=75&w=694","genres":["animacion","fantasia","comedia"],"episodes":10,"overview":"¿Qué puede hacer un niño de 10 años? Si eres Timmy Turner, todo lo que tienes que hacer es buscar a tus místicos, mágicos y totalmente lunáticos padrinos mágicos para que te ayuden."},{"id":"60a5622b72e8e300148d7d08","slug":"as-told-by-ginger-lt","name":"As Told by Ginger","kind":"series","poster":"https://images.pluto.tv/series/60a5622b72e8e300148d7d08/poster_1780398721601.jpg?fill=blur&fit=fill&fm=jpg&h=1000&q=75&w=694","genres":["animacion","drama","familia"],"episodes":60,"overview":"Ginger Foutley, alumna de sexto grado, tiene un pie en el mundo de su infancia y el otro en el aterrador pero emocionante reino de la escuela secundaria."},{"id":"610029b4a038550014c20985","slug":"the-mighty-b-lt","name":"The Mighty B!","kind":"series","poster":"https://images.pluto.tv/series/610029b4a038550014c20985/poster_1769200201190.jpg?fill=blur&fit=fill&fm=jpg&h=1000&q=75&w=694","genres":["animacion","comedia"],"episodes":40,"overview":"Bessie Higgenbottom es la abeja exploradora más ambiciosa del mundo. Aunque siempre se mete en problemas con sus amigos, ella no se detendrá hasta conseguir todas las insignias que le faltan para convertirse en una “Súper Abeja”."},{"id":"654b902e2a6001001ac82323","slug":"back-at-the-barnyard-lt","name":"De Regreso al Corral","kind":"series","poster":"https://images.pluto.tv/series/654b902e2a6001001ac82323/poster_1780473241522.jpg?fill=blur&fit=fill&fm=jpg&h=1000&q=75&w=694","genres":["animacion","comedia"],"episodes":52,"overview":"En la granja, el granjero piensa que él es el que manda, manteniendo a todos los animales sanos y salvos. Pero cuando el granjero no está, Otis y sus amigos guardan un gran secreto… ¡Pueden hablar y divertirse como humanos!"},{"id":"5e3c18fc3659cc3d0c45c494","slug":"tuff-puppy-latam","name":"T.U.F.F. Puppy","kind":"series","poster":"https://images.pluto.tv/series/5e3c18fc3659cc3d0c45c494/poster_1768767841078.jpg?fill=blur&fit=fill&fm=jpg&h=1000&q=75&w=694","genres":["animacion","accion","comedia"],"episodes":60,"overview":"Dudley Puppy, un perro tonto, alocado, excéntrico, alocado y obsesionado con su juguete para morder, pero con un entusiasmo y fortaleza increíble, se une a la agencia T.U.F.F. (Turbo Unidad Fuerza y Furor)."},{"id":"61570ec21ccc0d0013d021ef","slug":"tak-and-the-power-of-juju-lt","name":"Tak y el Poder de Juju","kind":"series","poster":"https://images.pluto.tv/series/61570ec21ccc0d0013d021ef/poster_1769208481219.jpg?fill=blur&fit=fill&fm=jpg&h=1000&q=75&w=694","genres":["animacion","fantasia","aventura"],"episodes":26,"overview":"Tak, un humilde asistente de chamán, recibe el poder del Juju. Desafortunadamente, Tak es solo un adolescente al que se le han otorgado poderes generalmente reservados para chamanes de gran edad y sabiduría."},{"id":"6335c3d07a31e800133e7cc9","slug":"sanjay-and-craig-lt","name":"Sanjay y Craig","kind":"series","poster":"https://images.pluto.tv/series/6335c3d07a31e800133e7cc9/poster_1783632962517.jpg?fill=blur&fit=fill&fm=jpg&h=1000&q=75&w=694","genres":["animacion","comedia"],"episodes":58,"overview":"Sanjay y Craig, una serpiente que habla, son mejores amigos. Solo ellos serán capaces de meterse en cualquier problema y vivir todo tipo de aventuras disparatadas. Prepárate para reírte con esta dupla que no tiene miedo al ridículo."},{"id":"5eff36360e5187001379f65f","slug":"la-robot-adolescente","name":"Mi Vida como Robot Adolescente","kind":"series","poster":"https://images.pluto.tv/series/5eff36360e5187001379f65f/poster_1786534201072.jpg?fill=blur&fit=fill&fm=jpg&h=1000&q=75&w=694","genres":["animacion","ciencia-ficcion","comedia"],"episodes":40,"overview":"Jenny es una robot con increíbles poderes y un corazón sensible. Su misión es salvar el mundo, pero como toda adolescente, ella tiene sus propias ideas de cómo quiere vivir. Mientras cumple con su deber, intenta divertirse con sus amigos."},{"id":"5ff4a2aadabbb4001a738d2c","slug":"supah-ninjas-ptv1","name":"Supah Ninjas","kind":"series","poster":"https://images.pluto.tv/series/5ff4a2aadabbb4001a738d2c/poster_1769190843142.jpg?fill=blur&fit=fill&fm=jpg&h=1000&q=75&w=694","genres":["accion","comedia","familia"],"episodes":39,"overview":"Mike Fukanaga pensaba que cuando su amigo Owen lo desafió a conquistar a Amanda, iba a ser el mayor reto de la escuela. Pero cuando descubre que proviene de un largo linaje de ninjas, entra al excitante mundo de la lucha contra el crimen."},{"id":"646b6fc0649e97001b4c2700","slug":"hunter-street-lt","name":"Hunter Street","kind":"series","poster":"https://images.pluto.tv/series/646b6fc0649e97001b4c2700/poster_1785316322082.jpg?fill=blur&fit=fill&fm=jpg&h=1000&q=75&w=694","genres":["misterio","aventura","familia"],"episodes":90,"overview":"Cuando el Sr. y la Sra. Hunter desaparecen, le corresponde a sus cinco hijos adoptivos resolver el misterio y mantener las apariencias de que todo está bien."},{"id":"66b0ce382fca0600137a29ff","slug":"nickelodeons-spyders-lt","name":"Nickelodeon's Spyders","kind":"series","poster":"https://images.pluto.tv/series/66b0ce382fca0600137a29ff/poster_1783975681792.jpg?fill=blur&fit=fill&fm=jpg&h=1000&q=75&w=694","genres":["accion","misterio","familia"],"episodes":80,"overview":"Una serie cómica de acción y aventuras. Tres hermanos descubren que sus padres son espías encubiertos de una agencia de protección ambiental y deciden convertirse también en espías para ayudarlos en secreto."},{"id":"5e31a4c2423d816d8854350b","slug":"rugrats-all-grown-up-latam","name":"Rugrats Crecidos","kind":"series","poster":"https://images.pluto.tv/series/5e31a4c2423d816d8854350b/poster.jpg?fill=blur&fit=fill&fm=jpg&h=1000&q=75&w=694","genres":["animacion","comedia","familia"],"episodes":55,"overview":"¿Alguna vez te has imaginado cómo serían los Rugrats al convertirse en adolescentes? Diez años después, Tommy, Carlitos y la pandilla continúan teniendo aventuras fascinantes y a la vez deben enfrentar los problemas típicos de la pubertad."},{"id":"64ef8aab5f34400013ad1880","slug":"nickelodeons-unfiltered-lt","name":"Nickelodeon's Unfiltered","kind":"series","poster":"https://images.pluto.tv/series/64ef8aab5f34400013ad1880/poster_1783973909765.jpg?fill=blur&fit=fill&fm=jpg&h=1000&q=75&w=694","genres":["comedia","reality","familia"],"episodes":41,"overview":"Nickelodeon's Unfiltered es un nuevo programa de juegos, donde las celebridades se esconden detrás de divertidos personajes animados en 3D y depende de nuestro panel hacer preguntas."},{"id":"61a7d491c323f20013e4b8db","slug":"nick-snack-lt","name":"Nick Snack","kind":"series","poster":"https://images.pluto.tv/series/61a7d491c323f20013e4b8db/poster.jpg?fill=blur&fit=fill&fm=jpg&h=1000&q=75&w=694","genres":["comedia","animacion"],"episodes":16,"overview":"Nick Snack-Programa original de Nickelodeon con entrevistas, retos divertidos, y momentos musicales muy especial. Conducido por Luis de la Rosa."},{"id":"60253025ab449e001bd38350","slug":"el-show-de-amanda","name":"El Show de Amanda","kind":"series","poster":"https://images.pluto.tv/series/60253025ab449e001bd38350/poster_1769193721721.jpg?fill=blur&fit=fill&fm=jpg&h=1000&q=75&w=694","genres":["comedia","familia"],"episodes":32,"overview":"Un programa de variedades con un sentido del humor muy retorcido protagonizado por la princesa de la comedia de Nick, Amanda Bynes."},{"id":"5e2fa0bd4159233f98fa801a","slug":"true-jackson-vp-2","name":"True Jackson, VP","kind":"series","poster":"https://images.pluto.tv/series/5e2fa0bd4159233f98fa801a/poster.jpg?fill=blur&fit=fill&fm=jpg&h=1000&q=75&w=694","genres":["comedia","familia"],"episodes":46,"overview":"True Jackson es una adolescente de 15 años contratada como vicepresidenta de la línea de moda en MadStyle. Juntos a sus amigos, empleados y el dueño de la empresa, True deberá demostrar su talento y resolver los problemas en los que queda envuelta."},{"id":"66e1a10e38c4a000134eb9d7","slug":"every-witch-way-ptv2","name":"Every Witch Way","kind":"series","poster":"https://images.pluto.tv/series/66e1a10e38c4a000134eb9d7/poster_1783928881565.jpg?fill=blur&fit=fill&fm=jpg&h=1000&q=75&w=694","genres":["comedia","fantasia","familia"],"episodes":84,"overview":"Every Witch Way sigue las aventuras de Emma, una chica de 14 años quien acaba de mudarse a Miami, Florida, por lo cual, su vida se vuelve un poco más complicada cuando descubre que es una bruja."},{"id":"5fa95ea993fb64001a774c72","slug":"las-tortugas-ninja-latam-1989-1-1","name":"Las Tortugas Ninja (1990)","kind":"movie","poster":"https://images.pluto.tv/episodes/5fa95ea993fb64001a774c72/poster_1769563082095.jpg?fill=blur&fit=fill&fm=jpg&h=1000&q=75&w=694","genres":["accion","aventura","comedia"],"episodes":0,"year":"1990","overview":"Después de meterse en un charco de desechos radiactivos, estos reptiles se transforman en el cuarteto de lucha contra el crimen más feroz de Nueva York."},{"id":"684aecdb0d69b4d354f64fa9","slug":"teenage-mutant-ninja-turtles-the-secret-of-the-ooze-1992-1-1-ptv1","name":"Las Tortugas Ninja II: El Secreto del Ooze","kind":"movie","poster":"https://images.pluto.tv/episodes/684aecdb0d69b4d354f64fa9/poster_1769216042228.jpg?fill=blur&fit=fill&fm=jpg&h=1000&q=75&w=694","genres":["accion","aventura","comedia"],"episodes":0,"year":"1991","overview":"Las Tortugas Ninja Adolescentes Mutantes enfrentan el misterioso ‘Ooze’ y a Shredder, que crea monstruos en Nueva York."},{"id":"684aecd90d69b4d354f5eda6","slug":"teenage-mutant-ninja-turtles-3-1990-1-1-ptv1","name":"Las Tortugas Ninja III","kind":"movie","poster":"https://images.pluto.tv/episodes/684aecd90d69b4d354f5eda6/poster_1790885162541.jpg?fill=blur&fit=fill&fm=jpg&h=1000&q=75&w=694","genres":["accion","aventura","comedia"],"episodes":0,"year":"1993","overview":"En el antiguo Japón, las Tortugas Ninja Adolescentes Mutantes viajan en el tiempo para salvar a April O'Neil, quien fue transportada al Japón del siglo XVII. Se enfrentan a la rebelión samurái y deben salvar a April antes de que afecte a Nueva York."},{"id":"65e72128fc416f0013e56a31","slug":"big-time-movie-lt","name":"Big Time Movie","kind":"movie","poster":"https://images.pluto.tv/series/65e72128fc416f0013e56a31/poster_1781087761952.jpg?fill=blur&fit=fill&fm=jpg&h=1000&q=75&w=694","genres":["comedia","musical","familia"],"episodes":1,"year":"2012","overview":"Los cuatro mejores amigos de Big Time Rush se encuentran rumbo a la primera parada del tour en Londres. En el avión, Carlos tiene un sueño en el cual es un espía y el grupo debe rescatar a una princesa."},{"id":"6390eb24f98ab900137b1d2a","slug":"merry-christmas-drake-and-josh-2007-1-1","name":"Navidad con Drake y Josh","kind":"movie","poster":"https://images.pluto.tv/episodes/6390eb24f98ab900137b1d2a/poster_1769448602118.jpg?fill=blur&fit=fill&fm=jpg&h=1000&q=75&w=694","genres":["comedia","familia"],"episodes":0,"year":"2008","overview":"Walter y Audrey salen a sus vacaciones tropicales. Drake y Megan vuelven a casa y Josh les muestra su colección de muñecos de nieve. Megan corta la cuerda, haciendo que el muñeco de nieve se deslice lejos y Josh sale tras él."},{"id":"6408ca55e4479500132d9dd6","slug":"kca-2022-1-1-ptv1","name":"Kids' Choice Awards 2023","kind":"movie","poster":"https://images.pluto.tv/episodes/6408ca55e4479500132d9dd6/poster_1786439162257.jpg?fill=blur&fit=fill&fm=jpg&h=1000&q=75&w=694","genres":["familia","comedia"],"episodes":0,"year":"2023","overview":"Nate Burleson y Charli D’Amelio conducen los Kids' Choice Awards 2023, la fiesta para celebrar todo lo que los niños aman. ¡Y una noche especial de 1.000 slimes!"},{"id":"674482f0e835570013bd63cf","slug":"kca-mexico-2024-2024-1-1","name":"Kids' Choice Awards México 2024","kind":"movie","poster":"https://images.pluto.tv/episodes/674482f0e835570013bd63cf/poster_1786439523544.jpg?fill=blur&fit=fill&fm=jpg&h=1000&q=75&w=694","genres":["familia"],"episodes":0,"year":"2024","overview":"La premiación más pegajosa, conducida por Ángela Aguilar y Michael Ronda, regresa una vez más al Auditorio Nacional en la Ciudad de México, y celebraremos juntos el 25º aniversario de Bob Esponja."},{"id":"64ef8ee6e675cb001364f627","slug":"kca-mexico-2023-lt","name":"Kids' Choice Awards México 2023","kind":"movie","poster":"https://images.pluto.tv/series/64ef8ee6e675cb001364f627/poster_1786439521789.jpg?fill=blur&fit=fill&fm=jpg&h=1000&q=75&w=694","genres":["familia"],"episodes":1,"year":"2023","overview":"¡Llegó la hora de ver la 14° entrega de los Kids' Choice Awards México 2023! prepárate para disfrutar del show más divertido y pegajoso, con actos musicales espectaculares, grandes ganadores y mucho SLIME."},{"id":"607089eef3fd5d001b8152c8","slug":"rugrats-mothers-day-lt","name":"Rugrats: Especial del Día de la Madre","kind":"movie","poster":"https://images.pluto.tv/series/607089eef3fd5d001b8152c8/poster_1769195522121.jpg?fill=blur&fit=fill&fm=jpg&h=1000&q=75&w=694","genres":["animacion","familia"],"episodes":1,"overview":"Todos los Rugrats quieren conseguir regalos para sus madres por el Día de la Madre, pero a la vez quieren conseguir una mamá para Chuckie debido a que él no tiene una."},{"id":"61570ee71ccc0d0013d02d1d","slug":"rugrats-chanukah-lt","name":"Rugrats: Janucá","kind":"movie","poster":"https://images.pluto.tv/series/61570ee71ccc0d0013d02d1d/poster_1769208481581.jpg?fill=blur&fit=fill&fm=jpg&h=1000&q=75&w=694","genres":["animacion","familia"],"episodes":1,"overview":"Tommy lidera a los bebés en otra aventura para salvar al abuelo Boris del Malvado Hanukah, su antiguo rival de la infancia."}];

// Filas del Inicio: cada una con su categoría de Kino y sus títulos.
const ROWS = [
  {
    id: "populares",
    genre: "infantil",
    es: "Lo más visto de Nickelodeon",
    en: "Most watched on Nickelodeon",
    slugs: [
      "spongebob-squarepants-las-ptv1", "avatar-the-last-airbender-lt", "paw-patrol-lt", "icarly-lt",
      "victorious-ptv2", "drake-and-josh-ptv3", "henry-danger-hd-ptv1", "the-thundermans-hd",
      "the-loud-house-ptv4", "the-casagrandes-ptv5", "big-time-rush-lt", "zoey-101-lt",
      "sam-and-cat-lt", "dora-the-explorer-lt", "teenage-mutant-ninja-turtles-lt",
      "the-adventures-of-jimmy-neutron-boy-genius-ptv4", "the-fairly-oddparents-lt",
      "danny-phantom-latam", "rugrats-all-grown-up-latam", "game-shakers-lt"
    ]
  },
  {
    id: "series",
    genre: "series",
    es: "Series de Nickelodeon",
    en: "Nickelodeon series",
    all: "series"
  },
  {
    id: "comedia",
    genre: "comedia",
    es: "Comedias juveniles",
    en: "Teen comedies",
    slugs: [
      "icarly-lt", "victorious-ptv2", "drake-and-josh-ptv3", "zoey-101-lt", "big-time-rush-lt",
      "sam-and-cat-lt", "henry-danger-hd-ptv1", "the-thundermans-hd", "game-shakers-lt",
      "school-of-rock-lt-ptv1", "how-to-rock-lt", "cousins-for-life",
      "manual-de-supervivencia-escolar-de-ned", "kenan-y-kel", "clarissa-lo-explica-todo",
      "supah-ninjas-ptv1", "nickelodeons-unfiltered-lt", "nick-snack-lt", "el-show-de-amanda", "true-jackson-vp-2", "every-witch-way-ptv2"
    ]
  },
  {
    id: "nickjr",
    genre: "infantil",
    es: "Nick Jr. para los más pequeños",
    en: "Nick Jr. for the little ones",
    slugs: [
      "paw-patrol-lt", "dora-the-explorer-lt", "go-diego-go-lt", "las-pistas-de-blue-latam",
      "bubble-guppies-lt-ptv1", "blaze-and-the-monster-machines-lt", "shimmer-and-shine-lt",
      "rusty-rivets-lt", "top-wing-ptv1", "team-umizoomi-lt", "nella-the-princess-knights-lt",
      "dora-and-friends-into-the-city-lt"
    ]
  },
  {
    id: "clasicos",
    genre: "animacion",
    es: "Animación clásica de Nick",
    en: "Classic Nick animation",
    slugs: [
      "catdog-latam", "la-vida-moderna-de-rocko-ptv1", "angry-beavers-latam",
      "the-wild-thornberrys-latam", "rocket-power-lt", "invader-zim-lt",
      "el-tigre-the-adventures-of-manny-rivera-lt", "danny-phantom-latam",
      "the-adventures-of-jimmy-neutron-boy-genius-ptv4", "the-fairly-oddparents-lt",
      "as-told-by-ginger-lt", "the-mighty-b-lt", "back-at-the-barnyard-lt", "tuff-puppy-latam",
      "tak-and-the-power-of-juju-lt", "sanjay-and-craig-lt", "la-robot-adolescente",
      "rugrats-all-grown-up-latam", "spongebob-squarepants-las-ptv1"
    ]
  },
  {
    id: "aventura",
    genre: "aventura",
    es: "Acción y aventura",
    en: "Action and adventure",
    slugs: [
      "avatar-the-last-airbender-lt", "teenage-mutant-ninja-turtles-lt",
      "kung-fu-panda-legends-of-awesomeness-lt", "the-penguins-of-madagascar-lt",
      "supah-ninjas-ptv1", "hunter-street-lt", "nickelodeons-spyders-lt",
      "henry-danger-hd-ptv1", "the-thundermans-hd", "blaze-and-the-monster-machines-lt"
    ]
  },
  {
    id: "peliculas",
    genre: "peliculas",
    es: "Películas y especiales",
    en: "Movies and specials",
    all: "movie"
  }
];

function lang() {
  return String(kino.lang || "es-CO").toLowerCase().indexOf("en") === 0 ? "en" : "es";
}

function txt(es, en) {
  return lang() === "en" ? en : es;
}

// Quita tildes y mayúsculas para buscar sin que importen los acentos.
function norm(s) {
  var out = String(s == null ? "" : s).toLowerCase();
  var from = "áàäâãéèëêíìïîóòöôõúùüûñç";
  var to = "aaaaaeeeeiiiiooooouuuunc";
  var r = "";
  for (var i = 0; i < out.length; i++) {
    var ch = out.charAt(i);
    var p = from.indexOf(ch);
    r += p >= 0 ? to.charAt(p) : ch;
  }
  return r.replace(/[^a-z0-9]+/g, " ").replace(/^\s+|\s+$/g, "");
}

function bySlug(slug) {
  for (var i = 0; i < CATALOG.length; i++) if (CATALOG[i].slug === slug) return CATALOG[i];
  return null;
}

function item(x) {
  var it = {
    id: x.id,
    ref: x.kind === "series" ? "s:" + x.slug : "e:" + x.id,
    title: x.name,
    kind: x.kind,
    genres: x.genres,
    lang: "es"
  };
  if (x.poster) it.poster = x.poster;
  if (x.overview) it.overview = x.overview;
  if (x.year) it.year = x.year;
  return it;
}

function rowItems(row) {
  var list = [];
  if (row.all) {
    for (var i = 0; i < CATALOG.length; i++) if (CATALOG[i].kind === row.all) list.push(CATALOG[i]);
    return list;
  }
  for (var j = 0; j < row.slugs.length; j++) {
    var x = bySlug(row.slugs[j]);
    if (x) list.push(x);
  }
  return list;
}

function limit(n, arr) {
  return arr.length > n ? arr.slice(0, n) : arr;
}

// ---------- sesión de Pluto TV ----------

async function plutoSession() {
  var raw = null;
  try {
    raw = kino.storage.get(SESSION_KEY);
  } catch (e) {
    raw = null;
  }
  if (raw) {
    try {
      var cached = JSON.parse(raw);
      if (cached && cached.token && cached.params && cached.exp > Date.now() + 120000) return cached;
    } catch (e2) {
      // sesión guardada rota: se pide otra
    }
  }
  var r = await kino.fetch(BOOT, {
    headers: { "Accept": "application/json", "Accept-Language": lang() === "en" ? "en-US" : "es-CO", "User-Agent": UA },
    timeoutMs: 12000
  });
  if (!r.ok) throw kino.error(r.status === 429 ? "rate_limited" : "unavailable", "sesión " + r.status);
  var d = r.json();
  if (!d || !d.sessionToken || !d.session || !d.stitcherParams) {
    throw kino.error("unavailable", "sesión incompleta");
  }
  var s = {
    token: String(d.sessionToken),
    params: String(d.stitcherParams),
    sid: String(d.session.sessionID || ""),
    exp: Date.now() + 40 * 60 * 1000
  };
  try {
    kino.storage.set(SESSION_KEY, JSON.stringify(s), { ttlMs: 60 * 60 * 1000 });
  } catch (e3) {
    // sin almacenamiento se sigue con la sesión en memoria
  }
  return s;
}

function forgetSession() {
  try {
    kino.storage.remove(SESSION_KEY);
  } catch (e) {
    // nada
  }
}

function vodQuery(s) {
  return "appName=web&appVersion=" + APP_VERSION + "&clientID=" + CLIENT_ID +
    "&clientModelNumber=web&serverSideAds=false&deviceMake=Chrome&deviceModel=web" +
    "&deviceType=web&deviceVersion=" + APP_VERSION +
    (s && s.sid ? "&sid=" + encodeURIComponent(s.sid) : "");
}

async function seriesData(slug) {
  var s = null;
  try {
    s = await plutoSession();
  } catch (e) {
    s = null;
  }
  var url = VOD + "/v3/vod/slugs/" + encodeURIComponent(slug) + "?" + vodQuery(s);
  var r = await kino.fetch(url, { headers: { "Accept": "application/json", "User-Agent": UA }, timeoutMs: 12000 });
  if (r.status === 404) throw kino.error("not_found", "serie " + slug);
  if (!r.ok) throw kino.error(r.status === 429 ? "rate_limited" : "unavailable", "vod " + r.status);
  var d = r.json();
  if (!d || !d.name) throw kino.error("not_found", "serie sin datos");
  return d;
}

function episodeList(d) {
  var out = [];
  var seasons = d.seasons || [];
  for (var i = 0; i < seasons.length; i++) {
    var se = seasons[i];
    var eps = se.episodes || [];
    for (var j = 0; j < eps.length; j++) {
      var ep = eps[j];
      if (!ep || !ep._id) continue;
      var itemEp = {
        season: num(ep.season, num(se.number, 1)),
        number: num(ep.number, out.length + 1),
        ref: "e:" + ep._id,
        title: String(ep.name || ""),
        overview: String(ep.description || "")
      };
      var cover = ep.covers && ep.covers.length ? ep.covers[0].url : "";
      if (cover) itemEp.still = cover;
      if (ep.duration) itemEp.runtimeMinutes = Math.max(1, Math.round(Number(ep.duration) / 60000));
      out.push(itemEp);
    }
  }
  out.sort(function (a, b) {
    if (a.season !== b.season) return a.season - b.season;
    return a.number - b.number;
  });
  return out;
}

function num(v, fallback) {
  var n = Number(v);
  return isFinite(n) && n > 0 ? n : fallback;
}

async function playUrl(id) {
  var s = await plutoSession();
  var url = PLAY + encodeURIComponent(id) + "/master.m3u8?" + s.params;
  var headers = { "Authorization": "Bearer " + s.token, "User-Agent": UA };
  var r = await kino.fetch(url, { headers: headers, timeoutMs: 12000 });
  if (r.status === 401 || r.status === 403) {
    forgetSession();
    var s2 = await plutoSession();
    url = PLAY + encodeURIComponent(id) + "/master.m3u8?" + s2.params;
    headers = { "Authorization": "Bearer " + s2.token, "User-Agent": UA };
    r = await kino.fetch(url, { headers: headers, timeoutMs: 12000 });
  }
  if (!r.ok) {
    if (r.status === 404) throw kino.error("not_found", "video " + r.status);
    if (r.status === 401 || r.status === 403) throw kino.error("unavailable", "sin permiso " + r.status);
    throw kino.error("unavailable", "video " + r.status);
  }
  return { url: url, headers: headers };
}

// ---------- funciones que Kino llama ----------

export async function search(query) {
  await kino.sleep(0);
  var q = norm(query && query.q ? query.q : "");
  if (!q) return [];
  var words = q.split(" ").filter(function (w) { return w.length > 0; });
  var scored = [];
  for (var i = 0; i < CATALOG.length; i++) {
    var x = CATALOG[i];
    var hay = norm(x.name + " " + x.slug.replace(/-/g, " "));
    var ok = true;
    var score = 0;
    for (var w = 0; w < words.length; w++) {
      if (hay.indexOf(words[w]) < 0) {
        ok = false;
        break;
      }
      score += norm(x.name).indexOf(words[w]) === 0 ? 3 : 1;
    }
    if (ok) scored.push({ x: x, s: score });
  }
  scored.sort(function (a, b) {
    if (b.s !== a.s) return b.s - a.s;
    return a.x.name < b.x.name ? -1 : a.x.name > b.x.name ? 1 : 0;
  });
  var out = [];
  for (var j = 0; j < scored.length && out.length < 100; j++) out.push(item(scored[j].x));
  return out;
}

export async function home() {
  var rows = [];
  for (var i = 0; i < ROWS.length; i++) {
    var row = ROWS[i];
    var list = limit(60, rowItems(row));
    if (!list.length) continue;
    rows.push({
      id: row.id,
      title: txt(row.es, row.en),
      genre: row.genre,
      ref: "row:" + row.id,
      items: list.map(item)
    });
  }
  return rows;
}

export async function browse(ref, cursor) {
  await kino.sleep(0);
  var id = String(ref || "").replace(/^row:/, "");
  var row = null;
  for (var i = 0; i < ROWS.length; i++) if (ROWS[i].id === id) row = ROWS[i];
  if (!row) throw kino.error("not_found", "fila " + id);
  var list = rowItems(row);
  var skip = cursor ? parseInt(String(cursor), 10) : 0;
  if (!isFinite(skip) || skip < 0) skip = 0;
  var items = [];
  for (var j = skip; j < list.length && items.length < 30; j++) items.push(item(list[j]));
  var next = skip + items.length < list.length ? String(skip + items.length) : undefined;
  var page = { items: items };
  if (next) page.next = next;
  return page;
}

export async function episodes(ref) {
  await kino.sleep(0);
  var r = String(ref || "");
  if (r.indexOf("s:") !== 0) throw kino.error("not_found", "ref " + r.slice(0, 40));
  var slug = r.slice(2);
  var d = await seriesData(slug);
  var eps = episodeList(d);
  if (!eps.length) throw kino.error("not_found", "serie sin capítulos");
  var info = {
    title: String(d.name || ""),
    overview: String(d.summary || d.description || "")
  };
  var poster = d.covers && d.covers.length ? d.covers[0].url : "";
  if (poster) info.poster = poster;
  var x = bySlug(slug);
  if (x && x.genres) info.genres = x.genres;
  return { series: info, episodes: eps };
}

export async function resolve(ref) {
  await kino.sleep(0);
  var r = String(ref || "");
  var id = "";
  if (r.indexOf("e:") === 0) id = r.slice(2);
  else if (r.indexOf("s:") === 0) {
    var d = await seriesData(r.slice(2));
    var eps = episodeList(d);
    if (!eps.length) throw kino.error("not_found", "serie sin capítulos");
    id = eps[0].ref.slice(2);
  } else {
    id = r;
  }
  if (!id) throw kino.error("not_found", "ref vacío");
  var p = await playUrl(id);
  return {
    url: p.url,
    mime: "application/x-mpegURL",
    headers: p.headers,
    expiresInSeconds: 1800
  };
}
