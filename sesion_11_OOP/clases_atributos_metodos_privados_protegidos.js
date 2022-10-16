class persona {
    //Private -> # solo se puede acceder desde dentro de la clase 
    #nombre;
    #edad;
 

    // Protected -> _ solo se puede acceder desde dentro de la clase y desde clases descendientes

    _isDeveloper = true
    constructor(nombre, edad){
       this.#nombre = nombre
       this.#edad = edad
      

    }

    saludo(){
        console.log(`Hola soy ${this.nombre}, tengo ${this.edad} años`) 
    }
    obtenEdad(){ // Funcion getter -> nos permite acceder (de forma controlada ) a los atributos protegidos 
        return this.#edad
    }
    obtenNombre(){
        return this.#nombre
    }
    getEdad(){
        return this.#edad
    }
    setEdad(nuevaEdad){
        this.#edad = nuevaEdad
        
    }
}

const personaUno  = new persona("Pedro", 29) 

console.log(personaUno.obtenNombre())

const edad = personaUno.getEdad()
console.log(edad)

// Getter -> métodos que nos permiten obtener atributos/métodos privados o protegidos
// Setter -> métodos que nos permiten cambiar valor de algunos atributos privados o protegidos 
// quiero cambiar la edad de la persona 

personaUno.setEdad(33);
console.log(personaUno.getEdad())

personaUno.setEdad(35);
console.log(personaUno.getEdad())