// lista, arreglo o arrays

const lista= [1, "hola",true, undefined, null]
const lista2= new Array(2, "hola",true, undefined, null)
const lista3= new Array(3)
lista3[0]="soy el primer indice de la lista 3"
const lista4= [lista,lista2,lista3]

console.log(lista)
console.log(lista2)
console.log(lista3)
console.log(lista4)

//objetos
const celular ={
    color: "negro",
    altura: 5,
    anchura: 4,
    marca: "Xiaomi",
    isWhite: false,
    contactos: ["Johana", "Kelly", "padre" ],
    Tarjeta: {
        marca:"sandisk",
        almacenamiento:32
    }

    
}
celular.altura=6;
console.log(celular.Tarjeta.marca)
console.log(celular.altura)

//Fechas
//Librerias de apoyo momento.js

const ahora =new Date();
const fecha_milis= new Date(10) //se puede usando mili segundos
const fecha_cadena=new Date("march 19 2020")
const fecha_valores=new Date(2022, 2, 19)
const dia=ahora.getDate();
const mes=ahora.getMonth() + 1;
const anyo=ahora.getFullYear();


console.log(ahora)
console.log(fecha_milis)
console.log(fecha_cadena)
console.log(fecha_valores)
console.log(dia,mes,anyo)