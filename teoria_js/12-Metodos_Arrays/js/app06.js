'use strict';  // Establece el modo estricto de JavaScript, que ayuda a evitar errores comunes y malas prácticas.

const carrito = [  // Se define un arreglo llamado "carrito" que contiene varios objetos. Cada objeto representa un producto con su nombre y precio.
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Television 50 Pulgadas', precio: 700},
    { nombre: 'Tablet', precio: 300},
    { nombre: 'Audifonos', precio: 200},    
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
    { nombre: 'Bocinas', precio: 300},
    { nombre: 'Laptop', precio: 800},
];

let cumple = true;  // Se crea una variable "cumple" que inicialmente es 'true'. Su propósito es verificar si todos los productos cumplen con la condición.

carrito.forEach( producto => {  // Utilizamos el método "forEach" para recorrer todos los productos del carrito.
    if(producto.precio < 1000) {  // Si encontramos que el precio de un producto es menor a 1000...
        cumple = false;  // Cambiamos "cumple" a 'false' porque encontramos un producto que no cumple con la condición.
        return;  // Detenemos la ejecución de este ciclo para que no siga revisando los demás productos.
    }
})
console.log(cumple);  // Imprime 'false' porque no todos los productos cumplen con la condición de tener un precio mayor o igual a 1000.

const resultado = carrito.every(producto => producto.precio < 1000);  // Usamos "every" para verificar si todos los productos tienen un precio menor a 1000.
console.log(resultado);  // Imprime 'false' porque, en este caso, no todos los productos tienen un precio menor a 1000 (la Televisión de 700 no lo cumple).
