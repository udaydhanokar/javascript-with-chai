// Immediately Invoked Function Expressions (IIFE)

//use when we required condition like to save data in database as we start our application

// we use this to avoid pollution in global scope
// to the particlular scope to avoid global pollution in scope scope 

(function chai()//named iife  asked in interview
{  
    console.log(  `Db connected`)
}
)();  //without ; net line is not will execute in case of iife funtion
((name)=>{
    console.log(`Db connected two ${name}`)
}
)("uday dhanokar")
//()()



// ( (name) => {
//     console.log(`DB CONNECTED TWO ${name}`);
// } )('uday')