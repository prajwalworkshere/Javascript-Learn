// =====================================
// 1. SELECT HTML ELEMENTS
// =====================================

const bookForm = document.getElementById("bookForm");

const bookNameInput = document.getElementById("bookName");

const bookPriceInput = document.getElementById("bookPrice");

const bookTableBody = document.getElementById("bookTableBody");

const totalBooksElement = document.getElementById("totalBooks");

const totalPriceElement = document.getElementById("totalPrice");

const emptyMessage = document.getElementById("emptyMessage");

const submitBtn = document.getElementById("submitBtn");

const cancelBtn = document.getElementById("cancelBtn");


// =====================================
// 2. STORE BOOKS IN AN ARRAY
// =====================================

let books = [];

let editingBookId = null;

let nextBookId = 1;


// =====================================
// 3. ADD OR UPDATE BOOK
// =====================================

bookForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const bookName = bookNameInput.value.trim();

    const bookPrice = Number(bookPriceInput.value);

    // Validate book name
    if (bookName === "") {
        alert("Please enter a book name.");
        return;
    }

    // Validate price
    if (!Number.isFinite(bookPrice) || bookPrice <= 0) {
        alert("Please enter a valid price greater than zero.");
        return;
    }


    // EDIT EXISTING BOOK
    if (editingBookId !== null) {

        const book = books.find(function(item) {
            return item.id === editingBookId;
        });

        if (book) {
            book.name = bookName;
            book.price = bookPrice;
        }

        editingBookId = null;

        submitBtn.textContent = "Add Book";

        cancelBtn.hidden = true;

    }

    // ADD NEW BOOK
    else {

        const newBook = {
            id: nextBookId,
            name: bookName,
            price: bookPrice
        };

        nextBookId++;

        books.push(newBook);

    }


    // Clear form
    bookForm.reset();

    // Update table and summary
    displayBooks();

});


// =====================================
// 4. DISPLAY BOOKS IN TABLE
// =====================================

function displayBooks() {

    // Clear previous table rows
    bookTableBody.textContent = "";

    // Show empty message when no books exist
    emptyMessage.hidden = books.length !== 0;


    // Loop through books array
    books.forEach(function(book, index) {

        // Create table row
        const row = document.createElement("tr");


        // Serial number cell
        const serialCell = document.createElement("td");

        serialCell.textContent = index + 1;


        // Book name cell
        const nameCell = document.createElement("td");

        nameCell.textContent = book.name;


        // Price cell
        const priceCell = document.createElement("td");

        priceCell.textContent = "₹" + book.price.toFixed(2);


        // Action cell
        const actionCell = document.createElement("td");


        // Edit button
        const editButton = document.createElement("button");

        editButton.textContent = "Edit";

        editButton.className = "edit-btn";

        editButton.dataset.action = "edit";

        editButton.dataset.id = book.id;


        // Delete button
        const deleteButton = document.createElement("button");

        deleteButton.textContent = "Delete";

        deleteButton.className = "delete-btn";

        deleteButton.dataset.action = "delete";

        deleteButton.dataset.id = book.id;


        // Add buttons to action cell
        actionCell.append(editButton, deleteButton);


        // Add cells to row
        row.append(
            serialCell,
            nameCell,
            priceCell,
            actionCell
        );


        // Add row to table
        bookTableBody.appendChild(row);

    });


    // Update summary
    updateSummary();

}


// =====================================
// 5. UPDATE TOTAL BOOKS AND TOTAL PRICE
// =====================================

function updateSummary() {

    // Total number of books
    const totalBooks = books.length;

    // Calculate total price
    const totalPrice = books.reduce(function(total, book) {

        return total + book.price;

    }, 0);


    // Display results
    totalBooksElement.textContent = totalBooks;

    totalPriceElement.textContent = "₹" + totalPrice.toFixed(2);

}


// =====================================
// 6. HANDLE EDIT AND DELETE
// USING EVENT DELEGATION
// =====================================

bookTableBody.addEventListener("click", function(event) {

    // Find the clicked action button
    const button = event.target.closest("button[data-action]");

    // Ignore clicks outside action buttons
    if (!button || !bookTableBody.contains(button)) {
        return;
    }

    const bookId = Number(button.dataset.id);

    const action = button.dataset.action;


    // EDIT ACTION
    if (action === "edit") {

        editBook(bookId);

    }


    // DELETE ACTION
    else if (action === "delete") {

        deleteBook(bookId);

    }

});


// =====================================
// 7. EDIT BOOK FUNCTION
// =====================================

function editBook(bookId) {

    const book = books.find(function(item) {

        return item.id === bookId;

    });


    if (!book) {
        return;
    }


    // Put existing values into inputs
    bookNameInput.value = book.name;

    bookPriceInput.value = book.price;


    // Store the ID of the book being edited
    editingBookId = bookId;


    // Change button text
    submitBtn.textContent = "Update Book";

    cancelBtn.hidden = false;


    // Bring focus to book name input
    bookNameInput.focus();

}


// =====================================
// 8. DELETE BOOK FUNCTION
// =====================================

function deleteBook(bookId) {

    const confirmDelete = confirm(
        "Are you sure you want to delete this book?"
    );

    if (!confirmDelete) {
        return;
    }


    // Remove selected book from array
    books = books.filter(function(book) {

        return book.id !== bookId;

    });


    // If currently editing book gets deleted, reset form
    if (editingBookId === bookId) {

        resetForm();

    }


    // Refresh table and totals
    displayBooks();

}


// =====================================
// 9. CANCEL EDIT FUNCTION
// =====================================

function resetForm() {

    bookForm.reset();

    editingBookId = null;

    submitBtn.textContent = "Add Book";

    cancelBtn.hidden = true;

}


cancelBtn.addEventListener("click", function() {

    resetForm();

});


// =====================================
// 10. INITIAL DISPLAY
// =====================================

displayBooks();
