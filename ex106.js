    function divisors(integer) {
    arr1 = [];
    for(let i = 2; i <= Math.floor(integer/2);i++){
        if(integer % i === 0){
            arr1.push(i);
        }
    }
    if(arr1.length != 0){
    return arr1;
    } else {
        return `${integer} is prime`;
    }
    };

console.log(divisors(134));