//101. Write a JavaScript program to check whether a given string contains only Latin letters and no two uppercase and no two lowercase letters are in adjacent positions.
//Minúsculas 97 - 122
//Maiúsculas 65 - 90

function returnUnicode(arr1){
    let arr2 = [];
    for(let i = 0;i < arr1.length;i++){
        arr2.push(arr1[i].charCodeAt(0));
    }
    return arr2;
}

function allToCase(str1){
    let arr2 = [];
    arr2 = returnUnicode(str1.split(''));
    let totalUppercases = arr2.filter(a => a < 91).length;
    if(totalUppercases < str1.split('').length/2){
        return str1.toLowerCase();
    } else {
        return str1.toUpperCase();
    }
}

console.log(allToCase('AMeiXA'))