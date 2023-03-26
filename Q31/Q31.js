"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let users = [`admin`, `axel`, `mark`, `jude`, `john`, `petter`];
users.pop();
users.shift();
users.pop();
users.shift();
users.pop();
users.shift();
if (users.length === 0) {
    console.log(`we need to find some users!`);
}
