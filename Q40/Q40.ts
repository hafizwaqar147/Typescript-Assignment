function make_album(album:string,artist:string,track?:number){
    const albumObject:any = {album, artist};
    if(track !== undefined){
        albumObject.track = track;
    }
    return albumObject;
}

console.log(make_album(`Coke Studio`,`Atif Aslam`));
console.log(make_album(`Biilo de Ghar`,`Abrar-ul-Haq`,12));
console.log(make_album(`Young Tarang`,`Zoheb Hassan`));