'use strict';  // Modo estricto de JavaScript, que ayuda a evitar errores comunes.

// Definimos un array llamado 'meses' con una lista de nombres de meses.
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

// Definimos un array llamado 'carrito' que contiene objetos, cada uno representa un producto con su nombre y precio.
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

// Utilizamos 'forEach' para recorrer cada elemento del array 'meses'.
meses.forEach(mes => {
    // Si el elemento actual (mes) es igual a 'Enero', se imprime un mensaje en la consola.
    if (mes === 'Enero') {
        console.log('Enero si existe...');
    }
});

// Usamos el método 'includes' para verificar si 'Enero' está en el array 'meses'.
// Si está presente, 'resultado' será true; si no, será false.
const resultado = meses.includes('Enero');
console.log(resultado);  // Imprime 'true' o 'false' según el resultado.

// Usamos el método 'some' en 'carrito' para comprobar si hay algún producto cuyo nombre sea 'Celular'.
// La variable 'existe' será true si encuentra un producto con nombre 'Celular', de lo contrario será false.
const existe = carrito.some(producto => producto.nombre === 'Celular');
console.log(existe);  // Imprime 'true' o 'false' según el resultado.

// Otro ejemplo de 'some', pero ahora lo aplicamos al array 'meses'.
// Verifica si al menos uno de los elementos en 'meses' es 'Febrero'.
const existe2 = meses.some(mes => mes === 'Febrero');
console.log(existe2);  // Imprime 'true' o 'false' según si 'Febrero' está en el array.
