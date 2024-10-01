'use strict'; //usado para que no cambien el tipo de dato que son las variables

/*EJEMPLOS*/

    console.log('Hola mundo');

    const nombre = prompt('¿Cuál es tu nombre?');
    document.querySelector('.contenido').innerHTML = nombre + " está aprendiendo javascript";

    const hola = "Hola desde la consola"
    console.log(hola);

    console.error('algo salio mal');
    console.warn('algo salio mal');
    console.time('Hola');
    console.timeEnd('Hola');

    function hola() {
        console.log("okei");
        
    }

    //array
    console.log([1, 2, 3, 4]);
    
    console.table([1, 2, 3, 4]);

    console.clear;

    let obj = { nombre: "Fran", profesion: "Profesor" };
    console.log(obj);