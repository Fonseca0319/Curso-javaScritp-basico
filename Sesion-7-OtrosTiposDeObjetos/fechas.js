// trabajando con fechas 

const fecha = new Date();
const fecha5 = new Date();

console.log(fecha)

//los meses incializan en cero 0 = enero
const fecha2= new Date(1993,02,19)
console.log(fecha2);

let fecha3 = new Date(1000000000000); //milisegundos
console.log(fecha3);

let fecha4 = new Date("March,19,1993 00:30:00");
console.log(fecha4);

console.log(fecha > fecha2);

console.log(fecha === fecha2); //esto es un Error, no se puede comparar fechas de esta manera

console.log(fecha.getTime() === fecha5.getTime()); // esta es la forma correcta de comparar fechas

// obtener el dia, el mes y el año de una fecha
// .getDate() --- obtener el dia  


console.log(fecha2.getDate());      

// obtener el mes .getMonth()

console.log(fecha2.getMonth());

// obtener el año .getFullTear()

console.log(fecha2.getFullYear());

// toLocalDateSting
console.log(fecha2.toLocaleDateString("en-GB"))


