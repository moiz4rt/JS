//fixImport("import object from module_name") ➞ "from module_name import object"
//fixImport("import randint from random") ➞ "from random import randint"
//fixImport("import pi from math") ➞ "from math import pi"

function fixImport(importStatement) {
	let reg1 = /import.+(?=from)/;
	let str = "";
	let reg2 = /from.*/;
	str += importStatement.match(reg2)[0] + " " +  importStatement.match(reg1)[0];
	return str;
}

console.log(fixImport("import object from module_name"))
//fixImport("import randint from random") ➞ "from random import randint"
//fixImport("import pi from math") ➞ "from math import pi"

