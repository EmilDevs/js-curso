

const carros = ['Ford','Mazda','Honda','Toyota'];

let i = 0

console.warn('While');

// while(i < carros.length){
//     console.log(carros[i]);
//     // i = i+1;
//     i++;
// }

// undefined
// null 
// false harán que el ciclo nunca se ejecute

while(carros[i]){
    if(i === 1){
        // break;
        i++;
        continue; // Sino se hace un autoincremento creará un ciclo infinito recorriendo siempre el mismo valor
    }
    console.log(carros[i]);
    // i = i+1;
    i++;
}


console.warn('Do While');

let j = 10;

do{
    console.log(carros[j]);
    j++;

} while(carros[j]);


