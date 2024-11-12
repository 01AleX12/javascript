'use strict';

const producto = {
    nombre: 'Monitor de 20 pulgadas',
    precio: true,
    disponible: true, //se separan los atributos con comas
    informacion: {
        dia: "28",
        mes: "10",
        año: "2024",
    }
}

alert(producto.informacion.dia + " | " + producto.informacion.mes + " | " + producto.informacion.año );
