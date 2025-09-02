


let a = 10;
let b = 10;

a = 30;

console.log({a, b});


let juan = {nombre: 'Juan'};
// Crear la copia de un objeto con el operador spread para separar las propiedades y valores del objeto
let ana = {...juan};
ana.nombre = 'Ana';

console.log({juan, ana})


const cambiaNombre = ({...persona}) => {
    persona.nombre = 'Tony';
    return persona;

}


let peter = {nombre: 'Peter'};
let tony = cambiaNombre(peter);

console.log({peter, tony});


// Arreglos
const frutas = ['Manzana', 'Pera','Piña'];

// Rompiendo la relación del arreglo con el operador spread
// const otrasFrutas = [...frutas];

// Rompiendo la relación del arreglo con el método slice()

console.time('slice');
const otrasFrutas = frutas.slice();
console.timeEnd('slice');

console.time('spread');
const otrasFrutas2 = [...frutas];
console.timeEnd('spread');

otrasFrutas.push('Mango');

console.table({frutas, otrasFrutas});
