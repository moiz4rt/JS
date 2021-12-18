function isDiaUtil(dia){
    switch(dia) {
        case 1:
            return "Dia não útil";
            break;
        case 2:
            return "Dia útil";
            break;
        case 3:
            return "Dia útil";
            break;
        case 4:
            return "Dia útil";
            break;
        case 5:
            return "Dia útil";
            break;
        case 6:
            return "Dia útil";
            break;
        case 7:
            return "Dia não útil";
            break;
        default:
            return "Valor inválido"
    }
}

console.log(isDiaUtil(7))