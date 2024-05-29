let score = false

console.log(typeof (score))

console.log(typeof score)

let valueInNumber = Number(score)
console.log(valueInNumber)

/*
    "33"=> 33
    "33abc" => NaN
    true => 1  false => 0
    undefined => NaN
    null => 0
*/ 

//------------------------------------------------------

let anyvalue = undefined
let bolleanValue = Boolean(anyvalue)
console.log(bolleanValue)

/*
    0 => false
    1=> true
    "" => false
    string => true
    undefined => true
    null => true 
 */

 //-------------------------------------------------
 
 let anyvalueeee = true
 let stringConverter = String(anyvalueeee)
 console.log(stringConverter)
 console.log(typeof (stringConverter))
 /*
    33 => 33(string)

*/
//**********************operations**********************

let value = 10
let negativeVal= -value
console.log(negativeVal)

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2%2)
// console.log(2/2)
// console.log(2**4)



// let str1 = "uday"
// let str2 = " dhanokar"

// let str3 =(str1 + str2)
// console.log(str3)


let j = console.log("2" + "3");
console.log(j);
console.log(typeof j);
console.log("3"+ 3+ 4)
console.log(2 + 3 +"4")

let p= console.log(2 + 3 +"jr")
console.log(p)

console.log(+true)
//console.log(true+)    --nahi chalat
console.log(+"")

let num1,num2,num3

num1 = num2 = num3 =2+2

let gamecounter = 100

gamecounter++
console.log(gamecounter++)

gamecounter1 = 100
++gamecounter1
console.log(gamecounter1)

//-------------------------------------------------
console.log("hi")
let x = 3;
const y = x++;
console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"

