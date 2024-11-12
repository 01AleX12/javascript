'use strict';

function saludar(nombre = 'Desconocido', apellido = '') { // le ponemos el valor predefinido a cada parámetro, para que si, 
    // al llamar la función no se indica su valor, que salga este en su defecto
    console.log(`Hola ${nombre} ${apellido} `); 
}

saludar('Juan', 'De la torre'); //Pablo y de la torre son argumentos, son los valores reales...

saludar('Juan');

saludar();