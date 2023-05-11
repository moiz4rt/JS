function isJS(str) {
	let reg = /.+\.jsx?$/;
	return reg.test(str);
}

console.log(isJS("asd.js"))
