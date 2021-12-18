//103. Write a JavaScript program to find the maximal number from a given positive integer by deleting exactly one digit of the given number. 

function greaterNumber(integer){
    integer = integer.toString().split('');
    let arr1 = [];
    let temp = 0;
    for(let i = 0;i < integer.length;i++){
        temp = integer[i];
        integer.splice(i,1);
        arr1.push(Number(integer.join('')));
        integer.splice(i,0,temp);
    }
    arr1.sort((a,b) => a-b)
    return arr1[arr1.length-1];
}

console.log(greaterNumber(879))