let boxSizes = {
    width: 0,
    height: 0,
    length: 0,
};

function volumeOfBox({width, height, length}){
    return width*length*height;
}

boxSizes.width = 10;
boxSizes.height = 3;
boxSizes.length = 4;

console.log(volumeOfBox(boxSizes));