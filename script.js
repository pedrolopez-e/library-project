let myLibrary = [
    /*{title: "A game of thrones", author: "George R.R. Martin", pages: 1000, read: "Yes"},
    {title: "Nuestra parte de noche", author: "Mariana Enriquez", pages: 500, read: "Yes"},
    {title: "Rayuela", author: "Horacio Quiroga", pages: 700, read: "No"}*/
];

let submitClickCounter = 0;

function Book(title, author, pages, read) {
        this.title = title,
        this.author = author,
        this.pages = pages,
        this.read = read;
    }

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function showBooks() {
    for (let i = submitClickCounter; i < myLibrary.length; i++) {
        let card = document.createElement('div');
        let title = document.createElement('h2');
        let firstLine = document.createElement('div');
        let author = document.createElement('p');
        let bookAuthor = document.createElement('p');
        let secondLine = document.createElement('div');
        let pages = document.createElement('p');
        let bookPages = document.createElement('p');
        let thirdLine = document.createElement('div');
        let read = document.createElement('p');
        let isRead = document.createElement('p');
        let body = document.querySelector('body');

        title.innerHTML = myLibrary[i].title;
        author.innerHTML = "Author:";
        bookAuthor.innerHTML = myLibrary[i].author;
        pages.innerHTML = "Pages:";
        bookPages.innerHTML = myLibrary[i].pages;
        read.innerHTML = "Read?";
        isRead.innerHTML = myLibrary[i].read;


        title.classList.add('title');
        card.classList.add('card');

        body.appendChild(card);
        card.appendChild(title);
        card.appendChild(firstLine);
        card.appendChild(secondLine)
        card.appendChild(thirdLine);
        firstLine.appendChild(author);
        firstLine.appendChild(bookAuthor);
        secondLine.appendChild(pages);
        secondLine.appendChild(bookPages);
        thirdLine.appendChild(read);
        thirdLine.appendChild(isRead);
    }
}

showBooks();

const newBookButton = document.querySelector('#new-book-button');
newBookButton.addEventListener('click', () => {
    let form = document.createElement('form');
    // Title
    let titleLabel = document.createElement('label');
    let title = document.createElement('input');
    title.setAttribute("type", "text");
    title.setAttribute("id", "title");
    titleLabel.setAttribute("for", "title");
    titleLabel.innerHTML = "Title: ";
    // Author
    let authorLabel = document.createElement('label');
    let author = document.createElement('input');
    author.setAttribute("type", "text");
    author.setAttribute("id", "author");
    authorLabel.setAttribute("for", "author");
    authorLabel.innerHTML = "Author: ";
    // Pages
    let pagesLabel = document.createElement('label');
    let pages = document.createElement('input');
    pages.setAttribute("type", "number");
    pages.setAttribute("id", "pages");
    pagesLabel.setAttribute("for", "pages");
    pagesLabel.innerHTML = "Pages: ";
    // Read
    let readLabel = document.createElement('label');
    let read = document.createElement('input');
    read.setAttribute("type", "text");
    read.setAttribute("id", "read");
    readLabel.setAttribute("for", "read");
    readLabel.innerHTML = "Read? ";
    // Submit
    let submit = document.createElement('input');
    submit.setAttribute("type","submit");

    let body = document.querySelector('body');
    body.appendChild(form);
    form.appendChild(titleLabel);
    form.appendChild(title);
    form.appendChild(authorLabel);
    form.appendChild(author);
    form.appendChild(pagesLabel);
    form.appendChild(pages);
    form.appendChild(readLabel);
    form.appendChild(read);
    form.appendChild(submit);

    form.addEventListener('submit', (e) => {
        e.preventDefault();
    } );

    form.addEventListener('submit', () => {
        let values = [];
        form.querySelectorAll('input').forEach(field => values.push(field.value));
        let newBook = new Book(...values);
        myLibrary.push(newBook);
        showBooks(); 
        submitClickCounter += 1;
        form.remove();
    })
});

