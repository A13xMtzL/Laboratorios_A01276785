// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Apertura de primer laboratorio por parte del servidor 
const fs = require('fs');

const http = require('http');


const {createReadStream} = require('fs')
const {createServer} = require('http')

const HTML_CONTENT_TYPE = 'text/html' // Se le indica que se abrirá un archivo HTML

const requestListener = (req, res) => {
  res.writeHead(200, { 'Content-Type': HTML_CONTENT_TYPE })
  createReadStream("Lab8.html").pipe(res)
}

const server = createServer(requestListener) //Se crea el servidor donde se mandará la petición para mostrar la página web

server.listen(3000) //Configuramos el puerto 3000 para la petición y hacemos que el servidor escuche esa patición



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
  fs.appendFileSync("texto.txt",(str+'\n'));
}


let frase = "Hola, esto es una prueba de escritura en un archivo de texto";

console.log("Escribiendo la cadena en un archivo de texto...")
write_text(frase);



// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Escoge algún problema que hayas implementado en otro lenguaje de programación, y dale una solución en js que se ejecute sobre node. 

// Dada una cantidad expresada en pesos, determine a cuántas monedas de 10, 5 y 1 equivale dicha cantidad.
// Considere los datos enteros.

// Recuerde que es una equivalencia, por ejemplo $117 representa un resultado de 17 monedas de $10,
// 1 moneda de $5 y 2 monedas de $1 peso.


function cambio(cant) {
  let moneda_diez = Math.trunc(cant / 10);
  let moneda_cinco = Math.trunc((cant - moneda_diez * 10) / 5);
  let moneda_peso = cant - (moneda_diez * 10 + moneda_cinco * 5);

  console.log("Tu cambio en monedas son: " + moneda_diez + " monedas de 10 pesos, " + moneda_cinco + " monedas de cinco pesos y " + moneda_peso + " monedas de peso")
}

let cantidad_total=538;
cambio(cantidad_total);



