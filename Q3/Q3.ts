let personName1 = "Hafiz M.Waqar Khalid";
console.log("Lowercase; " + personName1.toLowerCase());
console.log("Uppercase: " + personName1.toUpperCase());

console.log(`Lowercase: ${personName1.toLowerCase()}`);
console.log(`Uppercase: ${personName1.toUpperCase()}`);

let personName = "Hafiz M.Waqar Khalid";


// Convert the first letter of each word to uppercase
let words = personName.split(" ");
for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substring(1);
}
let titleCaseName = words.join(" ");
console.log("Titlecase: " + titleCaseName);