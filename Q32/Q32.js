"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const current_users = [`axel`, `mark`, `jude`, `john`, `petter`];
const new_users = [`Eric`, `JOHN`, `kim`, `david`, `mark`];
for (const newUserName of new_users) {
    if (current_users.some(username1 => username1.toLowerCase() === newUserName.toLowerCase())) {
        console.log(`person will need to enter new user name,${newUserName} is not availible.`);
    }
    else {
        console.log(`${newUserName} user name is availible.`);
    }
}
