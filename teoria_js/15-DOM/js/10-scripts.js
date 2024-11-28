'use strict'


const enlace = document.createElement('A');

enlace.textContent = 'Nuevo Enlace';


enlace.href = '/nuevo-enlace';

enlace.classList.add('enlace');

enlace.setAttribute('type', 'nuevo-enlace');

const navegacion = document.querySelector('.navegacion');

navegacion.appendChild(enlace);

console.log(enlace);

const parrafo1 = document.createElement('p');
parrafo1.textContent = 'concierto';
parrafo1.classList.add('categoria', 'concierto');

const parrafo2 = document.createElement('p');
parrafo1.textContent = 'concierto de Rock';
parrafo1.classList.add('titulo');

const parrafo3 = document.createElement('p');
parrafo1.textContent = '$800 por persona';
parrafo1.classList.add(''); // contunar




const imagen =document.createElement('img');
imagen.src = 'img/hacer2.jpg';

const