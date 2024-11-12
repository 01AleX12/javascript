'use strict'

/*const producto = 'monitor';
producto = 'tablet';
console.log(producto);
*/

const producto ={
    nombre: "monitor",
    precio: 30,
    disponible: true
}


console.log(producto);
producto.disponible = false;
console.log(producto);

//Si no congelamos el objeto, aunque sea constante, se pueden modificar sus atributos