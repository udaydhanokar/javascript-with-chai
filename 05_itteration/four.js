const myObj ={
    js : "java script",
    cpp : "C++",
    rb : "ruby",
    swift : "swift by apple"
}

for (const key in myObj) {
    console.log(`${key} is a shortcut for ${myObj[key]}`)
}

const programming = ["js","rb","py","java","cpp"]

for (const key in programming) {
//    console.log(programming[key])
}



const map = new Map()
map.set("In","India")
map.set("USA","United States of America")
map.set("Fr","France")
map.set("In","India") //Not store the dublicate value //only unique value

// console.log(map)
for (const key in map) {
    console.log(key)
}
