// funciones de tipo flecha --- funciones anonimas

const array = [1,5,66,32,11,44,23,25];

const arrayDoble = array.map((valor) => valor * 2)

console.log(arrayDoble);

const dobleVlalor = valor => valor * 2;

const array3 = array.map(dobleVlalor);

console.log(array3)


