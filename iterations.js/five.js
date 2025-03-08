const coding = ["js", "rb", "java", "py", "cpp"]

// coding.forEach(function (val){
//     console.log(val);
    
// })

// coding.forEach( (item) => {
//    console.log(item);
   
// })

// function printme(item){
//     console.log(item);
    
// }

// coding.forEach(printme)

// coding.forEach( (index, item, arr)=> {
//     console.log(index, item, arr);  
// })

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
  
})