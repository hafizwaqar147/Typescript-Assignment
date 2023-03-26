//Define variable is string(compulsory) otherwise error will occour

const alienColor3:string = `Green`;

if(alienColor3 == `Green`){
    console.log(`The player just earned 5 points.`);
}else if(alienColor3 === `Yellow`){
    console.log(`The player just earned 10 points.`);
}else if(alienColor3 === `Red`){
    console.log(`The player just earned 15 points.`);
}