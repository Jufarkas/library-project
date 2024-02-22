const readBtn = document.querySelectorAll('.readToggle')
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




// constructor:
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
    let book = title;
    myLibrary[book] = new Book(title, author, pages, hasRead);
    console.log(myLibrary);
    let children = wrapper.childNodes;
    children.forEach((item) => {
        let newNode = item.cloneNode(true);
        bookList.appendChild(newNode);
    })
}


// open dialog box to submit new book; clears any previous values
addNewBook.addEventListener('click', () => {
    document.getElementById('bookTitle').value = '';
    document.getElementById('bookAuthor').value = '';
    document.getElementById('bookPages').value = '';
    dialog.showModal();
});

// Grabs values from form inputs, creates new Book with function, closes dialog box

submit.addEventListener('click', (e) => {
    e.preventDefault();
    title = document.getElementById('bookTitle').value;
    author = document.getElementById('bookAuthor').value;
    pages = document.getElementById('bookPages').value;
    hasRead = document.getElementById('readStatus').value;
    createNewBook(title, author, pages, hasRead);
    dialog.close();
})


// create change 'read' status below; need to rewrite




// watches ul element for a button ( = 'delete) click and removes that item
bookList.addEventListener('click', (e) => {
    const target = e.target;
    let x = target.parentNode;
    if (target.classList.contains('delete')) {
        x.parentNode.remove()
    }
    // removeBook();
});


//Set a variable to be = title.textContent of the item that's selected
//splice out "title.textContent" variable from the array using a function that checks
//the array index against the title, and removes it when you click delete          

// function removeBook(){
//     for(let i = myLibrary.length - 1; i >= 0; i--){
//         if(myLibrary[i].title == title){
//             myLibrary.splice(i, 1);
//         }
//     }
// };