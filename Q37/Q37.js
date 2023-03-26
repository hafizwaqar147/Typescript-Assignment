"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function make_Tshirt(size = `Large`, massege = `I love Tyepscript`) {
    console.log(`The shirt size is ${size} and it says:${massege} on it!.`);
}
make_Tshirt();
make_Tshirt(`small`, undefined);
make_Tshirt(`Medium`, `Typescript is awesome!`);
