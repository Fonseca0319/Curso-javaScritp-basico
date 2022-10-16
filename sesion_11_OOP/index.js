const persona = {
    nombre: "Pedro",
    edad: 29,
    isDeveloper: true,
    saludo: function(){
        console.log("Hola")
    }
}

console.log(persona)

const otraPersona = {
    nombre: "Johanna",
    edad: 26,
    isDeveloper: false,
    saludo: function(){
        console.log("Hola")
    }
}

console.log(otraPersona)

// una funcion factory
const crearPersona = (nombre, edad, isDeveloper) => {
    return {
        nombre: nombre,
        edad: edad,
        isDeveloper: isDeveloper,
        saludo: function(){
            console.log("Hola")
        }
}
}

const nuevaPersona = crearPersona("Ivanna", 1, false)
console.log(nuevaPersona)