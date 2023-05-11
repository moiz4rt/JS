function replaceVowels(str, replacer) {
    let re = /[aeiou]/g;
    return str.replace(re, replacer);
}

console.log(replaceVowels("Minnie, mine, Mony, aaaaaa, carai", "!"));