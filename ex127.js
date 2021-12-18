//108. Write a JavaScript program to create the dot products of two given 3D vectors.

function dotProductVector(arr1, arr2){
    let dotProduct = 0;
    for(let i = 0;i < 3;i++){
        dotProduct += arr1[i]*arr2[i];
    }
    return dotProduct;
};

console.log(dotProductVector([1,2,3],[1,2,3]))