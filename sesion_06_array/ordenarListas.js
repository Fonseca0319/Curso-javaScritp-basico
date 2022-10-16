//  .sort() metodo para ordenar nuestros arrays

const array = [2,3,4,5,6,3,21,22];

console.log(array);

array.sort((a, b) =>{
    if (a<b){
        return -1
    }else if(a > b){
        return +1
    }else{
        return 0
    }
    
})
console.log(array);

const arrayNumerico = [1,2,34,222,34,2,3,1112];

arrayNumerico.sort((a, b)=> b - a)

console.log(arrayNumerico);

// interesante en array de objetos


const listaObejtos = [
    {nombre: "pedro", edad: 19},
    {nombre: "Johana", edad: 26},
    {nombre: "Ivanna", edad:1},
    {nombre:"Liliana", edad:53}];
/*
    listaObejtos.sort((a, b) => {
        if(a.edad < b.edad){
            return -1
        }else if (a.edad < b.edad){
            return +1
        }else{
            return 0
        }
    })
    */

    listaObejtos.sort((a, b) => a.edad - b.edad);

    console.log(listaObejtos)


