function canIBuy(arr1, productValue){
    let sumChange = arr1[0]*0.25 + arr1[1]*0.10 + arr1[2]*0.05 + arr1[3]*0.01;
    return productValue <= sumChange;
}

function doIHaveChange(arr1, productValue){
    let quarters = Math.floor(productValue/0.25);
    let dimes = Math.floor((productValue % 0.25)/0.10);
    let nickels = Math.floor(((productValue % 0.25) % 0.10)/0.05);
    let pennies = Math.floor((((productValue % 0.25) % 0.10) % 0.05)/0.01);
    console.log(quarters,dimes,nickels,pennies)
    return arr1[0] >= quarters && arr1[1] >= dimes && arr1[2] >= nickels && arr1[3] >= pennies;

}

console.log(doIHaveChange([2,1,0,0],0.60));
console.log(0.60 % 0.25)