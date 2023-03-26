const guest4 = [`Anas`,`Waseem`,`Monam`,`Hassan`]; //[`Anas`,`Waseem`,`Monam`,`Hassan`]
guest4.unshift (`Daniyal`); //[`Daniyal`,`Anas`,`Waseem`,`Monam`,`Hassan`]
guest4.splice (3, 0, `Hamza`); //[`Daniyal`,`Anas`,`Waseem`,`Hamza`,`Monam`,`Hassan`]
guest4.push (`Umair`); //[`Daniyal`,`Anas`,`Waseem`,`Hamza`,`Monam`,`Hassan`,`Umair`]

guest4.pop(); //[`Daniyal`,`Anas`,`Waseem`,`Hamza`,`Monam`,`Hassan`]
guest4.pop(); //[`Daniyal`,`Anas`,`Waseem`,`Hamza`,`Monam`]

guest4.shift(); //[`Anas`,`Waseem`,`Hamza`,`Monam`]
guest4.shift(); //[`Waseem`,`Hamza`,`Monam`]
guest4.shift(); //[`Hamza`,`Monam`]

for (const guest5 of guest4){
    console.log(`Unfortunately, `+guest5+`! I can invite only two peoples for dinner and you are invited.`)
}