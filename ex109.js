/* Create a function that takes an array of numbers arr, a string str and return an array of numbers as per the following rules:

"Asc" returns a sorted array in ascending order.
"Des" returns a sorted array in descending order.
"None" returns an array without any modification. */

function ascDesNone(arr1, order){
    if(order == "Asc"){
        return arr1.sort((a,b) => a-b);
    } else if(order == "Des"){
        return arr1.sort((a,b) => b-a);
    } else {
        return arr1;
    }
}

console.log(ascDesNone([7, 8, 11, 66], "None"))