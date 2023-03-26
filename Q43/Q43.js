var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function show_magician(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
    return;
}
var magicianNames = ["David Copperfield", "Doug Henning", "Lance Burton"];
function make_great(magicians) {
    var greatMagician = [];
    for (var i = 0; i < magicians.length; i++) {
        greatMagician[i] = "The Great ".concat(magicians[i]);
    }
    return greatMagician;
}
// function make_great(magicians: string[]): string[] {
//     const greatMagicians = [];
//     for (let i = 0; i < magicians.length; i++) {
//         greatMagicians[i] = `The Great ${magicians[i]}`;
//     }
//     return greatMagicians;
// }
var greatMagicianName = make_great(__spreadArray([], magicianNames, true));
console.log("Original Magician Names:");
show_magician(magicianNames);
console.log("Magician Names with \"The Great\" added:");
show_magician(greatMagicianName);
