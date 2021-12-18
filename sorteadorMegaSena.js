let sorteador = () => {
    let arr1 = [];
    for(let i = 0;i < 60; i++){
        arr1.push(i+1);
    }
        let index = 1;
        let indexes = [];
        let numerosSorteados = [];
        for(let i = 0; i < 6; i++){
            index = Math.round(Math.random()*60);
            numerosSorteados.push(arr1[index]);
            indexes.push(index);
        }
        let arrSort = arr1 => {
            arr1.sort();
            for (let j = 0; j < arr1.length; j++) {
                for (let i = 1; i < arr1.length; i++) {
                    if (arr1[i] < arr1[i - 1]) {
                        [arr1[i], arr1[i - 1]] = [arr1[i - 1], arr1[i]];
                    }
                }
            }
            return arr1;
        }
        numerosSorteados = arrSort(numerosSorteados);
        return numerosSorteados;
};

//Função que compara dois arrays de números da MegaSena
let iterador = (arr1, arr2) => {
    let trueAble = true;
    for(let i = 0; i < 6; i++){
        trueAble *= (arr1[i] == arr2[i]);
    }
    return trueAble;
}

let sorteados = sorteador();

//Função que repete o teste até que os dois arrays sejam idênticos
let testador = () => {
    let i = 0;
    let alfa = 0;
    while(alfa == 0){
        alfa += iterador(sorteados, sorteador());
        i++;
    }
    return i;
}

console.log(testador());