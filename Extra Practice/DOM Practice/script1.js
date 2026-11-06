/*
---------------------
01. DOM Selection
----------------------
1 / 5 completed
[ ] getElementById()
[ ] getElementsByClassName()
[ ] getElementsByTagName()
[ ] querySelector()
[ ] querySelectorAll()

*/

// Task 1 — Get the page heading
// Select the main heading of the webpage and print its text in the console.

let pageTitle = document.getElementById("pageTitle");
console.log(pageTitle.innerText);

// Task 2 — Get student information
// Select the student name and print it in the console.

let studentName= document.getElementById("studentName");
console.log(studentName.innerText);

// Task 3 — Get all skills
// Select all the skills displayed on the webpage and print each skill in the console.

let skills= document.getElementsByClassName("skill");
console.log(skills[0].innerText);
console.log(skills[1].innerText);
console.log(skills[2].innerText);
console.log(skills[3].innerText);
console.log(skills[4].innerText);

// Task 4 — Get all tasks
// Select all tasks from the task list and print their text.

let task= document.getElementsByClassName("task");
console.log(task[0].innerText);
console.log(task[1].innerText);
console.log(task[2].innerText);
console.log(task[3].innerText);

// Task 5 — Count all buttons
// Find how many buttons are present on the entire webpage.

let countButtons=document.querySelectorAll("button");
console.log(countButtons.length);


// Task 6 — Select one navigation link
// Select the first navigation link in the webpage and print its text.

let firstNavLinkText=document.getElementById("mainNav");
console.log(firstNavLinkText[0].innerText);

// Task 7 — Select all navigation links
// Requirement: Select all four links and print their text individually.

let allNavLinkText = document.querySelectorAll("#mainNav a");
console.log(allNavLinkText[0].innerText);
console.log(allNavLinkText[1].innerText);
console.log(allNavLinkText[2].innerText);
console.log(allNavLinkText[3].innerText);


// Task 8 — Select the second student
// Requirement: Select the name of the second student from the student table.

let secondStudent = document.querySelectorAll("#studentTable tbody tr");
console.log(secondStudent[1].cells[0].innerText);