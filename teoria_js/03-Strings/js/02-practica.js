//Veamos algunos métodos existentes en los string o cadenas de Texto;

const producto = 'Monitor 20 Pulgadas ';
const precio = '30 USD';

console.log(producto.length); //Conocer la extensión de una cadena, length es de los muy pocos métodos

//IndexOf
console.log(producto.indexOf("Pulgadas")); //Nos dirá que posición tiene el texto en caso de encontrarlo
console.log(producto.indexOf('Tablet')); // -1 Significa que no lo puedo encontrar

//Includes
console.log(producto.includes('Monitor')); // Conocer si un texto existe
console.log(producto.includes('monitor')); // Conocer si un texto existe