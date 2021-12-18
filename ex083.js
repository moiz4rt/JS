//83. Write a JavaScript to find the longest string from a given array of strings.

var findLargest = arr1 => {
    var map1 = arr1.map(function(element){
        return element.length; 
    })
    return map1.indexOf(map1.reduce(function(a,b){return Math.max(a,b)}));
}

console.log(findLargest(["aher","oi","ashjkldf"]));