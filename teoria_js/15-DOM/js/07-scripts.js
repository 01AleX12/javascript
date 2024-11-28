'use strict'

// cambiar el color del h1
const heading =document.querySelector('h1');

console.log(heading.style);

heading.style.backgroundColor = 'red';

heading.style.textTransform = 'uppercase';

heading.style.fontFamily = 'Arial';





const card = document.querySelector('.card');
console.log(card);
// mostramos la lista de clases de ese elemento
console.log(card.classList);
// añadir una clase
card.classList.add('nueva-clase');
// añadir varias clases
card.classList.add('nueva-clase','otra-clase');
// elemina una clase
card.classList.remove('card');


