function whichFlags(str) {
	let re = /[^(flag)]/gi;
	let st = str.match(re).join("");
	st = st.replace(/\s{2,}/g, " ");
	return st;
}


console.log(whichFlags("white flag"));
console.log(whichFlags("blue flag red flag white flag"));
