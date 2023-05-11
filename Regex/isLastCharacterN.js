 function isLastCharacterN(str) {
     let reg = /n$/;
     return reg.test(str);
 }

 console.log(isLastCharacterN("Aide"));