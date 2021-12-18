function cripto1(word) {
    word.split('');
    let word2 = [];
    for (let i = 0; i < word.length; i++) {
        if (word[i].toString().charAt(0) === " ") {
            word2.push(" ");
        } else {
            word2.push(String.fromCharCode(word[i].toString().charCodeAt(0) + 1));
        }
    }
    word2 = word2.join('');
    return word2;
}

console.log(cripto1("Hello"))