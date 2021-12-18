function anuidade(mes, anuidade){
    let tempo = 13 - mes;
    return anuidade*(1 + 0.05)**tempo;
};

console.log(anuidade(1, 1000))