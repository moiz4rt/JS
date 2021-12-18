function soma() {
    let soma = 0;
    for(let i in arguments) {
        soma += arguments[i];
    }
    console.log(soma);
}

soma(12,4,65,3,4,2,34,5,56,7,3,2)