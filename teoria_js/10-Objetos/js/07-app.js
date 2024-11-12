'use strict'

const producto = {

    nombre: "moniotor de 20 pulgadas",
    precio: 20,
    disponible: true

}


console.log(producto);

producto.disponible = false;

Object.freeze(producto);

producto.imagen = "imagen.jpg"

delete producto.nombre;

console.log(Object.isFrozen(producto));



console.log(producto);