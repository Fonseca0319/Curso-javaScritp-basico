const hTexto = document.getElementsById("h-texto")
console.log(hTexto)

hTexto.AddEventListener("cambioTexto", evento =>{
    console.log(evento)
    hTexto.innerText = evento.detail.texto
    hTexto.style.color = evento.detail.color
})

function cambiarTexto(nuevoTexto, color){
    const evento = new CustomEvent("cambioTexto", {
        detail: {
            texto: nuevoTexto,
            color
        }
    })
    hTexto.dispatchEvent(evento)
}
