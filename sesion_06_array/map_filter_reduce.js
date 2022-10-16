// trabajar con metodos mas avanzados de busqueda
// .map()--- .filter()---- .reduce()

const array = ["Cali", "Medellin", "Bogota", "Armenia", "Barranquilla"];

const val = array.forEach(v => {
    console.log(v)
})

console.log(val);

const newArray = array.map((valor, indice) => `${indice + 1} - ${valor}`);

console.log(newArray);

const listaObejtos = [
    {nombre: "pedro", edad: 19},
    {nombre: "Johana", edad: 26},
    {nombre: "Ivanna", edad:1},
    {nombre:"Liliana", edad:53}];

   /* const personasaMayores = listaObejtos.filter(obj => {
        if(obj.edad > 22){
            return true
        }else{
            return false
        }
    })
    */

    const personasaMayores = listaObejtos.filter(obj => obj.edad > 22);
    console.log(personasaMayores)

    const nuevaLista = listaObejtos.filter(obj => obj.nombre !== "pedro");
    console.log(nuevaLista);

const valores = [3,2,4,64,32,2]

const suma = valores.reduce((acumulado, cur, i, arrayOriginal) =>{
    console.log(acumulado);
    console.log(cur);
    console.log(i);
    console.log(arrayOriginal);
    return acumulado + cur
})

console.log(suma)
