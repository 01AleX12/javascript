'use strict;'

/*Crea un programa en el cual lee una variable llamada rol que puede ser admin, editor usuario o visitante y te devuelva por consola si una vez detectado el rol que puede hacer el usuario en la pagina */

//creamos una coleccion clave valor para a cada rol que seria la clave asignarle sus funciones que serian los valores
let rol = new Map();

//establecemos los clave-valor del Map dandole a cada rol sus funciones
rol.set('admin', 'editar, leer, borrar, visualizar');
rol.set('editor', 'editar');
rol.set('usuario', 'leer, visualizar');
rol.set('visitante', 'visualizar, leer');

//leemos el prompt del usuario, especificandole los roles que puede elegir, y lo pasamos a minuscula por si el usuario lo escribe de otra manera
let Rol = prompt("Introduce tu rol (admin, editor, usuario, visitante):").toLowerCase(); 

//si el map llamado rol contiene un valor del prompt llamado Rol, es decir, si el usuario nos dice un valor que esta almacenado en el map rol, imprimimos los permisos que tiene ese rol, sino, le diremos que elija un rol valido
if (rol.has(Rol)) {
    alert('tus permisos son ' + rol.get(Rol))
} else {
    alert('Selecciona una de las opciones de roles')
}