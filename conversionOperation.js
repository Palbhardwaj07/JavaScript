// let score = "33abc"     //"33" => string, 33 => number
// let score = null
// let score = undefined
// let score = true
// let score = false
// let score = ""

// console.log(typeof score);       
// console.log(typeof (score));      

// let valueInNumber = Number(score); // convert string to number
// console.log(typeof valueInNumber); // number
// console.log(valueInNumber);        // "" => 0, "33" => 33, 33 abc => NaN (Not a Number, because "abc" is not a number),   null => 0, undefined => NaN, true => 1, false => 0


// let isLoggedIn = 1;
// let isLoggedIn = "";
// let isLoggedIn = "Pal";
// let booleanIsLoggedIn = Boolean(isLoggedIn); // convert boolean to boolean (no change)
// console.log(booleanIsLoggedIn); // "Pal" => true, 1 => true, "" => false, 0 => false, null => false, undefined => false, NaN => false


let someNumber = 33
let stringNumber = String(someNumber); // convert number to string
console.log(typeof stringNumber); // string
console.log(stringNumber); // "33"