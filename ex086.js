let angledef = new Object();
angledef = {
    acute: "Acute angle",
    right: "Right angle",
    obtuse: "Obtuse angle",
    straight: "Straight angle"
};

let angle = a => {
    if(a >= 0 && a < 90){
        return angledef.acute;
    } else if(a > 90 && a < 180){
        return angledef.obtuse;
    } else {
    switch(a){
        case 90:
            return angledef.right;
        case 180:
            return angledef.obtuse;
        default:
            return "Out of line";
    }
}
}

console.log(angle(1800));