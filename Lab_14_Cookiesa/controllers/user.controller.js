const User = require('../models/user');
const Fruta = require('../models/frutas');
const Verdura = require('../models/verduras');
const Lacteo = require('../models/lacteos');

exports.get_login = (request, response, next) => {
   response.render('login', {
      username: request.session.username ? request.session.username : '',
      info: ''
   });
};

exports.tops = (request, response, next) => {
   response.render('inicio', {
      username: request.session.username ? request.session.username : '',
      info: '',
      frutas: Fruta.fecthAll(),
      verduras: Verdura.fecthAll(),
      lacteos: Lacteo.fecthAll()
   });
};

exports.login = (request, response, next) => {
   if (User.login(request.body.username, request.body.password)) {
      request.session.username = request.body.username;
      response.redirect('/users/tops');
   } else {
      response.redirect('/users/login');
   }

};

exports.logout = (request, response, next) => {
   request.session.destroy(() => {
      response.redirect('/users/login'); //Este código se ejecuta cuando la sesión se elimina.
   });
};

exports.root = (request, response, next) => {
   response.redirect('/users/login');
};