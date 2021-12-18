//Função que retorna o número mais repetido de um array

function arrayRep(arr1) {
    arr2 = [];
    for(let i = 0; i < arr1.length;i++){
        arr2.push(0);
    }
    for(let j = 0; j < arr1.length;j++){
        arr2[arr1.indexOf(arr1[j])] += 1;
    }
    let arr3 = [];
    for(k = 0;k < arr1.length;k++){
        arr3.push(arr2[k]);
    }
    let greaterIdx = arr3.sort((a,b) => a-b)[arr1.length-1];
    return arr1[arr2.indexOf(greaterIdx)];
}

console.log(arrayRep([1, 2, 3,3,3,3,3,3,3,3,3,3,3,3, 2, 2, 8, 1, 9,9,9,9,9,9,9]))