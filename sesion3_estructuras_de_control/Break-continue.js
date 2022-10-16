// casos muy especificos - break, continue

let lista = [1,2,3,4,5,6,7,8,9];

for(i = 0; i < lista.length; i++){
    console.log(lista[i]);

    if(i > 5){
        break
    }
    console.log(i)

    if(i === 3){
        continue
    }
    console.log(i)
}


// cual es el ambito del bucle

