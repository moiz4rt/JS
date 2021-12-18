function jurosSimples(capIn, taxa, tempo){
    return capIn * taxa / 100 * tempo;
};

function jurosCompostos(capIn, taxa, tempo){
    return capIn * (1 + taxa / 100) ** tempo;
};

console.log(jurosCompostos(1,365,365))