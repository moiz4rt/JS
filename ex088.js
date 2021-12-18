//87. Write a JavaScript program to check whether two arrays of integers of same length are similar or not. The arrays will be similar if one array can be obtained from another array by swapping at most one pair of elements.
let test = (arr1, arr2) => {
    let vartest = [];
    if (arr1.length == arr2.length) {
        for (let i = 0; i < arr1.length; i++) {
            vartest.push(arr1[i] == arr2[i]);
        }
    }  else {
        return false;
    }
    let varres = 1;
    for(let j = 0;j < vartest.length; j++){
        varres *= vartest[j];
    }
    return varres;
}

let arr = (arr1, arr2) => {
arr1.sort();
arr2.sort();
let key = test(arr1, arr2);
    if(key){
        return "Same";
    } else {
        return "Not the same";
    }
};

console.log(arr([2,3, 1],[1,3,2]))