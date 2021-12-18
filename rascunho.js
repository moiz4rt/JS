function sorteador(arr1) {
    for (let j = 0; j < arr1.length; j++) {
        for (let i = 0; i < arr1.length - 1; i++) {
            if (arr1[i + 1] - arr1[i] < 0) {
                [arr1[i + 1], arr1[i]] = [arr1[i], arr1[i + 1]];
            };
        };
    };
    return arr1;
};

console.log(sorteador([4,3,2,1]))