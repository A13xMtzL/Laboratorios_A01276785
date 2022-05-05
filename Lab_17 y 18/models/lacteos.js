const lacteos_lista = ["Leche", "Yogurt", "Queso", "Crema"];


module.exports = class Lacteo {

   // Constructor de la clase
   constructor(nuevo_articulo) {
      this.articulo = nuevo_articulo;
   }

   save() {
      lacteos_lista.push(this.articulo);
   }

   static fecthAll() {
      return lacteos_lista;
   }


};