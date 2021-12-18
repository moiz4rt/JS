function imprimirErro(){
    throw new Error('...');
}

function imprimirNome(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!');
    } catch(e) {
        imprimirErro(e);
    } finally {
        console.log('final');
    }
}

const obj = {nome: "Roberto"}

imprimirNome(obj)