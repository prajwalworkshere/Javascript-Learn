# JavaScript Closures — Complete In-Depth Notes

## Table of Contents

1. What Is a Closure?
2. Why Do We Need Closures?
3. Understanding Scope
4. Lexical Scope
5. Lexical Environment
6. How Closures Work Internally
7. A Function Does Not Need to Be Returned to Form a Closure
8. Closures Capture Bindings, Not Frozen Values
9. Multiple Closures Sharing Variables
10. Closures for Data Privacy
11. Closures and Function Factories
12. Independent Closure State
13. Closures in Loops: `var` vs `let`
14. Lexical Scope vs Dynamic Scope
15. Closures and Variable Shadowing
16. Closures in Asynchronous JavaScript
17. Closures in Event Handlers
18. Closures and Higher-Order Functions
19. Closures and Memoization
20. Closures and Debouncing
21. Closures and Currying
22. Closures and Module Patterns
23. Closures and `this`
24. Closures and Garbage Collection
25. Closures with `var`, `let`, and `const`
26. Closure vs Scope vs Callback
27. Common Mistakes and Misconceptions
28. Interview Questions and Answers
29. Practice Questions
30. Practice Solutions
31. Quick Revision Sheet

---

## 1. What Is a Closure?

A **closure** is a function that retains access to variables from its surrounding lexical environment, even when that function executes outside the scope in which it was created.

In simple words, a closure allows a function to remember and use variables from the environment in which it was defined.

### Example

```javascript
function outer() {
    let message = "Hello from outer";

    function inner() {
        console.log(message);
    }

    return inner;
}

const result = outer();

result();
```

**Output:**

```text
Hello from outer
```

### Explanation

1. JavaScript defines the `outer()` function.
2. Calling `outer()` creates a local binding named `message`.
3. The `inner()` function is defined inside `outer()`.
4. `inner()` can access `message` because of lexical scope.
5. `outer()` returns the `inner` function itself, without executing it.
6. The returned function is assigned to `result`.
7. `outer()` finishes executing.
8. Calling `result()` still prints the value of `message`.

This works because the returned function retains access to its surrounding lexical environment.

### Important distinction

A closure does not simply copy the values of outer variables. It retains access to the relevant variable bindings.

---

## 2. Why Do We Need Closures?

Closures solve several common programming problems.

### Main uses

1. **Data privacy:** Keep variables inaccessible through direct outside access.
2. **State management:** Remember information between function calls.
3. **Function factories:** Create functions with different configurations.
4. **Callbacks:** Access surrounding variables when a callback executes.
5. **Event handling:** Maintain state for button clicks and other events.
6. **Memoization:** Cache previously calculated results.
7. **Debouncing:** Maintain timer state between function calls.
8. **Currying:** Retain arguments supplied during earlier function calls.
9. **Module patterns:** Expose selected operations while keeping internal state private.
10. **Asynchronous operations:** Retain access to variables after the initiating function returns.

Without closures, a function would not retain access to its surrounding lexical bindings in the way JavaScript allows.

---

## 3. Understanding Scope

**Scope** determines where variables and other identifiers can be accessed.

### 3.1 Global scope

A top-level declaration in a classic JavaScript script can be accessible throughout that script, subject to declaration type and environment rules.

```javascript
const appName = "My Application";

function displayApp() {
    console.log(appName);
}

displayApp();
console.log(appName);
```

Output:

```text
My Application
My Application
```

### 3.2 Function scope

Variables declared using `let` or `const` inside a function are accessible within that function and its nested scopes.

```javascript
function test() {
    let age = 21;

    console.log(age);
}

test();

// console.log(age); // ReferenceError
```

Output:

```text
21
```

The local binding `age` cannot be accessed directly from outside `test()`.

### 3.3 Block scope

Variables declared with `let` and `const` are restricted to their enclosing block.

```javascript
if (true) {
    let x = 10;
    const y = 20;

    console.log(x, y);
}

// console.log(x); // ReferenceError
// console.log(y); // ReferenceError
```

Output:

```text
10 20
```

### 3.4 Function scope of `var`

Unlike `let` and `const`, `var` is function-scoped, or global-script-scoped when declared at the top level of a classic script.

```javascript
function example() {
    if (true) {
        var value = 100;
    }

    console.log(value);
}

example();
```

Output:

```text
100
```

The variable is accessible outside the `if` block because `var` does not create a block-scoped binding.

---

## 4. Lexical Scope

**Lexical scope** means that the accessibility of variables is determined by where functions and blocks are written in the source code.

Consider:

```javascript
const globalValue = "Global";

function outer() {
    const outerValue = "Outer";

    function inner() {
        const innerValue = "Inner";

        console.log(globalValue);
        console.log(outerValue);
        console.log(innerValue);
    }

    inner();
}

outer();
```

Output:

```text
Global
Outer
Inner
```

The inner function can access variables from:

- Its own scope.
- Its enclosing function's scope.
- Further enclosing lexical scopes, including the global environment when applicable.

The reverse does not apply.

```javascript
function outer() {
    function inner() {
        const secret = "Hidden";
    }

    inner();

    // console.log(secret); // ReferenceError
}

outer();
```

The `secret` binding exists in the inner function's scope, not the outer function's scope.

**Rule:** Identifier lookup moves from the current scope outward through enclosing lexical environments. It does not move inward into nested functions.

---

## 5. Lexical Environment

A **lexical environment** is a specification-level concept used to explain how JavaScript associates identifiers with their bindings and connects a scope to its enclosing environment.

A simplified lexical environment has two important parts:

- **Environment record:** Represents the bindings associated with that environment.
- **Outer environment reference:** Links to the enclosing lexical environment, if one exists.

### Example

```javascript
const globalName = "Global";

function outer() {
    const outerName = "Outer";

    function inner() {
        const innerName = "Inner";

        console.log(innerName);
        console.log(outerName);
        console.log(globalName);
    }

    inner();
}

outer();
```

Conceptual environment chain:

```text
inner's lexical environment
    |
    | innerName
    |
    v
outer's lexical environment
    |
    | outerName
    |
    v
global lexical environment
    |
    | globalName
    |
    v
No enclosing environment (in this simplified example)
```

When JavaScript evaluates an identifier, it looks for the corresponding binding in the current environment and then follows the outer environment chain until the binding is found or the lookup fails.

This explains how inner functions access variables from enclosing scopes.

**Note:** Lexical environments are conceptual language mechanisms. This diagram does not promise a particular physical memory layout inside a JavaScript engine.

---

## 6. How Closures Work Internally

Consider:

```javascript
function createCounter() {
    let count = 0;

    return function increment() {
        count++;
        console.log(count);
    };
}

const counter = createCounter();

counter();
counter();
counter();
```

Output:

```text
1
2
3
```

### Step-by-step execution

**Step 1: Define `createCounter()`**

JavaScript creates the function. Its body has not yet executed.

**Step 2: Call the outer function**

```javascript
const counter = createCounter();
```

A function execution context is established. The local binding `count` is initialized to `0`.

**Step 3: Create the inner function**

The `increment` function is created in the lexical scope of `createCounter()`. Its code refers to `count`.

**Step 4: Return the inner function**

The inner function is returned and assigned to `counter`.

The outer function finishes executing.

**Step 5: Call the returned function**

```javascript
counter();
```

The function accesses the captured `count` binding and increments it from `0` to `1`.

**Step 6: Call it again**

The same binding is updated from `1` to `2`.

**Step 7: Call it a third time**

The same binding is updated from `2` to `3`.

### Conceptual execution diagram

```text
createCounter()
    |
    | creates count = 0
    |
    | creates increment()
    |
    | returns increment
    v
counter stores the returned function
    |
    +---- counter() --> count = 1
    |
    +---- counter() --> count = 2
    |
    +---- counter() --> count = 3
```

### What happens to the outer function's variables?

The outer function's execution has completed, but the returned function retains access to the relevant lexical environment.

The captured binding must remain available while the closure can access it.

JavaScript engines may optimize how this information is represented. Do not assume that every captured variable must physically remain in a particular stack frame or that every local variable must be retained.

---

## 7. A Function Does Not Need to Be Returned to Form a Closure

This section distinguishes two related ideas:

- A function accessing an enclosing variable through lexical scope.
- A function retaining access to that variable after the outer function has returned.

Returning a function is common when demonstrating closures, but it is not a requirement for a closure.

### 7.1 Inner function called immediately

```javascript
function outer() {
    const message = "Hello";

    function inner() {
        console.log(message);
    }

    inner();
}

outer();
```

Output:

```text
Hello
```

### Explanation

1. `outer()` executes and creates the binding `message`.
2. `inner()` is defined inside `outer()`, so its lexical scope includes the environment containing `message`.
3. `inner()` executes while `outer()` is still running.
4. It accesses `message` through lexical scope.
5. `outer()` finishes executing.

This demonstrates **lexical scope and an inner function's access to its enclosing environment**.

However, because `inner()` executes before `outer()` returns, this example does not demonstrate the specific situation where the inner function continues to access the environment after the outer function has finished.

### 7.2 Returned function retaining access after the outer function returns

```javascript
function outer() {
    const message = "Hello";

    function inner() {
        console.log(message);
    }

    return inner;
}

const fn = outer();

fn();
```

Output:

```text
Hello
```

### Explanation

1. `outer()` creates the `message` binding.
2. `inner()` is created within the lexical environment of `outer()`.
3. `outer()` returns the `inner` function.
4. `outer()` finishes executing.
5. `fn()` invokes the returned function.
6. The function still accesses `message` through its retained lexical environment.

This clearly demonstrates a closure retaining access to its surrounding lexical environment after the outer function returns.

### 7.3 Closure through a callback

```javascript
function greet(name) {
    const message = `Hello, ${name}`;

    setTimeout(function () {
        console.log(message);
    }, 1000);
}

greet("Aman");
```

Output after approximately one second:

```text
Hello, Aman
```

The callback retains access to `message` after `greet()` has finished executing.

### Important rule

A closure does not need to be returned from a function.

A closure is about a function retaining access to its lexical environment. Returning the function or registering it as a callback simply makes this retained access observable after the outer function has finished.

---

## 8. Closures Capture Bindings, Not Frozen Values

One of the most important closure concepts is that a closure retains access to a binding, rather than automatically taking a snapshot of its value.

### Example 1: Changing a variable before returning

```javascript
function outer() {
    let value = 10;

    function inner() {
        console.log(value);
    }

    value = 50;

    return inner;
}

const fn = outer();

fn();
```

Output:

```text
50
```

The function accesses the same binding after it has been updated.

### Example 2: Changing a variable after returning

```javascript
function createFunctions() {
    let score = 0;

    function increase() {
        score++;
    }

    function show() {
        console.log(score);
    }

    return { increase, show };
}

const game = createFunctions();

game.show();
game.increase();
game.show();
game.increase();
game.show();
```

Output:

```text
0
1
2
```

Both functions access the same `score` binding.

### Important distinction: bindings and object values

A closure retains access to bindings, but what it observes depends on what the binding refers to.

For example, if a captured binding refers to an object, mutating that object can be observed through the same reference. Reassigning a mutable binding to a different object can also change what the closure observes.

---

## 9. Multiple Closures Sharing the Same Variable

Closures created in the same lexical environment can share the same captured binding.

```javascript
function createCounter() {
    let count = 0;

    return {
        increment() {
            count++;
            return count;
        },

        decrement() {
            count--;
            return count;
        },

        getCount() {
            return count;
        }
    };
}

const counter = createCounter();

console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.getCount());
```

Output:

```text
1
2
1
1
```

All three methods access the same `count` binding.

Conceptually:

```text
createCounter's lexical environment
    |
    +---- count = 1
    |
    +---- increment() ----+
    |                     |
    +---- decrement() ----+---- shared count
    |                     |
    +---- getCount() -----+
```

This pattern is useful for creating private state with multiple related operations.

---

## 10. Closures for Data Privacy

Closures can keep local variables inaccessible through direct outside access.

### Example: Private bank balance

```javascript
function createBankAccount(initialBalance) {
    let balance = initialBalance;

    return {
        deposit(amount) {
            if (amount <= 0) {
                return "Amount must be positive";
            }

            balance += amount;
            return balance;
        },

        withdraw(amount) {
            if (amount <= 0) {
                return "Amount must be positive";
            }

            if (amount > balance) {
                return "Insufficient balance";
            }

            balance -= amount;
            return balance;
        },

        getBalance() {
            return balance;
        }
    };
}

const account = createBankAccount(1000);

console.log(account.getBalance());
console.log(account.deposit(500));
console.log(account.withdraw(200));
console.log(account.getBalance());
console.log(account.balance);
```

Output:

```text
1000
1500
1300
1300
undefined
```

### Explanation

- `balance` is a local binding inside `createBankAccount()`.
- The returned methods retain access to that binding.
- `account.balance` is `undefined` because `balance` is not a public property on the returned object.
- The exposed methods provide controlled access to the balance.

This is closure-based encapsulation.

**Important:** Closure-based privacy is not automatically a security boundary. Exposed methods can contain bugs, and objects deliberately returned by those methods may still be mutable.

---

## 11. Closures and Function Factories

A function factory is a function that creates and returns another function.

Closures allow each returned function to remember its configuration.

### Example 1: Multiplier factory

```javascript
function createMultiplier(multiplier) {
    return function (number) {
        return number * multiplier;
    };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);
const tenTimes = createMultiplier(10);

console.log(double(5));
console.log(triple(5));
console.log(tenTimes(5));
```

Output:

```text
10
15
50
```

Each returned function retains access to the `multiplier` binding associated with its own invocation.

### Example 2: Greeting factory

```javascript
function createGreeting(greeting) {
    return function (name) {
        return `${greeting}, ${name}!`;
    };
}

const sayHello = createGreeting("Hello");
const sayWelcome = createGreeting("Welcome");

console.log(sayHello("Aman"));
console.log(sayWelcome("Riya"));
```

Output:

```text
Hello, Aman!
Welcome, Riya!
```

### Example 3: Discount calculator

```javascript
function createDiscountCalculator(discountPercentage) {
    return function (price) {
        return price - (price * discountPercentage / 100);
    };
}

const studentDiscount = createDiscountCalculator(10);
const festivalDiscount = createDiscountCalculator(25);

console.log(studentDiscount(1000));
console.log(festivalDiscount(1000));
```

Output:

```text
900
750
```

Use function factories when multiple functions need similar behavior but different configuration values.

---

## 12. Independent Closure State

Each invocation of an outer function can create a separate lexical environment.

```javascript
function createCounter() {
    let count = 0;

    return function () {
        count++;
        return count;
    };
}

const counterA = createCounter();
const counterB = createCounter();

console.log(counterA());
console.log(counterA());
console.log(counterB());
console.log(counterA());
console.log(counterB());
```

Output:

```text
1
2
1
3
2
```

### Why are the counters independent?

`createCounter()` is called twice.

Each invocation creates its own `count` binding.

```text
counterA --> closure A --> count = 3

counterB --> closure B --> count = 2
```

The functions share the same source code but retain access to different lexical environments.

**Rule:** Closures created by separate outer-function invocations generally have independent local state unless that state is deliberately shared through another reference.

---

## 13. Closures in Loops: `var` vs `let`

This is a classic JavaScript interview question.

### 13.1 Using `var`

```javascript
for (var i = 1; i <= 3; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000);
}
```

Output after approximately one second:

```text
4
4
4
```

### Why?

1. `var` is function-scoped rather than block-scoped.
2. The loop uses a single shared `i` binding.
3. Every callback refers to that binding.
4. The loop finishes and `i` becomes `4`.
5. The callbacks execute later and read the current value of `i`.

### 13.2 Using `let`

```javascript
for (let i = 1; i <= 3; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000);
}
```

Output after approximately one second:

```text
1
2
3
```

In a `for` loop, `let` provides a separate per-iteration binding for the loop variable. Each callback retains access to its corresponding binding.

### 13.3 Using an IIFE with `var`

```javascript
for (var i = 1; i <= 3; i++) {
    (function (value) {
        setTimeout(function () {
            console.log(value);
        }, 1000);
    })(i);
}
```

Output after approximately one second:

```text
1
2
3
```

Each invocation of the immediately invoked function expression (IIFE) creates a parameter binding named `value`. The callback closes over that binding.

### Comparison

| Feature | `var` loop variable | `let` loop variable |
|---|---|---|
| Scope | Function-scoped | Block-scoped |
| Per-iteration binding | No | Yes, in a `for` loop |
| Typical delayed callback output | Same final value | Corresponding iteration values |
| Typical modern choice | Avoid for this pattern | Preferred |

---

## 14. Lexical Scope vs Dynamic Scope

JavaScript uses lexical scoping.

A function resolves variables according to where it was defined, not according to the local variables of the function that calls it.

```javascript
const message = "Global message";

function outer() {
    const message = "Outer message";

    return function inner() {
        console.log(message);
    };
}

const fn = outer();

function execute() {
    const message = "Execute message";

    fn();
}

execute();
```

Output:

```text
Outer message
```

The returned function was created inside `outer()`, so it resolves `message` through its lexical environment.

Calling it from `execute()` does not change its lexical scope.

---

## 15. Closures and Variable Shadowing

Variable shadowing occurs when an inner scope declares a binding with the same name as one in an outer scope.

```javascript
const name = "Global";

function outer() {
    const name = "Outer";

    function inner() {
        const name = "Inner";

        console.log(name);
    }

    inner();
}

outer();
```

Output:

```text
Inner
```

The closest matching binding is used.

Without the inner declaration:

```javascript
const name = "Global";

function outer() {
    const name = "Outer";

    function inner() {
        console.log(name);
    }

    inner();
}

outer();
```

Output:

```text
Outer
```

JavaScript searches outward when a binding is not found in the current environment.

---

## 16. Closures in Asynchronous JavaScript

Closures are useful in asynchronous code because callbacks can execute after the function that created them has finished.

### 16.1 `setTimeout`

```javascript
function delayedMessage(message) {
    setTimeout(function () {
        console.log(message);
    }, 1000);
}

delayedMessage("JavaScript Closure");
```

Output after approximately one second:

```text
JavaScript Closure
```

The callback retains access to `message`.

### 16.2 Promise callbacks

```javascript
function fetchSimulation(userId) {
    const prefix = "User ID: ";

    return Promise.resolve(userId).then(function (id) {
        return prefix + id;
    });
}

fetchSimulation(101).then(function (result) {
    console.log(result);
});
```

Output:

```text
User ID: 101
```

The Promise callback retains access to `prefix`.

### 16.3 Async functions

```javascript
function createMessage() {
    const message = "Task completed";

    return async function () {
        await Promise.resolve();
        console.log(message);
    };
}

const showMessage = createMessage();

showMessage();
```

Output:

```text
Task completed
```

The function retains access to `message` across the asynchronous suspension.

**Important:** Closures preserve lexical access. They do not themselves schedule asynchronous execution or determine when a callback runs.

---

## 17. Closures in Event Handlers

Closures commonly appear in browser event handlers.

```javascript
function setupButton() {
    let clicks = 0;

    const button = document.querySelector("#myButton");

    button.addEventListener("click", function () {
        clicks++;
        console.log(`Button clicked ${clicks} times`);
    });
}

setupButton();
```

HTML:

```html
<button id="myButton">Click Me</button>
```

Console output after successive clicks:

```text
Button clicked 1 times
Button clicked 2 times
Button clicked 3 times
```

The registered event handler retains access to `clicks` after `setupButton()` finishes executing.

### Practical uses

- Tracking button clicks.
- Managing UI state.
- Remembering callback configuration.
- Implementing event-specific behavior.

### Memory consideration

A long-lived event listener can keep its closure and referenced objects reachable. Remove listeners when appropriate, especially when components or DOM nodes are no longer needed.

---

## 18. Closures and Higher-Order Functions

A higher-order function accepts another function as an argument, returns a function, or does both.

Closures and higher-order functions are related but are not the same concept.

```javascript
function applyOperation(operation, value) {
    return operation(value);
}

function createAdder(amount) {
    return function (number) {
        return number + amount;
    };
}

const addFive = createAdder(5);

console.log(applyOperation(addFive, 10));
```

Output:

```text
15
```

Here:

- `applyOperation()` is a higher-order function because it accepts a function.
- `createAdder()` is a function factory because it returns a function.
- The returned function uses a closure to access `amount`.

---

## 19. Closures and Memoization

Memoization stores previously computed results so repeated calls can avoid recalculating the same result.

Closures can retain the cache between calls.

### Example: Memoized square function

```javascript
function memoizedSquare() {
    const cache = new Map();

    return function (number) {
        if (cache.has(number)) {
            console.log("From cache");
            return cache.get(number);
        }

        console.log("Calculating");

        const result = number * number;

        cache.set(number, result);

        return result;
    };
}

const square = memoizedSquare();

console.log(square(5));
console.log(square(5));
console.log(square(8));
console.log(square(8));
```

Output:

```text
Calculating
25
From cache
25
Calculating
64
From cache
64
```

### Explanation

The `cache` binding belongs to the outer function's lexical environment.

The returned function retains access to the same `Map` across calls.

### Important considerations

- Choose an appropriate cache key.
- Objects used as `Map` keys are compared by identity.
- Unbounded caches can consume substantial memory.
- Cached results can become stale if underlying data changes.
- Memoization is useful only when the savings justify its overhead.

---

## 20. Closures and Debouncing

Debouncing delays execution until a specified period has passed without another call.

It is useful for search inputs, autocomplete, and resize handlers.

```javascript
function debounce(callback, delay) {
    let timerId;

    return function (...args) {
        clearTimeout(timerId);

        timerId = setTimeout(() => {
            callback.apply(this, args);
        }, delay);
    };
}

function search(query) {
    console.log("Searching for:", query);
}

const debouncedSearch = debounce(search, 500);

debouncedSearch("J");
debouncedSearch("Ja");
debouncedSearch("Java");
```

Expected output after approximately 500 milliseconds from the last call:

```text
Searching for: Java
```

### How does the closure help?

The returned function retains access to `timerId`.

Each call clears the previous timer and schedules a new one.

`...args` collects arguments into an array. `callback.apply(this, args)` forwards the arguments and calling context to the callback.

**Note:** The returned function is a regular function so it can receive its own calling context through `this`. An arrow function would inherit `this` lexically instead.

---

## 21. Closures and Currying

Currying transforms a function that accepts multiple arguments into a sequence of function calls.

Closures can retain arguments supplied in earlier calls.

```javascript
function multiply(a) {
    return function (b) {
        return function (c) {
            return a * b * c;
        };
    };
}

console.log(multiply(2)(3)(4));
```

Output:

```text
24
```

### Execution

1. `multiply(2)` creates a function that can access `a = 2`.
2. Calling that function with `3` creates another function that can access both `a` and `b`.
3. Calling the final function with `4` calculates `2 * 3 * 4`.

Closures enable the staged retention of these arguments.

---

## 22. Closures and Module Patterns

The module pattern was historically a common way to group functionality and expose selected operations while keeping internal state private.

```javascript
const calculator = (function () {
    let result = 0;

    function add(number) {
        result += number;
        return result;
    }

    function reset() {
        result = 0;
    }

    function getResult() {
        return result;
    }

    return {
        add,
        reset,
        getResult
    };
})();

console.log(calculator.add(10));
console.log(calculator.add(5));
console.log(calculator.getResult());

calculator.reset();

console.log(calculator.getResult());
```

Output:

```text
10
15
15
0
```

The IIFE executes immediately. The returned methods retain access to `result`, which is not exposed as a public property.

Modern JavaScript also provides ES modules and private class fields. Closures remain useful alongside these features.

---

## 23. Closures and `this`

Closures and `this` are related but distinct concepts.

A closure retains access to lexical bindings. A regular function's `this` usually depends on how the function is called, whereas an arrow function inherits `this` lexically.

### 23.1 Regular callback

```javascript
const person = {
    name: "Aman",

    showLater: function () {
        setTimeout(function () {
            console.log(this.name);
        }, 100);
    }
};

person.showLater();
```

The callback's `this` is not `person`.

In a strict-mode callback, `this` is `undefined`, so accessing `this.name` throws a `TypeError`. In a typical non-strict browser callback, the timer callback's `this` can refer to the global object, so the result may differ.

### 23.2 Arrow callback

```javascript
const person = {
    name: "Aman",

    showLater: function () {
        setTimeout(() => {
            console.log(this.name);
        }, 100);
    }
};

person.showLater();
```

Output:

```text
Aman
```

The arrow function inherits `this` from `showLater`, which was called as a method of `person`.

### 23.3 Capturing `this` in a local binding

```javascript
const person = {
    name: "Aman",

    showLater: function () {
        const self = this;

        setTimeout(function () {
            console.log(self.name);
        }, 100);
    }
};

person.showLater();
```

Output:

```text
Aman
```

The callback closes over the local `self` binding.

---

## 24. Closures and Garbage Collection

Closures can keep captured data reachable after the outer function returns.

JavaScript engines reclaim memory using garbage collection when objects and bindings are no longer reachable.

### Example

```javascript
function createUser() {
    const user = {
        name: "Aman",
        age: 21
    };

    return function () {
        return user.name;
    };
}

const getName = createUser();

console.log(getName());
```

Output:

```text
Aman
```

The returned function retains access to `user`.

### When can memory be released?

If the closure and all other references to the captured data become unreachable, the data can become eligible for garbage collection.

```javascript
let getName = createUser();

console.log(getName());

getName = null;
```

Assigning `null` removes this particular reference to the function. It does not guarantee immediate garbage collection because other references may still exist.

### Memory leak warning

Closures are not inherently memory leaks. Problems arise when closures unintentionally retain large objects or other resources for longer than necessary.

Good practices:

- Remove unnecessary event listeners.
- Avoid retaining large objects unnecessarily.
- Clear references when appropriate.
- Avoid unbounded caches.
- Remember that setting one variable to `null` does not remove every possible reference.

---

## 25. Closures with `var`, `let`, and `const`

All three declaration keywords can be used for bindings that closures access.

### 25.1 Closure with `var`

```javascript
function createFunction() {
    var message = "Hello";

    return function () {
        console.log(message);
    };
}

const fn = createFunction();

fn();
```

Output:

```text
Hello
```

### 25.2 Closure with `let`

```javascript
function createFunction() {
    let count = 10;

    return function () {
        count++;
        console.log(count);
    };
}

const fn = createFunction();

fn();
fn();
```

Output:

```text
11
12
```

### 25.3 Closure with `const`

```javascript
function createFunction() {
    const message = "Hello";

    return function () {
        console.log(message);
    };
}

const fn = createFunction();

fn();
```

Output:

```text
Hello
```

A `const` binding cannot be reassigned, but a closure can still access it.

### 25.4 Capturing an object declared with `const`

```javascript
function createObjectReader() {
    const user = {
        name: "Aman"
    };

    return {
        read() {
            console.log(user.name);
        },

        rename(newName) {
            user.name = newName;
        }
    };
}

const reader = createObjectReader();

reader.read();
reader.rename("Riya");
reader.read();
```

Output:

```text
Aman
Riya
```

`const` prevents reassignment of the `user` binding. It does not make the object immutable.

---

## 26. Closure vs Scope vs Callback

| Concept | Meaning |
|---|---|
| Scope | Determines where identifiers can be accessed |
| Lexical scope | Determines scope relationships from source-code structure |
| Lexical environment | Represents bindings and the link to an enclosing environment |
| Closure | A function together with its retained access to the relevant lexical environment |
| Callback | A function passed to another function for invocation under some condition |
| Higher-order function | A function that accepts or returns other functions |
| IIFE | A function expression invoked immediately |

A callback may form a closure, but not every callback relies on an interesting outer variable.

A function can form a closure without being returned or passed as a callback.

A higher-order function may use closures, but the two concepts are not interchangeable.

---

## 27. Common Mistakes and Misconceptions

### Mistake 1: The outer function must remain executing

Incorrect: An inner function can access outer variables only while the outer function is running.

Correct: A closure can retain access after the outer function returns.

### Mistake 2: Closures copy variable values

Incorrect: A closure automatically freezes a snapshot of each outer variable.

Correct: A closure retains access to bindings. Later changes to those bindings can be observed.

### Mistake 3: The inner function must be returned

Incorrect: A closure exists only if the outer function returns the inner function.

Correct: Returning a function is a common demonstration, not a requirement.

### Mistake 4: A closure and a callback are the same thing

Incorrect: Every callback is a closure by definition.

Correct: A callback describes how a function is passed for invocation. A closure describes retained lexical access.

### Mistake 5: `const` makes objects immutable

Incorrect: An object declared with `const` cannot be changed.

Correct: Its binding cannot be reassigned, but its properties may still be mutable.

### Mistake 6: Closures always cause memory leaks

Incorrect: Closures permanently prevent memory from being released.

Correct: Reachable closures can extend data lifetimes. Unreachable data can still be garbage-collected.

### Mistake 7: A function uses the caller's local variables

Incorrect: A function resolves free variables from whichever function calls it.

Correct: JavaScript uses lexical scoping, so variable lookup follows the function's lexical environment.

### Mistake 8: All closures share the same state

Incorrect: Every function created from the same source code uses the same variables.

Correct: Separate outer-function invocations usually have separate local bindings.

### Mistake 9: Arrow functions create their own `this`

Incorrect: An arrow callback automatically receives `this` from the calling object.

Correct: Arrow functions inherit `this` from their lexical context.

### Mistake 10: A closure makes code asynchronous

Incorrect: Closures cause callbacks to run later.

Correct: Closures retain lexical access. Timers, promises, and other mechanisms determine when asynchronous callbacks execute.

---

## 28. Interview Questions and Answers

### Q1. What is a closure in JavaScript?

A closure is a function that retains access to variables from its surrounding lexical environment, even when it executes outside the scope in which it was created.

### Q2. Why are closures useful?

They allow functions to maintain state, implement data privacy, create configured functions, handle callbacks, and cache computed results.

### Q3. Does a closure copy variables?

No. It retains access to bindings. Changes to a captured binding can be observed by the closure.

### Q4. Can a closure exist without returning an inner function?

Yes. A nested function can access outer variables when called immediately or when passed as a callback. Returning it is not required.

### Q5. What happens when two closures share a variable?

If they retain access to the same binding, changes made through one closure can be observed through the other.

### Q6. Why does `var` produce the same value in delayed loop callbacks?

The callbacks reference the same function-scoped loop-variable binding. By the time they execute, the loop has finished updating it.

### Q7. How does `let` fix the loop problem?

A `for` loop using `let` provides a per-iteration binding, allowing each callback to retain access to its corresponding value.

### Q8. What is a private variable in a closure?

It is a local binding that is accessible to functions retaining access to its lexical environment but is not directly accessible by its local name from outside.

### Q9. Do closures increase memory usage?

They can extend the lifetime of captured data. Unnecessary retained references can increase memory usage, but closures do not inherently cause leaks.

### Q10. What is a function factory?

A function that returns another function, often configured using values captured by a closure.

### Q11. What is the difference between a closure and a lexical environment?

A lexical environment represents bindings and their enclosing-scope connection. A closure is a function that retains access to the relevant lexical environment.

### Q12. What is the difference between a closure and a callback?

A callback is a function passed to another function for later or conditional invocation. A closure is a function's retained access to its lexical environment. A function can be both.

### Q13. Can closures access global variables?

Yes. Identifier lookup can continue through enclosing lexical environments to the global environment.

### Q14. Can closures modify outer variables?

Yes, when the captured binding permits reassignment or mutation. For example, a closure can increment a captured `let` variable.

### Q15. Can closures capture `const` variables?

Yes. Closures can access `const` bindings, but those bindings cannot be reassigned.

### Q16. Do arrow functions use closures?

Yes. Arrow functions can close over lexical variables. They also inherit `this` and `arguments` from their surrounding context instead of creating their own bindings for them.

### Q17. Give a practical example of a closure.

A counter function that retains a private `count` variable and increments it every time the returned function is called.

### Q18. Are closures specific to asynchronous programming?

No. Closures work in synchronous and asynchronous code.

### Q19. Can instances of the same closure-producing function have separate state?

Yes. Separate invocations generally create separate lexical environments and independent local bindings.

### Q20. When can captured data be garbage-collected?

When the data is no longer reachable through the closure or any other reference. The timing of collection is controlled by the JavaScript engine.

### Q21. Does a closure require the outer function to finish executing?

No. Closures can be relevant while the outer function is running as well. The especially useful case is when the function retains access after the outer function returns.

---

## 29. Practice Questions

Try solving these before checking the solutions.

### Question 1: Basic Closure

```javascript
function outer() {
    let x = 10;

    return function () {
        console.log(x);
    };
}

const fn = outer();
fn();
```

Predict the output.

### Question 2: Updated Binding

```javascript
function outer() {
    let x = 10;

    const inner = function () {
        console.log(x);
    };

    x = 25;

    return inner;
}

const fn = outer();
fn();
```

Predict the output and explain why.

### Question 3: Create a Counter

Create a function `createCounter()` that starts from `0` and returns a function that increments and returns the updated count.

Expected output:

```text
1
2
3
```

### Question 4: Independent Counters

```javascript
function createCounter() {
    let count = 0;

    return function () {
        return ++count;
    };
}

const a = createCounter();
const b = createCounter();

console.log(a());
console.log(a());
console.log(b());
console.log(a());
console.log(b());
```

Predict the output.

### Question 5: Function Factory

Create `createPower(power)` that returns a function calculating `number ** power`.

Expected output:

```text
16
64
```

### Question 6: Private Bank Account

Create a function that accepts an initial balance and returns:

- `deposit(amount)`
- `withdraw(amount)`
- `getBalance()`

Keep the balance private and prevent withdrawals exceeding the available balance.

### Question 7: Loop Output

```javascript
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
}
```

Explain the output and rewrite the code using `let`.

### Question 8: Shared Closure

```javascript
function outer() {
    let value = 1;

    return {
        update() {
            value += 2;
        },

        show() {
            console.log(value);
        }
    };
}

const obj = outer();

obj.show();
obj.update();
obj.show();
```

Predict the output.

### Question 9: Memoization

Create a memoized factorial function that stores previously calculated results in a cache.

Explain which data the closure retains.

### Question 10: Closure or Callback?

```javascript
function createLogger(prefix) {
    return function (message) {
        console.log(prefix, message);
    };
}

const logger = createLogger("INFO");

setTimeout(() => logger("Application started"), 100);
```

Explain why the code involves both a callback and a closure.

---

## 30. Practice Solutions

### Solution 1: Basic Closure

```javascript
function outer() {
    let x = 10;

    return function () {
        console.log(x);
    };
}

const fn = outer();
fn();
```

Output:

```text
10
```

The returned function retains access to `x`.

### Solution 2: Updated Binding

Output:

```text
25
```

The function accesses the current value of the captured binding, not a frozen snapshot.

### Solution 3: Counter

```javascript
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
```

Output:

```text
1
2
3
```

### Solution 4: Independent Counters

Output:

```text
1
2
1
3
2
```

Each call to `createCounter()` creates a separate `count` binding.

### Solution 5: Function Factory

```javascript
function createPower(power) {
    return function (number) {
        return number ** power;
    };
}

const square = createPower(2);
const cube = createPower(3);

console.log(square(4));
console.log(cube(4));
```

Output:

```text
16
64
```

Each returned function retains access to its own `power` binding.

### Solution 6: Private Bank Account

```javascript
function createBankAccount(initialBalance) {
    let balance = initialBalance;

    return {
        deposit(amount) {
            if (amount <= 0) {
                return "Invalid amount";
            }

            balance += amount;
            return balance;
        },

        withdraw(amount) {
            if (amount <= 0) {
                return "Invalid amount";
            }

            if (amount > balance) {
                return "Insufficient balance";
            }

            balance -= amount;
            return balance;
        },

        getBalance() {
            return balance;
        }
    };
}

const account = createBankAccount(1000);

console.log(account.deposit(500));
console.log(account.withdraw(200));
console.log(account.getBalance());
```

Output:

```text
1500
1300
1300
```

The returned methods share access to the private `balance` binding.

### Solution 7: Loop Output

Output:

```text
3
3
3
```

All callbacks read the same `var` binding after the loop completes.

Corrected version:

```javascript
for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
}
```

Output:

```text
0
1
2
```

Each callback uses its own per-iteration binding.

### Solution 8: Shared Closure

Output:

```text
1
3
```

Both methods access the same `value` binding.

### Solution 9: Memoized Factorial

```javascript
function memoizedFactorial() {
    const cache = new Map([
        [0, 1],
        [1, 1]
    ]);

    function factorial(number) {
        if (!Number.isInteger(number) || number < 0) {
            throw new RangeError(
                "Enter a non-negative integer"
            );
        }

        if (cache.has(number)) {
            return cache.get(number);
        }

        const result = number * factorial(number - 1);

        cache.set(number, result);

        return result;
    }

    return factorial;
}

const factorial = memoizedFactorial();

console.log(factorial(5));
console.log(factorial(6));
console.log(factorial(5));
```

Output:

```text
120
720
120
```

The closure retains access to the `cache` map. The calculation of `factorial(6)` can reuse the cached value for `factorial(5)`.

This implementation is intended for learning. Very large inputs can cause numerical precision problems or recursion-depth issues.

### Solution 10: Closure and Callback

```javascript
function createLogger(prefix) {
    return function (message) {
        console.log(prefix, message);
    };
}

const logger = createLogger("INFO");

setTimeout(() => logger("Application started"), 100);
```

Output after approximately 100 milliseconds:

```text
INFO Application started
```

The returned logger closes over `prefix`.

The arrow function passed to `setTimeout()` is a callback, and it invokes the logger later.

---

## 31. Quick Revision Sheet

### Definition

A closure is a function that retains access to variables from its surrounding lexical environment.

### Core rules

- Closures work in synchronous and asynchronous code.
- Returning a function is common but not required.
- A closure retains access to bindings rather than freezing values.
- Functions created in the same environment can share state.
- Separate outer-function invocations usually create independent local state.
- `let` and `const` are block-scoped; `var` is function-scoped.
- A `for` loop using `let` provides per-iteration bindings.
- Closures can implement private state and function factories.
- Closures are useful for callbacks, event handlers, memoization, and debouncing.
- Closures can extend the lifetime of captured data.
- Unreachable data can still be garbage-collected.
- Closure capture and the behavior of `this` are distinct concepts.
- Lexical scope determines where identifiers are resolved.
- A closure does not inherently make a function asynchronous.

### Final example

```javascript
function outer() {
    let count = 0;

    return function inner() {
        count++;
        return count;
    };
}

const counter = outer();

console.log(counter());
console.log(counter());
console.log(counter());
```

Output:

```text
1
2
3
```

**The key idea:** The outer function finishes executing, but the returned inner function retains access to its captured `count` binding and can continue updating it.

That is the central behavior of a JavaScript closure.
