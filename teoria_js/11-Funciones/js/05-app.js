'use strict';

function saludar(nombre, apellido) { // nombre y apellidos son parámetros, son valores que se le pueden pasar
    // a la función... Los valores digamos no son reales, pues son variables
    console.log(`Hola ${nombre} ${apellido} `); 
}

saludar('Juan', 'De la torre'); //Pablo y de la torre son argumentos, son los valores reales...

saludar();