//Records e pior jogo

function records(arr1){
    let record = 0;
    let j = 0;
    for(let i = 0; i < arr1.length;i++){
        if(arr1[i] > record){
            record = arr1[i];
            j++;
        };
    };
    let arr2 = [];
    for(let m = 0;m < arr1.length;m++){
        arr2.push(arr1[m]);
    }
    return [j-1,arr1.indexOf(arr2.sort((a,b) => a-b)[0])+1];
}

console.log(records([10, 20, 20, 8, 25, 3, 0, 30, 1]))