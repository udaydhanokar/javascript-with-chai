
function name(){
    console.log("U");
    console.log("D")
    console.log("A");
    console.log("Y")
}
// name()

// function addi(num1,num2){
//     let addition = num1 + num2
//      console.log(addition) ;
//  }

// addi(339,1)

 function add(num1,num2){
//    let addition = num1 + num2
//     return addition;
        return num1+num2
}
// add(3,4)
let result =add(2,3)
console.log("Result:",result)

function logginUserMessage(username="mrUnknown"){
    if (!username){
        return `please enter corrct value`;
        
    }



    // if(username===undefined)
    //     {
    //         //// console.log("please enter correct value")
    //         return `please enter corrct value`
    //     }
    return `welcome ${username} you loggin in successfully `
}
//  console.log(logginUserMessage("Uday"))
// console.log(logginUserMessage())


// function calculateCartPrice(...val){
// console.log(val)
// }
// calculateCartPrice(129,323,434)

function calculateCartPrice(val1,val2,...val3){
    console.log(val3)
    }
    calculateCartPrice(129,323,434,322)

    
    








let user ={
    name:'Uday',
    price:'400',
    email:"udaydhanokar35@gmail.com"
}

function handleObject(anyobject){
    return `hi ${anyobject.name} order a grocrary of cost ${anyobject.price}`
}
// let resultt=handleObject(user)
let resultt=handleObject({
    name:'uday',
    price:2999
})
// console.log(resultt);


let arr=[1,2,3,4,5,6]

function arrinputer(arrayprinter){
    console.log(arrayprinter[1])
}//
// arrinputer(arr)
 arrinputer([1,22,3,4])

