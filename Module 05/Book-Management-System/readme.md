# Book Management System

A simple and interactive **Book Management System** built using **HTML, CSS, and JavaScript**. This project allows users to manage a collection of books by adding, editing, and deleting book records while automatically calculating the total number of books and their combined price.

## Features

- **Add Books:** Enter a book name and price to add a new book.
- **Display Books:** View all added books in a structured table.
- **Edit Books:** Update the name and price of an existing book.
- **Delete Books:** Remove unwanted books from the list.
- **Total Books:** Automatically display the total number of books.
- **Total Price:** Calculate and display the combined price of all books.
- **Input Validation:** Prevent empty book names and invalid or negative prices.
- **Responsive Design:** Simple interface that adapts to smaller screens.

## Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Structure of the application |
| CSS3 | Styling and responsive layout |
| JavaScript | Application logic and DOM manipulation |

## Project Structure

```text
Book-Management-System/
│
├── index.html       # Application structure
├── style.css        # Application styling
├── script.js        # Application functionality
└── README.md        # Project documentation
```

## How to Run the Project

1. Clone or download this repository.
2. Open the project folder in your code editor.
3. Make sure all three source files are in the same directory.
4. Open `index.html` in your web browser.
5. Start managing your books!

No additional dependencies or installations are required.

## How It Works

### 1. Add a Book

Enter the book name and its price in the input fields and click **Add Book**. JavaScript validates the inputs and stores the book as an object inside an array.

### 2. Display Books

The application dynamically generates table rows using JavaScript DOM manipulation.

### 3. Edit a Book

Click the **Edit** button next to a book. Its existing details appear in the input fields. Update the information and click **Update Book**.

### 4. Delete a Book

Click the **Delete** button to remove a book from the collection.

### 5. Calculate Total

The application automatically updates:

- Total number of books.
- Combined price of all books.

## JavaScript Concepts Practised

This project demonstrates the following JavaScript concepts:

- Variables (`let` and `const`)
- Arrays and objects
- Functions and callback functions
- Array methods:
  - `push()`
  - `find()`
  - `filter()`
  - `forEach()`
  - `reduce()`
- DOM selection:
  - `getElementById()`
- DOM manipulation:
  - `createElement()`
  - `appendChild()`
  - `textContent`
- Event handling:
  - `addEventListener()`
  - `preventDefault()`
- Event delegation
- Input validation
- Template-free dynamic HTML generation using DOM methods
- Number formatting using `toFixed()`
- Dataset attributes (`dataset`)

## Data Storage

The current version stores book records in a JavaScript array.

**Note:** Book records are stored temporarily in browser memory. Refreshing or closing the page clears the current collection.

A future enhancement can introduce `localStorage` to preserve book records between browser sessions.

## Future Improvements

- [ ] Add localStorage for persistent data.
- [ ] Add search functionality to find books.
- [ ] Add sorting by book name or price.
- [ ] Add book categories and author details.
- [ ] Add confirmation and success messages in the interface.
- [ ] Add the ability to export the book list.
- [ ] Improve the user interface with additional features.

## Learning Objective

The main objective of this project is to gain practical experience with JavaScript DOM manipulation, event handling, arrays, objects, CRUD operations (Create, Read, Update, Delete), and dynamic table generation.
