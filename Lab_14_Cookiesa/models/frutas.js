const frutas_lista = ["Guayabas", "Peras", "Sandia", "Manzanas"];

module.exports = class Fruta {

   // Constructor de la clase
   constructor(nuevo_articulo) {
      this.articulo = nuevo_articulo;
   }

   save() {
      frutas_lista.push(this.articulo);
   }

   static fecthAll() {
      return frutas_lista;
   }


};