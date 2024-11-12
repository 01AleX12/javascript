'use strict';  // Establece el modo estricto de JavaScript para evitar errores y malas prácticas.

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];  // Definimos un array con los primeros seis meses del año.

const carrito = [  // Definimos un array con objetos, cada uno representando un producto con su nombre y precio.
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Television 50 Pulgadas', precio: 700},
    { nombre: 'Tablet', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
    { nombre: 'Bocinas', precio: 300},
    { nombre: 'Laptop', precio: 800},
];

const meses2 = [...meses, 'Julio'];  // Usamos el spread operator para crear un nuevo array que contiene todos los meses originales, más 'Julio' al final.
console.log(meses);  // Imprime el array original de meses sin modificaciones.
console.log(meses2);  // Imprime el nuevo array con los meses originales más 'Julio' al final.

const meses3 = ['Julio', ...meses];  // Usamos el spread operator para poner 'Julio' al principio del nuevo array, seguido de todos los meses originales.
console.log(meses3);  // Imprime el nuevo array con 'Julio' al inicio y los meses restantes.

const producto = { producto: 'Disco Duro', precio: 300 };  // Creamos un nuevo objeto para un producto adicional, 'Disco Duro', con su precio.

const carrito2 = [...carrito, producto];  // Usamos el spread operator para crear un nuevo array que contiene todos los productos del carrito original, más el nuevo producto al final.
console.log(carrito2);  // Imprime el nuevo carrito con el producto añadido al final.

const carrito3 = [producto, ...carrito];  // Usamos el spread operator para crear un nuevo array con el nuevo producto al principio, seguido de todos los productos originales del carrito.
console.log(carrito3);  // Imprime el nuevo carrito con el producto añadido al principio.
