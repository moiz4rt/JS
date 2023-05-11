function convertBinary(strin) {
    let reg = /^[^\D]{5}$/;
    return reg.test(strin);
}

console.log(convertBinary(" 12345"))