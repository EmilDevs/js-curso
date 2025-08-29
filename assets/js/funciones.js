
// Forma tradicional
function saludar(nombre) {
    // console.log(arguments); // Los arguments sólo se encuentran en las formas tradicionales
    // console.log('Hola ' + nombre);
    return [1,2];
    
    // Esto nunca se va a ejecturar
    console.log('Soy un código que está después del return');
}


// Función anónima - no se puede reutilizar de nuevo
const saludar2 = function(nombre) {
    console.log('Hola ' + nombre);
}

// Funciones de flecha, arrow o lambda
const saludarFlecha = () =>{
    console.log('Hola Flecha');
}

// Los paréntesis son opcionales si sólo se envía un sólo argumento a la función, aún así es mejor ponerlos
const saludarFlecha2 = (nombre) =>{
    console.log('Hola ' + nombre);
}


const retornoDeSaludar = saludar('Osmar', 27, false, 'México'); //1
// console.log(retornoDeSaludar[0], retornoDeSaludar[1]);
// saludar2('Osmar');

// saludarFlecha();
// saludarFlecha2('Andrea');

function sumar(a, b){
    return a + b;
}

// const sumar2 = (a, b) => {
//     return a + b
// }

// Función de flecha resumida cuando sólo tiene un return o sólo una línea a retornar
const sumar2 = (a, b) => a + b;

function getAleatorio() {
    return Math.random();
}

// En una funcion felcha, que no tenga llaves {}
// getaleatorio2()

const getaleatorio2 = () => Math.random();


console.log(getaleatorio2());