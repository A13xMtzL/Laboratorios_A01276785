const express = require('express');
const path = require('path');
const router = express.Router();
const filesystem = require('fs');


const frutas_lista = ["Guayabas", "Peras", "Sandia", "Manzanas"];
const verduras_lista = ["Lechuga", "Espinacas", "Cebolla", "Berenjena"];
const lacteos_lista = ["Leche", "Yogurt", "Queso", "Crema"];


router.get('/', (request, response, next) => {
   console.log('Ruta/listaCompras');
   response.render('inicio', {
      frutas: frutas_lista,
      verduras: verduras_lista,
      lacteos: lacteos_lista
   });

});
// ----------------------------------------------------------------

router.get('/nuevaFruta', (request, response, next) => {
   console.log('Ruta/Fruta');
   response.render('nuevaFruta',);
});


router.post('/nuevaFruta', (request, response, next) => {
   console.log('POSTING -> Ruta/Fruta');
   console.log(request.body);
   frutas_lista.push(request.body.articulo);
   response.redirect('/');
   response.end();

});

// ----------------------------------------------------------------

router.get('/nuevaVerdura', (request, response, next) => {
   console.log('Ruta/verduras');
   response.render('nuevaVerdura',);
});

router.post('/nuevaVerdura', (request, response, next) => {
   console.log('POSTING -> Ruta/Verdura');
   console.log(request.body);
   verduras_lista.push(request.body.articulo);
   response.redirect('/');
   response.end();

});
// ----------------------------------------------------------------

router.get('/nuevoLacteo', (request, response, next) => {
   console.log('Ruta/verduras');
   response.render('nuevoLacteo',);
});

router.post('/nuevoLacteo', (request, response, next) => {
   console.log('POSTING -> Ruta/Lacteos');
   console.log(request.body);
   lacteos_lista.push(request.body.articulo);
   response.redirect('/');
   response.end();
});



module.exports = router;