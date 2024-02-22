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
const myLibrary = [];



// constructor:
function Book(title, author, pages, hasRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
    // have 2 options "read" "not read"
}


function createNewBook(title, author, pages, hasRead){
    let i = myLibrary.length + 1;
    let newBook = `book${i}`;
    newBook = new Book(title, author, pages, hasRead);
    console.log(newBook);
   //clone the list and apply all the values to the textContent 
    let children = wrapper.childNodes;
    children.forEach((item) => {
        let newNode = item.cloneNode(true);
        bookList.appendChild(newNode);
    })
}

// open dialog box to submit new book
addNewBook.addEventListener('click', () => {
    document.getElementById('bookTitle').value = '';
    document.getElementById('bookAuthor').value = '';
    document.getElementById('bookPages').value = '';
    dialog.showModal();
});

// Grabs values from form inputs, creates new Book with function, adds book title to array, closes dialog box

submit.addEventListener('click', (e) => {
    e.preventDefault();
    title = document.getElementById('bookTitle').value;
    author = document.getElementById('bookAuthor').value;
    pages = document.getElementById('bookPages').value;
    hasRead = document.getElementById('readStatus').value;
    createNewBook(title, author, pages, hasRead);

    // adds new book to library array so that it can be searched for and closes dialog box
    myLibrary.push(title);
    dialog.close();
})


// change 'read' status, will have to setup similar to the delete button

// readBtn.forEach(function(button){
//     button.addEventListener('click', () => {
//         let readStatus = document.querySelectorAll('.hasRead');
//         if(hasRead.textContent === "Status:"){
//             readStatus.textContent = "Status: read";
//             button.textContent = "Mark as unread"
//         } else if (readStatus.textContent === "Status: read") {
//             readStatus.textContent = "Status: not yet read";
//             button.textContent = "Mark as read";
//         } else {
//             readStatus.textContent = "Status: read";
//             button.textContent = "Mark as unread";
//         }
//     })
// });


// watches ul element for a button ( = 'delete) click and removes that item
bookList.addEventListener('click', (e) => {
    const target = e.target;
    let x = target.parentNode;
    if (target.classList.contains('delete')) {
        x.parentNode.remove()
    }
    // removeBook(x);
});


//Set a variable to be = title.textContent
//splice out "title.textContent" variable from the array using a function that checks
//the array index against the title, and removes it when you click delete          

// function removeBook(x){
//     let item = title.textContent;
//     const index = array.indexOf(item);
//     if (index > -1) {               //<-- only splice array when item is found
//         array.splice(index, 1);     //<-- 2nd parameter means remove one item only
//     }
// };



// function bookCheck(){
    
// }