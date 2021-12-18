//01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
//multiplicação e divisão desses valores.

function ops(x = 1, z = 1){
    return {
        soma: x+z,
        subtração: x-z,
        multiplicação: x*z,
        divisão: x/z
    };
}

console.log(ops(10,2))