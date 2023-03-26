let car = 'subaru';
console.log(`Is car == 'subaru'? I predict True.`);
console.log(car == 'subaru');

let car2 = `Toyota`;
console.log(`is car == 'Toyota'? I predict true`);
console.log(car2 === `Toyota`);

let car3 = `Honda`;
console.log(`Is car >= 'Honda'? I predict True.`);
console.log(car3 >= `Honda`);

let car4 = `Hyundai`;
console.log(`Is car <= 'Honda'? I predict True.`);
console.log(car4 <= `Hyundai`);

let car5 = `Suzuki`;
console.log(`Is car <= 'Suzuki' && car >= 'Suzuki'? I predict True.`);
console.log(car5 <= 'Suzuki' && car5 >= 'Suzuki');

let fruit = `Apple`;
console.log(`Is fruit <= 'Apple' && > fruit 'Apple'? I predict False.`);
console.log(fruit <= `Apple` && fruit > `Apple`);

let fruit2 = `Banana`;
console.log(`Is fruit2 > 'Banana' && fruit2 < 'Banana'? I predict False.`);
console.log(fruit2 > `Banana` && fruit2 < `Banana`);

let fruit3 = `Mango`;
console.log(`Is fruit3 > 'Mango' || fruit3 < 'Mango'? I predict False.`);
console.log(fruit3 > `Mango` || fruit3 < `Mango`);

let fruit4 = `Orange`;
console.log(`Is fruit4 != 'Orange' && fruit4 == 'Orange'? I predict False.`);
console.log(fruit4 != `Orange` && fruit4 == `Orange`);

let fruit5 = `Grapes`;
console.log(`Is fruit5 != 'Orange' || fruit5 > 'Orange'? I predict False.`);
console.log(fruit5 != 'Orange' || fruit5 > 'Orange');