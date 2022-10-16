
// entregable OOP 

class estudiante {  
    constructor(nombre, asignaturas =["javaScrip", "HTML", "CSS"]){
        this.nombre = nombre
        this.asignaturas = asignaturas
    }  
    getObetnDatos(){
        return "soy el estudiante " + this.nombre + " y esudio  " + this.asignaturas[0]
        
    }
   
    
}

const nuevoEstudiante = new estudiante("pedro");
console.log(nuevoEstudiante.getObetnDatos())
