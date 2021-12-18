function notas(valor){
    let arr1 = [200, 100, 50, 20, 10, 5, 2, 1];
    let notas = [];
    for(let i = 0;i < arr1.length;i++){
        notas.push(Math.floor(valor / arr1[i])+` notas de ${arr1[i]}`);
        valor -= Math.floor(valor / arr1[i])*arr1[i];
    };
    return notas;
}

console.log(notas(23))