const readBtn = document.querySelector('.readToggle');
const deleteBtn = document.querySelector('.delete');

readBtn.addEventListener('click', () => {

})


deleteBtn.addEventListener('click', () => {

})



const myLibrary = [];

// constructor:
function Book(title, author, pages, hasRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
    // have 3 options "read" "not read" "currently reading"
}

// placeholder books for now to help build around
const book1 = new Book('IT', 'Stephen King', 1138, 'currently reading');
const book2 = new Book('Frankenstein; or, The Modern Prometheus', 'Mary Shelley', 280, 'read');
const book3 = new Book('Stories of Your Life and Others', 'Ted Chiang', 333, 'not read');
const book4 = new Book('The Curious Incident of the Dog in the Night-Time', 'Mark Haddon', 274, 'read');
const book5 = new Book('Hatchet', 'Gary Paulsen', 186, 'read');
const book6 = new Book('Contact', 'Carl Sagan', 432, 'not read');



function addBookToLibrary() {

}


function bookCheck(){
    
}