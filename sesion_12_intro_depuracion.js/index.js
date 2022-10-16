const persona = {
    nombre: "pedro",
    edad: 29
}

console.log(persona)

function obtenDobleEdad(edad){
    return edad * 2
}

const dobleEdad = obtenDobleEdad(persona.edad);

console.log(dobleEdad)