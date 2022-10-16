
let str ="hola soy una cadena de caracteres";

console.log(str.length)

//obtener partes de un string

let slice_str = str.slice(0, 8);
console.log(slice_str);

let substring_str= str.substring(0, 8);
console.log(substring_str);

let substr_str=str.substr(0, 8)
console.log(substr_str);

// reemplazar parte del contenido de una cadena de string
//al utilizarla solo reemplaza la primer instancia

let cadena= "hola mi nombre es pedro";
console.log(cadena);


console.log(cadena.replace("pedro", "luis"));

let texto_largo = "- De sonrisa a sonrisa Se trata de un cuento que despierta las emociones de los niños (y de los adultos). Habla sobre la verdad, la sinceridad y la lealtad";

console.log(texto_largo.replace("los", "cinco"))

// utilizando la palabra reservada /g se remplaza todas las instancias

console.log(texto_largo.replace(/los/g,"cinco"))
