'use strict';

/*Escribe un programa que tres numeros distintos y nos diga cual es el mayor*/

//pedimos los numeros y los almacenamos en las variables num1 y num2
let num1 = prompt('Dime el primer numero');
let num2 = prompt('Dime el segundo numero');
let num3 = prompt('Dime el tercer numero');

//Cambiamos los numeros de string a entero
num1 = parseInt(num1);
num2 = parseInt(num2);
num3 = parseInt(num3);

//si todos los numeros son distintos selecciona el mayor y si no te lo exije
if (num1 != num2 && num1 != num3 && num2 != num3) {
    alert('El número mayor es ' + Math.max(num1, num2, num3));
} else {
    alert('Todos los números deben ser distintos.');
}