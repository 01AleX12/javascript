'use strict';  // Establece el modo estricto en JavaScript, lo cual ayuda a prevenir errores comunes y malas prácticas.

function Cliente(nombre, saldo) {  // Definimos una función constructora llamada "Cliente" que toma "nombre" y "saldo" como parámetros.
    this.nombre = nombre;  // Asigna el parámetro "nombre" al objeto creado.
    this.saldo = saldo;  // Asigna el parámetro "saldo" al objeto creado.
}

const juan = new Cliente('Cliente', 400);  // Creamos una nueva instancia del objeto "Cliente" con nombre 'Cliente' y saldo 400.

console.log();  // Este "console.log()" está vacío, no imprimirá nada. Podrías agregar algo como "console.log(juan);" para ver el objeto "juan".

function formatearCliente(Cliente) {  // Definimos una función llamada "formatearCliente" que toma un objeto "Cliente" como argumento.
    const {nombre, saldo} = Cliente;  
    return `El cliente ${nombre} tiene un saldo de ${saldo}`;  
}