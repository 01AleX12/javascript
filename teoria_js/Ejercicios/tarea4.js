'use strict';

/*Escribe un programa que pida dos numeros y los visualize en orden ascendente*/

//pedimos los numeros y los almacenamos en las variables num1 y num2
let num1 = prompt('Dime el primer numero');
let num2 = prompt('Dime el segundo numero');

//Cambiamos los numeros de string a entero
num1 = parseInt(num1);
num2 = parseInt(num2);

// Ordenar y mostrar los números en orden ascendente
if (num1 < num2) {
    alert(`Los números en orden ascendente son: ${num1}, ${num2}`);
} else if (num1 > num2) {
    alert(`Los números en orden ascendente son: ${num2}, ${num1}`);
} else {
    alert('Los dos números son iguales.');
}
