'use strict';

/*Escribe un programa que lee un numero y te dice si es positivo o negativo*/

//pedimos el numero y lo almacenamos en la variable num1
let num1 = prompt('Dime un numero');

//Cambio el numero de string a entero
num1 = parseInt(num1);

//si el numero es igual o mayor que cero el numero es positivo y si no es negativo
if (num1 >=0) {
    alert('El numero que me has dicho es positivo')
} else {
    alert('El numero que me has dicho es negativo')
}