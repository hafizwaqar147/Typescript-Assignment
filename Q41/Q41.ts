function show_magician(magicians:string[]){
    for(const magician of magicians){
        console.log(magician);
    }
    return;
}

const magicianNames = [`David Copperfield`,`Doug Henning`,`Lance Burton`];
show_magician(magicianNames);