function atLeastOneDigit(str) {
    let re = /\d+?/;
    return re.test(str);
}

console.log(atLeastOneDigit("aewqf"))