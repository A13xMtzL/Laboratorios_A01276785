const verduras_lista = ["Lechuga", "Espinacas", "Cebolla", "Berenjena"];

module.exports = class Verdura {

   // Constructor de la clase
   constructor(nuevo_articulo) {
      this.articulo = nuevo_articulo;
   }

   save() {
      verduras_lista.push(this.articulo);
   }

   static fecthAll() {
      return verduras_lista;
   }


};