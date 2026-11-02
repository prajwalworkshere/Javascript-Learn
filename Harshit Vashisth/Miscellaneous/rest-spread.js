// ============================================================
// JAVASCRIPT: REST AND SPREAD OPERATORS
// ============================================================

// Both use three dots (...)
// REST   -> Collects multiple values into one array/object.
// SPREAD -> Expands array/object values into individual values.

// ============================================================
// PART 1: REST OPERATOR
// ============================================================


// EXAMPLE 1: Rest with Function Parameters

function addNumbers(...numbers) {

    // Collects all arguments into an array.

    console.log("Numbers:", numbers);

    let sum = 0;

    for (let num of numbers) {
        sum += num;
    }

    return sum;
}

console.log("Sum:", addNumbers(10, 20, 30, 40));

// Output:
// Numbers: [10, 20, 30, 40]
// Sum: 100


// ============================================================
// EXAMPLE 2: Rest with Normal Parameters
// ============================================================

function studentDetails(name, age, ...subjects) {

    // First argument  -> name
    // Second argument -> age
    // Remaining arguments -> subjects array

    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Subjects:", subjects);
}

studentDetails("Rahul", 22, "Java", "SQL", "JavaScript");

// Output:
// Name: Rahul
// Age: 22
// Subjects: ["Java", "SQL", "JavaScript"]


// ============================================================
// EXAMPLE 3: Rest with Array Destructuring
// ============================================================

const numbers = [10, 20, 30, 40, 50];

const [first, second, ...remaining] = numbers;

console.log("First:", first);
console.log("Second:", second);
console.log("Remaining:", remaining);

// Output:
// First: 10
// Second: 20
// Remaining: [30, 40, 50]


// ============================================================
// EXAMPLE 4: Rest with Object Destructuring
// ============================================================

const student = {
    name: "Rahul",
    age: 22,
    course: "CDAC",
    city: "Mumbai"
};

const { name, age, ...otherDetails } = student;

console.log("Name:", name);
console.log("Age:", age);
console.log("Other Details:", otherDetails);

// Output:
// Name: Rahul
// Age: 22
// Other Details: { course: "CDAC", city: "Mumbai" }


// ============================================================
// EXAMPLE 5: Rest with Array Destructuring - More Values
// ============================================================

const fruits = ["Apple", "Mango", "Banana", "Orange", "Grapes"];

const [fruit1, ...otherFruits] = fruits;

console.log(fruit1);
console.log(otherFruits);

// Output:
// Apple
// ["Mango", "Banana", "Orange", "Grapes"]


// ============================================================
// PART 2: SPREAD OPERATOR
// ============================================================


// EXAMPLE 6: Copying an Array

const originalArray = [10, 20, 30];

const copiedArray = [...originalArray];

console.log("Original:", originalArray);
console.log("Copied:", copiedArray);

console.log(originalArray === copiedArray);

// Output:
// Original: [10, 20, 30]
// Copied: [10, 20, 30]
// false

// Both arrays have the same values.
// But they are different array objects in memory.


// ============================================================
// EXAMPLE 7: Combining Two Arrays
// ============================================================

const java = ["Java", "Spring"];
const javascript = ["JavaScript", "React"];

const technologies = [...java, ...javascript];

console.log(technologies);

// Output:
// ["Java", "Spring", "JavaScript", "React"]


// ============================================================
// EXAMPLE 8: Adding Elements to an Array
// ============================================================

const oldNumbers = [20, 30, 40];

const newNumbers = [10, ...oldNumbers, 50];

console.log(newNumbers);

// Output:
// [10, 20, 30, 40, 50]


// ============================================================
// EXAMPLE 9: Passing Array Elements as Function Arguments
// ============================================================

function calculate(a, b, c) {

    return a + b + c;

}

const values = [10, 20, 30];

// Spread expands the array into three separate arguments.

console.log(calculate(...values));

// Output:
// 60


// ============================================================
// EXAMPLE 10: Copying an Object
// ============================================================

const originalStudent = {
    name: "Rahul",
    age: 22,
    city: "Mumbai"
};

const copiedStudent = { ...originalStudent };

console.log(copiedStudent);

console.log(originalStudent === copiedStudent);

// Output:
// { name: "Rahul", age: 22, city: "Mumbai" }
// false


// ============================================================
// EXAMPLE 11: Updating an Object Without Modifying Original
// ============================================================

const studentData = {
    name: "Rahul",
    age: 22,
    course: "CDAC"
};

const updatedStudent = {
    ...studentData,
    age: 23
};

console.log("Original:", studentData);
console.log("Updated:", updatedStudent);

// Output:
// Original: { name: "Rahul", age: 22, course: "CDAC" }
// Updated: { name: "Rahul", age: 23, course: "CDAC" }


// ============================================================
// EXAMPLE 12: Combining Two Objects
// ============================================================

const personalDetails = {
    name: "Rahul",
    age: 22
};

const academicDetails = {
    course: "CDAC",
    marks: 85
};

const combinedDetails = {
    ...personalDetails,
    ...academicDetails
};

console.log(combinedDetails);

// Output:
// {
//     name: "Rahul",
//     age: 22,
//     course: "CDAC",
//     marks: 85
// }


// ============================================================
// EXAMPLE 13: Duplicate Properties in Objects
// ============================================================

const object1 = {
    name: "Rahul",
    age: 22
};

const object2 = {
    name: "Amit",
    city: "Pune"
};

const finalObject = {
    ...object1,
    ...object2
};

console.log(finalObject);

// Output:
// { name: "Amit", age: 22, city: "Pune" }

// IMPORTANT:
// When duplicate properties exist, the later value wins.


// ============================================================
// EXAMPLE 14: Spread with String
// ============================================================

const language = "JavaScript";

const characters = [...language];

console.log(characters);

// Output:
// ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

// A string is iterable, so Spread can expand its characters.


// ============================================================
// PART 3: SHALLOW COPY
// ============================================================


// EXAMPLE 15: Shallow Copy with Nested Object
// ============================================================

const original = {
    name: "Rahul",
    address: {
        city: "Mumbai"
    }
};

const copied = { ...original };

// Updating the nested object.
copied.address.city = "Pune";

console.log("Original:", original);
console.log("Copied:", copied);

// Output:
// Original: { name: "Rahul", address: { city: "Pune" } }
// Copied:   { name: "Rahul", address: { city: "Pune" } }

// WHY?
// Spread creates a shallow copy.
// The nested address object is shared by both objects.


// ============================================================
// EXAMPLE 16: Spread with Nested Array
// ============================================================

const originalData = [
    10,
    20,
    [30, 40]
];

const copiedData = [...originalData];

copiedData[2][0] = 999;

console.log("Original:", originalData);
console.log("Copied:", copiedData);

// Output:
// Original: [10, 20, [999, 40]]
// Copied:   [10, 20, [999, 40]]

// The nested array is shared between both arrays.


// ============================================================
// PART 4: TRICKY INTERVIEW EXAMPLES
// ============================================================


// EXAMPLE 17: Rest Parameter Must Be Last

function display(a, b, ...rest) {

    console.log(a);
    console.log(b);
    console.log(rest);

}

display(10, 20, 30, 40, 50);

// Output:
// 10
// 20
// [30, 40, 50]

// INVALID:
// function display(...rest, a, b) {}
// Rest parameter must be the last parameter.


// ============================================================
// EXAMPLE 18: Empty Rest Parameter
// ============================================================

function showNumbers(...numbers) {

    console.log(numbers);
    console.log(numbers.length);

}

showNumbers();

// Output:
// []
// 0


// ============================================================
// EXAMPLE 19: Spread Does Not Modify Original Array
// ============================================================

const arr1 = [1, 2, 3];

const arr2 = [...arr1, 4, 5];

console.log(arr1);
console.log(arr2);

// Output:
// [1, 2, 3]
// [1, 2, 3, 4, 5]


// ============================================================
// EXAMPLE 20: Spread with Math.max()
// ============================================================

const marks = [45, 78, 90, 65, 88];

// Math.max() expects individual arguments.
// Spread expands the array into individual values.

console.log(Math.max(...marks));

// Output:
// 90


// ============================================================
// EXAMPLE 21: Rest vs Arguments Object
// ============================================================

function compareArguments(...values) {

    console.log("Rest:", values);
    console.log("Is Array:", Array.isArray(values));

    console.log("Arguments:", arguments);
    console.log("Arguments is Array:", Array.isArray(arguments));

}

compareArguments(10, 20, 30);

// Output:
// Rest: [10, 20, 30]
// Is Array: true
// Arguments: [Arguments] { '0': 10, '1': 20, '2': 30 }
// Arguments is Array: false

// Rest creates a real array.
// arguments is an array-like object in regular functions.


// ============================================================
// EXAMPLE 22: Rest with Arrow Function
// ============================================================

const multiply = (...numbers) => {

    let result = 1;

    for (let num of numbers) {
        result *= num;
    }

    return result;

};

console.log(multiply(2, 3, 4));

// Output:
// 24


// ============================================================
// EXAMPLE 23: Spread with Objects - Property Override
// ============================================================

const defaultSettings = {
    theme: "light",
    language: "English",
    notifications: true
};

const userSettings = {
    theme: "dark"
};

const finalSettings = {
    ...defaultSettings,
    ...userSettings
};

console.log(finalSettings);

// Output:
// {
//     theme: "dark",
//     language: "English",
//     notifications: true
// }


// ============================================================
// EXAMPLE 24: Spread with Array - Removing Reference Sharing
// ============================================================

const a = [100, 200, 300];

const b = [...a];

b.push(400);

console.log("Array A:", a);
console.log("Array B:", b);

// Output:
// Array A: [100, 200, 300]
// Array B: [100, 200, 300, 400]


// ============================================================
// END OF REST AND SPREAD
// ============================================================