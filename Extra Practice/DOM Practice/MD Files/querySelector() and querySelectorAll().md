
# JavaScript DOM: querySelector() and querySelectorAll()

## 1. Introduction

JavaScript provides two important DOM methods to select HTML elements:

1. `querySelector()`
2. `querySelectorAll()`

Both methods use CSS selectors to find HTML elements in the DOM.

### Main Difference

- `querySelector()` returns the **first matching element**.
- `querySelectorAll()` returns **all matching elements**.

---

# 2. querySelector()

## Definition

`querySelector()` is a JavaScript DOM method used to select the first HTML element that matches the specified CSS selector.

If multiple elements match, it returns only the first matching element.

If no element matches, it returns `null`.

## Syntax

```javascript
document.querySelector("CSS_SELECTOR");
```

## Example HTML

```html
<!DOCTYPE html>
<html>
<head>
    <title>DOM Example</title>
</head>
<body>

    <h1 id="heading">Welcome to JavaScript</h1>

    <p class="info">First Paragraph</p>
    <p class="info">Second Paragraph</p>
    <p class="info">Third Paragraph</p>

    <button>Click Me</button>

</body>
</html>
```

## Example 1: Select by Tag Name

```javascript
let heading = document.querySelector("h1");

console.log(heading);
console.log(heading.innerText);
```

**Output:**

```text
<h1 id="heading">Welcome to JavaScript</h1>
Welcome to JavaScript
```

**Explanation:**

- `"h1"` selects elements using their HTML tag name.
- `querySelector()` returns the first matching element.
- `innerText` retrieves the visible text.

## Example 2: Select by ID

```javascript
let heading = document.querySelector("#heading");

console.log(heading.innerText);
```

**Output:**

```text
Welcome to JavaScript
```

**Explanation:**

- `#heading` is a CSS ID selector.
- `#` is used to select an element by its ID.

## Example 3: Select by Class

```javascript
let paragraph = document.querySelector(".info");

console.log(paragraph.innerText);
```

**Output:**

```text
First Paragraph
```

**Explanation:**

- `.info` selects elements having the class `info`.
- Even though three paragraphs have this class, only the first matching element is returned.
- `.` is used to select an element by its class.

## Example 4: Select by Attribute

### HTML

```html
<input type="text" name="username">
<input type="password" name="password">
```

### JavaScript

```javascript
let input = document.querySelector('input[type="password"]');

console.log(input);
```

**Explanation:**

- `input` selects input elements.
- `[type="password"]` selects the input whose type attribute is password.

## Example 5: Select Nested Elements

### HTML

```html
<div class="container">
    <p>Inside Container</p>
</div>
```

### JavaScript

```javascript
let paragraph = document.querySelector(".container p");

console.log(paragraph.innerText);
```

**Output:**

```text
Inside Container
```

**Explanation:**

`.container p` selects a paragraph that is a descendant of an element having the class `container`.

---

# 3. querySelectorAll()

## Definition

`querySelectorAll()` is a JavaScript DOM method used to select all HTML elements that match the specified CSS selector.

It returns a **NodeList** containing all matching elements.

If no elements match, it returns an empty NodeList.

## Syntax

```javascript
document.querySelectorAll("CSS_SELECTOR");
```

## Example 1: Select All Elements by Tag Name

### HTML

```html
<p>First Paragraph</p>
<p>Second Paragraph</p>
<p>Third Paragraph</p>
```

### JavaScript

```javascript
let paragraphs = document.querySelectorAll("p");

console.log(paragraphs);
console.log(paragraphs.length);
```

**Output:**

```text
NodeList(3)
3
```

**Explanation:**

- `"p"` selects all paragraph elements.
- The result is a NodeList.
- `length` returns the total number of matched elements.

## Example 2: Select All Elements by Class

### HTML

```html
<p class="info">First Paragraph</p>
<p class="info">Second Paragraph</p>
<p class="info">Third Paragraph</p>
```

### JavaScript

```javascript
let paragraphs = document.querySelectorAll(".info");

console.log(paragraphs);
```

**Output:**

```text
NodeList(3)
```

All three paragraphs are selected.

## Example 3: Access Individual Elements

```javascript
let paragraphs = document.querySelectorAll(".info");

console.log(paragraphs[0].innerText);
console.log(paragraphs[1].innerText);
console.log(paragraphs[2].innerText);
```

**Output:**

```text
First Paragraph
Second Paragraph
Third Paragraph
```

**Explanation:**

NodeList elements can be accessed using indexes.

- `[0]` accesses the first element.
- `[1]` accesses the second element.
- `[2]` accesses the third element.

Remember: Array indexing starts from `0`.

## Example 4: Using forEach()

We can use `forEach()` to iterate over all elements returned by `querySelectorAll()`.

### HTML

```html
<p class="info">HTML</p>
<p class="info">CSS</p>
<p class="info">JavaScript</p>
```

### JavaScript

```javascript
let paragraphs = document.querySelectorAll(".info");

paragraphs.forEach(function(element) {
    console.log(element.innerText);
});
```

**Output:**

```text
HTML
CSS
JavaScript
```

**Explanation:**

- `forEach()` iterates over every element in the NodeList.
- `element` represents the current element.
- `innerText` retrieves its text.

## Example 5: Using a for Loop

```javascript
let paragraphs = document.querySelectorAll(".info");

for (let i = 0; i < paragraphs.length; i++) {
    console.log(paragraphs[i].innerText);
}
```

**Output:**

```text
HTML
CSS
JavaScript
```

---

# 4. Difference Between querySelector() and querySelectorAll()

| Feature | querySelector() | querySelectorAll() |
|---|---|---|
| Purpose | Selects the first matching element | Selects all matching elements |
| Return Type | Element or null | NodeList |
| Multiple Matches | Returns only the first | Returns all |
| No Match | Returns null | Returns empty NodeList |
| Indexing | Not required | Can access using indexes |
| Iteration | Not normally needed | Can use forEach() |
| Syntax | `document.querySelector("p")` | `document.querySelectorAll("p")` |

---

# 5. Important CSS Selectors Used in DOM

| Selector | Meaning | Example |
|---|---|---|
| `p` | Select by tag name | `querySelector("p")` |
| `#id` | Select by ID | `querySelector("#heading")` |
| `.class` | Select by class | `querySelector(".info")` |
| `*` | Select all elements | `querySelectorAll("*")` |
| `div p` | Select descendant paragraph | `querySelectorAll("div p")` |
| `div > p` | Select direct child paragraph | `querySelectorAll("div > p")` |
| `h1, p` | Select h1 and p elements | `querySelectorAll("h1, p")` |
| `[type="text"]` | Select by attribute | `querySelector('input[type="text"]')` |
| `ul li` | Select list items inside ul | `querySelectorAll("ul li")` |

---

# 6. Important Points to Remember

1. Both methods use CSS selector syntax.
2. `querySelector()` returns only the first matching element.
3. `querySelectorAll()` returns all matching elements.
4. `querySelector()` returns `null` when no matching element is found.
5. `querySelectorAll()` returns an empty NodeList when no matching elements are found.
6. NodeList indexing starts from `0`.
7. `querySelectorAll()` returns a static NodeList, meaning it does not automatically update when the DOM changes.
8. `querySelectorAll()` supports `forEach()`.
9. Use `#` for ID selectors and `.` for class selectors.
10. These methods can be called on `document` or on individual elements.

---

# 7. Common Mistakes

## Mistake 1: Forgetting # for ID

Incorrect:

```javascript
document.querySelector("heading");
```

Correct:

```javascript
document.querySelector("#heading");
```

## Mistake 2: Forgetting . for Class

Incorrect:

```javascript
document.querySelector("info");
```

Correct:

```javascript
document.querySelector(".info");
```

## Mistake 3: Using Indexing with querySelector()

Incorrect:

```javascript
let heading = document.querySelector("h1");

console.log(heading[0].innerText);
```

Correct:

```javascript
let heading = document.querySelector("h1");

console.log(heading.innerText);
```

Reason: `querySelector()` returns one element, not a collection.

## Mistake 4: Accessing an Element Without Checking

```javascript
let heading = document.querySelector("#heading");

console.log(heading.innerText);
```

If the element does not exist, JavaScript returns `null` and accessing `innerText` causes an error.

Safer approach:

```javascript
let heading = document.querySelector("#heading");

if (heading !== null) {
    console.log(heading.innerText);
}
```

## Mistake 5: Using querySelector() When All Elements Are Required

```javascript
let paragraphs = document.querySelector("p");

console.log(paragraphs);
```

This selects only the first paragraph.

Correct:

```javascript
let paragraphs = document.querySelectorAll("p");

console.log(paragraphs);
```

---

# 8. Interview Questions and Answers

### Q1. What is querySelector()?

`querySelector()` is a DOM method that returns the first element matching the specified CSS selector. It returns null if no matching element is found.

### Q2. What is querySelectorAll()?

`querySelectorAll()` is a DOM method that returns a static NodeList containing all elements matching the specified CSS selector.

### Q3. What is the difference between querySelector() and querySelectorAll()?

`querySelector()` returns the first matching element, whereas `querySelectorAll()` returns all matching elements in a NodeList.

### Q4. What is a NodeList?

A NodeList is a collection of DOM nodes returned by certain DOM methods, such as `querySelectorAll()`.

### Q5. Does querySelectorAll() return an array?

No. It returns a NodeList, not an actual JavaScript Array. However, it supports methods such as `forEach()`.

### Q6. What happens if no element is found?

- `querySelector()` returns `null`.
- `querySelectorAll()` returns an empty NodeList.

### Q7. Can we use CSS selectors with querySelector()?

Yes. We can use tag, ID, class, attribute, descendant, child, and other valid CSS selectors.

### Q8. Can querySelectorAll() select multiple classes?

Yes.

```javascript
let elements = document.querySelectorAll(".box, .info");
```

This selects elements having either the `box` class or the `info` class.

### Q9. Is querySelectorAll() live or static?

It returns a static NodeList. Changes to the DOM do not automatically update the previously returned NodeList.

### Q10. Can we use querySelector() on an individual HTML element?

Yes.

```javascript
let container = document.querySelector(".container");

let paragraph = container.querySelector("p");
```

This searches for the first matching paragraph inside the container.

---

# 9. Practice Questions

Use the following HTML:

```html
<div id="container">

    <h1 class="title">JavaScript DOM</h1>

    <p class="info">HTML</p>
    <p class="info">CSS</p>
    <p class="info">JavaScript</p>

    <button class="btn">Submit</button>
    <button class="btn">Reset</button>

</div>
```

### Beginner Level

1. Select the h1 element using querySelector().
2. Select the first paragraph using querySelector().
3. Select the element having ID container.
4. Select the first button using querySelector().
5. Select all paragraph elements using querySelectorAll().

### Intermediate Level

6. Select all elements having class info.
7. Print the text of all paragraphs using forEach().
8. Print the total number of buttons.
9. Select all buttons and print their text using a for loop.
10. Select all h1 and p elements together.

### Advanced Level

11. Select all paragraph elements inside the container.
12. Select only direct child paragraphs of the container.
13. Select all elements having either title or info class.
14. Select the second button and print its text.
15. Check whether an element with ID heading exists before accessing its text.

---

# 10. Practice Questions: Solutions

### 1. Select h1

```javascript
let heading = document.querySelector("h1");
console.log(heading.innerText);
```

### 2. Select first paragraph

```javascript
let paragraph = document.querySelector("p");
console.log(paragraph.innerText);
```

### 3. Select container

```javascript
let container = document.querySelector("#container");
console.log(container);
```

### 4. Select first button

```javascript
let button = document.querySelector(".btn");
console.log(button.innerText);
```

### 5. Select all paragraphs

```javascript
let paragraphs = document.querySelectorAll("p");
console.log(paragraphs);
```

### 6. Select all info elements

```javascript
let info = document.querySelectorAll(".info");
console.log(info);
```

### 7. Print all paragraph text

```javascript
let paragraphs = document.querySelectorAll("p");

paragraphs.forEach(function(element) {
    console.log(element.innerText);
});
```

### 8. Count buttons

```javascript
let buttons = document.querySelectorAll("button");

console.log(buttons.length);
```

Output:

```text
2
```

### 9. Print all button text using for loop

```javascript
let buttons = document.querySelectorAll("button");

for (let i = 0; i < buttons.length; i++) {
    console.log(buttons[i].innerText);
}
```

Output:

```text
Submit
Reset
```

### 10. Select h1 and p together

```javascript
let elements = document.querySelectorAll("h1, p");

console.log(elements);
```

### 11. Select paragraphs inside container

```javascript
let paragraphs = document.querySelectorAll("#container p");

console.log(paragraphs);
```

### 12. Select direct child paragraphs

```javascript
let paragraphs = document.querySelectorAll("#container > p");

console.log(paragraphs);
```

### 13. Select title or info class

```javascript
let elements = document.querySelectorAll(".title, .info");

console.log(elements);
```

### 14. Select second button

```javascript
let buttons = document.querySelectorAll(".btn");

console.log(buttons[1].innerText);
```

Output:

```text
Reset
```

### 15. Check whether heading exists

```javascript
let heading = document.querySelector("#heading");

if (heading !== null) {
    console.log(heading.innerText);
} else {
    console.log("Heading not found");
}
```

---

# 11. Quick Revision

| Method | Remember |
|---|---|
| `querySelector()` | First matching element |
| `querySelectorAll()` | All matching elements |
| `innerText` | Gets visible text |
| `textContent` | Gets text content, including hidden text |
| `length` | Gets number of elements in a NodeList |
| `forEach()` | Iterates over NodeList elements |
| `#` | ID selector |
| `.` | Class selector |

**Final Interview Definition:**

`querySelector()` selects the first DOM element matching a specified CSS selector, while `querySelectorAll()` selects all matching DOM elements and returns them as a static NodeList.
