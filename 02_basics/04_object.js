// const trinderuser = new Object();  //singleton construstor

const trinderuser = {}
console.log(trinderuser)
const sym =Symbol("jai shree ram")
trinderuser[sym]=("jai shree ram")
trinderuser.id = "jjdfs",
trinderuser.name= "Uday Dhanokar",
trinderuser.email="udaydhanokar35@gmail.com"
// console.log(trinderuser)


const regularUser ={
    email: "udaydhanokar35@gmail.com",
    fullname:{
        userfullname:{
            firstName:"Uday",
            lastName:"Dhanokar"
        }
    }
}
// console.log(regularUser)

// console.log(regularUser.fullname.userfullname.lastName)

const obj1 ={
    1:"a",
    2:"b",
}

const obj2 ={
    3:"c",
    4:"d"
}

const obj4 ={
5:"e",
6:"f",
}

let obj3= {...obj1,...obj2,...obj4}
let obj3point0=Object.assign({},obj1,obj2,obj4)//to clearly know what is target and what is source we use this syntax
// console.log(obj3)
// console.log(obj3point0)


/*-----------------------------------------*/

const users=[
    {
        id:1,
        email:"udaydhanokar35@gmail.com"
    },
    {
        id:1,
        email:"udaydhanokar35@gmail.com"
    },
    {
        id:1,
        email:"udaydhanokar35@gmail.com"
    }
]

users[1].email
console.log(trinderuser);

console.log(Object.keys(trinderuser))

console.log(Object.values(trinderuser))

console.log(Object.entries(trinderuser))
console.log(trinderuser.hasOwnProperty('email'));


/*---------------------------------------------*/

let course = {
    "course on":'databas',
    price:999,
    courseInstrustor :'Hitesh Chodhary',
}
//we can print courseInstrustor many times such as 1]course.courseInstrustor 2]course.courseInstrustor 3]course.courseInstrustor


let {courseInstrustor:Instrustor}=course
// console.log(courseInstrustor);
console.log(Instrustor);

