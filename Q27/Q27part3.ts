//Define variable is string(compulsory) otherwise error will occour

const alienColor33:string = `red`;

if(alienColor33 === `green`){
    console.log(`The player just earned 5 points.`);
}else if(alienColor33 === `yellow`){
    console.log(`The player just earned 10 points.`);
}else if(alienColor33 === `red`){
    console.log(`The player just earned 15 points.`);
}else{
    console.log(`No Output`)
}