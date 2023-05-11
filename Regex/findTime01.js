function findTime(str) {
    let re = /\d{2}:\d{2}/;
    return str.match(re).join("");
}

console.log(findTime("Breakfast at 09:30 in the room 123:123"));