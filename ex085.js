// Função para gerar valores aleatórios 1 ou 2
var storage = [];
var doitagain = ab => {
    for(var g = 1; g <= ab; g++){
    var valores = []
    var cara_coroa = function (j) {
        for (var i = 0; i <= j; i++) {
            valores.push(Math.round(Math.random()));
        }
    }
    cara_coroa(100);
    var caras = valores.reduce(function (a, b) { return a + b });
    var d = caras;
    var e = valores.length;
    var f = d / e;
    storage.push(f)}
}
var arg = 100;
doitagain(arg);
var result = storage.reduce((a,b) => (a+b)) / arg;
console.log(result);