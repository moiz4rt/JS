//91. Write a JavaScript program to find the maximum possible sum of some of its k consecutive numbers (numbers that follow each other in order.) of a given array of positive integers.

function maxSum(arr2, k) {
    let sumArr = arr1 => {
        let arrSum = [];
        for (let i = 1; i < arr1.length; i++) {
            arrSum.push(arr1[i] + arr1[i - 1]);
        }
        return arrSum;
    };
    let arrSort = arr1 => {
        arr1.sort();
        for (let j = 0; j < arr1.length; j++) {
            for (let i = 1; i < arr1.length; i++) {
                if (arr1[i] < arr1[i - 1]) {
                    [arr1[i], arr1[i - 1]] = [arr1[i - 1], arr1[i]];
                }
            }
        }
        return arr1;
    };
    let arr3 = arrSort(sumArr(arr2));
    return arr3[arr3.length - 1];
}

console.log(maxSum([3,8,4,10,2,1]))