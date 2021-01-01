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

// console.log(a);



const b = {
    foo: 'bar',
    run: function() {
        setTimeout(() => { // arrow function ko co context -> this la context cua run -> b.run() -> 'bar'
            console.log(this.foo);
        }, 2000)
    }
}

// b.run();

// template String
function hello(name) {
    return `Hi, 
    ${name}`
}

// const result = hello('Trung');

// console.log(result);


//argument
function sum() {
    const number = Array.from(arguments); // from method convert any Array-like object to Array
    return number.reduce(function(num, sum) {
        return sum + num;
    }, 0)
}

const result = sum(1, 2, 3, 10, 50);
// console.log(result);



// call method
function greeting() {
    console.log(`hi my name is ${this.name} `);

};

const person = {
    name: 'Trung'
};

// greeting.call(person);


//apply 

function sum() {
    const numbers = Array.from(arguments);

    return numbers.reduce((sum, num) => (sum + num), 0);
}

// console.log(sum(1, 2, 3, 4));

function average() {
    const x = sum.apply(null, arguments); // agruments la array-like object nen thoa man dk cua apply method (this, [prams1, prams2.....])

    return x / arguments.length;
}

// console.log(average(1, 2, 3));


//enhanced object literals
const myName = 'Trung';
const obj = {
    myName,
    run() {
        console.log(`my name is ${myName} !`);
    }
};

obj.run();