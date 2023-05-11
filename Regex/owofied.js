function owofied(str) {
    let re = /(i|e)/gi;
    let replacement = str.replace(re, "w$1");
    console.log(replacement + "owo");
}

owofied("eeeeasddsa")