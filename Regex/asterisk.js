function asterisk(str) {
    let re = /\b[^b]*?[^a]+?\b/;
    return re.test(str);
}

console.log(asterisk("oijaobsjba"))