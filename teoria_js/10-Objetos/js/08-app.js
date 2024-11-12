'use strict'

const producto = {

    nombre: "moniotor de 20 pulgadas",
    precio: 20,
    disponible: true

}

// con el seal se sella el objeto no se puede agregar ni eliminar , pero si modificar

console.log(producto);

Object.seal(producto);

producto.nombre = 'tablet';

delete producto.precio;

producto.imagen = "imagen.jpg";


// verificar si el objeto esta sellado
console.log(Object.isSealed(producto));
console.log(producto);





