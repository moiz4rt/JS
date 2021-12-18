//Create a function that takes in an array (slot machine outcome) and returns true if all elements in the array are identical, and false otherwise. The array will contain 4 elements.

function areAllTheSame(arr1){
    let checker = 0;
    for(let i = 0;i < arr1.length;i++){
        checker += (arr1[i+1] === arr1[i])?1:0;
    }
    return checker+1 === arr1.length;
}

console.log(areAllTheSame([1,1,1,1]))