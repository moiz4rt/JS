//90. Write a JavaScript program to find the kth greatest element of a given array of integers

let kthGreatest = (arr, place) => {
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
    }
    let arr2 = arrSort(arr);
    return arr2[arr2.length-place];
}

console.log(kthGreatest([-10,-25,-47,-36,0,1], 1))