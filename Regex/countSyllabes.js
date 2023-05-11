function countSyllables(str) {
    let reg = /\w{2}/gi;
    return str.match(reg).length;
}

console.log(countSyllables("lalalalala"));