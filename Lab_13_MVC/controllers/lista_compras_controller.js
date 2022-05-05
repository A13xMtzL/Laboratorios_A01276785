const path = require('path');

const Fruta = require('../models/frutas');
const Verdura = require('../models/verduras');
const Lacteo = require('../models/lacteos');

exports.listar = (request, response, next) => {
   console.log('Ruta/listaCompras');
   response.render('inicio', {
      frutas: Fruta.fecthAll(),
      verduras: Verdura.fecthAll(),
      lacteos: Lacteo.fecthAll()
   });
};

// ----------------------------------------------------------------

exports.get_NuevaFruta = (request, response, next) => {
   console.log('Ruta/Fruta');
   response.render('nuevaFruta', {
      
      frutas: Fruta.fecthAll()

   });
};


exports.post_NuevaFruta = (request, response, next) => {
   console.log('POSTING -> Ruta/Fruta');
   console.log(request.body);
   const fruta = new Fruta(request.body.articulo);
   // console.log(response.body.articulo);

   fruta.save(); // save -> Lo guardamos usando el método save 
   response.redirect('/');
   response.end();

};


// ----------------------------------------------------------------


exports.get_NuevaVerdura = (request, response, next) => {
   console.log('Ruta/verduras');
   response.render('nuevaVerdura', {
      
      verduras: Verdura.fecthAll()

   });
};


exports.post_NuevaVerdura = (request, response, next) => {
   console.log('POSTING -> Ruta/Verdura');
   console.log(request.body);
   const verdura = new Verdura(request.body.articulo);

   verdura.save(); // save -> Lo guardamos usando el método save 
   response.redirect('/');
   response.end();

};
// ----------------------------------------------------------------

exports.get_NuevoLacteo = (request, response, next) => {
   console.log('Ruta/lacteos');
   response.render('nuevoLacteo', {
      
      lacteos: Lacteo.fecthAll()

   });
};

exports.post_NuevoLacteo = (request, response, next) => {
   console.log('POSTING -> Ruta/Lacteo');
   console.log(request.body);
   const lacteo = new Lacteo(request.body.articulo);

   lacteo.save(); // save -> Lo guardamos usando el método save 
   response.redirect('/');
   response.end();

};

// ----------------------------------------------------------------
