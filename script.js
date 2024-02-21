const readBtn = document.querySelectorAll('.readToggle')
const deleteBtn = document.querySelectorAll('.delete');
const dialog = document.querySelector('dialog');
const addNewBook = document.querySelector('.showDialog');
const submit = document.querySelector('.formConfirm');
let title;
let author;
let pages;
let hasRead;


addNewBook.addEventListener('click', () => {
    dialog.showModal();
});

submit.addEventListener('click', () => {
    alert ("clicked");
})


// change 'read' status

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


// deleteBtn.addEventListener('click', () => {
//     let bookList = document.querySelector('.book-list')
//     bookList.removeChild()
// })



const myLibrary = [];

// constructor:
function Book(title, author, pages, hasRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
    // have 2 options "read" "not read"
}

// placeholder books for now to help build around
const book1 = new Book('IT', 'Stephen King', 1138, 'read');
const book2 = new Book('Frankenstein; or, The Modern Prometheus', 'Mary Shelley', 280, 'read');
const book3 = new Book('Stories of Your Life and Others', 'Ted Chiang', 333, 'not read');
const book4 = new Book('The Curious Incident of the Dog in the Night-Time', 'Mark Haddon', 274, 'read');
const book5 = new Book('Hatchet', 'Gary Paulsen', 186, 'read');
const book6 = new Book('Contact', 'Carl Sagan', 432, 'not read');



function addBookToLibrary() {

}


function bookCheck(){
    
}