// como unir dos listas
//.concat(lista2)

const lista1=["hola", 2, false, null];
const lista2 = ["adios", true, undefined];

console.log(lista1.concat(lista2));

const lista3 = lista1.concat(lista2);
console.log(lista3);

const lista4 = [...lista1, ...lista2];
console.log(lista4);
console.log(lista4.length);

// Errror, mal entendido el concepto de factor de propagacion
const lista5 = [lista1, lista3, lista2];
console.log(lista5)
console.log(lista5.length)