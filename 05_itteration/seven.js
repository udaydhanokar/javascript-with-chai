const arr =[1,2,3,4,5,6,7,8,9,10]

// let res=arr.map((item)=>{return item +10})
// console.log(res)

let res = arr
            .map((item)=>{return item*10})
            .map((item)=>{return item+1})
            .filter((item)=>item>=40)

            console.log(res)