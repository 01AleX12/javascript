'use strict';

window.addEventListener('scroll', () => {
    console.log('scrolling...')

    const pxScroll = window.scrollY;
    console.log(pxScroll);

    const premium = document.querySelector('.premium');

    const ubicacion = premium.getBoundingClientRect();
    console.log(ubicacion);

    if(ubicacion.top < 100) {
        console.log('Ya está visible');
    } else {
        console.log('Aún no está visible');
    }
});