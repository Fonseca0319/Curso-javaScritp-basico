// como trabajar con listas (arrays, arreglos, vectores... )

let var1 = 45
let array = [1, "hola", false, {id: 5}, null, undefined, var1];
console.log(array);

// como acceder a los valores de un arreglo a traves de su posicion

console.log(array[5]);


// metodos para introducir nuevos valores a nuestros arrays
// .push() .unshift() ===> mutan el valor de nuestro arays
// valores al final -> push()

array.push("final", 8,78);
console.log(array);

// valores al fina -> .unshift()

array.unshift("inicial", 4,"hola");
console.log(array);

// metodos para eliminar valores en nuestros arrays 
// .pop()   .shift() ==> mutan el valor del array


//valores al final .pop()
array.pop();
console.log(array)

//valores al principio .shift()

array.shift();
console.log(array);

// metodo para  eliminar, modificar, o añadir valores en nuestros arrays
// .splice(x, , z)

// Elimibar .splice(indice, numValoresAEliminar)
let array2 = [1,2,3,4,5,6];
array2.splice(2, 1)
console.log(array2)

//añadir valores .splice(inidce, 0, valores)

array2.splice(2,0,"hola");
console.log(array2)

//modificar valores .splice(inidce, 0, valores)

array2.splice(2, 1, 3);
console.log(array2)
