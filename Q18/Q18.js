"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const worldPlace = [`China`, `New Zealand`, `Qatar`, `Turkey`, `Australia`];
for (const worldPlaces of worldPlace) {
    console.log(worldPlaces);
}
const sortedArray = [...worldPlace].sort();
console.log(sortedArray);
console.log(worldPlace);
const unsortedArray = [...sortedArray].reverse();
console.log(unsortedArray);
console.log(worldPlace);
const reverseOrder = [...worldPlace].reverse();
console.log(reverseOrder);
const sortedArray2 = [...reverseOrder].sort();
console.log(sortedArray2);
