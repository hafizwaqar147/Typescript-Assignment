function make_Tshirt(size:string = `Large`,massege:string = `I love Tyepscript`){
    console.log(`The shirt size is ${size} and it says:${massege} on it!.`);
    }
    
    make_Tshirt();
    make_Tshirt(`small`,undefined);
    make_Tshirt(`Medium`,`Typescript is awesome!`);