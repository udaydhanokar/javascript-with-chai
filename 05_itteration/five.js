
const coding =["c","c++","java","js","python"]

// coding.forEach( function (item){
//     console.log(item)
// })

// coding.forEach((item)=>{
// console.log(item)
// })


// function naeem(item){
//     console.log(item)
// }
// coding.forEach(naeem)


coding.forEach( (item,index,array)=>{
    console.log(item,index,array)
})


const myCoding=[
    {
        "language":'c',
        "file":"hi.c"
    },
    {
        "language":'c++',
        "file":"hi.cpp"
    },
   
]
myCoding.forEach((item)=>{
    console.log(item.language)
})