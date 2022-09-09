let myLibrary = [
    {title: "A game of thrones", author: "George R.R. Martin", pages: 1000, read: "Yes"},
    {title: "Nuestra parte de noche", author: "Mariana Enriquez", pages: 500, read: "Yes"},
    {title: "Rayuela", author: "Horacio Quiroga", pages: 700, read: "No"}
];

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
    for (let i = 0; i < myLibrary.length; i++) {
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

