function isEmptyString(string) {
	return /^$/.test(string);
}

console.log(isEmptyString(""));
console.log(isEmptyString(" "));
