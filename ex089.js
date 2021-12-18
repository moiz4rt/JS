//88. Write a JavaScript program to check whether two given integers are similar or not, if a given divisor divides both integers and it does not divide either.

let divisoron = (a,b,c) => {
    if(a % c === 0 && b % c === 0 || a % c !== 0 && b % c !== 0){
        return true;
    } else {
        return false;
    }
}

console.log(divisoron(20,10,4))