//Write a function that converts an object into an array of keys and values.

let obj = {
    name: "Moi",
    surname: "Pas",
    ID: 123456,
    address: "asdf"
};

let lima = function(a){
    arr1 = [];
    arr2 = Object.values(a);
    arr3 = [];
    for(const x in a){
        arr1.push(x);
    }
    for(let i = 0;i < arr1.length; i++){
        arr3.push([arr1[i]+": "+arr2[i]]);
    }
    return arr3;
};

console.log(lima(obj));