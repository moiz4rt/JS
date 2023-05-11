function negatedCharacterSets(str) {
	let reg = /[^\w\s]/gi;
	return str.match(reg);
}

console.log(negatedCharacterSets("daoijf@daosf.com#"));
