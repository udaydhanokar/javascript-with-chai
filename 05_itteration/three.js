// for of 

// ["","",""]  //common to apply 
// [{},{},{}]


// let array=["ram","krishna","narayan"]

// for (const iterator of array) {
//     console.log(iterator)
// }


let array=["ram","krishna","narayan"]

for (const iterator of array) {
    // console.log(iterator)
}

let Stringsss= "hello world"

for(const iterator of Stringsss){
    // console.log(iterator)
}

let Objectt =[{
    name:"Uday",
    email:"uday@gmail.com"
},{
    name:"Anuj",
    email:"anujdever@gmail.com"
}]

for (const iterator of Objectt) {
    console.log(iterator.name)
}


//Maps //real order la yad thavte ani unique value store karte

const map = new Map()
map.set("In","India")
map.set("USA","United States of America")
map.set("Fr","France")
map.set("In","India") //Not store the dublicate value //only unique value

// console.log(map)
for (const iterator of map) {
    console.log(iterator)
}
for (const [key,value] of map) {
    console.log(key,"-",value)
}

let objectu = {
    'game1':'NFS',
    'game2':'Spiderman'
}
for (const [key,value] of objectu) {
    console.log(key,":-",value);
}


