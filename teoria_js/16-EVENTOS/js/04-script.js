'use strict';

const formulario = document.querySelector('.formulario');

formulario.addEventListener('submit', e => {
    e.preventDefault();

    console.log('enviando...');

    console.log(e);

    console.log(e.target.method);
    console.log(e.target.action);
});