"use strict" // treat all js code as newer version also it avoids common errors;
//console.log(3);

// number range 2 to power 53,Bigint,string,boolean,
// null>>standalone value;
// undefined >>
// symbol >> uniqueness


// above are primitive datatypes

// non premitive datatypes
// object

const Colors=({
    RED: "red",
    GREEN: "green",
    BLUE: "blue",
  });
  
  Colors.RED = "yellow"; // This won't work, as the object is frozen
  console.log(Colors.RED); // Output: "red"
  