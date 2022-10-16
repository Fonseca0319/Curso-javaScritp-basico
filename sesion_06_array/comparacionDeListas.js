// como podemos comparar listas
// .every()

const array = [1,4,5,4,33,345,-23,-94,-9321-21];

/*
const resultado = array.every(valor => {
    if(typeof valor === "number"){
        return true
    } else{
        false
    }
})
*/

const resultado = array.every(valor => typeof valor === "number") 

console.log(resultado);

//comparaciones de listas

const ar1 = [1, 2, 3, 4];
const ar2 = [1, 2, 3, 4];
const ar3 = [1, 5, 3, 4];

console.log(ar1 === ar2);

const compararArray = (array_1, array_2) => {
    if(array_1.length !== array_2.length) return false
    const res = array_1.every((valor, i) => valor === array_2[i])
    return res
}
console.log(compararArray(ar1, ar2))
console.log(compararArray(ar1, ar3))

