// Todos los primitivos se pasan por valor
let a = 10;
let b = a;
a = 30;

console.log({ a, b });

// Todos los objetos se pasan por referencia
let juan = { nombre: "Juan" };

let ana = { ...juan }; // Crear una copia del objeto con el operador spread {...} y separa los elementos, rompe la referencia y hacer igualaciones en diferentes espacios de memoria
ana.nombre = "Ana";

console.log({ juan, ana });

const cambiaNombre = ({...persona}) => { // Es un parámetro rest cuando se pone (...) en los argumentos de una función y une todos los argumentos en una sola variable y los une como un arreglo

    // Se convierte en spread cuando se usa ({...}) dentro de los argumentos de la función
  persona.nombre = "Tony";
  return persona;
};

let peter = { nombre: "Peter" };
let tony = cambiaNombre(peter);

console.log({ peter, tony });


// Arreglos
const frutas = ['Manazana', 'Pera', 'Piña'];

// const otrasFrutas = [...frutas];

console.time('slice');
// Romper la relación con slice()
const otrasFrutas = frutas.slice();
console.timeEnd('slice');

console.time('spread');
// Romper la relación con spread
const otrasFrutas2 = [...frutas];
console.timeEnd('spread');

otrasFrutas.push('Mango');

console.table({frutas, otrasFrutas});