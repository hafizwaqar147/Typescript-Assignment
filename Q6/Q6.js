"use strict";
//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
let personName = `\t    Hafiz Ansari   \n`;
let personName2 = `\t    Hafiz Ansari\n   `;
console.log(personName + personName2);
console.log(personName.trim() + personName2);
console.log(personName + personName2.trim());
console.log(personName.trim() + personName2.trim());
