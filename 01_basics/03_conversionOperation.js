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