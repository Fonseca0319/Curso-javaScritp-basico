class persona {
    constructor(nombre, edad, isDeveloper){
       this.nombre = nombre 
       this.edad = edad
       this.isDeveloper = isDeveloper

    }

    saludo(){
        console.log(`Hola soy ${this.nombre}, tengo ${this.edad} años`) 
    }
}

const nuevaPersona = new persona("Pedro", 29, true);
console.log(nuevaPersona);
nuevaPersona.saludo()

let numero = 60 // inicializar una variable
console.log(typeof numero)
let persona_dos = new persona("Johanna", 26, false) // instanciar 
console.log(typeof persona_dos) 
console.log(persona_dos instanceof persona)

// instanceof -> similar a typeof pero para clases 