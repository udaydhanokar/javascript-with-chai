let arr =[1,2,3,4]

let res=arr.reduce((acc,currVal)=>{
    console.log(`acc:${acc} and currVal:${currVal}`)
  return acc+currVal 
},0)
console.log(res)





const shoppingCard = [
  {
    name:"c",
    price: 999
  },
  {
    name:"java",
    price: 1299
  },
  {
    name:"JS",
    price: 1999
  }
]

     const result=shoppingCard.reduce((acc,item)=>{
        return acc+item.price
      },0)

      console.log(result)