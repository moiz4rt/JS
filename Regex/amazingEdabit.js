function amazingEdabit(str) {
    let reg = /is amazing/gi;
    if(/edabit is amazing/gi.test(str)) return str;
    return str.replace(reg, "is not amazing");
}

console.log(amazingEdabit("edabit is amazing"))