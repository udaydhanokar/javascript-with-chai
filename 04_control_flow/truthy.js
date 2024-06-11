const userEmail =[]
if(userEmail){
    console.log("got user email")
}
else{
    console.log("Dont have user email")
}

//falsy value
// false,  0 ,-0,"",BigInt 0n,NaN,null,undefined

//truthy value
// "0","false",[]," ",{},function(){}

if(userEmail.length === 0){
    console.log("array is empty")
}
const emptyObj={}

if(Object.keys(emptyObj).length===0){
    console.log("Object is empty")
}


//nullish coalescing Operator (??):null undefined

let val1;

// val1 = 10??20
//  val1 = null??30
//  val1 = undefined??50
val1 = null??10??20

console.log(val1)

//Terniary Operator

// condition ? true:false
const iceTeaPrice = 100
iceTeaPrice<=80 ? console.log("less than 80") :console.log("greter than 100")