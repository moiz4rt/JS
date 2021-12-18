//104. Write a JavaScript program to find two elements of the array such that their absolute difference is not greater than a given integer but is as close to the said integer.

function closerInteger(arr1,num){
    let arr2 = [];
    let x = 0;
    let max = -1;
    for(let i = 0;i < arr1.length;i++){
        for(let j = i+1;j < arr1.length;j++){
            x = Math.abs(arr1[i]-arr1[j]);
            if(x <= num){
                max = Math.max(max, x);
            }
        }
    }
    return max;
}

console.log(closerInteger([12, 10, 33, 44], 40))