'use strict';  // Esto establece el modo estricto, lo cual ayuda a evitar errores y malas prácticas en JavaScript.

const carrito = [  // Aquí se define un arreglo llamado "carrito" que contiene objetos. Cada objeto representa un producto con su nombre y precio.
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Television 50 Pulgadas', precio: 700},
    { nombre: 'Tablet', precio: 300},
    { nombre: 'Audifonos', precio: 200},    
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
    { nombre: 'Bocinas', precio: 300},
    { nombre: 'Laptop', precio: 800},
];

let resultado = '';  // Se declara una variable "resultado" que guardará el producto que busquemos en el carrito.
carrito.forEach((producto, index) => {  // Aquí usamos el método "forEach" para recorrer todos los elementos del carrito.
    if (producto.nombre === 'Bocinas') {  // Comprobamos si el nombre del producto es igual a 'Bocinas'.
        resultado = carrito[index];  // Si lo encontramos, guardamos ese producto en la variable "resultado".
    }
});
console.log(resultado);  // Imprime en consola el producto que tiene el nombre 'Bocinas'.

// Ahora usamos otro método llamado "find". Este también busca un producto, pero solo devuelve el primer producto que cumpla con la condición.
const resultado2 = carrito.find( producto => producto.precio === 500);  
console.log(resultado2);  // Imprime el primer producto cuyo precio sea 500.


// Comentario adicional:
// "find" es como "filter", pero "find" solo devuelve el primer elemento que cumpla con la condición, 
// mientras que "filter" devuelve todos los elementos que la cumplan. Así que si hay varios productos con el mismo precio, 
// "find" solo devolvería el primero que encuentre.
