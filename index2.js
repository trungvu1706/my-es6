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
mouse.run();