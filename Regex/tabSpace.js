function tabSpace(str) {
    let reg = /\s/g;
    return str.match(reg);
}

console.log(tabSpace("  "));