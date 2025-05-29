"use strict"; // treat all the JS code as newer version

// alert(3 + 3)  //we are using nodejs and not browser, so alert will not work
// console.log(3 + 3) // this will work in nodejs

// console.log(3 + 3)   console.log("Hello World")   // this will not give the output
// console.log(3 + 3);  console.log("Hello World");   // this will give the output but it is not a good practice   // code readability should be maintained

let name = "Pal";     // string literal, can be single or double quotes
let age = 20;         // number literal, no quotes
let isLoggedIn = true; // boolean literal, can be true or false

// primitive data types in JavaScript
// number => 2 to power 53
// bigint => 2 to power 53 and above, can be used for large numbers
// string => single or double quotes, prefered is double quotes
// boolean => true or false
// null => empty value, no value assigned, standalone value
// undefined => variable is declared but not assigned any value, it is a type itself
// symbol => unique and immutable value, used for unique identifiers


// object

console.log(typeof "Pal");        // string
console.log(typeof undefined);    // undefined
console.log(typeof null);        // object (this is a bug in JavaScript)
// null is a object