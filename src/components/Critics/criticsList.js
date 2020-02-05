import uuid from 'uuid/v4'
const CRITICS_LIST = [{
        title: "critica",
        content: "Una de las películas más inteligentes y divertidas de la edición del BAFICI. El virus entró al sistema.",
        author: "Diego Erlan, Clarín",
        link: "",
        posY: 24,
        posX: 40,
        id: uuid()
    },
    {
        title: "critica",
        content: "...una mirada punzante sobre el arte contemporáneo.",
        author: "Luis Paz, Página 12",
        link: "http://www.pagina12.com.ar/diario/suplementos/no/12-7696-2015-04-16.html",
        posY: 7,
        posX: 15,
        id: uuid()
    },
    {
        title: "critica",
        content: "Un film tan exótico como cautivante.",
        author: "Alejandro Lingenti, La Nación",
        link: "https://www.lanacion.com.ar/espectaculos/cine/arte-y-experimento-nid1878546",
        posY: 30,
        posX: 67,
        id: uuid()
    },
    {
        title: "critica",
        content: "Un juego sobre la ontología de la imagen y el concepto de verdad en la era digital.",
        author: "Diego Lerer, Micropsia/Otros Cines",
        link: "http://www.micropsiacine.com/2016/03/estrenos-generacion-artificial-y-parabellum/",
        posY: 67,
        posX: 45,
        id: uuid()
    },
    {
        title: "critica",
        content: "Divertida, fascinante y delirante.",
        author: "Natalia Trzenko, La Nación",
        link: "http://www.lanacion.com.ar/1785861-la-revolucion-en-vhs",
        posY: 13,
        posX: 63,
        id: uuid()
    },
    {
        title: "critica",
        content: "Un thriller detectivesco sobre el poder del audiovisual en la era digital",
        author: "Carlota Moseguí, Otros Cines Europa",
        link: "http://www.otroscineseuropa.com/vj-for-fake/",
        posY: 68,
        posX: 24,
        id: uuid()
    },
    {
        title: "critica",
        content: "Bienvenidos a la película más graciosa, libre, afilada y, por qué no, más seria sobre su asunto que el cine argentino ha producido en mucho (acaso demasiado) tiempo.",
        author: "Marcelo Panozzo,  director artístico BAFICI",
        link: "",
        posY: 74,
        posX: 15,
        id: uuid()
    },
    {
        title: "critica",
        content: "Una historia reminiscente de Cronenberg.",
        author: "Pedro Garay, El Día",
        link: "http://www.eldia.com/espectaculos/el-documental-la-gran-estrella-51895",
        posY: 8,
        posX: 37,
        id: uuid()
    },
    {
        title: "critica",
        content: "Mezcla de film noir con ciencia ficción.",
        author: "Diego Mate, Revista Haciendo Cine",
        link: "http://www.haciendocine.com.ar/content/god-vj?fbclid=IwAR1Bz7qN5ogUwQnlj3q8Sy552P4w4pzRjN2ETrcv6WA4mjGS69F1xWb5Kss",
        posY: 34,
        posX: 79,
        id: uuid()
    },
    {
        title: "critica",
        content: "Una bienvenida rareza",
        author: "Escribiendo Cine, Ezequiel Obregón",
        link: "http://www.escribiendocine.com/critica/0002668-yo-detras-de-la-pantalla/",
        posY: 52,
        posX: 35,
        id: uuid()
    },
    {
        title: "critica",
        content: "Vertiginosa, seductora y dinámica.",
        author: "Paula Caffaro Cinerama Plus",
        link: "http://cineramaplus.com.ar/?p=8203",
        posY: 14,
        posX: 78,
        id: uuid()
    },
    {
        title: "critica",
        content: "Diseminadas ideas sobre la colisión entre la raza humana y las máquinas",
        author: "Santiago Alonso, Revista Insertos Cine",
        link: "https://insertoscine.com/2016/12/20/margenes-vi-generacion-artificial/?fbclid=IwAR0xiN9ZTrPlXEFNetqJDHpFDPTpwyag4zhLzunc_gzG9a6fhAlobupYTSs",
        posY: 7,
        posX: 57,
        id: uuid()
    },
    {
        title: "critica",
        content: "a rollercoaster ride.",
        author: "Argentina Independent",
        link: "http://www.argentinaindependent.com/the-arts/film-culture/argentine-picks-from-bafici-201/",
        posY: 77,
        posX: 10,
        id: uuid()
    },
    {
        title: "critica",
        content: "...un film entrañable",
        author: "María Bertoni, Espectadores",
        link: "https://espectadores.wordpress.com/2015/04/20/generacion-artificial-de-federico-pintos-bafici/",
        posY: 69,
        posX: 42,
        id: uuid()
    },
    {
        title: "critica",
        content: "Explora más preguntas que respuestas, una propuesta más que interesante",
        author: "Fabio Vallarelli, Revista 24 Cuadros",
        link: "https://revista24cuadros.com/2015/04/27/resenas-17-bafici-generacion-artificial/",
        posY: 55,
        posX: 60,
        id: uuid()
    },
    {
        title: "critica",
        content: "Se luce por su propuesta radical y cercana al ensayo",
        author: "CineFreaks, Pablo Arahuete",
        link: "https://cinefreaks.net/2016/03/04/generacion-artificial-esas-raras-imagenes-en-pantalla/",
        posY: 20,
        posX: 40,
        id: uuid()
    },
    {
        title: "critica",
        content: "uno de los trabajos más excitantes y modernos",
        author: "Espacio Cine, Fernando Varea",
        link: "https://espaciocine.wordpress.com/2015/04/26/bafici-2015/",
        posY: 45,
        posX: 76,
        id: uuid()
    },
    {
        title: "critica",
        content: "una reflexión acerca de la relación entre arte y tecnología",
        author: "Revista Magnolia, Iván Ginés",
        link: "http://revistamagnolia.es/2016/12/vi-festival-margenes/",
        posY: 78,
        posX: 45,
        id: uuid()
    },
    {
        title: "critica",
        content: "explosión colorista y casi epiléptica que juega con las formas, las tonalidades y la exposición abstracta de las imágenes",
        author: "Videodromo, Luis Suñer",
        link: "http://www.videodromo.es/festivales-de-cine/margenes-2016-dia-2/57233",
        posY: 39,
        posX: 41,
        id: uuid()
    },
    {
        title: "critica",
        content: "Vertiginosa, seductora y dinámica.",
        author: "Paula Caffaro Cinerama Plus",
        link: "http://cineramaplus.com.ar/?p=8203",
        posY: 70,
        posX: 65,
        id: uuid()
    },
    {
        title: "entrevista",
        content: "Una de las experiencias más radicales que propone la sección oficial de BAFICI",
        author: "Otros Cines, Ezequiel Boetti",
        link: "https://www.otroscines.com/~otroscinesweb/nota?idnota=9624&idsubseccion=162",
        posY: 85,
        posX: 60,
        id: uuid()
    },
    {
        title: "entrevista",
        content: "Generación Artificial va hacia el futuro introduciendo una trama cyberpunk sobre el hackeo de cerebros",
        author: "Tomás Dotta, Aurea",
        link: "https://a-u-r-e-a.com/cine-ojos-de-videotape-federico-pintos/",
        posY: 19,
        posX: 45,
        id: uuid()
    },
    {
        title: "entrevista",
        content: "Una de las sorpresas de la última edición del BAFICI",
        author: "Fernando Varea, Espacio Cine",
        link: "https://espaciocine.wordpress.com/2015/08/02/fp/",
        posY: 67,
        posX: 38,
        id: uuid()
    },
    {
        title: "entrevista",
        content: "Una película anómala",
        author: "Cinefreaks, Pablo Arahuete",
        link: "https://cinefreaks.net/2016/03/11/entrevista-a-federico-pintos-creo-en-la-innovacion-como-percepcion-de-algo-nuevo/",
        posY: 55,
        posX: 33,
        id: uuid()
    },
    {
        title: "entrevista",
        content: "Todos somos Video Jockeys",
        author: "Secretaría de Cultura",
        link: "https://www.cultura.gob.ar/federico-pintos-mezcla-ciencia-y-tecnologia-con-arte-y-narracion_4873/",
        posY: 33,
        posX: 55,
        id: uuid()
    },

]

export default CRITICS_LIST