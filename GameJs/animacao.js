function Animacao() {   
    this.sprites = [];
    this.ligado = false;
};

Animacao.prototype = {
    novoSprite: function(sprite){
        this.sprites.push(sprite);
    },
    ligar: function() {
        this.ligado = true;
        this.proximoFrame();
    },
    desligar: function() {
        this.ligado = true;
    },
    proximoFrame: function(){
        if(! this.ligado) return;
        this.limparTela();
        for(var i in this.sprites)
            this.sprites[i].atualizar();
        for(var i in this.sprites)
            this.sprites[i].desenhar();   
        var animacao = this;
        requestAnimationFrame(function(){
            animacao.proximoFrame();
        });
    }
}