'use strict'
// Activa el modo estricto en JavaScript, lo que ayuda a evitar errores comunes y escribir un código más seguro.

const navegacion = document.querySelector('.navegacion');
// Selecciona el primer elemento del DOM con la clase "navegacion" y lo asigna a la constante `navegacion`.

console.log(navegacion);
// Imprime en la consola el elemento `navegacion`.

console.log(navegacion.childNodes);
// Muestra todos los nodos hijos de `navegacion`, incluyendo elementos, nodos de texto y comentarios.

console.log(navegacion.children);
// Muestra únicamente los nodos hijos que son elementos HTML, ignorando nodos de texto y comentarios.

console.log(navegacion.children[0].nodeType);
// Obtiene y muestra el tipo de nodo del primer hijo de `navegacion`. Un nodo tipo 1 indica que es un elemento HTML.

console.log(navegacion.children[0].nodeName);
// Obtiene y muestra el nombre del nodo (etiqueta) del primer hijo de `navegacion`, como "DIV", "A", etc.

const card = document.querySelector('.card');
// Selecciona el primer elemento con la clase "card" en el DOM y lo guarda en la constante `card`.

console.log(card.nodeType);
// Muestra el tipo de nodo de `card`. Debería ser 1 porque `card` es un elemento HTML.

console.log(card.nodeName);
// Muestra el nombre de la etiqueta del nodo `card`.

console.log(card.children);
// Imprime todos los hijos de `card` que son elementos HTML.

console.log(card.children[1]);
// Muestra el segundo hijo de `card`.

console.log(card.children[1].children[1]);
// Muestra el segundo hijo del segundo hijo de `card`.

console.log(card.children[1].children[1].textContent);
// Muestra el contenido de texto del segundo hijo del segundo hijo de `card`.

card.children[1].children[1].textContent = 'cambiando el texto de traversing...';
// Cambia el contenido de texto del segundo hijo del segundo hijo de `card` por el texto especificado.

console.log(card.children);
// Vuelve a mostrar todos los hijos de `card` para confirmar los cambios realizados.

console.log(card.children[0]);
// Muestra el primer hijo de `card`.

console.log(card.children[0].src);
// Obtiene y muestra la URL de la fuente de la imagen del primer hijo de `card`. Asume que el primer hijo es una etiqueta `<img>`.

card.children[0].src = 'img/hacer2.jpg';
// Cambia la URL de la imagen del primer hijo de `card` a 'img/hacer2.jpg'.

console.log(enlace.firstChild);
// **Error: `enlace` no está definido aún en este punto del código.** Esto lanzará un error.

console.log(enlace.lastElementChild);
// **Error: Mismo problema, `enlace` no está definido aún.**

navegacion.firstElementChild.textContent = 'Nuevo enlace... ';
// Cambia el texto del primer elemento hijo de `navegacion` a "Nuevo enlace...".

const enlace = document.querySelector('a');
// Selecciona el primer enlace (`<a>`) del documento y lo asigna a la constante `enlace`.

console.log(enlace);
// Imprime el elemento `enlace` en la consola.

console.log(enlace.parentNode);
// Muestra el nodo padre de `enlace`. Esto incluye elementos HTML o nodos de texto.

console.log(enlace.parentElement);
// Muestra específicamente el padre de `enlace` que sea un elemento HTML.

console.log(enlace.parentElement.parentElement);
// Muestra el abuelo de `enlace`, es decir, el padre del nodo padre.

console.log(enlace);
// Vuelve a imprimir el elemento `enlace` en la consola.

console.log(enlace.nextElementSibling);
// Muestra el elemento hermano que sigue inmediatamente a `enlace`.

console.log(enlace.nextElementSibling.nextElementSibling);
// Muestra el segundo elemento hermano que sigue inmediatamente después de `enlace`.

console.log(enlace.nextElementSibling);
// Vuelve a mostrar el primer elemento hermano que sigue a `enlace`.

const ultimoCard = document.querySelector('.card:nth-child(4)');
// Selecciona el cuarto hijo con la clase "card" y lo asigna a la constante `ultimoCard`.

console.log(ultimoCard);
// Imprime en la consola el elemento `ultimoCard`.

console.log(ultimoCard.previousElementSibling);
// Muestra el elemento hermano anterior a `ultimoCard`.
