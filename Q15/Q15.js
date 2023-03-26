"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const guests1 = [`Anas`, `Waseem`, `Monam`, `Hassan`];
console.log(`Unfortunately, ` + guests1[1] + ` cannot make it to the dinner.`);
guests1[1] = `Ibrahim`;
for (const guests2 of guests1) {
    console.log(`Dear ` + guests2 + `,! I would like to invite you to dinner next sunday at my home.I would be an honor to have you there.`);
}
