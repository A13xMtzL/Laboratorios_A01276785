function tabla_cuadrados_cubos() {

   const numero = prompt("Por favor, digite hasta que numero quiere hacer su tabla: ");
   let resultado = "<table border='1'>";


   resultado += "<tr>";
   resultado += "<td>" + "Num" + "</td>" + "<td>" + "Cuadrado" + "</td>" + "<td>" + "Cubo" + "</td";
   resultado += "</tr>";

   for (let i = 1; i <= numero; i++) {
      resultado += "<tr>";
      resultado += "<td>" + i + "</td>" + "<td>" + i * i + "</td>" + "<td>" + i * i * i + "</td";
      resultado += "</tr>";
   }
   resultado += "</table>";


   document.write(resultado);

}
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function suma_numeros() {

   const num1 = Math.floor(Math.random() * 10) + 1;
   const num2 = Math.floor(Math.random() * 10) + 1;

   const suma_real = num1 + num2;

   var pregunta = confirm('Ejercicio 2:\nSe le presentaran dos numeros y debera de digitar la suma de estos');
   var tiempoUno = Date.now();

   const resultado = prompt("Digite el resultado de la suma de los siguientes numeros:\n\n" + num1 + "+" + num2);
   var tiempoDos = Date.now();


   const suma_usuario = resultado;


   const tiempo_respuesta = (tiempoDos - tiempoUno) / 1000;

   if (suma_usuario == suma_real) {
      alert("El resultado es CORRECTO\nUsted tardo: " + tiempo_respuesta + " segundos en contestar");

   } else {
      alert("El resultado es INCORRECTO\n\nEl resultado correcto es: " + suma_real +
         "\nUsted tardo: " + tiempo_respuesta + " segundos en contestar");

   }
}

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function Contador(array) {

   var cont_positivos = 0;
   var cont_negativos = 0;
   var cont_ceros = 0;

   for (let i = 0; i <= array.length; i++) {
      if (array[i] > 0) {
         cont_positivos += 1;
      } else if (array[i] == 0) {
         cont_ceros += 1;
      } else if (array[i] < 0) {
         cont_negativos += 1;
      }
   }



   alert("En este arreglo: [" + array + "]" + " hay: \n\n" +
      cont_ceros + " ceros " +
      cont_negativos + " numeros negativos " +
      cont_positivos + " numeros positivos ");

}



// Se llama a esta funci??n para poder pasar como par??metro nuestro arreglo a la funcion Contador 
function Llamada_Contador() {

   var arreglo = [66, 15, 0, 10, 0, -50, 45, 65, -2, 76, -7, -67, 0, 23]; //  El arreglo se crea en esta funci??n 

   Contador(arreglo);
}
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function Inverso() {
   let numero_normal = [];
   numero_normal = prompt("Digite un numero que sea mayor a un digito, se obtendran sus digitos en orden inverso: ");
   let numero_inverso = [];

   for (let i in numero_normal) {

      numero_inverso.unshift(numero_normal[i]);
   }
   alert("El numero ingresado fue: " + numero_normal +
      "\n\nEl numero en orden inverso es: " + numero_inverso.join(""));
}

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function clases() {


   class CCirculo {

      constructor(r) {
         this.radio = r;
      }

      calculoArea() {

         let calculo_area = (Math.PI * (Math.pow(this.radio, 2))).toFixed(2);

         alert("El radio del circulo es: " + this.radio + "u" + "\nEl ??rea del circulo es: " + calculo_area + "u^2");
      }

   }


}



class CAuto {

}