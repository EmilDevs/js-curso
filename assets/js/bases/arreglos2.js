let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];
console.log('Largo:', juegos.length);

let primero = juegos[2- 2];
let ultimo = juegos[juegos.length - 1];

console.log({primero, ultimo});

juegos.forEach((elemento, indice, arr) =>{
console.log({elemento, indice, arr});
});

// Colocar un elemento al final de un arreglo
let nuevaLongitud = juegos.push('F-Zero');
console.log({nuevaLongitud, juegos});


// Colocar un elemento al principio de un arreglo
nuevaLongitud = juegos.unshift('Fire Emblem');
console.log({nuevaLongitud, juegos});

// Borrar un elemento al final de un arreglo
let juegoBorrado = juegos.pop();
console.log({juegoBorrado, juegos});


// Borrar un elemento en una posición en específico
let pos = 1;
console.log(juegos);
let juegosBorrados = juegos.splice(pos, 2);
console.log({juegosBorrados, juegos});

// Encontrar la posición en que se encuentro un elemento en un arreglo
let metroidIndex = juegos.indexOf('metroid'); //Case Sensitive
console.log({metroidIndex}); // Si regresa -1 es que no encontró el elemento