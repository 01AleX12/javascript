'use strict';

/*Escribe un programa que lee 2 numeros y muestra el mayor*/

//pedimos los numeros y los almacenamos en las variables num1 y num2
let num1 = prompt('Dime el primer numero');
let num2 = prompt('Dime el segundo numero');

//Cambiamos los numeros de string a entero
num1 = parseInt(num1);
num2 = parseInt(num2);

//si el primer numero es mayor que el segundo lo ponemos y si es al reves tambien, y si no se da ninguna de esas situaciones, los numeros son iguales
if (num1 > num2) {
    alert('El primer numero que es ' + num1 + ' es mayor que el segundo numero que es ' + num2)
} else {
    alert('El segundo numero que es ' + num2 + ' es mayor que el primer numero que es ' + num1)
}