

const logger = require('./logger');


function mensaje(){
    console.info("Hola soy una prueba de error")
}

try {
    mensaje();

}catch (err) {
   console.error("la prueba fue fallida");
 }
