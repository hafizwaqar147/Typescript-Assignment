function show_magician(magicians:string[]){
    for(const magician of magicians){
        console.log(magician);
    }
    return;
}
const magicianNames = [`David Copperfield`,`Doug Henning`,`Lance Burton`];

function make_great(magicians:string[]){
    const greatMagician = [];
    for(let i = 0 ; i < magicians.length; i++){
       greatMagician[i] = `The Great ${magicians[i]}`;
    }
    return greatMagician;
}

const greatMagicianName:any = make_great([...magicianNames]);
console.log(`Original Magician Names:`);
show_magician(magicianNames);
console.log(`Magician Names with "The Great" added:`);
show_magician(greatMagicianName);