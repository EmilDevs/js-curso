

let a = 5;

if(a >= 10){ // undefined, null, asignación
    console.log('A es mayor o igual a 10');
} else {
    console.log('A es menor a 10');
}

// console.log('Fin de programa');

const hoy = new Date(); // Nueva instancia del objeto {}
let dia = hoy.getDay(); // 0: Domingo, 1: Lunes, 2: Martes..


console.log({dia});

if(dia === 0){
    console.log('Domingo');
} else if(dia === 1) {
    console.log('Lunes');
    // if(dia === 1){
    //     console.log('Lunes');
    // } else {
    //     console.log('No es lunes ni domingo');
    // }
} else if(dia === 2){
    console.log('Martes');
} else{
    console.log('No es lunes, martes o domingo...');
}


// Sin usar If Else, o Switch, únicamente objetos

let diasLetras = {0: 'Domingo', 1: 'Lunes', 2: 'Martes', 3: 'Miércoles', 4: 'Jueves', 5: 'Viernes', 6: 'Sábado'};

let diasLetras2 = ['Domingo', 'Lunes', 'Martes','Miércoles', 'Jueves', 'Viernes', 'Sábado'];

dia = 6; // 0: domingo, 1: lunes

// dia de la semana
// console.log(diasLetras[dia] || 'Día no definido');
console.log(diasLetras2[dia]);