function instantJazz(chord){
    if(chord === []){
        return chord;
    }
    let temp = '';
    for(let i = 0;i < chord.length;i++){
        temp = chord[i]
        if(!(temp[1] === '7' || temp[2] === '7')){
            chord[i] += "7"
        }
    }
    return chord;
}

console.log(instantJazz(["F7", "E7", "A7", "Ab7", "Gm7", "C7"]))