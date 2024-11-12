'use strict';

//parametros en una arrow function
const aprendiendo = (tecnologia) => console.log(`aprendiendo ${tecnologia}`);

aprendiendo('javascript');

//si es solo un parametro no hace falta el parentesis
const aprendiendo = tecnologia => console.log(`aprendiendo ${tecnologia}`);

aprendiendo('javascript');

//multiples parametros si requieren parantesis
const aprendiendo = (tec1, tec2) => console.log(`aprendiendo ${tec1} ${tec2}`);

aprendiendo('JS', 'JAVA');
 