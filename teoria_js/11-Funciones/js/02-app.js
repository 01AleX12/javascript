'use strict';

function sumar() {
    console.log(2 + 2);
}

sumar();

//Esta segunda forma de crear funciones no usarla, ya que puede dar problemas, mejor usar la primera (Esta forma de crear funciones es como crear una constante)
const sumar2 = function() {
    console.log(3 + 3);
}

sumar2();

//Aquí se hace una muestra del "hoisting" lo cuál es que en javascript hace dos pasadas al código, una primera en la que se crean las funciones y en la segunda se ejecuta el código