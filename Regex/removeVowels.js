function removeVowels(str) {
    let re = /[aeiou]/gi;
    return str.replace(re, "").replace(/\s{2,}/g, " ");
}

console.log(removeVowels("Meu enome e Moises"))