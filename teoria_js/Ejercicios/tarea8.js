'use strict';

//crea un programa usando un switch en el cual la constante o variable se llame metodo pago , te devuelva por consola si has pagado en efectivo, cheque, tarjeta o si no has pagado

//almacenamos en la variable metodo de pago lo que nos inserte el usuario convertido a minusculas
let metodo_pago = prompt('Escribe una de las siguientes opciones de pago: efectivo, tarjeta, cheque o no pagado').toLowerCase();

//hacemos un switch con todos los casos posibles y con sus resultados
switch (metodo_pago) {
    case ('efectivo') :
        alert('Ha pagado en efectivo')
    break;
    
    case ('tarjeta') :
        alert('Ha pagado con tarjeta')
    break;

    case ('cheque') :
        alert('Ha pagado con tarjeta')
    break;

    case('no pagado') :
        alert('no ha pagado aun')
    break;
}