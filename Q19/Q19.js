"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dinnerGuest = [`Anas`, `Waseem`, `Monam`, `Hassan`];
const dinnerGuest2 = [...dinnerGuest].sort();
for (const dinnerGuests of dinnerGuest2) {
    console.log(`Dear ` + dinnerGuests + `! I would like to invite you to dinner next sunday at my home.I would be an honor to have you there.`);
}
const dinnerGuest3 = [...dinnerGuest2].reverse();
for (const dinnerGuest4 of dinnerGuest3) {
    console.log(`Dear ${dinnerGuest4} I would like to invite you to dinner next sunday at my home.I would be an honor to have you there.`);
}
