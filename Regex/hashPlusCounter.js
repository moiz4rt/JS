function hashPlusCounter(str) {
    let hashReg = /#/g;
    let plusReg = /\+/g;
    let hash = hashReg.test(str) ? str.match(hashReg).length : 0;
    let plus = plusReg.test(str) ? str.match(plusReg).length : 0; 
    return [hash, plus];
}

console.log(hashPlusCounter("#"));