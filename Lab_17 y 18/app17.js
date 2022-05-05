const express = require('express');
const bodyParser = require('body-parser');
const ruta_compras = require('./routes/Compras.routes');
const ruta_user = require('./routes/user.routes');

const cookieParser = require('cookie-parser'); // Usamos cookies
const session = require('express-session');

// enviar archivos html por express
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

// agregar css y js al servidor
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({
   extended: false
}));
app.use(cookieParser());

app.use(session({
   secret: 'Al3xML270590gbmjsmlM001939@s13519407040590Ml13xal',  //mi string secreto que debe ser un string aleatorio 
   resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
   saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));


app.use('/inicio', ruta_compras);
app.use('/users', ruta_user);

app.use((request, response, next) => {
   response.render('/users');
   next();
});


app.use((request, response, next) => {
   response.statusCode = 404;
   response.render('404');
   response.end();
});

app.listen(3000);