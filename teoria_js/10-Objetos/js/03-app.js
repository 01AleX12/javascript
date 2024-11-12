'use strict';

const producto = {
    nombre: 'Monitor de 20 pulgadas',
    precio: true,
    disponible: true //se separan los atributos con comas, menos el ultimo si quieres
}

const nombre = producto.nombre;

//con destructuring se hace asi, se asocia una constante o variable a una propiedad del objeto, se tienen que llamar igual sino no funcionaria
const {nombre} = producto;

//es mas util ya que puedes declarar varias variables en la misma linea de codigo
const {nombre, precio} = producto;