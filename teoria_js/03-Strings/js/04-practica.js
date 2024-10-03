const producto = '          Monitor  20  pulgadas           '

console.log(producto);

console.log(producto.length);

//eliminar el inicio

//elimina todos los espacios en blanco del inicio
console.log(producto.trimStart());

//elimina todos los espacios en blanco del final
console.log(producto.trimEnd());


//los metodos en javaScript se pueden encadenar
console.log(producto.trimStart().trimEnd());

console.log(producto.trim().length);
