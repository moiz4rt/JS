function num_of_digits(num) {
    if(/[\D]/.test(num)) return "Invalid input";
    if(/^\d{1}$/.test(num)) return 1;
    let reg = /^0$/;
    let count = 0;
    while(!reg.test(num)) {
        num = Math.floor(num / 10);
        count++;
    }
    return count;
}

console.log(num_of_digits(1230));
console.log(num_of_digits("a"))
console.log(num_of_digits(1));