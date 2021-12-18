function resultado(nota){
    let mult5 = Math.ceil(nota / 5)*5;
    if(mult5 - nota < 3){
        nota = mult5;
    }
    if(nota < 40){
        return "Reprovado por "+nota;
    } else {
        return "Aprovado com "+nota;
    }
}

console.log(resultado(84));