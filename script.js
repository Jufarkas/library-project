const deleteBtn = document.querySelectorAll('.delete');
const dialog = document.querySelector('dialog');
const addNewBook = document.querySelector('.showDialog');
const submit = document.querySelector('.formConfirm');
const bookList = document.querySelector('.book-list');
const wrapper = document.querySelector('.wrapper');
let title;
let author;
let pages;
let hasRead;
let myLibrary = [];




// constructor

function Book(title, author, pages, hasRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
}


// creates new book with Book constructor; adds to myLibrary array; cloneNode's list item template (hidden '.wrapper') with new book information

function createNewBook(title, author, pages, hasRead){
    let newTitle = document.querySelector('.title');
    let newAuthor = document.querySelector('.author');
    let newPages = document.querySelector('.pages');
    let newStatus = document.querySelector('.status');
    newTitle.textContent = title;
    newAuthor.textContent = 'Author: ' + author;
    newPages.textContent = 'Pages: ' + pages;
    newStatus.textContent = 'Status: ' + hasRead;
    // assigns new Book title as the key in myLibrary to easily reference later to delete
    myLibrary[title] = new Book(title, author, pages, hasRead);

    let children = wrapper.childNodes;
    children.forEach((item) => {
        let newNode = item.cloneNode(true);
        bookList.appendChild(newNode);
        // below changes read/unread textcontent depending on user input
        let status = document.querySelector('.status').textContent;
        let readBtn = document.querySelector('.readToggle');
        if(status === "Status: read"){
            readBtn.textContent = "Mark as unread";
        } else if (status === "Status: not read") {
            readBtn.textContent = "Mark as read";
        }
    })
}


// clears any previous values; opens dialog box to submit new book

addNewBook.addEventListener('click', () => {
    document.getElementById('bookTitle').value = '';
    document.getElementById('bookAuthor').value = '';
    document.getElementById('bookPages').value = '';
    dialog.showModal();
});


// Grabs form input values via IDs; creates new Book via function; closes dialog box

submit.addEventListener('click', (e) => {
    e.preventDefault();
    title = document.getElementById('bookTitle').value;
    author = document.getElementById('bookAuthor').value;
    pages = document.getElementById('bookPages').value;
    hasRead = document.getElementById('readStatus').value;
    createNewBook(title, author, pages, hasRead);

    dialog.close();
})


// watches ul element for a button ( = 'delete) click and removes that element from the DOM; runs function to delete title from array

bookList.addEventListener('click', (e) => {
    const target = e.target;
    let x = target.parentNode;
    let book = x.parentNode;
    // sets bookToDelete to the 'title' of the parent>parent
    let bookToDelete = book.querySelector('.title').textContent;
    if (target.classList.contains('delete')) {
        book.remove();
        // pass book title into function
        removeBook(bookToDelete);
    } else if (target.classList.contains('readToggle')){
        // changes read/unread status && button
        let readStatus = book.querySelector('.status');
        let readBtn = x.querySelector('.readToggle');
        if(hasRead.textContent === "Status:"){
            readStatus.textContent = "Status: read";
            readBtn.textContent = "Mark as unread"
        } else if (readStatus.textContent === "Status: read") {
            readStatus.textContent = "Status: not read";
            readBtn.textContent = "Mark as read";
        } else {
            readStatus.textContent = "Status: read";
            readBtn.textContent = "Mark as unread";
        }
    }
    

});


// looks in myLibrary array for the title, passed in from the delete button event listener above, then deletes from array

function removeBook(bookToDelete){
    if(myLibrary[bookToDelete]){
        delete myLibrary[bookToDelete]
    };
};