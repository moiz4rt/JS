//add a clone of an array to itself.

function cloneArray(arr1) {
    arr2 = arr1.map((a) => a);
    arr2.push(arr1);
    return arr2;
}

console.log(cloneArray([1,2,3]))