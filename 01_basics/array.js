// let array=[1,2,3,4];

// console.log(array);
// array.push(3);
// array.shift();

// array.unshift(7);

let array=[1,3,4,'y',6,'f',8,3];

// console.log(array.slice(2,3));
// there is huge difference between slice and splice


// console.log(array.splice(2,3));
// console.log(array);


// array basics another chapter
// concat arrays

const numArray=[1,3,5,7];
const evenNumArray = [2,4,6,8];

// first method
// let allArray=numArray.concat(evenNumArray);

// second method
// let allArray=[...evenNumArray,...numArray];
//console.log(allArray);


// let arrayWithDepth=[1,2,5,[2,7,9],[4,9,2]];
// let simplified=arrayWithDepth.flat(2); // we alos can give infinity in place of 2 
// console.log(simplified);

// let check = Array.isArray("ONKAR");
// let check = Array.isArray([2,3,434,45]);
// let check = Array.from("ONKAR");
let check = Array.apply(["ONKAR",'d',9]);
console.log(check); 

