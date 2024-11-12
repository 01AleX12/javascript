'use strict';

//arrow functions

//las arrow functions es otra forma de declarar funciones y fueron agregadas en las ultimas funciones, la sintaxis es mas corta

const aprendiendo = function() {
    console.log('Aprendiendo javascript');
}

const aprendiendo = () => {
    console.log('Aprendiendo javascript');
}

//una linea no requiere llaves
const aprendiendo = () => console.log('Aprendiendo javascript');

//retornar un valor
const aprendiendo = () => 'Aprendiendo JavaScript';

console.log(aprendiendo);