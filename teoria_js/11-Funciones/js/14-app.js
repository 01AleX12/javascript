'use strict';

let cliente = {
    nombre: 'Juan',
    saldo: 500
}

function cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

let cliente = new cliente('Juan', 400);

console.log(cliente);