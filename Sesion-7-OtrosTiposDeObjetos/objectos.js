// trabajando con objetos 
// como ordenar listas de objetos en funcion de una propiedad 

const obj ={
    id: 4,
    nombre: "Pedro",
    apellido: "Fonseca",
    isDeveloper: true,
    librosFavoritos: ["padre rico padre pobre", "el cuadrante del flujo del dinero"]

}

let listaPeliculas = [
    {titulo: "armagendo", fecha: "1998"},
    {titulo: "titanic", fecha: "1997"},
    {titulo: "moana", fecha: "2016"},
    {titulo: "efecto mariposa", fecha: "2004"},
    {titulo: "ted", fecha: "2012"},
    
]
console.log(listaPeliculas);

// para ordenar vamos a utilizar el metod .sort() --MUTA EL VALOR EL VALOR DE LA LISTA ORIGINAL

listaPeliculas.sort((a, b) => a.fecha - b.fecha);
console.log(listaPeliculas)