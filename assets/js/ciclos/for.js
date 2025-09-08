
const heroes = ['Batman', 'Superman', 'Mujer Maravilla', 'Aquaman'];

console.warn('For tradicional');

for( let i = 0 ; i < heroes.length ; i++) {
    console.log(heroes[i]);
}


console.warn('For in');
// Manjea el ciclo y la condición hasta que no hya elementos dentro del arreglo

for(let i in heroes){
    console.log(heroes[i]);
}

console.warn('For of');
// Obtener referencias a valores de objetos o arreglos de una manera más sencilla

for(let heroe of heroes){ // Se puede poner i como iterador pero casi siempre se acostumbra poner el nombre del arreglo en singular
    console.log(heroe);
}