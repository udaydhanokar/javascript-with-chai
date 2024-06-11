// //for

// for (let i = 0; i < 10; i++) {
    
//     console.log(i) 
// }

for (let i = 1; i <= 10; i++) 
    
    {
     console.log(`Outer loop value: ${i}`);
    for(let j=1; j<=10; j++){
    //    console.log(`Inner loop value ${j} `)
     console.log(i + "*" +j +"=" + i*j);
    
    }
    
}


for (let i = 1; i <= 10; i++) {
    //console.log(`Outer loop value: ${i}`);
   for (let j = 1; j <= 10; j++) {
    //console.log(`Inner loop value ${j} and inner loop ${i}`);
    //console.log(i + '*' + j + ' = ' + i*j );
   }
    
}

let myArray =["Ram","Maa Sita","Lakshaman"]

   for(index=0;index<myArray.length;index++){
    console.log(myArray[index])
}

//-----------------------------------------------
//break and continue

for (let index = 0; index <=20; index++) {
   
    
    if(index==10){
        console.log("10 detected")
        // break;
        continue
    }
    console.log(index)
}