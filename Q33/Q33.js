"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ordinalNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
for (const ordinalNum2 of ordinalNum) {
    let ordinalNum3;
    if (ordinalNum2 === 1) {
        ordinalNum3 = `st`;
    }
    else if (ordinalNum2 === 2) {
        ordinalNum3 = `nd`;
    }
    else if (ordinalNum2 === 3) {
        ordinalNum3 = `rd`;
    }
    else {
        ordinalNum3 = `th`;
    }
    console.log(`${ordinalNum2}${ordinalNum3}`);
}
