//110. Write a JavaScript program to find the number of even values in sequence before the first occurrence of a given number.

function evenNumbers(arr1, num){
    let arr2 = [];
    for(let i = 0;i < arr1.indexOf(num);i++){
        if(arr1[i] % 2 ==0){
            arr2.push(arr1[i]);
        }
    }
    return arr2.length;
}

console.log(evenNumbers([1,3,5,6,7,8], 6))