function secret(str) {
    let tag = str.match(/\w+(?=\*)/i);
    let qtd = +str.match(/(?<=\*)\d*/);
    let test = /^\w+\*\d*$/i.test(str);
    if(test) {
        let tags = "<" + tag + ">" + "</" + tag + ">";
        let i = 0;
        let str = ""
        while(i < qtd) {
            str += tags;
            i++;
        }
        return str;
    }
    return  "Error";
}

console.log(secret("p*2"));