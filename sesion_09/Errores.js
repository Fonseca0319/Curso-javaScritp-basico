// errores en javaScript

const miFuncion = val => {
    if(typeof val === "number"){
        return 2 * val
    }
    //return false
    throw new Error("El valor debe ser de tipo numero")
    }
    
    const numero = "8"

//console.log(miFuncion("ss"));

try{
    console.log("Se esta ejecuntando de manera correcta");
    const doble = miFuncion(numero)

}catch(e){
console.error("¡Error!");
console.error(e);
}finally{
    console.log("esto se va a ejecutar siempre")
}

// los errores mas comunes
//InternalError, SyntaxError, TypeError, RangeError y ReferenceError