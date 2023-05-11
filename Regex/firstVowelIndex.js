function firstVowelIndex(word) {
	let reg = /[aeiou]/i;
	return word.match(reg).index;
}


console.log(firstVowelIndex("apple"));
