'use strict';  // Activa el modo estricto en JavaScript, que ayuda a prevenir errores y malas prácticas.

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];  // Definimos un array llamado "meses" con los primeros 6 meses del año.
const meses2 = ['Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];  // Definimos otro array llamado "meses2" con los otros 6 meses del año.

const meses3 = meses.concat(meses2);  // Usamos el método "concat" para combinar los dos arrays "meses" y "meses2".
console.log(meses3);  // Imprime en consola el array combinado, que tendrá todos los meses del año.


// Existe otra forma de combinar los arrays utilizando el "rest operator" o "spread operator" (el operador de propagación).
const meses4 = [...meses, ...meses2];  // Usamos el spread operator "..." para "expandir" ambos arrays y combinarlos en uno solo.
console.log(meses4);  // Imprime el array combinado con el spread operator, que también tendrá todos los meses del año.