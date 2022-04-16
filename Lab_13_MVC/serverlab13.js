const express = require('express');
const bodyParser = require('body-parser');
const ruta_compras = require('./routes/Compras.routes');
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



app.use('/', ruta_compras);

app.use((request, response, next) => {
   response.render('inicio');
   next();
});


app.use((request, response, next) => {
   response.statusCode = 404;
   response.render('404');
   response.end();
});

app.listen(3000);