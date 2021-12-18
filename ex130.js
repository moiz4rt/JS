//111. Write a JavaScript program to check a number from three given numbers where two numbers are equal, find the third one

function threeNumbers(arr1) {
    if (arr1[0] != arr1[1] || arr1[0] != arr1[2] || arr1[1] != arr1[2]) {
        if (arr1[0] == arr1[1]) {
            return arr1[2];
        } else if (arr1[1] == arr1[2]) {
            return arr1[0];
        } else if (arr1[0] == arr1[2]) {
            return arr1[1];
        } else {
            return "There's no repeated number";
        }
    } else {
        return "All the three numbers are the same";
    }
}

console.log(threeNumbers([2,2,2]))