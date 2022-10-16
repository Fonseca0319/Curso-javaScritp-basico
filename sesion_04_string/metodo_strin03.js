//metodo strin parte 3
//https://regexr.com

let texto_largo = "Los mejores cuentos cortos para niños, ideales para educar en valores y fomentar la lectura, publicados en libros educativos de todo el mundo... ¡Descubre el estilo alegre y creativo que ha hecho de los cuentos para dormir el momento favorito de los niños! Recupera el hábito de contar un cuento diariamente con nuestros cuentos cortos."
console.log(texto_largo.match(/para/g))
//metodo para buscar si existe una palabra dentro de un texto
console.log(texto_largo.includes("niños"))

//saber si un texto inicia con una palabra
console.log(texto_largo.startsWith("Los mejores"))
//saber si un texto termina con una palabra
console.log(texto_largo.endsWith("cuentos cortos."))