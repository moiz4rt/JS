//107. Write a JavaScript program to find the number of sorted pairs formed by its elements of a given array of integers such that one element in the pair is divisible by the other one.

function pairsDivisors(arr1){
    let arr2 = [];
    for(let i = 0;i < arr1.length;i++){
        for(let j = i+1;j < arr1.length;j++){
            arr2.push([arr1[i],arr1[j]]);
        }
    }
    let arr3 = [];
    for(let i = 0; i < arr2.length;i++){
        if(arr2[i][1] % arr2[i][0] === 0 || arr2[i][0] % arr2[i][1] === 0){
            arr3.push(arr2[i]);
        }
    }
    return arr3.length;
}

console.log(pairsDivisors([2, 4, 6]))