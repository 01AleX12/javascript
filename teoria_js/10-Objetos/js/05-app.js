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

//destructuring con objetos anidados

//el primer informacion seria tipo objeto y el segundo informacion es como acceder a las propiedades de informacion, no le objeto completo, sino las propiedades
const {nombre, precio, informacion, informacion: {dia, mes, año} } = producto;