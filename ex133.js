//Código para resolver a fórmula de Bhaskara

function bhaskara(a, b, c){
    let delta = b**2 - 4*a*c;
    let deltaSq = Math.sqrt(delta);
    let x1 = (-b+deltaSq) / 2*a;
    let x2 = (-b-deltaSq) / 2*a;
    if(delta < 0) {
        return "Delta é negativo";
    } else if(delta == 0){
        return x1;
    } else {
        return [x1, x2];
    }
};

console.log(bhaskara(1, 5, 4))