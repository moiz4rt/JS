//106. Write a JavaScript program to divide an integer by another integer as long as the result is an integer and return the result.

function intByInt(int1, div){
    if(div === 1){
        return int1;
    }
    let num = int1;
    while(num % 10 === 0){
        num /= div;
    }
    return num;
}

console.log(intByInt(40, 1));