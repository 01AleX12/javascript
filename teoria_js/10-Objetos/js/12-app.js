'use strict'

const producto = {

    nombre: "moniotor de 20 pulgadas",
    precio: 20,
    disponible: true,
    mostrarInfo: function(){


        // sin comillas se usa una tilde inversa 
        return `El producto: ${this.nombre} tiene un precio de ${this.precio}`;
    }

}

console.log(producto.mostrarInfo());