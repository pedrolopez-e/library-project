let myLibrary = [];

let submitClickCounter = 0;

class Book {
    constructor(title, author, pages) {
        this.title = title,
        this.author = author,
        this.pages = pages,
        this.isRead = false;
    }
}

// This function displays the books' cards on the window. It starts in a new position after every click on the submit button.
function showBooks() {

    for (let i = 0; i < myLibrary.length; i++) {

        if (myLibrary[i] == true) {
            continue;
        }

        // Create the books' cards
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
        let body = document.querySelector('body');
        let deleteButton = document.createElement('button');
        let readOption = document.createElement('div');
        let readOptionIn = document.createElement('div');

        // Add the cards' and their children's content
        title.innerHTML = myLibrary[i].title;
        author.innerHTML = "Author:";
        author.style.fontWeight = 600;
        bookAuthor.innerHTML = myLibrary[i].author;
        pages.innerHTML = "Pages:";
        pages.style.fontWeight = 600;
        bookPages.innerHTML = myLibrary[i].pages;
        read.innerHTML = "Read?";
        read.style.fontWeight = 600;
        deleteButton.innerHTML = "-";
        deleteButton.setAttribute("data-id", i);
        readOption.setAttribute("data-id", i);

        // Adapt read option style depending on its object book isRead property
        if (myLibrary[i].isRead == false) {
            readOption.style.justifyContent = "start";
            readOption.style.backgroundColor = "gray";
            readOptionIn.style.backgroundColor = "#1f2029";
            readOption.style.boxShadow = "box-shadow: none";
        } else {
            readOption.style.justifyContent = "end";
            readOption.style.backgroundColor = "#ffeba7";
            readOptionIn.style.backgroundColor = "#102770";
            readOption.style.boxShadow = "box-shadow: 0 8px 24px 0 rgb(255 235 167 / 20%)";
        }

        // Create class and id for the card, its title and the delete button that you will later use in the stylings.
        title.classList.add('book-title');
        card.classList.add('card');
        deleteButton.classList.add('delete-button');
        readOption.classList.add("read-option-button");

        // Append the created elements
        body.appendChild(card);
        card.appendChild(title);
        card.appendChild(firstLine);
        card.appendChild(secondLine)
        card.appendChild(thirdLine);
        card.appendChild(deleteButton);
        firstLine.appendChild(author);
        firstLine.appendChild(bookAuthor);
        secondLine.appendChild(pages);
        secondLine.appendChild(bookPages);
        thirdLine.appendChild(read);
        thirdLine.appendChild(readOption);
        readOption.appendChild(readOptionIn);
    }

    // Give the delete buttons functionality to remove books
    let deleteButtons = document.querySelectorAll(".delete-button");
    deleteButtons.forEach(deleteButton => deleteButton.addEventListener('click', (e) => {
        e.target.parentNode.remove(); // Remove the node
        myLibrary.splice(deleteButton.getAttribute('data-id'), 1, true); // Remove the book object from the array
    }
    ));

    // Give the read option button functionality to change read status and style when clicked
    let readOptions = document.querySelectorAll(".read-option-button");
    readOptions.forEach(readOption => readOption.addEventListener('click', () => {
        let readOptionIn = readOption.firstChild;
        if (myLibrary[parseInt(readOption.getAttribute('data-id'))].isRead == false) {
            readOption.style.justifyContent = "end";
            readOption.style.backgroundColor = "#ffeba7";
            readOptionIn.style.backgroundColor = "#102770";
            readOption.style.boxShadow = "box-shadow: 0 8px 24px 0 rgb(255 235 167 / 20%)";
            myLibrary[parseInt(readOption.getAttribute('data-id'))].isRead = true;
        } else {
            readOption.style.justifyContent = "start";
            readOption.style.backgroundColor = "gray";
            readOptionIn.style.backgroundColor = "#1f2029";
            readOption.style.boxShadow = "box-shadow: none";
            myLibrary[parseInt(readOption.getAttribute('data-id'))].isRead = false;
        }
    }));

}

const newBookButton = document.querySelector('#new-book-button');
newBookButton.addEventListener('click', () => {
    let form = document.createElement('form');
    let formTitle = document.createElement('h4');
    formTitle.innerHTML = "New book info";
    formTitle.classList.add('form-title');

    // Title
    let title = document.createElement('input');
    title.setAttribute("type", "text");
    title.setAttribute("id", "title");
    title.setAttribute("placeholder", "Title");
    
    // Author
    let author = document.createElement('input');
    author.setAttribute("type", "text");
    author.setAttribute("id", "author");
    author.setAttribute("placeholder", "Author");
    
    // Pages
    let pages = document.createElement('input');
    pages.setAttribute("type", "number");
    pages.setAttribute("id", "pages");
    pages.setAttribute("placeholder", "Number of pages")

    // Submit
    let submit = document.createElement('input');
    submit.setAttribute("type","submit");
    submit.setAttribute("value", "SUBMIT");
    submit.classList.add('submit-button');

    let body = document.querySelector('body');
    body.appendChild(form);
    form.appendChild(formTitle);
    form.appendChild(title);
    form.appendChild(author);
    form.appendChild(pages);
    form.appendChild(submit);


    // This eventListener prevents the page to be refreshed after the submit button is clicked
    form.addEventListener('submit', (e) => {
        e.preventDefault();
    } );

    form.addEventListener('submit', () => {
        let cards = document.querySelectorAll('.card');
        cards.forEach(card => card.remove());
        let values = [];
        form.querySelectorAll('input').forEach(field => values.push(field.value));
        let newBook = new Book(...values);
        myLibrary.push(newBook);
        newBook.id = myLibrary.indexOf(newBook);
        showBooks(); 
        form.remove();
    });
});

