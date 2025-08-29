const personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords:{
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '1080, 90265',
        ubicacion: 'Malibu, California'
    },
    'ultima-pelicula': 'Infinity War',
};

console.log(personaje);
console.log('Nombre', personaje.nombre);
console.log('Nombre', personaje['nombre']);
console.log('Edad', personaje.edad);

console.log('Coors', personaje.coords);
console.log('Coors', personaje.coords.lat);

console.log('No. Trajes', personaje.trajes.length);
console.log('Último Traje', personaje.trajes[personaje.trajes.length - 1]);

const x = 'vivo';
console.log('Vivo', personaje[x]);

console.log('Última Película', personaje['ultima-pelicula']);

// Más detalles
delete personaje.edad;
console.log(personaje);

// Mutar objeto
personaje.casado = true;

// Formatear todo el objeto como un arreglo con entries
const entriesPares = Object.entries(personaje);
console.log(entriesPares);

// No se pueden realizar asignaciones directamente al objeto, sólo a sus propiedades cuando se trata como una constante
// personaje = true;

// Bloquear propiedades del objeto pero no se bloquean los valores que contienen las propiedades del mismo pero también se pueden bloquear indicandolo directamente con el método freeze
Object.freeze(personaje);

personaje.dinero = 100000000;
personaje.casado = false;
personaje.direccion.ubicacion = 'México';

console.log(personaje);

// Obtener pripiedad y valor en forma de arreglo en el ordenq ue se creó
const propiedades = Object.getOwnPropertyNames(personaje);
const valores = Object.values(personaje);
console.log(propiedades, valores);

