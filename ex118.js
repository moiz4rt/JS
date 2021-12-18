//95. Write a JavaScript program to replace all the numbers with a specified number of a given array of integers.

function arrayNumberReplacer(arr1,m,n){
    for(let i = 0;i < arr1.length;i++){
        if(arr1[i] === m){
            arr1[i] = n;
        }
    }
    return arr1;
}

console.log(arrayNumberReplacer([1, 2, 3, 2, 2, 8, 1, 9],2,5))