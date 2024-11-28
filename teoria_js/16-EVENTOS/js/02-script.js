'use strict';

const nav = document.querySelector('.navegacion');

nav.addEventListener('mouseenter', () => {
    console.log('entrando a navegacion')

    nav.style.backgroundColor = 'white';
});

nav. addEventListener('mouseout', () => {
    console.log('saliendo de la navegacion');

    nav.style.backgroundColor = 'transparent';
});

nav.addEventListener('mousedown', () => {
    console.log('saliendo de la navegacion');

    nav.style.backgroundColor = 'transparent';
});

//otros eventos abarcan...

    //mousedown - //cuando presionamos
    //click

nav.addEventListener('dblclick', () => {
    console.log('Doble click en la navegación');
});