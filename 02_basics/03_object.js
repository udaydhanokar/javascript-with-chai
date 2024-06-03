//singleton --constructor ni bante literals ni nahi
//object  create

//object literals

const mysymb = Symbol("key1")

const jsUser = {
    name: "Uday",
    "nav": "Uday Dhanokar ", //"nav" software consider in ""
    "full name": "Ratan Jamshed Tata",
    email:"udaydhanokar@gmail.com",
    [mysymb] : "key1",
}
console.log(jsUser.name)//not too correct way to access
console.log(jsUser["nav"]) //more right way to access object value
console.log(jsUser["full name"])   //cant give jsUser.full name
console.log(typeof jsUser[mysymb])
jsUser.email="udaydhanokar35@gmail.com"

console.log(jsUser["email"]);
// Object.freeze(jsUser)
jsUser.email="elonMusk@gmail.com"

console.log(jsUser["email"]);
console.log(jsUser)

jsUser.greetings = function(){
    console.log(`hi my name is ${this.name}`)
}
console.log(jsUser.greetings())