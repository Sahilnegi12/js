//var c = 300
let a =300

if(true){
    let a = 10
    const b = 20
    
}

//console.log(a);
//console.log(b);
//console.log(c);

function one(){
    const username = "sahil"

    function two(){
        const website = "youtube"
        console.log(username)
    }
  //  console.log(website);

    two()
    
}

//one()

if (true) {
    const username = "sahil"
    if (username === "sahil") {
        const website = " youtube"
       // console.log(username  + website);
        
    }
  //  console.log(website);
    
}

//console.log(username);

// interesting 

addone(5)
function addone(num){
     return num + 1
}



//addTwo(5)  // it will show error because the function is derived in a variable
const addTwo = function(num){
    return num + 2
}

