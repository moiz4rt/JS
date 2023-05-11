function removeLeadingTrailing(num) {
	let trailing = /0+$/;
	return [num, trailing.test(num)];
}

console.log(removeLeadingTrailing("00030.23"));
console.log(removeLeadingTrailing("30.23000"));
console.log(removeLeadingTrailing("030.2030"));
console.log(removeLeadingTrailing("0.23"));
console.log(removeLeadingTrailing("30"));
console.log(removeLeadingTrailing("40.0"));