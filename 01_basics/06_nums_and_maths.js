const score = 400
console.log(score);
const aNumber = new Number(500)
console.log(aNumber)

console.log(aNumber.toString().length)
console.log(aNumber.toFixed(3))

const anotherNumber = 123.8966
console.log(anotherNumber.toPrecision(1))

const hundreds = 100000
console.log(hundreds.toLocaleString('en-IN'))

//***********************Maths**************************
console.log(Math);
console.log(Math.abs(-5));
console.log(Math.round(4.4));
console.log(Math.ceil(5.6))
console.log(Math.ceil(5.1))
console.log(Math.floor(4.9))
console.log(Math.sqrt(25))
console.log(Math.min(13,43,93,49))
console.log(Math.max(13,43,93,49))

console.log((Math.floor(Math.random()*10)+1))
console.log("generate random values between 1 to 10")
const min=10;
const max =20;
console.log(Math.floor(Math.random()*(max-min+1)+min) )
// 11*1+10 =21    |  10*11+10 =

