// 1. Basic Closure
// outer() finishes executing, but the returned inner() function retains access to the message variable through its lexical environment.

function outer() {
    let message = "Hello JavaScript";

    return function inner() {
        console.log(message);
    };
}

const result = outer();
result();


// 2. Closure with a Counter
// The closure retains the same count binding between calls. Each invocation increments the existing value instead of resetting it.

function createCounter() {
    let count = 0;

    return function () {
        count++;
        return count;
    };
}

const counter = createCounter();

console.log(counter());
console.log(counter());
console.log(counter());



// 3.. Independent Closures
// Each call to createCounter() creates a separate lexical environment. Therefore, counterA and counterB maintain independent counts.

function createCounter() {
    let count = 0;

    return function () {
        return ++count;
    };
}

const counterA = createCounter();
const counterB = createCounter();

console.log(counterA());
console.log(counterA());
console.log(counterB());
console.log(counterA());
console.log(counterB());




// 4. Closure with a Function Factory
//  The returned functions remember their respective multiplier bindings. The double function uses 2, while triple uses 3.

function createMultiplier(multiplier) {
    return function (number) {
        return number * multiplier;
    };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5));
console.log(triple(5));
console.log(double(10));
