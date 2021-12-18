var arr1 = [[1,2], [3,4,9], [5,6,7]];

function arraysToArray(arr1) {
    let a = [];
    for(let i = 0; i < arr1.length;i++){
        for(let j = 0; j < arr1[i].length; j++){
            a.push(arr1[i][j]);
        }
    }
    return a;
}

console.log(arraysToArray(arr1));