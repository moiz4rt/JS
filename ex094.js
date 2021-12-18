//Create a function which returns the number of true values there are in an array.

let arr1 = [true, true, false, true, true]

let howMuchTrue = arr1.reduce((a,b) => a+b);

console.log(howMuchTrue)