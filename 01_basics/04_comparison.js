// console.log(2>1)
// console.log(2>=1)
// console.log(2<1)
// console.log(2==1)
// console.log(2!=1)

// console.log("3" > 1)// js automatically convert string into number butt still a problem we should use same data types for comparisons
// console.log("3" < 1)
// console.log(true> false)
// console.log(false>true)

//------------------------------------------------------

console.log(null>0)
console.log(null<0)
console.log(null>=0)
console.log(null<=0)
// this cause due to reason is that an equality check == and comparisons > <> = <= work differently
// comparison convert null to a number, treating it as 0 that why (3) null>=0   is true and null>0 is false
console.log("hi")
console.log(undefined==0)
console.log(undefined>0)
console.log(undefined<0)

//strict comparison ===