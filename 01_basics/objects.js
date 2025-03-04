const sym=Symbol();

const user={
    name:"abc",
    [sym]:1,
    role:"xyz"
}
console.log(typeof user.sym);

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
