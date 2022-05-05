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
      username: request.session.username,
      frutas: Fruta.fecthAll()

   });
};


exports.post_NuevaFruta = (request, response, next) => {
   console.log('POSTING -> Ruta/Fruta');
   console.log(request.body);
   // console.log(response.body.articulo);
   const fruta = new Fruta(request.body.articulo);

   fruta.save(); // save -> Lo guardamos usando el método save 
   response.setHeader('Set-Cookie', 'ultima_fruta'+ fruta.articulo + '; HttpOnly'); // agregamos cookie color principal es de a const // con HttpOnly evitamos el acceso a nuestra cookie 
   response.redirect('/');
   response.end();

};


// ----------------------------------------------------------------


exports.get_NuevaVerdura = (request, response, next) => {
   console.log('Ruta/verduras');
   response.render('nuevaVerdura', {
      username: request.session.username,
      verduras: Verdura.fecthAll()

   });
};


exports.post_NuevaVerdura = (request, response, next) => {
   console.log('POSTING -> Ruta/Verdura');
   console.log(request.body);
   const verdura = new Verdura(request.body.articulo);

   verdura.save(); // save -> Lo guardamos usando el método save 
   response.setHeader('Set-Cookie', 'ultima_verdura'+ verdura.articulo + '; HttpOnly'); // agregamos cookie color principal es de a const // con HttpOnly evitamos el acceso a nuestra cookie 
   response.redirect('/');
   response.end();

};
// ----------------------------------------------------------------

exports.get_NuevoLacteo = (request, response, next) => {
   console.log('Ruta/lacteos');
   response.render('nuevoLacteo', {
      username: request.session.username,
      lacteos: Lacteo.fecthAll()

   });
};

exports.post_NuevoLacteo = (request, response, next) => {
   console.log('POSTING -> Ruta/Lacteo');
   console.log(request.body);
   const lacteo = new Lacteo(request.body.articulo);

   lacteo.save(); // save -> Lo guardamos usando el método save 
   response.setHeader('Set-Cookie', 'ultima_lacteo'+ lacteo.articulo + '; HttpOnly'); // agregamos cookie color principal es de a const // con HttpOnly evitamos el acceso a nuestra cookie 
   response.redirect('/');
   response.end();

};

// ----------------------------------------------------------------
