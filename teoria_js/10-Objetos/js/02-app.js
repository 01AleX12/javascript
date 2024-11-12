'use strict';

const producto = {
    nombre: 'Monitor de 20 pulgadas',
    precio: true,
    disponible: true //se separan los atributos con comas
}

//mostrar por consola todo el objeto entero
console.log(producto);

//mostrar por consola los elementos del objeto
console.log(producto.nombre);
console.log(producto.precio);
console.log(producto.disponible);

//para añadir una nueva llamamos al objeto y hacemos:
producto.ancho = "10cm";
console.log(producto);

//para borrar un elemento
delete producto.ancho;

console.log(producto);
