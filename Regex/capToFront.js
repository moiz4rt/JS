function capToFront(str) {
    let reg = /[A-Z]/g;
    let upper = str.match(reg);
    let newStr = str;
    for(let i = 0;i < upper.length;i++) {
        newStr = newStr.replace(upper[i], "");
    }
    newStr = upper.join("") + newStr;
    return newStr;
}

console.log(capToFront("AnnEdF"));
console.log(capToFront("hApPy"));
console.log(capToFront("moveMENT"));