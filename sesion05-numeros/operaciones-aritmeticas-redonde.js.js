// principales operaciones aritmeticas

let a = 3.5;
let b = 4.8;

console.log(a+b);

console.log(a-b);

console.log(a*b);

console.log(a/b);   
// representacion de los numeros en cadenas de texto
console.log(typeof a);
let a_s  = a.toString();
console.log((a_s))
console.log(typeof a_s)
//redondeo de numeros decilmales 

let c = 3.3;
let d = c * 3;

// limitarl el numero de decimales al valor x con   .toFixed(x)

console.log(d)
console.log(d.toFixed(3))
console.log(typeof d.toFixed(3))

let e = 1978.9199292;
console.log(e.toFixed(2));
let f = 133442433;
console.log(f.toFixed(2));

//toPrecision(x) limita el numero de sifras significativas 

console.log(e.toPrecision(5))
console.log(f.toPrecision(5))
console.log(typeof e.toPrecision(5))




