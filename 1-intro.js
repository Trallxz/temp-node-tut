// const amount = 9

// if(amount < 10){
//     console.log('small number');
// }
// else{
//     console.log('large number');
// }

// console.log(`hey it's my first node app!!!`);



// GLOBALS - NO WINDOW !!!!


//__dirname - path to current directory
// __filename - filename
//require - function to use modules (commonJS)
// module - info about current module (file)
//process - info about env where the program is being executed

const amount = 15

if(amount < 10){
    console.log('small number');
}
else{ setInterval(() =>{
    console.log(`large number`);
}, 5000)
    
}

console.log(`hey it's my first node app!!!`);
