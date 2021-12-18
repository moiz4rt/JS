function returnG(arr1){
    arr1.sort((a,b) => a-b);
    return arr1[arr1.length-1];
}

console.log(returnG([4,5,6,42,2,0,5,5,65,4,3,2]))