// Immediately invoked function expressions.
// let name="onkar";

// (function one(name){
//     console.log(name);
    
// })(name);

// named IIFE means you are giving name to IIFE
// (function one(name){
//     console.log(name);
    
// })(name);

//for below no name is there for function so we can called it as non named IIFE
// (function (){
//     console.log("asasasas");
    
// })();

// using arrow function
// (() =>{
//     console.log("asasasas");
    
// })();


const test={
    name:"john",
    gender:"Male",
    myFuc:function(){
        console.log(this.name);
    }
}

test.myFuc()