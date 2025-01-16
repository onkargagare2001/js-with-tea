//primitive datatypes >> 
// 7 >> string, number , boolean, bigint, symbol,NUll,  undefined.
//Non primitive datatypes
// 3 >> arrays, functions and objects.

let id=Symbol(12);
let mid=Symbol(12);

//console.log(id === mid); // it will return false because symbol datatype provides uniqueness to variable


//

// function bFunction(){
//     console.log("asascada");
// }

// bFunction();

myobj={
name: "onkasa",
age:23,
prop : function(){
    console.log("knj");
}
};      

myobj.prop();