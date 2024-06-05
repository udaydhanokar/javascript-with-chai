var c = 330
let a =300
if (true) {    //scope cha andar sagla block scope ani scope cha baher sagla global scope 
const a=3
let b=4
c=3
console.log("inner:",a)
}
console.log(a)
// console.log(a);
// console.log(b);
console.log(c);
