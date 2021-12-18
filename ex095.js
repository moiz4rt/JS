//According to the lodash documentation, _.compact creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.

function lodashLike(arr1) {
    let arr2 = [];
    for(let i = 0; i < arr1.length; i++){
        if(!(arr1[i] === null || arr1[i] === undefined || arr1[i] === false || isNaN(arr1[i]) === true || arr1[i] === '' || arr1[i] === 0)){
            arr2.push(arr1[i]);
        }
    }
    return arr2;
};

console.log(lodashLike([1, 0, "", true, false, null, undefined, "olá"/3, 2, 3]))