// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Apertura de primer laboratorio por parte del servidor 
// const fs = require('fs');

// const http = require('http');


// const {createReadStream} = require('fs')
// const {createServer} = require('http')

// const HTML_CONTENT_TYPE = 'text/html' // Se le indica que se abrirá un archivo HTML

// const requestListener = (req, res) => {
//   res.writeHead(200, { 'Content-Type': HTML_CONTENT_TYPE })
//   createReadStream("Lab8.html").pipe(res)
// }

// const server = createServer(requestListener) //Se crea el servidor donde se mandará la petición para mostrar la página web

// server.listen(3000) //Configuramos el puerto 3000 para la petición y hacemos que el servidor escuche esa patición



// Una función que reciba un arreglo de números y devuelva su promedio.

function prom_array(array) {
  let contador=array.length;
  let suma_acumulada=0;

  for(let i =0; i<array.length;i++) {
    suma_acumulada+=array[i];
  }

  let promedio=suma_acumulada/contador;

  return promedio;

}


const arreglito=[1,2,3,4,5,6,7];

console.log("Del arreglo ["+arreglito+"]"+" el promedio es: "+ prom_array(arreglito));

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Una función que reciba un string y escriba el string en un archivo de texto. Apóyate del módulo fs.



function write_text(str) {
  fs.appendFileSync("texto.txt",str);
}


let frase = "Hola, esto es una prueba de escritura en un archivo de texto";

console.log("Escribiendo la cadena en un archivo de texto...")
write_text(frase);



// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Escoge algún problema que hayas implementado en otro lenguaje de programación, y dale una solución en js que se ejecute sobre node. 






