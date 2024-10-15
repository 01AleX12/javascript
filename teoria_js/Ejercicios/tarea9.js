'use strict';

//Escribe un programa que lea una calificacion numerica entre 0 y 10 y la transforma en calificacion alfabetica, escribiendo el resultado

let calificacion = parseFloat(prompt('Dime una nota del 0 al 10'));

//hacemos un switch con todos los casos posibles y con sus resultados
if (calificacion == isNaN && 0 >= calificacion <=10 ) {
    switch (calificacion) {
        case (3 <= calificacion >= 0 ):
            alert('muy deficiente')
        break;
        case (3 >= calificacion <= 5 ):
            alert('insuficiente')
        break;
        case (5 >= calificacion <= 6 ):
            alert('bien')
        break;
        case (6 >= calificacion <= 9 ):
            alert('notable')
        break;
        case (9 >= calificacion <= 10 ):
            alert('sobresaliente')
        break;
    }
} else {
    alert('inserta un número valido')
}
