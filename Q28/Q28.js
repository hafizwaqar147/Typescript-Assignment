"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const personAge = 5;
if (personAge < 2) {
    console.log(`person is a baby`);
}
else if (personAge == 2 || personAge < 4) {
    console.log(`person is a toddler`);
}
else if (personAge == 4 || personAge < 13) {
    console.log(`person is a kid`);
}
else if (personAge == 13 || personAge < 20) {
    console.log(`person is a teenager`);
}
else if (personAge == 20 || personAge < 65) {
    console.log(`person is an adult`);
}
else if (personAge == 65 || personAge > 65) {
    console.log(`person is an elder`);
}
