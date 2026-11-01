# JavaScript — Module 5: DOM Manipulation
## Complete Revision Notes (Topics 5.1–5.9)

---

# 1. Introduction to DOM

### Definition

The **Document Object Model (DOM)** is a programming interface provided by the browser that represents an HTML document as a tree-like structure of objects called nodes.

JavaScript uses the DOM to access, modify, add, and remove HTML elements dynamically.

### Example HTML

```html
<html>
  <body>
    <h1>Hello</h1>
    <p>Welcome to JavaScript</p>
  </body>
</html>
```

### Simplified DOM tree

```text
Document
   |
  html
   |
  body
   |
   +------ h1
   |        |
   |     "Hello"
   |
   +------ p
            |
       "Welcome to JavaScript"
```

### Important terms

| Term | Meaning |
|---|---|
| Document | Represents the complete HTML document |
| Node | Any object in the DOM tree |
| Element | An HTML element such as `div`, `p`, or `h1` |
| Text node | Text inside an element |
| Attribute | Additional information such as `id`, `class`, or `src` |
| Parent | Node containing another node |
| Child | Node contained inside another node |
| Sibling | Nodes sharing the same parent |

### HTML vs DOM vs CSS

- HTML defines the structure.
- CSS defines the appearance.
- DOM represents the document as objects.
- JavaScript interacts with the DOM to change the page dynamically.

```javascript
console.log(document);
console.log(document.title);
console.log(document.body);
```

---

# 2. Selecting HTML Elements

JavaScript provides different methods to select elements from the DOM.

### Important selection methods

| Method | Purpose | Returns |
|---|---|---|
| `getElementById()` | Select by ID | One element or `null` |
| `getElementsByClassName()` | Select by class | Live HTMLCollection |
| `getElementsByTagName()` | Select by tag | Live HTMLCollection |
| `querySelector()` | Select first CSS selector match | Element or `null` |
| `querySelectorAll()` | Select all CSS selector matches | Static NodeList |

### Syntax and examples

```javascript
// Select element by ID
const heading = document.getElementById("title");

// Select elements by class
const items = document.getElementsByClassName("item");

// Select elements by tag
const paragraphs = document.getElementsByTagName("p");

// Select first matching CSS selector
const firstItem = document.querySelector(".item");

// Select all matching CSS selectors
const allItems = document.querySelectorAll(".item");
```

### CSS selectors inside querySelector

```javascript
document.querySelector("#title");       // ID
document.querySelector(".container");   // Class
document.querySelector("p");            // Tag
document.querySelector("div p");        // Descendant
document.querySelector("input[type='text']"); // Attribute
```

### Accessing selected elements

```javascript
const items = document.querySelectorAll(".item");

items.forEach(function (item) {
    console.log(item.textContent);
});
```

### Live vs Static collections

**Live HTMLCollection:** Automatically reflects changes in the DOM.

```javascript
const items = document.getElementsByClassName("item");
```

**Static NodeList:** Does not automatically update when the DOM changes.

```javascript
const items = document.querySelectorAll(".item");
```

Remember: `childNodes` is an example of a live NodeList. Not every NodeList is static.

---

# 3. Changing Text, HTML, and Attributes

After selecting an element, JavaScript can modify its content and attributes.

### Important properties

| Property | Purpose |
|---|---|
| `textContent` | Gets or sets text content |
| `innerText` | Gets or sets rendered text |
| `innerHTML` | Gets or sets HTML markup |
| `value` | Gets or sets form control value |

### textContent

Gets or changes the text inside an element.

```javascript
const heading = document.querySelector("h1");

heading.textContent = "Welcome to JavaScript";
```

### innerText

Works with rendered text and considers CSS visibility and layout.

```javascript
const paragraph = document.querySelector("p");

console.log(paragraph.innerText);
```

### innerHTML

Gets or changes the HTML markup inside an element.

```javascript
const box = document.querySelector(".box");

box.innerHTML = "<h2>Hello</h2><p>Welcome!</p>";
```

**Security warning:** Never insert untrusted user input directly using `innerHTML`. It can introduce Cross-Site Scripting (XSS) vulnerabilities. Prefer `textContent` for plain text.

### Difference: textContent vs innerText vs innerHTML

| Feature | textContent | innerText | innerHTML |
|---|---|---|---|
| Reads text | Yes | Yes | Returns markup |
| Reads HTML tags | No | No | Yes |
| Considers CSS visibility | No | Yes | No |
| Parses assigned HTML | No | No | Yes |
| Best for plain text | Yes | Yes, when rendered text matters | No |

### Working with attributes

```javascript
const image = document.querySelector("img");

// Get attribute
console.log(image.getAttribute("src"));

// Set attribute
image.setAttribute("src", "photo.jpg");

// Remove attribute
image.removeAttribute("alt");

// Check attribute
console.log(image.hasAttribute("src"));
```

### HTML attributes vs DOM properties

```javascript
const input = document.querySelector("input");

input.getAttribute("value"); // Reads the HTML attribute
input.value;                 // Reads the current input value
```

The HTML attribute generally represents the initial markup value, while a DOM property can reflect the current live state.

---

# 4. Changing CSS Styles and Classes

JavaScript can dynamically change the appearance of HTML elements.

### Using style

```javascript
const heading = document.querySelector("h1");

heading.style.color = "blue";
heading.style.backgroundColor = "yellow";
heading.style.fontSize = "30px";
```

CSS property names written in JavaScript generally use camelCase.

For example:

| CSS | JavaScript |
|---|---|
| `background-color` | `backgroundColor` |
| `font-size` | `fontSize` |
| `margin-top` | `marginTop` |
| `border-radius` | `borderRadius` |

### className

Gets or sets the complete class attribute.

```javascript
const box = document.querySelector(".box");

box.className = "box active";
```

Be careful: assigning `className` replaces existing classes.

### classList

Provides methods to work with individual classes.

```javascript
const box = document.querySelector(".box");

box.classList.add("active");
box.classList.remove("hidden");
box.classList.toggle("dark");
box.classList.contains("active");
box.classList.replace("old", "new");
```

### Important classList methods

| Method | Purpose |
|---|---|
| `add()` | Adds a class |
| `remove()` | Removes a class |
| `toggle()` | Adds or removes a class |
| `contains()` | Checks whether a class exists |
| `replace()` | Replaces one class with another |

### getComputedStyle()

Returns the computed CSS styles of an element.

```javascript
const box = document.querySelector(".box");

const styles = getComputedStyle(box);

console.log(styles.color);
console.log(styles.width);
```

### style vs classList

- `style` changes inline CSS directly.
- `classList` adds, removes, or toggles CSS classes.
- For reusable styling and larger projects, prefer CSS classes with `classList`.

---

# 5. Creating, Inserting, Replacing, and Removing Elements

JavaScript can create new HTML elements and dynamically add them to the page.

### Creating an element

```javascript
const paragraph = document.createElement("p");

paragraph.textContent = "This is a new paragraph";
```

Creating an element does not automatically add it to the page.

### Adding elements

```javascript
const container = document.querySelector(".container");

container.appendChild(paragraph);
```

### Important insertion methods

| Method | Purpose |
|---|---|
| `appendChild()` | Adds a node at the end |
| `append()` | Adds nodes or text at the end |
| `prepend()` | Adds nodes or text at the beginning |
| `insertBefore()` | Inserts before a reference child |
| `insertAdjacentElement()` | Inserts an element at a specified position |
| `insertAdjacentHTML()` | Parses and inserts HTML markup |

### appendChild() vs append()

```javascript
container.appendChild(paragraph);

container.append("Hello");
container.append(paragraph);
```

- `appendChild()` accepts a Node and returns the appended node.
- `append()` accepts Nodes or strings and returns `undefined`.

### insertBefore()

```javascript
const newElement = document.createElement("h2");

newElement.textContent = "New Heading";

const reference = document.querySelector("p");

container.insertBefore(newElement, reference);
```

### insertAdjacentElement()

```javascript
element.insertAdjacentElement("beforebegin", newElement);
element.insertAdjacentElement("afterbegin", newElement);
element.insertAdjacentElement("beforeend", newElement);
element.insertAdjacentElement("afterend", newElement);
```

```text
beforebegin  -> Before the element
afterbegin   -> Inside, before first child
beforeend    -> Inside, after last child
afterend     -> After the element
```

### Replacing elements

```javascript
const oldElement = document.querySelector("p");
const newElement = document.createElement("h2");

newElement.textContent = "Updated Heading";

oldElement.replaceWith(newElement);
```

Another method:

```javascript
parent.replaceChild(newElement, oldElement);
```

### Removing elements

```javascript
element.remove();
```

Or:

```javascript
parent.removeChild(element);
```

### cloneNode()

Creates a copy of an existing node.

```javascript
const original = document.querySelector(".box");

const copy = original.cloneNode(true);

document.body.appendChild(copy);
```

- `cloneNode(false)` creates a shallow copy.
- `cloneNode(true)` creates a deep copy, including descendants.
- Event listeners registered using `addEventListener()` are not copied.

### children vs childNodes

| Property | Returns |
|---|---|
| `children` | Element children only; live HTMLCollection |
| `childNodes` | All child nodes, including text and comments; live NodeList |

---

# 6. Events and Event Listeners

### Definition

An event is an action or occurrence detected by the browser, such as a click, key press, form submission, or page load.

JavaScript can respond to these events using event listeners.

### Three ways to handle events

**1. Inline HTML event handler**

```html
<button onclick="showMessage()">Click</button>
```

**2. DOM event handler property**

```javascript
button.onclick = function () {
    console.log("Button clicked");
};
```

**3. addEventListener() — Recommended**

```javascript
button.addEventListener("click", function () {
    console.log("Button clicked");
});
```

### addEventListener() syntax

```javascript
element.addEventListener(eventType, callback, options);
```

Example:

```javascript
const button = document.querySelector("button");

button.addEventListener("click", function () {
    alert("Hello!");
});
```

### Common event types

| Event | When it occurs |
|---|---|
| `click` | Element is clicked |
| `dblclick` | Element is double-clicked |
| `mouseover` | Pointer enters an element or its descendants |
| `mouseout` | Pointer leaves an element or its descendants |
| `mouseenter` | Pointer enters an element |
| `mouseleave` | Pointer leaves an element |
| `keydown` | A key is pressed |
| `keyup` | A key is released |
| `input` | User changes an input's value |
| `change` | A value change is committed |
| `submit` | A form is submitted |
| `focus` | Element receives focus |
| `blur` | Element loses focus |
| `DOMContentLoaded` | HTML parsing is complete and deferred/module scripts have executed |
| `load` | Page resources have loaded |

### Removing an event listener

```javascript
function handleClick() {
    console.log("Clicked");
}

button.addEventListener("click", handleClick);

button.removeEventListener("click", handleClick);
```

Important rules:

- Use the same event type.
- Use the same function reference.
- Use a matching capture setting.
- Creating a new anonymous function does not remove the original listener.

### Event listener options

```javascript
button.addEventListener("click", handleClick, {
    once: true
});
```

| Option | Purpose |
|---|---|
| `capture` | Runs during capturing phase |
| `once` | Automatically removes listener after first execution |
| `passive` | Indicates the listener will not call `preventDefault()` |
| `signal` | Allows removal using an AbortSignal |

### Important: function vs arrow function `this`

For a normal function used as an `addEventListener()` callback, `this` refers to the element receiving the listener.

Arrow functions do not have their own `this`; they inherit it from the surrounding scope.

Use `event.currentTarget` when you need the listener's element reliably.

---

# 7. Event Object, Bubbling, and Delegation

### Event object

When an event occurs, the browser passes an Event object to the callback.

```javascript
button.addEventListener("click", function (event) {
    console.log(event);
});
```

### Important Event object properties

| Property | Meaning |
|---|---|
| `type` | Event name |
| `target` | Original element where event occurred |
| `currentTarget` | Element whose listener is currently executing |
| `eventPhase` | Current propagation phase |
| `bubbles` | Whether event bubbles |
| `cancelable` | Whether default action can be canceled |
| `defaultPrevented` | Whether default action was prevented |
| `timeStamp` | Time associated with event |

### target vs currentTarget

```javascript
container.addEventListener("click", function (event) {
    console.log(event.target);
    console.log(event.currentTarget);
});
```

Suppose a button is inside a container and the user clicks the button:

- `event.target` → Button
- `event.currentTarget` → Container

### Event propagation phases

There are three phases:

1. Capturing phase
2. Target phase
3. Bubbling phase

```text
CAPTURING:
Window
  ↓
Document
  ↓
Parent
  ↓
Target

BUBBLING:
Target
  ↑
Parent
  ↑
Document
  ↑
Window
```

### Capturing example

```javascript
parent.addEventListener("click", function () {
    console.log("Parent");
}, true);
```

The third argument `true` enables capturing.

Equivalent:

```javascript
parent.addEventListener("click", handler, {
    capture: true
});
```

### Bubbling example

```javascript
parent.addEventListener("click", function () {
    console.log("Parent clicked");
});
```

By default, the listener uses the bubbling phase.

### Event methods

| Method | Purpose |
|---|---|
| `preventDefault()` | Prevents the browser's default action when allowed |
| `stopPropagation()` | Stops further propagation |
| `stopImmediatePropagation()` | Stops propagation and prevents remaining listeners on the same target from executing |

Important: `preventDefault()` does not stop propagation.

### Event Delegation

**Definition:** Event delegation is a technique in which a single event listener is attached to a parent element to handle events originating from its child elements.

It works because many events bubble from child elements to their ancestors.

```javascript
const list = document.querySelector("ul");

list.addEventListener("click", function (event) {
    if (event.target.matches(".delete-btn")) {
        event.target.closest("li").remove();
    }
});
```

### closest()

Finds the nearest matching element, starting from the element itself and moving upward through its ancestors.

```javascript
const button = event.target.closest(".delete-btn");
```

### Why use event delegation?

- Fewer event listeners.
- Works with dynamically created child elements.
- Centralizes event handling.
- Can improve maintainability.

For robust delegation, verify that the matched element belongs to the intended container.

```javascript
const button = event.target.closest(".delete-btn");

if (button && list.contains(button)) {
    button.closest("li").remove();
}
```

---

# 8. Forms, Inputs, and Form Validation

JavaScript can read form values, validate user input, and handle submissions.

### Basic form

```html
<form id="myForm">
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" required>

    <button type="submit">Submit</button>
</form>
```

### Reading input values

```javascript
const input = document.querySelector("#username");

console.log(input.value);
```

### Important input properties

| Property | Purpose |
|---|---|
| `value` | Gets or sets input value |
| `checked` | Gets or sets checkbox/radio state |
| `disabled` | Gets or sets disabled state |
| `type` | Gets or sets input type |
| `name` | Form field name |
| `required` | Indicates whether input is required |

### Important form events

| Event | Purpose |
|---|---|
| `input` | Runs as the user edits a value |
| `change` | Runs when a value change is committed |
| `submit` | Runs when form submission occurs |
| `focus` | Runs when an element receives focus |
| `blur` | Runs when an element loses focus |

### Handling form submission

```javascript
const form = document.querySelector("#myForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.querySelector("#username").value.trim();

    if (username === "") {
        console.log("Username is required");
        return;
    }

    console.log("Submitted:", username);
});
```

`preventDefault()` prevents the browser's normal form submission behavior.

### Why use trim()?

```javascript
const username = input.value.trim();
```

It removes whitespace from the beginning and end of a string.

For example:

```javascript
"   Prajwal   ".trim();

// "Prajwal"
```

### HTML built-in validation attributes

| Attribute | Purpose |
|---|---|
| `required` | Field must have a value |
| `minlength` | Minimum number of characters |
| `maxlength` | Maximum number of characters |
| `min` | Minimum numeric/date value |
| `max` | Maximum numeric/date value |
| `step` | Allowed value increments |
| `pattern` | Regular expression constraint |
| `type="email"` | Checks email input format |

### JavaScript validation methods

```javascript
form.checkValidity();
form.reportValidity();

input.setCustomValidity("Please enter a valid value.");
input.setCustomValidity("");
```

### FormData

`FormData` collects successful form control values.

```javascript
const form = document.querySelector("#myForm");

const formData = new FormData(form);

console.log(formData.get("username"));
```

Convert simple, unique-name form fields to an object:

```javascript
const data = Object.fromEntries(new FormData(form));

console.log(data);
```

For repeated field names, use `getAll()` because `Object.fromEntries()` keeps only one value per key.

### Important form rules

- A field needs a `name` to be included in normal form submission and FormData.
- A `label` should be connected to its input using `for` and `id`.
- Disabled controls are excluded from FormData.
- Readonly controls can be included in FormData.
- Attach the submit listener to the form, not only the submit button.
- Client-side validation improves user experience, but server-side validation is still essential.

---

# 9. DOM Manipulation Mini-Project: Task Manager

### Main features

- Add a task.
- Delete a task.
- Mark a task as completed.
- Filter tasks.
- Display total, pending, and completed task counts.

### Core task data structure

```javascript
let tasks = [
    {
        id: 1,
        title: "Learn JavaScript",
        completed: false
    },
    {
        id: 2,
        title: "Practice DOM",
        completed: true
    }
];
```

### Add a task

```javascript
function addTask(title) {
    tasks.push({
        id: Date.now(),
        title: title,
        completed: false
    });
}
```

### Delete a task

```javascript
function deleteTask(id) {
    tasks = tasks.filter(function (task) {
        return task.id !== id;
    });
}
```

### Toggle completion

```javascript
function toggleTask(id) {
    tasks = tasks.map(function (task) {
        if (task.id === id) {
            return {
                ...task,
                completed: !task.completed
            };
        }

        return task;
    });
}
```

### Filter tasks

```javascript
const pendingTasks = tasks.filter(function (task) {
    return !task.completed;
});

const completedTasks = tasks.filter(function (task) {
    return task.completed;
});
```

### Render tasks

```javascript
function renderTasks() {
    taskList.textContent = "";

    tasks.forEach(function (task) {
        const li = document.createElement("li");

        li.textContent = task.title;

        taskList.appendChild(li);
    });
}
```

### Concepts used in the project

| Concept | Application |
|---|---|
| DOM selection | Select form, input, and task list |
| Events | Handle form submission and clicks |
| `preventDefault()` | Prevent page reload |
| `createElement()` | Create task elements |
| `textContent` | Insert safe task text |
| `appendChild()` | Add task elements |
| `classList` | Mark completed tasks |
| Event delegation | Handle clicks on task buttons |
| `filter()` | Delete and filter tasks |
| `map()` | Update task completion |
| `forEach()` | Render task list |

---

# 10. Important Comparisons for Interviews

| Comparison | Key difference |
|---|---|
| HTML vs DOM | HTML is markup; DOM is the browser's object representation |
| Node vs Element | Every element is a node, but not every node is an element |
| `getElementById()` vs `querySelector()` | ID-specific selection vs CSS selector |
| `querySelector()` vs `querySelectorAll()` | First match vs all matches |
| HTMLCollection vs NodeList | HTMLCollection is live; NodeList behavior depends on how it is obtained |
| `textContent` vs `innerText` | All descendant text vs rendered text |
| `innerHTML` vs `textContent` | HTML markup parsing vs plain text |
| `style` vs `classList` | Inline CSS changes vs class management |
| `appendChild()` vs `append()` | Node-only vs nodes and strings |
| `remove()` vs `removeChild()` | Element removes itself vs parent removes a child |
| `target` vs `currentTarget` | Original event target vs current listener element |
| Capturing vs bubbling | Ancestor-to-target vs target-to-ancestor |
| `preventDefault()` vs `stopPropagation()` | Cancels default action vs stops propagation |
| `onclick` vs `addEventListener()` | Single handler property vs multiple registered listeners |
| `input` vs `change` | Changes during editing vs committed value change |

---

# 11. Common Mistakes to Avoid

### 1. Forgetting to select the correct element

```javascript
document.querySelector("title");
```

This selects the HTML `<title>` element, not an element with ID `title`.

Correct:

```javascript
document.querySelector("#title");
```

### 2. Using innerHTML for untrusted input

```javascript
box.innerHTML = userInput;
```

Prefer:

```javascript
box.textContent = userInput;
```

### 3. Forgetting that createElement does not insert automatically

```javascript
const p = document.createElement("p");
p.textContent = "Hello";

// Still not displayed until inserted
document.body.appendChild(p);
```

### 4. Replacing all classes accidentally

```javascript
element.className = "active";
```

This replaces the entire class attribute.

Use `classList.add("active")` when you want to preserve existing classes.

### 5. Using the wrong event target

```javascript
event.target.remove();
```

This may remove a nested icon or text-related element instead of the intended button or item.

Use `closest()` to find the intended element.

### 6. Attaching listeners before elements exist

Place scripts appropriately, use `defer`, or wait for `DOMContentLoaded`.

### 7. Trying to remove a different function reference

```javascript
button.addEventListener("click", function () {
    console.log("Hello");
});

button.removeEventListener("click", function () {
    console.log("Hello");
});
```

This does not remove the original listener because these are two different function objects.

### 8. Forgetting preventDefault on custom form handling

```javascript
form.addEventListener("submit", function (event) {
    event.preventDefault();
});
```

Use it when your JavaScript should handle submission without the browser's normal navigation/submission behavior.

---

# 12. Quick Syntax Cheat Sheet

```javascript
// DOM selection
document.getElementById("id");
document.getElementsByClassName("class");
document.getElementsByTagName("p");
document.querySelector(".class");
document.querySelectorAll(".class");

// Content
element.textContent = "Hello";
element.innerText = "Hello";
element.innerHTML = "<b>Hello</b>";
element.value = "Prajwal";

// Attributes
element.getAttribute("href");
element.setAttribute("href", "https://example.com");
element.removeAttribute("disabled");
element.hasAttribute("required");

// CSS and classes
element.style.color = "red";
element.className = "active";
element.classList.add("active");
element.classList.remove("active");
element.classList.toggle("active");
element.classList.contains("active");

// Create and insert
document.createElement("div");
document.createTextNode("Hello");
parent.appendChild(child);
parent.append(child);
parent.prepend(child);
parent.insertBefore(newElement, referenceElement);

// Replace and remove
oldElement.replaceWith(newElement);
parent.replaceChild(newElement, oldElement);
element.remove();
parent.removeChild(child);

// Events
element.addEventListener("click", handler);
element.removeEventListener("click", handler);

// Event object
event.target;
event.currentTarget;
event.preventDefault();
event.stopPropagation();

// Forms
input.value;
checkbox.checked;
new FormData(form);
form.checkValidity();
form.reportValidity();
```

---

# 13. Final Revision Checklist

Before moving to the next module, make sure you can explain and use these concepts:

- [ ] Explain what DOM is and draw a DOM tree.
- [ ] Differentiate nodes and elements.
- [ ] Select elements using all five major selection methods.
- [ ] Explain live HTMLCollection vs static NodeList.
- [ ] Use `textContent`, `innerText`, and `innerHTML`.
- [ ] Get, set, and remove HTML attributes.
- [ ] Change inline CSS and manage classes.
- [ ] Create and insert new HTML elements.
- [ ] Replace, remove, and clone elements.
- [ ] Explain event listeners and remove them correctly.
- [ ] Explain the Event object and its properties.
- [ ] Draw capturing, target, and bubbling phases.
- [ ] Explain event delegation and use `closest()`.
- [ ] Handle form submissions and validate inputs.
- [ ] Build a dynamic task manager using DOM methods.

---

## Module 5 — One-Line Summary

**DOM Manipulation is the process of using JavaScript to select, access, modify, create, remove, and respond to HTML elements dynamically through the browser's Document Object Model.**

**Important learning reminder:** DOM manipulation is not just about changing HTML. It combines JavaScript fundamentals, functions, arrays, objects, events, and browser APIs to create interactive web applications.
