
const newBookButton = document.querySelector("#new_book_button");
const bookDisplay = document.querySelector("#book_display");
const newBookForm = document.querySelector("#new_book_form");
const newBookDialog = document.querySelector('#new_book_dialog');

const myLibrary = [];


// Book constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

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


function addBookToLibrary(book) {
    myLibrary.push(book);
    newBookDialog.close();
    displayLibrary();
}


function displayLibrary() {
    for(let i = 0; i < myLibrary.length; i++) {
        // crate new book entry display
        const newBookEntry = document.createElement("div");
        newBookEntry.classList.add("book_entry");

        const titleDiv = document.createElement("div");
        titleDiv.textContent = myLibrary[i].title;

        const authroDiv = document.createElement("div");
        authroDiv.textContent = myLibrary[i].author;

        const pagesDiv = document.createElement("div");
        pagesDiv.textContent = myLibrary[i].pages;

        const readDiv = document.createElement("div");
        readDiv.textContent = myLibrary[i].read;

        newBookEntry.appendChild(titleDiv);
        newBookEntry.appendChild(authroDiv);
        newBookEntry.appendChild(pagesDiv);
        newBookEntry.appendChild(readDiv);
        bookDisplay.appendChild(newBookEntry);
    }
}


newBookButton.addEventListener('click', (event) => {
    newBookDialog.show();
});


newBookForm.addEventListener('submit', (event) => {
    const bookTitle = document.querySelector("#book_title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const read = document.querySelector("#read").value;
    const newBook = new Book(bookTitle, author, pages, read);
    addBookToLibrary(newBook);

    event.preventDefault();
    console.log(bookTitle);
});


const myBook = new Book("My Book", "Harley Stroud", 543, false);
console.log(myBook.info());