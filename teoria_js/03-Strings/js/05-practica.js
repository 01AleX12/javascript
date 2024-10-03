'use strict';

//replace

const producto = 'Monitor 20 pulgadas';
console.log(producto.replace("20", "24"));

console.log(producto.replace("Pulgadas", ""));

console.log(producto.slice(0,10));//cortar desde el 0 al 10

console.log(producto.slice(8));//cortar desde el 8 al fin

console.log(producto.slice(2,10));//cortar desde el 2 al 10

console.log(producto.slice(2,1));//si el numero de antes es mayor no va a cortar hacia atras

//substring
console.log(producto.substring(0,10));

console.log(producto.substring(2,1)); //si el numeor es mayor al segundo, va a cortar hacia atras (voltea los numeros)

//Si has visto algunos sitios web muestran su primera letra de tu nombre;

const numbre = "Juan";
console.log(nombre.substring(0,1));
console.log(nombre.carAt(0));

console.log(nombre.substring(0));
