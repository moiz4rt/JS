//96. Write a JavaScript program to compute the sum of absolute differences of consecutive numbers of a given array of integers.

function computeAbsDiff(arr1){
    let arr2 = [];
    for(let i = 0;i < arr1.length-1;i++){
        arr2.push(Math.abs(arr1[i+1]-arr1[i]));
    }    
    return arr2.reduce((a,b) => a+b);
}

console.log(computeAbsDiff([1, 2, 3, 2, -5]))
