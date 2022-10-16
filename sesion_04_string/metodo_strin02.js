// Metodos de cadenas de texto parte 2

let input = "Piscis";
let db = "piscis";

console.log(input === db)
console.log(input.toLowerCase() === db.toLowerCase())
console.log(input.toLowerCase())
console.log(input.toUpperCase())
console.log(input.toLocaleLowerCase())

//formas de concatenar cadenas de caracteres

let str1 = "hola soy la primera cadena--";
let str2 = "hola soy la segunda cadena";
console.log(str1.concat(str2))
console.log(`${str1} ${str2}`)
console.log(str1 + " " + str2)

let str3= " hola soy un string con un espacio al fina. "
console.log(str3.length)
console.log(str3.trim().length)
console.log(str3.trimStart().length)

//obtener el caracter que hay  en cierta posicion

let str4 = "hola soy el string # 4"
console.log(str4.charAt(5))

//obtener la posicion de una palabra dentro de una cadena de caracteres

let str5 = "hola soy pedro y me gusta el futbol";
console.log(str5.indexOf("pedro"))
console.log(str5.charAt(9))



