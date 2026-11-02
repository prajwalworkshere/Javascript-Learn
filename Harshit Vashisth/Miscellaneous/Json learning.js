
/*
====================================================
             JAVASCRIPT JSON
====================================================

JSON = JavaScript Object Notation

JSON is a lightweight data-interchange format used
to store and exchange data between applications.

Common uses:
1. Client-to-server communication.
2. Server-to-client communication.
3. API request and response.
4. Configuration files.
5. Data storage and transfer.

JSON supports:
- Strings
- Numbers
- Booleans
- null
- Arrays
- Objects

JSON does NOT support:
- Functions
- undefined
- Comments
- Symbol
- BigInt
*/


// ==================================================
// 1. BASIC JAVASCRIPT OBJECT
// ==================================================

let student = {
    name: "Rahul",
    age: 22,
    course: "Computer Engineering",
    isPlaced: false
};

console.log(student);

// Output:
// {
//   name: 'Rahul',
//   age: 22,
//   course: 'Computer Engineering',
//   isPlaced: false
// }

// Explanation:
// This is a JavaScript object.
// It stores data in key-value pairs.
// Keys are property names and values contain data.


// ==================================================
// 2. WHAT IS JSON?
// ==================================================

/*
JSON representation:

{
    "name": "Rahul",
    "age": 22,
    "course": "Computer Engineering",
    "isPlaced": false
}

Important JSON rules:

1. Keys must be enclosed in double quotes.
2. String values must use double quotes.
3. Numbers do not need quotes.
4. Boolean values are true or false.
5. null represents an empty value.
6. No trailing commas are allowed.
7. JSON does not support comments.

JSON is a TEXT FORMAT, not a JavaScript object.
*/


// ==================================================
// 3. JSON.stringify()
// ==================================================

let employee = {
    id: 101,
    name: "Amit",
    salary: 45000,
    department: "IT"
};

let jsonData = JSON.stringify(employee);

console.log(jsonData);

// Output:
// {"id":101,"name":"Amit","salary":45000,"department":"IT"}

// Explanation:
// JSON.stringify() converts a JavaScript value
// (such as an object or array) into a JSON string.
//
// Object -> JSON String

console.log(typeof employee); // object
console.log(typeof jsonData); // string


// ==================================================
// 4. JSON.parse()
// ==================================================

let jsonString = '{"name":"Priya","age":23,"city":"Mumbai"}';

let parsedData = JSON.parse(jsonString);

console.log(parsedData);

// Output:
// { name: 'Priya', age: 23, city: 'Mumbai' }

console.log(parsedData.name); // Priya
console.log(parsedData.age);  // 23

// Explanation:
// JSON.parse() converts a valid JSON string
// into a JavaScript value.
//
// JSON String -> JavaScript Object


// ==================================================
// 5. STRINGIFY AND PARSE TOGETHER
// ==================================================

let product = {
    productId: 1,
    productName: "Laptop",
    price: 55000
};

// Step 1: Convert object into JSON string
let convertedString = JSON.stringify(product);

console.log(convertedString);

// Step 2: Convert JSON string back into object
let convertedObject = JSON.parse(convertedString);

console.log(convertedObject.productName); // Laptop

// Explanation:
// stringify() -> Object to String.
// parse()     -> String to Object.


// ==================================================
// 6. ARRAY OF OBJECTS
// ==================================================

let students = [
    {
        id: 1,
        name: "Rahul",
        marks: 85
    },
    {
        id: 2,
        name: "Priya",
        marks: 92
    },
    {
        id: 3,
        name: "Amit",
        marks: 78
    }
];

console.log(students);

console.log(students[0].name); // Rahul
console.log(students[1].marks); // 92

// Explanation:
// An array can contain multiple objects.
// Each object represents one student.
// Access using array index and object key.


// ==================================================
// 7. ACCESSING JSON DATA USING LOOP
// ==================================================

students.forEach((student) => {

    console.log(student.name);
    console.log(student.marks);

});

// Output:
// Rahul
// 85
// Priya
// 92
// Amit
// 78

// Explanation:
// forEach() visits every array element.
// Each element here is a student object.


// ==================================================
// 8. NESTED OBJECT
// ==================================================

let user = {
    id: 101,
    name: "Rahul",

    address: {
        city: "Mumbai",
        state: "Maharashtra",
        pincode: 410206
    }
};

console.log(user.name); // Rahul

console.log(user.address.city); // Mumbai

console.log(user.address.pincode); // 410206

// Explanation:
// An object can contain another object.
// To access nested properties, use dot notation.


// ==================================================
// 9. ARRAY INSIDE OBJECT
// ==================================================

let college = {

    name: "ABC College",

    departments: [
        "Computer",
        "Mechanical",
        "Electrical"
    ]

};

console.log(college.departments);

// Output:
// [ 'Computer', 'Mechanical', 'Electrical' ]

console.log(college.departments[0]); // Computer
console.log(college.departments[1]); // Mechanical

// Explanation:
// An object can contain an array.
// Use the property name followed by array index.


// ==================================================
// 10. OBJECT INSIDE ARRAY INSIDE OBJECT
// ==================================================

let company = {

    companyName: "Tech Solutions",

    employees: [

        {
            id: 1,
            name: "Rahul",
            skills: ["Java", "SQL", "JavaScript"]
        },

        {
            id: 2,
            name: "Priya",
            skills: ["Python", "React", "Node.js"]
        }

    ]

};

console.log(company.employees[0].name);
// Rahul

console.log(company.employees[0].skills[1]);
// SQL

console.log(company.employees[1].skills[2]);
// Node.js

// Explanation:
// company -> Object
// employees -> Array
// employees[0] -> First employee object
// skills -> Array inside employee object
// skills[1] -> Second skill


// ==================================================
// 11. ADDING DATA TO AN OBJECT
// ==================================================

let person = {
    name: "Amit",
    age: 22
};

person.city = "Pune";

person.country = "India";

console.log(person);

// Output:
// {
//   name: 'Amit',
//   age: 22,
//   city: 'Pune',
//   country: 'India'
// }

// Explanation:
// New properties can be added using dot notation.


// ==================================================
// 12. UPDATING OBJECT DATA
// ==================================================

let userData = {
    name: "Rahul",
    age: 21
};

userData.age = 22;

console.log(userData.age); // 22

// Explanation:
// Existing property values can be updated.


// ==================================================
// 13. DELETING OBJECT PROPERTY
// ==================================================

let account = {
    username: "rahul123",
    password: "abc123",
    email: "rahul@gmail.com"
};

delete account.password;

console.log(account);

// Output:
// {
//   username: 'rahul123',
//   email: 'rahul@gmail.com'
// }

// Explanation:
// delete removes a property from an object.


// ==================================================
// 14. OPTIONAL CHAINING (?.)
// ==================================================

let customer = {
    name: "Rahul",

    address: {
        city: "Mumbai"
    }
};

console.log(customer.address?.city); // Mumbai

console.log(customer.contact?.phone); // undefined

// Explanation:
// Optional chaining checks whether the value
// before ?. is null or undefined.
//
// If it is null or undefined, it returns undefined
// instead of throwing a TypeError.


// ==================================================
// 15. WITHOUT OPTIONAL CHAINING
// ==================================================

let studentData = {
    name: "Amit"
};

// console.log(studentData.address.city);

// Output:
// TypeError: Cannot read properties of undefined

// Explanation:
// address does not exist.
// Therefore, accessing address.city causes an error.


// ==================================================
// 16. JSON WITH null VALUES
// ==================================================

let employeeData = {
    name: "Priya",
    age: 24,
    phone: null
};

let employeeJSON = JSON.stringify(employeeData);

console.log(employeeJSON);

// Output:
// {"name":"Priya","age":24,"phone":null}

// Explanation:
// null is a valid JSON value.
// It represents an explicitly empty or absent value.


// ==================================================
// 17. undefined IN JSON
// ==================================================

let data = {
    name: "Rahul",
    age: 22,
    address: undefined
};

console.log(JSON.stringify(data));

// Output:
// {"name":"Rahul","age":22}

// Explanation:
// Properties with undefined values are omitted
// when converting an object into JSON.


// ==================================================
// 18. undefined INSIDE ARRAY
// ==================================================

let numbers = [10, undefined, 30];

console.log(JSON.stringify(numbers));

// Output:
// [10,null,30]

// Explanation:
// undefined array elements become null
// during JSON serialization.


// ==================================================
// 19. CONVERTING ARRAY INTO JSON
// ==================================================

let fruits = ["Apple", "Banana", "Mango"];

let fruitsJSON = JSON.stringify(fruits);

console.log(fruitsJSON);

// Output:
// ["Apple","Banana","Mango"]

console.log(typeof fruitsJSON); // string

// Explanation:
// JSON.stringify() also converts arrays
// into JSON strings.


// ==================================================
// 20. JSON.stringify() WITH FORMATTING
// ==================================================

let studentInfo = {
    name: "Rahul",
    age: 22,
    course: "DBDA"
};

let formattedJSON = JSON.stringify(studentInfo, null, 4);

console.log(formattedJSON);

// Output:
// {
//     "name": "Rahul",
//     "age": 22,
//     "course": "DBDA"
// }

// Explanation:
// First argument  -> Object to convert.
// Second argument -> Replacer (null means no filtering).
// Third argument  -> Indentation spaces (4).


// ==================================================
// 21. JSON.parse() ERROR HANDLING
// ==================================================

let invalidJSON = '{"name":"Rahul",age:22}';

try {

    let result = JSON.parse(invalidJSON);

    console.log(result);

} catch (error) {

    console.log("Invalid JSON format");
    console.log(error.message);

}

// Output:
// Invalid JSON format
// SyntaxError details

// Explanation:
// JSON requires property names in double quotes.
// Here age is not enclosed in double quotes.
// JSON.parse() throws SyntaxError.
// try-catch handles the error.


// ==================================================
// 22. FILTER DATA FROM ARRAY OF OBJECTS
// ==================================================

let studentList = [

    { name: "Rahul", marks: 85 },
    { name: "Priya", marks: 92 },
    { name: "Amit", marks: 45 },
    { name: "Neha", marks: 75 }

];

let passedStudents = studentList.filter((student) => {
    return student.marks >= 60;
});

console.log(passedStudents);

// Output:
// Rahul, Priya and Neha objects

// Explanation:
// filter() checks every student.
// It returns a new array containing
// only students whose marks are >= 60.


// ==================================================
// 23. MODIFY JSON DATA USING map()
// ==================================================

let users = [

    { name: "Rahul", age: 22 },
    { name: "Priya", age: 23 },
    { name: "Amit", age: 21 }

];

let userNames = users.map((user) => {
    return user.name;
});

console.log(userNames);

// Output:
// [ 'Rahul', 'Priya', 'Amit' ]

// Explanation:
// map() creates a new array.
// Here it extracts only the name property
// from every user object.


// ==================================================
// 24. FIND ONE OBJECT
// ==================================================

let employees = [

    { id: 101, name: "Rahul" },
    { id: 102, name: "Priya" },
    { id: 103, name: "Amit" }

];

let foundEmployee = employees.find((employee) => {
    return employee.id === 102;
});

console.log(foundEmployee);

// Output:
// { id: 102, name: 'Priya' }

// Explanation:
// find() returns the first matching element.
// If no matching element exists, it returns undefined.


// ==================================================
// 25. DESTRUCTURING OBJECT
// ==================================================

let studentObject = {
    name: "Rahul",
    age: 22,
    course: "JavaScript"
};

let { name, age, course } = studentObject;

console.log(name);   // Rahul
console.log(age);    // 22
console.log(course); // JavaScript

// Explanation:
// Destructuring extracts object properties
// into separate variables.


// ==================================================
// 26. DESTRUCTURING ARRAY
// ==================================================

let colors = ["Red", "Green", "Blue"];

let [first, second, third] = colors;

console.log(first);  // Red
console.log(second); // Green
console.log(third);  // Blue

// Explanation:
// Array destructuring extracts values
// based on their positions.


// ==================================================
// 27. JSON DATA EXCHANGE - API CONCEPT
// ==================================================

/*
REAL-WORLD EXAMPLE:

React Frontend
      |
      | HTTP Request (JSON)
      v
Node.js / Express Backend
      |
      | Processes request
      v
Database
      |
      | Data retrieved
      v
Node.js / Express Backend
      |
      | HTTP Response (JSON)
      v
React Frontend

JSON is commonly used to exchange data
between frontend and backend.
*/

// Example of data sent by frontend:

let requestData = {
    username: "rahul123",
    email: "rahul@gmail.com"
};

// Convert object into JSON string for transmission.
let requestBody = JSON.stringify(requestData);

console.log(requestBody);

// Example of JSON received from server:

let serverResponse = '{"status":"success","message":"Login successful"}';

// Convert received JSON string into JavaScript object.
let responseObject = JSON.parse(serverResponse);

console.log(responseObject.status);  // success
console.log(responseObject.message); // Login successful


// ==================================================
// 28. JSON WITH FETCH API
// ==================================================

/*
fetch() is used to make HTTP requests.

fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });

Explanation:

1. fetch() sends an HTTP request.
2. Server sends a response.
3. response.json() reads and parses the response body.
4. data contains the resulting JavaScript value.
5. catch() handles errors.

IMPORTANT:
response.json() is asynchronous and returns a Promise.
It is not the same as JSON.parse() directly.
*/


// ==================================================
// 29. SENDING JSON USING POST REQUEST
// ==================================================

/*
fetch("https://example.com/api/users", {

    method: "POST",

    headers: {
        "Content-Type": "application/json"
    },

    body: JSON.stringify({
        name: "Rahul",
        age: 22
    })

})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error));

Explanation:

method:
Specifies the HTTP method.

headers:
Content-Type tells the server that
the request body contains JSON data.

body:
JSON.stringify() converts the JavaScript object
into a JSON string before sending it.

NOTE:
This is an illustrative API example.
Replace the URL with a real API endpoint.
*/


// ==================================================
// 30. FINAL REVISION
// ==================================================

/*
JSON                  -> Data interchange format.

JSON.stringify()      -> JavaScript value to JSON string.

JSON.parse()          -> JSON string to JavaScript value.

Object                -> Stores key-value pairs.

Array of objects      -> Stores multiple records.

Nested object         -> Object inside another object.

Optional chaining ?.  -> Safely accesses nested properties.

map()                 -> Transforms array elements.

filter()              -> Filters array elements.

find()                -> Finds first matching element.

Destructuring         -> Extracts values from objects/arrays.

fetch()               -> Makes HTTP requests.

response.json()       -> Parses response body into JS data.

Content-Type          -> application/json.
*/
