'use strict';

const producto = 'Monitor 24 pulgadas';
const texto  = 'en Promocion' .repeat(3);
console.log(producto.repeat(3));
console.log(producto.repeat(2.5));

console.log(`${producto} ${texto} !!!`);
console.log(producto + texto + '!!!');

console.log(texto);

//Split

const actividad = 'Estoy aprendiendo JavaScript'
console.log(actividad.split(" "));

const hobbies = 'Leer, caminar, escuchar musica, escribir, aprender a programar';
console.log(hobbies.split(", "));