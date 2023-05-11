function subReddit(url) {
    let re = /(?<=\/r\/)[^\/]*/;
    let matc = url.match(re);
    return matc === null ? null : matc[0];
}

console.log(subReddit("https://www.reddit.com/r/funnySfasdfdifjag/"))