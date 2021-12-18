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

console.log(arrSort([15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,-1,-2,-3]))