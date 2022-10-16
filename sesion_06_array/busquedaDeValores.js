// iterar los valores de una lista
const array = ["hola",1,2,3,false,undefined];

//forma antigua y poca eficiente    
for(let i=0; i < array.length; i++){
    console.log(array[i])
}

//forma ES&(mas eficiente) .forEach()
let suma = 0;

const arrayNums = [3, 4,5,6,7,8,9,4,2,3]

arrayNums.forEach(valor =>{
    suma += valor;
    console.log(valor)
})
console.log(suma);

// busqueda de un valor dentro de una lista .find()
//quiero econtrar el elemento 9

const variable = array.find(valor => {
    if(valor === 3){
        return true
    }
})
console.log(variable);


const listaObejtos = [
    {nombre: "pedro", edad: 19},
    {nombre: "Johana", edad: 26},
    {nombre: "Ivanna", edad:1},
    {nombre:"Liliana", edad:53}];
/*
    const objeto  = listaObejtos.find(o =>{
        if(o.nombre === "Liliana"){
            return true
        }
    })

    console.log(objeto.edad) 
    */

 /*const objeto  = listaObejtos.find(o =>{
    return o.nombre === "Johana"

 })
 console.log(objeto.edad)
 */

 /*
 const objeto  = listaObejtos.find(o =>o.nombre === "Johana")
 console.log(objeto.edad)
 */

 const objeto  = listaObejtos.find(o =>o.nombre === "Johana")
 console.log(objeto.edad);

 // manera correcta y practica de realizar un valor de una lista
 const {edad} = listaObejtos.find(o => o.nombre === "Johana")
 console.log(edad)
