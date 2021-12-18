var prop = function(obj){
    let a = [];
    b = Object.values(obj);
    for(const id in obj){
        a.push(id);
    }
    for(let i = 0; i < a.length; i++){
        a[i] += ": "+b[i];
    }
    return a;
}; 

console.log(prop({ shrimp: 15, tots: 12 }));