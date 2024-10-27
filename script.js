
const newBookButton = document.querySelector("#new_book_button");
const bookDisplay = document.querySelector("#book_display");

const myLibrary = [];



// Book constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.author.pages = pages;
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
    displayLibrary();
}



function displayLibrary() {
    for(let i = 0; i < myLibrary.length; i++) {
        // crate new book entry display
        const newBookEntry = document.createElement("div");
        newBookEntry.classList.add("book_entry");


        const titleDiv = document.createElement("div");
        titleDiv.textContent = "BOOK TITLE";

        const authroDiv = document.createElement("div");
        authroDiv.textContent = "BOOK AUTHOR";

        const pagesDiv = document.createElement("div");
        pagesDiv.textContent = "PAGES";

        const readDiv = document.createElement("div");
        readDiv.textContent = "READ";

        newBookEntry.appendChild(titleDiv);
        newBookEntry.appendChild(authroDiv);
        newBookEntry.appendChild(pagesDiv);
        newBookEntry.appendChild(readDiv);

        bookDisplay.appendChild(newBookEntry);
    }
}




newBookButton.addEventListener('click', (event) => {
    const newBook = new Book("TEST BOOK", "TEST AUTHOR", 666, true);
    addBookToLibrary(newBook);
});


const myBook = new Book("My Book", "Harley Stroud", 543, false);
console.log(myBook.info());