// IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)


// function chai(){
//     console.log(`DB CONNECTED`);
    
// }
// chai()

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
    
})();

// unnamed IIFEf
( (name)=>{
    console.log(`DB CONNECTED TO ${name}`);
    
})('sahil')
 
