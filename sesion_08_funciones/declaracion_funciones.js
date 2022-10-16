// que son las funciones, como se declaran 

let persona = "Pedro";

function saludar(nommbre){
    console.log(`Hola ${persona}`)
}

saludar(persona);

let nombre = {nombre: "Pedro Luis", apellido:"Fonseca"};

function saludarPersona(objeto) {
    objeto.apellido="gomez"
    console.log(`Hola ${objeto.nombre} ${objeto.apellido}`)

}

saludarPersona(nombre);

///////////


function imprimeNumero(numero = 9){
      console.log(numero);
}

imprimeNumero(2);

////

function imprimir(...parametros){
    console.log(parametros);

}

imprimir(1,2,3,4,"Hola", {id:9});

///

function suma(...nums){
    console.log(nums.reduce((a, b)=> a + b))
}

suma(1,4,3,4)


///
 function multiplicar(a=0, b = 0) {
    return a*b
 }

 console.log(multiplicar(5,20)) 