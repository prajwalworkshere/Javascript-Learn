
/*
====================================================
       JAVASCRIPT HOISTING - COMPLETE EXAMPLES
====================================================

Hoisting:
JavaScript processes declarations before executing
the code in their respective execution contexts.

*/

// ==================================================
// 1. var HOISTING
// ==================================================

console.log(a); // undefined

var a = 10;

console.log(a); // 10

// Explanation:
// var declaration is hoisted.
// It is initialized with undefined.
// Assignment happens during execution.


// ==================================================
// 2. MULTIPLE var VARIABLES
// ==================================================

console.log(x); // undefined
console.log(y); // undefined
console.log(z); // undefined

var x = 10;
var y = 20;
var z = 30;

console.log(x + y + z); // 60

// Explanation:
// All var declarations are hoisted.
// Their initial value is undefined.


// ==================================================
// 3. var INSIDE FUNCTION
// ==================================================

function demo1() {

    console.log(num); // undefined

    var num = 100;

    console.log(num); // 100
}

demo1();

// Explanation:
// var is function-scoped.
// Its declaration is hoisted to the top of the function.


// ==================================================
// 4. GLOBAL var AND LOCAL var
// ==================================================

var globalVar = 10;

function demo2() {

    var localVar = 20;

    console.log(globalVar); // 10
    console.log(localVar);  // 20
}

demo2();

console.log(globalVar); // 10
// console.log(localVar); // ReferenceError

// Explanation:
// globalVar is accessible globally.
// localVar is accessible only inside demo2().


// ==================================================
// 5. let HOISTING
// ==================================================

// console.log(a1); // ReferenceError

let a1 = 50;

console.log(a1); // 50

// Explanation:
// let declarations are hoisted but not initialized.
// They remain in the Temporal Dead Zone (TDZ)
// until execution reaches their declaration.


// ==================================================
// 6. const HOISTING
// ==================================================

// console.log(b1); // ReferenceError

const b1 = 100;

console.log(b1); // 100

// Explanation:
// const also remains in TDZ until initialization.
// const must be initialized during declaration.


// ==================================================
// 7. var vs let vs const
// ==================================================

console.log(v); // undefined
var v = 10;

// console.log(l); // ReferenceError
let l = 20;

// console.log(c); // ReferenceError
const c = 30;

// Explanation:
// var   -> Hoisted and initialized with undefined.
// let   -> Hoisted but remains uninitialized (TDZ).
// const -> Hoisted but remains uninitialized (TDZ).
//
// Uncommenting either error-producing line will
// stop execution at that point.


// ==================================================
// 8. FUNCTION DECLARATION HOISTING
// ==================================================

greet(); // Hello JavaScript

function greet() {
    console.log("Hello JavaScript");
}

// Explanation:
// Function declarations are fully hoisted.
// We can call them before their declaration.


// ==================================================
// 9. FUNCTION EXPRESSION WITH var
// ==================================================

// Uncomment to test:
// sayHello(); // TypeError: sayHello is not a function

var sayHello = function () {
    console.log("Hello");
};

// Explanation:
// Only the variable declaration is hoisted.
// Initially sayHello contains undefined.
// Function assignment happens during execution.


// ==================================================
// 10. FUNCTION EXPRESSION WITH let
// ==================================================

// Uncomment to test:
// sayHi(); // ReferenceError

let sayHi = function () {
    console.log("Hi");
};

// Explanation:
// let is in TDZ before initialization.
// Accessing it before initialization causes ReferenceError.


// ==================================================
// 11. ARROW FUNCTION HOISTING
// ==================================================

// Uncomment to test:
// welcome(); // TypeError

var welcome = () => {
    console.log("Welcome");
};

// Explanation:
// Arrow functions are not independently hoisted.
// The variable declaration follows var hoisting rules.
// Initially welcome contains undefined.


// ==================================================
// 12. BLOCK SCOPE WITH var
// ==================================================

{
    var blockVar = 100;
}

console.log(blockVar); // 100

// Explanation:
// var does not have block scope.
// It can be accessed outside the block.


// ==================================================
// 13. BLOCK SCOPE WITH let
// ==================================================

{
    let blockLet = 200;

    console.log(blockLet); // 200
}

// console.log(blockLet); // ReferenceError

// Explanation:
// let follows block scope.
// It cannot be accessed outside its block.


// ==================================================
// 14. BLOCK SCOPE WITH const
// ==================================================

{
    const blockConst = 300;

    console.log(blockConst); // 300
}

// console.log(blockConst); // ReferenceError

// Explanation:
// const also follows block scope.


// ==================================================
// 15. SHADOWING WITH var
// ==================================================

var number = 10;

function shadowDemo() {

    var number = 20;

    console.log(number); // 20
}

shadowDemo();

console.log(number); // 10

// Explanation:
// Local number shadows global number.
// Both variables belong to different scopes.


// ==================================================
// 16. SHADOWING WITH let
// ==================================================

let value = 100;

{
    let value = 200;

    console.log(value); // 200
}

console.log(value); // 100

// Explanation:
// Inner and outer variables have separate scopes.
// Inner value shadows outer value inside the block.


// ==================================================
// 17. TRICKY: LOCAL var vs GLOBAL var
// ==================================================

var x1 = 10;

function test() {

    console.log(x1); // undefined

    var x1 = 20;

    console.log(x1); // 20
}

test();

console.log(x1); // 10

// Explanation:
// Local x1 declaration is hoisted inside test().
// It shadows global x1 throughout the function.
// Initially local x1 is undefined.
// After assignment, it becomes 20.


// ==================================================
// 18. FUNCTION DECLARATION vs FUNCTION EXPRESSION
// ==================================================

// Function Declaration

console.log(add(10, 20)); // 30

function add(a, b) {
    return a + b;
}

// Explanation:
// Function declaration is fully hoisted.


// Function Expression

// Uncomment to test:
// console.log(subtract(20, 10)); // TypeError

var subtract = function (a, b) {
    return a - b;
};

// Explanation:
// Variable declaration is hoisted.
// Function assignment happens during execution.


// ==================================================
// 19. TEMPORAL DEAD ZONE (TDZ)
// ==================================================

let outerValue = 10;

{
    // console.log(outerValue); // ReferenceError

    let outerValue = 20;

    console.log(outerValue); // 20
}

// Explanation:
// Inner outerValue shadows the outer variable.
// It remains in TDZ until initialized.
// Therefore, the outer variable cannot be accessed
// using this identifier inside the block before initialization.


// ==================================================
// 20. NESTED FUNCTION HOISTING
// ==================================================

function outer() {

    console.log(n); // undefined

    var n = 10;

    inner(); // Inside inner function

    function inner() {
        console.log("Inside inner function");
    }
}

outer();

// Explanation:
// n is hoisted inside outer().
// inner() is a function declaration.
// It is fully hoisted within outer().


// ==================================================
// 21. FUNCTION INSIDE FUNCTION
// ==================================================

function parent() {

    function child() {
        console.log("Child function executed");
    }

    child(); // Child function executed
}

parent();

// Explanation:
// child() belongs to the scope of parent().
// It cannot be accessed directly outside parent().


// ==================================================
// 22. REDECLARATION WITH var
// ==================================================

var marks = 50;

var marks = 90;

console.log(marks); // 90

// Explanation:
// var allows redeclaration in the same scope.


// ==================================================
// 23. REDECLARATION WITH let
// ==================================================

// let age = 20;
// let age = 30; // SyntaxError

// Explanation:
// let does not allow redeclaration
// in the same scope.


// ==================================================
// 24. var INSIDE if BLOCK
// ==================================================

if (true) {

    var ifVar = 500;
}

console.log(ifVar); // 500

// Explanation:
// var is not block-scoped.


// ==================================================
// 25. let INSIDE if BLOCK
// ==================================================

if (true) {

    let ifLet = 600;

    console.log(ifLet); // 600
}

// console.log(ifLet); // ReferenceError

// Explanation:
// let is block-scoped.


// ==================================================
// 26. FUNCTION HOISTING WITH typeof
// ==================================================

console.log(typeof myFunction); // function

function myFunction() {
    console.log("Testing function hoisting");
}

// Explanation:
// Function declaration is fully hoisted.
// Therefore, typeof returns "function".


// ==================================================
// 27. var WITH typeof
// ==================================================

console.log(typeof unknownVar); // undefined

var unknownVar = 100;

// Explanation:
// unknownVar is hoisted and initialized with undefined.


// ==================================================
// 28. let WITH typeof
// ==================================================

// console.log(typeof myLet); // ReferenceError

let myLet = 200;

// Explanation:
// typeof does not avoid TDZ errors.
// myLet is declared but not initialized at that point.


// ==================================================
// 29. HOISTING WITH FUNCTION PARAMETERS
// ==================================================

function parameterDemo(a) {

    console.log(a); // 10

    var a = 20;

    console.log(a); // 20
}

parameterDemo(10);

// Explanation:
// Function parameters are initialized when the function
// is called. The var declaration with the same name
// does not create a separate local variable.


// ==================================================
// 30. var INSIDE LOOP
// ==================================================

for (var i = 0; i < 3; i++) {
    console.log(i); // 0, 1, 2
}

console.log(i); // 3

// Explanation:
// var is function-scoped, not block-scoped.
// Therefore, i remains accessible after the loop.


// ==================================================
// 31. let INSIDE LOOP
// ==================================================

for (let j = 0; j < 3; j++) {
    console.log(j); // 0, 1, 2
}

// console.log(j); // ReferenceError

// Explanation:
// let is block-scoped.
// j is not accessible outside the loop.


// ==================================================
// 32. IMPORTANT: FUNCTION DECLARATION IN BLOCK
// ==================================================

{
    function blockFunction() {
        console.log("Block function");
    }

    blockFunction(); // Block function
}

// In modern JavaScript (strict mode),
// block-level function declarations are block-scoped.

// blockFunction(); // ReferenceError


// ==================================================
// 33. FINAL HOISTING SUMMARY
// ==================================================

/*
1. var:
   - Declaration is hoisted.
   - Initialized with undefined.
   - Function-scoped.

2. let:
   - Declaration is hoisted.
   - Remains uninitialized in TDZ.
   - Block-scoped.

3. const:
   - Declaration is hoisted.
   - Remains uninitialized in TDZ.
   - Block-scoped.
   - Must be initialized at declaration.

4. Function Declaration:
   - Fully hoisted.
   - Can be called before declaration.

5. Function Expression:
   - Depends on variable declaration type.
   - Function assignment is not hoisted.

6. Arrow Function:
   - Not independently hoisted.
   - Depends on variable declaration type.

7. TDZ:
   - Period between entering a scope and initializing
     a let or const binding.
   - Accessing the variable during this period
     causes ReferenceError.

IMPORTANT:
Hoisting is a conceptual model.
JavaScript creates bindings during execution-context
creation and initializes them according to declaration type.
*/
