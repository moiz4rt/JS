//You're given a string of words. You need to find the word "Nemo", and return a string like this: "I found Nemo at [the order of the word you find nemo]!". If you can't find Nemo, return "I can't find Nemo :(".

function findingNemo(arr1) {
    arr1 = arr1.join().split(" ");
    let Nemo = arr1.indexOf("Nemo");
    if (Nemo > -1) {
        return `I find Nemo at ${arr1.indexOf("Nemo") + 1}`
    } else {
        return "I cant find Nemo"
    }
}

console.log(findingNemo(["Kill Nemo"]))