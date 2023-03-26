const animalNames = [`dog`,`cat`,`horse`];

for(const animalName of animalNames){
    console.log(animalName);
    console.log(`A ${animalName} would make a great pet.`);
}

console.log(`The animals which can be considered pet animals are ${animalNames}.But the ${animalNames [0]} would make a great pet.`);