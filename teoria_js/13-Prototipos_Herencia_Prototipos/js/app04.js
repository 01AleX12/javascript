'use strict';  // Establece el modo estricto en JavaScript, lo cual ayuda a prevenir errores comunes y malas prácticas.

function Cliente(nombre, saldo) {  // Definimos una función constructora llamada "Cliente" que toma "nombre" y "saldo" como parámetros.
    this.nombre = nombre;  // Asigna el valor del parámetro "nombre" a la propiedad "nombre" del objeto.
    this.saldo = saldo;  // Asigna el valor del parámetro "saldo" a la propiedad "saldo" del objeto.
}

Cliente.prototype.tipoCliente = function() {  // Agregamos un método al prototipo de "Cliente" llamado "tipoCliente", 
// que permite determinar el tipo de cliente basado en su saldo.
    let tipo;  // Declaramos una variable "tipo" para almacenar el tipo de cliente.

    if(this.saldo > 10000) {  // Si el saldo es mayor a 10000, el cliente es "Gold".
        tipo = 'Gold';
    } else if (this.saldo > 5000) {  // Si el saldo es mayor a 5000 pero menor o igual a 10000, el cliente es "Platinum".
        tipo = 'Platinum';
    } else {  // Si el saldo es 5000 o menor, el cliente es "Normal".
        tipo = 'Normal';
    }

    return tipo;
}
