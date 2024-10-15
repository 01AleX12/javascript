'use strict';

//Escribe un programa que recibe como datos de entrada una hora expresada en horas, minutos y segundos que nos calcula y escribe la hora, minutos y segundos que serán, transcurrido un segundo.

let hora = parseInt(prompt('Dime una hora (0-23):'));
let minutos = parseInt(prompt('Dime los minutos (0-59):'));
let segundos = parseInt(prompt('Dime los segundos (0-59):'));


function incrementarSegundo(horas, minutos, segundos) {
    // Incrementamos los segundos
    segundos++;

    // Verificamos si los segundos llegan a 60
    if (segundos === 60) {
        segundos = 0;  // Reiniciamos a 0
        minutos++;     // Incrementamos los minutos
    }

    // Verificamos si los minutos llegan a 60
    if (minutos === 60) {
        minutos = 0;   // Reiniciamos a 0
        horas++;       // Incrementamos las horas
    }

    // Verificamos si las horas llegan a 24
    if (horas === 24) {
        horas = 0;     // Reiniciamos a 0
    }

    // Devolvemos la hora, minutos y segundos actualizados
    return { horas, minutos, segundos };
}

// Validamos los datos de entrada
if (
    isNaN(hora) || hora < 0 || hora > 23 ||
    isNaN(minutos) || minutos < 0 || minutos > 59 ||
    isNaN(segundos) || segundos < 0 || segundos > 59
) {
    console.log("Por favor, introduce una hora válida.");
} else {
    // Calculamos la nueva hora transcurrido un segundo
    let nuevaHora = incrementarSegundo(hora, minutos, segundos);
    alert(`La hora será: ${nuevaHora.horas} horas, ${nuevaHora.minutos} minutos, ${nuevaHora.segundos} segundos.`);
}