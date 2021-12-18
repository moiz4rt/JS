//105. Write a JavaScript program to find the number of times to replace a given number with the sum of its digits until it convert to a single digit number.

function singleDigit(num1){
    let length1 = num1.toString().split('');
    let num2 = 0;
    do {
        num2 = 0;
        for(let i = 0;i < length1.length;i++){
        num2 += num1 % 10;
        num1 = Math.floor(num1 / 10);
    };
    num1 = num2;
    length1 = num1.toString().split('');
    } while(num2 >= 10);
    return num2;
}

console.log(singleDigit(1299))