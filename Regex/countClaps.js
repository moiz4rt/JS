function countClaps(str) {
    let re = /(Clap|Cla|Cl|C)/g;
    return str.match(re).length;
}

let strings = [
    "ClapClapClap",
    "ClaClaClap",
    "ClClClClap",
    "CCCClap",
    "ClepClepClep"
]

let i = 0;
while(i < strings.length) {
    console.log(countClaps(strings[i]));
    i++;
}