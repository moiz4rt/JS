function characterClasses(str) {
    let re = /\D/g;
    return str.match(re).join("");
}

console.log(characterClasses("242Edabit23 45can344 3be3 254324addictive!"))