//109. Write a JavaScript program to sort an array of all prime numbers between 1 and a given integer.

function allPrimes(int1){
    function returnPrime(int2){
        let prime = false;
        for(let i = int2-1;i > 1;i--){
            if(int2 % i == 0){
                prime = true;
            }
        }
        return prime;
    }
    let arr1 = [];
    for(let i = int1;i >= 1;i--){
        if(!returnPrime(i)){
            arr1.push(i);
        }
    }
    return arr1.sort((a,b) => a-b);
}

console.log(allPrimes(11))