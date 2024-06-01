// let createdDate = new Date();
// console.log(createdDate)
// console.log(createdDate.toLocaleDateString())
// console.log(createdDate.toDateString())
// console.log(createdDate.toISOString())
// console.log(createdDate.toJSON())
// console.log(createdDate.toLocaleTimeString())

// console.log(typeof (createdDate))

// let newDate = new Date(2024,5,26,5,30);

let newDate = new Date("1-6-2024");
console.log(newDate.toLocaleString())

//***********time stamp*************** */

// let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(newDate.getTime());


console.log(Date.now())
console.log(Math.floor(Date.now()/1000))

let newDatee = new Date()
console.log(newDatee)
console.log(newDatee.getMonth()+1);
console.log(newDatee.getDay());
console.log(newDatee.getFullYear());

console.log(newDatee.getHours());
console.log(newDatee.getUTCDay());

console.log(newDatee.toLocaleString('default',{
    weekday :"",
  
}))
