"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function describe_City(city, country = `Pakistan.`) {
    console.log(`${city} is in ${country}`);
}
describe_City(`Lahore`);
describe_City(`Karachi`);
describe_City(`Peshawar`);
describe_City(`Riyadh`, `Saudi Arabia.`);
