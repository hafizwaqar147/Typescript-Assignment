let fruit9 = `Strawberry`;
console.log(`Is fruit9 == 'STRAWBERRY' && fruit9 === 'STRAWBERRY'? I predict False.`);
console.log(fruit9 == `STRAWBERRY` && fruit9 === `STRAWBERRY`);

let fruit7 = `STRAWBERRY`;
console.log(`Is fruit7 == 'Strawberry' && fruit7 === 'Strawberry'? I predict False.`);
console.log(fruit7 == `Strawberry` && fruit7 === `Strawberry`);

let fruit71 = `STRAWBERRY`;
console.log(`Is fruit71 == 'Strawberry' && fruit71 === 'Strawberry'? I predict False.`);
console.log(fruit71 == `Strawberry` && fruit71 === `Strawberry`);


let fruit8 = [`Strawberry`,`Mango`,`Apple`,`Grapes`];
console.log(`Is an item in a fruit8 = [Strawberry,Mango,Apple,Grapes]? I predict True.`);
console.log(fruit8.includes(`Strawberry`));


let fruit81 = [`Strawberry`,`Mango`,`Apple`,`Grapes`];
console.log(`Is an item in a fruit81 = [Strawberry,Mango,Apple,Grapes]? I predict False.`);
console.log(fruit8.includes(`Orange`));


let fruit1 = `Apple`;
console.log(`Is fruit1 <= 'Apple' && > fruit1 'Apple'? I predict False.`);
console.log(fruit1 <= `Apple` && fruit1 > `Apple`);

let fruit21 = `Banana`;
console.log(`Is fruit21 > 'Banana' && fruit21 < 'Banana'? I predict False.`);
console.log(fruit21 > `Banana` && fruit21 < `Banana`);

let fruit31 = `Mango`;
console.log(`Is fruit31 > 'Mango' || fruit31 < 'Mango'? I predict False.`);
console.log(fruit31 > `Mango` || fruit31 < `Mango`);

let fruit41 = `Orange`;
console.log(`Is fruit41 != 'Orange' && fruit41 == 'Orange'? I predict False.`);
console.log(fruit41 != `Orange` && fruit41 == `Orange`);