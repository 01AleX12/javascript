'use strict'; // Activa el modo estricto para ayudar a detectar errores y malas prácticas.

// Definimos un array llamado 'carrito' que contiene varios objetos.
// Cada objeto representa un producto con un nombre y un precio.
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

// Calcular el total usando 'forEach':
let total = 0; // Iniciamos una variable 'total' en 0 para almacenar la suma de precios.

// Usamos 'forEach' para recorrer cada producto del array 'carrito'.
carrito.forEach(producto => total += producto.precio); 
// Para cada 'producto', sumamos su precio a 'total'.

console.log(total); // Mostramos el total calculado con 'forEach'.

// Calcular el total usando 'reduce':
// 'reduce' es un método que nos permite acumular valores en una sola línea.
let resultado = carrito.reduce((total, producto) => total + producto.precio, 0); 
// 'reduce' toma una función con dos parámetros:
//  - 'total': el acumulador donde vamos sumando precios.
//  - 'producto': el producto actual que estamos procesando.
// La expresión `total + producto.precio` suma el precio actual al acumulador 'total'.
// El '0' al final es el valor inicial del acumulador.

console.log(resultado); // Imprime el total calculado con 'reduce'.
