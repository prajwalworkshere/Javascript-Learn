/*
========================================================
        JAVASCRIPT DOM MANIPULATION PRACTICE
========================================================

DOM = Document Object Model

JavaScript uses the DOM to access, change, create,
insert, remove, and replace HTML elements.

*/


// ======================================================
// 1. SELECTING ELEMENTS
// ======================================================

// Q1. How do we select an element using its ID?
// Ans: Use document.getElementById().

const heading = document.getElementById("heading");


// Q2. How do we select the first matching CSS selector?
// Ans: Use document.querySelector().

const paragraph = document.querySelector("#paragraph");


// Q3. How do we select all matching CSS selectors?
// Ans: Use document.querySelectorAll().

const allSections = document.querySelectorAll("section");


// Q4. How do we select elements using a class name?
// Ans: Use document.getElementsByClassName().

const buttons = document.getElementsByClassName("button");


// Q5. How do we select elements using a tag name?
// Ans: Use document.getElementsByTagName().

const allParagraphs = document.getElementsByTagName("p");


// ======================================================
// 2. CONTENT MANIPULATION
// ======================================================


// Q1. How do we change the text content of an element?
// Ans: Use textContent.

document
    .getElementById("textContentBtn")
    .addEventListener("click", function () {

        heading.textContent = "Text Changed Using textContent";

        showOutput("textContent changed the heading.");
    });


// Q2. How do we change the visible text of an element?
// Ans: Use innerText.

document
    .getElementById("innerTextBtn")
    .addEventListener("click", function () {

        paragraph.innerText = "Text changed using innerText.";

        showOutput("innerText changed the paragraph.");
    });


// Q3. How do we change HTML content inside an element?
// Ans: Use innerHTML.

document
    .getElementById("innerHTMLBtn")
    .addEventListener("click", function () {

        paragraph.innerHTML = "<strong>HTML content changed!</strong>";

        showOutput("innerHTML inserted HTML content.");
    });


// Difference:
//
// textContent -> Gets or sets text content.
// innerText   -> Gets or sets rendered text.
// innerHTML   -> Gets or sets HTML markup.


// ======================================================
// 3. ATTRIBUTE MANIPULATION
// ======================================================

const image = document.getElementById("myImage");


// Q1. How do we get an attribute value?
// Ans: Use getAttribute().

document
    .getElementById("getAttributeBtn")
    .addEventListener("click", function () {

        const src = image.getAttribute("src");

        showOutput("Image source: " + src);
    });


// Q2. How do we set an attribute?
// Ans: Use setAttribute().

document
    .getElementById("setAttributeBtn")
    .addEventListener("click", function () {

        image.setAttribute(
            "src",
            "https://placehold.co/200x120/2563eb/ffffff?text=Updated"
        );

        showOutput("Image source updated.");
    });


// Q3. How do we check whether an attribute exists?
// Ans: Use hasAttribute().

document
    .getElementById("hasAttributeBtn")
    .addEventListener("click", function () {

        const result = image.hasAttribute("alt");

        showOutput("Does alt attribute exist? " + result);
    });


// Q4. How do we remove an attribute?
// Ans: Use removeAttribute().

document
    .getElementById("removeAttributeBtn")
    .addEventListener("click", function () {

        image.removeAttribute("alt");

        showOutput("Alt attribute removed.");
    });


// ======================================================
// 4. STYLE MANIPULATION
// ======================================================

const styleBox = document.getElementById("styleBox");


// Q1. How do we change CSS using JavaScript?
// Ans: Use the style property.

document
    .getElementById("changeStyleBtn")
    .addEventListener("click", function () {

        styleBox.style.backgroundColor = "lightblue";
        styleBox.style.color = "darkblue";
        styleBox.style.fontSize = "20px";
        styleBox.style.border = "2px solid blue";

        showOutput("Styles changed successfully.");
    });


// Q2. How do we reset inline styles?
// Ans: Assign an empty string to the style properties.

document
    .getElementById("resetStyleBtn")
    .addEventListener("click", function () {

        styleBox.style.backgroundColor = "";
        styleBox.style.color = "";
        styleBox.style.fontSize = "";
        styleBox.style.border = "";

        showOutput("Inline styles reset.");
    });


// ======================================================
// 5. CLASS MANIPULATION
// ======================================================

const classBox = document.getElementById("classBox");


// Q1. How do we add a CSS class?
// Ans: Use classList.add().

document
    .getElementById("addClassBtn")
    .addEventListener("click", function () {

        classBox.classList.add("highlight");

        showOutput("highlight class added.");
    });


// Q2. How do we remove a CSS class?
// Ans: Use classList.remove().

document
    .getElementById("removeClassBtn")
    .addEventListener("click", function () {

        classBox.classList.remove("highlight");

        showOutput("highlight class removed.");
    });


// Q3. How do we toggle a CSS class?
// Ans: Use classList.toggle().

document
    .getElementById("toggleClassBtn")
    .addEventListener("click", function () {

        classBox.classList.toggle("active");

        showOutput("active class toggled.");
    });


// Q4. How do we check whether a class exists?
// Ans: Use classList.contains().

document
    .getElementById("containsClassBtn")
    .addEventListener("click", function () {

        const result = classBox.classList.contains("highlight");

        showOutput("Does highlight class exist? " + result);
    });


// ======================================================
// 6. CREATING AND INSERTING ELEMENTS
// ======================================================

const myList = document.getElementById("myList");


// Q1. How do we create a new HTML element?
// Ans: Use document.createElement().


// Q2. How do we add an element at the end?
// Ans: Use append().

document
    .getElementById("createElementBtn")
    .addEventListener("click", function () {

        const newItem = document.createElement("li");

        newItem.textContent = "React";

        myList.append(newItem);

        showOutput("New element created and appended.");
    });


// Q3. How do we add an element at the beginning?
// Ans: Use prepend().

document
    .getElementById("prependBtn")
    .addEventListener("click", function () {

        const newItem = document.createElement("li");

        newItem.textContent = "Python";

        myList.prepend(newItem);

        showOutput("Element added at the beginning.");
    });


// Q4. How do we insert an element before another element?
// Ans: Use before().

document
    .getElementById("beforeBtn")
    .addEventListener("click", function () {

        const newItem = document.createElement("li");

        newItem.textContent = "Before JavaScript";

        myList.children[2].before(newItem);

        showOutput("Element inserted before JavaScript.");
    });


// Q5. How do we insert an element after another element?
// Ans: Use after().

document
    .getElementById("afterBtn")
    .addEventListener("click", function () {

        const newItem = document.createElement("li");

        newItem.textContent = "After JavaScript";

        myList.children[2].after(newItem);

        showOutput("Element inserted after JavaScript.");
    });


// Q6. How do we add a child element?
// Ans: Use appendChild().

document
    .getElementById("appendChildBtn")
    .addEventListener("click", function () {

        const newItem = document.createElement("li");

        newItem.textContent = "Node.js";

        myList.appendChild(newItem);

        showOutput("Child element appended.");
    });


// Difference:
//
// append()      -> Can insert multiple nodes and strings.
// appendChild() -> Inserts one Node and returns that Node.


// ======================================================
// 7. REMOVING ELEMENTS
// ======================================================

const removeContainer = document.getElementById("removeContainer");


// Q1. How do we remove an element directly?
// Ans: Use remove().

document
    .getElementById("removeBtn")
    .addEventListener("click", function () {

        const element = document.getElementById("removeParagraph");

        if (element) {
            element.remove();
            showOutput("Element removed.");
        } else {
            showOutput("Element is already removed.");
        }
    });


// Q2. How do we restore the removed element?
// Ans: Create a new element and append it.

document
    .getElementById("resetRemoveBtn")
    .addEventListener("click", function () {

        const newParagraph = document.createElement("p");

        newParagraph.id = "removeParagraph";

        newParagraph.textContent = "Remove this paragraph.";

        removeContainer.appendChild(newParagraph);

        showOutput("Element restored.");
    });


// Q3. How do we remove a child using its parent?
// Ans: Use removeChild().
//
// Syntax:
// parent.removeChild(child);
//
// Example:
// removeContainer.removeChild(removeContainer.firstElementChild);


// ======================================================
// 8. REPLACING ELEMENTS
// ======================================================


// Q1. How do we replace an element?
// Ans: Use replaceWith().

document
    .getElementById("replaceBtn")
    .addEventListener("click", function () {

        const oldElement = document.getElementById("oldElement");

        if (oldElement) {

            const newElement = document.createElement("h3");

            newElement.textContent = "I am the new element!";

            oldElement.replaceWith(newElement);

            showOutput("Element replaced successfully.");

        } else {

            showOutput("Element is already replaced.");

        }
    });


// Q2. How do we replace a child through its parent?
// Ans: Use replaceChild().
//
// Syntax:
// parent.replaceChild(newChild, oldChild);


// ======================================================
// 9. INPUT VALUE MANIPULATION
// ======================================================

const nameInput = document.getElementById("nameInput");


// Q1. How do we get the value entered by a user?
// Ans: Use input.value.

document
    .getElementById("getValueBtn")
    .addEventListener("click", function () {

        const name = nameInput.value;

        if (name.trim() === "") {

            showOutput("Please enter your name.");

        } else {

            showOutput("Your name is: " + name);

        }
    });


// Q2. How do we set an input value using JavaScript?
// Ans: Assign a value to input.value.

document
    .getElementById("setValueBtn")
    .addEventListener("click", function () {

        nameInput.value = "Prajwal";

        showOutput("Input value set successfully.");
    });


// ======================================================
// 10. CLONING ELEMENTS
// ======================================================


// Q1. How do we clone an existing element?
// Ans: Use cloneNode().

document
    .getElementById("cloneBtn")
    .addEventListener("click", function () {

        const original = document.getElementById("cloneElement");

        // true means deep clone.
        // It copies the element and all its descendants.

        const clonedElement = original.cloneNode(true);

        clonedElement.removeAttribute("id");

        clonedElement.textContent = "I am a cloned paragraph.";

        document
            .getElementById("cloneContainer")
            .appendChild(clonedElement);

        showOutput("Element cloned successfully.");
    });


// Difference:
//
// cloneNode(false) -> Copies only the element.
// cloneNode(true)  -> Copies element and descendants.


// ======================================================
// 11. REPLACING ALL CHILDREN
// ======================================================


// Q. How do we remove all existing children and add new content?
// Ans: Use replaceChildren().
//
// Example:
//
// myList.replaceChildren();
//
// Or:
//
// myList.replaceChildren(newElement);


// ======================================================
// 12. INSERTING HTML AT SPECIFIC POSITIONS
// ======================================================


// Q. How do we insert HTML at a specific position?
// Ans: Use insertAdjacentHTML().
//
// Syntax:
// element.insertAdjacentHTML(position, html);
//
// Four positions:
//
// beforebegin -> Before the element.
// afterbegin  -> Inside the element, before its first child.
// beforeend   -> Inside the element, after its last child.
// afterend    -> After the element.
//
// Example:
//
// myList.insertAdjacentHTML(
//     "beforeend",
//     "<li>TypeScript</li>"
// );


// ======================================================
// 13. OUTPUT FUNCTION
// ======================================================


// This function displays messages inside the output section.

function showOutput(message) {

    const output = document.getElementById("output");

    output.textContent = message;

}


// ======================================================
// 14. CLEAR OUTPUT
// ======================================================

document
    .getElementById("clearOutputBtn")
    .addEventListener("click", function () {

        document.getElementById("output").textContent =
            "Your output will appear here.";

    });


// ======================================================
// END OF DOM MANIPULATION PRACTICE
// ======================================================
