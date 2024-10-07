'use strict';

/*Escribe un programa que pida dos numeros por pantalla, calcula y muestra el valor de su suma, resta, producto y division*/

// Pedimos los numeros y los almacenamos en las variables num1 y num2
let num1 = prompt('Dime el primer numero');
let num2 = prompt('Dime el segundo numero');

// Cambiamos los numeros de string a entero
num1 = parseInt(num1);
num2 = parseInt(num2);

// Creamos las variables para almacenar los resultados de las operaciones
let suma = num1 + num2;
let resta = num1 - num2;
let producto = num1 * num2;
let division = num2 !== 0 ? num1 / num2 : 'No se puede dividir entre 0'; // Comprobamos si num2 es 0 para la división

// Si alguno de los números insertados es 0, te avisará
if (num1 === 0 || num2 === 0) {
    alert('El numero no puede ser 0');
} else {
    // Imprimimos de dos maneras los resultados de las operaciones
    console.log('Suma: ' + suma);
    console.log('Resta: ' + resta);
    console.log('Producto: ' + producto);
    console.log('División: ' + division);

    alert('Suma: ' + suma);
    alert('Resta: ' + resta);
    alert('Producto: ' + producto);
    alert('División: ' + division);
}