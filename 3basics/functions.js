


function sayMyName(){
    console.log("S");
    console.log("A");
    console.log("H");
    console.log("I");
    console.log("L");
}

//sayMyName()

// function addTwoNumbers(Number1, Number2){
//     console.log(Number1 + Number2);
// }

// function addTwoNumbers(Number1, Number2){
//     // let result = Number1 + Number2
//     // return result
//     return Number1 + Number2
   
    
// }
// const result = addTwoNumbers(3,5)

// console.log("Result: ", result);

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a username");
        return 

    }
    return `${username} just logged in`
}


//console.log(loginUserMessage("Sahil"));
console.log(loginUserMessage());

