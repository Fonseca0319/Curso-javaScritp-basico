const persona={
    nombre:"Pedro Luis",
    apellidos:"Fonseca Cubillos",
    Edad:"9 años",
    desarrollador: true,
    fecha_de_nacimiento: new Date(1993,2,19),
    libro_favorito:{
        titulo:"Padre Rico Padre Pobre",
        autor:"Robert Kiyosaki",
        fecha_publicacion:new Date(2000,3,1),
        url:"https://www.academia.edu/73481130/Padre_rico_Padre_pobre_Nueva_edici%C3%B3n_actualizada"


    }

}
console.log(persona.fecha_de_nacimiento)
console.log(persona.nombre,persona.apellidos)