const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
   extended: false
}));

// Rutas ultilizadas

const rutas_compras = require('./routes/listaCompras.routes');

app.use('/', rutas_compras);

app.use((request, response, next) => {
   console.log('Middleware!');
   next(); //Le permite a la petición avanzar hacia el siguiente middleware
});


app.use((request, response, next) => {
   console.log('Otro middleware!');
   response.send('¡Hola mundo!'); //Manda la respuesta
});

// Caso de pagina inexistente(Caso 404)

app.use((request, response, next) => {
   console.log("Error 404");
   response.statusCode = 404;
   response.send("<h1>Esta página de videojuegos no existe :(</h1>"); //Manda la respuesta
});

app.listen(4000);