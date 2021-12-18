function totalVolume(arr1){
    let arr2 = [];
    let temp = 1;
    for(let i = 0;i < arr1.length;i++){
        for(let j = 0;j < arr1[i].length;j++){
            temp *= arr1[i][j];
        }
        arr2[i] = temp;
        temp = 1;
    }
    return arr2.reduce((a,b) => a+b );
}

console.log(totalVolume([[2, 2, 2], [2, 1, 1]]))