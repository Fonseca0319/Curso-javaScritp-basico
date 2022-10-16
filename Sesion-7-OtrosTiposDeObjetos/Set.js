// set o conjuntos (en español)

const array = [1,2,3,4,5,6,1,2,7,5,8,9,77,76]

const miSet = new Set(array);
console.log(miSet)
console.log(array)

// .add() -- para añadir un valor a nuestro set

miSet.add(123)
miSet.add("Hola")
console.log(miSet);

// .delete() --- para eliminar un valor de nuestro se

miSet.delete(123);
console.log(miSet);

// .clear() para limpiar todo el set

//miSet.clear();
//console.log(miSet);

// .has() -- para buscar un valor dentro del set

console.log(miSet.has(77));

// .size para conocer cuantos valores tiene el set

console.log(miSet.size)

// metodo para pasar por todos los valores del set con metodo .forEach()

miSet.forEach(valor =>{
    console.log(valor)
})

const it_miSet = miSet.values();
console.log(it_miSet);

const ar_miSet = [...it_miSet];
console.log(ar_miSet[2])


