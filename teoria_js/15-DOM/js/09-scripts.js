'use strict'

const primerEnlace = document.querySelector('a');
primerEnlace.remove();



const navegacion = document.querySelector('.navegacion')


console.log(navegacion.children);

navegacion.removeChild(navegacion.children[2]);


const borrar = navegacion.children[2]
navegacion.remove(borrar);

