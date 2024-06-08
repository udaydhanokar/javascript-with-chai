// const user ={
//     username:"uday",
//     price:999,

//     welcomeUser:function(){
//         console.log(`${this.username},welcome to the website`)
//         console.log(this)
//     }

// }
// user.welcomeUser()
// user.username="sam";
// user.welcomeUser()

// console.log(this)

//-----------------------------------------------
// chai()
// function chai(){//object cha andar work karte this, function cha nahi
//     let username ="uday"
//     console.log(this)
//     console.log(this.username)
// }

// chai()


// let chai = function(){
//     let username ="uday"
//     console.log(this)
//     console.log(this.username)
// }
// chai()



//arrow function

// const chai = ()=>{
// let username ="uday dhanokar"
// console.log(this.username);
// console.log(this)
// }
// chai()


const addTwo = (num1,num2)=>{
    return num1+num2 // it's called explicit return
}
console.log(addTwo(4,4))

const addit = (num1,num2) => num1+num2 //implicit return
console.log(addit(2,5))

const addition = (num1,num2) => (num1+num2)
console.log(addition(2,0))

const twoaddno =  () => ({username:"hitesh"})

console.log(twoaddno())

// const myArray =[2,58,4,3,8,4,8]
// myArray.forEach()