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
dog.eat();