// formas de importar y exportar modulos 
// 1. CommonJS - requiere
//2. Import ES6 - import 

//const moduloMatematicas = require("./modulos/matematicas.js");
//console.info(moduloMatematicas)

const  {factorial, suma, eleva, multiplica} = require("./modulos/matematicas.js");

const fact = factorial(5);
console.info("el factorial es " + fact)

const sum = suma(5, 10);
console.info("la suma es: " + sum)