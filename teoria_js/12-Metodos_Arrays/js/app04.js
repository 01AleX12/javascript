'use strict'; // Activa el modo estricto para detectar errores comunes y mejorar la seguridad del código.

// Definimos un array llamado 'carrito' que contiene objetos.
// Cada objeto representa un producto con un 'nombre' y un 'precio'.
const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500 },
    { nombre: 'Television 50 Pulgadas', precio: 700 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Audifonos', precio: 200 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Celular', precio: 500 },
    { nombre: 'Bocinas', precio: 300 },
    { nombre: 'Laptop', precio: 800 },
];

// Usamos el método 'filter' para crear un nuevo array que solo incluya los productos con un precio mayor a 400.
let resultado = carrito.filter(producto => producto.precio > 400); 
// 'filter' recorre el array y devuelve solo los productos que cumplen la condición `producto.precio > 400`.

// Si queremos limitar aún más la búsqueda, podemos añadir una segunda condición.
// En este caso, añadir `&& producto.precio < 600` haría que 'resultado' contenga solo productos cuyo precio esté entre 400 y 600.

// Filtramos para obtener solo el producto cuyo nombre sea 'Celular'.
let resultado2 = carrito.filter(producto => producto.nombre === 'Celular'); 
// 'filter' recorre el array y devuelve los productos donde el nombre es exactamente 'Celular'.
// Como el nombre debe coincidir exactamente, esto debería devolver un solo elemento en este caso.

// Filtramos para obtener todos los productos excepto el que tiene el nombre 'Laptop'.
let resultado3 = carrito.filter(producto => producto.nombre !== 'Laptop'); 
// 'filter' recorre el array y devuelve todos los productos cuyo nombre NO sea 'Laptop'.

// Imprimimos los resultados en la consola para ver los productos filtrados.
console.log(resultado);  // Muestra los productos con precio mayor a 400.
console.log(resultado2); // Muestra el producto 'Celular'.
console.log(resultado3); // Muestra todos los productos excepto 'Laptop'.
