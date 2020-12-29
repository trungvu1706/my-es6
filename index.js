const mouse = {
    name: 'mikey',
    sayHi: function() {
        console.log('Hi, my name is ', this.name);
    }
};


// mouse.sayHi() => function context
const say = mouse.sayHi.bind(mouse); // gan bien say
// say = function()
// say(); // khong cos object o dang trc => global context

const arr = [1, 2, 3];

const a = arr.map(x => x * x); // arrow function (fat arrow)

console.log(a);