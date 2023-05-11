function lettersOnly(str) {
    let re = /[a-z]/gi;
    return str.match(re).join("");
}

console.log(lettersOnly("R%$%&#$%@$[[~oc,.@#$^~*k.,.y"))