
const newBookButton = document.querySelector("#new_book_button");
const bookDisplay = document.querySelector("#book_display");
const newBookForm = document.querySelector("#new_book_form");
const newBookDialog = document.querySelector('#new_book_dialog');
const readButton = document.querySelector("#read");

const myLibrary = [];


// Book constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.toggleRead = function() {
        this.read = !read;
    }

    this.info = function() {
        let readStatusText = "";
        if(read) {
            readStatusText = "read";
        }
        else {
            readStatusText = "not read yet";
        }
        return `${title} by ${author}, ${pages} pages, ${readStatusText}`;
    }
}


function displayLibrary() {
    for(let i = 0; i < myLibrary.length; i++) {
        addNewBookToDisplay(myLibrary[i]);
    }
}


function addBookToLibrary(book) {
    myLibrary.push(book);
    newBookDialog.close();
    addNewBookToDisplay(book);
}


function addNewBookToDisplay(book) {
    // crate new book entry display
    const newBookEntry = document.createElement("div");
    newBookEntry.classList.add("book_entry");

    const titleDiv = document.createElement("div");
    titleDiv.textContent = `Title: ${book.title}`;

    const authroDiv = document.createElement("div");
    authroDiv.textContent = `Author: ${book.author}`;

    const pagesDiv = document.createElement("div");
    pagesDiv.textContent = `Pages: ${book.pages}`;

    const readCheckbox = document.createElement("input");
    readCheckbox.type = "checkbox";
    readCheckbox.id = "readButton";
    readCheckbox.checked = book.read;

    // Create read checkbox with a label.
    const readCheckboxWrapper = document.createElement("p");
    const readCheckBoxLabel = document.createElement("label");
    readCheckBoxLabel.setAttribute("for", "#readButton");
    readCheckBoxLabel.textContent = "Read";

    readCheckboxWrapper.appendChild(readCheckBoxLabel);
    readCheckboxWrapper.appendChild(readCheckbox);

    readCheckbox.addEventListener("change", () => {
        book.read = readCheckbox.checked;
        console.log(book);
    });


    newBookEntry.appendChild(titleDiv);
    newBookEntry.appendChild(authroDiv);
    newBookEntry.appendChild(pagesDiv);
    newBookEntry.appendChild(readCheckboxWrapper);
    bookDisplay.appendChild(newBookEntry);
}


newBookButton.addEventListener('click', (event) => {
    newBookDialog.show();
});


newBookForm.addEventListener('submit', (event) => {
    const bookTitle = document.querySelector("#book_title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const isBookRead = readButton.checked;
    const newBook = new Book(bookTitle, author, pages, isBookRead);

    addBookToLibrary(newBook);
    event.preventDefault();
    console.log(newBook);
});