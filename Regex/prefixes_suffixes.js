function isPrefix(str, pre) {
    let reg = /^[^-]+(?=-$)/;
    if(reg.test(pre)) 
    {
        let prefix = new RegExp("^" + reg.exec(pre)[0]);
        return prefix.test(str);
    }
    return false
}

function isSuffix(str, suf) {
    let reg = /(?<=-)[^-]+$/;
    if(reg.test(suf)) {
        let suffix = new RegExp( reg.exec(suf)[0] + "$");
        return suffix.test(str);
    }
    return false;
}

console.log(isPrefix("automobile", "auto-"));
console.log(isSuffix("aracnophobia", "-phobia"));