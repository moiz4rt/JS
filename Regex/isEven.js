function isEven(numStr) {
	let reg = /[24680]\b/;
	return reg.test(numStr);
}

console.log(isEven("1234"));
