const name = "uday"
const repocounter = 100

console.log(`hi my name is ${name} and my kills are ${repocounter} values`)

let gameName = new String("Mario") //new method of declaration of string
console.log(gameName[2]);
console.log(gameName.__proto__);

console.log(gameName.charAt(3));
console.log(gameName.indexOf("i"))

console.log(gameName.length)
console.log(gameName.toUpperCase());


const newString = gameName.slice(-1,5)
console.log(newString)
const anothernewString = gameName.substring(0,3)
console.log(anothernewString)


const url="https://uday.com/uday%20dhanokar"

console.log(url.replace("%20","-"))
console.log(url.includes("uday%20"));
console.log(url.includes("Jai"));

console.log(url.includes("oka"));

let newStrings = new String('hello-word-how-are-you')
console.log(newStrings.split('-'))


