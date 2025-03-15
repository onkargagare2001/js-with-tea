function calcTotal(val1,val2, ...coldroolinput){
  console.log(coldroolinput);
}

// calcTotal(1,34,5,6); // 1 and 34 willgo to val1 and val2 resp and others will go to coldroolinput.


// passing object in function
let schema={
  name:"onkar",
  age:23
}

function myFunc(anyObj){
  console.log(`my name is ${anyObj.name}`)
}

myFunc(schema);


