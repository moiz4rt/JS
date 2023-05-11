function getFileName(path) {
    let reg = /\w+\.\w{3}/;
    return path.match(reg)[0];
}

console.log(getFileName("C:/dasfokp/asfgf_fsdf.txt"));