function getDecimalPlaces(num) {
	let re = /(?<=\.)\d*$/g;
	let qtd = re.test(num) ? num.match(re)[0].length : 0;
	return qtd;
}


console.log(getDecimalPlaces("4.23"))
console.log(getDecimalPlaces("200"))
console.log(getDecimalPlaces("0.00002"))
