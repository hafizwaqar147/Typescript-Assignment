function show_magician(magicians:string[]){
    for(const magician of magicians){
        console.log(magician);
    }
    return;
}
const magicianNames = [`David Copperfield`,`Doug Henning`,`Lance Burton`];

function make_great(magicians:string[]){
    for(let i = 0 ; i < magicians.length; i++){
       magicians[i] = `The Great ${magicians[i]}`;
    }
    return;
}

make_great(magicianNames);
show_magician(magicianNames);