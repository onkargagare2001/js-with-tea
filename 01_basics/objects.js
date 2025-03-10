const sym=Symbol();

const user={
    name:"abc",
    [sym]:1,
    role:"xyz"
}
// console.log(typeof user.sym);

// Object.freeze(user);  its freezes object changes after can not be done

// created object

// let user={
//     name:"abc",
//     role:"xyz"
// }
// user={name:'onkar'};

// console.log(user["name"]);
// console.log(user.sym);

// user.greet=function(){
//    console.log(`hello therer ${this.role}`);
// }
// console.log(user.greet());
// user.greet();


// symbol datatype of js provides uniqueness to value
// const STATUS = {
//     SUCCESS: Symbol("success"),
//     FAILURE: Symbol("failure")
// };

// console.log(STATUS.SUCCESS === STATUS.FAILURE); // false

// concat two objects
const obj1={a:1,b:3};
const obj2={d:23,f:34};

// let objf=Object.assign(obj1,obj2); 
let objf={...obj1,...obj2}; // suggestes way to concat two objects
// console.log(objf);

// let b=Object.keys(obj1);
// let b=Object.values(obj1);
let b=Object.entries(obj1);
// console.log(b);


//******* object destructure ****//
const myObj={
    name:"onkar",
    age:23
}
// const {name:myName}=myObj
const {name}=myObj
console.log(name);