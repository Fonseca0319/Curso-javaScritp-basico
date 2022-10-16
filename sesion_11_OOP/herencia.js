//inheritancia - herencia

class persona {
    constructor(nombre, edad){
        this.nombre = nombre 
        this.edad = edad

 
     }
 
     saludo(){
         console.log(`Hola soy ${this.nombre}, tengo ${this.edad} años`) 
     }
    
}

class Desarrollador extends persona {
    constructor(nombre, edad, lenguaje){
        super(nombre, edad)
        this.lenguaje = lenguaje
    }
    saludo(){ // Override = sobre escribir
        super.saludo()
        console.log(`y soy desarrollador de ${this.lenguaje}`)
    }

}

const nuevoDes = new Desarrollador("Pedro", 29, "JavaScritp");
console.log(nuevoDes);
nuevoDes.saludo()
//Polimorfismo => poli = muchos y morfismo = varias formas