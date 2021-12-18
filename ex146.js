const pai = {nome: 'Feio', corDo: 'rosa'};
const filho = Object.create(pai);

filho.nome = 'Mais feio'

console.log(pai, filho)