'use strict';

iniciarApp();

function iniciarApp() {
    console.log('iniciando App...');
    segundaFuncion();
}

function segundaFuncion() {
    console.log('Desde la segunda función...');
    usuarioAutenticado('Pablo');
}

function usuarioAutenticado(usuario) {
    console.log('Autenticado usuario...');
    console.log(`Usuario autenticado con éxito ${usuario} `);
}

//La idea es separar en muchas funciones sencillas/específicas en vez de pocas con muchas funcionalidades/grande