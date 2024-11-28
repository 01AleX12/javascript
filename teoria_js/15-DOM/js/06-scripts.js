'use strict'
// Buscamamos este elemento dentrod del html, almacenamlo en encabezado (variable de tipo elemento )
const encabezado = document.querySelector('.contenido-hero h1');
// llamas un elemento te muestra el elemtno
console.log(encabezado);



console.log(encabezado.innerText);
console.log(encabezado.textContent);
console.log(encabezado.innerHTML);

// qui no estamos almacenando un elemento. lo que estamos almacenando es solo el contenido del texto, no el elemetno!
const textoEncabezado = document.querySelector('.contenido-hero h1').textContent;

// llamas al contenido del elemento 
console.log(textoEncabezado);


// modificar el contenido 
document.querySelector('contenido-hero h1').textContent = ' nuevo heading;'


// otra opcion
const  nuevoTexto = 'nuevo heading';
document.querySelector('contenido-hero h1').textContent = nuevoTexto;

const imagen = document.querySelector('card img');
// ruta de la imagen
console.log(imagen.src);
// imagen.src = 'img/hacer2.jpg';
