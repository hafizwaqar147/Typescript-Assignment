//Define variable is string(compulsory) otherwise error will occour

const alienColor32:string = `yellow`;

if(alienColor32 === `green`){
    console.log(`The player just earned 5 points.`);
}else if(alienColor32 === `yellow`){
    console.log(`The player just earned 10 points.`);
}else if(alienColor32 === `red`){
    console.log(`The player just earned 15 points.`);
}else{
    console.log(`No Output`)
}