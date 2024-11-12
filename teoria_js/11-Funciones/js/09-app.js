'use strict';

const reproductor = {

    reproducir: function(id) {
        console.log('Reproduciendo cancion id ' + id);
    },

    pausar: function() {
        console.log('pausando...');
    },

    borrar: function(id) {

    },

    crearPlaylist: function(nombre) {
        console.log(`creando la playlist ${nombre}`);
    },

    reproducirPlaylist: function(nombre) {
        console.log(`reproduciendo playlist con nombre ${nombre}`);
    }
}

reproductor.reproducir(30);
reproductor.pausar();


reproductor.borrar =  function (id) {
    console.log(`Borrando candion con id: ${id}`);
    reproductor.borrar(20);
    reproductor.crearPlaylist('heavy Metal');
}