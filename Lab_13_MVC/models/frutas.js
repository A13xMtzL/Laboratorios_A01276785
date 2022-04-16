const frutas_lista = ["Guayabas", "Peras", "Sandia", "Manzanas"];

module.exports = class Fruta {

   // Constructor de la clase
   constructor(nuevo_articulo) {
      this.articulo = nuevo_articulo;
   }

   save() {
      frutas_lista.push(this);
   }

   static fecthall() {
      return frutas_lista;
   }


};