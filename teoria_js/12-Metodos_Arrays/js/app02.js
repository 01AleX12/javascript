'use strict';  // Activa el modo estricto de JavaScript, que ayuda a detectar errores comunes y evita malas prácticas.

// Definimos un array llamado 'meses' con nombres de algunos meses.
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

// Recorremos el array 'meses' usando 'forEach' y pasamos dos parámetros: el elemento actual 'mes' y su índice 'index'.
meses.forEach((mes, index) => {
    // Comprobamos si el mes actual es 'Abril'.
    if (mes === 'Abril') {
        // Si encontramos 'Abril', imprimimos un mensaje indicando su posición en el array.
        console.log(`Encontrado en el indice ${index}`);
    }
});

// Utilizamos 'findIndex' para buscar el índice de un elemento específico (en este caso, 'Abril') en el array.
// Si encuentra 'Abril', 'findIndex' devolverá el índice correspondiente; si no lo encuentra, devolverá -1.
const indice = meses.findIndex(mes => mes === 'Abril'); 

// Ejemplo: si cambias 'Abril' a 'Diciembre' (que no está en el array), 'indice' sería -1.
// Esto nos indica que el elemento no se encontró.
console.log(indice);  // Imprime el índice donde se encuentra 'Abril' o -1 si no está en el array.
