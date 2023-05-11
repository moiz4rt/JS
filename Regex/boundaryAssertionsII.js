function accepted(arr) {
    let re = /\bC.*/;
    return arr.filter(str => !re.test(str));
}

console.log(accepted(["Cans", "Worms", "Bugs", "Cold", "Beans"]))