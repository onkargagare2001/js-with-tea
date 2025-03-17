const myobj={
    name:"abs",
    age:23,
    callFunc:function(){
        // console.log(this.name);
        // console.log(this);

    }
}

// myobj.callFunc();

console.log(this); // print empty object because we r in node environment woithout any context.
//// if we try to get log this in browser then we will get window as gloabal object which provides us events like form submit, click;

// arrow function
// let carP=() => 1+23;
let carP=() => (1+23);

console.log(carP());

