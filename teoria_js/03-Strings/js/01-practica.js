//Los string o cadenas de texto representan un Texto que se puede asignar a una variable
//existen 3 formas de crearlos que son más populares.

//Las otras 2 formas crean lo que se conoce como una cadena primitiva
const producto = 'Monitor 20 Pulgadas';
const producto2 = string('Monitor 24 pulgadas');

//La siguiente forma es menos común
const producto3 =  new String('Monitor 30 pulgadas'); //Esto crea un objeto cadena

//Veamos algunas reglas para crear los strings:
const producto = 'Monitor 20 Pulgadas'; //Utilizando comillas sencillas
const producto2 = "Monitor 20 Pulgadas"; //Utilizando comillas dobles

// pero nunca las mezcles
const producto3 = "Monitor 20 Pulgadas';

//Ejemplo con Pulgadas
const producto4 = "Monitor 20\"";

console.log(producto);
console.log(producto2);
console.log(producto3);
console.log(producto4);


