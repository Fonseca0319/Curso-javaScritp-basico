// operador.valueOff() obtener valores numericos a partir de literales
let a = 2;
let b = new Number(3);

console.log(a);
console.log(b);
console.log(a+b);

console.log(b.valueOf());

let str = new String("Hola soy un string");
console.log(str);
console.log(str.valueOf())


//NaN (Not a Number) - Infinity 
let n = Number("adios");
console.log(n);
console.log(isNaN(n));

let numerado = 19;
let divisor = 0;

console.log(numerado/divisor)

// como convertir los Strin a valores numericos con Number, parseInt y parseFloa
let numero = '5.02';
let num2 = 72.2
console.log(typeof numero);
console.log(numero + num2);

console.log(parseInt(numero));
console.log(parseFloat(numero));
// numeros Hexadecimales

let numHex = "0x3a5b7";

console.log(parseInt(numHex))

// como obtener los valores maximos y  minimos en JavaScritp

let min_precision = Number.EPSILON;
let min_valor_js = Number.MIN_VALUE;
let max_valor_js = Number.MAX_VALUE;

console.log(min_precision);
console.log(min_valor_js);
console.log(max_valor_js);
