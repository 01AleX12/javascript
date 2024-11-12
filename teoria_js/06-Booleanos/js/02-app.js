//Comparar boolean es exactamente igual que cualquier comparacion de numero o string

const boolean1 = true;
const boolean2 = false;

console.log(boolean1 === boolean2); //Comparar 2 variables

console.log(boolean1 === true);//Comparar si un boolean es verdadero
console.log(boolean2 === true);//Comparar si un boolean es verdadero 

//Aún no hemos llegado a ello, pero muchas personas cometen el siguiente error cuando escriben codigo javascript en if

if(boolean1 === true){
    console.log('si es true')
}else{
    console.log('no, no es true')
}

//Pero este código puede simplificar quitando el === true poruqe ya sabemos que la variable es ture

//Este mismo ejemplo aplica si un usuario está autenticado puede darle me gusta a una foto o ver página, asi que si ya tienes una cuenta en netflix y has pagado.