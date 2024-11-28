'use strict';

const busqueda = document.querySelector('.busqueda');




busqueda.addEventListener('blur', () => {
    console.log('Saliendo del input...');
});

busqueda.addEventListener('copy', () => {

});

busqueda.addEventListener('', () => {

});

busqueda.addEventListener('input', e => {
    console.log(e);
    console.log(e.type);
    console.log(e.target);

    console.log(e.target)
});

busqueda.addEventListener('input', leerInput);

function leerInput(e) {
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.target.value);
}