// entregable 4

let nombres = "Pedro Luis";
let apellidos = "Fonseca Cubillos           ";
let estudiante = nombres + " " + apellidos;
let estudianteMinus = estudiante.toLowerCase();
let estudianteMayus = estudiante.toUpperCase();
let numeroLetras = estudiante.length
let primeraLetra = nombres.charAt();
let ultimaLetra = apellidos.substr(-1);
let eliminarEspacio = estudiante.trimEnd();
let nombreBooleana = estudiante.includes("Pedro Luis");

console.log(estudianteMayus)
console.log(estudianteMinus)
console.log(estudante)
console.log(numeroLetras)
console.log(primeraLetra)
console.log(ultimaLetra)
console.log(eliminarEspacio.length)
console.log(nombreBooleana)

