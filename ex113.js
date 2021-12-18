function hammingCode(word){
    word.split('');
    let $bit = [];
    let $bit2 = [];
    for(let i = 0; i < word.length;i++){
        $bit.push("0"+word[i].toString().charCodeAt(0).toString(2));
    };
    $bit = $bit.join('').split('');
    for(let j = 0; j < $bit.length;j++){
        $bit2.push($bit[j]);
        $bit2.push($bit[j]);
        $bit2.push($bit[j]);
    }
    $bit2 = $bit2.join('');
    return $bit2;
}

console.log(hammingCode("Hamming Code"))