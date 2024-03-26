class NewBook {

    static title;
    static author;
    static pages;
    static hasRead;
    static myLibrary = [];

    constructor(title, author, pages, hasRead) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.hasRead = hasRead;
    }
    
    static dialog = document.querySelector('dialog');
    static wrapper = document.querySelector('.wrapper');
    static bookList = document.querySelector('.book-list');

    // creates new book with Book constructor; adds to myLibrary array; cloneNode's list item template (hidden '.wrapper') with new book information
    static createNewBook(title, author, pages, hasRead){
        if(this.myLibrary.hasOwnProperty(title)){
            alert("Book already exists!");
            return;
        }
        let newTitle = document.querySelector('.title');
        let newAuthor = document.querySelector('.author');
        let newPages = document.querySelector('.pages');
        let newStatus = document.querySelector('.status');
        newTitle.textContent = title;
        newAuthor.textContent = 'Author: ' + author;
        newPages.textContent = 'Pages: ' + pages;
        newStatus.textContent = 'Status: ' + hasRead;
        this.myLibrary[title] = new NewBook(title, author, pages, hasRead);

        let children = this.wrapper.childNodes;
        children.forEach((item) => {
            let newNode = item.cloneNode(true);
            this.bookList.appendChild(newNode);
            // below changes read/unread textcontent depending on user input
            let status = document.querySelector('.status').textContent;
            let readBtn = document.querySelector('.readToggle');
            if(status === "Status: read"){
                readBtn.textContent = "Mark as unread";
                this.title
            } else if (status === "Status: not read") {
                readBtn.textContent = "Mark as read";
            }
        })
    }

    static addBtnListeners(){
        // clears any previous values; opens dialog box to submit new book
        const addNewBook = document.querySelector('.showDialog');
        let submit = document.querySelector('.formConfirm');
        addNewBook.addEventListener('click', () => {
            document.querySelector('form').reset();
            this.dialog.showModal();
        });

        // Grabs form input values via IDs; creates new Book via function; closes dialog box
        submit.addEventListener('click', (e) => {
            e.preventDefault();
            let title = document.getElementById('bookTitle').value;
            let author = document.getElementById('bookAuthor').value;
            let titleCheck = /^(?=.*[^\s])[a-zA-Z0-9\s]*$/.test(title);
            let authorCheck = /^(?=.*[^\s])[a-zA-Z\s]*$/.test(author);
            if (!titleCheck){
                const bookTitle = document.getElementById('bookTitle');
                bookTitle.setCustomValidity("Min 2 characters, no special characters");
                bookTitle.reportValidity();
                return;
            } else if (!authorCheck){
                const bookAuthor = document.getElementById('bookAuthor');
                bookAuthor.setCustomValidity("Min 2 characters, no special characters or numbers");
                bookAuthor.reportValidity();
                return;
            }
            this.title = title;
            this.author = author;
            this.pages = document.getElementById('bookPages').value;
            this.hasRead = document.getElementById('readStatus').value;
            NewBook.createNewBook(this.title, this.author, this.pages, this.hasRead);
            this.dialog.close();
        })

        // watches ul element for a button ( = 'delete) click and removes that element from the DOM; runs function to delete title from array
        this.bookList.addEventListener('click', (e) => {
            const target = e.target;
            let x = target.parentNode;
            let book = x.parentNode;
            // sets bookToDelete to the 'title' of the parent>parent
            let bookClicked = book.querySelector('.title').textContent;
            if (target.classList.contains('delete')) {
                book.remove();
                // pass book title into function
                this.removeBook(bookClicked);
            } else if (target.classList.contains('readToggle')){
                // changes read/unread status && button
                let readStatus = book.querySelector('.status');
                let readBtn = x.querySelector('.readToggle');
                if (readStatus.textContent === "Status: read") {
                    readStatus.textContent = "Status: not read";
                    readBtn.textContent = "Mark as read";
                    this.myLibrary[bookClicked].hasRead = "not read";
                } else {
                    readStatus.textContent = "Status: read";
                    readBtn.textContent = "Mark as unread";
                    this.myLibrary[bookClicked].hasRead = "read";
                }
            }
        });
    }
    // looks in myLibrary array for the title, passed in from the delete button event listener above, then deletes from array
    static removeBook(bookClicked){
        if(this.myLibrary[bookClicked]){
            delete this.myLibrary[bookClicked]
            console.log(this.myLibrary);
        };
    };
}

NewBook.addBtnListeners();