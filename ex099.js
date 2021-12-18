//Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.

function multiplesArray(num, length){
    let arr1 = [];
    for(let i = 0; i < length; i++){
        arr1.push(num*(i+1));
    }
    return arr1;
};

console.log(multiplesArray(3,7));