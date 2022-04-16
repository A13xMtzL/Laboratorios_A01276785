const {
   request
} = require('express');
const express = require('express');

const router = express.Router();


const frutas = ["Guayabas", "Peras", "Sandia", "Manzanas"];
const verduras = ["Lechuga", "Espinacas", "Cebolla", "Berenjena"];
const lacteos = ["Leche", "Yogurt", "Queso", "Crema"];




// ----------------------------------------------------------------
router.get('/nuevaFruta', (request, response, next) => {
   console.log('GET /listaCompras/NuevaFruta');
   let respuesta = '<!DOCTYPE html><html lang="es-mx"><head><link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Laboratorio 11</title></head><body><header><nav class="teal darken-1"><div class="nav-wrapper"><a href="#!" class="brand-logo center"></a><ul class="left hide-on-med-and-down"></ul></div></nav></header><div class="container"><div class="card-panel"><h2>Agregando items a la lista: Fruta</h2><div class="row"><form action="nuevaFruta"  method="POST" , class="col s12"><div class="row"><div class="input-field col s12"><input type="text" id="articulo" name="articulo" placeholder="Manzana"></div></div><button class="btn waves-effect waves-light red darken-3" type="submit" value="Enviar">Submit<i class="material-icons right">send</i></button><br><br><div class="col s10 offset-s1 center-align"><a href="/" class="waves-effect waves-light btn"><i class="material-icons right">home</i>Regresar</a></div></form></div></div></div></body>';
   response.send(respuesta);
   response.end();

});


router.post('/nuevaFruta', (request, response, next) => {
   console.log('POST /listaCompras/NuevaFruta');
   console.log(request.body);
   frutas.push(request.body.articulo);
   response.redirect('/');
   response.end();
});

// ----------------------------------------------------------------

router.get('/nuevaVerdura', (request, response, next) => {
   console.log('GET /listaCompras/NuevaVerdura');
   let respuesta = '<!DOCTYPE html><head><link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Laboratorio 11</title></head><body><header><nav class="teal darken-1"><div class="nav-wrapper"><a href="#!" class="brand-logo center"></a><ul class="left hide-on-med-and-down"></ul></div></nav></header><div class="container"><div class="card-panel"><h2 class="Red-text">Agregando items a la lista: "Verdura"</h2><div class="row"><form action="/nuevaVerdura" , method="POST" , class="col s12"><div class="row"><div class="input-field col s12"><input type="text" id="articulo" name="articulo" placeholder="Lechuga"></div></div><button class="btn waves-effect waves-light" type="submit" value="Enviar">Submit<i class="material-icons right">send</i></button><br><br><div class="col s10 offset-s1 center-align"><a href="/" class="waves-effect waves-light btn"><i class="material-icons right">home</i>Regresar</a></div></form></div></div></div></body>';
   response.send(respuesta);
   response.end();
});


router.post('/nuevaVerdura', (request, response, next) => {
   console.log('POSTTINH NuevaVerdura');
   console.log(request.body);
   verduras.push(request.body.articulo);
   response.redirect('/');
   response.end();

});
// ----------------------------------------------------------------

router.get('/nuevoLacteo', (request, response, next) => {
   console.log('GET /listaCompras/nuevoLacteo');
   let respuesta = '<!DOCTYPE html><html lang="es-mx"><head><link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Laboratorio 11</title></head><body><header><nav class="teal darken-1"><div class="nav-wrapper"><a href="#!" class="brand-logo center"></a><ul class="left hide-on-med-and-down"></ul></div></nav></header><div class="container"><div class="card-panel"><h2>Agregando items a la lista: Lacteos</h2><div class="row"><form action="nuevoLacteo" , method="POST" , class="col s12"><div class="row"><div class="input-field col s12"><input type="text" id="articulo" name="articulo" placeholder="Leche"></div></div><button class="btn orange waves-effect waves-light" type="submit" value="Enviar">Submit<i class="material-icons right">send</i></button><br><br><div class="col s10 offset-s1 center-align"><a href="/" class="waves-effect waves-light btn"><i class="material-icons right">home</i>Regresar</a></div></form></div></div></div></body>';
   response.send(respuesta);
   response.end();

});

router.post('/nuevoLacteo', (request, response, next) => {
   console.log('POST /listaCompras/nuevoLacteo');
   console.log(request.body);
   lacteos.push(request.body.articulo);
   response.redirect('/');
   response.end();

});

// ----------------------------------------------------------------

router.use('/', (request, response, next) => {
   console.log('Ruta/listaCompras');
   let respuesta = '<!DOCTYPE html><head><link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Laboratorio 11</title></head><body><header><nav class="teal darken-1"><div class="nav-wrapper"><a href="#!" class="brand-logo center">Laboratorio 11 </a><ul class="left hide-on-med-and-down"></ul></div></nav></div></header><div class="container"><div class="section"><h3 class="green-text"></h3><h4 class="black-text">¡Hola!<br>Bienvenido a tu lista de compras:</h4></div><div class="card-panel red lighten-2"><h2>Frutas:</h2><ul>';
   for (let i in frutas) {
      respuesta += '<li>' + frutas[i] + '</li>';
   }
   respuesta += '</ul><br><a href="nuevaFruta" class="waves-effect waves-light btn red darken-3">Agregar item</a></div><div class="card-panel teal lighten-4"><h2>Verduras:</h2><ul></ul>';
   for (let i in verduras) {
      respuesta += '<li>' + verduras[i] + '</li>';
   }
   respuesta += '</ul><br><a href="nuevaVerdura" class="waves-effect waves-light btn ">Agregar item</a></div><div class="card-panel orange lighten-4"><h2>Lacteos:</h2><ul>';
   for (let i in lacteos) {
      respuesta += '<li>' + lacteos[i] + '</li>';
   }
   respuesta += '</ul><br><a href="nuevoLacteo" class="waves-effect waves-light btn orange">Agregar item</a></div></body>';
   response.send(respuesta);
});

router.use((request, response, next) => {
   console.log('Error 404');
   response.statusCode = 404;
   response.send('<!DOCTYPE html><html lang="es-mx"><head><link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Document</title></head><body><header><nav class="teal darken-1"><div class="nav-wrapper"><a href="#!" class="brand-logo center"></a><ul class="left hide-on-med-and-down"></ul></div></nav></header><div class="container"><div class="card-panel"><div class="card-panel red lighten-5"><h2>404:</h2><h3 class="Red-text">Elemento no encontrado :c <br>Lamentamos las molestias </h3></div></div></div><script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script></body></html>'); //Manda la respuesta
   response.end();

});

module.exports = router;