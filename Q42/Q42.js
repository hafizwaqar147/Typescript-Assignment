function show_magician(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
    return;
}
var magicianNames = ["David Copperfield", "Doug Henning", "Lance Burton"];
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "The Great ".concat(magicians[i]);
    }
    return;
}
make_great(magicianNames);
show_magician(magicianNames);
