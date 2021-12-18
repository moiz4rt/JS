function digPow(n, p){
    let nArray = n.toString().split('');
    let num = 0;
    for(let i = 0;i < nArray.length;i++){
        num += nArray[i]**(p+i);
    }
    return Number.isInteger(num/n)?num/n:-1;
}


console.log(digPow(46288,3))