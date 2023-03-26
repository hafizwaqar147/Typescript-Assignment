"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function show_magician(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
    return;
}
const magicianNames = [`David Copperfield`, `Doug Henning`, `Lance Burton`];
show_magician(magicianNames);
