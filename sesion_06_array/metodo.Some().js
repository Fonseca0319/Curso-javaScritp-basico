// .some()

const array = [3, 7, 2, 4, 36,7 , 86, 3, -343, -553]

const res = array.some(valor => valor < -0)

console.log(res);

const existe = array.some(valor => valor === -343);

console.log(existe);


const listaObejtos = [
    {nombre: "pedro", edad: 19},
    {nombre: "Johana", edad: 26},
    {nombre: "Ivanna", edad:1},
    {nombre:"Liliana", edad:53}];


    const personaLiliana = listaObejtos.some(persona => persona.nombre === "Liliana");

    console.log(personaLiliana);

    const str= "Hola soy Pedro";
    const ar_astr = Array.from(str);
    console.log(ar_astr)

