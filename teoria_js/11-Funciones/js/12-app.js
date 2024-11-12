'use strict';

//for each y map con arrow functions

const carrito = [

    {nombre: 'Monitor 20 pulgadas', precio: 500},
    {nombre: 'Television 20 pulgadas', precio: 700},
    {nombre: 'Audifonos', precio: 300},
    {nombre: 'Celular', precio: 600}

]

const nuevoArray = carrito.map(producto => `Articulo: ${nombre}, precio: ${precio}`)

const nuevoArray2 = carrito.forEach(producto => console.log(`Articulo: ${nombre}, precio: ${precio}`));

console.log(nuevoArray);
console.log(nuevoArray2);

 