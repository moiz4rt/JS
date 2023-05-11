function filterString(str) {
    let obj = {
        upper: /[A-Z]/g,
        lower: /[a-z]/g,
        number: /\d/g,
        special: /[^\w]/g
    }
    let strObjs = {};
    for(let type in obj) {
        if(obj[type].test(str)) strObjs[type] = str.match(obj[type]).length;
    }
    return strObjs;
}

console.log(filterString("*$(#Mu12bas43hiR%@*!"))
console.log(filterString("^^Edabit^^%$#12379"))
console.log(filterString("**Airforce1**"))