function intervaloArray(arr1){
    let dentro = 0;
    let fora = 0;
    for(let i = 0;i < arr1.length;i++){
        if(arr1[i] >= 10 && arr1[i] <= 20){
            dentro++;
        } else {
            fora++;
        };
    };
    return [dentro, fora];
};

console.log(intervaloArray([1,2,3,10,20,11,11]))