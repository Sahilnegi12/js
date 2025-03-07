const user ={
    username: "sahil",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);  
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

//console.log(this);

// function chai(){
//     let username = "sahil"
//     console.log(this);
// } 
//  chai()

// const chai = function () {
//     let username ="shail"
//     console.log(this);
    
// }
// chai()

// const chai =()=> {
//     let username ="shail"
//    console.log(this);
    
// }
// chai()


// const addTwo=(num1, num2)=>{
//     return num1 + num2
// }

//const addTwo=(num1, num2)=>  num1 + num2  //implicit return
//const addTwo=(num1, num2)=> (num1 + num2)  //implicit return
//const addTwo=(num1, num2)=>( {username: "sahil"} ) //implicit return


//console.log(addTwo(3, 4));

