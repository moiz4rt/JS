function x_o(str) {
    if(/x/gi.test(str) && /o/.test(str)) {
        let comparator = str.match(/x/gi).length === str.match(/o/gi).length;
        let x = str.match(/x/gi).length;
        let o = str.match(/o/gi).length;
        return {comparator, x, o};
    }
    return "The string must have 'X' and 'O";
}

console.log(x_o("xooX"));