// class in javascript
class Mouse {
    constructor(name) {
        this.name = name;
    }

    run() {
        console.log(`${this.name} is running`);
    }
}

const mouse = new Mouse('Jerry');
// mouse.run();

//claas inheritance
class Animal {
    constructor(name) {
        this.name = name;

    }

    eat() {
        console.log('eatting');
    }
}

class Dog extends Animal { // Dog thua ke lai cac method cua animal
    bark() {
        console.log('gau gau...');
    }
}

const dog = new Dog('Milu');
// console.log(dog.name);
// dog.eat();

//super 
class Hero {
    constructor(name, hp, damage) {
        this.name = name;
        this.hp = hp;
        this.damage = damage;
    }

    applyDamage(damage) {
        this.hp -= damage;
    }

    attack(enermy) {
        enermy.applyDamage(this.damage);
    }
}



class RangedHero extends Hero { //subClass
    constructor(name, hp, damage, ranged) {
        super(name, hp, damage); // super dai dien cho class Hero
        this.ranged = ranged;
    }

    attack(enermy) {
        super.attack(enermy);
        this.hp += this.damage;
    }
}

//before attack
const heroA = new RangedHero('A', 100, 200, 10); // instance cua class do 
const heroB = new Hero('B', 300, 300);
// console.log({ heroA, heroB });

//after attack
heroA.attack(heroB);
// console.log({ heroA, heroB });

// static
class foo {
    static something() { // ham cua chinh class foo
        console.log('hello');
    }

    doSomething() {
        console.log('haha');
    }
}
// foo.something();

const a = new foo(); // instance cua class foo
// a.doSomething();

//...rest 

function concat(seperater, ...strings) {
    return strings.join(seperater);
}

console.log(concat('.', 'a', 'b', 'c'));