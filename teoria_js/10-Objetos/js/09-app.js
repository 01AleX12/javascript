'use strict'

const producto = {

    nombre: "moniotor de 20 pulgadas",
    precio: 20,
    disponible: true

}

const medidas = {
    peso: '1 kg',
    medida: '1 metro'
}

const resultado = Object.assign(producto, medidas);

console.log(resultado);


