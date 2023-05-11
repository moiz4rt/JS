function toScottishScreaming(str) {
    let re = /[aeiou]/gi;
    return str.replace(re, "e").toUpperCase();
}

console.log(toScottishScreaming("Mr. Fox is standing in front the door"))