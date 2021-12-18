function findOutlier(integers){
    return integers.filter(a => a % 2 == 0).length === 1?integers.filter(a => a % 2 == 0)[0]:integers.filter(a => a % 2 != 0)[0];
};

console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]))