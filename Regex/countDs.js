function countDs(str) {
    let reg = /d/gi;
    return str.match(reg).length;
}

console.log(countDs("dafafsdaw dsdfa awqdD"));