let guest3 = [`Anas`,`Waseem`,`Monam`,`Hassan`];

guest3.unshift (`Daniyal`);
guest3.splice(3, 0, `Hamza`);
guest3.push (`Umair`);

for (let guest4 of guest3){
    console.log(`Hello, `+guest4+`! I would like to invite you to dinner next sunday at my home.I would be an honor to have you there.`);   
}