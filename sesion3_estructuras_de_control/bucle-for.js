//Bucles For

for(let i = 0; i < 10; i++){
// esto  es el bucle
console.log(i)
}

let lista = [1, 3, 4, 8, 90, 97];

for(let i = 0; i < lista.length; i++){
console.log(lista[i] * 2)
}

//estructura for.... of

for(let valor of lista){
    console.log(valor)
}

//estructura forEach

lista.forEach(valor =>{
    console.log(valor)
})

// estructura for... in

let persona={
    nombre:"Pedro",
    apellido:"Fonseca",
    edad:"29 años",
    desarrollador:true
    }
for (propiedad in persona) {
console.log(persona[propiedad]);
    }



