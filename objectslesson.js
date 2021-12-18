var ninja = {
    name: 'Ninja',
    say: function () {
        return 'I am a '+this.name;
    }
};

function F() {};

F.prototype = ninja;

var baby_ninja = new F();

console.log(baby_ninja.say())