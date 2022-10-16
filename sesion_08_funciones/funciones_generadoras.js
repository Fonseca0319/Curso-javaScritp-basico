
function* generaID(){
    let id = 0;
    while(true){
        id++
       
        if(id > 10){
            return
        }
        yield id
    }
}

const gen = generaID();


console.log(gen.next());

console.log(gen.next());

console.log(gen.next());

console.log(gen.next());

console.log(gen.next());

console.log(gen.next());

console.log(gen.next());

console.log(gen.next());

console.log(gen.next());

console.log(gen.next());

console.log(gen.next());