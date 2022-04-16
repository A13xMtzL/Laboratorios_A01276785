const filesystem = require('fs');

function escribe_archivo(str, nom_archivo) {
   filesystem.appendFileSync(nom_archivo, (str + '\n'));
}

const frutas = ["Guayabas", "Peras", "Sandia", "Manzanas"];
const verduras = ["Lechuga", "Espinacas", "Cebolla", "Berenjena"];
const lacteos = ["Leche", "Yogurt", "Queso", "Crema"];

for (let i in frutas) {
   escribe_archivo(frutas[i], 'lista_frutas.txt');
}

for (let i in verduras) {
   escribe_archivo(verduras[i], 'lista_verduras.txt');
}

for (let i in lacteos) {
   escribe_archivo(lacteos[i], 'lista_lacteos.txt');
}


const http = require('http');

const server = http.createServer((request, response) => {

   if (request.url === '/') {

      response.setHeader('Content-Type', 'text/html');

      response.write('<!DOCTYPE html>');
      response.write('<head>');
      response.write('<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">');
      response.write('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">');

      response.write('<meta charset="UTF-8">');
      response.write('<meta http-equiv="X-UA-Compatible" content="IE=edge">');
      response.write('<meta name="viewport" content="width=device-width, initial-scale=1.0">');
      response.write('<title>Laboratorio 10</title>');
      response.write('</head>');

      response.write('<body>');
      response.write('<header>');
      response.write('<nav class="teal darken-1">');
      response.write('<div class="nav-wrapper">');
      response.write('<a href="#!" class="brand-logo center">Laboratorio 10 </a>');
      response.write('<ul class="left hide-on-med-and-down">');
      response.write('</ul>');
      response.write('</div>');
      response.write('</nav>');
      response.write('</div>');
      response.write('</header>');
      response.write('<div class="container">');
      response.write('<div class="section">');

      response.write('<h3 class="green-text">Laboratorio 10: Rutas y formas</h3>');
      response.write('<h4 class="black-text">¡Hola!<br>Bienvenido a tu lista de compras:</h4>');
      response.write('</div>');


      response.write('<div class="card-panel red lighten-2">');
      response.write('<h2>Frutas:</h2>');
      response.write('<ul>');

      for (let i in frutas) {
         response.write('<li>' + frutas[i] + '</li>');
         response.write('<hr>');

      }

      response.write('</ul><br>');
      response.write('<a href="nuevaFruta" class="waves-effect waves-light btn red darken-3">Agregar item</a>');

      response.write('</div>');

      response.write('<div class="card-panel teal lighten-4">');
      response.write('<h2>Verduras:</h2>');
      response.write('<ul>');
      for (let i in verduras) {
         response.write('<li>' + verduras[i] + '</li>');
         response.write('<hr>');
      }
      response.write('</ul><br>');
      response.write('<a href="nuevaVerdura" class="waves-effect waves-light btn ">Agregar item</a>');
      response.write('</div>');

      response.write('<div class="card-panel orange lighten-4">');


      response.write('<h2>Lacteos:</h2>');
      response.write('<ul>');
      for (let i in lacteos) {
         response.write('<li>' + lacteos[i] + '</li>');
         response.write('<hr>');

      }
      response.write('</ul><br>');
      response.write('<a href="nuevoLacteo" class="waves-effect waves-light btn orange">Agregar item</a>');


      response.write('</div>');
      response.write('</body>');
      response.end();

   } else if (request.url === '/nuevaFruta' && request.method === 'GET') {

      response.setHeader('Content-Type', 'text/html');

      response.write('<!DOCTYPE html>');
      response.write('<html lang="es-mx">')
      response.write('<head>');
      response.write('<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">');
      response.write('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">');

      response.write('<meta charset="UTF-8">');
      response.write('<meta http-equiv="X-UA-Compatible" content="IE=edge">');
      response.write('<meta name="viewport" content="width=device-width, initial-scale=1.0">');
      response.write('<title>Laboratorio 10</title>');
      response.write('</head>');

      response.write('<body>');
      response.write('<header>');
      response.write('<nav class="teal darken-1">');
      response.write('<div class="nav-wrapper">');
      response.write('<a href="#!" class="brand-logo center"></a>');
      response.write('<ul class="left hide-on-med-and-down">');
      response.write('</ul>');
      response.write('</div>');
      response.write('</nav>');

      response.write('</header>');



      response.write('<div class="card-panel">');
      response.write('<h2>Agregando items a la lista: Fruta</h2>');

      response.write('<div class="row">');
      response.write('<form action="/nuevaFruta" , method="POST" , class="col s12">');
      response.write('<div class="row">');
      response.write('<div class="input-field col s12">');
      response.write('<input type="text" id="articulo" name="articulo" placeholder="Manzana">');

      response.write('</div>');
      response.write('</div>');

      response.write('<button class="btn waves-effect waves-light red darken-3" type="submit" value="Enviar">Submit<i class="material-icons right">send</i>');



      response.write('</button>');
      response.write('<br><br>');
      response.write('<div class="col s10 offset-s1 center-align">');
      response.write('<a href="/" class="waves-effect waves-light btn"><i class="material-icons right">home</i>Regresar</a>');
      response.write('</div>');
      response.write('</form>');
      response.write('</div>');

      response.write('</div>');

      response.write('</body>');
      response.end();

   } else if (request.url === '/nuevaVerdura' && request.method === 'GET') {

      response.setHeader('Content-Type', 'text/html');

      response.write('<!DOCTYPE html>');
      response.write('<head>');
      response.write('<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">');
      response.write('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">');

      response.write('<meta charset="UTF-8">');
      response.write('<meta http-equiv="X-UA-Compatible" content="IE=edge">');
      response.write('<meta name="viewport" content="width=device-width, initial-scale=1.0">');
      response.write('<title>Laboratorio 10</title>');
      response.write('</head>');

      response.write('<body>');
      response.write('<header>');
      response.write('<nav class="teal darken-1">');
      response.write('<div class="nav-wrapper">');
      response.write('<a href="#!" class="brand-logo center"></a>');
      response.write('<ul class="left hide-on-med-and-down">');
      response.write('</ul>');
      response.write('</div>');
      response.write('</nav>');

      response.write('</header>');

      response.write('<div class="card-panel">');
      response.write('<h2 class="Red-text">Agregando items a la lista: "Verdura"</h2>');

      response.write('<div class="row">');
      response.write('<form action="/nuevaVerdura" , method="POST" , class="col s12">');
      response.write('<div class="row">');
      response.write('<div class="input-field col s12">');
      response.write('<input type="text" id="articulo" name="articulo" placeholder="Lechuga">');

      response.write('</div>');
      response.write('</div>');

      response.write('<button class="btn waves-effect waves-light" type="submit" value="Enviar">Submit<i class="material-icons right">send</i>');



      response.write('</button>');
      response.write('<br><br>');
      response.write('<div class="col s10 offset-s1 center-align">');
      response.write('<a href="/" class="waves-effect waves-light btn"><i class="material-icons right">home</i>Regresar</a>');
      response.write('</div>');
      response.write('</form>');
      response.write('</div>');

      response.write('</div>');

      response.write('</body>');
      response.end();



   } else if (request.url === '/nuevoLacteo' && request.method === 'GET') {

      response.setHeader('Content-Type', 'text/html');

      response.write('<!DOCTYPE html>');
      response.write('<html lang="es-mx">')
      response.write('<head>');
      response.write('<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">');
      response.write('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">');

      response.write('<meta charset="UTF-8">');
      response.write('<meta http-equiv="X-UA-Compatible" content="IE=edge">');
      response.write('<meta name="viewport" content="width=device-width, initial-scale=1.0">');
      response.write('<title>Laboratorio 10</title>');
      response.write('</head>');

      response.write('<body>');
      response.write('<header>');
      response.write('<nav class="teal darken-1">');
      response.write('<div class="nav-wrapper">');
      response.write('<a href="#!" class="brand-logo center"></a>');
      response.write('<ul class="left hide-on-med-and-down">');
      response.write('</ul>');
      response.write('</div>');
      response.write('</nav>');

      response.write('</header>');



      response.write('<div class="card-panel">');
      response.write('<h2>Agregando items a la lista: Lacteos</h2>');
      response.write('<div class="row">');
      response.write('<form action="nuevoLacteo" , method="POST" , class="col s12">');
      response.write('<div class="row">');
      response.write('<div class="input-field col s12">');
      response.write('<input type="text" id="articulo" name="articulo" placeholder="Leche">');
      response.write('</div>');
      response.write('</div>');

      response.write('<button class="btn orange waves-effect waves-light" type="submit" value="Enviar">Submit<i class="material-icons right">send</i>');



      response.write('</button>');
      response.write('<br><br>');
      response.write('<div class="col s10 offset-s1 center-align">');
      response.write('<a href="/" class="waves-effect waves-light btn"><i class="material-icons right">home</i>Regresar</a>');
      response.write('</div>');
      response.write('</form>');
      response.write('</div>');

      response.write('</div>');

      response.write('</body>');
      response.end();

   } else if (request.url === '/nuevaFruta' && request.method === 'POST') {


      console.log("POST");
      const datos = [];
      request.on('data', (dato) => {
         // console.log(dato);
         datos.push(dato);
      });
      return request.on('end', () => {

         console.log(datos);
         const datos_completos = Buffer.concat(datos).toString();
         console.log(datos_completos);
         const nuevo_dato = datos_completos.split('=')[1];
         console.log(nuevo_dato);
         frutas.push(nuevo_dato);
         escribe_archivo(nuevo_dato, 'lista_frutas.txt');
         console.log(frutas)

         response.setHeader('Content-Type', 'text/html');

         response.write('<!DOCTYPE html>');
         response.write('<head>');
         response.write('<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">');
         response.write('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">');

         response.write('<meta charset="UTF-8">');
         response.write('<meta http-equiv="X-UA-Compatible" content="IE=edge">');
         response.write('<meta name="viewport" content="width=device-width, initial-scale=1.0">');
         response.write('<title>Laboratorio 10</title>');
         response.write('</head>');

         response.write('<body>');
         response.write('<header>');
         response.write('<nav class="teal darken-1">');
         response.write('<div class="nav-wrapper">');
         response.write('<a href="#!" class="brand-logo center">Laboratorio 10 </a>');
         response.write('<ul class="left hide-on-med-and-down">');
         response.write('</ul>');
         response.write('</div>');
         response.write('</nav>');
         response.write('</div>');
         response.write('</header>');
         response.write('<div class="container">');
         response.write('<div class="section">');

         response.write('<h3 class="green-text">Laboratorio 10: Rutas y formas</h3>');
         response.write('<h4 class="black-text">¡Hola!<br>Bienvenido a tu lista de compras:</h4>');
         response.write('</div>');


         response.write('<div class="card-panel red lighten-2">');
         response.write('<h2>Frutas:</h2>');
         response.write('<ul>');

         for (let i in frutas) {
            response.write('<li>' + frutas[i] + '</li>');
            response.write('<hr>');
         }

         response.write('</ul><br>');
         response.write('<a href="nuevaFruta" class="waves-effect waves-light btn red darken-3">Agregar item</a>');

         response.write('</div>');

         response.write('<div class="card-panel teal lighten-4">');
         response.write('<h2>Verduras:</h2>');
         response.write('<ul>');
         for (let i in verduras) {
            response.write('<li>' + verduras[i] + '</li>');
            response.write('<hr>');
         }
         response.write('</ul><br>');
         response.write('<a href="nuevaVerdura" class="waves-effect waves-light btn ">Agregar item</a>');
         response.write('</div>');

         response.write('<div class="card-panel orange lighten-4">');


         response.write('<h2>Lacteos:</h2>');
         response.write('<ul>');
         for (let i in lacteos) {
            response.write('<li>' + lacteos[i] + '</li>');
            response.write('<hr>');
         }
         response.write('</ul><br>');
         response.write('<a href="nuevoLacteo" class="waves-effect waves-light btn orange">Agregar item</a>');


         response.write('</div>');
         response.write('</body>');
         response.end();
      });
   } else if (request.url === '/nuevaVerdura' && request.method === 'POST') {


      console.log("POST");
      const datos = [];
      request.on('data', (dato) => {
         // console.log(dato);
         datos.push(dato);
      });
      return request.on('end', () => {

         console.log(datos);
         const datos_completos = Buffer.concat(datos).toString();
         console.log(datos_completos);
         const nuevo_dato = datos_completos.split('=')[1];
         console.log(nuevo_dato);
         verduras.push(nuevo_dato);
         escribe_archivo(nuevo_dato, 'lista_verduras.txt');


         console.log(verduras)

         response.setHeader('Content-Type', 'text/html');

         response.write('<!DOCTYPE html>');
         response.write('<head>');
         response.write('<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">');
         response.write('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">');

         response.write('<meta charset="UTF-8">');
         response.write('<meta http-equiv="X-UA-Compatible" content="IE=edge">');
         response.write('<meta name="viewport" content="width=device-width, initial-scale=1.0">');
         response.write('<title>Laboratorio 10</title>');
         response.write('</head>');

         response.write('<body>');
         response.write('<header>');
         response.write('<nav class="teal darken-1">');
         response.write('<div class="nav-wrapper">');
         response.write('<a href="#!" class="brand-logo center">Laboratorio 10 </a>');
         response.write('<ul class="left hide-on-med-and-down">');
         response.write('</ul>');
         response.write('</div>');
         response.write('</nav>');
         response.write('</div>');
         response.write('</header>');
         response.write('<div class="container">');
         response.write('<div class="section">');

         response.write('<h3 class="green-text">Laboratorio 10: Rutas y formas</h3>');
         response.write('<h4 class="black-text">¡Hola!<br>Bienvenido a tu lista de compras:</h4>');
         response.write('</div>');


         response.write('<div class="card-panel red lighten-2">');
         response.write('<h2>Frutas:</h2>');
         response.write('<ul>');

         for (let i in frutas) {
            response.write('<li>' + frutas[i] + '</li>');
            response.write('<hr>');
         }

         response.write('</ul><br>');
         response.write('<a href="nuevaFruta" class="waves-effect waves-light btn red darken-3">Agregar item</a>');

         response.write('</div>');

         response.write('<div class="card-panel teal lighten-4">');
         response.write('<h2>Verduras:</h2>');
         response.write('<ul>');
         for (let i in verduras) {
            response.write('<li>' + verduras[i] + '</li>');
            response.write('<hr>');
         }
         response.write('</ul><br>');
         response.write('<a href="nuevaVerdura" class="waves-effect waves-light btn ">Agregar item</a>');
         response.write('</div>');

         response.write('<div class="card-panel orange lighten-4">');


         response.write('<h2>Lacteos:</h2>');
         response.write('<ul>');
         for (let i in lacteos) {
            response.write('<li>' + lacteos[i] + '</li>');
            response.write('<hr>');
         }
         response.write('</ul><br>');
         response.write('<a href="nuevoLacteo" class="waves-effect waves-light btn orange">Agregar item</a>');


         response.write('</div>');
         response.write('</body>');
         response.end();
      });
   } else if (request.url === '/nuevoLacteo' && request.method === 'POST') {


      console.log("POST");
      const datos = [];
      request.on('data', (dato) => {
         // console.log(dato);
         datos.push(dato);
      });
      return request.on('end', () => {

         console.log(datos);
         const datos_completos = Buffer.concat(datos).toString();
         console.log(datos_completos);
         const nuevo_dato = datos_completos.split('=')[1];
         console.log(nuevo_dato);
         lacteos.push(nuevo_dato);
         escribe_archivo(nuevo_dato, 'lista_lacteos.txt');
         console.log(lacteos);

         response.setHeader('Content-Type', 'text/html');

         response.write('<!DOCTYPE html>');
         response.write('<head>');
         response.write('<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">');
         response.write('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">');

         response.write('<meta charset="UTF-8">');
         response.write('<meta http-equiv="X-UA-Compatible" content="IE=edge">');
         response.write('<meta name="viewport" content="width=device-width, initial-scale=1.0">');
         response.write('<title>Laboratorio 10</title>');
         response.write('</head>');

         response.write('<body>');
         response.write('<header>');
         response.write('<nav class="teal darken-1">');
         response.write('<div class="nav-wrapper">');
         response.write('<a href="#!" class="brand-logo center">Laboratorio 10 </a>');
         response.write('<ul class="left hide-on-med-and-down">');
         response.write('</ul>');
         response.write('</div>');
         response.write('</nav>');
         response.write('</div>');
         response.write('</header>');
         response.write('<div class="container">');
         response.write('<div class="section">');

         response.write('<h3 class="green-text">Laboratorio 10: Rutas y formas</h3>');
         response.write('<h4 class="black-text">¡Hola!<br>Bienvenido a tu lista de compras:</h4>');
         response.write('</div>');


         response.write('<div class="card-panel red lighten-2">');
         response.write('<h2>Frutas:</h2>');
         response.write('<ul>');

         for (let i in frutas) {
            response.write('<li>' + frutas[i] + '</li>');
            response.write('<hr>');
         }

         response.write('</ul><br>');
         response.write('<a href="nuevaFruta" class="waves-effect waves-light btn red darken-3">Agregar item</a>');

         response.write('</div>');

         response.write('<div class="card-panel teal lighten-4">');
         response.write('<h2>Verduras:</h2>');
         response.write('<ul>');
         for (let i in verduras) {
            response.write('<li>' + verduras[i] + '</li>');
            response.write('<hr>');
         }
         response.write('</ul><br>');
         response.write('<a href="nuevaVerdura" class="waves-effect waves-light btn ">Agregar item</a>');
         response.write('</div>');

         response.write('<div class="card-panel orange lighten-4">');


         response.write('<h2>Lacteos:</h2>');
         response.write('<ul>');
         for (let i in lacteos) {
            response.write('<li>' + lacteos[i] + '</li>');
            response.write('<hr>');
         }
         response.write('</ul><br>');
         response.write('<a href="nuevoLacteo" class="waves-effect waves-light btn orange">Agregar item</a>');


         response.write('</div>');
         response.write('</body>');
         response.end();
      });
   } else {
      response.statusCode = 404;
      response.setHeader('Content-Type', 'text/html');
      response.write('<!DOCTYPE html>');
      response.write('<html lang="es-mx">');

      response.write('<head>');
      response.write('<!--Import Google Icon Font-->');
      response.write('<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">');
      response.write('<!-- Compiled and minified CSS -->');
      response.write('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">');

      response.write('<meta charset="UTF-8">');
      response.write('<meta http-equiv="X-UA-Compatible" content="IE=edge">');
      response.write('<meta name="viewport" content="width=device-width, initial-scale=1.0">');
      response.write('<title>Document</title>');
      response.write('</head>');

      response.write('<body>');

      response.write('<header>');
      response.write('<nav class="teal darken-1">');
      response.write('<div class="nav-wrapper">');
      response.write('<a href="#!" class="brand-logo center"></a>');
      response.write('<ul class="left hide-on-med-and-down">');
      response.write('</ul>');
      response.write('</div>');
      response.write('</nav>');

      response.write('</header>');


      response.write('<div class="card-panel">');
      response.write('<div class="card-panel red lighten-5">');
      response.write('<h2>404:</h2>');
      response.write('<h3 class="Red-text">Elemento no encontrado :c <br>Lamentamos las molestias </h3>');


      response.write('</div>');

      response.write('</div>');

      response.write('</body>');



   }
});


server.listen(3000);