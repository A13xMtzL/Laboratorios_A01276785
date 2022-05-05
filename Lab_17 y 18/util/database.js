const mysql = require('mysql2');

const pool = mysql.createPool({   // Haciendo el pool podemos hacer una conexion con la base de datos
   host: 'localhost',
   user: 'root',
   database: 'lista_de_compras',
   password: ''
});

module.exports = pool.promise();