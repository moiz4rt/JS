//102. Write a JavaScript program to find the number of inversions of a given array of integers. 

function inversionFinder(arr1){
    let num = 0;
    for(let i = 0;i < arr1.length;i++){
        for(let j = i + 1; j < arr1.length;j++){
            if(arr1[i] > arr1[j]){
                num++;
            }
        }
    }
    return num;
}

console.log(inversionFinder([9, 8, 7, 6, 5, 4, 3, 2, 1]))