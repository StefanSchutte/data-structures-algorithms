//reference type
var object1 = {value: 10};
var object2 = object1;
var object13 = {value: 10}

//context vs scope
const object4 = {
    a: function() {
        console.log(this)
    }
}

//instantiation
class Player {
    constructor(name, type){
        console.log(this)
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi ${this.name}, I'm ${this.type}`)
    }
}

class Wizard extends Player {
    constructor(name, type) {
        super(name, type);
    }
    play() {
        console.log(`I'm ${this.type}`)
    }
}

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shel', 'Heal');