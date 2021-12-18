function quantidadeNotas(valor){
    let n200 = 0;
    let n100 = 0;
    let n50 = 0;
    let n20 = 0;
    let n10 = 0;
    let n5= 0;
    let n2 = 0;
    let n1 = 0;
    if(valor >= 200){
        n200 = Math.floor(valor / 200);
        valor -= 200*n200;
    };
    if(valor >= 100){
        n100 = Math.floor(valor / 100);
        valor -= 100*n100;
    };
    if(valor >= 50){
        n50 = Math.floor(valor / 50);
        valor -= 50*n50;
    };
    if(valor >= 20){
        n20 = Math.floor(valor / 20);
        valor -= 20*n20;
    };
    if(valor >= 10){
        n10 = Math.floor(valor / 10);
        valor -= 10*n10;
    };
    if(valor >= 5){
        n5 = Math.floor(valor / 5);
        valor -= 5*n5;
    };
    if(valor >= 2){
        n2 = Math.floor(valor / 2);
        valor -= 2*n2;
    };
    if(valor >= 1){
        n1 = valor;
    };
    return [n200+' de 200', n100+' de 100', n50+' de 50', n20+' de 20', n10+' de 10', n5+' de 5', n2+' de 2', n1+' de 1'];
}

console.log('Namorada')