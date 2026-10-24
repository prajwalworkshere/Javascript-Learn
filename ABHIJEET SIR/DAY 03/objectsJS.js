/*
=====================
Javascript Objects
======================
const object{
    key: "value";
    key: value;
}

An object is a collection of properties represented using key-value pairs.

*/

const student = {
id: 101,
name: "Ramesh",
marks: 75
};

// object.key
console.log(student.id);
// object["key"]
console.log(student["name"]);


// Nested Objects
// objects inside objects

const student2 = {
    id: 101,
    name: "Rohan",
    passed: true,
    marks: [70, 80, 90],
    address: {
    city: "Panvel",
    state: "Maharashtra"
    },
    display: function () {
        console.log("Student details");
    }
};


console.log(student2.id);
console.log(student2.passed);
console.log(student2.marks[1]);
console.log(student2.address.city);
student.display();
