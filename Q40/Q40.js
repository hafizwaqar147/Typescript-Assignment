"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function make_album(album, artist, track) {
    const albumObject = { album, artist };
    if (track !== undefined) {
        albumObject.track = track;
    }
    return albumObject;
}
console.log(make_album(`Coke Studio`, `Atif Aslam`));
console.log(make_album(`Biilo de Ghar`, `Abrar-ul-Haq`, 12));
console.log(make_album(`Young Tarang`, `Zoheb Hassan`));
