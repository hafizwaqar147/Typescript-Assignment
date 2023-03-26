"use strict";
//Define variable is string(compulsory) otherwise error will occour
Object.defineProperty(exports, "__esModule", { value: true });
const alienColor32 = `yellow`;
if (alienColor32 === `green`) {
    console.log(`The player just earned 5 points.`);
}
else if (alienColor32 === `yellow`) {
    console.log(`The player just earned 10 points.`);
}
else if (alienColor32 === `red`) {
    console.log(`The player just earned 15 points.`);
}
else {
    console.log(`No Output`);
}
