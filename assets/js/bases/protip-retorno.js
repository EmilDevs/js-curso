
// function crearPersona(nombre, apellido){
//     return{ nombre,apellido}
// }

// Retornar valores como objeto del cuerpo de la función como una funcion de flecha
const crearPersona = (nombre, apellido) => ({nombre,apellido});


const persona = crearPersona('Osmar', 'Chávez');
console.log(persona);


function imprimeArgumentos(){
    console.log(arguments);
}

// Una función de flacha no crea argumentos por sí misma sino que hay que especificarlos dentro de la misma

// el parámetro rest (...) indica que hay que hacer un arreglo de todos los argumentos que se encuentran enviados a la función

// Después del parámetro rest(...) no puede venir otro argumento más

// Para extraer otro parámetro antes del argumento rest(...) se debe específicar antes del mismo

// const imprimeArgumentos2 = (edad, ...args) => {
//     console.log({edad, args});
// }

const imprimeArgumentos2 = (edad, ...args) => {
    // console.log({edad, args});
    return args;
}

// Crear cada valor del objeto para retornarlo
const [casado, vivo, nombre, saludo] = imprimeArgumentos2(10, true, false, 'Osmar', 'Hola');
console.log({casado, vivo, nombre, saludo});


// Retornar una sóla propiedad del objeto
// const {apellido} = crearPersona('Osmar', 'Chávez');
// console.log({apellido});

// Cambiar el nombre de la propiedad del objeto
const {apellido: nuevoApellido} = crearPersona('Osmar', 'Chávez');
console.log({nuevoApellido});


// Destructuración del argumentos
const tony = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
};

// const imprimePropiedades = (personaje) => {
    
//     console.log('nombre',personaje.nombre);
//     console.log('codeName',personaje.codeName);
//     console.log('vivo',personaje.vivo);
//     console.log('edad',personaje.edad);
//     console.log('trajes',personaje.trajes);

// }


// Desestructurando.....
const imprimePropiedades = ({nombre, codeName, vivo, edad = 15, trajes}) => {
    
    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});

}


imprimePropiedades(tony);